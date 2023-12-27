}(document),
function(e, d) {
    var f, m, t, r, p = _toConsumableArray(e.querySelectorAll("[data-color]")).slice(0, 2);
    2 === p.length && p[0].matches(".homepage-hero__background") && (f = {
        yellow: "FFc524",
        blue: "82E6E6",
        orange: "FF8E4F",
        green: "63D9A0",
        "light-yellow": "FFE7A2",
        "light-blue": "CFF2F2",
        "light-orange": "FFCDA9",
        "light-green": "C8F2DE",
        "dark-yellow": "e6b120",
        "dark-blue": "75cfcf",
        "dark-orange": "e68047",
        "dark-green": "59c390",
        white: "FFFFFF"
    },
    m = function(e) {
        return {
            r: +("0x" + e[0] + e[1]),
            g: +("0x" + e[2] + e[3]),
            b: +("0x" + e[4] + e[5])
        }
    }
    ,
    t = function() {
        var t, r, o, n, i, a = p[0].getBoundingClientRect().y + d.scrollY, l = p[1].getBoundingClientRect().y + d.scrollY, s = d.pageYOffset, e = s < a, c = p[0].dataset.color, u = p[1].dataset.color;
        e || l < s ? (t = e ? c : u,
        p.forEach(function(e) {
            e.style.backgroundColor = "#".concat(f[t])
        })) : (r = m(f[c]),
        e = m(f[u]),
        o = e.r - r.r,
        n = e.g - r.g,
        i = e.b - r.b,
        p.forEach(function(e) {
            var t = (s - a) / (l - a)
              , t = {
                r: r.r + o * t,
                g: r.g + n * t,
                b: r.b + i * t
            };
            e.style.backgroundColor = "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")")
        }))
    }
    ,
    r = 0,
    d.addEventListener("scroll", e = function() {
        var e = performance.now();
        r < e - 50 && (t.apply(void 0, arguments),
        r = e)
    }
    ),
    e())
}(document, window),
function(e, t) {
    var r = e.querySelectorAll(".homepage-hero__background, .split-background-heading");
    r.length && ((e = function() {
        r.forEach(function(e) {
            var t;
            e && e.matches && e.matches(".homepage-hero__background") ? window.pageYOffset < window.innerHeight && (t = "".concat(window.pageYOffset / 5, "px"),
            e.style.top = t) : 0 < (t = e.getBoundingClientRect().top / window.innerHeight * 100) && t < 100 && (e.querySelector("[class*=bg]").style.top = "".concat(t, "%"))
        })
    }
    )(),
    t.addEventListener("scroll", e))
}(document, window),
function(i) {
    i.querySelectorAll(".program__carousel").forEach(function(e) {
        var t = e.querySelector(".program__carousel__viewport")
          , r = e.querySelector(".program__carousel__title")
          , o = _toConsumableArray(e.querySelectorAll(".program__carousel__next, .program__carousel__previous"))
          , n = EmblaCarousel(t, {
            align: "start",
            containScroll: "trimSnaps"
        });
        n.on("scroll", function() {
            var e = n.scrollProgress();
            r && (0 < e ? r.classList.add("program__carousel__title--shifted") : r.classList.remove("program__carousel__title--shifted"))
        }),
        n.on("settle", function() {
            n.scrollProgress() <= 0 && r.classList.remove("program__carousel__title--shifted")
        }),
        i.addEventListener("click", function(e) {
            e = e.target.closest("button");
            o.includes(e) && (e.matches("[class*=next]") ? n.scrollNext() : e.matches("[class*=previous]") && n.scrollPrev())
        })
    }),
    i.addEventListener("click", function(e) {
        e.target.closest(".program__card__more") && e.target.closest("[class|=program__card]").classList.toggle("program__card--expanded")
    })
}(document),
document.addEventListener("click", function(e) {
    var e = e.target.closest(".resources__audio-button");
    e && ((e = e.parentElement.querySelector("audio")).paused ? (e.play(),
    e.setAttribute("controls", !0)) : (e.pause(),
    e.removeAttribute("controls")))
}),
function(o) {
    var t, n = o.querySelectorAll(".sidebar__link");
    n && ((t = window.location.hash) && n.forEach(function(e) {
        e.getAttribute("href") === t && e.classList.add("sidebar__link--active")
    }),
    o.addEventListener("click", function(e) {
        var t, r = e.target.closest(".sidebar__link");
        r && (n.forEach(function(e) {
            e.classList.remove("sidebar__link--active")
        }),
        r.classList.add("sidebar__link--active"),
        r = r.getAttribute("href"),
        r = o.querySelector(r).querySelector(".resources__section-title"),
        t = o.querySelector(".admin-bar") ? 32 : 0,
        147 < r.getBoundingClientRect().top ? r.style.scrollMarginTop = 32 + t + "px" : r.style.scrollMarginTop = 147 + t + "px",
        r.scrollIntoView({
            behavior: "smooth"
        }),
        e.preventDefault())
    }))
}(document),