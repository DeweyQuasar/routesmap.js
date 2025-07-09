import {
    r as o,
    z as K,
    aS as r,
    aR as k,
    by as N,
    bz as $,
    D
} from "./vndr-C-rNLSX8.js";
import {
    F as ee,
    L as te,
    cm as se
} from "./refresh-B4OVI0m0.js";
import {
    c as R
} from "./index-DWb1yUZw.js";

function we() {
    const {
        session: {
            isAuthenticated: e
        }
    } = ee(), {
        data: i,
        isLoading: a
    } = te(e), [t, s] = o.useState(!1), [n, l] = o.useState(0), [c, m] = o.useState(0), [f, C] = o.useState(0), [h, S] = o.useState(""), [w, p] = o.useState(""), [u, y] = o.useState(-1), [_, A] = o.useState(-1), [d, M] = o.useState(""), [q, I] = o.useState(""), [E, O] = o.useState(!1), [T, z] = o.useState(!1), [B, F] = o.useState(!1), [U, V] = o.useState(!1), [H, Z] = o.useState(!1), [j, Q] = o.useState(!1), [X, G] = o.useState(!1), [Y, J] = o.useState(0), [x, W] = o.useState(0);
    return o.useEffect(() => {
        var L;
        if (i) {
            const b = i.account;
            s(!0), y(b.subscription_info.monthly_report_limit), A(b.subscription_info.monthly_reports_remaining), p(b.subscription_info.normalize_date), l(parseFloat(b.subscription_info.money_amount.replace("$", ""))), C(b.subscription_info.renewal_period), S(b.subscription_info.renewal_period_type), M(b.subscription_info.subscription_state), Q(b.subscription_info.subscription_plan_internal_name === "internal_staff"), I((L = b.subscription_info) == null ? void 0 : L.subscription_plan_unique_name)
        }
    }, [i]), o.useEffect(() => {
        Z(u !== -1), G(u === -1), W(u - _)
    }, [u, _]), o.useEffect(() => {
        if (u === -1) return;
        let L = x / u * 100;
        L > 100 && (L = 100), J(L)
    }, [u, x]), o.useEffect(() => {
        !n || !f || m(n / f)
    }, [n, f]), o.useEffect(() => {
        O(f === 12)
    }, [f]), o.useEffect(() => {
        z((d == null ? void 0 : d.toLowerCase()) === "cancelled"), F((d == null ? void 0 : d.toLowerCase()) === "expired"), V((d == null ? void 0 : d.toLowerCase()) === "suspended")
    }, [d]), {
        accountLoaded: t,
        isAnnualSubscription: E,
        isCancelledSubscription: T,
        isExpiredSubscription: B,
        isSuspendedSubscription: U,
        isLimitedUser: H,
        isUnlimitedUser: X,
        isStaff: j,
        planAmount: n,
        planMonthlyCost: c,
        renewalPeriod: f,
        renewalPeriodType: h,
        nextRenewalDate: w,
        reportLimit: u,
        reportsRun: x,
        reportsRunPercentage: Y,
        subscriptionState: d,
        isLoading: a,
        planName: q
    }
}
const pe = e => {
    var i, a, t;
    return {
        isInternationalVinTest: (i = R.internationalPlanNames) == null ? void 0 : i.vinPlan.includes(e),
        isInInternationalLanguageTest: (a = R.internationalPlanNames) == null ? void 0 : a.languagePlan.includes(e),
        isInSingleReportVariation: (t = R.variationPlanNames) == null ? void 0 : t.includes(e)
    }
};

