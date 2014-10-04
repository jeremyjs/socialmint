/*
 Highstock JS v2.0.4 (2014-09-02)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function() {
    function s(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }

    function y() {
        var a, b = arguments,
            c, d = {},
            e = function(a, b) {
                var c, d;
                typeof a !== "object" && (a = {});
                for (d in b) b.hasOwnProperty(d) && (c = b[d], a[d] = c && typeof c === "object" && Object.prototype.toString.call(c) !== "[object Array]" && d !== "renderTo" && typeof c.nodeType !== "number" ? e(a[d] || {}, c) : b[d]);
                return a
            };
        b[0] === !0 && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }

    function H(a, b) {
        return parseInt(a, b ||
            10)
    }

    function Sa(a) {
        return typeof a === "string"
    }

    function ha(a) {
        return a && typeof a === "object"
    }

    function Ja(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function pa(a) {
        return typeof a === "number"
    }

    function Ka(a) {
        return X.log(a) / X.LN10
    }

    function sa(a) {
        return X.pow(10, a)
    }

    function ta(a, b) {
        for (var c = a.length; c--;)
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }

    function u(a) {
        return a !== r && a !== null
    }

    function Y(a, b, c) {
        var d, e;
        if (Sa(b)) u(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (u(b) &&
            ha(b))
            for (d in b) a.setAttribute(d, b[d]);
        return e
    }

    function qa(a) {
        return Ja(a) ? a : [a]
    }

    function q() {
        var a = arguments,
            b, c, d = a.length;
        for (b = 0; b < d; b++)
            if (c = a[b], c !== r && c !== null) return c
    }

    function K(a, b) {
        if (La && !ea && b && b.opacity !== r) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        s(a.style, b)
    }

    function aa(a, b, c, d, e) {
        a = E.createElement(a);
        b && s(a, b);
        e && K(a, {
            padding: 0,
            border: $,
            margin: 0
        });
        c && K(a, c);
        d && d.appendChild(a);
        return a
    }

    function ia(a, b) {
        var c = function() {
            return r
        };
        c.prototype = new a;
        s(c.prototype, b);
        return c
    }

    function Da(a,
        b, c, d) {
        var e = N.numberFormat,
            f = F.lang,
            g = +a || 0,
            h = b === -1 ? (g.toString().split(".")[1] || "").length : isNaN(b = P(b)) ? 2 : b,
            i = c === void 0 ? f.decimalPoint : c,
            f = d === void 0 ? f.thousandsSep : d,
            j = g < 0 ? "-" : "",
            k = String(H(g = P(g).toFixed(h))),
            l = k.length > 3 ? k.length % 3 : 0;
        return e !== Da ? e(a, b, c, d) : j + (l ? k.substr(0, l) + f : "") + k.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + f) + (h ? i + P(g - k).toFixed(h).slice(2) : "")
    }

    function Ta(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function Q(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a)
        }
    }

    function Ma(a, b) {
        for (var c = "{", d = !1, e, f, g, h, i, j = [];
            (c = a.indexOf(c)) !== -1;) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                i = g.length;
                e = b;
                for (h = 0; h < i; h++) e = e[g[h]];
                if (f.length) f = f.join(":"), g = /\.([0-9])/, h = F.lang, i = void 0, /f$/.test(f) ? (i = (i = f.match(g)) ? i[1] : -1, e !== null && (e = Da(e, i, h.decimalPoint, f.indexOf(",") > -1 ? h.thousandsSep : ""))) : e = xa(f, e)
            }
            j.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        j.push(a);
        return j.join("")
    }

    function vb(a) {
        return X.pow(10, V(X.log(a) /
            X.LN10))
    }

    function wb(a, b, c, d) {
        var e, c = q(c, 1);
        e = a / c;
        b || (b = [1, 2, 2.5, 5, 10], d === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
        for (d = 0; d < b.length; d++)
            if (a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2) break;
        a *= c;
        return a
    }

    function xb(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return d === 0 ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++) delete a[e].ss_i
    }

    function Ua(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function Ea(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function Na(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }

    function Va(a) {
        kb || (kb = aa(Wa));
        a && kb.appendChild(a);
        kb.innerHTML = ""
    }

    function ja(a) {
        return parseFloat(a.toPrecision(14))
    }

    function ab(a, b) {
        Fa = q(a, b.animation)
    }

    function Mb() {
        var a = F.global.useUTC,
            b = a ? "getUTC" : "get",
            c = a ? "setUTC" : "set";
        ca = F.global.Date || window.Date;
        Oa = (a && F.global.timezoneOffset || 0) * 6E4;
        lb = a ? ca.UTC : function(a, b, c, g, h, i) {
            return (new ca(a, b, q(c, 1), q(g, 0), q(h, 0), q(i, 0))).getTime()
        };
        yb = b + "Minutes";
        zb = b +
            "Hours";
        Ab = b + "Day";
        Xa = b + "Date";
        mb = b + "Month";
        nb = b + "FullYear";
        Nb = c + "Minutes";
        Ob = c + "Hours";
        Bb = c + "Date";
        Pb = c + "Month";
        Qb = c + "FullYear"
    }

    function Z() {}

    function bb(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        !c && !d && this.addLabel()
    }

    function D() {
        this.init.apply(this, arguments)
    }

    function ya() {
        this.init.apply(this, arguments)
    }

    function Rb(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.total = null;
        this.points = {};
        this.stack = e;
        this.alignOptions = {
            align: b.align ||
                (f ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"),
            y: q(b.y, f ? 4 : c ? 14 : -6),
            x: q(b.x, f ? c ? -6 : 6 : 0)
        };
        this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    }

    function Cb(a) {
        var b = a.options,
            c = b.navigator,
            d = c.enabled,
            b = b.scrollbar,
            e = b.enabled,
            f = d ? c.height : 0,
            g = e ? b.height : 0;
        this.handles = [];
        this.scrollbarButtons = [];
        this.elementsToDestroy = [];
        this.chart = a;
        this.setBaseSeries();
        this.height = f;
        this.scrollbarHeight = g;
        this.scrollbarEnabled = e;
        this.navigatorEnabled = d;
        this.navigatorOptions =
            c;
        this.scrollbarOptions = b;
        this.outlineHeight = f + g;
        this.init()
    }

    function Db(a) {
        this.init(a)
    }
    var r, E = document,
        S = window,
        X = Math,
        t = X.round,
        V = X.floor,
        Ya = X.ceil,
        v = X.max,
        A = X.min,
        P = X.abs,
        fa = X.cos,
        ka = X.sin,
        ua = X.PI,
        Pa = ua * 2 / 360,
        Ga = navigator.userAgent,
        Sb = S.opera,
        La = /msie/i.test(Ga) && !Sb,
        ob = E.documentMode === 8,
        Eb = /AppleWebKit/.test(Ga),
        cb = /Firefox/.test(Ga),
        fb = /(Mobile|Android|Windows Phone)/.test(Ga),
        Ha = "http://www.w3.org/2000/svg",
        ea = !!E.createElementNS && !!E.createElementNS(Ha, "svg").createSVGRect,
        Yb = cb && parseInt(Ga.split("Firefox/")[1],
            10) < 4,
        la = !ea && !La && !!E.createElement("canvas").getContext,
        Za, db, Tb = {},
        Fb = 0,
        kb, F, xa, Fa, Gb, G, ma, ra = function() {
            return r
        },
        ba = [],
        gb = 0,
        Wa = "div",
        $ = "none",
        Zb = /^[0-9]+$/,
        $b = "stroke-width",
        ca, lb, Oa, yb, zb, Ab, Xa, mb, nb, Nb, Ob, Bb, Pb, Qb, B = {},
        N;
    S.Highcharts ? ma(16, !0) : N = S.Highcharts = {};
    xa = function(a, b, c) {
        if (!u(b) || isNaN(b)) return "Invalid date";
        var a = q(a, "%Y-%m-%d %H:%M:%S"),
            d = new ca(b - Oa),
            e, f = d[zb](),
            g = d[Ab](),
            h = d[Xa](),
            i = d[mb](),
            j = d[nb](),
            k = F.lang,
            l = k.weekdays,
            d = s({
                a: l[g].substr(0, 3),
                A: l[g],
                d: Ta(h),
                e: h,
                b: k.shortMonths[i],
                B: k.months[i],
                m: Ta(i + 1),
                y: j.toString().substr(2, 2),
                Y: j,
                H: Ta(f),
                I: Ta(f % 12 || 12),
                l: f % 12 || 12,
                M: Ta(d[yb]()),
                p: f < 12 ? "AM" : "PM",
                P: f < 12 ? "am" : "pm",
                S: Ta(d.getSeconds()),
                L: Ta(t(b % 1E3), 3)
            }, N.dateFormats);
        for (e in d)
            for (; a.indexOf("%" + e) !== -1;) a = a.replace("%" + e, typeof d[e] === "function" ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    ma = function(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        S.console && console.log(c)
    };
    G = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 26784E5,
        year: 31556952E3
    };
    Gb = {
        init: function(a, b, c) {
            var b = b || "",
                d = a.shift,
                e = b.indexOf("C") > -1,
                f = e ? 7 : 3,
                g, b = b.split(" "),
                c = [].concat(c),
                h, i, j = function(a) {
                    for (g = a.length; g--;) a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
                };
            e && (j(b), j(c));
            a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length)
                for (; d--;) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f),
                    e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return [b, c]
        },
        step: function(a, b, c, d) {
            var e = [],
                f = a.length;
            if (c === 1) e = d;
            else if (f === b.length && c < 1)
                for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
            else e = b;
            return e
        }
    };
    (function(a) {
        S.HighchartsAdapter = S.HighchartsAdapter || a && {
            init: function(b) {
                var c = a.fx;
                a.extend(a.easing, {
                    easeOutQuad: function(a, b, c, g, h) {
                        return -g * (b /= h) * (b - 2) + c
                    }
                });
                a.each(["cur", "_default", "width", "height", "opacity"], function(b, e) {
                    var f =
                        c.step,
                        g;
                    e === "cur" ? f = c.prototype : e === "_default" && a.Tween && (f = a.Tween.propHooks[e], e = "set");
                    (g = f[e]) && (f[e] = function(a) {
                        var c, a = b ? a : this;
                        if (a.prop !== "align") return c = a.elem, c.attr ? c.attr(a.prop, e === "cur" ? r : a.now) : g.apply(this, arguments)
                    })
                });
                Q(a.cssHooks.opacity, "get", function(a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c)
                });
                this.addAnimSetter("d", function(a) {
                    var c = a.elem,
                        f;
                    if (!a.started) f = b.init(c, c.d, c.toD), a.start = f[0], a.end = f[1], a.started = !0;
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                });
                this.each =
                    Array.prototype.forEach ? function(a, b) {
                        return Array.prototype.forEach.call(a, b)
                    } : function(a, b) {
                        var c, g = a.length;
                        for (c = 0; c < g; c++)
                            if (b.call(a[c], a[c], c, a) === !1) return c
                    };
                a.fn.highcharts = function() {
                    var a = "Chart",
                        b = arguments,
                        c, g;
                    if (this[0]) {
                        Sa(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1));
                        c = b[0];
                        if (c !== r) c.chart = c.chart || {}, c.chart.renderTo = this[0], new N[a](c, b[1]), g = this;
                        c === r && (g = ba[Y(this[0], "data-highcharts-chart")])
                    }
                    return g
                }
            },
            addAnimSetter: function(b, c) {
                a.Tween ? a.Tween.propHooks[b] = {
                        set: c
                    } : a.fx.step[b] =
                    c
            },
            getScript: a.getScript,
            inArray: a.inArray,
            adapterRun: function(b, c) {
                return a(b)[c]()
            },
            grep: a.grep,
            map: function(a, c) {
                for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = c.call(a[e], a[e], e, a);
                return d
            },
            offset: function(b) {
                return a(b).offset()
            },
            addEvent: function(b, c, d) {
                a(b).bind(c, d)
            },
            removeEvent: function(b, c, d) {
                var e = E.removeEventListener ? "removeEventListener" : "detachEvent";
                E[e] && b && !b[e] && (b[e] = function() {});
                a(b).unbind(c, d)
            },
            fireEvent: function(b, c, d, e) {
                var f = a.Event(c),
                    g = "detached" + c,
                    h;
                !La && d && (delete d.layerX,
                    delete d.layerY, delete d.returnValue);
                s(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault", "stopPropagation"], function(a, b) {
                    var c = f[b];
                    f[b] = function() {
                        try {
                            c.call(f)
                        } catch (a) {
                            b === "preventDefault" && (h = !0)
                        }
                    }
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                e && !f.isDefaultPrevented() && !h && e(f)
            },
            washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                if (c.pageX === r) c.pageX = a.pageX, c.pageY = a.pageY;
                return c
            },
            animate: function(b, c, d) {
                var e = a(b);
                if (!b.style) b.style = {};
                if (c.d) b.toD = c.d, c.d = 1;
                e.stop();
                c.opacity !==
                    r && b.attr && (c.opacity += "px");
                b.hasAnim = 1;
                e.animate(c, d)
            },
            stop: function(b) {
                b.hasAnim && a(b).stop()
            }
        }
    })(S.jQuery);
    var L = S.HighchartsAdapter,
        T = L || {};
    L && L.init.call(L, Gb);
    var pb = T.adapterRun,
        ac = T.getScript,
        Qa = T.inArray,
        p = T.each,
        qb = T.grep,
        bc = T.offset,
        za = T.map,
        z = T.addEvent,
        U = T.removeEvent,
        J = T.fireEvent,
        cc = T.washMouseEvent,
        rb = T.animate,
        hb = T.stop,
        T = {
            enabled: !0,
            x: 0,
            y: 15,
            style: {
                color: "#606060",
                cursor: "default",
                fontSize: "11px"
            }
        };
    F = {
        colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#8085e8,#8d4653,#91e8e1".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/stock/2.0.4/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/stock/2.0.4/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: y(T, {
                    align: "center",
                    enabled: !1,
                    formatter: function() {
                        return this.y === null ? "" : Da(this.y, -1)
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: 0.25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1E3
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "45%"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: 0.5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: ea,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: fb ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var W = F.plotOptions,
        L = W.line;
    Mb();
    var dc = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        ec = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
        fc = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        Ia = function(a) {
            var b = [],
                c, d;
            (function(a) {
                a && a.stops ? d = za(a.stops, function(a) {
                    return Ia(a[1])
                }) : (c = dc.exec(a)) ? b = [H(c[1]), H(c[2]), H(c[3]), parseFloat(c[4], 10)] : (c = ec.exec(a)) ? b = [H(c[1],
                    16), H(c[2], 16), H(c[3], 16), 1] : (c = fc.exec(a)) && (b = [H(c[1]), H(c[2]), H(c[3]), 1])
            })(a);
            return {
                get: function(c) {
                    var f;
                    d ? (f = y(a), f.stops = [].concat(f.stops), p(d, function(a, b) {
                        f.stops[b] = [f.stops[b][0], a.get(c)]
                    })) : f = b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a;
                    return f
                },
                brighten: function(a) {
                    if (d) p(d, function(b) {
                        b.brighten(a)
                    });
                    else if (pa(a) && a !== 0) {
                        var c;
                        for (c = 0; c < 3; c++) b[c] += H(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
                    }
                    return this
                },
                rgba: b,
                setOpacity: function(a) {
                    b[3] =
                        a;
                    return this
                }
            }
        };
    Z.prototype = {
        opacity: 1,
        textProps: "fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow,HcTextStroke".split(","),
        init: function(a, b) {
            this.element = b === "span" ? aa(b) : E.createElementNS(Ha, b);
            this.renderer = a
        },
        animate: function(a, b, c) {
            b = q(b, Fa, !0);
            hb(this);
            if (b) {
                b = y(b, {});
                if (c) b.complete = c;
                rb(this, a, b)
            } else this.attr(a), c && c();
            return this
        },
        colorGradient: function(a, b, c) {
            var d = this.renderer,
                e, f, g, h, i, j, k, l, m, n, o = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient &&
                (f = "radialGradient");
            if (f) {
                g = a[f];
                h = d.gradients;
                j = a.stops;
                m = c.radialReference;
                Ja(g) && (a[f] = g = {
                    x1: g[0],
                    y1: g[1],
                    x2: g[2],
                    y2: g[3],
                    gradientUnits: "userSpaceOnUse"
                });
                f === "radialGradient" && m && !u(g.gradientUnits) && (g = y(g, {
                    cx: m[0] - m[2] / 2 + g.cx * m[2],
                    cy: m[1] - m[2] / 2 + g.cy * m[2],
                    r: g.r * m[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (n in g) n !== "id" && o.push(n, g[n]);
                for (n in j) o.push(j[n]);
                o = o.join(",");
                h[o] ? a = h[o].attr("id") : (g.id = a = "highcharts-" + Fb++, h[o] = i = d.createElement(f).attr(g).add(d.defs), i.stops = [], p(j, function(a) {
                    a[1].indexOf("rgba") ===
                        0 ? (e = Ia(a[1]), k = e.get("rgb"), l = e.get("a")) : (k = a[1], l = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": k,
                        "stop-opacity": l
                    }).add(i);
                    i.stops.push(a)
                }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")")
            }
        },
        attr: function(a, b) {
            var c, d, e = this.element,
                f, g = this,
                h;
            typeof a === "string" && b !== r && (c = a, a = {}, a[c] = b);
            if (typeof a === "string") g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (c in a) {
                    d = a[c];
                    h = !1;
                    this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (f || (this.symbolAttr(a),
                        f = !0), h = !0);
                    if (this.rotation && (c === "x" || c === "y")) this.doTransform = !0;
                    h || (this[c + "Setter"] || this._defaultSetter).call(this, d, c, e);
                    this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) && this.updateShadows(c, d)
                }
                if (this.doTransform) this.updateTransform(), this.doTransform = !1
            }
            return g
        },
        updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a, a === "height" ? v(b - (c[d].cutHeight || 0), 0) : a === "d" ? this.d : b)
        },
        addClass: function(a) {
            var b = this.element,
                c = Y(b, "class") ||
                "";
            c.indexOf(a) === -1 && Y(b, "class", c + " " + a);
            return this
        },
        symbolAttr: function(a) {
            var b = this;
            p("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(c) {
                b[c] = q(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : $)
        },
        crisp: function(a) {
            var b, c = {},
                d, e = a.strokeWidth || this.strokeWidth || 0;
            d = t(e) % 2 / 2;
            a.x = V(a.x || this.x || 0) + d;
            a.y = V(a.y || this.y || 0) + d;
            a.width = V((a.width || this.width ||
                0) - 2 * d);
            a.height = V((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        },
        css: function(a) {
            var b = this.styles,
                c = {},
                d = this.element,
                e, f, g = "";
            e = !b;
            if (a && a.color) a.fill = a.color;
            if (b)
                for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && d.nodeName.toLowerCase() === "text" && H(a.width);
                b && (a = s(b, c));
                this.styles = a;
                e && (la || !ea && this.renderer.forExport) && delete a.width;
                if (La && !ea) K(this.element, a);
                else {
                    b = function(a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    Y(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        },
        on: function(a, b) {
            var c = this,
                d = c.element;
            db && a === "click" ? (d.ontouchstart = function(a) {
                c.touchEventFired = ca.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function(a) {
                (Ga.indexOf("Android") === -1 || ca.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            this.element.radialReference = a;
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        updateTransform: function() {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                c = this.scaleX,
                d = this.scaleY,
                e = this.inverted,
                f = this.rotation,
                g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (u(c) || u(d)) && a.push("scale(" + q(c, 1) + " " + q(d, 1) + ")");
            a.length && g.setAttribute("transform",
                a.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || Sa(c)) this.alignTo = d = c || "renderer", ta(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = q(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[d];
            h[b ? "translateX" : "x"] = t(f);
            if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[e] || 1);
            h[b ? "translateY" : "y"] = t(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function() {
            var a = this.bBox,
                b = this.renderer,
                c, d, e = this.rotation;
            c = this.element;
            var f = this.styles,
                g = e * Pa;
            d = this.textStr;
            var h;
            if (d === "" || Zb.test(d)) h = "num." + d.toString().length + (f ? "|" + f.fontSize + "|" + f.fontFamily : "");
            h && (a = b.cache[h]);
            if (!a) {
                if (c.namespaceURI === Ha || b.forExport) {
                    try {
                        a =
                            c.getBBox ? s({}, c.getBBox()) : {
                                width: c.offsetWidth,
                                height: c.offsetHeight
                            }
                    } catch (i) {}
                    if (!a || a.width < 0) a = {
                        width: 0,
                        height: 0
                    }
                } else a = this.htmlGetBBox();
                if (b.isSVG) {
                    c = a.width;
                    d = a.height;
                    if (La && f && f.fontSize === "11px" && d.toPrecision(3) === "16.9") a.height = d = 14;
                    if (e) a.width = P(d * ka(g)) + P(c * fa(g)), a.height = P(d * fa(g)) + P(c * ka(g))
                }
                this.bBox = a;
                h && (b.cache[h] = a)
            }
            return a
        },
        show: function(a) {
            a && this.element.namespaceURI === Ha ? this.element.removeAttribute("visibility") : this.attr({
                visibility: a ? "inherit" : "visible"
            });
            return this
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({
                opacity: 0
            }, {
                duration: a || 150,
                complete: function() {
                    b.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(a) {
            var b = this.renderer,
                c = a || b,
                d = c.element || b.box,
                e = this.element,
                f = this.zIndex,
                g, h;
            if (a) this.parentGroup = a;
            this.parentInverted = a && a.inverted;
            this.textStr !== void 0 && b.buildText(this);
            if (f) c.handleZ = !0, f = H(f);
            if (c.handleZ) {
                a = d.childNodes;
                for (g = 0; g < a.length; g++)
                    if (b = a[g], c = Y(b, "zIndex"), b !== e && (H(c) > f || !u(f) && u(c))) {
                        d.insertBefore(e,
                            b);
                        h = !0;
                        break
                    }
            }
            h || d.appendChild(e);
            this.added = !0;
            if (this.onAdd) this.onAdd();
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a = this,
                b = a.element || {},
                c = a.shadows,
                d = a.renderer.isSVG && b.nodeName === "SPAN" && a.parentGroup,
                e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            hb(a);
            if (a.clipPath) a.clipPath = a.clipPath.destroy();
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c &&
                p(c, function(b) {
                    a.safeRemoveChild(b)
                }); d && d.div && d.div.childNodes.length === 0;) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && ta(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, i, j, k;
            if (a) {
                i = q(a.width, 3);
                j = (a.opacity || 0.15) / i;
                k = this.parentInverted ? "(-1,-1)" : "(" + q(a.offsetX, 1) + ", " + q(a.offsetY, 1) + ")";
                for (e = 1; e <= i; e++) {
                    f = g.cloneNode(0);
                    h = i * 2 + 1 - 2 * e;
                    Y(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": j *
                            e,
                        "stroke-width": h,
                        transform: "translate" + k,
                        fill: $
                    });
                    if (c) Y(f, "height", v(Y(f, "height") - h, 0)), f.cutHeight = h;
                    b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
                    d.push(f)
                }
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            this.element.nodeName === "circle" && (a = {
                x: "cx",
                y: "cy"
            }[a] || a);
            return this._defaultGetter(a)
        },
        _defaultGetter: function(a) {
            a = q(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        },
        dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        },
        dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--;) a[b] = H(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            }[a])
        },
        opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        },
        titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = E.createElementNS(Ha, "title"), this.element.appendChild(b));
            b.textContent = q(a, "").replace(/<[^>]*>/g, "")
        },
        textSetter: function(a) {
            if (a !== this.textStr) delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this)
        },
        fillSetter: function(a, b,
            c) {
            typeof a === "string" ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        zIndexSetter: function(a, b, c) {
            c.setAttribute(b, a);
            this[b] = a
        },
        _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }
    };
    Z.prototype.yGetter = Z.prototype.xGetter;
    Z.prototype.translateXSetter = Z.prototype.translateYSetter = Z.prototype.rotationSetter = Z.prototype.verticalAlignSetter = Z.prototype.scaleXSetter = Z.prototype.scaleYSetter = function(a, b) {
        this[b] = a;
        this.doTransform = !0
    };
    Z.prototype["stroke-widthSetter"] = Z.prototype.strokeSetter = function(a,
        b, c) {
        this[b] = a;
        if (this.stroke && this["stroke-width"]) this.strokeWidth = this["stroke-width"], Z.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0;
        else if (b === "stroke-width" && a === 0 && this.hasStroke) c.removeAttribute("stroke"), this.hasStroke = !1
    };
    var na = function() {
        this.init.apply(this, arguments)
    };
    na.prototype = {
        Element: Z,
        init: function(a, b, c, d, e) {
            var f = location,
                g, d = this.createElement("svg").attr({
                    version: "1.1"
                }).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g);
            a.innerHTML.indexOf("xmlns") === -1 && Y(g, "xmlns", Ha);
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (cb || Eb) && E.getElementsByTagName("base").length ? f.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(E.createTextNode("Created with Highstock 2.0.4"));
            this.defs = this.createElement("defs").add();
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var h;
            if (cb && a.getBoundingClientRect) this.subPixelFix = b = function() {
                K(a, {
                    left: 0,
                    top: 0
                });
                h = a.getBoundingClientRect();
                K(a, {
                    left: Ya(h.left) - h.left + "px",
                    top: Ya(h.top) - h.top + "px"
                })
            }, b(), z(S, "resize", b)
        },
        getStyle: function(a) {
            return this.style = s({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, a)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            Na(this.gradients || {});
            this.gradients = null;
            if (a) this.defs = a.destroy();
            this.subPixelFix && U(S, "resize", this.subPixelFix);
            return this.alignedObjects = null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = q(a.textStr, "").toString(), f = e.indexOf("<") !== -1, g = b.childNodes, h, i, j = Y(b, "x"), k = a.styles, l = a.textWidth, m = k && k.lineHeight, n = k && k.HcTextStroke, o = g.length, x = function(a) {
                    return m ? H(m) : c.fontMetrics(/(px|em)$/.test(a &&
                        a.style.fontSize) ? a.style.fontSize : k && k.fontSize || c.style.fontSize || 12, a).h
                }; o--;) b.removeChild(g[o]);
            !f && !n && e.indexOf(" ") === -1 ? b.appendChild(E.createTextNode(e)) : (h = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, l && !a.added && this.box.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], e[e.length - 1] === "" && e.pop(), p(e, function(e,
                f) {
                var g, m = 0,
                    e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                p(g, function(e) {
                    if (e !== "" || g.length === 1) {
                        var n = {},
                            o = E.createElementNS(Ha, "tspan"),
                            I;
                        h.test(e) && (I = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), Y(o, "style", I));
                        i.test(e) && !d && (Y(o, "onclick", 'location.href="' + e.match(i)[1] + '"'), K(o, {
                            cursor: "pointer"
                        }));
                        e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        if (e !== " ") {
                            o.appendChild(E.createTextNode(e));
                            if (m) n.dx = 0;
                            else if (f &&
                                j !== null) n.x = j;
                            Y(o, n);
                            b.appendChild(o);
                            !m && f && (!ea && d && K(o, {
                                display: "block"
                            }), Y(o, "dy", x(o)));
                            if (l)
                                for (var e = e.replace(/([^\^])-/g, "$1- ").split(" "), n = g.length > 1 || e.length > 1 && k.whiteSpace !== "nowrap", q, p, r = k.HcHeight, t = [], u = x(o), Ub = 1; n && (e.length || t.length);) delete a.bBox, q = a.getBBox(), p = q.width, !ea && c.forExport && (p = c.measureSpanWidth(o.firstChild.data, a.styles)), q = p > l, !q || e.length === 1 ? (e = t, t = [], e.length && (Ub++, r && Ub * u > r ? (e = ["..."], a.attr("title", a.textStr)) : (o = E.createElementNS(Ha, "tspan"), Y(o, {
                                    dy: u,
                                    x: j
                                }), I && Y(o, "style", I), b.appendChild(o))), p > l && (l = p)) : (o.removeChild(o.firstChild), t.unshift(e.pop())), e.length && o.appendChild(E.createTextNode(e.join(" ").replace(/- /g, "-")));
                            m++
                        }
                    }
                })
            }))
        },
        button: function(a, b, c, d, e, f, g, h, i) {
            var j = this.label(a, b, c, i, null, null, null, null, "button"),
                k = 0,
                l, m, n, o, x, I, a = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                e = y({
                    "stroke-width": 1,
                    stroke: "#CCCCCC",
                    fill: {
                        linearGradient: a,
                        stops: [
                            [0, "#FEFEFE"],
                            [1, "#F6F6F6"]
                        ]
                    },
                    r: 2,
                    padding: 5,
                    style: {
                        color: "black"
                    }
                }, e);
            n = e.style;
            delete e.style;
            f = y(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#FFF"],
                        [1, "#ACF"]
                    ]
                }
            }, f);
            o = f.style;
            delete f.style;
            g = y(e, {
                stroke: "#68A",
                fill: {
                    linearGradient: a,
                    stops: [
                        [0, "#9BD"],
                        [1, "#CDF"]
                    ]
                }
            }, g);
            x = g.style;
            delete g.style;
            h = y(e, {
                style: {
                    color: "#CCC"
                }
            }, h);
            I = h.style;
            delete h.style;
            z(j.element, La ? "mouseover" : "mouseenter", function() {
                k !== 3 && j.attr(f).css(o)
            });
            z(j.element, La ? "mouseout" : "mouseleave", function() {
                k !== 3 && (l = [e, f, g][k], m = [n, o, x][k], j.attr(l).css(m))
            });
            j.setState = function(a) {
                (j.state = k = a) ? a === 2 ? j.attr(g).css(x) : a === 3 && j.attr(h).css(I):
                    j.attr(e).css(n)
            };
            return j.on("click", function() {
                k !== 3 && d.call(j)
            }).attr(e).css(s({
                cursor: "default"
            }, n))
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = t(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = t(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: $
            };
            Ja(a) ? b.d = a : ha(a) && s(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = ha(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy",
                    a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            if (ha(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            });
            a.r = c;
            return a
        },
        rect: function(a, b, c, d, e, f) {
            var e = ha(a) ? a.r : e,
                g = this.createElement("rect"),
                a = ha(a) ? a : a === r ? {} : {
                    x: a,
                    y: b,
                    width: v(c, 0),
                    height: v(d, 0)
                };
            if (f !== r) a.strokeWidth = f, a = g.crisp(a);
            if (e) a.r = e;
            g.rSetter = function(a) {
                Y(this.element, {
                    rx: a,
                    ry: a
                })
            };
            return g.attr(a)
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[q(c, !0) ? "animate" : "attr"]({
                    width: a,
                    height: b
                }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return u(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: $
            };
            arguments.length > 1 && s(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a,
            b, c, d, e, f) {
            var g, h = this.symbols[a],
                h = h && h(t(b), t(c), d, e, f),
                i = /^url\((.*?)\)$/,
                j, k;
            if (h) g = this.path(h), s(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && s(g, f);
            else if (i.test(a)) k = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(t((d - b[0]) / 2), t((e - b[1]) / 2)))
            }, j = a.match(i)[1], a = Tb[j] || f && f.width && f.height && [f.width, f.height], g = this.image(j).attr({
                x: b,
                y: c
            }), g.isImg = !0, a ? k(g, a) : (g.attr({
                width: 0,
                height: 0
            }), aa("img", {
                onload: function() {
                    k(g, Tb[j] = [this.width, this.height])
                },
                src: j
            }));
            return g
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = 0.166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            },
            square: function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start,
                    c = e.r || c || d,
                    g = e.end -
                    0.001,
                    d = e.innerR,
                    h = e.open,
                    i = fa(f),
                    j = ka(f),
                    k = fa(g),
                    g = ka(g),
                    e = e.end - f < ua ? 0 : 1;
                return ["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"]
            },
            callout: function(a, b, c, d, e) {
                var f = A(e && e.r || 0, c, d),
                    g = f + 6,
                    h = e && e.anchorX,
                    i = e && e.anchorY,
                    e = t(e.strokeWidth || 0) % 2 / 2;
                a += e;
                b += e;
                e = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
                h && h > c && i > b + g && i < b + d - g ? e.splice(13, 3,
                    "L", a + c, i - 6, a + c + 6, i, a + c, i + 6, a + c, b + d - f) : h && h < 0 && i > b + g && i < b + d - g ? e.splice(33, 3, "L", a, i + 6, a - 6, i, a, i - 6, a, b + f) : i && i > d && h > a + g && h < a + c - g ? e.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : i && i < 0 && h > a + g && h < a + c - g && e.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return e
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + Fb++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs),
                a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        },
        text: function(a, b, c, d) {
            var e = la || !ea && this.forExport,
                f = {};
            if (d && !this.forExport) return this.html(a,
                b, c);
            f.x = Math.round(b || 0);
            if (c) f.y = Math.round(c);
            if (a || a === 0) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({
                position: "absolute"
            });
            if (!d) a.xSetter = function(a, b, c) {
                var d = c.getElementsByTagName("tspan"),
                    e, f = c.getAttribute(b),
                    m;
                for (m = 0; m < d.length; m++) e = d[m], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            };
            return a
        },
        fontMetrics: function(a, b) {
            a = a || this.style.fontSize;
            if (b && S.getComputedStyle) b = b.element || b, a = S.getComputedStyle(b, "").fontSize;
            var a = /px/.test(a) ? H(a) : /em/.test(a) ?
                parseFloat(a) * 12 : 12,
                c = a < 24 ? a + 4 : t(a * 1.2),
                d = t(c * 0.8);
            return {
                h: c,
                b: d,
                f: a
            }
        },
        label: function(a, b, c, d, e, f, g, h, i) {
            function j() {
                var a, b;
                a = o.element.style;
                I = (v === void 0 || Hb === void 0 || n.styles.textAlign) && o.textStr && o.getBBox();
                n.width = (v || I.width || 0) + 2 * w + eb;
                n.height = (Hb || I.height || 0) + 2 * w;
                R = w + m.fontMetrics(a && a.fontSize, o).b;
                if (z) {
                    if (!x) a = t(-q * w), b = h ? -R : 0, n.box = x = d ? m.symbol(d, a, b, n.width, n.height, C) : m.rect(a, b, n.width, n.height, 0, C[$b]), x.attr("fill", $).add(n);
                    x.isImg || x.attr(s({
                            width: t(n.width),
                            height: t(n.height)
                        },
                        C));
                    C = null
                }
            }

            function k() {
                var a = n.styles,
                    a = a && a.textAlign,
                    b = eb + w * (1 - q),
                    c;
                c = h ? 0 : R;
                if (u(v) && I && (a === "center" || a === "right")) b += {
                    center: 0.5,
                    right: 1
                }[a] * (v - I.width);
                if (b !== o.x || c !== o.y) o.attr("x", b), c !== r && o.attr("y", c);
                o.x = b;
                o.y = c
            }

            function l(a, b) {
                x ? x.attr(a, b) : C[a] = b
            }
            var m = this,
                n = m.g(i),
                o = m.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                x, I, q = 0,
                w = 3,
                eb = 0,
                v, Hb, O, Ib, A = 0,
                C = {},
                R, z;
            n.onAdd = function() {
                o.add(n);
                n.attr({
                    text: a || a === 0 ? a : "",
                    x: b,
                    y: c
                });
                x && u(e) && n.attr({
                    anchorX: e,
                    anchorY: f
                })
            };
            n.widthSetter = function(a) {
                v = a
            };
            n.heightSetter =
                function(a) {
                    Hb = a
                };
            n.paddingSetter = function(a) {
                u(a) && a !== w && (w = a, k())
            };
            n.paddingLeftSetter = function(a) {
                u(a) && a !== eb && (eb = a, k())
            };
            n.alignSetter = function(a) {
                q = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[a]
            };
            n.textSetter = function(a) {
                a !== r && o.textSetter(a);
                j();
                k()
            };
            n["stroke-widthSetter"] = function(a, b) {
                a && (z = !0);
                A = a % 2 / 2;
                l(b, a)
            };
            n.strokeSetter = n.fillSetter = n.rSetter = function(a, b) {
                b === "fill" && a && (z = !0);
                l(b, a)
            };
            n.anchorXSetter = function(a, b) {
                e = a;
                l(b, a + A - O)
            };
            n.anchorYSetter = function(a, b) {
                f = a;
                l(b, a - Ib)
            };
            n.xSetter = function(a) {
                n.x =
                    a;
                q && (a -= q * ((v || I.width) + w));
                O = t(a);
                n.attr("translateX", O)
            };
            n.ySetter = function(a) {
                Ib = n.y = t(a);
                n.attr("translateY", Ib)
            };
            var E = n.css;
            return s(n, {
                css: function(a) {
                    if (a) {
                        var b = {},
                            a = y(a);
                        p(n.textProps, function(c) {
                            a[c] !== r && (b[c] = a[c], delete a[c])
                        });
                        o.css(b)
                    }
                    return E.call(n, a)
                },
                getBBox: function() {
                    return {
                        width: I.width + 2 * w,
                        height: I.height + 2 * w,
                        x: I.x - w,
                        y: I.y - w
                    }
                },
                shadow: function(a) {
                    x && x.shadow(a);
                    return n
                },
                destroy: function() {
                    U(n.element, "mouseenter");
                    U(n.element, "mouseleave");
                    o && (o = o.destroy());
                    x && (x = x.destroy());
                    Z.prototype.destroy.call(n);
                    n = m = j = k = l = null
                }
            })
        }
    };
    Za = na;
    s(Z.prototype, {
        htmlCss: function(a) {
            var b = this.element;
            if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform();
            this.styles = s(this.styles, a);
            K(this.element, a);
            return this
        },
        htmlGetBBox: function() {
            var a = this.element,
                b = this.bBox;
            if (!b) {
                if (a.nodeName === "text") a.style.position = "absolute";
                b = this.bBox = {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            }
            return b
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a =
                    this.renderer,
                    b = this.element,
                    c = this.translateX || 0,
                    d = this.translateY || 0,
                    e = this.x || 0,
                    f = this.y || 0,
                    g = this.textAlign || "left",
                    h = {
                        left: 0,
                        center: 0.5,
                        right: 1
                    }[g],
                    i = this.shadows;
                K(b, {
                    marginLeft: c,
                    marginTop: d
                });
                i && p(i, function(a) {
                    K(a, {
                        marginLeft: c + 1,
                        marginTop: d + 1
                    })
                });
                this.inverted && p(b.childNodes, function(c) {
                    a.invertChild(c, b)
                });
                if (b.tagName === "SPAN") {
                    var j = this.rotation,
                        k, l = H(this.textWidth),
                        m = [j, g, b.innerHTML, this.textWidth].join(",");
                    if (m !== this.cTT) {
                        k = a.fontMetrics(b.style.fontSize).b;
                        u(j) && this.setSpanRotation(j,
                            h, k);
                        i = q(this.elemWidth, b.offsetWidth);
                        if (i > l && /[ \-]/.test(b.textContent || b.innerText)) K(b, {
                            width: l + "px",
                            display: "block",
                            whiteSpace: "normal"
                        }), i = l;
                        this.getSpanCorrection(i, k, h, j, g)
                    }
                    K(b, {
                        left: e + (this.xCorr || 0) + "px",
                        top: f + (this.yCorr || 0) + "px"
                    });
                    if (Eb) k = b.offsetHeight;
                    this.cTT = m
                }
            } else this.alignOnAdd = !0
        },
        setSpanRotation: function(a, b, c) {
            var d = {},
                e = La ? "-ms-transform" : Eb ? "-webkit-transform" : cb ? "MozTransform" : Sb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (cb ? "Origin" : "-origin")] = d.transformOrigin =
                b * 100 + "% " + c + "px";
            K(this.element, d)
        },
        getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }
    });
    s(na.prototype, {
        html: function(a, b, c) {
            var d = this.createElement("span"),
                e = d.element,
                f = d.renderer;
            d.textSetter = function(a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a
            };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function(a, b) {
                b === "align" && (b = "textAlign");
                d[b] = a;
                d.htmlUpdateTransform()
            };
            d.attr({
                text: a,
                x: t(b),
                y: t(c)
            }).css({
                position: "absolute",
                whiteSpace: "nowrap",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            });
            d.css = d.htmlCss;
            if (f.isSVG) d.add = function(a) {
                var b, c = f.box.parentNode,
                    j = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a;) j.push(a), a = a.parentGroup;
                        p(j.reverse(), function(a) {
                            var d;
                            b = a.div = a.div || aa(Wa, {
                                className: Y(a.element, "class")
                            }, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY || 0) + "px"
                            }, b || c);
                            d = b.style;
                            s(a, {
                                translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                },
                                translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                },
                                visibilitySetter: function(a, b) {
                                    d[b] = a
                                }
                            })
                        })
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            };
            return d
        }
    });
    var ib, ga;
    if (!ea && !la) ga = {
        init: function(a, b) {
            var c = ["<", b, ' filled="f" stroked="f"'],
                d = ["position: ", "absolute", ";"],
                e = b === Wa;
            (b === "shape" || e) && d.push("left:0;top:0;width:1px;height:1px;");
            d.push("visibility: ", e ? "hidden" : "visible");
            c.push(' style="', d.join(""), '"/>');
            if (b) c = e || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = aa(c);
            this.renderer = a
        },
        add: function(a) {
            var b = this.renderer,
                c = this.element,
                d = b.box,
                d = a ? a.element || a : d;
            a && a.inverted && b.invertChild(c, d);
            d.appendChild(c);
            this.added = !0;
            this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
            if (this.onAdd) this.onAdd();
            return this
        },
        updateTransform: Z.prototype.htmlUpdateTransform,
        setSpanRotation: function() {
            var a = this.rotation,
                b = fa(a * Pa),
                c = ka(a * Pa);
            K(this.element, {
                filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : $
            })
        },
        getSpanCorrection: function(a, b, c, d, e) {
            var f = d ? fa(d * Pa) : 1,
                g = d ? ka(d * Pa) : 0,
                h = q(this.elemHeight, this.element.offsetHeight),
                i;
            this.xCorr = f < 0 && -a;
            this.yCorr = g < 0 && -h;
            i = f * g < 0;
            this.xCorr += g * b * (i ? 1 - c : c);
            this.yCorr -= f * b * (d ? i ? c : 1 - c : 1);
            e && e !== "left" && (this.xCorr -= a * c * (f < 0 ? -1 : 1), d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)), K(this.element, {
                textAlign: e
            }))
        },
        pathToVML: function(a) {
            for (var b = a.length, c = []; b--;)
                if (pa(a[b])) c[b] = t(a[b] * 10) - 5;
                else if (a[b] === "Z") c[b] = "x";
            else if (c[b] = a[b], a.isArc && (a[b] === "wa" || a[b] === "at")) c[b +
                5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1);
            return c.join(" ") || "x"
        },
        clip: function(a) {
            var b = this,
                c;
            a ? (c = a.members, ta(c, b), c.push(b), b.destroyClip = function() {
                ta(c, b)
            }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {
                clip: ob ? "inherit" : "rect(auto)"
            });
            return b.css(a)
        },
        css: Z.prototype.htmlCss,
        safeRemoveChild: function(a) {
            a.parentNode && Va(a)
        },
        destroy: function() {
            this.destroyClip && this.destroyClip();
            return Z.prototype.destroy.apply(this)
        },
        on: function(a, b) {
            this.element["on" +
                a] = function() {
                var a = S.event;
                a.target = a.srcElement;
                b(a)
            };
            return this
        },
        cutOffPath: function(a, b) {
            var c, a = a.split(/[ ,]/);
            c = a.length;
            if (c === 9 || c === 11) a[c - 4] = a[c - 2] = H(a[c - 2]) - 10 * b;
            return a.join(" ")
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f = this.element,
                g = this.renderer,
                h, i = f.style,
                j, k = f.path,
                l, m, n, o;
            k && typeof k.value !== "string" && (k = "x");
            m = k;
            if (a) {
                n = q(a.width, 3);
                o = (a.opacity || 0.15) / n;
                for (e = 1; e <= 3; e++) {
                    l = n * 2 + 1 - 2 * e;
                    c && (m = this.cutOffPath(k.value, l + 0.5));
                    j = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="',
                        m, '" coordsize="10 10" style="', f.style.cssText, '" />'
                    ];
                    h = aa(g.prepVML(j), null, {
                        left: H(i.left) + q(a.offsetX, 1),
                        top: H(i.top) + q(a.offsetY, 1)
                    });
                    if (c) h.cutOff = l + 1;
                    j = ['<stroke color="', a.color || "black", '" opacity="', o * e, '"/>'];
                    aa(g.prepVML(j), null, null, h);
                    b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                    d.push(h)
                }
                this.shadows = d
            }
            return this
        },
        updateShadows: ra,
        setAttr: function(a, b) {
            ob ? this.element[a] = b : this.element.setAttribute(a, b)
        },
        classSetter: function(a) {
            this.element.className = a
        },
        dashstyleSetter: function(a,
            b, c) {
            (c.getElementsByTagName("stroke")[0] || aa(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
            this[b] = a
        },
        dSetter: function(a, b, c) {
            var d = this.shadows,
                a = a || [];
            this.d = a.join && a.join(" ");
            c.path = a = this.pathToVML(a);
            if (d)
                for (c = d.length; c--;) d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
            this.setAttr(b, a)
        },
        fillSetter: function(a, b, c) {
            var d = c.nodeName;
            if (d === "SPAN") c.style.color = a;
            else if (d !== "IMG") c.filled = a !== $, this.setAttr("fillcolor", this.renderer.color(a, c, b, this))
        },
        opacitySetter: ra,
        rotationSetter: function(a, b, c) {
            c = c.style;
            this[b] = c[b] = a;
            c.left = -t(ka(a * Pa) + 1) + "px";
            c.top = t(fa(a * Pa)) + "px"
        },
        strokeSetter: function(a, b, c) {
            this.setAttr("strokecolor", this.renderer.color(a, c, b))
        },
        "stroke-widthSetter": function(a, b, c) {
            c.stroked = !!a;
            this[b] = a;
            pa(a) && (a += "px");
            this.setAttr("strokeweight", a)
        },
        titleSetter: function(a, b) {
            this.setAttr(b, a)
        },
        visibilitySetter: function(a, b, c) {
            a === "inherit" && (a = "visible");
            this.shadows && p(this.shadows, function(c) {
                c.style[b] = a
            });
            c.nodeName === "DIV" && (a = a === "hidden" ?
                "-999em" : 0, ob || (c.style[b] = a ? "visible" : "hidden"), b = "top");
            c.style[b] = a
        },
        xSetter: function(a, b, c) {
            this[b] = a;
            b === "x" ? b = "left" : b === "y" && (b = "top");
            this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
        },
        zIndexSetter: function(a, b, c) {
            c.style[b] = a
        }
    }, N.VMLElement = ga = ia(Z, ga), ga.prototype.ySetter = ga.prototype.widthSetter = ga.prototype.heightSetter = ga.prototype.xSetter, ga = {
        Element: ga,
        isIE8: Ga.indexOf("MSIE 8.0") > -1,
        init: function(a, b, c, d) {
            var e;
            this.alignedObjects = [];
            d = this.createElement(Wa).css(s(this.getStyle(d), {
                position: "relative"
            }));
            e = d.element;
            a.appendChild(d.element);
            this.isVML = !0;
            this.box = e;
            this.boxWrapper = d;
            this.cache = {};
            this.setSize(b, c, !1);
            if (!E.namespaces.hcv) {
                E.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                try {
                    E.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                } catch (f) {
                    E.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                }
            }
        },
        isHidden: function() {
            return !this.box.offsetWidth
        },
        clipRect: function(a, b, c, d) {
            var e = this.createElement(),
                f = ha(a);
            return s(e, {
                members: [],
                left: (f ? a.x : a) + 1,
                top: (f ? a.y : b) + 1,
                width: (f ? a.width : c) - 1,
                height: (f ? a.height : d) - 1,
                getCSS: function(a) {
                    var b = a.element,
                        c = b.nodeName,
                        a = a.inverted,
                        d = this.top - (c === "shape" ? b.offsetTop : 0),
                        e = this.left,
                        b = e + this.width,
                        f = d + this.height,
                        d = {
                            clip: "rect(" + t(a ? e : d) + "px," + t(a ? f : b) + "px," + t(a ? b : f) + "px," + t(a ? d : e) + "px)"
                        };
                    !a && ob && c === "DIV" && s(d, {
                        width: b + "px",
                        height: f + "px"
                    });
                    return d
                },
                updateClipping: function() {
                    p(e.members,
                        function(a) {
                            a.element && a.css(e.getCSS(a))
                        })
                }
            })
        },
        color: function(a, b, c, d) {
            var e = this,
                f, g = /^rgba/,
                h, i, j = $;
            a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
            if (i) {
                var k, l, m = a.linearGradient || a.radialGradient,
                    n, o, x, I, q, w = "",
                    a = a.stops,
                    r, t = [],
                    v = function() {
                        h = ['<fill colors="' + t.join(",") + '" opacity="', x, '" o:opacity2="', o, '" type="', i, '" ', w, 'focus="100%" method="any" />'];
                        aa(e.prepVML(h), null, null, b)
                    };
                n = a[0];
                r = a[a.length - 1];
                n[0] > 0 && a.unshift([0, n[1]]);
                r[0] < 1 && a.push([1, r[1]]);
                p(a, function(a,
                    b) {
                    g.test(a[1]) ? (f = Ia(a[1]), k = f.get("rgb"), l = f.get("a")) : (k = a[1], l = 1);
                    t.push(a[0] * 100 + "% " + k);
                    b ? (x = l, I = k) : (o = l, q = k)
                });
                if (c === "fill")
                    if (i === "gradient") c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, n = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, w = 'angle="' + (90 - X.atan((m - a) / (n - c)) * 180 / ua) + '"', v();
                    else {
                        var j = m.r,
                            u = j * 2,
                            s = j * 2,
                            y = m.cx,
                            C = m.cy,
                            R = b.radialReference,
                            A, j = function() {
                                R && (A = d.getBBox(), y += (R[0] - A.x) / A.width - 0.5, C += (R[1] - A.y) / A.height - 0.5, u *= R[2] / A.width, s *= R[2] / A.height);
                                w = 'src="' + F.global.VMLRadialGradientURL + '" size="' + u + "," +
                                    s + '" origin="0.5,0.5" position="' + y + "," + C + '" color2="' + q + '" ';
                                v()
                            };
                        d.added ? j() : d.onAdd = j;
                        j = I
                    } else j = k
            } else if (g.test(a) && b.tagName !== "IMG") f = Ia(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], aa(this.prepVML(h), null, null, b), j = f.get("rgb");
            else {
                j = b.getElementsByTagName(c);
                if (j.length) j[0].opacity = 1, j[0].type = "solid";
                j = a
            }
            return j
        },
        prepVML: function(a) {
            var b = this.isIE8,
                a = a.join("");
            b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') :
                a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
            return a
        },
        text: na.prototype.html,
        path: function(a) {
            var b = {
                coordsize: "10 10"
            };
            Ja(a) ? b.d = a : ha(a) && s(b, a);
            return this.createElement("shape").attr(b)
        },
        circle: function(a, b, c) {
            var d = this.symbol("circle");
            if (ha(a)) c = a.r, b = a.y, a = a.x;
            d.isCircle = !0;
            d.r = c;
            return d.attr({
                x: a,
                y: b
            })
        },
        g: function(a) {
            var b;
            a && (b = {
                className: "highcharts-" + a,
                "class": "highcharts-" + a
            });
            return this.createElement(Wa).attr(b)
        },
        image: function(a,
            b, c, d, e) {
            var f = this.createElement("img").attr({
                src: a
            });
            arguments.length > 1 && f.attr({
                x: b,
                y: c,
                width: d,
                height: e
            });
            return f
        },
        createElement: function(a) {
            return a === "rect" ? this.symbol(a) : na.prototype.createElement.call(this, a)
        },
        invertChild: function(a, b) {
            var c = this,
                d = b.style,
                e = a.tagName === "IMG" && a.style;
            K(a, {
                flip: "x",
                left: H(d.width) - (e ? H(e.top) : 1),
                top: H(d.height) - (e ? H(e.left) : 1),
                rotation: -90
            });
            p(a.childNodes, function(b) {
                c.invertChild(b, a)
            })
        },
        symbols: {
            arc: function(a, b, c, d, e) {
                var f = e.start,
                    g = e.end,
                    h = e.r || c ||
                    d,
                    c = e.innerR,
                    d = fa(f),
                    i = ka(f),
                    j = fa(g),
                    k = ka(g);
                if (g - f === 0) return ["x"];
                f = ["wa", a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k];
                e.open && !c && f.push("e", "M", a, b);
                f.push("at", a - c, b - c, a + c, b + c, a + c * j, b + c * k, a + c * d, b + c * i, "x", "e");
                f.isArc = !0;
                return f
            },
            circle: function(a, b, c, d, e) {
                e && (c = d = 2 * e.r);
                e && e.isCircle && (a -= c / 2, b -= d / 2);
                return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
            },
            rect: function(a, b, c, d, e) {
                return na.prototype.symbols[!u(e) || !e.r ? "square" : "callout"].call(0, a, b, c, d, e)
            }
        }
    }, N.VMLRenderer = ib = function() {
        this.init.apply(this,
            arguments)
    }, ib.prototype = y(na.prototype, ga), Za = ib;
    na.prototype.measureSpanWidth = function(a, b) {
        var c = E.createElement("span"),
            d;
        d = E.createTextNode(a);
        c.appendChild(d);
        K(c, b);
        this.box.appendChild(c);
        d = c.offsetWidth;
        Va(c);
        return d
    };
    var Vb;
    if (la) N.CanVGRenderer = ga = function() {
        Ha = "http://www.w3.org/1999/xhtml"
    }, ga.prototype.symbols = {}, Vb = function() {
        function a() {
            var a = b.length,
                d;
            for (d = 0; d < a; d++) b[d]();
            b = []
        }
        var b = [];
        return {
            push: function(c, d) {
                b.length === 0 && ac(d, a);
                b.push(c)
            }
        }
    }(), Za = ga;
    bb.prototype = {
        addLabel: function() {
            var a =
                this.axis,
                b = a.options,
                c = a.chart,
                d = a.horiz,
                e = a.categories,
                f = a.names,
                g = this.pos,
                h = b.labels,
                i = h.rotation,
                j = a.tickPositions,
                d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / j.length || !d && (c.margin[3] || c.chartWidth * 0.33),
                k = g === j[0],
                l = g === j[j.length - 1],
                m, f = e ? q(e[g], f[g], g) : g,
                e = this.label,
                n = j.info;
            a.isDatetimeAxis && n && (m = b.dateTimeLabelFormats[n.higherRanks[g] || n.unitName]);
            this.isFirst = k;
            this.isLast = l;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: k,
                isLast: l,
                dateTimeLabelFormat: m,
                value: a.isLog ?
                    ja(sa(f)) : f
            });
            g = d && {
                width: v(1, t(d - 2 * (h.padding || 10))) + "px"
            };
            if (u(e)) e && e.attr({
                text: b
            }).css(g);
            else {
                m = {
                    align: a.labelAlign
                };
                if (pa(i)) m.rotation = i;
                if (d && h.ellipsis) g.HcHeight = a.len / j.length;
                this.label = e = u(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(m).css(s(g, h.style)).add(a.labelGroup) : null;
                a.tickBaseline = c.renderer.fontMetrics(h.style.fontSize, e).b;
                i && a.side === 2 && (a.tickBaseline *= fa(i * Pa))
            }
            this.yOffset = e ? q(h.y, a.tickBaseline + (a.side === 2 ? 8 : -(e.getBBox().height / 2))) : 0
        },
        getLabelSize: function() {
            var a =
                this.label,
                b = this.axis;
            return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0
        },
        getLabelSides: function() {
            var a = this.label.getBBox(),
                b = this.axis,
                c = b.horiz,
                d = b.options.labels,
                a = c ? a.width : a.height,
                b = c ? d.x - a * {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[b.labelAlign] : 0;
            return [b, c ? a + b : a]
        },
        handleOverflow: function(a, b) {
            var c = !0,
                d = this.axis,
                e = this.isFirst,
                f = this.isLast,
                g = d.horiz ? b.x : b.y,
                h = d.reversed,
                i = d.tickPositions,
                j = this.getLabelSides(),
                k = j[0],
                j = j[1],
                l, m, n, o = this.label.line;
            l = o || 0;
            m = d.labelEdge;
            n = d.justifyLabels && (e || f);
            m[l] ===
                r || g + k > m[l] ? m[l] = g + j : n || (c = !1);
            if (n) {
                l = (m = d.justifyToPlot) ? d.pos : 0;
                m = m ? l + d.len : d.chart.chartWidth;
                do a += e ? 1 : -1, n = d.ticks[i[a]]; while (i[a] && (!n || !n.label || n.label.line !== o));
                d = n && n.label.xy && n.label.xy.x + n.getLabelSides()[e ? 0 : 1];
                e && !h || f && h ? g + k < l && (g = l - k, n && g + j > d && (c = !1)) : g + j > m && (g = m - j, n && g + k < d && (c = !1));
                b.x = g
            }
            return c
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth ||
                    f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var i = this.axis,
                j = i.transA,
                k = i.reversed,
                l = i.staggerLines,
                a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0),
                b = b + this.yOffset - (f && !d ? f * j * (k ? 1 : -1) : 0);
            if (l) c.line = g / (h || 1) % l, b += c.line * (i.labelOffset / l);
            return {
                x: a,
                y: b
            }
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a, b, c) {
            var d = this.axis,
                e = d.options,
                f = d.chart.renderer,
                g = d.horiz,
                h = this.type,
                i = this.label,
                j = this.pos,
                k = e.labels,
                l = this.gridLine,
                m = h ? h + "Grid" : "grid",
                n = h ? h + "Tick" : "tick",
                o = e[m + "LineWidth"],
                x = e[m + "LineColor"],
                I = e[m + "LineDashStyle"],
                p = e[n + "Length"],
                m = e[n + "Width"] || 0,
                w = e[n + "Color"],
                eb = e[n + "Position"],
                n = this.mark,
                t = k.step,
                v = !0,
                u = d.tickmarkOffset,
                s = this.getPosition(g, j, u, b),
                y = s.x,
                s = s.y,
                C = g && y === d.pos + d.len || !g && s === d.pos ? -1 : 1,
                c = q(c, 1);
            this.isActive = !0;
            if (o) {
                j = d.getPlotLinePath(j + u, o * C, b, !0);
                if (l === r) {
                    l = {
                        stroke: x,
                        "stroke-width": o
                    };
                    if (I) l.dashstyle =
                        I;
                    if (!h) l.zIndex = 1;
                    if (b) l.opacity = 0;
                    this.gridLine = l = o ? f.path(j).attr(l).add(d.gridGroup) : null
                }
                if (!b && l && j) l[this.isNew ? "attr" : "animate"]({
                    d: j,
                    opacity: c
                })
            }
            if (m && p) eb === "inside" && (p = -p), d.opposite && (p = -p), h = this.getMarkPath(y, s, p, m * C, g, f), n ? n.animate({
                d: h,
                opacity: c
            }) : this.mark = f.path(h).attr({
                stroke: w,
                "stroke-width": m,
                opacity: c
            }).add(d.axisGroup);
            if (i && !isNaN(y)) i.xy = s = this.getLabelPosition(y, s, i, g, k, u, a, t), this.isFirst && !this.isLast && !q(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !q(e.showLastLabel,
                1) ? v = !1 : !d.isRadial && !k.step && !k.rotation && !b && c !== 0 && (v = this.handleOverflow(a, s)), t && a % t && (v = !1), v && !isNaN(s.y) ? (s.opacity = c, i[this.isNew ? "attr" : "animate"](s), this.isNew = !1) : i.attr("y", -9999)
        },
        destroy: function() {
            Na(this, this.axis)
        }
    };
    N.PlotLineOrBand = function(a, b) {
        this.axis = a;
        if (b) this.options = b, this.id = b.id
    };
    N.PlotLineOrBand.prototype = {
        render: function() {
            var a = this,
                b = a.axis,
                c = b.horiz,
                d = (b.pointRange || 0) / 2,
                e = a.options,
                f = e.label,
                g = a.label,
                h = e.width,
                i = e.to,
                j = e.from,
                k = u(j) && u(i),
                l = e.value,
                m = e.dashStyle,
                n = a.svgElem,
                o = [],
                x, I = e.color,
                q = e.zIndex,
                p = e.events,
                r = {},
                t = b.chart.renderer;
            b.isLog && (j = Ka(j), i = Ka(i), l = Ka(l));
            if (h) {
                if (o = b.getPlotLinePath(l, h), r = {
                        stroke: I,
                        "stroke-width": h
                    }, m) r.dashstyle = m
            } else if (k) {
                j = v(j, b.min - d);
                i = A(i, b.max + d);
                o = b.getPlotBandPath(j, i, e);
                if (I) r.fill = I;
                if (e.borderWidth) r.stroke = e.borderColor, r["stroke-width"] = e.borderWidth
            } else return;
            if (u(q)) r.zIndex = q;
            if (n)
                if (o) n.animate({
                    d: o
                }, null, n.onGetPath);
                else {
                    if (n.hide(), n.onGetPath = function() {
                            n.show()
                        }, g) a.label = g = g.destroy()
                } else if (o &&
                o.length && (a.svgElem = n = t.path(o).attr(r).add(), p))
                for (x in d = function(b) {
                        n.on(b, function(c) {
                            p[b].apply(a, [c])
                        })
                    }, p) d(x);
            if (f && u(f.text) && o && o.length && b.width > 0 && b.height > 0) {
                f = y({
                    align: c && k && "center",
                    x: c ? !k && 4 : 10,
                    verticalAlign: !c && k && "middle",
                    y: c ? k ? 16 : 10 : k ? 6 : -4,
                    rotation: c && !k && 90
                }, f);
                if (!g) {
                    r = {
                        align: f.textAlign || f.align,
                        rotation: f.rotation
                    };
                    if (u(q)) r.zIndex = q;
                    a.label = g = t.text(f.text, 0, 0, f.useHTML).attr(r).css(f.style).add()
                }
                b = [o[1], o[4], k ? o[6] : o[1]];
                k = [o[2], o[5], k ? o[7] : o[2]];
                o = Ua(b);
                c = Ua(k);
                g.align(f, !1, {
                    x: o,
                    y: c,
                    width: Ea(b) - o,
                    height: Ea(k) - c
                });
                g.show()
            } else g && g.hide();
            return a
        },
        destroy: function() {
            ta(this.axis.plotLinesAndBands, this);
            delete this.axis;
            Na(this)
        }
    };
    D.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: T,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return Da(this.total, -1)
                },
                style: T.style
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d =
                this.options,
                e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.chart = a;
            this.reversed = d.reversed;
            this.zoomEnabled = d.zoomEnabled !== !1;
            this.categories = d.categories || e === "category";
            this.names = [];
            this.isLog = e === "logarithmic";
            this.isDatetimeAxis = e === "datetime";
            this.isLinked = u(d.linkedTo);
            this.tickmarkOffset = this.categories && d.tickmarkPlacement === "between" && q(d.tickInterval, 1) === 1 ? 0.5 : 0;
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.min = this.max = null;
            this.crosshair = q(d.crosshair, qa(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            Qa(this, a.axes) === -1 && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            if (a.inverted && c && this.reversed ===
                r) this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) z(this, f, d[f]);
            if (this.isLog) this.val2lin = Ka, this.lin2val = sa
        },
        setOptions: function(a) {
            this.options = y(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], y(F[this.coll], a))
        },
        defaultLabelFormatter: function() {
            var a = this.axis,
                b = this.value,
                c = a.categories,
                d = this.dateTimeLabelFormat,
                e = F.lang.numericSymbols,
                f = e && e.length,
                g, h = a.options.labels.format,
                a = a.isLog ? b : a.tickInterval;
            if (h) g = Ma(h, this);
            else if (c) g = b;
            else if (d) g = xa(d, b);
            else if (f && a >= 1E3)
                for (; f-- && g === r;) c = Math.pow(1E3, f + 1), a >= c && e[f] !== null && (g = Da(b / c, -1) + e[f]);
            g === r && (g = P(b) >= 1E4 ? Da(b, 0) : Da(b, -1, r, ""));
            return g
        },
        getSeriesExtremes: function() {
            var a = this,
                b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.ignoreMinPadding = a.ignoreMaxPadding = null;
            a.buildStacks && a.buildStacks();
            p(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d;
                    d = c.options.threshold;
                    var e;
                    a.hasVisibleSeries = !0;
                    a.isLog && d <= 0 && (d = null);
                    if (a.isXAxis) {
                        if (d = c.xData, d.length) a.dataMin = A(q(a.dataMin, d[0]), Ua(d)), a.dataMax = v(q(a.dataMax, d[0]), Ea(d))
                    } else {
                        c.getExtremes();
                        e = c.dataMax;
                        c = c.dataMin;
                        if (u(c) && u(e)) a.dataMin = A(q(a.dataMin, c), c), a.dataMax = v(q(a.dataMax, e), e);
                        if (u(d))
                            if (a.dataMin >= d) a.dataMin = d, a.ignoreMinPadding = !0;
                            else if (a.dataMax < d) a.dataMax = d, a.ignoreMaxPadding = !0
                    }
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = 1,
                h = 0,
                i = d ? this.oldTransA : this.transA,
                d = d ? this.oldMin :
                this.min,
                j = this.minPixelPadding,
                e = (this.options.ordinal || this.isLog && e) && this.lin2val;
            if (!i) i = this.transA;
            if (c) g *= -1, h = this.len;
            this.reversed && (g *= -1, h -= g * (this.sector || this.len));
            b ? (a = a * g + h, a -= j, a = a / i + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), f === "between" && (f = 0.5), a = g * (a - d) * i + h + g * j + (pa(f) ? i * f * this.pointRange : 0));
            return a
        },
        toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart,
                g = this.left,
                h = this.top,
                i, j, k = c && f.oldChartHeight || f.chartHeight,
                l = c && f.oldChartWidth || f.chartWidth,
                m;
            i = this.transB;
            e = q(e, this.translate(a, null, null, c));
            a = c = t(e + i);
            i = j = t(k - e - i);
            if (isNaN(e)) m = !0;
            else if (this.horiz) {
                if (i = h, j = k - this.bottom, a < g || a > g + this.width) m = !0
            } else if (a = g, c = l - this.right, i < h || i > h + this.height) m = !0;
            return m && !d ? null : f.renderer.crispLine(["M", a, i, "L", c, j], b || 1)
        },
        getLinearTickPositions: function(a, b, c) {
            var d, e = ja(V(b / a) * a),
                f = ja(Ya(c /
                    a) * a),
                g = [];
            if (b === c && pa(b)) return [b];
            for (b = e; b <= f;) {
                g.push(b);
                b = ja(b + a);
                if (b === d) break;
                d = b
            }
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e;
            if (this.isLog) {
                e = b.length;
                for (a = 1; a < e; a++) d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0))
            } else if (this.isDatetimeAxis && a.minorTickInterval === "auto") d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)), d[0] < this.min && d.shift();
            else
                for (b = this.min +
                    (b[0] - this.min) % c; b <= this.max; b += c) d.push(b);
            return d
        },
        adjustForMinRange: function() {
            var a = this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, i, j;
            if (this.isXAxis && this.minRange === r && !this.isLog) u(a.min) || u(a.max) ? this.minRange = null : (p(this.series, function(a) {
                i = a.xData;
                for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--)
                    if (h = i[g] - i[g - 1], f === r || h < f) f = h
            }), this.minRange = A(f * 5, this.dataMax - this.dataMin));
            if (c - b < this.minRange) {
                var k = this.minRange;
                d = (k - c + b) / 2;
                d = [b - d, q(a.min, b - d)];
                if (e) d[2] = this.dataMin;
                b = Ea(d);
                c = [b + k, q(a.max, b + k)];
                if (e) c[2] = this.dataMax;
                c = Ua(c);
                c - b < k && (d[0] = c - k, d[1] = q(a.min, c - k), b = Ea(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function(a) {
            var b = this,
                c = b.max - b.min,
                d = b.axisPointRange || 0,
                e, f = 0,
                g = 0,
                h = b.linkedParent,
                i = !!b.categories,
                j = b.transA;
            if (b.isXAxis || i || d) h ? (f = h.minPointOffset, g = h.pointRangePadding) : p(b.series, function(a) {
                var h = i ? 1 : b.isXAxis ? a.pointRange : b.axisPointRange || 0,
                    j = a.options.pointPlacement,
                    n = a.closestPointRange;
                h > c && (h = 0);
                d = v(d, h);
                f = v(f, Sa(j) ?
                    0 : h / 2);
                g = v(g, j === "on" ? 0 : h);
                !a.noSharedTooltip && u(n) && (e = u(e) ? A(e, n) : n)
            }), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = A(d, c), b.closestPointRange = e;
            if (a) b.oldTransA = j;
            b.translationSlope = b.transA = j = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = j * f
        },
        setTickPositions: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = d.startOnTick,
                f = d.endOnTick,
                g = b.isLog,
                h = b.isDatetimeAxis,
                i = b.isXAxis,
                j = b.isLinked,
                k = b.options.tickPositioner,
                l = d.maxPadding,
                m = d.minPadding,
                n = d.tickInterval,
                o = d.minTickInterval,
                x = d.tickPixelInterval,
                I, oa = b.categories;
            j ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = q(c.min, c.dataMin), b.max = q(c.max, c.dataMax), d.type !== b.linkedParent.options.type && ma(11, 1)) : (b.min = q(b.userMin, d.min, b.dataMin), b.max = q(b.userMax, d.max, b.dataMax));
            if (g) !a && A(b.min, q(b.dataMin, b.min)) <= 0 && ma(10, 1), b.min = ja(Ka(b.min)), b.max = ja(Ka(b.max));
            if (b.range && u(b.max)) b.userMin = b.min = v(b.min, b.max - b.range), b.userMax = b.max, b.range =
                null;
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            if (!oa && !b.axisPointRange && !b.usePercentage && !j && u(b.min) && u(b.max) && (c = b.max - b.min)) {
                if (!u(d.min) && !u(b.userMin) && m && (b.dataMin < 0 || !b.ignoreMinPadding)) b.min -= c * m;
                if (!u(d.max) && !u(b.userMax) && l && (b.dataMax > 0 || !b.ignoreMaxPadding)) b.max += c * l
            }
            if (pa(d.floor)) b.min = v(b.min, d.floor);
            if (pa(d.ceiling)) b.max = A(b.max, d.ceiling);
            b.min === b.max || b.min === void 0 || b.max === void 0 ? b.tickInterval = 1 : j && !n && x === b.linkedParent.options.tickPixelInterval ? b.tickInterval =
                b.linkedParent.tickInterval : (b.tickInterval = q(n, oa ? 1 : (b.max - b.min) * x / v(b.len, x)), !u(n) && b.len < x && !this.isRadial && !this.isLog && !oa && e && f && (I = !0, b.tickInterval /= 4));
            i && !a && p(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval);
            if (b.pointRange) b.tickInterval = v(b.pointRange, b.tickInterval);
            if (!n && b.tickInterval < o) b.tickInterval =
                o;
            if (!h && !g && !n) b.tickInterval = wb(b.tickInterval, null, vb(b.tickInterval), q(d.allowDecimals, !(b.tickInterval > 1 && b.tickInterval < 5 && b.max > 1E3 && b.max < 9999)));
            b.minorTickInterval = d.minorTickInterval === "auto" && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval;
            b.tickPositions = a = d.tickPositions ? [].concat(d.tickPositions) : k && k.apply(b, [b.min, b.max]);
            if (!a) !b.ordinalPositions && (b.max - b.min) / b.tickInterval > v(2 * b.len, 200) && ma(19, !0), a = h ? b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval, d.units), b.min,
                b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : g ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), I && a.splice(1, a.length - 2), b.tickPositions = a;
            if (!j) d = a[0], g = a[a.length - 1], h = b.minPointOffset || 0, e ? b.min = d : b.min - h > d && a.shift(), f ? b.max = g : b.max + h < g && a.pop(), a.length === 0 && u(d) && a.push((g + d) / 2), a.length === 1 && (e = P(b.max) > 1E13 ? 1 : 0.001, b.min -= e, b.max += e)
        },
        setMaxTicks: function() {
            var a = this.chart,
                b = a.maxTicks || {},
                c = this.tickPositions,
                d = this._maxTicksKey = [this.coll, this.pos, this.len].join("-");
            if (!this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && this.options.alignTicks !== !1) b[d] = c.length;
            a.maxTicks = b
        },
        adjustTickAmount: function() {
            var a = this._maxTicksKey,
                b = this.tickPositions,
                c = this.chart.maxTicks;
            if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1 && this.min !== r) {
                var d = this.tickAmount,
                    e = b.length;
                this.tickAmount = a = c[a];
                if (e < a) {
                    for (; b.length < a;) b.push(ja(b[b.length - 1] + this.tickInterval));
                    this.transA *=
                        (e - 1) / (a - 1);
                    this.max = b[b.length - 1]
                }
                if (u(d) && a !== d) this.isDirty = !0
            }
        },
        setScale: function() {
            var a = this.stacks,
                b, c, d, e;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            e = this.len !== this.oldAxisLength;
            p(this.series, function(a) {
                if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0
            });
            if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis)
                    for (b in a)
                        for (c in a[b]) a[b][c].total = null, a[b][c].cum = 0;
                this.forceRedraw = !1;
                this.getSeriesExtremes();
                this.setTickPositions();
                this.oldUserMin = this.userMin;
                this.oldUserMax = this.userMax;
                if (!this.isDirty) this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax
            } else if (!this.isXAxis) {
                if (this.oldStacks) a = this.stacks = this.oldStacks;
                for (b in a)
                    for (c in a[b]) a[b][c].cum = a[b][c].total
            }
            this.setMaxTicks()
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this,
                g = f.chart,
                c = q(c, !0),
                e = s(e, {
                    min: a,
                    max: b
                });
            J(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                f.isDirtyExtremes = !0;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            var c = this.dataMin,
                d = this.dataMax,
                e = this.options;
            this.allowZoomOutside || (u(c) && a <= A(c, q(e.min, c)) && (a = r), u(d) && b >= v(d, q(e.max, d)) && (b = r));
            this.displayBtn = a !== r || b !== r;
            this.setExtremes(a, b, !1, r, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = this.horiz,
                e = q(b.width, a.plotWidth - c + (b.offsetRight || 0)),
                f = q(b.height, a.plotHeight),
                g = q(b.top, a.plotTop),
                b = q(b.left, a.plotLeft + c),
                c = /%$/;
            c.test(f) && (f = parseInt(f, 10) /
                100 * a.plotHeight);
            c.test(g) && (g = parseInt(g, 10) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = v(d ? e : f, 0);
            this.pos = d ? b : g
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? ja(sa(this.min)) : this.min,
                max: a ? ja(sa(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = b ? sa(this.min) : this.min,
                b = b ? sa(this.max) :
                this.max;
            c > a || a === null ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function(a) {
            a = (q(a, 0) - this.side * 90 + 720) % 360;
            return a > 15 && a < 165 ? "right" : a > 195 && a < 345 ? "left" : "center"
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                i = b.inverted ? [1, 0, 3, 2][h] : h,
                j, k, l = 0,
                m, n = 0,
                o = d.title,
                x = d.labels,
                I = 0,
                oa = b.axisOffset,
                b = b.clipOffset,
                w = [-1, 1, 1, -1][h],
                t, s = 1,
                y = q(x.maxStaggerLines, 5),
                O, A, z, C, R;
            a.hasData = j = a.hasVisibleSeries || u(a.min) && u(a.max) &&
                !!e;
            a.showAxis = k = j || q(d.showEmpty, !0);
            a.staggerLines = a.horiz && x.staggerLines;
            if (!a.axisGroup) a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(), a.labelGroup = c.g("axis-labels").attr({
                zIndex: x.zIndex || 7
            }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add();
            if (j || a.isLinked) {
                a.labelAlign = q(x.align || a.autoLabelAlign(x.rotation));
                p(e, function(b) {
                    f[b] ? f[b].addLabel() : f[b] = new bb(a, b)
                });
                if (a.horiz && !a.staggerLines && y && !x.rotation) {
                    for (j =
                        a.reversed ? [].concat(e).reverse() : e; s < y;) {
                        O = [];
                        A = !1;
                        for (t = 0; t < j.length; t++) z = j[t], C = (C = f[z].label && f[z].label.getBBox()) ? C.width : 0, R = t % s, C && (z = a.translate(z), O[R] !== r && z < O[R] && (A = !0), O[R] = z + C);
                        if (A) s++;
                        else break
                    }
                    if (s > 1) a.staggerLines = s
                }
                p(e, function(b) {
                    if (h === 0 || h === 2 || {
                            1: "left",
                            3: "right"
                        }[h] === a.labelAlign) I = v(f[b].getLabelSize(), I)
                });
                if (a.staggerLines) I *= a.staggerLines, a.labelOffset = I
            } else
                for (t in f) f[t].destroy(), delete f[t];
            if (o && o.text && o.enabled !== !1) {
                if (!a.axisTitle) a.axisTitle = c.text(o.text,
                    0, 0, o.useHTML).attr({
                    zIndex: 7,
                    rotation: o.rotation || 0,
                    align: o.textAlign || {
                        low: "left",
                        middle: "center",
                        high: "right"
                    }[o.align]
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(o.style).add(a.axisGroup), a.axisTitle.isNew = !0;
                if (k) l = a.axisTitle.getBBox()[g ? "height" : "width"], m = o.offset, n = u(m) ? 0 : q(o.margin, g ? 5 : 10);
                a.axisTitle[k ? "show" : "hide"]()
            }
            a.offset = w * q(d.offset, oa[h]);
            c = h === 2 ? a.tickBaseline : 0;
            g = I + n + (I && w * (g ? q(x.y, a.tickBaseline + 8) : x.x) - c);
            a.axisTitleMargin = q(m, g);
            oa[h] = v(oa[h], a.axisTitleMargin +
                l + w * a.offset, g);
            b[i] = v(b[i], V(d.lineWidth / 2) * 2)
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f = this.left + (c ? this.width : 0) + d,
                d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        },
        getTitlePosition: function() {
            var a = this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                i = H(e.style.fontSize ||
                    12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                }[e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? i : 0);
            return {
                x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0),
                y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)
            }
        },
        render: function() {
            var a = this,
                b = a.horiz,
                c = a.reversed,
                d = a.chart,
                e = d.renderer,
                f = a.options,
                g = a.isLog,
                h = a.isLinked,
                i = a.tickPositions,
                j, k = a.axisTitle,
                l = a.ticks,
                m = a.minorTicks,
                n = a.alternateBands,
                o = f.stackLabels,
                x = f.alternateGridColor,
                q = a.tickmarkOffset,
                oa = f.lineWidth,
                w = d.hasRendered && u(a.oldMin) &&
                !isNaN(a.oldMin),
                t = a.hasData,
                v = a.showAxis,
                s, y = f.labels.overflow,
                A = a.justifyLabels = b && y !== !1,
                z;
            a.labelEdge.length = 0;
            a.justifyToPlot = y === "justify";
            p([l, m, n], function(a) {
                for (var b in a) a[b].isActive = !1
            });
            if (t || h)
                if (a.minorTickInterval && !a.categories && p(a.getMinorTickPositions(), function(b) {
                        m[b] || (m[b] = new bb(a, b, "minor"));
                        w && m[b].isNew && m[b].render(null, !0);
                        m[b].render(null, !1, 1)
                    }), i.length && (j = i.slice(), (b && c || !b && !c) && j.reverse(), A && (j = j.slice(1).concat([j[0]])), p(j, function(b, c) {
                        A && (c = c === j.length -
                            1 ? 0 : c + 1);
                        if (!h || b >= a.min && b <= a.max) l[b] || (l[b] = new bb(a, b)), w && l[b].isNew && l[b].render(c, !0, 0.1), l[b].render(c)
                    }), q && a.min === 0 && (l[-1] || (l[-1] = new bb(a, -1, null, !0)), l[-1].render(-1))), x && p(i, function(b, c) {
                        if (c % 2 === 0 && b < a.max) n[b] || (n[b] = new N.PlotLineOrBand(a)), s = b + q, z = i[c + 1] !== r ? i[c + 1] + q : a.max, n[b].options = {
                            from: g ? sa(s) : s,
                            to: g ? sa(z) : z,
                            color: x
                        }, n[b].render(), n[b].isActive = !0
                    }), !a._addedPlotLB) p((f.plotLines || []).concat(f.plotBands || []), function(b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0;
            p([l, m,
                n
            ], function(a) {
                var b, c, e = [],
                    f = Fa ? Fa.duration || 500 : 0,
                    g = function() {
                        for (c = e.length; c--;) a[e[c]] && !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]])
                    };
                for (b in a)
                    if (!a[b].isActive) a[b].render(b, !1, 0), a[b].isActive = !1, e.push(b);
                a === n || !d.hasRendered || !f ? g() : f && setTimeout(g, f)
            });
            if (oa) b = a.getLinePath(oa), a.axisLine ? a.axisLine.animate({
                d: b
            }) : a.axisLine = e.path(b).attr({
                stroke: f.lineColor,
                "stroke-width": oa,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[v ? "show" : "hide"]();
            if (k && v) k[k.isNew ? "attr" : "animate"](a.getTitlePosition()),
                k.isNew = !1;
            o && o.enabled && a.renderStackTotals();
            a.isDirty = !1
        },
        redraw: function() {
            this.render();
            p(this.plotLinesAndBands, function(a) {
                a.render()
            });
            p(this.series, function(a) {
                a.isDirty = !0
            })
        },
        destroy: function(a) {
            var b = this,
                c = b.stacks,
                d, e = b.plotLinesAndBands;
            a || U(b);
            for (d in c) Na(c[d]), c[d] = null;
            p([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                Na(a)
            });
            for (a = e.length; a--;) e[a].destroy();
            p("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function(a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(a, b) {
            if (this.crosshair)
                if ((u(b) || !q(this.crosshair.snap, !0)) === !1) this.hideCrosshair();
                else {
                    var c, d = this.crosshair,
                        e = d.animation;
                    q(d.snap, !0) ? u(b) && (c = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos;
                    c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : q(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, c);
                    if (c === null) this.hideCrosshair();
                    else if (this.cross) this.cross.attr({
                        visibility: "visible"
                    })[e ?
                        "animate" : "attr"]({
                        d: c
                    }, e);
                    else {
                        e = {
                            "stroke-width": d.width || 1,
                            stroke: d.color || "#C0C0C0",
                            zIndex: d.zIndex || 2
                        };
                        if (d.dashStyle) e.dashstyle = d.dashStyle;
                        this.cross = this.chart.renderer.path(c).attr(e).add()
                    }
                }
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    };
    s(D.prototype, {
        getPlotBandPath: function(a, b) {
            var c = this.getPlotLinePath(b),
                d = this.getPlotLinePath(a);
            d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        },
        addPlotBand: function(a) {
            return this.addPlotBandOrLine(a, "plotBands")
        },
        addPlotLine: function(a) {
            return this.addPlotBandOrLine(a,
                "plotLines")
        },
        addPlotBandOrLine: function(a, b) {
            var c = (new N.PlotLineOrBand(this, a)).render(),
                d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        },
        removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;) b[e].id === a && b[e].destroy();
            p([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function(b) {
                for (e = b.length; e--;) b[e].id === a && ta(b, b[e])
            })
        }
    });
    D.prototype.getTimeTicks = function(a, b, c,
        d) {
        var e = [],
            f = {},
            g = F.global.useUTC,
            h, i = new ca(b - Oa),
            j = a.unitRange,
            k = a.count;
        if (u(b)) {
            j >= G.second && (i.setMilliseconds(0), i.setSeconds(j >= G.minute ? 0 : k * V(i.getSeconds() / k)));
            if (j >= G.minute) i[Nb](j >= G.hour ? 0 : k * V(i[yb]() / k));
            if (j >= G.hour) i[Ob](j >= G.day ? 0 : k * V(i[zb]() / k));
            if (j >= G.day) i[Bb](j >= G.month ? 1 : k * V(i[Xa]() / k));
            j >= G.month && (i[Pb](j >= G.year ? 0 : k * V(i[mb]() / k)), h = i[nb]());
            j >= G.year && (h -= h % k, i[Qb](h));
            if (j === G.week) i[Bb](i[Xa]() - i[Ab]() + q(d, 1));
            b = 1;
            Oa && (i = new ca(i.getTime() + Oa));
            h = i[nb]();
            for (var d = i.getTime(),
                    l = i[mb](), m = i[Xa](), n = (G.day + (g ? Oa : i.getTimezoneOffset() * 6E4)) % G.day; d < c;) e.push(d), j === G.year ? d = lb(h + b * k, 0) : j === G.month ? d = lb(h, l + b * k) : !g && (j === G.day || j === G.week) ? d = lb(h, l, m + b * k * (j === G.day ? 1 : 7)) : d += j * k, b++;
            e.push(d);
            p(qb(e, function(a) {
                return j <= G.hour && a % G.day === n
            }), function(a) {
                f[a] = "day"
            })
        }
        e.info = s(a, {
            higherRanks: f,
            totalRange: j * k
        });
        return e
    };
    D.prototype.normalizeTimeTickInterval = function(a, b) {
        var c = b || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10,
                    15, 30
                ]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null]
            ],
            d = c[c.length - 1],
            e = G[d[0]],
            f = d[1],
            g;
        for (g = 0; g < c.length; g++)
            if (d = c[g], e = G[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + G[c[g + 1][0]]) / 2) break;
        e === G.year && a < 5 * e && (f = [1, 2, 5]);
        c = wb(a / e, f, d[0] === "year" ? v(vb(a / e), 1) : 1);
        return {
            unitRange: e,
            count: c,
            unitName: d[0]
        }
    };
    D.prototype.getLogTickPositions = function(a, b, c, d) {
        var e = this.options,
            f = this.len,
            g = [];
        if (!d) this._minorAutoInterval = null;
        if (a >= 0.5) a = t(a), g = this.getLinearTickPositions(a,
            b, c);
        else if (a >= 0.08)
            for (var f = V(b), h, i, j, k, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) {
                i = e.length;
                for (h = 0; h < i && !l; h++) j = Ka(sa(f) * e[h]), j > b && (!d || k <= c) && k !== r && g.push(k), k > c && (l = !0), k = j
            } else if (b = sa(b), c = sa(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = q(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = wb(a, null, vb(a)), g = za(this.getLinearTickPositions(a, b, c), Ka), !d) this._minorAutoInterval = a / 5;
        if (!d) this.tickInterval =
            a;
        return g
    };
    var Jb = N.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Jb.prototype = {
        init: function(a, b) {
            var c = b.borderWidth,
                d = b.style,
                e = H(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {
                x: 0,
                y: 0
            };
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: e,
                fill: b.backgroundColor,
                "stroke-width": c,
                r: b.borderRadius,
                zIndex: 8
            }).css(d).css({
                padding: 0
            }).add().attr({
                y: -9999
            });
            la || this.label.shadow(b.shadow);
            this.shared = b.shared
        },
        destroy: function() {
            if (this.label) this.label = this.label.destroy();
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        },
        move: function(a, b, c, d) {
            var e = this,
                f = e.now,
                g = e.options.animation !== !1 && !e.isHidden && (P(a - f.x) > 1 || P(b - f.y) > 1),
                h = e.followPointer || e.len > 1;
            s(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: h ? r : g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: h ? r : g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            if (g) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32)
        },
        hide: function(a) {
            var b =
                this,
                c;
            clearTimeout(this.hideTimer);
            if (!this.isHidden) c = this.chart.hoverPoints, this.hideTimer = setTimeout(function() {
                b.label.fadeOut();
                b.isHidden = !0
            }, q(a, this.options.hideDelay, 500)), c && p(c, function(a) {
                a.setState()
            }), this.chart.hoverPoints = null
        },
        getAnchor: function(a, b) {
            var c, d = this.chart,
                e = d.inverted,
                f = d.plotTop,
                g = 0,
                h = 0,
                i, a = qa(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === r && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (p(a, function(a) {
                i = a.series.yAxis;
                g += a.plotX;
                h +=
                    (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && i ? i.top - f : 0)
            }), g /= a.length, h /= a.length, c = [e ? d.plotWidth - h : g, this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - g : h]);
            return za(c, t)
        },
        getPosition: function(a, b, c) {
            var d = this.chart,
                e = this.distance,
                f = {},
                g, h = ["y", d.chartHeight, b, c.plotY + d.plotTop],
                i = ["x", d.chartWidth, a, c.plotX + d.plotLeft],
                j = c.ttBelow || d.inverted && !c.negative || !d.inverted && c.negative,
                k = function(a, b, c, d) {
                    var g = c < d - e,
                        b = d + e + c < b,
                        c = d - e - c;
                    d += e;
                    if (j && b) f[a] = d;
                    else if (!j && g) f[a] = c;
                    else if (g) f[a] =
                        c;
                    else if (b) f[a] = d;
                    else return !1
                },
                l = function(a, b, c, d) {
                    if (d < e || d > b - e) return !1;
                    else f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2
                },
                m = function(a) {
                    var b = h;
                    h = i;
                    i = b;
                    g = a
                },
                n = function() {
                    k.apply(0, h) !== !1 ? l.apply(0, i) === !1 && !g && (m(!0), n()) : g ? f.x = f.y = 0 : (m(!0), n())
                };
            (d.inverted || this.len > 1) && m();
            n();
            return f
        },
        defaultFormatter: function(a) {
            var b = this.points || qa(this),
                c = b[0].series,
                d;
            d = [a.tooltipHeaderFormatter(b[0])];
            p(b, function(a) {
                c = a.series;
                d.push(c.tooltipFormatter && c.tooltipFormatter(a) || a.point.tooltipFormatter(c.tooltipOptions.pointFormat))
            });
            d.push(a.options.footerFormat || "");
            return d.join("")
        },
        refresh: function(a, b) {
            var c = this.chart,
                d = this.label,
                e = this.options,
                f, g, h = {},
                i, j = [];
            i = e.formatter || this.defaultFormatter;
            var h = c.hoverPoints,
                k, l = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = qa(a)[0].series.tooltipOptions.followPointer;
            g = this.getAnchor(a, b);
            f = g[0];
            g = g[1];
            l && (!a.series || !a.series.noSharedTooltip) ? (c.hoverPoints = a, h && p(h, function(a) {
                a.setState()
            }), p(a, function(a) {
                a.setState("hover");
                j.push(a.getLabelConfig())
            }), h = {
                x: a[0].category,
                y: a[0].y
            }, h.points = j, this.len = j.length, a = a[0]) : h = a.getLabelConfig();
            i = i.call(h, this);
            h = a.series;
            this.distance = q(h.tooltipOptions.distance, 16);
            i === !1 ? this.hide() : (this.isHidden && (hb(d), d.attr("opacity", 1).show()), d.attr({
                text: i
            }), k = e.borderColor || a.color || h.color || "#606060", d.attr({
                stroke: k
            }), this.updatePosition({
                plotX: f,
                plotY: g,
                negative: a.negative,
                ttBelow: a.ttBelow
            }), this.isHidden = !1);
            J(c, "tooltipRefresh", {
                text: i,
                x: f + c.plotLeft,
                y: g + c.plotTop,
                borderColor: k
            })
        },
        updatePosition: function(a) {
            var b = this.chart,
                c = this.label,
                c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(t(c.x), t(c.y), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        },
        tooltipHeaderFormatter: function(a) {
            var b = a.series,
                c = b.tooltipOptions,
                d = c.dateTimeLabelFormats,
                e = c.xDateFormat,
                f = b.xAxis,
                g = f && f.options.type === "datetime" && pa(a.key),
                c = c.headerFormat,
                f = f && f.closestPointRange,
                h;
            if (g && !e) {
                if (f)
                    for (h in G) {
                        if (G[h] >= f || G[h] <= G.day && a.key % G[h] > 0) {
                            e = d[h];
                            break
                        }
                    } else e = d.day;
                e = e || d.year
            }
            g && e && (c = c.replace("{point.key}", "{point.key:" +
                e + "}"));
            return Ma(c, {
                point: a,
                series: b
            })
        }
    };
    var va;
    db = E.documentElement.ontouchstart !== r;
    var $a = N.Pointer = function(a, b) {
        this.init(a, b)
    };
    $a.prototype = {
        init: function(a, b) {
            var c = b.chart,
                d = c.events,
                e = la ? "" : c.zoomType,
                c = a.inverted,
                f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            if (N.Tooltip && b.tooltip.enabled) a.tooltip = new Jb(a, b.tooltip),
                this.followTouchMove = b.tooltip.followTouchMove;
            this.setDOMEvents()
        },
        normalize: function(a, b) {
            var c, d, a = a || window.event,
                a = cc(a);
            if (!a.target) a.target = a.srcElement;
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            if (!b) this.chartPosition = b = bc(this.chart.container);
            d.pageX === r ? (c = v(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return s(a, {
                chartX: t(c),
                chartY: t(d)
            })
        },
        getCoordinates: function(a) {
            var b = {
                xAxis: [],
                yAxis: []
            };
            p(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" :
                    "yAxis"].push({
                    axis: c,
                    value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                })
            });
            return b
        },
        getIndex: function(a) {
            var b = this.chart;
            return b.inverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
        },
        runPointActions: function(a) {
            var b = this.chart,
                c = b.series,
                d = b.tooltip,
                e, f, g = b.hoverPoint,
                h = b.hoverSeries,
                i, j, k = b.chartWidth,
                l = this.getIndex(a);
            if (d && this.options.tooltip.shared && (!h || !h.noSharedTooltip)) {
                f = [];
                i = c.length;
                for (j = 0; j < i; j++)
                    if (c[j].visible && c[j].options.enableMouseTracking !== !1 && !c[j].noSharedTooltip &&
                        c[j].singularTooltips !== !0 && c[j].tooltipPoints.length && (e = c[j].tooltipPoints[l]) && e.series) e._dist = P(l - e.clientX), k = A(k, e._dist), f.push(e);
                for (i = f.length; i--;) f[i]._dist > k && f.splice(i, 1);
                if (f.length && f[0].clientX !== this.hoverX) d.refresh(f, a), this.hoverX = f[0].clientX
            }
            c = h && h.tooltipOptions.followPointer;
            if (h && h.tracker && !c) {
                if ((e = h.tooltipPoints[l]) && e !== g) e.onMouseOver(a)
            } else d && c && !d.isHidden && (h = d.getAnchor([{}], a), d.updatePosition({
                plotX: h[0],
                plotY: h[1]
            }));
            if (d && !this._onDocumentMouseMove) this._onDocumentMouseMove =
                function(a) {
                    if (ba[va]) ba[va].pointer.onDocumentMouseMove(a)
                }, z(E, "mousemove", this._onDocumentMouseMove);
            p(b.axes, function(b) {
                b.drawCrosshair(a, q(e, g))
            })
        },
        reset: function(a, b) {
            var c = this.chart,
                d = c.hoverSeries,
                e = c.hoverPoint,
                f = c.tooltip,
                g = f && f.shared ? c.hoverPoints : e;
            (a = a && f && g) && qa(g)[0].plotX === r && (a = !1);
            if (a) f.refresh(g), e && e.setState(e.state, !0);
            else {
                if (e) e.onMouseOut();
                if (d) d.onMouseOut();
                f && f.hide(b);
                if (this._onDocumentMouseMove) U(E, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove =
                    null;
                p(c.axes, function(a) {
                    a.hideCrosshair()
                });
                this.hoverX = null
            }
        },
        scaleGroups: function(a, b) {
            var c = this.chart,
                d;
            p(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        },
        dragStart: function(a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY
        },
        drag: function(a) {
            var b = this.chart,
                c = b.options.chart,
                d = a.chartX,
                e = a.chartY,
                f = this.zoomHor,
                g = this.zoomVert,
                h = b.plotLeft,
                i = b.plotTop,
                j = b.plotWidth,
                k = b.plotHeight,
                l, m = this.mouseDownX,
                n = this.mouseDownY,
                o = c.panKey && a[c.panKey + "Key"];
            d < h ? d = h : d > h + j && (d = h + j);
            e < i ? e = i : e > i + k && (e = i + k);
            this.hasDragged = Math.sqrt(Math.pow(m - d, 2) + Math.pow(n - e, 2));
            if (this.hasDragged > 10) {
                l = b.isInsidePlot(m - h, n - i);
                if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !o && !this.selectionMarker) this.selectionMarker = b.renderer.rect(h, i,
                    f ? 1 : j, g ? 1 : k, 0).attr({
                    fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)",
                    zIndex: 7
                }).add();
                this.selectionMarker && f && (d -= m, this.selectionMarker.attr({
                    width: P(d),
                    x: (d > 0 ? 0 : d) + m
                }));
                this.selectionMarker && g && (d = e - n, this.selectionMarker.attr({
                    height: P(d),
                    y: (d > 0 ? 0 : d) + n
                }));
                l && !this.selectionMarker && c.panning && b.pan(a, c.panning)
            }
        },
        drop: function(a) {
            var b = this.chart,
                c = this.hasPinched;
            if (this.selectionMarker) {
                var d = {
                        xAxis: [],
                        yAxis: [],
                        originalEvent: a.originalEvent || a
                    },
                    e = this.selectionMarker,
                    f = e.attr ? e.attr("x") :
                    e.x,
                    g = e.attr ? e.attr("y") : e.y,
                    h = e.attr ? e.attr("width") : e.width,
                    i = e.attr ? e.attr("height") : e.height,
                    j;
                if (this.hasDragged || c) p(b.axes, function(b) {
                    if (b.zoomEnabled) {
                        var c = b.horiz,
                            e = a.type === "touchend" ? b.minPixelPadding : 0,
                            n = b.toValue((c ? f : g) + e),
                            c = b.toValue((c ? f + h : g + i) - e);
                        !isNaN(n) && !isNaN(c) && (d[b.coll].push({
                            axis: b,
                            min: A(n, c),
                            max: v(n, c)
                        }), j = !0)
                    }
                }), j && J(b, "selection", d, function(a) {
                    b.zoom(s(a, c ? {
                        animation: !1
                    } : null))
                });
                this.selectionMarker = this.selectionMarker.destroy();
                c && this.scaleGroups()
            }
            if (b) K(b.container, {
                cursor: b._cursor
            }), b.cancelClick = this.hasDragged > 10, b.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []
        },
        onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        },
        onDocumentMouseUp: function(a) {
            ba[va] && ba[va].pointer.drop(a)
        },
        onDocumentMouseMove: function(a) {
            var b = this.chart,
                c = this.chartPosition,
                d = b.hoverSeries,
                a = this.normalize(a, c);
            c && d && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) &&
                this.reset()
        },
        onContainerMouseLeave: function() {
            var a = ba[va];
            if (a) a.pointer.reset(), a.pointer.chartPosition = null
        },
        onContainerMouseMove: function(a) {
            var b = this.chart;
            va = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            b.mouseIsDown === "mousedown" && this.drag(a);
            (this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) && !b.openMenu && this.runPointActions(a)
        },
        inClass: function(a, b) {
            for (var c; a;) {
                if (c = Y(a, "class"))
                    if (c.indexOf(b) !== -1) return !0;
                    else if (c.indexOf("highcharts-container") !==
                    -1) return !1;
                a = a.parentNode
            }
        },
        onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries,
                c = (a = a.relatedTarget || a.toElement) && a.point && a.point.series;
            if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && c !== b) b.onMouseOut()
        },
        onContainerClick: function(a) {
            var b = this.chart,
                c = b.hoverPoint,
                d = b.plotLeft,
                e = b.plotTop,
                a = this.normalize(a);
            a.cancelBubble = !0;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (J(c.series, "click", s(a, {
                point: c
            })), b.hoverPoint && c.firePointEvent("click",
                a)) : (s(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && J(b, "click", a)))
        },
        setDOMEvents: function() {
            var a = this,
                b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            z(b, "mouseleave", a.onContainerMouseLeave);
            gb === 1 && z(E, "mouseup", a.onDocumentMouseUp);
            if (db) b.ontouchstart = function(b) {
                    a.onContainerTouchStart(b)
                }, b.ontouchmove = function(b) {
                    a.onContainerTouchMove(b)
                }, gb === 1 &&
                z(E, "touchend", a.onDocumentTouchEnd)
        },
        destroy: function() {
            var a;
            U(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            gb || (U(E, "mouseup", this.onDocumentMouseUp), U(E, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    };
    s(N.Pointer.prototype, {
        pinchTranslate: function(a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        },
        pinchTranslateDirection: function(a,
            b, c, d, e, f, g, h) {
            var i = this.chart,
                j = a ? "x" : "y",
                k = a ? "X" : "Y",
                l = "chart" + k,
                m = a ? "width" : "height",
                n = i["plot" + (a ? "Left" : "Top")],
                o, x, q = h || 1,
                p = i.inverted,
                w = i.bounds[a ? "h" : "v"],
                r = b.length === 1,
                t = b[0][l],
                v = c[0][l],
                s = !r && b[1][l],
                u = !r && c[1][l],
                y, c = function() {
                    !r && P(t - s) > 20 && (q = h || P(v - u) / P(t - s));
                    x = (n - v) / q + t;
                    o = i["plot" + (a ? "Width" : "Height")] / q
                };
            c();
            b = x;
            b < w.min ? (b = w.min, y = !0) : b + o > w.max && (b = w.max - o, y = !0);
            y ? (v -= 0.8 * (v - g[j][0]), r || (u -= 0.8 * (u - g[j][1])), c()) : g[j] = [v, u];
            p || (f[j] = x - n, f[m] = o);
            f = p ? 1 / q : q;
            e[m] = o;
            e[j] = b;
            d[p ? a ? "scaleY" :
                "scaleX" : "scale" + k] = q;
            d["translate" + k] = f * n + (v - f * t)
        },
        pinch: function(a) {
            var b = this,
                c = b.chart,
                d = b.pinchDown,
                e = b.followTouchMove,
                f = a.touches,
                g = f.length,
                h = b.lastValidTouch,
                i = b.hasZoom,
                j = b.selectionMarker,
                k = {},
                l = g === 1 && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick),
                m = {};
            (i || e) && !l && a.preventDefault();
            za(f, function(a) {
                return b.normalize(a)
            });
            if (a.type === "touchstart") p(f, function(a, b) {
                d[b] = {
                    chartX: a.chartX,
                    chartY: a.chartY
                }
            }), h.x = [d[0].chartX, d[1] && d[1].chartX], h.y = [d[0].chartY,
                d[1] && d[1].chartY
            ], p(c.axes, function(a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"],
                        d = a.minPixelPadding,
                        e = a.toPixels(q(a.options.min, a.dataMin)),
                        f = a.toPixels(q(a.options.max, a.dataMax)),
                        g = A(e, f),
                        e = v(e, f);
                    b.min = A(a.pos, g - d);
                    b.max = v(a.pos + a.len, e + d)
                }
            }), b.res = !0;
            else if (d.length) {
                if (!j) b.selectionMarker = j = s({
                    destroy: ra
                }, c.plotBox);
                b.pinchTranslate(d, f, k, j, m, h);
                b.hasPinched = i;
                b.scaleGroups(k, m);
                if (!i && e && g === 1) this.runPointActions(b.normalize(a));
                else if (b.res) b.res = !1, this.reset(!1, 0)
            }
        },
        onContainerTouchStart: function(a) {
            var b =
                this.chart;
            va = b.index;
            a.touches.length === 1 ? (a = this.normalize(a), b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) ? (this.runPointActions(a), this.pinch(a)) : this.reset()) : a.touches.length === 2 && this.pinch(a)
        },
        onContainerTouchMove: function(a) {
            (a.touches.length === 1 || a.touches.length === 2) && this.pinch(a)
        },
        onDocumentTouchEnd: function(a) {
            ba[va] && ba[va].pointer.drop(a)
        }
    });
    if (S.PointerEvent || S.MSPointerEvent) {
        var Aa = {},
            Kb = !!S.PointerEvent,
            gc = function() {
                var a, b = [];
                b.item = function(a) {
                    return this[a]
                };
                for (a in Aa) Aa.hasOwnProperty(a) &&
                    b.push({
                        pageX: Aa[a].pageX,
                        pageY: Aa[a].pageY,
                        target: Aa[a].target
                    });
                return b
            },
            Lb = function(a, b, c, d) {
                a = a.originalEvent || a;
                if ((a.pointerType === "touch" || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && ba[va]) d(a), d = ba[va].pointer, d[b]({
                    type: c,
                    target: a.currentTarget,
                    preventDefault: ra,
                    touches: gc()
                })
            };
        s($a.prototype, {
            onContainerPointerDown: function(a) {
                Lb(a, "onContainerTouchStart", "touchstart", function(a) {
                    Aa[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        target: a.currentTarget
                    }
                })
            },
            onContainerPointerMove: function(a) {
                Lb(a,
                    "onContainerTouchMove", "touchmove",
                    function(a) {
                        Aa[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY
                        };
                        if (!Aa[a.pointerId].target) Aa[a.pointerId].target = a.currentTarget
                    })
            },
            onDocumentPointerUp: function(a) {
                Lb(a, "onContainerTouchEnd", "touchend", function(a) {
                    delete Aa[a.pointerId]
                })
            },
            batchMSEvents: function(a) {
                a(this.chart.container, Kb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, Kb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(E, Kb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        });
        Q($a.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            (this.hasZoom || this.followTouchMove) && K(b.container, {
                "-ms-touch-action": $,
                "touch-action": $
            })
        });
        Q($a.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(z)
        });
        Q($a.prototype, "destroy", function(a) {
            this.batchMSEvents(U);
            a.call(this)
        })
    }
    var sb = N.Legend = function(a, b) {
        this.init(a, b)
    };
    sb.prototype = {
        init: function(a, b) {
            var c = this,
                d = b.itemStyle,
                e = q(b.padding, 8),
                f = b.itemMarginTop || 0;
            this.options = b;
            if (b.enabled) c.itemStyle =
                d, c.itemHiddenStyle = y(d, b.itemHiddenStyle), c.itemMarginTop = f, c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.lastLineHeight = 0, c.symbolWidth = q(b.symbolWidth, 16), c.pages = [], c.render(), z(c.chart, "endResize", function() {
                    c.positionCheckboxes()
                })
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e = a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color : g,
                h = b ? a.legendColor || a.color || "#CCC" : g,
                g = a.options && a.options.marker,
                i = {
                    fill: h
                },
                j;
            d && d.css({
                fill: c,
                color: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g && f.isMarker)
                    for (j in i.stroke = h, g = a.convertAttribs(g), g) d = g[j], d !== r && (i[j] = d);
                f.attr(i)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            if (f) f.x = e, f.y = d
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            p(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Va(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            if (b) this.box = b.destroy();
            if (a) this.group = a.destroy()
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight;
            if (b) c = b.translateY, p(this.allItems, function(e) {
                var f = e.checkbox,
                    g;
                f && (g = c + f.y + (a || 0) + 3, K(f, {
                    left: b.translateX + e.checkboxOffset + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && g < c + d - 6 ? "" : $
                }))
            })
        },
        renderTitle: function() {
            var a = this.padding,
                b = this.options.title,
                c = 0;
            if (b.text) {
                if (!this.title) this.title =
                    this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({
                        zIndex: 1
                    }).css(b.style).add(this.group);
                a = this.title.getBBox();
                c = a.height;
                this.offsetWidth = a.width;
                this.contentGroup.attr({
                    translateY: c
                })
            }
            this.titleHeight = c
        },
        renderItem: function(a) {
            var b = this.chart,
                c = b.renderer,
                d = this.options,
                e = d.layout === "horizontal",
                f = this.symbolWidth,
                g = d.symbolPadding,
                h = this.itemStyle,
                i = this.itemHiddenStyle,
                j = this.padding,
                k = e ? q(d.itemDistance, 20) : 0,
                l = !d.rtl,
                m = d.width,
                n = d.itemMarginBottom || 0,
                o = this.itemMarginTop,
                x = this.initialItemX,
                p = a.legendItem,
                r = a.series && a.series.drawLegendSymbol ? a.series : a,
                w = r.options,
                w = this.createCheckboxForItem && w && w.showCheckbox,
                s = d.useHTML;
            if (!p) {
                a.legendGroup = c.g("legend-item").attr({
                    zIndex: 1
                }).add(this.scrollGroup);
                a.legendItem = p = c.text(d.labelFormat ? Ma(d.labelFormat, a) : d.labelFormatter.call(a), l ? f + g : -g, this.baseline || 0, s).css(y(a.visible ? h : i)).attr({
                    align: l ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup);
                if (!this.baseline) this.baseline = c.fontMetrics(h.fontSize,
                    p).f + 3 + o, p.attr("y", this.baseline);
                r.drawLegendSymbol(this, a);
                this.setItemEvents && this.setItemEvents(a, p, s, h, i);
                this.colorizeItem(a, a.visible);
                w && this.createCheckboxForItem(a)
            }
            c = p.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (w ? 20 : 0);
            this.itemHeight = g = t(a.legendItemHeight || c.height);
            if (e && this.itemX - x + f > (m || b.chartWidth - 2 * j - x - d.x)) this.itemX = x, this.itemY += o + this.lastLineHeight + n, this.lastLineHeight = 0;
            this.maxItemWidth = v(this.maxItemWidth, f);
            this.lastItemY = o + this.itemY +
                n;
            this.lastLineHeight = v(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += o + g + n, this.lastLineHeight = g);
            this.offsetWidth = m || v((e ? this.itemX - x - k : f) + j, this.offsetWidth)
        },
        getAllItems: function() {
            var a = [];
            p(this.chart.series, function(b) {
                var c = b.options;
                if (q(c.showInLegend, !u(c.linkedTo) ? r : !1, !0)) a = a.concat(b.legendItems || (c.legendType === "point" ? b.data : b))
            });
            return a
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, i = a.box,
                j = a.options,
                k = a.padding,
                l = j.borderWidth,
                m = j.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            if (!d) a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup);
            a.renderTitle();
            e = a.getAllItems();
            xb(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            j.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            p(e, function(b) {
                a.renderItem(b)
            });
            g = j.width || a.offsetWidth;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            if (l || m) {
                g += k;
                h += k;
                if (i) {
                    if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp({
                        width: g,
                        height: h
                    })), i.isNew = !1
                } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({
                    stroke: j.borderColor,
                    "stroke-width": l || 0,
                    fill: m || $
                }).add(d).shadow(j.shadow), i.isNew = !0;
                i[f ? "show" : "hide"]()
            }
            a.legendWidth = g;
            a.legendHeight = h;
            p(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(s({
                width: g,
                height: h
            }, j), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b =
                this,
                c = this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding,
                g = e.maxHeight,
                h, i = this.clipRect,
                j = e.navigation,
                k = q(j.animation, !0),
                l = j.arrowSize || 12,
                m = this.nav,
                n = this.pages,
                o, x = this.allItems;
            e.layout === "horizontal" && (f /= 2);
            g && (f = A(f, g));
            n.length = 0;
            if (a > f && !e.useHTML) {
                this.clipHeight = h = v(f - 20 - this.titleHeight - this.padding, 0);
                this.currentPage = q(this.currentPage, 1);
                this.fullHeight = a;
                p(x, function(a, b) {
                    var c = a._legendItemPos[1],
                        d = t(a.legendItem.getBBox().height),
                        e = n.length;
                    if (!e || c - n[e - 1] > h && (o || c) !== n[e - 1]) n.push(o || c), e++;
                    b === x.length - 1 && c + d - n[e - 1] > h && n.push(c);
                    c !== o && (o = c)
                });
                if (!i) i = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(i);
                i.attr({
                    height: h
                });
                if (!m) this.nav = m = d.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = d.symbol("triangle", 0, 0, l, l).on("click", function() {
                    b.scroll(-1, k)
                }).add(m), this.pager = d.text("", 15, 10).css(j.style).add(m), this.down = d.symbol("triangle-down", 0, 0, l, l).on("click", function() {
                    b.scroll(1, k)
                }).add(m);
                b.scroll(0);
                a = f
            } else if (m) i.attr({
                height: c.chartHeight
            }), m.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0;
            return a
        },
        scroll: function(a, b) {
            var c = this.pages,
                d = c.length,
                e = this.currentPage + a,
                f = this.clipHeight,
                g = this.options.navigation,
                h = g.activeColor,
                g = g.inactiveColor,
                i = this.pager,
                j = this.padding;
            e > d && (e = d);
            if (e > 0) b !== r && ab(b, this.chart), this.nav.attr({
                    translateX: j,
                    translateY: f + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                }), this.up.attr({
                    fill: e === 1 ? g : h
                }).css({
                    cursor: e === 1 ? "default" : "pointer"
                }),
                i.attr({
                    text: e + "/" + d
                }), this.down.attr({
                    x: 18 + this.pager.getBBox().width,
                    fill: e === d ? g : h
                }).css({
                    cursor: e === d ? "default" : "pointer"
                }), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({
                    translateY: c
                }), this.currentPage = e, this.positionCheckboxes(c)
        }
    };
    T = N.LegendSymbolMixin = {
        drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || 12;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(b.legendGroup)
        },
        drawLineMarker: function(a) {
            var b =
                this.options,
                c = b.marker,
                d;
            d = a.symbolWidth;
            var e = this.chart.renderer,
                f = this.legendGroup,
                a = a.baseline - t(e.fontMetrics(a.options.itemStyle.fontSize, this.legendItem).b * 0.3),
                g;
            if (b.lineWidth) {
                g = {
                    "stroke-width": b.lineWidth
                };
                if (b.dashStyle) g.dashstyle = b.dashStyle;
                this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f)
            }
            if (c && c.enabled !== !1) b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0
        }
    };
    (/Trident\/7\.0/.test(Ga) || cb) && Q(sb.prototype, "positionItem", function(a,
        b) {
        var c = this,
            d = function() {
                b._legendItemPos && a.call(c, b)
            };
        d();
        setTimeout(d)
    });
    ya.prototype = {
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = y(F, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {
                h: {},
                v: {}
            };
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this,
                g;
            f.index = ba.length;
            ba.push(f);
            gb++;
            d.reflow !== !1 && z(f,
                "load",
                function() {
                    f.initReflow()
                });
            if (e)
                for (g in e) z(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = la ? !1 : q(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        },
        initSeries: function(a) {
            var b = this.options.chart;
            (b = B[a.type || b.type || b.defaultSeriesType]) || ma(17, !0);
            b = new b;
            b.init(this, a);
            return b
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a,
                a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
        },
        adjustTickAmounts: function() {
            this.options.chart.alignTicks !== !1 && p(this.axes,
                function(a) {
                    a.adjustTickAmount()
                });
            this.maxTicks = null
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.pointer,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h, i = this.hasCartesianSeries,
                j = this.isDirtyBox,
                k = c.length,
                l = k,
                m = this.renderer,
                n = m.isHidden(),
                o = [];
            ab(a, this);
            n && this.cloneRenderTo();
            for (this.layOutTitles(); l--;)
                if (a = c[l], a.options.stacking && (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h)
                for (l = k; l--;)
                    if (a = c[l], a.options.stacking) a.isDirty = !0;
            p(c, function(a) {
                a.isDirty && a.options.legendType === "point" && (f = !0)
            });
            if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1;
            g && this.getStacks();
            if (i) {
                if (!this.isResizing) this.maxTicks = null, p(b, function(a) {
                    a.setScale()
                });
                this.adjustTickAmounts()
            }
            this.getMargins();
            i && (p(b, function(a) {
                a.isDirty && (j = !0)
            }), p(b, function(a) {
                if (a.isDirtyExtremes) a.isDirtyExtremes = !1, o.push(function() {
                    J(a, "afterSetExtremes", s(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                });
                (j || g) && a.redraw()
            }));
            j && this.drawChartBox();
            p(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            m.draw();
            J(this, "redraw");
            n && this.cloneRenderTo(!0);
            p(o, function(a) {
                a.call()
            })
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++)
                    if (e[b].id === a) return e[b]
            }
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis = qa(b.xAxis || {}),
                b = b.yAxis = qa(b.yAxis || {});
            p(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            p(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            p(c, function(b) {
                new D(a, b)
            });
            a.adjustTickAmounts()
        },
        getSelectedPoints: function() {
            var a = [];
            p(this.series, function(b) {
                a = a.concat(qb(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return qb(this.series, function(a) {
                return a.selected
            })
        },
        getStacks: function() {
            var a = this;
            p(a.yAxis, function(a) {
                if (a.stacks && a.hasVisibleSeries) a.oldStacks = a.stacks
            });
            p(a.series, function(b) {
                if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries ===
                        !1)) b.stackKey = b.type + q(b.options.stack, "")
            })
        },
        setTitle: function(a, b, c) {
            var g;
            var d = this,
                e = d.options,
                f;
            f = e.title = y(e.title, a);
            g = e.subtitle = y(e.subtitle, b), e = g;
            p([
                ["title", a, f],
                ["subtitle", b, e]
            ], function(a) {
                var b = a[0],
                    c = d[b],
                    e = a[1],
                    a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add())
            });
            d.layOutTitles(c)
        },
        layOutTitles: function(a) {
            var b = 0,
                c = this.title,
                d = this.subtitle,
                e = this.options,
                f = e.title,
                e = e.subtitle,
                g = this.renderer,
                h = this.spacingBox.width - 44;
            if (c && (c.css({
                    width: (f.width || h) + "px"
                }).align(s({
                    y: g.fontMetrics(f.style.fontSize, c).b - 3
                }, f), !1, "spacingBox"), !f.floating && !f.verticalAlign)) b = c.getBBox().height;
            d && (d.css({
                width: (e.width || h) + "px"
            }).align(s({
                y: b + (f.margin - 13) + g.fontMetrics(f.style.fontSize, d).b
            }, e), !1, "spacingBox"), !e.floating && !e.verticalAlign && (b = Ya(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            if (!this.isDirtyBox && c) this.isDirtyBox = c, this.hasRendered &&
                q(a, !0) && this.isDirtyBox && this.redraw()
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = a.width,
                a = a.height,
                c = this.renderToClone || this.renderTo;
            if (!u(b)) this.containerWidth = pb(c, "width");
            if (!u(a)) this.containerHeight = pb(c, "height");
            this.chartWidth = v(0, b || this.containerWidth || 600);
            this.chartHeight = v(0, q(a, this.containerHeight > 19 ? this.containerHeight : 400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), Va(b), delete this.renderToClone) : (c &&
                c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), K(b, {
                    position: "absolute",
                    top: "-9999px",
                    display: "block"
                }), b.style.setProperty && b.style.setProperty("display", "block", "important"), E.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options.chart,
                c, d, e;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + Fb++;
            if (Sa(a)) this.renderTo = a = E.getElementById(a);
            a || ma(13, !0);
            c = H(Y(a, "data-highcharts-chart"));
            !isNaN(c) && ba[c] && ba[c].hasRendered &&
                ba[c].destroy();
            Y(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            !b.skipClone && !a.offsetWidth && this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = aa(Wa, {
                className: "highcharts-container" + (b.className ? " " + b.className : ""),
                id: e
            }, s({
                position: "relative",
                overflow: "hidden",
                width: c + "px",
                height: d + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, b.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer =
                b.forExport ? new na(a, c, d, b.style, !0) : new Za(a, c, d, b.style);
            la && this.renderer.create(this, a, c, d)
        },
        getMargins: function() {
            var a = this.spacing,
                b, c = this.legend,
                d = this.margin,
                e = this.options.legend,
                f = q(e.margin, 20),
                g = e.x,
                h = e.y,
                i = e.align,
                j = e.verticalAlign,
                k = this.titleOffset;
            this.resetMargins();
            b = this.axisOffset;
            if (k && !u(d[0])) this.plotTop = v(this.plotTop, k + this.options.title.margin + a[0]);
            if (c.display && !e.floating)
                if (i === "right") {
                    if (!u(d[1])) this.marginRight = v(this.marginRight, c.legendWidth - g + f + a[1])
                } else if (i ===
                "left") {
                if (!u(d[3])) this.plotLeft = v(this.plotLeft, c.legendWidth + g + f + a[3])
            } else if (j === "top") {
                if (!u(d[0])) this.plotTop = v(this.plotTop, c.legendHeight + h + f + a[0])
            } else if (j === "bottom" && !u(d[2])) this.marginBottom = v(this.marginBottom, c.legendHeight - h + f + a[2]);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            this.hasCartesianSeries && p(this.axes, function(a) {
                a.getOffset()
            });
            u(d[3]) || (this.plotLeft += b[3]);
            u(d[0]) || (this.plotTop += b[0]);
            u(d[2]) || (this.marginBottom += b[2]);
            u(d[1]) || (this.marginRight += b[1]);
            this.setChartSize()
        },
        reflow: function(a) {
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e = c.width || pb(d, "width"),
                f = c.height || pb(d, "height"),
                c = a ? a.target : S,
                d = function() {
                    if (b.container) b.setSize(e, f, !1), b.hasUserSize = null
                };
            if (!b.hasUserSize && e && f && (c === S || c === E)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();
                b.containerWidth = e;
                b.containerHeight = f
            }
        },
        initReflow: function() {
            var a =
                this,
                b = function(b) {
                    a.reflow(b)
                };
            z(S, "resize", b);
            z(a, "destroy", function() {
                U(S, "resize", b)
            })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g;
            d.isResizing += 1;
            g = function() {
                d && J(d, "endResize", null, function() {
                    d.isResizing -= 1
                })
            };
            ab(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            if (u(a)) d.chartWidth = e = v(0, t(a)), d.hasUserSize = !!e;
            if (u(b)) d.chartHeight = f = v(0, t(b));
            (Fa ? rb : K)(d.container, {
                width: e + "px",
                height: f + "px"
            }, Fa);
            d.setChartSize(!0);
            d.renderer.setSize(e, f, c);
            d.maxTicks = null;
            p(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            p(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            J(d, "resize");
            Fa === !1 ? g() : setTimeout(g, Fa && Fa.duration || 500)
        },
        setChartSize: function(a) {
            var b = this.inverted,
                c = this.renderer,
                d = this.chartWidth,
                e = this.chartHeight,
                f = this.options.chart,
                g = this.spacing,
                h = this.clipOffset,
                i, j, k, l;
            this.plotLeft = i = t(this.plotLeft);
            this.plotTop = j = t(this.plotTop);
            this.plotWidth = k = v(0, t(d - i - this.marginRight));
            this.plotHeight =
                l = v(0, t(e - j - this.marginBottom));
            this.plotSizeX = b ? l : k;
            this.plotSizeY = b ? k : l;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {
                x: g[3],
                y: g[0],
                width: d - g[3] - g[1],
                height: e - g[0] - g[2]
            };
            this.plotBox = c.plotBox = {
                x: i,
                y: j,
                width: k,
                height: l
            };
            d = 2 * V(this.plotBorderWidth / 2);
            b = Ya(v(d, h[3]) / 2);
            c = Ya(v(d, h[0]) / 2);
            this.clipBox = {
                x: b,
                y: c,
                width: V(this.plotSizeX - v(d, h[1]) / 2 - b),
                height: v(0, V(this.plotSizeY - v(d, h[2]) / 2 - c))
            };
            a || p(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a =
                this.spacing,
                b = this.margin;
            this.plotTop = q(b[0], a[0]);
            this.marginRight = q(b[1], a[1]);
            this.marginBottom = q(b[2], a[2]);
            this.plotLeft = q(b[3], a[3]);
            this.axisOffset = [0, 0, 0, 0];
            this.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                i = a.borderWidth || 0,
                j = a.backgroundColor,
                k = a.plotBackgroundColor,
                l = a.plotBackgroundImage,
                m = a.plotBorderWidth || 0,
                n, o = this.plotLeft,
                x = this.plotTop,
                q = this.plotWidth,
                p = this.plotHeight,
                w = this.plotBox,
                r = this.clipRect,
                t = this.clipBox;
            n = i + (a.shadow ? 8 : 0);
            if (i || j)
                if (e) e.animate(e.crisp({
                    width: c - n,
                    height: d - n
                }));
                else {
                    e = {
                        fill: j || $
                    };
                    if (i) e.stroke = a.borderColor, e["stroke-width"] = i;
                    this.chartBackground = b.rect(n / 2, n / 2, c - n, d - n, a.borderRadius, i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)
                }
            if (k) f ? f.animate(w) : this.plotBackground = b.rect(o, x, q, p, 0).attr({
                fill: k
            }).add().shadow(a.plotShadow);
            if (l) h ? h.animate(w) : this.plotBGImage =
                b.image(l, o, x, q, p).add();
            r ? r.animate({
                width: t.width,
                height: t.height
            }) : this.clipRect = b.clipRect(t);
            if (m) g ? g.animate(g.crisp({
                x: o,
                y: x,
                width: q,
                height: p,
                strokeWidth: -m
            })) : this.plotBorder = b.rect(o, x, q, p, 0, -m).attr({
                stroke: a.plotBorderColor,
                "stroke-width": m,
                fill: $,
                zIndex: 1
            }).add();
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            p(["inverted", "angular", "polar"], function(g) {
                c = B[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f &&
                    e--;)(c = B[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        linkSeries: function() {
            var a = this,
                b = a.series;
            p(b, function(a) {
                a.linkedSeries.length = 0
            });
            p(b, function(b) {
                var d = b.options.linkedTo;
                if (Sa(d) && (d = d === ":previous" ? a.series[b.index - 1] : a.get(d))) d.linkedSeries.push(b), b.linkedParent = d
            })
        },
        renderSeries: function() {
            p(this.series, function(a) {
                a.translate();
                a.setTooltipPoints && a.setTooltipPoints();
                a.render()
            })
        },
        renderLabels: function() {
            var a = this,
                b = a.options.labels;
            b.items && p(b.items, function(c) {
                var d = s(b.style,
                        c.style),
                    e = H(d.left) + a.plotLeft,
                    f = H(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({
                    zIndex: 2
                }).css(d).add()
            })
        },
        render: function() {
            var a = this.axes,
                b = this.renderer,
                c = this.options;
            this.setTitle();
            this.legend = new sb(this, c.legend);
            this.getStacks();
            p(a, function(a) {
                a.setScale()
            });
            this.getMargins();
            this.maxTicks = null;
            p(a, function(a) {
                a.setTickPositions(!0);
                a.setMaxTicks()
            });
            this.adjustTickAmounts();
            this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && p(a, function(a) {
                a.render()
            });
            if (!this.seriesGroup) this.seriesGroup = b.g("series-group").attr({
                zIndex: 3
            }).add();
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        },
        showCredits: function(a) {
            if (a.enabled && !this.credits) this.credits = this.renderer.text(a.text, 0, 0).on("click", function() {
                if (a.href) location.href = a.href
            }).attr({
                align: a.position.align,
                zIndex: 8
            }).css(a.style).add().align(a.position)
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            J(a, "destroy");
            ba[a.index] =
                r;
            gb--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            U(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            p("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            if (d) d.innerHTML = "", U(d), f && Va(d);
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !ea && S == S.top &&
                E.readyState !== "complete" || la && !S.canvg ? (la ? Vb.push(function() {
                    a.firstRender()
                }, a.options.global.canvasToolsURL) : E.attachEvent("onreadystatechange", function() {
                    E.detachEvent("onreadystatechange", a.firstRender);
                    E.readyState === "complete" && a.firstRender()
                }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options,
                c = a.callback;
            if (a.isReadyToRender()) {
                a.getContainer();
                J(a, "init");
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                p(b.series || [], function(b) {
                    a.initSeries(b)
                });
                a.linkSeries();
                J(a,
                    "beforeRender");
                if (N.Pointer) a.pointer = new $a(a, b);
                a.render();
                a.renderer.draw();
                c && c.apply(a, [a]);
                p(a.callbacks, function(b) {
                    b.apply(a, [a])
                });
                a.cloneRenderTo(!0);
                J(a, "load")
            }
        },
        splashArray: function(a, b) {
            var c = b[a],
                c = ha(c) ? c : [c, c, c, c];
            return [q(b[a + "Top"], c[0]), q(b[a + "Right"], c[1]), q(b[a + "Bottom"], c[2]), q(b[a + "Left"], c[3])]
        }
    };
    ya.prototype.callbacks = [];
    ga = N.CenteredSeriesMixin = {
        getCenter: function() {
            var a = this.options,
                b = this.chart,
                c = 2 * (a.slicedOffset || 0),
                d, e = b.plotWidth - 2 * c,
                f = b.plotHeight - 2 * c,
                b = a.center,
                a = [q(b[0], "50%"), q(b[1], "50%"), a.size || "100%", a.innerSize || 0],
                g = A(e, f),
                h;
            return za(a, function(a, b) {
                h = /%$/.test(a);
                d = b < 2 || b === 2 && h;
                return (h ? [e, f, g, g][b] * H(a) / 100 : a) + (d ? c : 0)
            })
        }
    };
    var Ba = function() {};
    Ba.prototype = {
        init: function(a, b, c) {
            this.series = a;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length)) a.colorCounter = 0;
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a,
            b) {
            var c = this.series,
                d = c.options.pointValKey || c.pointValKey,
                a = Ba.prototype.optionsToObject.call(this, a);
            s(this, a);
            this.options = this.options ? s(this.options, a) : a;
            if (d) this.y = this[d];
            if (this.x === r && c) this.x = b === r ? c.autoIncrement() : b;
            return this
        },
        optionsToObject: function(a) {
            var b = {},
                c = this.series,
                d = c.pointArrayMap || ["y"],
                e = d.length,
                f = 0,
                g = 0;
            if (typeof a === "number" || a === null) b[d[0]] = a;
            else if (Ja(a)) {
                if (a.length > e) {
                    c = typeof a[0];
                    if (c === "string") b.name = a[0];
                    else if (c === "number") b.x = a[0];
                    f++
                }
                for (; g < e;) b[d[g++]] =
                    a[f++]
            } else if (typeof a === "object") {
                b = a;
                if (a.dataLabels) c._hasPointLabels = !0;
                if (a.marker) c._hasPointMarkers = !0
            }
            return b
        },
        destroy: function() {
            var a = this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            if (b && (this.setState(), ta(b, this), !b.length)) a.hoverPoints = null;
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) U(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a = "graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),
                    b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        tooltipFormatter: function(a) {
            var b = this.series,
                c = b.tooltipOptions,
                d = q(c.valueDecimals, ""),
                e = c.valuePrefix || "",
                f = c.valueSuffix || "";
            p(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return Ma(a, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            a === "click" && e.allowPointSelect && (c = function(a) {
                d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            J(this, a, b, c)
        }
    };
    var M = function() {};
    M.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Ba,
        sorted: !0,
        requireSorting: !0,

        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        axisTypes: ["xAxis",
            "yAxis"
        ],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(a, b) {
            var c = this,
                d, e, f = a.series,
                g = function(a, b) {
                    return q(a.options.index, a._i) - q(b.options.index, b._i)
                };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            s(c, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: b.visible !== !1,
                selected: b.selected === !0
            });
            if (la) b.animation = !1;
            e = b.events;
            for (d in e) z(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            p(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            if (c.isCartesian) a.hasCartesianSeries = !0;
            f.push(c);
            c._i = f.length - 1;
            xb(f, g);
            this.yAxis && xb(this.yAxis.series, g);
            p(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            p(a.axisTypes || [], function(e) {
                p(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== r && b[e] === d.id || b[e] === r && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0
                });
                !a[e] && a.optionalAxis !== e && ma(18, !0)
            })
        },
        updateParallelArrays: function(a, b) {
            var c = a.series,
                d = arguments;
            p(c.parallelArrays, typeof b === "number" ? function(d) {
                var f = d === "y" && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                b = q(b, a.pointStart, 0);
            this.pointInterval = q(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b
        },
        getSegments: function() {
            var a = -1,
                b = [],
                c, d = this.points,
                e = d.length;
            if (e)
                if (this.options.connectNulls) {
                    for (c = e; c--;) d[c].y === null && d.splice(c, 1);
                    d.length && (b = [d])
                } else p(d, function(c, g) {
                    c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                });
            this.segments = b
        },
        setOptions: function(a) {
            var b = this.chart,
                c = b.options.plotOptions,
                b = b.userOptions || {},
                d = b.plotOptions || {},
                e = c[this.type];
            this.userOptions = a;
            c = y(e, c.series, a);
            this.tooltipOptions = y(F.tooltip, F.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] &&
                d[this.type].tooltip, a.tooltip);
            e.marker === null && delete c.marker;
            return c
        },
        getCyclic: function(a, b, c) {
            var d = this.userOptions,
                e = "_" + a + "Index",
                f = a + "Counter";
            b || (u(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        },
        getColor: function() {
            this.options.colorByPoint || this.getCyclic("color", this.options.color || W[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            if (/^url/.test(this.symbol)) a.radius =
                0
        },
        drawLegendSymbol: T.drawLineMarker,
        setData: function(a, b, c, d) {
            var e = this,
                f = e.points,
                g = f && f.length || 0,
                h, i = e.options,
                j = e.chart,
                k = null,
                l = e.xAxis,
                m = l && !!l.categories,
                n = e.tooltipPoints,
                o = i.turboThreshold,
                x = this.xData,
                I = this.yData,
                t = (h = e.pointArrayMap) && h.length,
                a = a || [];
            h = a.length;
            b = q(b, !0);
            if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData) p(a, function(a, b) {
                f[b].update(a, !1, null, !1)
            });
            else {
                e.xIncrement = null;
                e.pointRange = m ? 1 : i.pointRange;
                e.colorCounter = 0;
                p(this.parallelArrays, function(a) {
                    e[a + "Data"].length =
                        0
                });
                if (o && h > o) {
                    for (c = 0; k === null && c < h;) k = a[c], c++;
                    if (pa(k)) {
                        m = q(i.pointStart, 0);
                        i = q(i.pointInterval, 1);
                        for (c = 0; c < h; c++) x[c] = m, I[c] = a[c], m += i;
                        e.xIncrement = m
                    } else if (Ja(k))
                        if (t)
                            for (c = 0; c < h; c++) i = a[c], x[c] = i[0], I[c] = i.slice(1, t + 1);
                        else
                            for (c = 0; c < h; c++) i = a[c], x[c] = i[0], I[c] = i[1];
                    else ma(12)
                } else
                    for (c = 0; c < h; c++)
                        if (a[c] !== r && (i = {
                                series: e
                            }, e.pointClass.prototype.applyOptions.apply(i, [a[c]]), e.updateParallelArrays(i, c), m && i.name)) l.names[i.x] = i.name;
                Sa(I[0]) && ma(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--;) f[c] &&
                    f[c].destroy && f[c].destroy();
                if (n) n.length = 0;
                if (l) l.minRange = l.userMinRange;
                e.isDirty = e.isDirtyData = j.isDirtyBox = !0;
                c = !1
            }
            b && j.redraw(c)
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e;
            e = 0;
            var f, g, h = this.xAxis,
                i, j = this.options;
            i = j.cropThreshold;
            var k = 0,
                l = this.isCartesian,
                m, n;
            if (l && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1;
            if (h) m = h.getExtremes(), n = m.min, m = m.max;
            if (l && this.sorted && (!i || d > i || this.forceCrop))
                if (b[d - 1] < n || b[0] > m) b = [], c = [];
                else if (b[0] < n || b[d - 1] > m) e =
                this.cropData(this.xData, this.yData, n, m), b = e.xData, c = e.yData, e = e.start, f = !0, k = b.length;
            for (i = b.length - 1; i >= 0; i--) d = b[i] - b[i - 1], !f && b[i] > n && b[i] < m && k++, d > 0 && (g === r || d < g) ? g = d : d < 0 && this.requireSorting && ma(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.activePointCount = k;
            if (j.pointRange === null) this.pointRange = g || 1;
            this.closestPointRange = g
        },
        cropData: function(a, b, c, d) {
            var e = a.length,
                f = 0,
                g = e,
                h = q(this.cropShoulder, 1),
                i;
            for (i = 0; i < e; i++)
                if (a[i] >= c) {
                    f = v(0, i - h);
                    break
                }
            for (; i <
                e; i++)
                if (a[i] > d) {
                    g = i + h;
                    break
                }
            return {
                xData: a.slice(f, g),
                yData: b.slice(f, g),
                start: f,
                end: g
            }
        },
        generatePoints: function() {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                i, j = this.hasGroupedData,
                k, l = [],
                m;
            if (!b && !j) b = [], b.length = a.length, b = this.data = b;
            for (m = 0; m < g; m++) i = h + m, j ? l[m] = (new f).init(this, [d[m]].concat(qa(e[m]))) : (b[i] ? k = b[i] : a[i] !== r && (b[i] = k = (new f).init(this, a[i], d[m])), l[m] = k), l[m].index = i;
            if (b && (g !== (c = b.length) ||
                    j))
                for (m = 0; m < c; m++)
                    if (m === h && !j && (m += g), b[m]) b[m].destroyElements(), b[m].plotX = r;
            this.data = b;
            this.points = l
        },
        getExtremes: function(a) {
            var b = this.yAxis,
                c = this.processedXData,
                d, e = [],
                f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min,
                h = d.max,
                i, j, k, l, a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (l = 0; l < d; l++)
                if (j = c[l], k = a[l], i = k !== null && k !== r && (!b.isLog || k.length || k > 0), j = this.getExtremesFromAll || this.cropped || (c[l + 1] || j) >= g && (c[l - 1] || j) <= h, i && j)
                    if (i = k.length)
                        for (; i--;) k[i] !== null && (e[f++] = k[i]);
                    else e[f++] =
                        k;
            this.dataMin = q(void 0, Ua(e));
            this.dataMax = q(void 0, Ea(e))
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, i = a.pointPlacement, j = i === "between" || pa(i), k = a.threshold, a = 0; a < g; a++) {
                var l = f[a],
                    m = l.x,
                    n = l.y,
                    o = l.low,
                    x = b && e.stacks[(this.negStacks && n < k ? "-" : "") + this.stackKey];
                if (e.isLog && n <= 0) l.y = n = null, ma(10);
                l.plotX = c.translate(m, 0, 0, 0, 1, i, this.type ===
                    "flags");
                if (b && this.visible && x && x[m]) x = x[m], n = x.points[this.index + "," + a], o = n[0], n = n[1], o === 0 && (o = q(k, e.min)), e.isLog && o <= 0 && (o = null), l.total = l.stackTotal = x.total, l.percentage = x.total && l.y / x.total * 100, l.stackY = n, x.setOffset(this.pointXOffset || 0, this.barW || 0);
                l.yBottom = u(o) ? e.translate(o, 0, 1, 0, 1) : null;
                h && (n = this.modifyValue(n, l));
                l.plotY = typeof n === "number" && n !== Infinity ? e.translate(n, 0, 1, 0, 1) : r;
                l.clientX = j ? c.translate(m, 0, 0, 0, 1) : l.plotX;
                l.negative = l.y < (k || 0);
                l.category = d && d[l.x] !== r ? d[l.x] : l.x
            }
            this.getSegments()
        },
        animate: function(a) {
            var b = this.chart,
                c = b.renderer,
                d;
            d = this.options.animation;
            var e = this.clipBox || b.clipBox,
                f = b.inverted,
                g;
            if (d && !ha(d)) d = W[this.type].animation;
            g = ["_sharedClip", d.duration, d.easing, e.height].join(",");
            a ? (a = b[g], d = b[g + "m"], a || (b[g] = a = c.clipRect(s(e, {
                width: 0
            })), b[g + "m"] = d = c.clipRect(-99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), this.group.clip(a), this.markerGroup.clip(d), this.sharedClipKey = g) : ((a = b[g]) && a.animate({
                width: b.plotSizeX
            }, d), b[g + "m"] && b[g + "m"].animate({
                width: b.plotSizeX +
                    99
            }, d), this.animate = null)
        },
        afterAnimate: function() {
            var a = this.chart,
                b = this.sharedClipKey,
                c = this.group,
                d = this.clipBox;
            if (c && this.options.clip !== !1) {
                if (!b || !d) c.clip(d ? a.renderer.clipRect(d) : a.clipRect);
                this.markerGroup.clip()
            }
            J(this, "afterAnimate");
            setTimeout(function() {
                b && a[b] && (d || (a[b] = a[b].destroy()), a[b + "m"] && (a[b + "m"] = a[b + "m"].destroy()))
            }, 100)
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart,
                d, e, f, g, h, i, j, k, l = this.options.marker,
                m = this.pointAttr[""],
                n, o, x, p = this.markerGroup,
                oa = q(l.enabled, !this.requireSorting || this.activePointCount < 0.5 * this.xAxis.len / l.radius);
            if (l.enabled !== !1 || this._hasPointMarkers)
                for (f = b.length; f--;)
                    if (g = b[f], d = V(g.plotX), e = g.plotY, k = g.graphic, n = g.marker || {}, o = !!g.marker, a = oa && n.enabled === r || n.enabled, x = c.isInsidePlot(t(d), e, c.inverted), a && e !== r && !isNaN(e) && g.y !== null)
                        if (a = g.pointAttr[g.selected ? "select" : ""] || m, h = a.r, i = q(n.symbol, this.symbol), j = i.indexOf("url") === 0, k) k[x ? "show" : "hide"](!0).animate(s({
                            x: d - h,
                            y: e - h
                        }, k.symbolName ? {
                            width: 2 * h,
                            height: 2 * h
                        } : {}));
                        else {
                            if (x &&
                                (h > 0 || j)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h, o ? n : l).attr(a).add(p)
                        } else if (k) g.graphic = k.destroy()
        },
        convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {},
                a = a || {},
                b = b || {},
                c = c || {},
                d = d || {};
            for (f in e) g = e[f], h[f] = q(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = a.options,
                c = W[a.type].marker ? b.marker : b,
                d = c.states,
                e = d.hover,
                f, g = a.color;
            f = {
                stroke: g,
                fill: g
            };
            var h = a.points || [],
                i, j = [],
                k, l = a.pointAttrToOptions;
            k = a.hasPointSpecificOptions;
            var m = b.negativeColor,
                n =
                c.lineColor,
                o = c.fillColor;
            i = b.turboThreshold;
            var q;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : e.color = e.color || Ia(e.color || g).brighten(e.brightness).get();
            j[""] = a.convertAttribs(c, f);
            p(["hover", "select"], function(b) {
                j[b] = a.convertAttribs(d[b], j[""])
            });
            a.pointAttr = j;
            g = h.length;
            if (!i || g < i || k)
                for (; g--;) {
                    i = h[g];
                    if ((c = i.options && i.options.marker || i.options) && c.enabled === !1) c.radius = 0;
                    if (i.negative && m) i.color = i.fillColor = m;
                    k = b.colorByPoint ||
                        i.color;
                    if (i.options)
                        for (q in l) u(c[l[q]]) && (k = !0);
                    if (k) {
                        c = c || {};
                        k = [];
                        d = c.states || {};
                        f = d.hover = d.hover || {};
                        if (!b.marker) f.color = f.color || !i.options.color && e.color || Ia(i.color).brighten(f.brightness || e.brightness).get();
                        f = {
                            color: i.color
                        };
                        if (!o) f.fillColor = i.color;
                        if (!n) f.lineColor = i.color;
                        k[""] = a.convertAttribs(s(f, c), j[""]);
                        k.hover = a.convertAttribs(d.hover, j.hover, k[""]);
                        k.select = a.convertAttribs(d.select, j.select, k[""])
                    } else k = j;
                    i.pointAttr = k
                }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(Ga),
                d, e, f = a.data || [],
                g, h, i;
            J(a, "destroy");
            U(a);
            p(a.axisTypes || [], function(b) {
                if (i = a[b]) ta(i.series, a), i.isDirty = i.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (e = f.length; e--;)(g = f[e]) && g.destroy && g.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            p("area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip".split(","), function(b) {
                a[b] && (d = c && b === "group" ? "hide" : "destroy", a[b][d]())
            });
            if (b.hoverSeries === a) b.hoverSeries = null;
            ta(b.series, a);
            for (h in a) delete a[h]
        },
        getSegmentPath: function(a) {
            var b = this,
                c = [],
                d = b.options.step;
            p(a, function(e, f) {
                var g = e.plotX,
                    h = e.plotY,
                    i;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h) : d === "center" ? c.push((i.plotX + g) / 2, i.plotY, (i.plotX + g) / 2, h) : c.push(g, i.plotY)), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function() {
            var a = this,
                b = [],
                c, d = [];
            p(a.segments, function(e) {
                c = a.getSegmentPath(e);
                e.length > 1 ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath =
                b
        },
        drawGraph: function() {
            var a = this,
                b = this.options,
                c = [
                    ["graph", b.lineColor || this.color]
                ],
                d = b.lineWidth,
                e = b.dashStyle,
                f = b.linecap !== "square",
                g = this.getGraphPath(),
                h = b.negativeColor;
            h && c.push(["graphNeg", h]);
            p(c, function(c, h) {
                var k = c[0],
                    l = a[k];
                if (l) hb(l), l.animate({
                    d: g
                });
                else if (d && g.length) l = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: $,
                    zIndex: 1
                }, e ? l.dashstyle = e : f && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), a[k] = a.chart.renderer.path(g).attr(l).add(a.group).shadow(!h && b.shadow)
            })
        },
        clipNeg: function() {
            var a =
                this.options,
                b = this.chart,
                c = b.renderer,
                d = a.negativeColor || a.negativeFillColor,
                e, f = this.graph,
                g = this.area,
                h = this.posClip,
                i = this.negClip;
            e = b.chartWidth;
            var j = b.chartHeight,
                k = v(e, j),
                l = this.yAxis;
            if (d && (f || g)) {
                d = t(l.toPixels(a.threshold || 0, !0));
                d < 0 && (k -= d);
                a = {
                    x: 0,
                    y: 0,
                    width: k,
                    height: d
                };
                k = {
                    x: 0,
                    y: d,
                    width: k,
                    height: k
                };
                if (b.inverted) a.height = k.y = b.plotWidth - d, c.isVML && (a = {
                    x: b.plotWidth - d - b.plotLeft,
                    y: 0,
                    width: e,
                    height: j
                }, k = {
                    x: d + b.plotLeft - e,
                    y: 0,
                    width: b.plotLeft + d,
                    height: e
                });
                l.reversed ? (b = k, e = a) : (b = a, e = k);
                h ?
                    (h.animate(b), i.animate(e)) : (this.posClip = h = c.clipRect(b), this.negClip = i = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(i)), g && (g.clip(h), this.areaNeg.clip(i)))
            }
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                p(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this,
                c = b.chart;
            if (b.xAxis) z(c, "resize", a), z(b, "destroy", function() {
                U(c, "resize", a)
            }), a(), b.invertGroups = a
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = !f;
            g && (this[a] =
                f = this.chart.renderer.g(b).attr({
                    visibility: c,
                    zIndex: d || 0.1
                }).add(e));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        },
        getPlotBox: function() {
            var a = this.chart,
                b = this.xAxis,
                c = this.yAxis;
            if (a.inverted) b = c, c = this.xAxis;
            return {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c, d = a.options,
                e = (c = d.animation) && !!a.animate && b.renderer.isSVG && q(c.duration, 500) || 0,
                f = a.visible ? "visible" : "hidden",
                g = d.zIndex,
                h = a.hasRendered,
                i = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, i);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, i);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.clipNeg());
            p(a.points, function(a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker();
            b.inverted && a.invertGroups();
            d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect);
            e && a.animate();
            if (!h) e ? a.animationTimeout =
                setTimeout(function() {
                    a.afterAnimate()
                }, e) : a.afterAnimate();
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.group,
                d = this.xAxis,
                e = this.yAxis;
            c && (a.inverted && c.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), c.animate({
                translateX: q(d && d.left, a.plotLeft),
                translateY: q(e && e.top, a.plotTop)
            }));
            this.translate();
            this.setTooltipPoints && this.setTooltipPoints(!0);
            this.render();
            b && J(this, "updatedData")
        }
    };
    Rb.prototype = {
        destroy: function() {
            Na(this, this.axis)
        },
        render: function(a) {
            var b = this.options,
                c = b.format,
                c = c ? Ma(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({
                text: c,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation,
                visibility: "hidden"
            }).add(a)
        },
        setOffset: function(a, b) {
            var c = this.axis,
                d = c.chart,
                e = d.inverted,
                f = this.isNegative,
                g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1),
                c = c.translate(0),
                c = P(g - c),
                h = d.xAxis[0].translate(this.x) + a,
                i = d.plotHeight,
                f = {
                    x: e ? f ? g : g - c : h,
                    y: e ? i - h - b : f ? i - g - c : i - g,
                    width: e ? c : b,
                    height: e ? b : c
                };
            if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e[this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0)
        }
    };
    D.prototype.buildStacks = function() {
        var a = this.series,
            b = q(this.options.reversedStacks, !0),
            c = a.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; c--;) a[b ? c : a.length - c - 1].setStackedPoints();
            if (this.usePercentage)
                for (c = 0; c < a.length; c++) a[c].setPercentStacks()
        }
    };
    D.prototype.renderStackTotals = function() {
        var a =
            this.chart,
            b = a.renderer,
            c = this.stacks,
            d, e, f = this.stackTotalGroup;
        if (!f) this.stackTotalGroup = f = b.g("stack-labels").attr({
            visibility: "visible",
            zIndex: 6
        }).add();
        f.translate(a.plotLeft, a.plotTop);
        for (d in c)
            for (e in a = c[d], a) a[e].render(f)
    };
    M.prototype.setStackedPoints = function() {
        if (this.options.stacking && !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)) {
            var a = this.processedXData,
                b = this.processedYData,
                c = [],
                d = b.length,
                e = this.options,
                f = e.threshold,
                g = e.stack,
                e = e.stacking,
                h = this.stackKey,
                i = "-" + h,
                j = this.negStacks,
                k = this.yAxis,
                l = k.stacks,
                m = k.oldStacks,
                n, o, q, p, r, w;
            for (p = 0; p < d; p++) {
                r = a[p];
                w = b[p];
                q = this.index + "," + p;
                o = (n = j && w < f) ? i : h;
                l[o] || (l[o] = {});
                if (!l[o][r]) m[o] && m[o][r] ? (l[o][r] = m[o][r], l[o][r].total = null) : l[o][r] = new Rb(k, k.options.stackLabels, n, r, g);
                o = l[o][r];
                o.points[q] = [o.cum || 0];
                e === "percent" ? (n = n ? h : i, j && l[n] && l[n][r] ? (n = l[n][r], o.total = n.total = v(n.total, o.total) + P(w) || 0) : o.total = ja(o.total + (P(w) || 0))) : o.total = ja(o.total + (w || 0));
                o.cum = (o.cum || 0) + (w || 0);
                o.points[q].push(o.cum);
                c[p] = o.cum
            }
            if (e === "percent") k.usePercentage = !0;
            this.stackedYData = c;
            k.oldStacks = {}
        }
    };
    M.prototype.setPercentStacks = function() {
        var a = this,
            b = a.stackKey,
            c = a.yAxis.stacks,
            d = a.processedXData;
        p([b, "-" + b], function(b) {
            var e;
            for (var f = d.length, g, h; f--;)
                if (g = d[f], e = (h = c[b] && c[b][g]) && h.points[a.index + "," + f], g = e) h = h.total ? 100 / h.total : 0, g[0] = ja(g[0] * h), g[1] = ja(g[1] * h), a.stackedYData[f] = g[1]
        })
    };
    s(ya.prototype, {
        addSeries: function(a, b, c) {
            var d, e = this;
            a && (b = q(b, !0), J(e, "addSeries", {
                options: a
            }, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                e.linkSeries();
                b && e.redraw(c)
            }));
            return d
        },
        addAxis: function(a, b, c, d) {
            var e = b ? "xAxis" : "yAxis",
                f = this.options;
            new D(this, y(a, {
                index: this[e].length,
                isX: b
            }));
            f[e] = qa(f[e] || {});
            f[e].push(a);
            q(c, !0) && this.redraw(d)
        },
        showLoading: function(a) {
            var b = this,
                c = b.options,
                d = b.loadingDiv,
                e = c.loading,
                f = function() {
                    d && K(d, {
                        left: b.plotLeft + "px",
                        top: b.plotTop + "px",
                        width: b.plotWidth + "px",
                        height: b.plotHeight + "px"
                    })
                };
            if (!d) b.loadingDiv = d = aa(Wa, {
                    className: "highcharts-loading"
                }, s(e.style, {
                    zIndex: 10,
                    display: $
                }),
                b.container), b.loadingSpan = aa("span", null, e.labelStyle, d), z(b, "redraw", f);
            b.loadingSpan.innerHTML = a || c.lang.loading;
            if (!b.loadingShown) K(d, {
                opacity: 0,
                display: ""
            }), rb(d, {
                opacity: e.style.opacity
            }, {
                duration: e.showDuration || 0
            }), b.loadingShown = !0;
            f()
        },
        hideLoading: function() {
            var a = this.options,
                b = this.loadingDiv;
            b && rb(b, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration || 100,
                complete: function() {
                    K(b, {
                        display: $
                    })
                }
            });
            this.loadingShown = !1
        }
    });
    s(Ba.prototype, {
        update: function(a, b, c, d) {
            function e() {
                f.applyOptions(a);
                if (ha(a) && !Ja(a)) f.redraw = function() {
                    if (h) a && a.marker && a.marker.symbol ? f.graphic = h.destroy() : h.attr(f.pointAttr[f.state || ""]);
                    if (a && a.dataLabels && f.dataLabel) f.dataLabel = f.dataLabel.destroy();
                    f.redraw = null
                };
                i = f.index;
                g.updateParallelArrays(f, i);
                k.data[i] = f.options;
                g.isDirty = g.isDirtyData = !0;
                if (!g.fixedBox && g.hasCartesianSeries) j.isDirtyBox = !0;
                k.legendType === "point" && j.legend.destroyItem(f);
                b && j.redraw(c)
            }
            var f = this,
                g = f.series,
                h = f.graphic,
                i, j = g.chart,
                k = g.options,
                b = q(b, !0);
            d === !1 ? e() : f.firePointEvent("update", {
                options: a
            }, e)
        },
        remove: function(a, b) {
            var c = this,
                d = c.series,
                e = d.points,
                f = d.chart,
                g, h = d.data;
            ab(b, f);
            a = q(a, !0);
            c.firePointEvent("remove", null, function() {
                g = Qa(c, h);
                h.length === e.length && e.splice(g, 1);
                h.splice(g, 1);
                d.options.data.splice(g, 1);
                d.updateParallelArrays(c, "splice", g, 1);
                c.destroy();
                d.isDirty = !0;
                d.isDirtyData = !0;
                a && f.redraw()
            })
        }
    });
    s(M.prototype, {
        addPoint: function(a, b, c, d) {
            var e = this.options,
                f = this.data,
                g = this.graph,
                h = this.area,
                i = this.chart,
                j = this.xAxis && this.xAxis.names,
                k = g && g.shift || 0,
                l = e.data,
                m, n = this.xData;
            ab(d, i);
            c && p([g, h, this.graphNeg, this.areaNeg], function(a) {
                if (a) a.shift = k + 1
            });
            if (h) h.isArea = !0;
            b = q(b, !0);
            d = {
                series: this
            };
            this.pointClass.prototype.applyOptions.apply(d, [a]);
            g = d.x;
            h = n.length;
            if (this.requireSorting && g < n[h - 1])
                for (m = !0; h && n[h - 1] > g;) h--;
            this.updateParallelArrays(d, "splice", h, 0, 0);
            this.updateParallelArrays(d, h);
            if (j && d.name) j[g] = d.name;
            l.splice(h, 0, a);
            m && (this.data.splice(h, 0, null), this.processData());
            e.legendType === "point" && this.generatePoints();
            c && (f[0] && f[0].remove ? f[0].remove(!1) :
                (f.shift(), this.updateParallelArrays(d, "shift"), l.shift()));
            this.isDirtyData = this.isDirty = !0;
            b && (this.getAttribs(), i.redraw())
        },
        remove: function(a, b) {
            var c = this,
                d = c.chart,
                a = q(a, !0);
            if (!c.isRemoving) c.isRemoving = !0, J(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                a && d.redraw(b)
            });
            c.isRemoving = !1
        },
        update: function(a, b) {
            var c = this,
                d = this.chart,
                e = this.userOptions,
                f = this.type,
                g = B[f].prototype,
                h = ["group", "markerGroup", "dataLabelsGroup"],
                i;
            p(h, function(a) {
                h[a] = c[a];
                delete c[a]
            });
            a = y(e, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {
                data: this.options.data
            }, a);
            this.remove(!1);
            for (i in g) g.hasOwnProperty(i) && (this[i] = r);
            s(this, B[a.type || f].prototype);
            p(h, function(a) {
                c[a] = h[a]
            });
            this.init(d, a);
            d.linkSeries();
            q(b, !0) && d.redraw(!1)
        }
    });
    s(D.prototype, {
        update: function(a, b) {
            var c = this.chart,
                a = c.options[this.coll][this.options.index] = y(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = r;
            this.init(c, s(a, {
                events: r
            }));
            c.isDirtyBox = !0;
            q(b, !0) && c.redraw()
        },
        remove: function(a) {
            for (var b =
                    this.chart, c = this.coll, d = this.series, e = d.length; e--;) d[e] && d[e].remove(!1);
            ta(b.axes, this);
            ta(b[c], this);
            b.options[c].splice(this.options.index, 1);
            p(b[c], function(a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            q(a, !0) && b.redraw()
        },
        setTitle: function(a, b) {
            this.update({
                title: a
            }, b)
        },
        setCategories: function(a, b) {
            this.update({
                categories: a
            }, b)
        }
    });
    var Ca = ia(M);
    B.line = Ca;
    W.area = y(L, {
        threshold: 0
    });
    var wa = ia(M, {
        type: "area",
        getSegments: function() {
            var a = this,
                b = [],
                c = [],
                d = [],
                e = this.xAxis,
                f = this.yAxis,
                g =
                f.stacks[this.stackKey],
                h = {},
                i, j, k = this.points,
                l = this.options.connectNulls,
                m, n;
            if (this.options.stacking && !this.cropped) {
                for (m = 0; m < k.length; m++) h[k[m].x] = k[m];
                for (n in g) g[n].total !== null && d.push(+n);
                d.sort(function(a, b) {
                    return a - b
                });
                p(d, function(b) {
                    var d = 0,
                        k;
                    if (!l || h[b] && h[b].y !== null)
                        if (h[b]) c.push(h[b]);
                        else {
                            for (m = a.index; m <= f.series.length; m++)
                                if (k = g[b].points[m + "," + b]) {
                                    d = k[1];
                                    break
                                }
                            i = e.translate(b);
                            j = f.toPixels(d, !0);
                            c.push({
                                y: null,
                                plotX: i,
                                clientX: i,
                                plotY: j,
                                yBottom: j,
                                onMouseOver: ra
                            })
                        }
                });
                c.length &&
                    b.push(c)
            } else M.prototype.getSegments.call(this), b = this.segments;
            this.segments = b
        },
        getSegmentPath: function(a) {
            var b = M.prototype.getSegmentPath.call(this, a),
                c = [].concat(b),
                d, e = this.options;
            d = b.length;
            var f = this.yAxis.getThreshold(e.threshold),
                g;
            d === 3 && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks)
                for (d = a.length - 1; d >= 0; d--) g = q(a[d].yBottom, f), d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX, g);
            else this.closeSegment(c, a, f);
            this.areaPath = this.areaPath.concat(c);
            return b
        },
        closeSegment: function(a,
            b, c) {
            a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c)
        },
        drawGraph: function() {
            this.areaPath = [];
            M.prototype.drawGraph.apply(this);
            var a = this,
                b = this.areaPath,
                c = this.options,
                d = c.negativeColor,
                e = c.negativeFillColor,
                f = [
                    ["area", this.color, c.fillColor]
                ];
            (d || e) && f.push(["areaNeg", d, e]);
            p(f, function(d) {
                var e = d[0],
                    f = a[e];
                f ? f.animate({
                    d: b
                }) : a[e] = a.chart.renderer.path(b).attr({
                    fill: q(d[2], Ia(d[1]).setOpacity(q(c.fillOpacity, 0.75)).get()),
                    zIndex: 0
                }).add(a.group)
            })
        },
        drawLegendSymbol: T.drawRectangle
    });
    B.area = wa;
    W.spline = y(L);
    Ca = ia(M, {
        type: "spline",
        getPointSpline: function(a, b, c) {
            var d = b.plotX,
                e = b.plotY,
                f = a[c - 1],
                g = a[c + 1],
                h, i, j, k;
            if (f && g) {
                a = f.plotY;
                j = g.plotX;
                var g = g.plotY,
                    l;
                h = (1.5 * d + f.plotX) / 2.5;
                i = (1.5 * e + a) / 2.5;
                j = (1.5 * d + j) / 2.5;
                k = (1.5 * e + g) / 2.5;
                l = (k - i) * (j - d) / (j - h) + e - k;
                i += l;
                k += l;
                i > a && i > e ? (i = v(a, e), k = 2 * e - i) : i < a && i < e && (i = A(a, e), k = 2 * e - i);
                k > g && k > e ? (k = v(g, e), i = 2 * e - k) : k < g && k < e && (k = A(g, e), i = 2 * e - k);
                b.rightContX = j;
                b.rightContY = k
            }
            c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY =
                null) : b = ["M", d, e];
            return b
        }
    });
    B.spline = Ca;
    W.areaspline = y(W.area);
    wa = wa.prototype;
    Ca = ia(Ca, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: wa.getSegmentPath,
        closeSegment: wa.closeSegment,
        drawGraph: wa.drawGraph,
        drawLegendSymbol: T.drawRectangle
    });
    B.areaspline = Ca;
    W.column = y(L, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    Ca = ia(M, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            M.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && p(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            })
        },
        getColumnMetrics: function() {
            var a = this,
                b = a.options,
                c = a.xAxis,
                d = a.yAxis,
                e =
                c.reversed,
                f, g = {},
                h, i = 0;
            b.grouping === !1 ? i = 1 : p(a.chart.series, function(b) {
                var c = b.options,
                    e = b.yAxis;
                if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos) c.stacking ? (f = b.stackKey, g[f] === r && (g[f] = i++), h = g[f]) : c.grouping !== !1 && (h = i++), b.columnIndex = h
            });
            var c = A(P(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
                j = c * b.groupPadding,
                k = (c - 2 * j) / i,
                l = b.pointWidth,
                b = u(l) ? (k - l) / 2 : k * b.pointPadding,
                l = q(l, k - 2 * b);
            return a.columnMetrics = {
                width: l,
                offset: b + (j + ((e ? i - (a.columnIndex ||
                    0) : a.columnIndex) || 0) * k - c / 2) * (e ? -1 : 1)
            }
        },
        translate: function() {
            var a = this,
                b = a.chart,
                c = a.options,
                d = a.borderWidth = q(c.borderWidth, a.activePointCount > 0.5 * a.xAxis.len ? 0 : 1),
                e = a.yAxis,
                f = a.translatedThreshold = e.getThreshold(c.threshold),
                g = q(c.minPointLength, 5),
                h = a.getColumnMetrics(),
                i = h.width,
                j = a.barW = v(i, 1 + 2 * d),
                k = a.pointXOffset = h.offset,
                l = -(d % 2 ? 0.5 : 0),
                m = d % 2 ? 0.5 : 1;
            b.renderer.isVML && b.inverted && (m += 1);
            c.pointPadding && (j = Ya(j));
            M.prototype.translate.apply(a);
            p(a.points, function(c) {
                var d = q(c.yBottom, f),
                    h = A(v(-999 -
                        d, c.plotY), e.len + 999 + d),
                    p = c.plotX + k,
                    r = j,
                    w = A(h, d),
                    s;
                s = v(h, d) - w;
                P(s) < g && g && (s = g, w = t(P(w - f) > g ? d - g : f - (e.translate(c.y, 0, 1, 0, 1) <= f ? g : 0)));
                c.barX = p;
                c.pointWidth = i;
                c.tooltipPos = b.inverted ? [e.len - h, a.xAxis.len - p - r / 2] : [p + r / 2, h + e.pos - b.plotTop];
                r = t(p + r) + l;
                p = t(p) + l;
                r -= p;
                d = P(w) < 0.5;
                s = t(w + s) + m;
                w = t(w) + m;
                s -= w;
                d && (w -= 1, s += 1);
                c.shapeType = "rect";
                c.shapeArgs = {
                    x: p,
                    y: w,
                    width: r,
                    height: s
                }
            })
        },
        getSymbol: ra,
        drawLegendSymbol: T.drawRectangle,
        drawGraph: ra,
        drawPoints: function() {
            var a = this,
                b = this.chart,
                c = a.options,
                d = b.renderer,
                e = c.animationLimit || 250,
                f, g;
            p(a.points, function(h) {
                var i = h.plotY,
                    j = h.graphic;
                if (i !== r && !isNaN(i) && h.y !== null) f = h.shapeArgs, i = u(a.borderWidth) ? {
                    "stroke-width": a.borderWidth
                } : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], j ? (hb(j), j.attr(i)[b.pointCount < e ? "animate" : "attr"](y(f))) : h.graphic = d[h.shapeType](f).attr(g).attr(i).add(a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius);
                else if (j) h.graphic = j.destroy()
            })
        },
        animate: function(a) {
            var b = this.yAxis,
                c = this.options,
                d = this.chart.inverted,
                e = {};
            if (ea) a ? (e.scaleY = 0.001, a = A(b.pos + b.len, v(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] = b.pos, this.group.animate(e, this.options.animation), this.animate = null)
        },
        remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && p(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            });
            M.prototype.remove.apply(a, arguments)
        }
    });
    B.column = Ca;
    W.bar = y(W.column);
    wa = ia(Ca, {
        type: "bar",
        inverted: !0
    });
    B.bar = wa;
    W.scatter = y(L, {
        lineWidth: 0,
        tooltip: {
            headerFormat: '<span style="color:{series.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        },
        stickyTracking: !1
    });
    wa = ia(M, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        singularTooltips: !0,
        drawGraph: function() {
            this.options.lineWidth && M.prototype.drawGraph.call(this)
        }
    });
    B.scatter = wa;
    W.pie = y(L, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.point.name
            }
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    });
    L = {
        type: "pie",
        isCartesian: !1,
        pointClass: ia(Ba, {
            init: function() {
                Ba.prototype.init.apply(this, arguments);
                var a = this,
                    b;
                if (a.y < 0) a.y = null;
                s(a, {
                    visible: a.visible !== !1,
                    name: q(a.name, "Slice")
                });
                b = function(b) {
                    a.slice(b.type ===
                        "select")
                };
                z(a, "select", b);
                z(a, "unselect", b);
                return a
            },
            setVisible: function(a) {
                var b = this,
                    c = b.series,
                    d = c.chart;
                b.visible = b.options.visible = a = a === r ? !b.visible : a;
                c.options.data[Qa(b, c.data)] = b.options;
                p(["graphic", "dataLabel", "connector", "shadowGroup"], function(c) {
                    if (b[c]) b[c][a ? "show" : "hide"](!0)
                });
                b.legendItem && d.legend.colorizeItem(b, a);
                if (!c.isDirty && c.options.ignoreHiddenPoint) c.isDirty = !0, d.redraw()
            },
            slice: function(a, b, c) {
                var d = this.series;
                ab(c, d.chart);
                q(b, !0);
                this.sliced = this.options.sliced =
                    a = u(a) ? a : !this.sliced;
                d.options.data[Qa(this, d.data)] = this.options;
                a = a ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
                this.graphic.animate(a);
                this.shadowGroup && this.shadowGroup.animate(a)
            },
            haloPath: function(a) {
                var b = this.shapeArgs,
                    c = this.series.chart;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {
                    innerR: this.shapeArgs.r,
                    start: b.start,
                    end: b.end
                })
            }
        }),
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        axisTypes: [],
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color"
        },
        singularTooltips: !0,
        getColor: ra,
        animate: function(a) {
            var b = this,
                c = b.points,
                d = b.startAngleRad;
            if (!a) p(c, function(a) {
                var c = a.graphic,
                    a = a.shapeArgs;
                c && (c.attr({
                    r: b.center[3] / 2,
                    start: d,
                    end: d
                }), c.animate({
                    r: a.r,
                    start: a.start,
                    end: a.end
                }, b.options.animation))
            }), b.animate = null
        },
        setData: function(a, b, c, d) {
            M.prototype.setData.call(this, a, !1, c, d);
            this.processData();
            this.generatePoints();
            q(b, !0) && this.chart.redraw(c)
        },
        generatePoints: function() {
            var a, b = 0,
                c, d, e, f = this.options.ignoreHiddenPoint;
            M.prototype.generatePoints.call(this);
            c = this.points;
            d = c.length;
            for (a = 0; a < d; a++) e = c[a], b += f && !e.visible ? 0 : e.y;
            this.total = b;
            for (a = 0; a < d; a++) e = c[a], e.percentage = b > 0 ? e.y / b * 100 : 0, e.total = b
        },
        translate: function(a) {
            this.generatePoints();
            var b = 0,
                c = this.options,
                d = c.slicedOffset,
                e = d + c.borderWidth,
                f, g, h, i = c.startAngle || 0,
                j = this.startAngleRad = ua / 180 * (i - 90),
                i = (this.endAngleRad = ua / 180 * (q(c.endAngle, i + 360) - 90)) - j,
                k = this.points,
                l = c.dataLabels.distance,
                c = c.ignoreHiddenPoint,
                m, n = k.length,
                o;
            if (!a) this.center = a = this.getCenter();
            this.getX = function(b, c) {
                h = X.asin(A((b - a[1]) / (a[2] / 2 + l), 1));
                return a[0] + (c ? -1 : 1) * fa(h) * (a[2] / 2 + l)
            };
            for (m = 0; m < n; m++) {
                o = k[m];
                f = j + b * i;
                if (!c || o.visible) b += o.percentage / 100;
                g = j + b * i;
                o.shapeType = "arc";
                o.shapeArgs = {
                    x: a[0],
                    y: a[1],
                    r: a[2] / 2,
                    innerR: a[3] / 2,
                    start: t(f * 1E3) / 1E3,
                    end: t(g * 1E3) / 1E3
                };
                h = (g + f) / 2;
                h > 1.5 * ua ? h -= 2 * ua : h < -ua / 2 && (h += 2 * ua);
                o.slicedTranslation = {
                    translateX: t(fa(h) * d),
                    translateY: t(ka(h) * d)
                };
                f = fa(h) * a[2] / 2;
                g = ka(h) * a[2] / 2;
                o.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7];
                o.half = h < -ua / 2 || h > ua / 2 ? 1 : 0;
                o.angle = h;
                e = A(e, l / 2);
                o.labelPos = [a[0] + f + fa(h) * l, a[1] + g + ka(h) * l, a[0] + f + fa(h) * e, a[1] + g + ka(h) * e, a[0] + f, a[1] + g, l < 0 ? "center" : o.half ? "right" : "left", h]
            }
        },
        drawGraph: null,
        drawPoints: function() {
            var a = this,
                b = a.chart.renderer,
                c, d, e = a.options.shadow,
                f, g;
            if (e && !a.shadowGroup) a.shadowGroup = b.g("shadow").add(a.group);
            p(a.points, function(h) {
                d = h.graphic;
                g = h.shapeArgs;
                f = h.shadowGroup;
                if (e && !f) f = h.shadowGroup = b.g("shadow").add(a.shadowGroup);
                c = h.sliced ? h.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
                f && f.attr(c);
                d ? d.animate(s(g, c)) : h.graphic = d = b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected ? "select" : ""]).attr({
                    "stroke-linejoin": "round"
                }).attr(c).add(a.group).shadow(e, f);
                h.visible !== void 0 && h.setVisible(h.visible)
            })
        },
        sortByAngle: function(a, b) {
            a.sort(function(a, d) {
                return a.angle !== void 0 && (d.angle - a.angle) * b
            })
        },
        drawLegendSymbol: T.drawRectangle,
        getCenter: ga.getCenter,
        getSymbol: ra
    };
    L = ia(M, L);
    B.pie = L;
    M.prototype.drawDataLabels = function() {
        var a =
            this,
            b = a.options,
            c = b.cursor,
            d = b.dataLabels,
            e = a.points,
            f, g, h = a.hasRendered || 0,
            i, j;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d), j = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible", d.zIndex || 6), q(d.defer, !0) && (j.attr({
            opacity: +h
        }), h || z(a, "afterAnimate", function() {
            a.visible && j.show();
            j[b.animation ? "animate" : "attr"]({
                opacity: 1
            }, {
                duration: 200
            })
        })), g = d, p(e, function(b) {
            var e, h = b.dataLabel,
                n, o, p = b.connector,
                t = !0;
            f = b.options && b.options.dataLabels;
            e = q(f && f.enabled,
                g.enabled);
            if (h && !e) b.dataLabel = h.destroy();
            else if (e) {
                d = y(g, f);
                e = d.rotation;
                n = b.getLabelConfig();
                i = d.format ? Ma(d.format, n) : d.formatter.call(n, d);
                d.style.color = q(d.color, d.style.color, a.color, "black");
                if (h)
                    if (u(i)) h.attr({
                        text: i
                    }), t = !1;
                    else {
                        if (b.dataLabel = h = h.destroy(), p) b.connector = p.destroy()
                    } else if (u(i)) {
                    h = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius || 0,
                        rotation: e,
                        padding: d.padding,
                        zIndex: 1
                    };
                    for (o in h) h[o] === r && delete h[o];
                    h = b.dataLabel = a.chart.renderer[e ?
                        "text" : "label"](i, 0, -999, null, null, null, d.useHTML).attr(h).css(s(d.style, c && {
                        cursor: c
                    })).add(j).shadow(d.shadow)
                }
                h && a.alignDataLabel(b, h, d, null, t)
            }
        })
    };
    M.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = q(a.plotX, -999),
            i = q(a.plotY, -999),
            j = b.getBBox();
        if (a = this.visible && (a.series.forceDL || f.isInsidePlot(h, t(i), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g))) d = s({
                x: g ? f.plotWidth - i : h,
                y: t(g ? f.plotHeight - h : i),
                width: 0,
                height: 0
            }, d), s(c, {
                width: j.width,
                height: j.height
            }), c.rotation ?
            b[e ? "attr" : "animate"]({
                x: d.x + c.x + d.width / 2,
                y: d.y + c.y + d.height / 2
            }).attr({
                align: c.align
            }) : (b.align(c, null, d), g = b.alignAttr, q(c.overflow, "justify") === "justify" ? this.justifyDataLabel(b, c, g, j, d, e) : q(c.crop, !0) && (a = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + j.width, g.y + j.height)));
        if (!a) b.attr({
            y: -999
        }), b.placed = !1
    };
    M.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart,
            h = b.align,
            i = b.verticalAlign,
            j, k;
        j = c.x;
        if (j < 0) h === "right" ? b.align = "left" : b.x = -j, k = !0;
        j = c.x + d.width;
        if (j > g.plotWidth) h === "left" ?
            b.align = "right" : b.x = g.plotWidth - j, k = !0;
        j = c.y;
        if (j < 0) i === "bottom" ? b.verticalAlign = "top" : b.y = -j, k = !0;
        j = c.y + d.height;
        if (j > g.plotHeight) i === "top" ? b.verticalAlign = "bottom" : b.y = g.plotHeight - j, k = !0;
        if (k) a.placed = !f, a.align(b, null, e)
    };
    if (B.pie) B.pie.prototype.drawDataLabels = function() {
        var a = this,
            b = a.data,
            c, d = a.chart,
            e = a.options.dataLabels,
            f = q(e.connectorPadding, 10),
            g = q(e.connectorWidth, 1),
            h = d.plotWidth,
            i = d.plotHeight,
            j, k, l = q(e.softConnector, !0),
            m = e.distance,
            n = a.center,
            o = n[2] / 2,
            x = n[1],
            r = m > 0,
            s, w, u, y = [
                [],
                []
            ],
            z, O, E, G, C, R = [0, 0, 0, 0],
            H = function(a, b) {
                return b.y - a.y
            };
        if (a.visible && (e.enabled || a._hasPointLabels)) {
            M.prototype.drawDataLabels.apply(a);
            p(b, function(a) {
                a.dataLabel && a.visible && y[a.half].push(a)
            });
            for (G = 2; G--;) {
                var B = [],
                    K = [],
                    F = y[G],
                    J = F.length,
                    D;
                if (J) {
                    a.sortByAngle(F, G - 0.5);
                    for (C = b = 0; !b && F[C];) b = F[C] && F[C].dataLabel && (F[C].dataLabel.getBBox().height || 21), C++;
                    if (m > 0) {
                        w = A(x + o + m, d.plotHeight);
                        for (C = v(0, x - o - m); C <= w; C += b) B.push(C);
                        w = B.length;
                        if (J > w) {
                            c = [].concat(F);
                            c.sort(H);
                            for (C = J; C--;) c[C].rank = C;
                            for (C =
                                J; C--;) F[C].rank >= w && F.splice(C, 1);
                            J = F.length
                        }
                        for (C = 0; C < J; C++) {
                            c = F[C];
                            u = c.labelPos;
                            c = 9999;
                            var N, L;
                            for (L = 0; L < w; L++) N = P(B[L] - u[1]), N < c && (c = N, D = L);
                            if (D < C && B[C] !== null) D = C;
                            else
                                for (w < J - C + D && B[C] !== null && (D = w - J + C); B[D] === null;) D++;
                            K.push({
                                i: D,
                                y: B[D]
                            });
                            B[D] = null
                        }
                        K.sort(H)
                    }
                    for (C = 0; C < J; C++) {
                        c = F[C];
                        u = c.labelPos;
                        s = c.dataLabel;
                        E = c.visible === !1 ? "hidden" : "visible";
                        c = u[1];
                        if (m > 0) {
                            if (w = K.pop(), D = w.i, O = w.y, c > O && B[D + 1] !== null || c < O && B[D - 1] !== null) O = A(v(0, c), d.plotHeight)
                        } else O = c;
                        z = e.justify ? n[0] + (G ? -1 : 1) * (o + m) : a.getX(O ===
                            x - o - m || O === x + o + m ? c : O, G);
                        s._attr = {
                            visibility: E,
                            align: u[6]
                        };
                        s._pos = {
                            x: z + e.x + ({
                                left: f,
                                right: -f
                            }[u[6]] || 0),
                            y: O + e.y - 10
                        };
                        s.connX = z;
                        s.connY = O;
                        if (this.options.size === null) w = s.width, z - w < f ? R[3] = v(t(w - z + f), R[3]) : z + w > h - f && (R[1] = v(t(z + w - h + f), R[1])), O - b / 2 < 0 ? R[0] = v(t(-O + b / 2), R[0]) : O + b / 2 > i && (R[2] = v(t(O + b / 2 - i), R[2]))
                    }
                }
            }
            if (Ea(R) === 0 || this.verifyDataLabelOverflow(R)) this.placeDataLabels(), r && g && p(this.points, function(b) {
                j = b.connector;
                u = b.labelPos;
                if ((s = b.dataLabel) && s._pos) E = s._attr.visibility, z = s.connX, O = s.connY, k =
                    l ? ["M", z + (u[6] === "left" ? 5 : -5), O, "C", z, O, 2 * u[2] - u[4], 2 * u[3] - u[5], u[2], u[3], "L", u[4], u[5]] : ["M", z + (u[6] === "left" ? 5 : -5), O, "L", u[2], u[3], "L", u[4], u[5]], j ? (j.animate({
                        d: k
                    }), j.attr("visibility", E)) : b.connector = j = a.chart.renderer.path(k).attr({
                        "stroke-width": g,
                        stroke: e.connectorColor || b.color || "#606060",
                        visibility: E
                    }).add(a.dataLabelsGroup);
                else if (j) b.connector = j.destroy()
            })
        }
    }, B.pie.prototype.placeDataLabels = function() {
        p(this.points, function(a) {
            var a = a.dataLabel,
                b;
            if (a)(b = a._pos) ? (a.attr(a._attr), a[a.moved ?
                "animate" : "attr"](b), a.moved = !0) : a && a.attr({
                y: -999
            })
        })
    }, B.pie.prototype.alignDataLabel = ra, B.pie.prototype.verifyDataLabelOverflow = function(a) {
        var b = this.center,
            c = this.options,
            d = c.center,
            e = c = c.minSize || 80,
            f;
        d[0] !== null ? e = v(b[2] - v(a[1], a[3]), c) : (e = v(b[2] - a[1] - a[3], c), b[0] += (a[3] - a[1]) / 2);
        d[1] !== null ? e = v(A(e, b[2] - v(a[0], a[2])), c) : (e = v(A(e, b[2] - a[0] - a[2]), c), b[1] += (a[0] - a[2]) / 2);
        e < b[2] ? (b[2] = e, this.translate(b), p(this.points, function(a) {
                if (a.dataLabel) a.dataLabel._pos = null
            }), this.drawDataLabels && this.drawDataLabels()) :
            f = !0;
        return f
    };
    if (B.column) B.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart,
            g = f.inverted,
            h = a.dlBox || a.shapeArgs,
            i = a.below || a.plotY > q(this.translatedThreshold, f.plotSizeY),
            j = q(c.inside, !!this.options.stacking);
        if (h && (d = y(h), g && (d = {
                x: f.plotWidth - d.y - d.height,
                y: f.plotHeight - d.x - d.width,
                width: d.height,
                height: d.width
            }), !j)) g ? (d.x += i ? 0 : d.width, d.width = 0) : (d.y += i ? d.height : 0, d.height = 0);
        c.align = q(c.align, !g || j ? "center" : i ? "right" : "left");
        c.verticalAlign = q(c.verticalAlign, g || j ? "middle" :
            i ? "top" : "bottom");
        M.prototype.alignDataLabel.call(this, a, b, c, d, e)
    };
    var jb = N.TrackerMixin = {
        drawTrackerPoint: function() {
            var a = this,
                b = a.chart,
                c = b.pointer,
                d = a.options.cursor,
                e = d && {
                    cursor: d
                },
                f = function(c) {
                    var d = c.target,
                        e;
                    if (b.hoverSeries !== a) a.onMouseOver();
                    for (; d && !e;) e = d.point, d = d.parentNode;
                    if (e !== r && e !== b.hoverPoint) e.onMouseOver(c)
                };
            p(a.points, function(a) {
                if (a.graphic) a.graphic.element.point = a;
                if (a.dataLabel) a.dataLabel.element.point = a
            });
            if (!a._hasTracking) p(a.trackerGroups, function(b) {
                if (a[b] &&
                    (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                        c.onTrackerMouseOut(a)
                    }).css(e), db)) a[b].on("touchstart", f)
            }), a._hasTracking = !0
        },
        drawTrackerGraph: function() {
            var a = this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                g = f.pointer,
                h = f.renderer,
                i = f.options.tooltip.snap,
                j = a.tracker,
                k = b.cursor,
                l = k && {
                    cursor: k
                },
                k = a.singlePoints,
                m, n = function() {
                    if (f.hoverSeries !== a) a.onMouseOver()
                },
                o = "rgba(192,192,192," + (ea ? 1.0E-4 : 0.002) + ")";
            if (e && !c)
                for (m =
                    e + 1; m--;) d[m] === "M" && d.splice(m + 1, 0, d[m + 1] - i, d[m + 2], "L"), (m && d[m] === "M" || m === e) && d.splice(m, 0, "L", d[m - 2] + i, d[m - 1]);
            for (m = 0; m < k.length; m++) e = k[m], d.push("M", e.plotX - i, e.plotY, "L", e.plotX + i, e.plotY);
            j ? j.attr({
                d: d
            }) : (a.tracker = h.path(d).attr({
                "stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden",
                stroke: o,
                fill: c ? o : $,
                "stroke-width": b.lineWidth + (c ? 0 : 2 * i),
                zIndex: 2
            }).add(a.group), p([a.tracker, a.markerGroup], function(a) {
                a.addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a)
                }).css(l);
                if (db) a.on("touchstart", n)
            }))
        }
    };
    if (B.column) Ca.prototype.drawTracker = jb.drawTrackerPoint;
    if (B.pie) B.pie.prototype.drawTracker = jb.drawTrackerPoint;
    if (B.scatter) wa.prototype.drawTracker = jb.drawTrackerPoint;
    s(sb.prototype, {
        setItemEvents: function(a, b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function(b) {
                var c = function() {
                        a.setVisible()
                    },
                    b = {
                        browserEvent: b
                    };
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : J(a, "legendItemClick", b, c)
            })
        },
        createCheckboxForItem: function(a) {
            a.checkbox = aa("input", {
                type: "checkbox",
                checked: a.selected,
                defaultChecked: a.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            z(a.checkbox, "click", function(b) {
                J(a, "checkboxClick", {
                    checked: b.target.checked
                }, function() {
                    a.select()
                })
            })
        }
    });
    F.legend.itemStyle.cursor = "pointer";
    s(ya.prototype, {
        showResetZoom: function() {
            var a = this,
                b = F.lang,
                c = a.options.chart.resetZoomButton,
                d =
                c.theme,
                e = d.states,
                f = c.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, f)
        },
        zoomOut: function() {
            var a = this;
            J(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom()
            })
        },
        zoom: function(a) {
            var b, c = this.pointer,
                d = !1,
                e;
            !a || a.resetSelection ? p(this.axes, function(a) {
                b = a.zoom()
            }) : p(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis,
                    h = e.isXAxis;
                if (c[h ?
                        "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            if (d && !e) this.showResetZoom();
            else if (!d && ha(e)) this.resetZoomButton = e.destroy();
            b && this.redraw(q(this.options.chart.animation, a && a.animation, this.pointCount < 100))
        },
        pan: function(a, b) {
            var c = this,
                d = c.hoverPoints,
                e;
            d && p(d, function(a) {
                a.setState()
            });
            p(b === "xy" ? [1, 0] : [1], function(b) {
                var d = a[b ? "chartX" : "chartY"],
                    h = c[b ? "xAxis" : "yAxis"][0],
                    i = c[b ? "mouseDownX" : "mouseDownY"],
                    j = (h.pointRange || 0) / 2,
                    k = h.getExtremes(),
                    l = h.toValue(i - d, !0) + j,
                    i = h.toValue(i + c[b ? "plotWidth" : "plotHeight"] - d, !0) - j;
                h.series.length && l > A(k.dataMin, k.min) && i < v(k.dataMax, k.max) && (h.setExtremes(l, i, !1, !1, {
                    trigger: "pan"
                }), e = !0);
                c[b ? "mouseDownX" : "mouseDownY"] = d
            });
            e && c.redraw(!1);
            K(c.container, {
                cursor: "move"
            })
        }
    });

    s(Ba.prototype, {
        select: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart,
                a = q(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = c.options.selected = a;
                d.options.data[Qa(c, d.data)] = c.options;
                c.setState(a &&
                    "select");
                b || p(e.getSelectedPoints(), function(a) {
                    if (a.selected && a !== c) a.selected = a.options.selected = !1, d.options.data[Qa(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")
                })
            })
        },
        onMouseOver: function(a) {
            var b = this.series,
                c = b.chart,
                d = c.tooltip,
                e = c.hoverPoint;
            if (e && e !== this) e.onMouseOut();
            this.firePointEvent("mouseOver");
            d && (!d.shared || b.noSharedTooltip) && d.refresh(this, a);
            this.setState("hover");
            c.hoverPoint = this
        },
        onMouseOut: function() {
            var a = this.series.chart,
                b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            if (!b || Qa(this, b) === -1) this.setState(), a.hoverPoint = null
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = y(this.series.options.point, this.options).events,
                    b;
                this.events = a;
                for (b in a) z(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(a, b) {
            var c = this.plotX,
                d = this.plotY,
                e = this.series,
                f = e.options.states,
                g = W[e.type].marker && e.options.marker,
                h = g && !g.enabled,
                i = g && g.states[a],
                j = i && i.enabled === !1,
                k = e.stateMarkerGraphic,
                l = this.marker || {},
                m = e.chart,
                n = e.halo,
                o, a = a || "";
            o = this.pointAttr[a] ||
                e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && a !== "select" || f[a] && f[a].enabled === !1 || a && (j || h && i.enabled === !1) || a && l.states && l.states[a] && l.states[a].enabled === !1)) {
                if (this.graphic) g = g && this.graphic.symbolName && o.r, this.graphic.attr(y(o, g ? {
                    x: c - g,
                    y: d - g,
                    width: 2 * g,
                    height: 2 * g
                } : {})), k && k.hide();
                else {
                    if (a && i)
                        if (g = i.radius, l = l.symbol || e.symbol, k && k.currentSymbol !== l && (k = k.destroy()), k) k[b ? "animate" : "attr"]({
                            x: c - g,
                            y: d - g
                        });
                        else if (l) e.stateMarkerGraphic = k = m.renderer.symbol(l, c - g, d - g, 2 * g, 2 * g).attr(o).add(e.markerGroup),
                        k.currentSymbol = l;
                    if (k) k[a && m.isInsidePlot(c, d, m.inverted) ? "show" : "hide"]()
                }
                if ((c = f[a] && f[a].halo) && c.size) {
                    if (!n) e.halo = n = m.renderer.path().add(e.seriesGroup);
                    n.attr(s({
                        fill: Ia(this.color || e.color).setOpacity(c.opacity).get()
                    }, c.attributes))[b ? "animate" : "attr"]({
                        d: this.haloPath(c.size)
                    })
                } else n && n.attr({
                    d: []
                });
                this.state = a
            }
        },
        haloPath: function(a) {
            var b = this.series,
                c = b.chart,
                d = b.getPlotBox(),
                e = c.inverted;
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY +
                (e ? b.xAxis.len - this.plotX : this.plotY) - a, a * 2, a * 2)
        }
    });
    s(M.prototype, {
        onMouseOver: function() {
            var a = this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && J(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        },
        onMouseOut: function() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && J(this, "mouseOut");
            c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide();
            this.setState();
            b.hoverSeries = null
        },
        setState: function(a) {
            var b =
                this.options,
                c = this.graph,
                d = this.graphNeg,
                e = b.states,
                b = b.lineWidth,
                a = a || "";
            if (this.state !== a) this.state = a, e[a] && e[a].enabled === !1 || (a && (b = e[a].lineWidth || b + (e[a].lineWidthPlus || 0)), c && !c.dashstyle && (a = {
                "stroke-width": b
            }, c.attr(a), d && d.attr(a)))
        },
        setVisible: function(a, b) {
            var c = this,
                d = c.chart,
                e = c.legendItem,
                f, g = d.options.chart.ignoreHiddenSeries,
                h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === r ? !h : a) ? "show" : "hide";
            p(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && p(d.series, function(a) {
                if (a.options.stacking && a.visible) a.isDirty = !0
            });
            p(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            if (g) d.isDirtyBox = !0;
            b !== !1 && d.redraw();
            J(c, f)
        },
        setTooltipPoints: function(a) {
            var b = [],
                c, d, e = this.xAxis,
                f = e && e.getExtremes(),
                g = e ? e.tooltipLen || e.len : this.chart.plotSizeX,
                h, i, j = [];
            if (!(this.options.enableMouseTracking === !1 || this.singularTooltips)) {
                if (a) this.tooltipPoints = null;
                p(this.segments ||
                    this.points,
                    function(a) {
                        b = b.concat(a)
                    });
                e && e.reversed && (b = b.reverse());
                this.orderTooltipPoints && this.orderTooltipPoints(b);
                a = b.length;
                for (i = 0; i < a; i++)
                    if (e = b[i], c = e.x, c >= f.min && c <= f.max) {
                        h = b[i + 1];
                        c = d === r ? 0 : d + 1;
                        for (d = b[i + 1] ? A(v(0, V((e.clientX + (h ? h.wrappedClientX || h.clientX : g)) / 2)), g) : g; c >= 0 && c <= d;) j[c++] = e
                    }
                this.tooltipPoints = j
            }
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(a) {
            this.selected = a = a === r ? !this.selected : a;
            if (this.checkbox) this.checkbox.checked = a;
            J(this, a ? "select" : "unselect")
        },
        drawTracker: jb.drawTrackerGraph
    });
    Q(M.prototype, "init", function(a) {
        var b;
        a.apply(this, Array.prototype.slice.call(arguments, 1));
        (b = this.xAxis) && b.options.ordinal && z(this, "updatedData", function() {
            delete b.ordinalIndex
        })
    });
    Q(D.prototype, "getTimeTicks", function(a, b, c, d, e, f, g, h) {
        var i = 0,
            j = 0,
            k, l = {},
            m, n, o, p = [],
            q = -Number.MAX_VALUE,
            t = this.options.tickPixelInterval;
        if (!this.options.ordinal || !f || f.length < 3 || c === r) return a.call(this, b, c, d, e);
        for (n = f.length; j < n; j++) {
            o = j && f[j - 1] >
                d;
            f[j] < c && (i = j);
            if (j === n - 1 || f[j + 1] - f[j] > g * 5 || o) {
                if (f[j] > q) {
                    for (k = a.call(this, b, f[i], f[j], e); k.length && k[0] <= q;) k.shift();
                    k.length && (q = k[k.length - 1]);
                    p = p.concat(k)
                }
                i = j + 1
            }
            if (o) break
        }
        a = k.info;
        if (h && a.unitRange <= G.hour) {
            j = p.length - 1;
            for (i = 1; i < j; i++)(new ca(p[i] - Oa))[Xa]() !== (new ca(p[i - 1] - Oa))[Xa]() && (l[p[i]] = "day", m = !0);
            m && (l[p[0]] = "day");
            a.higherRanks = l
        }
        p.info = a;
        if (h && u(t)) {
            var h = a = p.length,
                j = [],
                w;
            for (m = []; h--;) i = this.translate(p[h]), w && (m[h] = w - i), j[h] = w = i;
            m.sort();
            m = m[V(m.length / 2)];
            m < t * 0.6 && (m = null);
            h = p[a - 1] > d ? a - 1 : a;
            for (w = void 0; h--;) i = j[h], d = w - i, w && d < t * 0.8 && (m === null || d < m * 0.8) ? (l[p[h]] && !l[p[h + 1]] ? (d = h + 1, w = i) : d = h, p.splice(d, 1)) : w = i
        }
        return p
    });
    s(D.prototype, {
        beforeSetTickPositions: function() {
            var a, b = [],
                c = !1,
                d, e = this.getExtremes(),
                f = e.min,
                e = e.max,
                g;
            if (this.options.ordinal) {
                p(this.series, function(c, d) {
                    if (c.visible !== !1 && c.takeOrdinalPosition !== !1 && (b = b.concat(c.processedXData), a = b.length, b.sort(function(a, b) {
                            return a - b
                        }), a))
                        for (d = a - 1; d--;) b[d] === b[d + 1] && b.splice(d, 1)
                });
                a = b.length;
                if (a > 2) {
                    d = b[1] -
                        b[0];
                    for (g = a - 1; g-- && !c;) b[g + 1] - b[g] !== d && (c = !0);
                    if (!this.options.keepOrdinalPadding && (b[0] - f > d || e - b[b.length - 1] > d)) c = !0
                }
                c ? (this.ordinalPositions = b, c = this.val2lin(v(f, b[0]), !0), d = v(this.val2lin(A(e, b[b.length - 1]), !0), 1), this.ordinalSlope = e = (e - f) / (d - c), this.ordinalOffset = f - c * e) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = r
            }
            this.groupIntervalFactor = null
        },
        val2lin: function(a, b) {
            var c = this.ordinalPositions;
            if (c) {
                var d = c.length,
                    e, f;
                for (e = d; e--;)
                    if (c[e] === a) {
                        f = e;
                        break
                    }
                for (e = d - 1; e--;)
                    if (a > c[e] ||
                        e === 0) {
                        c = (a - c[e]) / (c[e + 1] - c[e]);
                        f = e + c;
                        break
                    }
                return b ? f : this.ordinalSlope * (f || 0) + this.ordinalOffset
            } else return a
        },
        lin2val: function(a, b) {
            var c = this.ordinalPositions;
            if (c) {
                var d = this.ordinalSlope,
                    e = this.ordinalOffset,
                    f = c.length - 1,
                    g, h;
                if (b) a < 0 ? a = c[0] : a > f ? a = c[f] : (f = V(a), h = a - f);
                else
                    for (; f--;)
                        if (g = d * f + e, a >= g) {
                            d = d * (f + 1) + e;
                            h = (a - g) / (d - g);
                            break
                        } return h !== r && c[f] !== r ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a
            } else return a
        },
        getExtendedPositions: function() {
            var a = this.chart,
                b = this.series[0].currentDataGrouping,
                c = this.ordinalIndex,
                d = b ? b.count + b.unitName : "raw",
                e = this.getExtremes(),
                f, g;
            if (!c) c = this.ordinalIndex = {};
            if (!c[d]) f = {
                series: [],
                getExtremes: function() {
                    return {
                        min: e.dataMin,
                        max: e.dataMax
                    }
                },
                options: {
                    ordinal: !0
                },
                val2lin: D.prototype.val2lin
            }, p(this.series, function(c) {
                g = {
                    xAxis: f,
                    xData: c.xData,
                    chart: a,
                    destroyGroupedData: ra
                };
                g.options = {
                    dataGrouping: b ? {
                        enabled: !0,
                        forced: !0,
                        approximation: "open",
                        units: [
                            [b.unitName, [b.count]]
                        ]
                    } : {
                        enabled: !1
                    }
                };
                c.processData.apply(g);
                f.series.push(g)
            }), this.beforeSetTickPositions.apply(f), c[d] = f.ordinalPositions;
            return c[d]
        },
        getGroupIntervalFactor: function(a, b, c) {
            var d = 0,
                c = c.processedXData,
                e = c.length,
                f = [],
                g = this.groupIntervalFactor;
            if (!g) {
                for (; d < e - 1; d++) f[d] = c[d + 1] - c[d];
                f.sort(function(a, b) {
                    return a - b
                });
                d = f[V(e / 2)];
                a = v(a, c[0]);
                b = A(b, c[e - 1]);
                this.groupIntervalFactor = g = e * d / (b - a)
            }
            return g
        },
        postProcessTickInterval: function(a) {
            var b = this.ordinalSlope;
            return b ? a / (b / this.closestPointRange) : a
        }
    });
    Q(ya.prototype, "pan", function(a, b) {
        var c = this.xAxis[0],
            d = b.chartX,
            e = !1;
        if (c.options.ordinal && c.series.length) {
            var f = this.mouseDownX,
                g = c.getExtremes(),
                h = g.dataMax,
                i = g.min,
                j = g.max,
                k = this.hoverPoints,
                l = c.closestPointRange,
                f = (f - d) / (c.translationSlope * (c.ordinalSlope || l)),
                m = {
                    ordinalPositions: c.getExtendedPositions()
                },
                l = c.lin2val,
                n = c.val2lin,
                o;
            if (m.ordinalPositions) {
                if (P(f) > 1) k && p(k, function(a) {
                    a.setState()
                }), f < 0 ? (k = m, o = c.ordinalPositions ? c : m) : (k = c.ordinalPositions ? c : m, o = m), m = o.ordinalPositions, h > m[m.length - 1] && m.push(h), this.fixedRange = j - i, f = c.toFixedRange(null, null, l.apply(k, [n.apply(k, [i, !0]) + f, !0]), l.apply(o, [n.apply(o, [j, !0]) +
                    f, !0
                ])), f.min >= A(g.dataMin, i) && f.max <= v(h, j) && c.setExtremes(f.min, f.max, !0, !1, {
                    trigger: "pan"
                }), this.mouseDownX = d, K(this.container, {
                    cursor: "move"
                })
            } else e = !0
        } else e = !0;
        e && a.apply(this, Array.prototype.slice.call(arguments, 1))
    });
    Q(M.prototype, "getSegments", function(a) {
        var b, c = this.options.gapSize,
            d = this.xAxis;
        a.apply(this, Array.prototype.slice.call(arguments, 1));
        if (c) b = this.segments, p(b, function(a, f) {
            for (var g = a.length - 1; g--;) a[g + 1].x - a[g].x > d.closestPointRange * c && b.splice(f + 1, 0, a.splice(g + 1, a.length -
                g))
        })
    });
    var da = M.prototype,
        L = Jb.prototype,
        hc = da.processData,
        ic = da.generatePoints,
        jc = da.destroy,
        kc = L.tooltipHeaderFormatter,
        lc = {
            approximation: "average",
            groupPixelWidth: 2,
            dateTimeLabelFormats: {
                millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
                second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
                minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                week: ["Week from %A, %b %e, %Y",
                    "%A, %b %e", "-%A, %b %e, %Y"
                ],
                month: ["%B %Y", "%B", "-%B %Y"],
                year: ["%Y", "%Y", "-%Y"]
            }
        },
        Wb = {
            line: {},
            spline: {},
            area: {},
            areaspline: {},
            column: {
                approximation: "sum",
                groupPixelWidth: 10
            },
            arearange: {
                approximation: "range"
            },
            areasplinerange: {
                approximation: "range"
            },
            columnrange: {
                approximation: "range",
                groupPixelWidth: 10
            },
            candlestick: {
                approximation: "ohlc",
                groupPixelWidth: 10
            },
            ohlc: {
                approximation: "ohlc",
                groupPixelWidth: 5
            }
        },
        Xb = [
            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            ["second", [1, 2, 5, 10, 15, 30]],
            ["minute", [1, 2,
                5, 10, 15, 30
            ]],
            ["hour", [1, 2, 3, 4, 6, 8, 12]],
            ["day", [1]],
            ["week", [1]],
            ["month", [1, 3, 6]],
            ["year", null]
        ],
        Ra = {
            sum: function(a) {
                var b = a.length,
                    c;
                if (!b && a.hasNulls) c = null;
                else if (b)
                    for (c = 0; b--;) c += a[b];
                return c
            },
            average: function(a) {
                var b = a.length,
                    a = Ra.sum(a);
                typeof a === "number" && b && (a /= b);
                return a
            },
            open: function(a) {
                return a.length ? a[0] : a.hasNulls ? null : r
            },
            high: function(a) {
                return a.length ? Ea(a) : a.hasNulls ? null : r
            },
            low: function(a) {
                return a.length ? Ua(a) : a.hasNulls ? null : r
            },
            close: function(a) {
                return a.length ? a[a.length -
                    1] : a.hasNulls ? null : r
            },
            ohlc: function(a, b, c, d) {
                a = Ra.open(a);
                b = Ra.high(b);
                c = Ra.low(c);
                d = Ra.close(d);
                if (typeof a === "number" || typeof b === "number" || typeof c === "number" || typeof d === "number") return [a, b, c, d]
            },
            range: function(a, b) {
                a = Ra.low(a);
                b = Ra.high(b);
                if (typeof a === "number" || typeof b === "number") return [a, b]
            }
        };
    da.groupData = function(a, b, c, d) {
        var e = this.data,
            f = this.options.data,
            g = [],
            h = [],
            i = a.length,
            j, k, l = !!b,
            m = [
                [],
                [],
                [],
                []
            ],
            d = typeof d === "function" ? d : Ra[d],
            n = this.pointArrayMap,
            o = n && n.length,
            p;
        for (p = 0; p <= i; p++)
            if (a[p] >=
                c[0]) break;
        for (; p <= i; p++) {
            for (; c[1] !== r && a[p] >= c[1] || p === i;)
                if (j = c.shift(), k = d.apply(0, m), k !== r && (g.push(j), h.push(k)), m[0] = [], m[1] = [], m[2] = [], m[3] = [], p === i) break;
            if (p === i) break;
            if (n) {
                j = this.cropStart + p;
                j = e && e[j] || this.pointClass.prototype.applyOptions.apply({
                    series: this
                }, [f[j]]);
                var q;
                for (k = 0; k < o; k++)
                    if (q = j[n[k]], typeof q === "number") m[k].push(q);
                    else if (q === null) m[k].hasNulls = !0
            } else if (j = l ? b[p] : null, typeof j === "number") m[0].push(j);
            else if (j === null) m[0].hasNulls = !0
        }
        return [g, h]
    };
    da.processData = function() {
        var a =
            this.chart,
            b = this.options,
            c = b.dataGrouping,
            d = this.allowDG !== !1 && c && q(c.enabled, a.options._stock),
            e;
        this.forceCrop = d;
        this.groupPixelWidth = null;
        this.hasProcessed = !0;
        if (hc.apply(this, arguments) !== !1 && d) {
            this.destroyGroupedData();
            var f = this.processedXData,
                g = this.processedYData,
                h = a.plotSizeX,
                a = this.xAxis,
                i = a.options.ordinal,
                j = this.groupPixelWidth = a.getGroupPixelWidth && a.getGroupPixelWidth(),
                d = this.pointRange;
            if (j) {
                e = !0;
                this.points = null;
                var k = a.getExtremes(),
                    d = k.min,
                    k = k.max,
                    i = i && a.getGroupIntervalFactor(d,
                        k, this) || 1,
                    h = j * (k - d) / h * i,
                    j = a.getTimeTicks(a.normalizeTimeTickInterval(h, c.units || Xb), d, k, a.options.startOfWeek, f, this.closestPointRange),
                    g = da.groupData.apply(this, [f, g, j, c.approximation]),
                    f = g[0],
                    g = g[1];
                if (c.smoothed) {
                    c = f.length - 1;
                    for (f[c] = k; c-- && c > 0;) f[c] += h / 2;
                    f[0] = d
                }
                this.currentDataGrouping = j.info;
                if (b.pointRange === null) this.pointRange = j.info.totalRange;
                this.closestPointRange = j.info.totalRange;
                if (u(f[0]) && f[0] < a.dataMin) a.dataMin = f[0];
                this.processedXData = f;
                this.processedYData = g
            } else this.currentDataGrouping =
                null, this.pointRange = d;
            this.hasGroupedData = e
        }
    };
    da.destroyGroupedData = function() {
        var a = this.groupedData;
        p(a || [], function(b, c) {
            b && (a[c] = b.destroy ? b.destroy() : null)
        });
        this.groupedData = null
    };
    da.generatePoints = function() {
        ic.apply(this);
        this.destroyGroupedData();
        this.groupedData = this.hasGroupedData ? this.points : null
    };
    L.tooltipHeaderFormatter = function(a) {
        var b = a.series,
            c = b.tooltipOptions,
            d = b.options.dataGrouping,
            e = c.xDateFormat,
            f, g = b.xAxis,
            h;
        if (g && g.options.type === "datetime" && d && pa(a.key)) {
            b = b.currentDataGrouping;
            d = d.dateTimeLabelFormats;
            if (b) g = d[b.unitName], b.count === 1 ? e = g[0] : (e = g[1], f = g[2]);
            else if (!e && d)
                for (h in G)
                    if (G[h] >= g.closestPointRange || G[h] <= G.day && a.key % G[h] > 0) {
                        e = d[h][0];
                        break
                    }
            e = xa(e, a.key);
            f && (e += xa(f, a.key + b.totalRange - 1));
            a = c.headerFormat.replace("{point.key}", e)
        } else a = kc.call(this, a);
        return a
    };
    da.destroy = function() {
        for (var a = this.groupedData || [], b = a.length; b--;) a[b] && a[b].destroy();
        jc.apply(this)
    };
    Q(da, "setOptions", function(a, b) {
        var c = a.call(this, b),
            d = this.type,
            e = this.chart.options.plotOptions,
            f = W[d].dataGrouping;
        if (Wb[d]) f || (f = y(lc, Wb[d])), c.dataGrouping = y(f, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping);
        if (this.chart.options._stock) this.requireSorting = !0;
        return c
    });
    Q(D.prototype, "setScale", function(a) {
        a.call(this);
        p(this.series, function(a) {
            a.hasProcessed = !1
        })
    });
    D.prototype.getGroupPixelWidth = function() {
        var a = this.series,
            b = a.length,
            c, d = 0,
            e = !1,
            f;
        for (c = b; c--;)(f = a[c].options.dataGrouping) && (d = v(d, f.groupPixelWidth));
        for (c = b; c--;)
            if ((f = a[c].options.dataGrouping) && a[c].hasProcessed)
                if (b =
                    (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth || b > this.chart.plotSizeX / d || b && f.forced) e = !0;
        return e ? d : 0
    };
    W.ohlc = y(W.column, {
        lineWidth: 1,
        tooltip: {
            pointFormat: '<span style="color:{series.color}">●</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
        },
        states: {
            hover: {
                lineWidth: 3
            }
        },
        threshold: null
    });
    L = ia(B.column, {
        type: "ohlc",
        pointArrayMap: ["open", "high", "low", "close"],
        toYData: function(a) {
            return [a.open, a.high, a.low,
                a.close
            ]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        upColorProp: "stroke",
        getAttribs: function() {
            B.column.prototype.getAttribs.apply(this, arguments);
            var a = this.options,
                b = a.states,
                a = a.upColor || this.color,
                c = y(this.pointAttr),
                d = this.upColorProp;
            c[""][d] = a;
            c.hover[d] = b.hover.upColor || a;
            c.select[d] = b.select.upColor || a;
            p(this.points, function(a) {
                if (a.open < a.close) a.pointAttr = c
            })
        },
        translate: function() {
            var a = this.yAxis;
            B.column.prototype.translate.apply(this);
            p(this.points,
                function(b) {
                    if (b.open !== null) b.plotOpen = a.translate(b.open, 0, 1, 0, 1);
                    if (b.close !== null) b.plotClose = a.translate(b.close, 0, 1, 0, 1)
                })
        },
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c, d, e, f, g, h, i, j;
            p(a.points, function(k) {
                if (k.plotY !== r) i = k.graphic, c = k.pointAttr[k.selected ? "selected" : ""] || a.pointAttr[""], f = c["stroke-width"] % 2 / 2, j = t(k.plotX) - f, g = t(k.shapeArgs.width / 2), h = ["M", j, t(k.yBottom), "L", j, t(k.plotY)], k.open !== null && (d = t(k.plotOpen) + f, h.push("M", j, d, "L", j - g, d)), k.close !== null && (e = t(k.plotClose) + f, h.push("M",
                    j, e, "L", j + g, e)), i ? i.animate({
                    d: h
                }) : k.graphic = b.renderer.path(h).attr(c).add(a.group)
            })
        },
        animate: null
    });
    B.ohlc = L;
    W.candlestick = y(W.column, {
        lineColor: "black",
        lineWidth: 1,
        states: {
            hover: {
                lineWidth: 2
            }
        },
        tooltip: W.ohlc.tooltip,
        threshold: null,
        upColor: "white"
    });
    L = ia(L, {
        type: "candlestick",
        pointAttrToOptions: {
            fill: "color",
            stroke: "lineColor",
            "stroke-width": "lineWidth"
        },
        upColorProp: "fill",
        getAttribs: function() {
            B.ohlc.prototype.getAttribs.apply(this, arguments);
            var a = this.options,
                b = a.states,
                c = a.upLineColor || a.lineColor,
                d = b.hover.upLineColor || c,
                e = b.select.upLineColor || c;
            p(this.points, function(a) {
                if (a.open < a.close) a.pointAttr[""].stroke = c, a.pointAttr.hover.stroke = d, a.pointAttr.select.stroke = e
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c, d = a.pointAttr[""],
                e, f, g, h, i, j, k, l, m, n, o;
            p(a.points, function(p) {
                m = p.graphic;
                if (p.plotY !== r) c = p.pointAttr[p.selected ? "selected" : ""] || d, k = c["stroke-width"] % 2 / 2, l = t(p.plotX) - k, e = p.plotOpen, f = p.plotClose, g = X.min(e, f), h = X.max(e, f), o = t(p.shapeArgs.width / 2), i = t(g) !== t(p.plotY), j = h !== p.yBottom,
                    g = t(g) + k, h = t(h) + k, n = ["M", l - o, h, "L", l - o, g, "L", l + o, g, "L", l + o, h, "Z", "M", l, g, "L", l, i ? t(p.plotY) : g, "M", l, h, "L", l, j ? t(p.yBottom) : h], m ? m.animate({
                        d: n
                    }) : p.graphic = b.renderer.path(n).attr(c).add(a.group).shadow(a.options.shadow)
            })
        }
    });
    B.candlestick = L;
    var tb = na.prototype.symbols;
    W.flags = y(W.column, {
        fillColor: "white",
        lineWidth: 1,
        pointRange: 0,
        shape: "flag",
        stackDistance: 12,
        states: {
            hover: {
                lineColor: "black",
                fillColor: "#FCFFC5"
            }
        },
        style: {
            fontSize: "11px",
            fontWeight: "bold",
            textAlign: "center"
        },
        tooltip: {
            pointFormat: "{point.text}<br/>"
        },
        threshold: null,
        y: -30
    });
    B.flags = ia(B.column, {
        type: "flags",
        sorted: !1,
        noSharedTooltip: !0,
        allowDG: !1,
        takeOrdinalPosition: !1,
        trackerGroups: ["markerGroup"],
        forceCrop: !0,
        init: M.prototype.init,
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth",
            r: "radius"
        },
        translate: function() {
            B.column.prototype.translate.apply(this);
            var a = this.chart,
                b = this.points,
                c = b.length - 1,
                d, e, f = this.options.onSeries,
                f = (d = f && a.get(f)) && d.options.step,
                g = d && d.points,
                h = g && g.length,
                i = this.xAxis,
                j = i.getExtremes(),
                k, l, m;
            if (d && d.visible && h) {
                d = d.currentDataGrouping;
                l = g[h - 1].x + (d ? d.totalRange : 0);
                for (b.sort(function(a, b) {
                        return a.x - b.x
                    }); h-- && b[c];)
                    if (d = b[c], k = g[h], k.x <= d.x && k.plotY !== r) {
                        if (d.x <= l) d.plotY = k.plotY, k.x < d.x && !f && (m = g[h + 1]) && m.plotY !== r && (d.plotY += (d.x - k.x) / (m.x - k.x) * (m.plotY - k.plotY));
                        c--;
                        h++;
                        if (c < 0) break
                    }
            }
            p(b, function(c, d) {
                if (c.plotY === r) c.x >= j.min && c.x <= j.max ? c.plotY = a.chartHeight - i.bottom - (i.opposite ? i.height : 0) + i.offset - a.plotTop : c.shapeArgs = {};
                if ((e = b[d - 1]) && e.plotX === c.plotX) {
                    if (e.stackIndex ===
                        r) e.stackIndex = 0;
                    c.stackIndex = e.stackIndex + 1
                }
            })
        },
        drawPoints: function() {
            var a, b = this.pointAttr[""],
                c = this.points,
                d = this.chart.renderer,
                e, f, g = this.options,
                h = g.y,
                i, j, k, l, m = g.lineWidth % 2 / 2,
                n, o;
            for (j = c.length; j--;)
                if (k = c[j], a = k.plotX > this.xAxis.len, e = k.plotX + (a ? m : -m), l = k.stackIndex, i = k.options.shape || g.shape, f = k.plotY, f !== r && (f = k.plotY + h + m - (l !== r && l * g.stackDistance)), n = l ? r : k.plotX + m, o = l ? r : k.plotY, l = k.graphic, f !== r && e >= 0 && !a) a = k.pointAttr[k.selected ? "select" : ""] || b, l ? l.attr({
                        x: e,
                        y: f,
                        r: a.r,
                        anchorX: n,
                        anchorY: o
                    }) :
                    k.graphic = d.label(k.options.title || g.title || "A", e, f, i, n, o, g.useHTML).css(y(g.style, k.style)).attr(a).attr({
                        align: i === "flag" ? "left" : "center",
                        width: g.width,
                        height: g.height
                    }).add(this.markerGroup).shadow(g.shadow), k.tooltipPos = [e, f];
                else if (l) k.graphic = l.destroy()
        },
        drawTracker: function() {
            var a = this.points;
            jb.drawTrackerPoint.apply(this);
            p(a, function(b) {
                var c = b.graphic;
                c && z(c.element, "mouseover", function() {
                    if (b.stackIndex > 0 && !b.raised) b._y = c.y, c.attr({
                        y: b._y - 8
                    }), b.raised = !0;
                    p(a, function(a) {
                        if (a !== b &&
                            a.raised && a.graphic) a.graphic.attr({
                            y: a._y
                        }), a.raised = !1
                    })
                })
            })
        },
        animate: ra
    });
    tb.flag = function(a, b, c, d, e) {
        var f = e && e.anchorX || a,
            e = e && e.anchorY || b;
        return ["M", f, e, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "M", f, e, "Z"]
    };
    p(["circle", "square"], function(a) {
        tb[a + "pin"] = function(b, c, d, e, f) {
            var g = f && f.anchorX,
                f = f && f.anchorY,
                b = tb[a](b, c, d, e);
            g && f && b.push("M", g, c > f ? c : c + e, "L", g, f);
            return b
        }
    });
    Za === N.VMLRenderer && p(["flag", "circlepin", "squarepin"], function(a) {
        ib.prototype.symbols[a] = tb[a]
    });
    var L = [].concat(Xb),
        ub = function(a) {
            return Math[a].apply(0,
                qb(arguments, function(a) {
                    return typeof a === "number"
                }))
        };
    L[4] = ["day", [1, 2, 3, 4]];
    L[5] = ["week", [1, 2, 3]];
    s(F, {
        navigator: {
            handles: {
                backgroundColor: "#ebe7e8",
                borderColor: "#b2b1b6"
            },
            height: 40,
            margin: 25,
            maskFill: "rgba(128,179,236,0.3)",
            maskInside: !0,
            outlineColor: "#b2b1b6",
            outlineWidth: 1,
            series: {
                type: B.areaspline === r ? "line" : "areaspline",
                color: "#4572A7",
                compare: null,
                fillOpacity: 0.05,
                dataGrouping: {
                    approximation: "average",
                    enabled: !0,
                    groupPixelWidth: 2,
                    smoothed: !0,
                    units: L
                },
                dataLabels: {
                    enabled: !1,
                    zIndex: 2
                },
                id: "highcharts-navigator-series",
                lineColor: "#4572A7",
                lineWidth: 1,
                marker: {
                    enabled: !1
                },
                pointRange: 0,
                shadow: !1,
                threshold: null
            },
            xAxis: {
                tickWidth: 0,
                lineWidth: 0,
                gridLineColor: "#EEE",
                gridLineWidth: 1,
                tickPixelInterval: 200,
                labels: {
                    align: "left",
                    style: {
                        color: "#888"
                    },
                    x: 3,
                    y: -4
                },
                crosshair: !1
            },
            yAxis: {
                gridLineWidth: 0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: 0.1,
                maxPadding: 0.1,
                labels: {
                    enabled: !1
                },
                crosshair: !1,
                title: {
                    text: null
                },
                tickWidth: 0
            }
        },
        scrollbar: {
            height: fb ? 20 : 14,
            barBackgroundColor: "#bfc8d1",
            barBorderRadius: 0,
            barBorderWidth: 1,
            barBorderColor: "#bfc8d1",
            buttonArrowColor: "#666",
            buttonBackgroundColor: "#ebe7e8",
            buttonBorderColor: "#bbb",
            buttonBorderRadius: 0,
            buttonBorderWidth: 1,
            minWidth: 6,
            rifleColor: "#666",
            trackBackgroundColor: "#eeeeee",
            trackBorderColor: "#eeeeee",
            trackBorderWidth: 1,
            liveRedraw: ea && !fb
        }
    });
    Cb.prototype = {
        drawHandle: function(a, b) {
            var c = this.chart,
                d = c.renderer,
                e = this.elementsToDestroy,
                f = this.handles,
                g = this.navigatorOptions.handles,
                g = {
                    fill: g.backgroundColor,
                    stroke: g.borderColor,
                    "stroke-width": 1
                },
                h;
            this.rendered || (f[b] = d.g("navigator-handle-" + ["left", "right"][b]).css({
                cursor: "e-resize"
            }).attr({
                zIndex: 4 - b
            }).add(), h = d.rect(-4.5, 0, 9, 16, 0, 1).attr(g).add(f[b]), e.push(h), h = d.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4, "L", 0.5, 12]).attr(g).add(f[b]), e.push(h));
            f[b][c.isResizing ? "animate" : "attr"]({
                translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10),
                translateY: this.top + this.height / 2 - 8
            })
        },
        drawScrollbarButton: function(a) {
            var b = this.chart.renderer,
                c = this.elementsToDestroy,
                d = this.scrollbarButtons,
                e = this.scrollbarHeight,
                f = this.scrollbarOptions,
                g;
            this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-0.5, -0.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({
                stroke: f.buttonBorderColor,
                "stroke-width": f.buttonBorderWidth,
                fill: f.buttonBackgroundColor
            }).add(d[a]), c.push(g), g = b.path(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ? 2 : -2), e / 2]).attr({
                fill: f.buttonArrowColor
            }).add(d[a]), c.push(g));
            a && d[a].attr({
                translateX: this.scrollerWidth - e
            })
        },
        render: function(a, b, c, d) {
            var e = this.chart,
                f = e.renderer,
                g, h, i, j, k = this.scrollbarGroup,
                l = this.navigatorGroup,
                m = this.scrollbar,
                l = this.xAxis,
                n = this.scrollbarTrack,
                o = this.scrollbarHeight,
                p = this.scrollbarEnabled,
                r = this.navigatorOptions,
                s = this.scrollbarOptions,
                w = s.minWidth,
                u = this.height,
                y = this.top,
                z = this.navigatorEnabled,
                O = r.outlineWidth,
                B = O / 2,
                E = 0,
                C = this.outlineHeight,
                G = s.barBorderRadius,
                F = s.barBorderWidth,
                D = y + B,
                H;
            if (!isNaN(a)) {
                this.navigatorLeft = g = q(l.left, e.plotLeft + o);
                this.navigatorWidth = h = q(l.len, e.plotWidth - 2 * o);
                this.scrollerLeft = i = g - o;
                this.scrollerWidth = j = j = h + 2 * o;
                l.getExtremes && (H =
                    this.getUnionExtremes(!0)) && (H.dataMin !== l.min || H.dataMax !== l.max) && l.setExtremes(H.dataMin, H.dataMax, !0, !1);
                c = q(c, l.translate(a));
                d = q(d, l.translate(b));
                if (isNaN(c) || P(c) === Infinity) c = 0, d = j;
                if (!(l.translate(d, !0) - l.translate(c, !0) < e.xAxis[0].minRange)) {
                    this.zoomedMax = A(v(c, d), h);
                    this.zoomedMin = v(this.fixedWidth ? this.zoomedMax - this.fixedWidth : A(c, d), 0);
                    this.range = this.zoomedMax - this.zoomedMin;
                    c = t(this.zoomedMax);
                    b = t(this.zoomedMin);
                    a = c - b;
                    if (!this.rendered) {
                        if (z) {
                            this.navigatorGroup = l = f.g("navigator").attr({
                                zIndex: 3
                            }).add();
                            this.leftShade = f.rect().attr({
                                fill: r.maskFill
                            }).add(l);
                            if (!r.maskInside) this.rightShade = f.rect().attr({
                                fill: r.maskFill
                            }).add(l);
                            this.outline = f.path().attr({
                                "stroke-width": O,
                                stroke: r.outlineColor
                            }).add(l)
                        }
                        if (p) this.scrollbarGroup = k = f.g("scrollbar").add(), m = s.trackBorderWidth, this.scrollbarTrack = n = f.rect().attr({
                            x: 0,
                            y: -m % 2 / 2,
                            fill: s.trackBackgroundColor,
                            stroke: s.trackBorderColor,
                            "stroke-width": m,
                            r: s.trackBorderRadius || 0,
                            height: o
                        }).add(k), this.scrollbar = m = f.rect().attr({
                            y: -F % 2 / 2,
                            height: o,
                            fill: s.barBackgroundColor,
                            stroke: s.barBorderColor,
                            "stroke-width": F,
                            r: G
                        }).add(k), this.scrollbarRifles = f.path().attr({
                            stroke: s.rifleColor,
                            "stroke-width": 1
                        }).add(k)
                    }
                    e = e.isResizing ? "animate" : "attr";
                    if (z) {
                        this.leftShade[e](r.maskInside ? {
                            x: g + b,
                            y: y,
                            width: c - b,
                            height: u
                        } : {
                            x: g,
                            y: y,
                            width: b,
                            height: u
                        });
                        if (this.rightShade) this.rightShade[e]({
                            x: g + c,
                            y: y,
                            width: h - c,
                            height: u
                        });
                        this.outline[e]({
                            d: ["M", i, D, "L", g + b + B, D, g + b + B, D + C, "L", g + c - B, D + C, "L", g + c - B, D, i + j, D].concat(r.maskInside ? ["M", g + b + B, D, "L", g + c - B, D] : [])
                        });
                        this.drawHandle(b + B, 0);
                        this.drawHandle(c +
                            B, 1)
                    }
                    if (p && k) this.drawScrollbarButton(0), this.drawScrollbarButton(1), k[e]({
                        translateX: i,
                        translateY: t(D + u)
                    }), n[e]({
                        width: j
                    }), g = o + b, h = a - F, h < w && (E = (w - h) / 2, h = w, g -= E), this.scrollbarPad = E, m[e]({
                        x: V(g) + F % 2 / 2,
                        width: h
                    }), w = o + b + a / 2 - 0.5, this.scrollbarRifles.attr({
                        visibility: a > 12 ? "visible" : "hidden"
                    })[e]({
                        d: ["M", w - 3, o / 4, "L", w - 3, 2 * o / 3, "M", w, o / 4, "L", w, 2 * o / 3, "M", w + 3, o / 4, "L", w + 3, 2 * o / 3]
                    });
                    this.scrollbarPad = E;
                    this.rendered = !0
                }
            }
        },
        addEvents: function() {
            var a = this.chart.container,
                b = this.mouseDownHandler,
                c = this.mouseMoveHandler,
                d = this.mouseUpHandler,
                e;
            e = [
                [a, "mousedown", b],
                [a, "mousemove", c],
                [document, "mouseup", d]
            ];
            db && e.push([a, "touchstart", b], [a, "touchmove", c], [document, "touchend", d]);
            p(e, function(a) {
                z.apply(null, a)
            });
            this._events = e
        },
        removeEvents: function() {
            p(this._events, function(a) {
                U.apply(null, a)
            });
            this._events = r;
            this.navigatorEnabled && this.baseSeries && U(this.baseSeries, "updatedData", this.updatedDataHandler)
        },
        init: function() {
            var a = this,
                b = a.chart,
                c, d, e = a.scrollbarHeight,
                f = a.navigatorOptions,
                g = a.height,
                h = a.top,
                i, j, k = document.body.style,
                l, m = a.baseSeries;
            a.mouseDownHandler = function(d) {
                var d = b.pointer.normalize(d),
                    e = a.zoomedMin,
                    f = a.zoomedMax,
                    h = a.top,
                    j = a.scrollbarHeight,
                    m = a.scrollerLeft,
                    n = a.scrollerWidth,
                    o = a.navigatorLeft,
                    p = a.navigatorWidth,
                    q = a.scrollbarPad,
                    r = a.range,
                    s = d.chartX,
                    t = d.chartY,
                    d = b.xAxis[0],
                    u, v = fb ? 10 : 7;
                if (t > h && t < h + g + j)
                    if ((h = !a.scrollbarEnabled || t < h + g) && X.abs(s - e - o) < v) a.grabbedLeft = !0, a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null;
                    else if (h && X.abs(s - f - o) < v) a.grabbedRight = !0, a.otherHandlePos = e, a.fixedExtreme = d.min,
                    b.fixedRange = null;
                else if (s > o + e - q && s < o + f + q) {
                    a.grabbedCenter = s;
                    a.fixedWidth = r;
                    if (b.renderer.isSVG) l = k.cursor, k.cursor = "ew-resize";
                    i = s - e
                } else if (s > m && s < m + n) {
                    f = h ? s - o - r / 2 : s < o ? e - r * 0.2 : s > m + n - j ? e + r * 0.2 : s < o + e ? e - r : f;
                    if (f < 0) f = 0;
                    else if (f + r >= p) f = p - r, u = c.dataMax;
                    if (f !== e) a.fixedWidth = r, e = c.toFixedRange(f, f + r, null, u), d.setExtremes(e.min, e.max, !0, !1, {
                        trigger: "navigator"
                    })
                }
            };
            a.mouseMoveHandler = function(c) {
                var d = a.scrollbarHeight,
                    e = a.navigatorLeft,
                    f = a.navigatorWidth,
                    g = a.scrollerLeft,
                    h = a.scrollerWidth,
                    k = a.range,
                    l;
                if (c.pageX !== 0) c = b.pointer.normalize(c), l = c.chartX, l < e ? l = e : l > g + h - d && (l = g + h - d), a.grabbedLeft ? (j = !0, a.render(0, 0, l - e, a.otherHandlePos)) : a.grabbedRight ? (j = !0, a.render(0, 0, a.otherHandlePos, l - e)) : a.grabbedCenter && (j = !0, l < i ? l = i : l > f + i - k && (l = f + i - k), a.render(0, 0, l - i, l - i + k)), j && a.scrollbarOptions.liveRedraw && setTimeout(function() {
                    a.mouseUpHandler(c)
                }, 0)
            };
            a.mouseUpHandler = function(d) {
                var e, f;
                if (j) {
                    if (a.zoomedMin === a.otherHandlePos) e = a.fixedExtreme;
                    else if (a.zoomedMax === a.otherHandlePos) f = a.fixedExtreme;
                    e = c.toFixedRange(a.zoomedMin,
                        a.zoomedMax, e, f);
                    b.xAxis[0].setExtremes(e.min, e.max, !0, !1, {
                        trigger: "navigator",
                        triggerOp: "navigator-drag",
                        DOMEvent: d
                    })
                }
                if (d.type !== "mousemove") a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = j = i = null, k.cursor = l || ""
            };
            var n = b.xAxis.length,
                o = b.yAxis.length;
            b.extraBottomMargin = a.outlineHeight + f.margin;
            a.navigatorEnabled ? (a.xAxis = c = new D(b, y({
                ordinal: m && m.xAxis.options.ordinal
            }, f.xAxis, {
                id: "navigator-x-axis",
                isX: !0,
                type: "datetime",
                index: n,
                height: g,
                offset: 0,
                offsetLeft: e,
                offsetRight: -e,
                keepOrdinalPadding: !0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: 0,
                maxPadding: 0,
                zoomEnabled: !1
            })), a.yAxis = d = new D(b, y(f.yAxis, {
                id: "navigator-y-axis",
                alignTicks: !1,
                height: g,
                offset: 0,
                index: o,
                zoomEnabled: !1
            })), m || f.series.data ? a.addBaseSeries() : b.series.length === 0 && Q(b, "redraw", function(c, d) {
                if (b.series.length > 0 && !a.series) a.setBaseSeries(), b.redraw = c;
                c.call(b, d)
            })) : a.xAxis = c = {
                translate: function(a, c) {
                    var d = b.xAxis[0],
                        f = d.getExtremes(),
                        g = b.plotWidth - 2 * e,
                        h = ub("min", d.options.min, f.dataMin),
                        d = ub("max", d.options.max, f.dataMax) - h;
                    return c ? a * d / g + h : g * (a - h) / d
                },
                toFixedRange: D.prototype.toFixedRange
            };
            Q(b, "getMargins", function(b) {
                var e = this.legend,
                    f = e.options;
                b.call(this);
                a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - (f.verticalAlign === "bottom" && f.enabled && !f.floating ? e.legendHeight + q(f.margin, 10) : 0);
                if (c && d) c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize()
            });
            a.addEvents()
        },
        getUnionExtremes: function(a) {
            var b = this.chart.xAxis[0],
                c = this.xAxis,
                d = c.options,
                e = b.options;
            if (!a || b.dataMin !== null) return {
                dataMin: ub("min", d && d.min, e.min, b.dataMin, c.dataMin),
                dataMax: ub("max", d && d.max, e.max, b.dataMax, c.dataMax)
            }
        },
        setBaseSeries: function(a) {
            var b = this.chart,
                a = a || b.options.navigator.baseSeries;
            this.series && this.series.remove();
            this.baseSeries = b.series[a] || typeof a === "string" && b.get(a) || b.series[0];
            this.xAxis && this.addBaseSeries()
        },
        addBaseSeries: function() {
            var a = this.baseSeries,
                b = a ? a.options : {},
                c = b.data,
                d = this.navigatorOptions.series,
                e;
            e = d.data;
            this.hasNavigatorData = !!e;
            b = y(b, d, {
                enableMouseTracking: !1,
                group: "nav",
                padXAxis: !1,
                xAxis: "navigator-x-axis",
                yAxis: "navigator-y-axis",
                name: "Navigator",
                showInLegend: !1,
                isInternal: !0,
                visible: !0
            });
            b.data = e || c;
            this.series = this.chart.initSeries(b);
            if (a && this.navigatorOptions.adaptToUpdatedData !== !1) z(a, "updatedData", this.updatedDataHandler), a.userOptions.events = s(a.userOptions.event, {
                updatedData: this.updatedDataHandler
            })
        },
        updatedDataHandler: function() {
            var a = this.chart.scroller,
                b = a.baseSeries,
                c = b.xAxis,
                d = c.getExtremes(),
                e = d.min,
                f = d.max,
                g = d.dataMin,
                d = d.dataMax,
                h = f - e,
                i, j, k, l, m, n = a.series;
            i = n.xData;
            var o = !!c.setExtremes;
            j = f >= i[i.length - 1] - (this.closestPointRange || 0);
            i = e <= g;
            if (!a.hasNavigatorData) n.options.pointStart = b.xData[0], n.setData(b.options.data, !1), m = !0;
            i && (l = g, k = l + h);
            j && (k = d, i || (l = v(k - h, n.xData[0])));
            o && (i || j) ? isNaN(l) || c.setExtremes(l, k, !0, !1, {
                trigger: "updatedData"
            }) : (m && this.chart.redraw(!1), a.render(v(e, g), A(f, d)))
        },
        destroy: function() {
            this.removeEvents();
            p([this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline,
                this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar
            ], function(a) {
                a && a.destroy && a.destroy()
            });
            this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null;
            p([this.scrollbarButtons, this.handles, this.elementsToDestroy], function(a) {
                Na(a)
            })
        }
    };
    N.Scroller = Cb;
    Q(D.prototype, "zoom", function(a, b, c) {
        var d = this.chart,
            e = d.options,
            f = e.chart.zoomType,
            g = e.navigator,
            e = e.rangeSelector,
            h;
        if (this.isXAxis && (g &&
                g.enabled || e && e.enabled))
            if (f === "x") d.resetZoomButton = "blocked";
            else if (f === "y") h = !1;
        else if (f === "xy") d = this.previousZoom, u(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom);
        return h !== r ? h : a.call(this, b, c)
    });
    Q(ya.prototype, "init", function(a, b, c) {
        z(this, "beforeRender", function() {
            var a = this.options;
            if (a.navigator.enabled || a.scrollbar.enabled) this.scroller = new Cb(this)
        });
        a.call(this, b, c)
    });
    Q(M.prototype, "addPoint", function(a, b, c, d, e) {
        var f = this.options.turboThreshold;
        f && this.xData.length > f && ha(b) && !Ja(b) && this.chart.scroller && ma(20, !0);
        a.call(this, b, c, d, e)
    });
    s(F, {
        rangeSelector: {
            buttonTheme: {
                width: 28,
                height: 18,
                fill: "#f7f7f7",
                padding: 2,
                r: 0,
                "stroke-width": 0,
                style: {
                    color: "#444",
                    cursor: "pointer",
                    fontWeight: "normal"
                },
                zIndex: 7,
                states: {
                    hover: {
                        fill: "#e7e7e7"
                    },
                    select: {
                        fill: "#e7f0f9",
                        style: {
                            color: "black",
                            fontWeight: "bold"
                        }
                    }
                }
            },
            inputPosition: {
                align: "right"
            },
            labelStyle: {
                color: "#666"
            }
        }
    });
    F.lang = y(F.lang, {
        rangeSelectorZoom: "Zoom",
        rangeSelectorFrom: "From",
        rangeSelectorTo: "To"
    });
    Db.prototype = {
        clickButton: function(a, b) {
            var c = this,
                d = c.selected,
                e = c.chart,
                f = c.buttons,
                g = c.buttonOptions[a],
                h = e.xAxis[0],
                i = e.scroller && e.scroller.getUnionExtremes() || h || {},
                j = i.dataMin,
                k = i.dataMax,
                l, m = h && t(A(h.max, q(k, h.max))),
                n = new ca(m),
                o = g.type,
                s = g.count,
                i = g._range,
                u;
            if (!(j === null || k === null || a === c.selected)) {
                if (o === "month" || o === "year") l = {
                    month: "Month",
                    year: "FullYear"
                }[o], n["set" + l](n["get" + l]() - s), l = n.getTime(), j = q(j, Number.MIN_VALUE), isNaN(l) || l < j ? (l = j, m = A(l + i, k)) : i = m - l;
                else if (i) l = v(m - i, j), m = A(l +
                    i, k);
                else if (o === "ytd")
                    if (h) {
                        if (k === r) j = Number.MAX_VALUE, k = Number.MIN_VALUE, p(e.series, function(a) {
                            a = a.xData;
                            j = A(a[0], j);
                            k = v(a[a.length - 1], k)
                        }), b = !1;
                        m = new ca(k);
                        u = m.getFullYear();
                        l = u = v(j || 0, ca.UTC(u, 0, 1));
                        m = m.getTime();
                        m = A(k || m, m)
                    } else {
                        z(e, "beforeRender", function() {
                            c.clickButton(a)
                        });
                        return
                    } else o === "all" && h && (l = j, m = k);
                f[d] && f[d].setState(0);
                f[a] && f[a].setState(2);
                e.fixedRange = i;
                h ? h.setExtremes(l, m, q(b, 1), 0, {
                    trigger: "rangeSelectorButton",
                    rangeSelectorButton: g
                }) : (d = e.options.xAxis, d[0] = y(d[0], {
                    range: i,
                    min: u
                }));
                c.setSelected(a)
            }
        },
        setSelected: function(a) {
            this.selected = this.options.selected = a
        },
        defaultButtons: [{
            type: "month",
            count: 1,
            text: "1m"
        }, {
            type: "month",
            count: 3,
            text: "3m"
        }, {
            type: "month",
            count: 6,
            text: "6m"
        }, {
            type: "ytd",
            text: "YTD"
        }, {
            type: "year",
            count: 1,
            text: "1y"
        }, {
            type: "all",
            text: "All"
        }],
        init: function(a) {
            var b = this,
                c = a.options.rangeSelector,
                d = c.buttons || [].concat(b.defaultButtons),
                e = c.selected,
                f = b.blurInputs = function() {
                    var a = b.minInput,
                        c = b.maxInput;
                    a && a.blur && J(a, "blur");
                    c && c.blur && J(c, "blur")
                };
            b.chart =
                a;
            b.options = c;
            b.buttons = [];
            a.extraTopMargin = 35;
            b.buttonOptions = d;
            z(a.container, "mousedown", f);
            z(a, "resize", f);
            p(d, b.computeButtonRange);
            e !== r && d[e] && this.clickButton(e, !1);
            z(a, "load", function() {
                z(a.xAxis[0], "afterSetExtremes", function() {
                    b.updateButtonStates(!0)
                })
            })
        },
        updateButtonStates: function(a) {
            var b = this,
                c = this.chart,
                d = c.xAxis[0],
                e = c.scroller && c.scroller.getUnionExtremes() || d,
                f = e.dataMin,
                g = e.dataMax,
                h = b.selected,
                i = b.options.allButtonsEnabled,
                j = b.buttons;
            a && c.fixedRange !== t(d.max - d.min) && (j[h] &&
                j[h].setState(0), b.setSelected(null));
            p(b.buttonOptions, function(a, c) {
                var e = a._range,
                    n = e > g - f,
                    o = e < d.minRange,
                    p = a.type === "all" && d.max - d.min >= g - f && j[c].state !== 2,
                    q = a.type === "ytd" && xa("%Y", f) === xa("%Y", g);
                e === t(d.max - d.min) && c !== h ? (b.setSelected(c), j[c].setState(2)) : !i && (n || o || p || q) ? j[c].setState(3) : j[c].state === 3 && j[c].setState(0)
            })
        },
        computeButtonRange: function(a) {
            var b = a.type,
                c = a.count || 1,
                d = {
                    millisecond: 1,
                    second: 1E3,
                    minute: 6E4,
                    hour: 36E5,
                    day: 864E5,
                    week: 6048E5
                };
            if (d[b]) a._range = d[b] * c;
            else if (b === "month" ||
                b === "year") a._range = {
                month: 30,
                year: 365
            }[b] * 864E5 * c
        },
        setInputValue: function(a, b) {
            var c = this.chart.options.rangeSelector;
            if (u(b)) this[a + "Input"].HCTime = b;
            this[a + "Input"].value = xa(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);
            this[a + "DateBox"].attr({
                text: xa(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime)
            })
        },
        drawInput: function(a) {
            var b = this,
                c = b.chart,
                d = c.renderer.style,
                e = c.renderer,
                f = c.options.rangeSelector,
                g = b.div,
                h = a === "min",
                i, j, k, l = this.inputGroup;
            this[a + "Label"] = j = e.label(F.lang[h ?
                "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({
                padding: 2
            }).css(y(d, f.labelStyle)).add(l);
            l.offset += j.width + 5;
            this[a + "DateBox"] = k = e.label("", l.offset).attr({
                padding: 2,
                width: f.inputBoxWidth || 90,
                height: f.inputBoxHeight || 17,
                stroke: f.inputBoxBorderColor || "silver",
                "stroke-width": 1
            }).css(y({
                textAlign: "center",
                color: "#444"
            }, d, f.inputStyle)).on("click", function() {
                b[a + "Input"].focus()
            }).add(l);
            l.offset += k.width + (h ? 10 : 0);
            this[a + "Input"] = i = aa("input", {
                name: a,
                className: "highcharts-range-selector",
                type: "text"
            }, s({
                position: "absolute",
                border: 0,
                width: "1px",
                height: "1px",
                padding: 0,
                textAlign: "center",
                fontSize: d.fontSize,
                fontFamily: d.fontFamily,
                top: c.plotTop + "px"
            }, f.inputStyle), g);
            i.onfocus = function() {
                K(this, {
                    left: l.translateX + k.x + "px",
                    top: l.translateY + "px",
                    width: k.width - 2 + "px",
                    height: k.height - 2 + "px",
                    border: "2px solid silver"
                })
            };
            i.onblur = function() {
                K(this, {
                    border: 0,
                    width: "1px",
                    height: "1px"
                });
                b.setInputValue(a)
            };
            i.onchange = function() {
                var a = i.value,
                    d = (f.inputDateParser || ca.parse)(a),
                    e = c.xAxis[0],
                    g =
                    e.dataMin,
                    j = e.dataMax;
                isNaN(d) && (d = a.split("-"), d = ca.UTC(H(d[0]), H(d[1]) - 1, H(d[2])));
                isNaN(d) || (F.global.useUTC || (d += (new ca).getTimezoneOffset() * 6E4), h ? d > b.maxInput.HCTime ? d = r : d < g && (d = g) : d < b.minInput.HCTime ? d = r : d > j && (d = j), d !== r && c.xAxis[0].setExtremes(h ? d : e.min, h ? e.max : d, r, r, {
                    trigger: "rangeSelectorInput"
                }))
            }
        },
        render: function(a, b) {
            var c = this,
                d = c.chart,
                e = d.renderer,
                f = d.container,
                g = d.options,
                h = g.exporting && g.navigation && g.navigation.buttonOptions,
                i = g.rangeSelector,
                j = c.buttons,
                g = F.lang,
                k = c.div,
                k = c.inputGroup,
                l = i.buttonTheme,
                m = i.inputEnabled !== !1,
                n = l && l.states,
                o = d.plotLeft,
                r;
            if (!c.rendered && (c.zoomText = e.text(g.rangeSelectorZoom, o, d.plotTop - 20).css(i.labelStyle).add(), r = o + c.zoomText.getBBox().width + 5, p(c.buttonOptions, function(a, b) {
                    j[b] = e.button(a.text, r, d.plotTop - 35, function() {
                        c.clickButton(b);
                        c.isActive = !0
                    }, l, n && n.hover, n && n.select).css({
                        textAlign: "center"
                    }).add();
                    r += j[b].width + q(i.buttonSpacing, 5);
                    c.selected === b && j[b].setState(2)
                }), c.updateButtonStates(), m)) c.div = k = aa("div", null, {
                position: "relative",
                height: 0,
                zIndex: 1
            }), f.parentNode.insertBefore(k, f), c.inputGroup = k = e.g("input-group").add(), k.offset = 0, c.drawInput("min"), c.drawInput("max");
            m && (f = d.plotTop - 45, k.align(s({
                y: f,
                width: k.offset,
                x: h && f < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0
            }, i.inputPosition), !0, d.spacingBox), c.setInputValue("min", a), c.setInputValue("max", b));
            c.rendered = !0
        },
        destroy: function() {
            var a = this.minInput,
                b = this.maxInput,
                c = this.chart,
                d = this.blurInputs,
                e;
            U(c.container, "mousedown", d);
            U(c, "resize", d);
            Na(this.buttons);
            if (a) a.onfocus = a.onblur =
                a.onchange = null;
            if (b) b.onfocus = b.onblur = b.onchange = null;
            for (e in this) this[e] && e !== "chart" && (this[e].destroy ? this[e].destroy() : this[e].nodeType && Va(this[e])), this[e] = null
        }
    };
    D.prototype.toFixedRange = function(a, b, c, d) {
        var e = this.chart && this.chart.fixedRange,
            a = q(c, this.translate(a, !0)),
            b = q(d, this.translate(b, !0)),
            c = e && (b - a) / e;
        c > 0.7 && c < 1.3 && (d ? a = b - e : b = a + e);
        return {
            min: a,
            max: b
        }
    };
    Q(ya.prototype, "init", function(a, b, c) {
        z(this, "init", function() {
            if (this.options.rangeSelector.enabled) this.rangeSelector = new Db(this)
        });
        a.call(this, b, c)
    });
    N.RangeSelector = Db;
    ya.prototype.callbacks.push(function(a) {
        function b() {
            f = a.xAxis[0].getExtremes();
            g.render(f.min, f.max)
        }

        function c() {
            f = a.xAxis[0].getExtremes();
            isNaN(f.min) || h.render(f.min, f.max)
        }

        function d(a) {
            a.triggerOp !== "navigator-drag" && g.render(a.min, a.max)
        }

        function e(a) {
            h.render(a.min, a.max)
        }
        var f, g = a.scroller,
            h = a.rangeSelector;
        g && (z(a.xAxis[0], "afterSetExtremes", d), Q(a, "drawChartBox", function(a) {
            var c = this.isDirtyBox;
            a.call(this);
            c && b()
        }), b());
        h && (z(a.xAxis[0], "afterSetExtremes",
            e), z(a, "resize", c), c());
        z(a, "destroy", function() {
            g && U(a.xAxis[0], "afterSetExtremes", d);
            h && (U(a, "resize", c), U(a.xAxis[0], "afterSetExtremes", e))
        })
    });
    N.StockChart = function(a, b) {
        var c = a.series,
            d, e = q(a.navigator && a.navigator.enabled, !0) ? {
                startOnTick: !1,
                endOnTick: !1
            } : null,
            f = {
                marker: {
                    enabled: !1,
                    radius: 2
                },
                states: {
                    hover: {
                        lineWidth: 2
                    }
                }
            },
            g = {
                shadow: !1,
                borderWidth: 0
            };
        a.xAxis = za(qa(a.xAxis || {}), function(a) {
            return y({
                    minPadding: 0,
                    maxPadding: 0,
                    ordinal: !0,
                    title: {
                        text: null
                    },
                    labels: {
                        overflow: "justify"
                    },
                    showLastLabel: !0
                },
                a, {
                    type: "datetime",
                    categories: null
                }, e)
        });
        a.yAxis = za(qa(a.yAxis || {}), function(a) {
            d = q(a.opposite, !0);
            return y({
                labels: {
                    y: -2
                },
                opposite: d,
                showLastLabel: !1,
                title: {
                    text: null
                }
            }, a)
        });
        a.series = null;
        a = y({
            chart: {
                panning: !0,
                pinchType: "x"
            },
            navigator: {
                enabled: !0
            },
            scrollbar: {
                enabled: !0
            },
            rangeSelector: {
                enabled: !0
            },
            title: {
                text: null,
                style: {
                    fontSize: "16px"
                }
            },
            tooltip: {
                shared: !0,
                crosshairs: !0
            },
            legend: {
                enabled: !1
            },
            plotOptions: {
                line: f,
                spline: f,
                area: f,
                areaspline: f,
                arearange: f,
                areasplinerange: f,
                column: g,
                columnrange: g,
                candlestick: g,
                ohlc: g
            }
        }, a, {
            _stock: !0,
            chart: {
                inverted: !1
            }
        });
        a.series = c;
        return new ya(a, b)
    };
    Q($a.prototype, "init", function(a, b, c) {
        var d = c.chart.pinchType || "";
        a.call(this, b, c);
        this.pinchX = this.pinchHor = d.indexOf("x") !== -1;
        this.pinchY = this.pinchVert = d.indexOf("y") !== -1;
        this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert
    });
    Q(D.prototype, "autoLabelAlign", function(a) {
        var b = this.chart,
            c = this.options,
            b = b._labelPanes = b._labelPanes || {},
            d = this.options.labels;
        if (this.chart.options._stock && this.coll === "yAxis" && (c = c.top +
                "," + c.height, !b[c] && d.enabled)) {
            if (d.x === 15) d.x = 0;
            if (d.align === void 0) d.align = "right";
            b[c] = 1;
            return "right"
        }
        return a.call(this, [].slice.call(arguments, 1))
    });
    D.prototype.getPlotLinePath = function(a, b, c, d, e) {
        var f = this,
            g = this.isLinked && !this.series ? this.linkedParent.series : this.series,
            h = f.chart,
            i = h.renderer,
            j = f.left,
            k = f.top,
            l, m, n, o, r = [],
            s, v;
        if (f.coll === "xAxis" || f.coll === "yAxis") s = f.isXAxis ? u(f.options.yAxis) ? [h.yAxis[f.options.yAxis]] : za(g, function(a) {
                return a.yAxis
            }) : u(f.options.xAxis) ? [h.xAxis[f.options.xAxis]] :
            za(g, function(a) {
                return a.xAxis
            });
        p(f.isXAxis ? h.yAxis : h.xAxis, function(a) {
            if (u(a.options.id) ? a.options.id.indexOf("navigator") === -1 : 1) {
                var b = a.isXAxis ? "yAxis" : "xAxis",
                    b = u(a.options[b]) ? h[b][a.options[b]] : h[b][0];
                f === b && s.push(a)
            }
        });
        v = s.length ? [] : [f];
        p(s, function(a) {
            Qa(a, v) === -1 && v.push(a)
        });
        e = q(e, f.translate(a, null, null, c));
        isNaN(e) || (f.horiz ? p(v, function(a) {
            m = a.top;
            o = m + a.len;
            l = n = t(e + f.transB);
            (l >= j && l <= j + f.width || d) && r.push("M", l, m, "L", n, o)
        }) : p(v, function(a) {
            l = a.left;
            n = l + a.width;
            m = o = t(k + f.height -
                e);
            (m >= k && m <= k + f.height || d) && r.push("M", l, m, "L", n, o)
        }));
        if (r.length > 0) return i.crispPolyLine(r, b || 1)
    };
    D.prototype.getPlotBandPath = function(a, b) {
        var c = this.getPlotLinePath(b),
            d = this.getPlotLinePath(a),
            e = [],
            f;
        if (d && c)
            for (f = 0; f < d.length; f += 6) e.push("M", d[f + 1], d[f + 2], "L", d[f + 4], d[f + 5], c[f + 4], c[f + 5], c[f + 1], c[f + 2]);
        else e = null;
        return e
    };
    na.prototype.crispPolyLine = function(a, b) {
        var c;
        for (c = 0; c < a.length; c += 6) a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = t(a[c + 1]) - b % 2 / 2), a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = t(a[c + 2]) + b % 2 / 2);
        return a
    };
    if (Za === N.VMLRenderer) ib.prototype.crispPolyLine = na.prototype.crispPolyLine;
    Q(D.prototype, "hideCrosshair", function(a, b) {
        a.call(this, b);
        u(this.crossLabelArray) && (u(b) ? this.crossLabelArray[b] && this.crossLabelArray[b].hide() : p(this.crossLabelArray, function(a) {
            a.hide()
        }))
    });
    Q(D.prototype, "drawCrosshair", function(a, b, c) {
        var d, e;
        a.call(this, b, c);
        if (u(this.crosshair.label) && this.crosshair.label.enabled && u(c)) {
            var a = this.chart,
                f = this.options.crosshair.label,
                g = this.isXAxis ? "x" : "y",
                b = this.horiz,
                h =
                this.opposite,
                i = this.left,
                j = this.top,
                k = this.crossLabel,
                l, m, n = f.format,
                o = "";
            if (!k) k = this.crossLabel = a.renderer.label().attr({
                align: f.align || (b ? "center" : h ? this.labelAlign === "right" ? "right" : "left" : this.labelAlign === "left" ? "left" : "center"),
                zIndex: 12,
                height: b ? 16 : r,
                fill: f.backgroundColor || this.series[0] && this.series[0].color || "gray",
                padding: q(f.padding, 2),
                stroke: f.borderColor || null,
                "stroke-width": f.borderWidth || 0
            }).css(s({
                color: "white",
                fontWeight: "normal",
                fontSize: "11px",
                textAlign: "center"
            }, f.style)).add();
            b ? (l = c.plotX + i, m = j + (h ? 0 : this.height)) : (l = h ? this.width + i : 0, m = c.plotY + j);
            if (m < j || m > j + this.height) this.hideCrosshair();
            else {
                !n && !f.formatter && (this.isDatetimeAxis && (o = "%b %d, %Y"), n = "{value" + (o ? ":" + o : "") + "}");
                k.attr({
                    text: n ? Ma(n, {
                        value: c[g]
                    }) : f.formatter.call(this, c[g]),
                    x: l,
                    y: m,
                    visibility: "visible"
                });
                c = k.getBBox();
                if (b) {
                    if (this.options.tickPosition === "inside" && !h || this.options.tickPosition !== "inside" && h) m = k.y - c.height
                } else m = k.y - c.height / 2;
                b ? (d = i - c.x, e = i + this.width - c.x) : (d = this.labelAlign === "left" ? i :
                    0, e = this.labelAlign === "right" ? i + this.width : a.chartWidth);
                k.translateX < d && (l += d - k.translateX);
                k.translateX + c.width >= e && (l -= k.translateX + c.width - e);
                k.attr({
                    x: l,
                    y: m,
                    visibility: "visible"
                })
            }
        }
    });
    var mc = da.init,
        nc = da.processData,
        oc = Ba.prototype.tooltipFormatter;
    da.init = function() {
        mc.apply(this, arguments);
        this.setCompare(this.options.compare)
    };
    da.setCompare = function(a) {
        this.modifyValue = a === "value" || a === "percent" ? function(b, c) {
            var d = this.compareValue;
            if (b !== r && (b = a === "value" ? b - d : b = 100 * (b / d) - 100, c)) c.change =
                b;
            return b
        } : null;
        if (this.chart.hasRendered) this.isDirty = !0
    };
    da.processData = function() {
        var a = 0,
            b, c, d;
        nc.apply(this, arguments);
        if (this.xAxis && this.processedYData) {
            b = this.processedXData;
            c = this.processedYData;
            for (d = c.length; a < d; a++)
                if (typeof c[a] === "number" && b[a] >= this.xAxis.min) {
                    this.compareValue = c[a];
                    break
                }
        }
    };
    Q(da, "getExtremes", function(a) {
        a.apply(this, [].slice.call(arguments, 1));
        if (this.modifyValue) this.dataMax = this.modifyValue(this.dataMax), this.dataMin = this.modifyValue(this.dataMin)
    });
    D.prototype.setCompare =
        function(a, b) {
            this.isXAxis || (p(this.series, function(b) {
                b.setCompare(a)
            }), q(b, !0) && this.chart.redraw())
        };
    Ba.prototype.tooltipFormatter = function(a) {
        a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + Da(this.change, q(this.series.tooltipOptions.changeDecimals, 2)));
        return oc.apply(this, [a])
    };
    Q(M.prototype, "render", function(a) {
        if (this.chart.options._stock) !this.clipBox && this.animate && this.animate.toString().indexOf("sharedClip") !== -1 ? (this.clipBox = y(this.chart.clipBox), this.clipBox.width = this.xAxis.len,
            this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] && this.chart[this.sharedClipKey].attr({
            width: this.xAxis.len,
            height: this.yAxis.len
        });
        a.call(this)
    });
    s(N, {
        Axis: D,
        Chart: ya,
        Color: Ia,
        Point: Ba,
        Tick: bb,
        Renderer: Za,
        Series: M,
        SVGElement: Z,
        SVGRenderer: na,
        arrayMin: Ua,
        arrayMax: Ea,
        charts: ba,
        dateFormat: xa,
        format: Ma,
        pathAnim: Gb,
        getOptions: function() {
            return F
        },
        hasBidiBug: Yb,
        isTouchDevice: fb,
        numberFormat: Da,
        seriesTypes: B,
        setOptions: function(a) {
            F = y(!0, F, a);
            Mb();
            return F
        },
        addEvent: z,
        removeEvent: U,
        createElement: aa,
        discardElement: Va,
        css: K,
        each: p,
        extend: s,
        map: za,
        merge: y,
        pick: q,
        splat: qa,
        extendClass: ia,
        pInt: H,
        wrap: Q,
        svg: ea,
        canvas: la,
        vml: !ea && !la,
        product: "Highstock",
        version: "2.0.4"
    })
})();