function ye() {
    const {
        search: e
    } = K();
    return o.useMemo(() => new URLSearchParams(e), [e])
}
const ne = /^(\d{1} )?(\(\d{3}\)) (\d{3})-(\d{4})$/,
    g = function(e) {
        const i = e == null ? void 0 : e.replace(/[$,]/g, "");
        return i ? parseInt(i) < 1e9 : !0
    },
    P = function(e) {
        const i = e == null ? void 0 : e.replace(/[$,]/g, "");
        return i ? parseInt(i) > 0 : !0
    },
    ae = r().required("Please enter a full name").matches(/^[a-zA-Z\u00C0-\u017F\s]+$/, "Name can only contain letters.").test("full-name-validation", "Please enter a full name", e => e.trim().split(" ").length > 1),
    Ce = k({
        name: ae,
        dob: k().required("Date of birth is required").test("dob-validation", "Please enter a valid date of birth", e => e && e <= new Date)
    }),
    be = k({
        birthHour: N().transform(e => isNaN(e) ? void 0 : e).required("Birth Hour is required").min(0, "Birth Hour must be between 00 and 23").max(23, "Birth Hour must be between 00 and 23"),
        birthMinute: N().transform(e => isNaN(e) ? void 0 : e).required("Birth Minute is required").min(0, "Birth Minute must be between 0 and 59").max(59, "Birth Minute must be between 0 and 59"),
        birthLocation: r().required("Birth Location is required").matches(/^[a-zA-Z\u00C0-\u017F\s,]+$/, "City, Country can only contain letters and commas.").test("location-validation", "Please enter a valid location (e.g. New York, US)", e => e.split(",").filter(i => i.trim()).length === 2)
    }),
    ge = k().shape({
        first_name: r().trim().required(),
        last_name: r().trim().required(),
        address: r().matches(/^[a-zA-Z0-9 ]*$/).required(),
        apt: r(),
        city: r().matches(/^[a-zA-Z ]*$/).required(),
        state: r().required("State required"),
        zip: r().matches(/^\d{5}$/).required(),
        tokenized_ssn: r().matches(/^\d{9}$/).required(),
        tokenized_ssn_confirmation: r().test("ssn-match", "SSN must match", function(e) {
            return this.parent.tokenized_ssn === e
        }).required("Must match the social security number"),
        phone_number: r().matches(ne, "Please enter a valid phone number.").required(),
        tokenized_dob: r().required("Please submit a valid date"),
        terms_and_conditions: $().oneOf([!0]).required()
    }),
    Pe = k().shape({
        PayOffAllCreditCards: $().oneOf([!0, !1]).required(),
        CloseOldestCreditCard: $().oneOf([!0, !1]).required(),
        IncreaseCreditBalance: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P),
        IncreaseCreditCardLimit: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P),
        DecreaseCreditBalance: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P),
        OnTimePayment: r(),
        AllAccountsPastDue: r(),
        OneAccountPastDue: r(),
        ObtainCreditCard: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P),
        TransferCreditBalances: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P),
        ObtainCreditCardAsAuthorizedUser: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P),
        ApplyForCreditCard: r(),
        ObtainAutoLoan: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P),
        ObtainPersonalLoan: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P),
        ObtainMortgage: r().test("dollar-less-than-one-billion", "Sorry! Maximum value allowed is $999,999,999", g).test("dollar-less-than-one", "Sorry! Minimum value allowed is $1", P)
    }),
    ie = e => {
        var t;
        const i = "bk",
            a = (t = e == null ? void 0 : e.market) == null ? void 0 : t.filter(s => (s == null ? void 0 : s.source) === i);
        return (a == null ? void 0 : a.length) > 0 ? a : []
    },
    Ae = e => {
        const i = e.reduce((t, s) => (s.source && (t[s.source] || (t[s.source] = []), t[s.source].push(s)), t), {}),
            a = Object.values(i);
        return (a == null ? void 0 : a.length) > 0 ? a : []
    },
    Le = e => {
        var l, c, m, f;
        const a = ((c = (l = e == null ? void 0 : e.lotAndBuildingDetails) == null ? void 0 : l.lotDetails) == null ? void 0 : c.hasData) ? 1 : 0,
            t = (m = e == null ? void 0 : e.locationOfProperty) != null && m.length ? 1 : 0,
            s = (f = e == null ? void 0 : e.hoas) != null && f.length ? 1 : 0,
            n = () => {
                var h;
                return ((h = e == null ? void 0 : e.parcel_address) == null ? void 0 : h.full) || (e == null ? void 0 : e.owner_occupied) || (e == null ? void 0 : e.owner_vesting) ? 1 : 0
            };
        return a + t + s + n()
    },
    ke = e => {
        var n;
        const a = ie(e).length ? 1 : 0,
            t = +!!(e != null && e.taxes),
            s = +!!((n = e == null ? void 0 : e.assessments) != null && n.length);
        return a + t + s
    },
    Me = (e, i) => e.length ? e.filter(t => t.report_type === i && !!t.is_claimed).slice(0, 10) : [],
    Re = (e, i, a) => {
        var f, C, h, S, w, p, u, y, _, A, d;
        const t = (C = (f = e.identity.names) == null ? void 0 : f[0]) == null ? void 0 : C.parsed,
            s = (w = (S = (h = e.identity.dobs) == null ? void 0 : h[0]) == null ? void 0 : S.date) == null ? void 0 : w.parsed,
            n = (y = (u = (p = e.identity.dods) == null ? void 0 : p[0]) == null ? void 0 : u.date) == null ? void 0 : y.parsed,
            l = (_ = e.identity.fs_ids) == null ? void 0 : _[0],
            c = se(a);
        let m = null;
        return "images" in e && (m = (d = (A = e.images) == null ? void 0 : A[0]) == null ? void 0 : d.url), {
            first_name: t == null ? void 0 : t.first,
            middle_name: t == null ? void 0 : t.middle,
            last_name: t == null ? void 0 : t.last,
            dob_month: s == null ? void 0 : s.month,
            dob_year: s == null ? void 0 : s.year,
            tokenized_dob_day: s == null ? void 0 : s.day,
            dod_month: n == null ? void 0 : n.month,
            dod_year: n == null ? void 0 : n.year,
            tokenized_dod_day: n == null ? void 0 : n.day,
            relationship: null,
            preparedFrom: "",
            profile_picture: m,
            ancestor_report: {
                family_search_id: l,
                permalink: i,
                givenName: [t == null ? void 0 : t.first, t == null ? void 0 : t.middle].filter(Boolean).join(" "),
                surname: t == null ? void 0 : t.last,
                tokenized_dob_day: s == null ? void 0 : s.day,
                dob_month: s == null ? void 0 : s.month,
                dob_year: s == null ? void 0 : s.year,
                tokenized_dod_day: n == null ? void 0 : n.day,
                dod_month: n == null ? void 0 : n.month,
                dod_year: n == null ? void 0 : n.year,
                birth_place: [c.city, c.state, c.country].filter(Boolean).join(", "),
                place: c
            }
        }
    },
    v = e => e ? e !== (e == null ? void 0 : e.toUpperCase()) ? e : e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : null,
    xe = (e, i, a, t) => {
        var h, S, w, p, u, y, _, A, d, M;
        const s = (S = (h = e.identity.names) == null ? void 0 : h[0]) == null ? void 0 : S.parsed,
            n = (u = (p = (w = e.identity.dobs) == null ? void 0 : w[0]) == null ? void 0 : p.date) == null ? void 0 : u.parsed,
            l = (A = (_ = (y = e.identity.dods) == null ? void 0 : y[0]) == null ? void 0 : _.date) == null ? void 0 : A.parsed;
        let c = null;
        "images" in e && (c = (M = (d = e.images) == null ? void 0 : d[0]) == null ? void 0 : M.url);
        const m = v(s == null ? void 0 : s.first),
            f = v(s == null ? void 0 : s.middle),
            C = v(s == null ? void 0 : s.last);
        return {
            first_name: m,
            middle_name: f,
            last_name: C,
            dob_month: n == null ? void 0 : n.month,
            dob_year: n == null ? void 0 : n.year,
            tokenized_dob_day: n == null ? void 0 : n.day,
            dod_month: l == null ? void 0 : l.month,
            dod_year: l == null ? void 0 : l.year,
            tokenized_dod_day: l == null ? void 0 : l.day,
            relationship: null,
            preparedFrom: "",
            placeholder: !1,
            profile_picture: c,
            person_report_params: {
                bvid: a || null,
                relatives_expanded: !1,
                permalink: i,
                place: t
            }
        }
    },
    ve = (e, i, a, t, s, n, l, c) => {
        var S, w, p, u, y, _;
        const m = i.trim().split(" "),
            f = m[0] || null,
            C = m.length === 3 ? m[1] : null,
            h = m.length === 3 ? m[2] : m[1] || null;
        return {
            first_name: f,
            middle_name: C,
            last_name: h,
            dob_month: (S = a == null ? void 0 : a.parsed) == null ? void 0 : S.month,
            dob_year: (w = a == null ? void 0 : a.parsed) == null ? void 0 : w.year,
            tokenized_dob_day: (p = a == null ? void 0 : a.parsed) == null ? void 0 : p.day,
            dod_month: (u = t == null ? void 0 : t.parsed) == null ? void 0 : u.month,
            dod_year: (y = t == null ? void 0 : t.parsed) == null ? void 0 : y.year,
            tokenized_dod_day: (_ = t == null ? void 0 : t.parsed) == null ? void 0 : _.day,
            relationship: null,
            preparedFrom: "",
            placeholder: !1,
            profile_picture: c,
            obituary_report_params: {
                obituary_id: e,
                permalink: l,
                place: {
                    city: s,
                    state: n
                }
            }
        }
    },
    $e = e => {
        if (!e) return !1;
        const i = "America/Chicago",
            a = D.fromISO(e).setZone(i),
            t = D.now().setZone(i);
        let s = t.set({
            hour: 2,
            minute: 0,
            second: 0,
            millisecond: 0
        });
        return t.hour < 2 && (s = s.minus({
            days: 1
        })), a >= s
    };

function Ne(e) {
    if (!["production"].includes("production")) {
        const i = `${window.env.PATH_PREFIX}/login`;
        if (window.location.pathname === i) return;
        window.location.href = i;
        return
    }
    window.open(`${e}/login`, "_self")
}
const oe = "https://www.beenverified.com/rf/search/contact",
    re = "https://www.beenverified.com/rf/dashboard/unclaimed-money",
    le = "https://www.beenverified.com/rf/dashboard/rewards",
    ce = "https://docs.google.com/forms/d/e/1FAIpQLScugCNnjhri8oJkTf6SqaPigmlWRviTcVewj55RsyhS-l3Pqw/viewform",
    ue = "https://docs.google.com/forms/d/e/1FAIpQLSdsuNU5p7oD3CX3VvEMrBP1kvG3AodnhSvDytnb36rDVpcpxg/viewform",
    de = "https://www.beenverified.com/reviews/",
    me = "https://www.beenverified.com/press/",
    fe = "https://www.ltvco.com/careers/",
    De = ({
        contactUsHandler: e,
        isInternationalTestUser: i
    }) => {
        const {
            links: {
                affiliateLink: a,
                aboutLink: t,
                doDontsLink: s,
                FaqLink: n,
                supportLink: l
            }
        } = R, c = [{
            title: "SUPPORT",
            links: [{
                text: "Customer Care",
                href: l
            }, {
                text: "Contact Us",
                href: "#",
                onClick: e
            }, {
                text: "Do's & Dont's",
                href: s
            }, {
                text: "FAQ's",
                href: n
            }]
        }, {
            title: "COMPANY",
            links: [{
                text: "About BeenVerified",
                href: t
            }, {
                text: "Testimonials",
                href: de
            }, {
                text: "Press",
                href: me
            }, {
                text: "Careers",
                href: fe
            }]
        }];
        return i ? [{
            title: "RESOURCES",
            links: [{
                text: "Affiliates",
                href: a
            }]
        }, ...c] : [{
            title: "MORE SEARCHES",
            links: [{
                text: "Contact Pro",
                href: oe
            }, {
                text: "Unclaimed Money",
                href: re
            }]
        }, {
            title: "RESOURCES",
            links: [{
                text: "Affiliates",
                href: a
            }, {
                text: "Member Perks",
                href: le
            }, {
                text: "Request API Access",
                href: ce
            }, {
                text: "Need More Reports?",
                href: ue
            }]
        }, ...c]
    };
export {
    Pe as a, Ce as b, pe as c, be as d, Le as e, ke as f, Ae as g, Me as h, ve as i, Re as j, xe as k, $e as l, Ne as m, we as n, De as o, ge as s, ye as u
};
//# sourceMappingURL=utils-CMJtqSu6.js.map