function tapSlider(e) {
  old_slide = document.getElementById(`${e.class_name}_slide_${e.index}`),
  e.index = e.index < e.max ? e.index + 1 : 0,
  new_slide = document.getElementById(`${e.class_name}_slide_${e.index}`),
  null != old_slide && old_slide.classList.remove("active"),
  null != new_slide && new_slide.classList.add("active")
}
function tapSyncedSlider() {
  tapSlider(window.mobileSliderConfig),
  tapSlider(window.desktopSliderConfig)
}
function startScreenSlider() {
  window.timer && window.clearInterval(window.timer),
  window.mobileSliderConfig !== undefined && "/" == window.location.pathname && (window.timer = window.setInterval(()=>{
      tapSyncedSlider()
  }
  , synced_interval))
}
function makeTextareaResizable() {
  $("textarea").autosize()
}
function bindCollapse() {
  $(".collapse").on("shown.bs.collapse", function() {
      var e = $(this).closest(".card");
      ajustedPosition = e.offset().top - 80,
      $("html,body").animate({
          scrollTop: ajustedPosition
      }, 100)
  })
}
function scrollReset() {}
function modalContent(e) {
  defaults = {
      title: "",
      content: ""
  },
  e = Object.assign({}, defaults, e),
  modal_content = $(".templates.fedena-templates #modal-content-template").clone(!0).html(),
  modal_content = modal_content.replace("{{title}}", e.title).replace("{{content}}", e.content),
  $("#fedenaWebModal .modal-content").html(modal_content),
  $("#fedenaWebModal").modal("show").on("hidden.bs.modal", function() {
      $("#fedenaWebModal .modal-content").html("")
  })
}
function ytIframeModal(e) {
  origin = window.location.href,
  video_id = $(e.currentTarget).data("video-id"),
  title = $(e.currentTarget).data("video-title"),
  iframe_src = `"https://youtube.com/embed/${video_id}?autoplay=1&origin=${origin}"`,
  iframe_options = 'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen',
  iframe_content = `<div class='iframe-yt-container' ><iframe class='iframe-yt-frame' id="ytplayer" type="text/html" width="640" height="360" src=${iframe_src} ${iframe_options} /></div>`,
  modalContent({
      title: title,
      content: iframe_content
  })
}
function initYouTubeIframeLinks() {
  $(".yt-iframe-link").click(function(e) {
      ytIframeModal(e)
  })
}
function initPopOver() {
  $(".popoverTarget").html(""),
  $('[data-toggle="popover"]').popover({
      container: ".popoverTarget"
  }),
  $('[data-toggle="tooltip"]').tooltip()
}
function initCarousel() {
  $(".carousel").carousel({})
}
function enableNavbar() {
  $("body").addClass("navbarOpen"),
  $(".navbar-contents").show("slide")
}
function disableNavbar() {
  $("body").removeClass("navbarOpen"),
  $(".navbar-contents").hide("slide")
}
function navbarToggle() {
  $("body").hasClass("navbarOpen") ? disableNavbar() : enableNavbar()
}
function initNavToggle() {
  $(".fedena-navbar-toggler").click(function(e) {
      e.stopImmediatePropagation(),
      navbarToggle()
  }),
  $(".fedena-website-content").click(function(e) {
      $("body").hasClass("navbarOpen") && (e.stopImmediatePropagation(),
      disableNavbar())
  }),
  $(".fedena-navbar .nav-link").click(function() {
      disableNavbar()
  })
}
function navbarThemeHandler() {
  const e = document.querySelector("#fedena-navbar")
    , t = document.querySelector("#fedena-website-content");
  window.onscroll = (()=>{
      this.scrollY <= 20 ? ("/" == window.location.pathname && (e.dataset.theme = "filled"),
      t.classList.remove("scroll-revealed")) : ("/" == window.location.pathname && (e.dataset.theme = ""),
      t.classList.add("scroll-revealed"))
  }
  )
}
function scrollLinkedEvents() {
  navbarThemeHandler()
}
function activeLinkHighlighter() {
  links = document.querySelectorAll('.navbar a[href="' + window.location.pathname + '"]');
  for (var e = 0; e < links.length; e++)
      links[e].classList.add("current-page")
}
function geoCompleteContactPage() {
  jQuery("#contact_info_client_location").geocomplete().bind("geocode:result", function() {})
}
function geoCompleteDemoPage() {
  jQuery("#contact_demo_client_location").geocomplete().bind("geocode:result", function() {})
}
function enableGeoCompletion() {
  switch (window.location.pathname) {
  case "/contact":
      geoCompleteContactPage();
  case "/demo":
      geoCompleteDemoPage()
  }
}
(function() {
  var e = this;
  (function() {
      (function() {
          this.Rails = {
              linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
              buttonClickSelector: {
                  selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                  exclude: "form button"
              },
              inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
              formSubmitSelector: "form",
              formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
              formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
              formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
              fileInputSelector: "input[name][type=file]:not([disabled])",
              linkDisableSelector: "a[data-disable-with], a[data-disable]",
              buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
          }
      }
      ).call(this)
  }
  ).call(e);
  var t = e.Rails;
  (function() {
      (function() {
          var e;
          e = null,
          t.loadCSPNonce = function() {
              var t;
              return e = null != (t = document.querySelector("meta[name=csp-nonce]")) ? t.content : void 0
          }
          ,
          t.cspNonce = function() {
              return null != e ? e : t.loadCSPNonce()
          }
      }
      ).call(this),
      function() {
          var e, n;
          n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector,
          t.matches = function(e, t) {
              return null != t.exclude ? n.call(e, t.selector) && !n.call(e, t.exclude) : n.call(e, t)
          }
          ,
          e = "_ujsData",
          t.getData = function(t, n) {
              var r;
              return null != (r = t[e]) ? r[n] : void 0
          }
          ,
          t.setData = function(t, n, r) {
              return null == t[e] && (t[e] = {}),
              t[e][n] = r
          }
          ,
          t.$ = function(e) {
              return Array.prototype.slice.call(document.querySelectorAll(e))
          }
      }
      .call(this),
      function() {
          var e, n, r;
          e = t.$,
          r = t.csrfToken = function() {
              var e;
              return (e = document.querySelector("meta[name=csrf-token]")) && e.content
          }
          ,
          n = t.csrfParam = function() {
              var e;
              return (e = document.querySelector("meta[name=csrf-param]")) && e.content
          }
          ,
          t.CSRFProtection = function(e) {
              var t;
              if (null != (t = r()))
                  return e.setRequestHeader("X-CSRF-Token", t)
          }
          ,
          t.refreshCSRFTokens = function() {
              var t, i;
              if (i = r(),
              t = n(),
              null != i && null != t)
                  return e('form input[name="' + t + '"]').forEach(function(e) {
                      return e.value = i
                  })
          }
      }
      .call(this),
      function() {
          var e, n, r, i;
          r = t.matches,
          "function" != typeof (e = window.CustomEvent) && ((e = function(e, t) {
              var n;
              return (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
              n
          }
          ).prototype = window.Event.prototype,
          i = e.prototype.preventDefault,
          e.prototype.preventDefault = function() {
              var e;
              return e = i.call(this),
              this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
                  get: function() {
                      return !0
                  }
              }),
              e
          }
          ),
          n = t.fire = function(t, n, r) {
              var i;
              return i = new e(n,{
                  bubbles: !0,
                  cancelable: !0,
                  detail: r
              }),
              t.dispatchEvent(i),
              !i.defaultPrevented
          }
          ,
          t.stopEverything = function(e) {
              return n(e.target, "ujs:everythingStopped"),
              e.preventDefault(),
              e.stopPropagation(),
              e.stopImmediatePropagation()
          }
          ,
          t.delegate = function(e, t, n, i) {
              return e.addEventListener(n, function(e) {
                  var n;
                  for (n = e.target; n instanceof Element && !r(n, t); )
                      n = n.parentNode;
                  if (n instanceof Element && !1 === i.call(n, e))
                      return e.preventDefault(),
                      e.stopPropagation()
              })
          }
      }
      .call(this),
      function() {
          var e, n, r, i, o, s;
          i = t.cspNonce,
          n = t.CSRFProtection,
          t.fire,
          e = {
              "*": "*/*",
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          t.ajax = function(e) {
              var t;
              return e = o(e),
              t = r(e, function() {
                  var n, r;
                  return r = s(null != (n = t.response) ? n : t.responseText, t.getResponseHeader("Content-Type")),
                  2 === Math.floor(t.status / 100) ? "function" == typeof e.success && e.success(r, t.statusText, t) : "function" == typeof e.error && e.error(r, t.statusText, t),
                  "function" == typeof e.complete ? e.complete(t, t.statusText) : void 0
              }),
              !(null != e.beforeSend && !e.beforeSend(t, e)) && (t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : void 0)
          }
          ,
          o = function(t) {
              return t.url = t.url || location.href,
              t.type = t.type.toUpperCase(),
              "GET" === t.type && t.data && (t.url.indexOf("?") < 0 ? t.url += "?" + t.data : t.url += "&" + t.data),
              null == e[t.dataType] && (t.dataType = "*"),
              t.accept = e[t.dataType],
              "*" !== t.dataType && (t.accept += ", */*; q=0.01"),
              t
          }
          ,
          r = function(e, t) {
              var r;
              return (r = new XMLHttpRequest).open(e.type, e.url, !0),
              r.setRequestHeader("Accept", e.accept),
              "string" == typeof e.data && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
              e.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              n(r),
              r.withCredentials = !!e.withCredentials,
              r.onreadystatechange = function() {
                  if (r.readyState === XMLHttpRequest.DONE)
                      return t(r)
              }
              ,
              r
          }
          ,
          s = function(e, t) {
              var n, r;
              if ("string" == typeof e && "string" == typeof t)
                  if (t.match(/\bjson\b/))
                      try {
                          e = JSON.parse(e)
                      } catch (o) {}
                  else if (t.match(/\b(?:java|ecma)script\b/))
                      (r = document.createElement("script")).setAttribute("nonce", i()),
                      r.text = e,
                      document.head.appendChild(r).parentNode.removeChild(r);
                  else if (t.match(/\b(xml|html|svg)\b/)) {
                      n = new DOMParser,
                      t = t.replace(/;.+/, "");
                      try {
                          e = n.parseFromString(e, t)
                      } catch (o) {}
                  }
              return e
          }
          ,
          t.href = function(e) {
              return e.href
          }
          ,
          t.isCrossDomain = function(e) {
              var t, n;
              (t = document.createElement("a")).href = location.href,
              n = document.createElement("a");
              try {
                  return n.href = e,
                  !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
              } catch (r) {
                  return r,
                  !0
              }
          }
      }
      .call(this),
      function() {
          var e, n;
          e = t.matches,
          n = function(e) {
              return Array.prototype.slice.call(e)
          }
          ,
          t.serializeElement = function(t, r) {
              var i, o;
              return i = [t],
              e(t, "form") && (i = n(t.elements)),
              o = [],
              i.forEach(function(t) {
                  if (t.name && !t.disabled)
                      return e(t, "select") ? n(t.options).forEach(function(e) {
                          if (e.selected)
                              return o.push({
                                  name: t.name,
                                  value: e.value
                              })
                      }) : t.checked || -1 === ["radio", "checkbox", "submit"].indexOf(t.type) ? o.push({
                          name: t.name,
                          value: t.value
                      }) : void 0
              }),
              r && o.push(r),
              o.map(function(e) {
                  return null != e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : e
              }).join("&")
          }
          ,
          t.formElements = function(t, r) {
              return e(t, "form") ? n(t.elements).filter(function(t) {
                  return e(t, r)
              }) : n(t.querySelectorAll(r))
          }
      }
      .call(this),
      function() {
          var e, n, r;
          n = t.fire,
          r = t.stopEverything,
          t.handleConfirm = function(t) {
              if (!e(this))
                  return r(t)
          }
          ,
          e = function(e) {
              var t, r, i;
              if (!(i = e.getAttribute("data-confirm")))
                  return !0;
              if (t = !1,
              n(e, "confirm")) {
                  try {
                      t = confirm(i)
                  } catch (o) {}
                  r = n(e, "confirm:complete", [t])
              }
              return t && r
          }
      }
      .call(this),
      function() {
          var e, n, r, i, o, s, a, l, u, c, f;
          u = t.matches,
          l = t.getData,
          c = t.setData,
          f = t.stopEverything,
          a = t.formElements,
          t.handleDisabledElement = function(e) {
              if (this.disabled)
                  return f(e)
          }
          ,
          t.enableElement = function(e) {
              var n;
              return n = e instanceof Event ? e.target : e,
              u(n, t.linkDisableSelector) ? s(n) : u(n, t.buttonDisableSelector) || u(n, t.formEnableSelector) ? i(n) : u(n, t.formSubmitSelector) ? o(n) : void 0
          }
          ,
          t.disableElement = function(i) {
              var o;
              return o = i instanceof Event ? i.target : i,
              u(o, t.linkDisableSelector) ? r(o) : u(o, t.buttonDisableSelector) || u(o, t.formDisableSelector) ? e(o) : u(o, t.formSubmitSelector) ? n(o) : void 0
          }
          ,
          r = function(e) {
              var t;
              return null != (t = e.getAttribute("data-disable-with")) && (c(e, "ujs:enable-with", e.innerHTML),
              e.innerHTML = t),
              e.addEventListener("click", f),
              c(e, "ujs:disabled", !0)
          }
          ,
          s = function(e) {
              var t;
              return null != (t = l(e, "ujs:enable-with")) && (e.innerHTML = t,
              c(e, "ujs:enable-with", null)),
              e.removeEventListener("click", f),
              c(e, "ujs:disabled", null)
          }
          ,
          n = function(n) {
              return a(n, t.formDisableSelector).forEach(e)
          }
          ,
          e = function(e) {
              var t;
              return null != (t = e.getAttribute("data-disable-with")) && (u(e, "button") ? (c(e, "ujs:enable-with", e.innerHTML),
              e.innerHTML = t) : (c(e, "ujs:enable-with", e.value),
              e.value = t)),
              e.disabled = !0,
              c(e, "ujs:disabled", !0)
          }
          ,
          o = function(e) {
              return a(e, t.formEnableSelector).forEach(i)
          }
          ,
          i = function(e) {
              var t;
              return null != (t = l(e, "ujs:enable-with")) && (u(e, "button") ? e.innerHTML = t : e.value = t,
              c(e, "ujs:enable-with", null)),
              e.disabled = !1,
              c(e, "ujs:disabled", null)
          }
      }
      .call(this),
      function() {
          var e;
          e = t.stopEverything,
          t.handleMethod = function(n) {
              var r, i, o, s, a, l, u;
              if (u = (l = this).getAttribute("data-method"))
                  return a = t.href(l),
                  i = t.csrfToken(),
                  r = t.csrfParam(),
                  o = document.createElement("form"),
                  s = "<input name='_method' value='" + u + "' type='hidden' />",
                  null == r || null == i || t.isCrossDomain(a) || (s += "<input name='" + r + "' value='" + i + "' type='hidden' />"),
                  s += '<input type="submit" />',
                  o.method = "post",
                  o.action = a,
                  o.target = l.target,
                  o.innerHTML = s,
                  o.style.display = "none",
                  document.body.appendChild(o),
                  o.querySelector('[type="submit"]').click(),
                  e(n)
          }
      }
      .call(this),
      function() {
          var e, n, r, i, o, s, a, l, u, c = [].slice;
          s = t.matches,
          r = t.getData,
          l = t.setData,
          n = t.fire,
          u = t.stopEverything,
          e = t.ajax,
          i = t.isCrossDomain,
          a = t.serializeElement,
          o = function(e) {
              var t;
              return null != (t = e.getAttribute("data-remote")) && "false" !== t
          }
          ,
          t.handleRemote = function(f) {
              var d, h, p, m, g, y, v;
              return !o(m = this) || (n(m, "ajax:before") ? (v = m.getAttribute("data-with-credentials"),
              p = m.getAttribute("data-type") || "script",
              s(m, t.formSubmitSelector) ? (d = r(m, "ujs:submit-button"),
              g = r(m, "ujs:submit-button-formmethod") || m.method,
              y = r(m, "ujs:submit-button-formaction") || m.getAttribute("action") || location.href,
              "GET" === g.toUpperCase() && (y = y.replace(/\?.*$/, "")),
              "multipart/form-data" === m.enctype ? (h = new FormData(m),
              null != d && h.append(d.name, d.value)) : h = a(m, d),
              l(m, "ujs:submit-button", null),
              l(m, "ujs:submit-button-formmethod", null),
              l(m, "ujs:submit-button-formaction", null)) : s(m, t.buttonClickSelector) || s(m, t.inputChangeSelector) ? (g = m.getAttribute("data-method"),
              y = m.getAttribute("data-url"),
              h = a(m, m.getAttribute("data-params"))) : (g = m.getAttribute("data-method"),
              y = t.href(m),
              h = m.getAttribute("data-params")),
              e({
                  type: g || "GET",
                  url: y,
                  data: h,
                  dataType: p,
                  beforeSend: function(e, t) {
                      return n(m, "ajax:beforeSend", [e, t]) ? n(m, "ajax:send", [e]) : (n(m, "ajax:stopped"),
                      !1)
                  },
                  success: function() {
                      var e;
                      return e = 1 <= arguments.length ? c.call(arguments, 0) : [],
                      n(m, "ajax:success", e)
                  },
                  error: function() {
                      var e;
                      return e = 1 <= arguments.length ? c.call(arguments, 0) : [],
                      n(m, "ajax:error", e)
                  },
                  complete: function() {
                      var e;
                      return e = 1 <= arguments.length ? c.call(arguments, 0) : [],
                      n(m, "ajax:complete", e)
                  },
                  crossDomain: i(y),
                  withCredentials: null != v && "false" !== v
              }),
              u(f)) : (n(m, "ajax:stopped"),
              !1))
          }
          ,
          t.formSubmitButtonClick = function() {
              var e, t;
              if (t = (e = this).form)
                  return e.name && l(t, "ujs:submit-button", {
                      name: e.name,
                      value: e.value
                  }),
                  l(t, "ujs:formnovalidate-button", e.formNoValidate),
                  l(t, "ujs:submit-button-formaction", e.getAttribute("formaction")),
                  l(t, "ujs:submit-button-formmethod", e.getAttribute("formmethod"))
          }
          ,
          t.preventInsignificantClick = function(e) {
              var t, n, r, i;
              if (i = ((r = this).getAttribute("data-method") || "GET").toUpperCase(),
              t = r.getAttribute("data-params"),
              n = (e.metaKey || e.ctrlKey) && "GET" === i && !t,
              null != e.button && 0 !== e.button || n)
                  return e.stopImmediatePropagation()
          }
      }
      .call(this),
      function() {
          var e, n, r, i, o, s, a, l, u, c, f, d, h, p, m;
          if (s = t.fire,
          r = t.delegate,
          l = t.getData,
          e = t.$,
          m = t.refreshCSRFTokens,
          n = t.CSRFProtection,
          h = t.loadCSPNonce,
          o = t.enableElement,
          i = t.disableElement,
          c = t.handleDisabledElement,
          u = t.handleConfirm,
          p = t.preventInsignificantClick,
          d = t.handleRemote,
          a = t.formSubmitButtonClick,
          f = t.handleMethod,
          "undefined" != typeof jQuery && null !== jQuery && null != jQuery.ajax) {
              if (jQuery.rails)
                  throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
              jQuery.rails = t,
              jQuery.ajaxPrefilter(function(e, t, r) {
                  if (!e.crossDomain)
                      return n(r)
              })
          }
          t.start = function() {
              if (window._rails_loaded)
                  throw new Error("rails-ujs has already been loaded!");
              return window.addEventListener("pageshow", function() {
                  return e(t.formEnableSelector).forEach(function(e) {
                      if (l(e, "ujs:disabled"))
                          return o(e)
                  }),
                  e(t.linkDisableSelector).forEach(function(e) {
                      if (l(e, "ujs:disabled"))
                          return o(e)
                  })
              }),
              r(document, t.linkDisableSelector, "ajax:complete", o),
              r(document, t.linkDisableSelector, "ajax:stopped", o),
              r(document, t.buttonDisableSelector, "ajax:complete", o),
              r(document, t.buttonDisableSelector, "ajax:stopped", o),
              r(document, t.linkClickSelector, "click", p),
              r(document, t.linkClickSelector, "click", c),
              r(document, t.linkClickSelector, "click", u),
              r(document, t.linkClickSelector, "click", i),
              r(document, t.linkClickSelector, "click", d),
              r(document, t.linkClickSelector, "click", f),
              r(document, t.buttonClickSelector, "click", p),
              r(document, t.buttonClickSelector, "click", c),
              r(document, t.buttonClickSelector, "click", u),
              r(document, t.buttonClickSelector, "click", i),
              r(document, t.buttonClickSelector, "click", d),
              r(document, t.inputChangeSelector, "change", c),
              r(document, t.inputChangeSelector, "change", u),
              r(document, t.inputChangeSelector, "change", d),
              r(document, t.formSubmitSelector, "submit", c),
              r(document, t.formSubmitSelector, "submit", u),
              r(document, t.formSubmitSelector, "submit", d),
              r(document, t.formSubmitSelector, "submit", function(e) {
                  return setTimeout(function() {
                      return i(e)
                  }, 13)
              }),
              r(document, t.formSubmitSelector, "ajax:send", i),
              r(document, t.formSubmitSelector, "ajax:complete", o),
              r(document, t.formInputClickSelector, "click", p),
              r(document, t.formInputClickSelector, "click", c),
              r(document, t.formInputClickSelector, "click", u),
              r(document, t.formInputClickSelector, "click", a),
              document.addEventListener("DOMContentLoaded", m),
              document.addEventListener("DOMContentLoaded", h),
              window._rails_loaded = !0
          }
          ,
          window.Rails === t && s(document, "rails:attachBindings") && t.start()
      }
      .call(this)
  }
  ).call(this),
  "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
}
).call(this),
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ActiveStorage = {})
}(this, function(e) {
  "use strict";
  function t(e, t) {
      return e(t = {
          exports: {}
      }, t.exports),
      t.exports
  }
  function n(e) {
      var t = i(document.head, 'meta[name="' + e + '"]');
      if (t)
          return t.getAttribute("content")
  }
  function r(e, t) {
      return "string" == typeof e && (t = e,
      e = document),
      s(e.querySelectorAll(t))
  }
  function i(e, t) {
      return "string" == typeof e && (t = e,
      e = document),
      e.querySelector(t)
  }
  function o(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
        , r = e.disabled
        , i = n.bubbles
        , o = n.cancelable
        , s = n.detail
        , a = document.createEvent("Event");
      a.initEvent(t, i || !0, o || !0),
      a.detail = s || {};
      try {
          e.disabled = !1,
          e.dispatchEvent(a)
      } finally {
          e.disabled = r
      }
      return a
  }
  function s(e) {
      return Array.isArray(e) ? e : Array.from ? Array.from(e) : [].slice.call(e)
  }
  function a(e, t) {
      if (e && "function" == typeof e[t]) {
          for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
              r[i - 2] = arguments[i];
          return e[t].apply(e, r)
      }
  }
  function l() {
      L || (L = !0,
      document.addEventListener("click", u, !0),
      document.addEventListener("submit", c),
      document.addEventListener("ajax:before", f))
  }
  function u(e) {
      var t = e.target;
      "INPUT" != t.tagName && "BUTTON" != t.tagName || "submit" != t.type || !t.form || I.set(t.form, t)
  }
  function c(e) {
      d(e)
  }
  function f(e) {
      "FORM" == e.target.tagName && d(e)
  }
  function d(e) {
      var t = e.target;
      if (t.hasAttribute(D))
          e.preventDefault();
      else {
          var n = new O(t)
            , r = n.inputs;
          r.length && (e.preventDefault(),
          t.setAttribute(D, ""),
          r.forEach(p),
          n.start(function(e) {
              t.removeAttribute(D),
              e ? r.forEach(m) : h(t)
          }))
      }
  }
  function h(e) {
      var t = I.get(e) || i(e, "input[type=submit], button[type=submit]");
      if (t) {
          var n = t.disabled;
          t.disabled = !1,
          t.focus(),
          t.click(),
          t.disabled = n
      } else
          (t = document.createElement("input")).type = "submit",
          t.style.display = "none",
          e.appendChild(t),
          t.click(),
          e.removeChild(t);
      I["delete"](e)
  }
  function p(e) {
      e.disabled = !0
  }
  function m(e) {
      e.disabled = !1
  }
  function g() {
      window.ActiveStorage && l()
  }
  var y = t(function(e) {
      var t;
      t = function(e) {
          function t(e, t) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3];
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[1] - 389564586 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[2] + 606105819 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[3] - 1044525330 | 0) << 22 | r >>> 10) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[5] + 1200080426 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[6] - 1473231341 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[7] - 45705983 | 0) << 22 | r >>> 10) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[9] - 1958414417 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[10] - 42063 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[11] - 1990404162 | 0) << 22 | r >>> 10) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + t[13] - 40341101 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + t[14] - 1502002290 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + t[15] + 1236535329 | 0) << 22 | r >>> 10) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[6] - 1069501632 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[11] + 643717713 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[0] - 373897302 | 0) << 20 | r >>> 12) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[10] + 38016083 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[15] - 660478335 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[4] - 405537848 | 0) << 20 | r >>> 12) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[14] - 1019803690 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[3] - 187363961 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[8] + 1163531501 | 0) << 20 | r >>> 12) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + t[2] - 51403784 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + t[7] + 1735328473 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + t[12] - 1926607734 | 0) << 20 | r >>> 12) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[8] - 2022574463 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[11] + 1839030562 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[14] - 35309556 | 0) << 23 | r >>> 9) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[4] + 1272893353 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[7] - 155497632 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[10] - 1094730640 | 0) << 23 | r >>> 9) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[0] - 358537222 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[3] - 722521979 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[6] + 76029189 | 0) << 23 | r >>> 9) + i | 0,
              r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + t[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + t[12] - 421815835 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + t[15] + 530742520 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + t[2] - 995338651 | 0) << 23 | r >>> 9) + i | 0,
              r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[7] + 1126891415 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[14] - 1416354905 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | r >>> 11) + i | 0,
              r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[3] - 1894986606 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[10] - 1051523 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | r >>> 11) + i | 0,
              r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[15] - 30611744 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[6] - 1560198380 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | r >>> 11) + i | 0,
              r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + t[11] - 1120210379 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + t[2] + 718787259 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | r >>> 11) + i | 0,
              e[0] = n + e[0] | 0,
              e[1] = r + e[1] | 0,
              e[2] = i + e[2] | 0,
              e[3] = o + e[3] | 0
          }
          function n(e) {
              var t, n = [];
              for (t = 0; t < 64; t += 4)
                  n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
              return n
          }
          function r(e) {
              var t, n = [];
              for (t = 0; t < 64; t += 4)
                  n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
              return n
          }
          function i(e) {
              var r, i, o, s, a, l, u = e.length, c = [1732584193, -271733879, -1732584194, 271733878];
              for (r = 64; r <= u; r += 64)
                  t(c, n(e.substring(r - 64, r)));
              for (i = (e = e.substring(r - 64)).length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              r = 0; r < i; r += 1)
                  o[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
              if (o[r >> 2] |= 128 << (r % 4 << 3),
              r > 55)
                  for (t(c, o),
                  r = 0; r < 16; r += 1)
                      o[r] = 0;
              return s = (s = 8 * u).toString(16).match(/(.*?)(.{0,8})$/),
              a = parseInt(s[2], 16),
              l = parseInt(s[1], 16) || 0,
              o[14] = a,
              o[15] = l,
              t(c, o),
              c
          }
          function o(e) {
              var n, i, o, s, a, l, u = e.length, c = [1732584193, -271733879, -1732584194, 271733878];
              for (n = 64; n <= u; n += 64)
                  t(c, r(e.subarray(n - 64, n)));
              for (i = (e = n - 64 < u ? e.subarray(n - 64) : new Uint8Array(0)).length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              n = 0; n < i; n += 1)
                  o[n >> 2] |= e[n] << (n % 4 << 3);
              if (o[n >> 2] |= 128 << (n % 4 << 3),
              n > 55)
                  for (t(c, o),
                  n = 0; n < 16; n += 1)
                      o[n] = 0;
              return s = (s = 8 * u).toString(16).match(/(.*?)(.{0,8})$/),
              a = parseInt(s[2], 16),
              l = parseInt(s[1], 16) || 0,
              o[14] = a,
              o[15] = l,
              t(c, o),
              c
          }
          function s(e) {
              var t, n = "";
              for (t = 0; t < 4; t += 1)
                  n += p[e >> 8 * t + 4 & 15] + p[e >> 8 * t & 15];
              return n
          }
          function a(e) {
              var t;
              for (t = 0; t < e.length; t += 1)
                  e[t] = s(e[t]);
              return e.join("")
          }
          function l(e) {
              return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))),
              e
          }
          function u(e, t) {
              var n, r = e.length, i = new ArrayBuffer(r), o = new Uint8Array(i);
              for (n = 0; n < r; n += 1)
                  o[n] = e.charCodeAt(n);
              return t ? o : i
          }
          function c(e) {
              return String.fromCharCode.apply(null, new Uint8Array(e))
          }
          function f(e, t, n) {
              var r = new Uint8Array(e.byteLength + t.byteLength);
              return r.set(new Uint8Array(e)),
              r.set(new Uint8Array(t), e.byteLength),
              n ? r : r.buffer
          }
          function d(e) {
              var t, n = [], r = e.length;
              for (t = 0; t < r - 1; t += 2)
                  n.push(parseInt(e.substr(t, 2), 16));
              return String.fromCharCode.apply(String, n)
          }
          function h() {
              this.reset()
          }
          var p = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
          return a(i("hello")),
          "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
              function t(e, t) {
                  return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t)
              }
              ArrayBuffer.prototype.slice = function(n, r) {
                  var i, o, s, a, l = this.byteLength, u = t(n, l), c = l;
                  return r !== e && (c = t(r, l)),
                  u > c ? new ArrayBuffer(0) : (i = c - u,
                  o = new ArrayBuffer(i),
                  s = new Uint8Array(o),
                  a = new Uint8Array(this,u,i),
                  s.set(a),
                  o)
              }
          }(),
          h.prototype.append = function(e) {
              return this.appendBinary(l(e)),
              this
          }
          ,
          h.prototype.appendBinary = function(e) {
              this._buff += e,
              this._length += e.length;
              var r, i = this._buff.length;
              for (r = 64; r <= i; r += 64)
                  t(this._hash, n(this._buff.substring(r - 64, r)));
              return this._buff = this._buff.substring(r - 64),
              this
          }
          ,
          h.prototype.end = function(e) {
              var t, n, r = this._buff, i = r.length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (t = 0; t < i; t += 1)
                  o[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
              return this._finish(o, i),
              n = a(this._hash),
              e && (n = d(n)),
              this.reset(),
              n
          }
          ,
          h.prototype.reset = function() {
              return this._buff = "",
              this._length = 0,
              this._hash = [1732584193, -271733879, -1732584194, 271733878],
              this
          }
          ,
          h.prototype.getState = function() {
              return {
                  buff: this._buff,
                  length: this._length,
                  hash: this._hash
              }
          }
          ,
          h.prototype.setState = function(e) {
              return this._buff = e.buff,
              this._length = e.length,
              this._hash = e.hash,
              this
          }
          ,
          h.prototype.destroy = function() {
              delete this._hash,
              delete this._buff,
              delete this._length
          }
          ,
          h.prototype._finish = function(e, n) {
              var r, i, o, s = n;
              if (e[s >> 2] |= 128 << (s % 4 << 3),
              s > 55)
                  for (t(this._hash, e),
                  s = 0; s < 16; s += 1)
                      e[s] = 0;
              r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/),
              i = parseInt(r[2], 16),
              o = parseInt(r[1], 16) || 0,
              e[14] = i,
              e[15] = o,
              t(this._hash, e)
          }
          ,
          h.hash = function(e, t) {
              return h.hashBinary(l(e), t)
          }
          ,
          h.hashBinary = function(e, t) {
              var n = a(i(e));
              return t ? d(n) : n
          }
          ,
          h.ArrayBuffer = function() {
              this.reset()
          }
          ,
          h.ArrayBuffer.prototype.append = function(e) {
              var n, i = f(this._buff.buffer, e, !0), o = i.length;
              for (this._length += e.byteLength,
              n = 64; n <= o; n += 64)
                  t(this._hash, r(i.subarray(n - 64, n)));
              return this._buff = n - 64 < o ? new Uint8Array(i.buffer.slice(n - 64)) : new Uint8Array(0),
              this
          }
          ,
          h.ArrayBuffer.prototype.end = function(e) {
              var t, n, r = this._buff, i = r.length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (t = 0; t < i; t += 1)
                  o[t >> 2] |= r[t] << (t % 4 << 3);
              return this._finish(o, i),
              n = a(this._hash),
              e && (n = d(n)),
              this.reset(),
              n
          }
          ,
          h.ArrayBuffer.prototype.reset = function() {
              return this._buff = new Uint8Array(0),
              this._length = 0,
              this._hash = [1732584193, -271733879, -1732584194, 271733878],
              this
          }
          ,
          h.ArrayBuffer.prototype.getState = function() {
              var e = h.prototype.getState.call(this);
              return e.buff = c(e.buff),
              e
          }
          ,
          h.ArrayBuffer.prototype.setState = function(e) {
              return e.buff = u(e.buff, !0),
              h.prototype.setState.call(this, e)
          }
          ,
          h.ArrayBuffer.prototype.destroy = h.prototype.destroy,
          h.ArrayBuffer.prototype._finish = h.prototype._finish,
          h.ArrayBuffer.hash = function(e, t) {
              var n = a(o(new Uint8Array(e)));
              return t ? d(n) : n
          }
          ,
          h
      }
      ,
      e.exports = t()
  })
    , v = function(e, t) {
      if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
  }
    , b = function() {
      function e(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      return function(t, n, r) {
          return n && e(t.prototype, n),
          r && e(t, r),
          t
      }
  }()
    , E = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
    , _ = function() {
      function e(t) {
          v(this, e),
          this.file = t,
          this.chunkSize = 2097152,
          this.chunkCount = Math.ceil(this.file.size / this.chunkSize),
          this.chunkIndex = 0
      }
      return b(e, null, [{
          key: "create",
          value: function(t, n) {
              new e(t).create(n)
          }
      }]),
      b(e, [{
          key: "create",
          value: function(e) {
              var t = this;
              this.callback = e,
              this.md5Buffer = new y.ArrayBuffer,
              this.fileReader = new FileReader,
              this.fileReader.addEventListener("load", function(e) {
                  return t.fileReaderDidLoad(e)
              }),
              this.fileReader.addEventListener("error", function(e) {
                  return t.fileReaderDidError(e)
              }),
              this.readNextChunk()
          }
      }, {
          key: "fileReaderDidLoad",
          value: function(e) {
              if (this.md5Buffer.append(e.target.result),
              !this.readNextChunk()) {
                  var t = this.md5Buffer.end(!0)
                    , n = btoa(t);
                  this.callback(null, n)
              }
          }
      }, {
          key: "fileReaderDidError",
          value: function() {
              this.callback("Error reading " + this.file.name)
          }
      }, {
          key: "readNextChunk",
          value: function() {
              if (this.chunkIndex < this.chunkCount || 0 == this.chunkIndex && 0 == this.chunkCount) {
                  var e = this.chunkIndex * this.chunkSize
                    , t = Math.min(e + this.chunkSize, this.file.size)
                    , n = E.call(this.file, e, t);
                  return this.fileReader.readAsArrayBuffer(n),
                  this.chunkIndex++,
                  !0
              }
              return !1
          }
      }]),
      e
  }()
    , w = function() {
      function e(t, r, i) {
          var o = this;
          v(this, e),
          this.file = t,
          this.attributes = {
              filename: t.name,
              content_type: t.type,
              byte_size: t.size,
              checksum: r
          },
          this.xhr = new XMLHttpRequest,
          this.xhr.open("POST", i, !0),
          this.xhr.responseType = "json",
          this.xhr.setRequestHeader("Content-Type", "application/json"),
          this.xhr.setRequestHeader("Accept", "application/json"),
          this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          this.xhr.setRequestHeader("X-CSRF-Token", n("csrf-token")),
          this.xhr.addEventListener("load", function(e) {
              return o.requestDidLoad(e)
          }),
          this.xhr.addEventListener("error", function(e) {
              return o.requestDidError(e)
          })
      }
      return b(e, [{
          key: "create",
          value: function(e) {
              this.callback = e,
              this.xhr.send(JSON.stringify({
                  blob: this.attributes
              }))
          }
      }, {
          key: "requestDidLoad",
          value: function(e) {
              if (this.status >= 200 && this.status < 300) {
                  var t = this.response
                    , n = t.direct_upload;
                  delete t.direct_upload,
                  this.attributes = t,
                  this.directUploadData = n,
                  this.callback(null, this.toJSON())
              } else
                  this.requestDidError(e)
          }
      }, {
          key: "requestDidError",
          value: function() {
              this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status)
          }
      }, {
          key: "toJSON",
          value: function() {
              var e = {};
              for (var t in this.attributes)
                  e[t] = this.attributes[t];
              return e
          }
      }, {
          key: "status",
          get: function() {
              return this.xhr.status
          }
      }, {
          key: "response",
          get: function() {
              var e = this.xhr
                , t = e.responseType
                , n = e.response;
              return "json" == t ? n : JSON.parse(n)
          }
      }]),
      e
  }()
    , T = function() {
      function e(t) {
          var n = this;
          v(this, e),
          this.blob = t,
          this.file = t.file;
          var r = t.directUploadData
            , i = r.url
            , o = r.headers;
          for (var s in this.xhr = new XMLHttpRequest,
          this.xhr.open("PUT", i, !0),
          this.xhr.responseType = "text",
          o)
              this.xhr.setRequestHeader(s, o[s]);
          this.xhr.addEventListener("load", function(e) {
              return n.requestDidLoad(e)
          }),
          this.xhr.addEventListener("error", function(e) {
              return n.requestDidError(e)
          })
      }
      return b(e, [{
          key: "create",
          value: function(e) {
              this.callback = e,
              this.xhr.send(this.file.slice())
          }
      }, {
          key: "requestDidLoad",
          value: function(e) {
              var t = this.xhr
                , n = t.status
                , r = t.response;
              n >= 200 && n < 300 ? this.callback(null, r) : this.requestDidError(e)
          }
      }, {
          key: "requestDidError",
          value: function() {
              this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status)
          }
      }]),
      e
  }()
    , S = 0
    , C = function() {
      function e(t, n, r) {
          v(this, e),
          this.id = ++S,
          this.file = t,
          this.url = n,
          this.delegate = r
      }
      return b(e, [{
          key: "create",
          value: function(e) {
              var t = this;
              _.create(this.file, function(n, r) {
                  if (n)
                      e(n);
                  else {
                      var i = new w(t.file,r,t.url);
                      a(t.delegate, "directUploadWillCreateBlobWithXHR", i.xhr),
                      i.create(function(n) {
                          if (n)
                              e(n);
                          else {
                              var r = new T(i);
                              a(t.delegate, "directUploadWillStoreFileWithXHR", r.xhr),
                              r.create(function(t) {
                                  t ? e(t) : e(null, i.toJSON())
                              })
                          }
                      })
                  }
              })
          }
      }]),
      e
  }()
    , A = function() {
      function e(t, n) {
          v(this, e),
          this.input = t,
          this.file = n,
          this.directUpload = new C(this.file,this.url,this),
          this.dispatch("initialize")
      }
      return b(e, [{
          key: "start",
          value: function(e) {
              var t = this
                , n = document.createElement("input");
              n.type = "hidden",
              n.name = this.input.name,
              this.input.insertAdjacentElement("beforebegin", n),
              this.dispatch("start"),
              this.directUpload.create(function(r, i) {
                  r ? (n.parentNode.removeChild(n),
                  t.dispatchError(r)) : n.value = i.signed_id,
                  t.dispatch("end"),
                  e(r)
              })
          }
      }, {
          key: "uploadRequestDidProgress",
          value: function(e) {
              var t = e.loaded / e.total * 100;
              t && this.dispatch("progress", {
                  progress: t
              })
          }
      }, {
          key: "dispatch",
          value: function(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return t.file = this.file,
              t.id = this.directUpload.id,
              o(this.input, "direct-upload:" + e, {
                  detail: t
              })
          }
      }, {
          key: "dispatchError",
          value: function(e) {
              this.dispatch("error", {
                  error: e
              }).defaultPrevented || alert(e)
          }
      }, {
          key: "directUploadWillCreateBlobWithXHR",
          value: function(e) {
              this.dispatch("before-blob-request", {
                  xhr: e
              })
          }
      }, {
          key: "directUploadWillStoreFileWithXHR",
          value: function(e) {
              var t = this;
              this.dispatch("before-storage-request", {
                  xhr: e
              }),
              e.upload.addEventListener("progress", function(e) {
                  return t.uploadRequestDidProgress(e)
              })
          }
      }, {
          key: "url",
          get: function() {
              return this.input.getAttribute("data-direct-upload-url")
          }
      }]),
      e
  }()
    , x = "input[type=file][data-direct-upload-url]:not([disabled])"
    , O = function() {
      function e(t) {
          v(this, e),
          this.form = t,
          this.inputs = r(t, x).filter(function(e) {
              return e.files.length
          })
      }
      return b(e, [{
          key: "start",
          value: function(e) {
              var t = this
                , n = this.createDirectUploadControllers()
                , r = function i() {
                  var r = n.shift();
                  r ? r.start(function(n) {
                      n ? (e(n),
                      t.dispatch("end")) : i()
                  }) : (e(),
                  t.dispatch("end"))
              };
              this.dispatch("start"),
              r()
          }
      }, {
          key: "createDirectUploadControllers",
          value: function() {
              var e = [];
              return this.inputs.forEach(function(t) {
                  s(t.files).forEach(function(n) {
                      var r = new A(t,n);
                      e.push(r)
                  })
              }),
              e
          }
      }, {
          key: "dispatch",
          value: function(e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return o(this.form, "direct-uploads:" + e, {
                  detail: t
              })
          }
      }]),
      e
  }()
    , D = "data-direct-uploads-processing"
    , I = new WeakMap
    , L = !1;
  setTimeout(g, 1),
  e.start = l,
  e.DirectUpload = C,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}),
/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
*/
function() {
  var e = this;
  (function() {
      (function() {
          this.Turbolinks = {
              supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
              visit: function(e, n) {
                  return t.controller.visit(e, n)
              },
              clearCache: function() {
                  return t.controller.clearCache()
              },
              setProgressBarDelay: function(e) {
                  return t.controller.setProgressBarDelay(e)
              }
          }
      }
      ).call(this)
  }
  ).call(e);
  var t = e.Turbolinks;
  (function() {
      (function() {
          var e, n, r, i = [].slice;
          t.copyObject = function(e) {
              var t, n, r;
              for (t in n = {},
              e)
                  r = e[t],
                  n[t] = r;
              return n
          }
          ,
          t.closest = function(t, n) {
              return e.call(t, n)
          }
          ,
          e = function() {
              var e;
              return null != (e = document.documentElement.closest) ? e : function(e) {
                  var t;
                  for (t = this; t; ) {
                      if (t.nodeType === Node.ELEMENT_NODE && n.call(t, e))
                          return t;
                      t = t.parentNode
                  }
              }
          }(),
          t.defer = function(e) {
              return setTimeout(e, 1)
          }
          ,
          t.throttle = function(e) {
              var t;
              return t = null,
              function() {
                  var n, r;
                  return n = 1 <= arguments.length ? i.call(arguments, 0) : [],
                  null != t ? t : t = requestAnimationFrame((r = this,
                  function() {
                      return t = null,
                      e.apply(r, n)
                  }
                  ))
              }
          }
          ,
          t.dispatch = function(e, t) {
              var n, i, o, s, a, l;
              return l = (a = null != t ? t : {}).target,
              n = a.cancelable,
              i = a.data,
              (o = document.createEvent("Events")).initEvent(e, !0, !0 === n),
              o.data = null != i ? i : {},
              o.cancelable && !r && (s = o.preventDefault,
              o.preventDefault = function() {
                  return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                      get: function() {
                          return !0
                      }
                  }),
                  s.call(this)
              }
              ),
              (null != l ? l : document).dispatchEvent(o),
              o
          }
          ,
          r = function() {
              var e;
              return (e = document.createEvent("Events")).initEvent("test", !0, !0),
              e.preventDefault(),
              e.defaultPrevented
          }(),
          t.match = function(e, t) {
              return n.call(e, t)
          }
          ,
          n = function() {
              var e, t, n, r;
              return null != (t = null != (n = null != (r = (e = document.documentElement).matchesSelector) ? r : e.webkitMatchesSelector) ? n : e.msMatchesSelector) ? t : e.mozMatchesSelector
          }(),
          t.uuid = function() {
              var e, t, n;
              for (n = "",
              e = t = 1; 36 >= t; e = ++t)
                  n += 9 === e || 14 === e || 19 === e || 24 === e ? "-" : 15 === e ? "4" : 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
              return n
          }
      }
      ).call(this),
      function() {
          t.Location = function() {
              function e(e) {
                  var t, n;
                  null == e && (e = ""),
                  (n = document.createElement("a")).href = e.toString(),
                  this.absoluteURL = n.href,
                  2 > (t = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -t),
                  this.anchor = n.hash.slice(1))
              }
              var t, n, r, i;
              return e.wrap = function(e) {
                  return e instanceof this ? e : new this(e)
              }
              ,
              e.prototype.getOrigin = function() {
                  return this.absoluteURL.split("/", 3).join("/")
              }
              ,
              e.prototype.getPath = function() {
                  var e, t;
                  return null != (e = null != (t = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : "/"
              }
              ,
              e.prototype.getPathComponents = function() {
                  return this.getPath().split("/").slice(1)
              }
              ,
              e.prototype.getLastPathComponent = function() {
                  return this.getPathComponents().slice(-1)[0]
              }
              ,
              e.prototype.getExtension = function() {
                  var e, t;
                  return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : ""
              }
              ,
              e.prototype.isHTML = function() {
                  return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
              }
              ,
              e.prototype.isPrefixedBy = function(e) {
                  var t;
                  return t = n(e),
                  this.isEqualTo(e) || i(this.absoluteURL, t)
              }
              ,
              e.prototype.isEqualTo = function(e) {
                  return this.absoluteURL === (null != e ? e.absoluteURL : void 0)
              }
              ,
              e.prototype.toCacheKey = function() {
                  return this.requestURL
              }
              ,
              e.prototype.toJSON = function() {
                  return this.absoluteURL
              }
              ,
              e.prototype.toString = function() {
                  return this.absoluteURL
              }
              ,
              e.prototype.valueOf = function() {
                  return this.absoluteURL
              }
              ,
              n = function(e) {
                  return t(e.getOrigin() + e.getPath())
              }
              ,
              t = function(e) {
                  return r(e, "/") ? e : e + "/"
              }
              ,
              i = function(e, t) {
                  return e.slice(0, t.length) === t
              }
              ,
              r = function(e, t) {
                  return e.slice(-t.length) === t
              }
              ,
              e
          }()
      }
      .call(this),
      function() {
          var e = function(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          };
          t.HttpRequest = function() {
              function n(n, r, i) {
                  this.delegate = n,
                  this.requestCanceled = e(this.requestCanceled, this),
                  this.requestTimedOut = e(this.requestTimedOut, this),
                  this.requestFailed = e(this.requestFailed, this),
                  this.requestLoaded = e(this.requestLoaded, this),
                  this.requestProgressed = e(this.requestProgressed, this),
                  this.url = t.Location.wrap(r).requestURL,
                  this.referrer = t.Location.wrap(i).absoluteURL,
                  this.createXHR()
              }
              return n.NETWORK_FAILURE = 0,
              n.TIMEOUT_FAILURE = -1,
              n.timeout = 60,
              n.prototype.send = function() {
                  var e;
                  return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(),
                  this.setProgress(0),
                  this.xhr.send(),
                  this.sent = !0,
                  "function" == typeof (e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0
              }
              ,
              n.prototype.cancel = function() {
                  return this.xhr && this.sent ? this.xhr.abort() : void 0
              }
              ,
              n.prototype.requestProgressed = function(e) {
                  return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0
              }
              ,
              n.prototype.requestLoaded = function() {
                  return this.endRequest((e = this,
                  function() {
                      var t;
                      return 200 <= (t = e.xhr.status) && 300 > t ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0,
                      e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
                  }
                  ));
                  var e
              }
              ,
              n.prototype.requestFailed = function() {
                  return this.endRequest((e = this,
                  function() {
                      return e.failed = !0,
                      e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE)
                  }
                  ));
                  var e
              }
              ,
              n.prototype.requestTimedOut = function() {
                  return this.endRequest((e = this,
                  function() {
                      return e.failed = !0,
                      e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE)
                  }
                  ));
                  var e
              }
              ,
              n.prototype.requestCanceled = function() {
                  return this.endRequest()
              }
              ,
              n.prototype.notifyApplicationBeforeRequestStart = function() {
                  return t.dispatch("turbolinks:request-start", {
                      data: {
                          url: this.url,
                          xhr: this.xhr
                      }
                  })
              }
              ,
              n.prototype.notifyApplicationAfterRequestEnd = function() {
                  return t.dispatch("turbolinks:request-end", {
                      data: {
                          url: this.url,
                          xhr: this.xhr
                      }
                  })
              }
              ,
              n.prototype.createXHR = function() {
                  return this.xhr = new XMLHttpRequest,
                  this.xhr.open("GET", this.url, !0),
                  this.xhr.timeout = 1e3 * this.constructor.timeout,
                  this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"),
                  this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer),
                  this.xhr.onprogress = this.requestProgressed,
                  this.xhr.onload = this.requestLoaded,
                  this.xhr.onerror = this.requestFailed,
                  this.xhr.ontimeout = this.requestTimedOut,
                  this.xhr.onabort = this.requestCanceled
              }
              ,
              n.prototype.endRequest = function(e) {
                  return this.xhr ? (this.notifyApplicationAfterRequestEnd(),
                  null != e && e.call(this),
                  this.destroy()) : void 0
              }
              ,
              n.prototype.setProgress = function(e) {
                  var t;
                  return this.progress = e,
                  "function" == typeof (t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0
              }
              ,
              n.prototype.destroy = function() {
                  var e;
                  return this.setProgress(1),
                  "function" == typeof (e = this.delegate).requestFinished && e.requestFinished(),
                  this.delegate = null,
                  this.xhr = null
              }
              ,
              n
          }()
      }
      .call(this),
      function() {
          var e = function(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          };
          t.ProgressBar = function() {
              function t() {
                  this.trickle = e(this.trickle, this),
                  this.stylesheetElement = this.createStylesheetElement(),
                  this.progressElement = this.createProgressElement()
              }
              var n;
              return n = 300,
              t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",
              t.prototype.show = function() {
                  return this.visible ? void 0 : (this.visible = !0,
                  this.installStylesheetElement(),
                  this.installProgressElement(),
                  this.startTrickling())
              }
              ,
              t.prototype.hide = function() {
                  return this.visible && !this.hiding ? (this.hiding = !0,
                  this.fadeProgressElement((e = this,
                  function() {
                      return e.uninstallProgressElement(),
                      e.stopTrickling(),
                      e.visible = !1,
                      e.hiding = !1
                  }
                  ))) : void 0;
                  var e
              }
              ,
              t.prototype.setValue = function(e) {
                  return this.value = e,
                  this.refresh()
              }
              ,
              t.prototype.installStylesheetElement = function() {
                  return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
              }
              ,
              t.prototype.installProgressElement = function() {
                  return this.progressElement.style.width = 0,
                  this.progressElement.style.opacity = 1,
                  document.documentElement.insertBefore(this.progressElement, document.body),
                  this.refresh()
              }
              ,
              t.prototype.fadeProgressElement = function(e) {
                  return this.progressElement.style.opacity = 0,
                  setTimeout(e, 1.5 * n)
              }
              ,
              t.prototype.uninstallProgressElement = function() {
                  return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
              }
              ,
              t.prototype.startTrickling = function() {
                  return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
              }
              ,
              t.prototype.stopTrickling = function() {
                  return clearInterval(this.trickleInterval),
                  this.trickleInterval = null
              }
              ,
              t.prototype.trickle = function() {
                  return this.setValue(this.value + Math.random() / 100)
              }
              ,
              t.prototype.refresh = function() {
                  return requestAnimationFrame((e = this,
                  function() {
                      return e.progressElement.style.width = 10 + 90 * e.value + "%"
                  }
                  ));
                  var e
              }
              ,
              t.prototype.createStylesheetElement = function() {
                  var e;
                  return (e = document.createElement("style")).type = "text/css",
                  e.textContent = this.constructor.defaultCSS,
                  e
              }
              ,
              t.prototype.createProgressElement = function() {
                  var e;
                  return (e = document.createElement("div")).className = "turbolinks-progress-bar",
                  e
              }
              ,
              t
          }()
      }
      .call(this),
      function() {
          var e = function(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          };
          t.BrowserAdapter = function() {
              function n(n) {
                  this.controller = n,
                  this.showProgressBar = e(this.showProgressBar, this),
                  this.progressBar = new t.ProgressBar
              }
              var r, i, o;
              return o = t.HttpRequest,
              r = o.NETWORK_FAILURE,
              i = o.TIMEOUT_FAILURE,
              n.prototype.visitProposedToLocationWithAction = function(e, t) {
                  return this.controller.startVisitToLocationWithAction(e, t)
              }
              ,
              n.prototype.visitStarted = function(e) {
                  return e.issueRequest(),
                  e.changeHistory(),
                  e.loadCachedSnapshot()
              }
              ,
              n.prototype.visitRequestStarted = function(e) {
                  return this.progressBar.setValue(0),
                  e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
              }
              ,
              n.prototype.visitRequestProgressed = function(e) {
                  return this.progressBar.setValue(e.progress)
              }
              ,
              n.prototype.visitRequestCompleted = function(e) {
                  return e.loadResponse()
              }
              ,
              n.prototype.visitRequestFailedWithStatusCode = function(e, t) {
                  switch (t) {
                  case r:
                  case i:
                      return this.reload();
                  default:
                      return e.loadResponse()
                  }
              }
              ,
              n.prototype.visitRequestFinished = function() {
                  return this.hideProgressBar()
              }
              ,
              n.prototype.visitCompleted = function(e) {
                  return e.followRedirect()
              }
              ,
              n.prototype.pageInvalidated = function() {
                  return this.reload()
              }
              ,
              n.prototype.showProgressBarAfterDelay = function() {
                  return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
              }
              ,
              n.prototype.showProgressBar = function() {
                  return this.progressBar.show()
              }
              ,
              n.prototype.hideProgressBar = function() {
                  return this.progressBar.hide(),
                  clearTimeout(this.progressBarTimeout)
              }
              ,
              n.prototype.reload = function() {
                  return window.location.reload()
              }
              ,
              n
          }()
      }
      .call(this),
      function() {
          var e = function(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          };
          t.History = function() {
              function n(t) {
                  this.delegate = t,
                  this.onPageLoad = e(this.onPageLoad, this),
                  this.onPopState = e(this.onPopState, this)
              }
              return n.prototype.start = function() {
                  return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1),
                  addEventListener("load", this.onPageLoad, !1),
                  this.started = !0)
              }
              ,
              n.prototype.stop = function() {
                  return this.started ? (removeEventListener("popstate", this.onPopState, !1),
                  removeEventListener("load", this.onPageLoad, !1),
                  this.started = !1) : void 0
              }
              ,
              n.prototype.push = function(e, n) {
                  return e = t.Location.wrap(e),
                  this.update("push", e, n)
              }
              ,
              n.prototype.replace = function(e, n) {
                  return e = t.Location.wrap(e),
                  this.update("replace", e, n)
              }
              ,
              n.prototype.onPopState = function(e) {
                  var n, r, i, o;
                  return this.shouldHandlePopState() && (o = null != (r = e.state) ? r.turbolinks : void 0) ? (n = t.Location.wrap(window.location),
                  i = o.restorationIdentifier,
                  this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, i)) : void 0
              }
              ,
              n.prototype.onPageLoad = function() {
                  return t.defer(function(e) {
                      return function() {
                          return e.pageLoaded = !0
                      }
                  }(this))
              }
              ,
              n.prototype.shouldHandlePopState = function() {
                  return this.pageIsLoaded()
              }
              ,
              n.prototype.pageIsLoaded = function() {
                  return this.pageLoaded || "complete" === document.readyState
              }
              ,
              n.prototype.update = function(e, t, n) {
                  var r;
                  return r = {
                      turbolinks: {
                          restorationIdentifier: n
                      }
                  },
                  history[e + "State"](r, null, t)
              }
              ,
              n
          }()
      }
      .call(this),
      function() {
          t.HeadDetails = function() {
              function e(e) {
                  var t, n, r, s, a;
                  for (this.elements = {},
                  n = 0,
                  s = e.length; s > n; n++)
                      (a = e[n]).nodeType === Node.ELEMENT_NODE && (r = a.outerHTML,
                      (null != (t = this.elements)[r] ? t[r] : t[r] = {
                          type: o(a),
                          tracked: i(a),
                          elements: []
                      }).elements.push(a))
              }
              var t, n, r, i, o;
              return e.fromHeadElement = function(e) {
                  var t;
                  return new this(null != (t = null != e ? e.childNodes : void 0) ? t : [])
              }
              ,
              e.prototype.hasElementWithKey = function(e) {
                  return e in this.elements
              }
              ,
              e.prototype.getTrackedElementSignature = function() {
                  var e;
                  return function() {
                      var t, n;
                      for (e in n = [],
                      t = this.elements)
                          t[e].tracked && n.push(e);
                      return n
                  }
                  .call(this).join("")
              }
              ,
              e.prototype.getScriptElementsNotInDetails = function(e) {
                  return this.getElementsMatchingTypeNotInDetails("script", e)
              }
              ,
              e.prototype.getStylesheetElementsNotInDetails = function(e) {
                  return this.getElementsMatchingTypeNotInDetails("stylesheet", e)
              }
              ,
              e.prototype.getElementsMatchingTypeNotInDetails = function(e, t) {
                  var n, r, i, o, s, a;
                  for (r in s = [],
                  i = this.elements)
                      a = (o = i[r]).type,
                      n = o.elements,
                      a !== e || t.hasElementWithKey(r) || s.push(n[0]);
                  return s
              }
              ,
              e.prototype.getProvisionalElements = function() {
                  var e, t, n, r, i, o, s;
                  for (t in n = [],
                  r = this.elements)
                      s = (i = r[t]).type,
                      o = i.tracked,
                      e = i.elements,
                      null != s || o ? e.length > 1 && n.push.apply(n, e.slice(1)) : n.push.apply(n, e);
                  return n
              }
              ,
              e.prototype.getMetaValue = function(e) {
                  var t;
                  return null != (t = this.findMetaElementByName(e)) ? t.getAttribute("content") : void 0
              }
              ,
              e.prototype.findMetaElementByName = function(e) {
                  var n, r, i, o;
                  for (i in n = void 0,
                  o = this.elements)
                      r = o[i].elements,
                      t(r[0], e) && (n = r[0]);
                  return n
              }
              ,
              o = function(e) {
                  return n(e) ? "script" : r(e) ? "stylesheet" : void 0
              }
              ,
              i = function(e) {
                  return "reload" === e.getAttribute("data-turbolinks-track")
              }
              ,
              n = function(e) {
                  return "script" === e.tagName.toLowerCase()
              }
              ,
              r = function(e) {
                  var t;
                  return "style" === (t = e.tagName.toLowerCase()) || "link" === t && "stylesheet" === e.getAttribute("rel")
              }
              ,
              t = function(e, t) {
                  return "meta" === e.tagName.toLowerCase() && e.getAttribute("name") === t
              }
              ,
              e
          }()
      }
      .call(this),
      function() {
          t.Snapshot = function() {
              function e(e, t) {
                  this.headDetails = e,
                  this.bodyElement = t
              }
              return e.wrap = function(e) {
                  return e instanceof this ? e : "string" == typeof e ? this.fromHTMLString(e) : this.fromHTMLElement(e)
              }
              ,
              e.fromHTMLString = function(e) {
                  var t;
                  return (t = document.createElement("html")).innerHTML = e,
                  this.fromHTMLElement(t)
              }
              ,
              e.fromHTMLElement = function(e) {
                  var n, r, i;
                  return r = e.querySelector("head"),
                  n = null != (i = e.querySelector("body")) ? i : document.createElement("body"),
                  new this(t.HeadDetails.fromHeadElement(r),n)
              }
              ,
              e.prototype.clone = function() {
                  return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))
              }
              ,
              e.prototype.getRootLocation = function() {
                  var e, n;
                  return n = null != (e = this.getSetting("root")) ? e : "/",
                  new t.Location(n)
              }
              ,
              e.prototype.getCacheControlValue = function() {
                  return this.getSetting("cache-control")
              }
              ,
              e.prototype.getElementForAnchor = function(e) {
                  try {
                      return this.bodyElement.querySelector("[id='" + e + "'], a[name='" + e + "']")
                  } catch (t) {}
              }
              ,
              e.prototype.getPermanentElements = function() {
                  return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")
              }
              ,
              e.prototype.getPermanentElementById = function(e) {
                  return this.bodyElement.querySelector("#" + e + "[data-turbolinks-permanent]")
              }
              ,
              e.prototype.getPermanentElementsPresentInSnapshot = function(e) {
                  var t, n, r, i, o;
                  for (o = [],
                  n = 0,
                  r = (i = this.getPermanentElements()).length; r > n; n++)
                      t = i[n],
                      e.getPermanentElementById(t.id) && o.push(t);
                  return o
              }
              ,
              e.prototype.findFirstAutofocusableElement = function() {
                  return this.bodyElement.querySelector("[autofocus]")
              }
              ,
              e.prototype.hasAnchor = function(e) {
                  return null != this.getElementForAnchor(e)
              }
              ,
              e.prototype.isPreviewable = function() {
                  return "no-preview" !== this.getCacheControlValue()
              }
              ,
              e.prototype.isCacheable = function() {
                  return "no-cache" !== this.getCacheControlValue()
              }
              ,
              e.prototype.isVisitable = function() {
                  return "reload" !== this.getSetting("visit-control")
              }
              ,
              e.prototype.getSetting = function(e) {
                  return this.headDetails.getMetaValue("turbolinks-" + e)
              }
              ,
              e
          }()
      }
      .call(this),
      function() {
          var e = [].slice;
          t.Renderer = function() {
              function t() {}
              var n;
              return t.render = function() {
                  var t, n, r;
                  return n = arguments[0],
                  t = arguments[1],
                  (r = function(e, t, n) {
                      n.prototype = e.prototype;
                      var r = new n
                        , i = e.apply(r, t);
                      return Object(i) === i ? i : r
                  }(this, 3 <= arguments.length ? e.call(arguments, 2) : [], function() {})).delegate = n,
                  r.render(t),
                  r
              }
              ,
              t.prototype.renderView = function(e) {
                  return this.delegate.viewWillRender(this.newBody),
                  e(),
                  this.delegate.viewRendered(this.newBody)
              }
              ,
              t.prototype.invalidateView = function() {
                  return this.delegate.viewInvalidated()
              }
              ,
              t.prototype.createScriptElement = function(e) {
                  var t;
                  return "false" === e.getAttribute("data-turbolinks-eval") ? e : ((t = document.createElement("script")).textContent = e.textContent,
                  t.async = !1,
                  n(t, e),
                  t)
              }
              ,
              n = function(e, t) {
                  var n, r, i, o, s, a, l;
                  for (a = [],
                  n = 0,
                  r = (o = t.attributes).length; r > n; n++)
                      i = (s = o[n]).name,
                      l = s.value,
                      a.push(e.setAttribute(i, l));
                  return a
              }
              ,
              t
          }()
      }
      .call(this),
      function() {
          var e, n, r = function(e, t) {
              function n() {
                  this.constructor = e
              }
              for (var r in t)
                  i.call(t, r) && (e[r] = t[r]);
              return n.prototype = t.prototype,
              e.prototype = new n,
              e.__super__ = t.prototype,
              e
          }, i = {}.hasOwnProperty;
          t.SnapshotRenderer = function(t) {
              function i(e, t, n) {
                  this.currentSnapshot = e,
                  this.newSnapshot = t,
                  this.isPreview = n,
                  this.currentHeadDetails = this.currentSnapshot.headDetails,
                  this.newHeadDetails = this.newSnapshot.headDetails,
                  this.currentBody = this.currentSnapshot.bodyElement,
                  this.newBody = this.newSnapshot.bodyElement
              }
              return r(i, t),
              i.prototype.render = function(e) {
                  return this.shouldRender() ? (this.mergeHead(),
                  this.renderView((t = this,
                  function() {
                      return t.replaceBody(),
                      t.isPreview || t.focusFirstAutofocusableElement(),
                      e()
                  }
                  ))) : this.invalidateView();
                  var t
              }
              ,
              i.prototype.mergeHead = function() {
                  return this.copyNewHeadStylesheetElements(),
                  this.copyNewHeadScriptElements(),
                  this.removeCurrentHeadProvisionalElements(),
                  this.copyNewHeadProvisionalElements()
              }
              ,
              i.prototype.replaceBody = function() {
                  var e;
                  return e = this.relocateCurrentBodyPermanentElements(),
                  this.activateNewBodyScriptElements(),
                  this.assignNewBody(),
                  this.replacePlaceholderElementsWithClonedPermanentElements(e)
              }
              ,
              i.prototype.shouldRender = function() {
                  return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
              }
              ,
              i.prototype.trackedElementsAreIdentical = function() {
                  return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
              }
              ,
              i.prototype.copyNewHeadStylesheetElements = function() {
                  var e, t, n, r, i;
                  for (i = [],
                  t = 0,
                  n = (r = this.getNewHeadStylesheetElements()).length; n > t; t++)
                      e = r[t],
                      i.push(document.head.appendChild(e));
                  return i
              }
              ,
              i.prototype.copyNewHeadScriptElements = function() {
                  var e, t, n, r, i;
                  for (i = [],
                  t = 0,
                  n = (r = this.getNewHeadScriptElements()).length; n > t; t++)
                      e = r[t],
                      i.push(document.head.appendChild(this.createScriptElement(e)));
                  return i
              }
              ,
              i.prototype.removeCurrentHeadProvisionalElements = function() {
                  var e, t, n, r, i;
                  for (i = [],
                  t = 0,
                  n = (r = this.getCurrentHeadProvisionalElements()).length; n > t; t++)
                      e = r[t],
                      i.push(document.head.removeChild(e));
                  return i
              }
              ,
              i.prototype.copyNewHeadProvisionalElements = function() {
                  var e, t, n, r, i;
                  for (i = [],
                  t = 0,
                  n = (r = this.getNewHeadProvisionalElements()).length; n > t; t++)
                      e = r[t],
                      i.push(document.head.appendChild(e));
                  return i
              }
              ,
              i.prototype.relocateCurrentBodyPermanentElements = function() {
                  var t, r, i, o, s, a, l;
                  for (l = [],
                  t = 0,
                  r = (a = this.getCurrentBodyPermanentElements()).length; r > t; t++)
                      o = a[t],
                      s = e(o),
                      i = this.newSnapshot.getPermanentElementById(o.id),
                      n(o, s.element),
                      n(i, o),
                      l.push(s);
                  return l
              }
              ,
              i.prototype.replacePlaceholderElementsWithClonedPermanentElements = function(e) {
                  var t, r, i, o, s, a;
                  for (a = [],
                  i = 0,
                  o = e.length; o > i; i++)
                      r = (s = e[i]).element,
                      t = s.permanentElement.cloneNode(!0),
                      a.push(n(r, t));
                  return a
              }
              ,
              i.prototype.activateNewBodyScriptElements = function() {
                  var e, t, r, i, o, s;
                  for (s = [],
                  t = 0,
                  i = (o = this.getNewBodyScriptElements()).length; i > t; t++)
                      r = o[t],
                      e = this.createScriptElement(r),
                      s.push(n(r, e));
                  return s
              }
              ,
              i.prototype.assignNewBody = function() {
                  return document.body = this.newBody
              }
              ,
              i.prototype.focusFirstAutofocusableElement = function() {
                  var e;
                  return null != (e = this.newSnapshot.findFirstAutofocusableElement()) ? e.focus() : void 0
              }
              ,
              i.prototype.getNewHeadStylesheetElements = function() {
                  return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
              }
              ,
              i.prototype.getNewHeadScriptElements = function() {
                  return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
              }
              ,
              i.prototype.getCurrentHeadProvisionalElements = function() {
                  return this.currentHeadDetails.getProvisionalElements()
              }
              ,
              i.prototype.getNewHeadProvisionalElements = function() {
                  return this.newHeadDetails.getProvisionalElements()
              }
              ,
              i.prototype.getCurrentBodyPermanentElements = function() {
                  return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)
              }
              ,
              i.prototype.getNewBodyScriptElements = function() {
                  return this.newBody.querySelectorAll("script")
              }
              ,
              i
          }(t.Renderer),
          e = function(e) {
              var t;
              return (t = document.createElement("meta")).setAttribute("name", "turbolinks-permanent-placeholder"),
              t.setAttribute("content", e.id),
              {
                  element: t,
                  permanentElement: e
              }
          }
          ,
          n = function(e, t) {
              var n;
              return (n = e.parentNode) ? n.replaceChild(t, e) : void 0
          }
      }
      .call(this),
      function() {
          var e = function(e, t) {
              function r() {
                  this.constructor = e
              }
              for (var i in t)
                  n.call(t, i) && (e[i] = t[i]);
              return r.prototype = t.prototype,
              e.prototype = new r,
              e.__super__ = t.prototype,
              e
          }
            , n = {}.hasOwnProperty;
          t.ErrorRenderer = function(t) {
              function n(e) {
                  var t;
                  (t = document.createElement("html")).innerHTML = e,
                  this.newHead = t.querySelector("head"),
                  this.newBody = t.querySelector("body")
              }
              return e(n, t),
              n.prototype.render = function(e) {
                  return this.renderView((t = this,
                  function() {
                      return t.replaceHeadAndBody(),
                      t.activateBodyScriptElements(),
                      e()
                  }
                  ));
                  var t
              }
              ,
              n.prototype.replaceHeadAndBody = function() {
                  var e, t;
                  return t = document.head,
                  e = document.body,
                  t.parentNode.replaceChild(this.newHead, t),
                  e.parentNode.replaceChild(this.newBody, e)
              }
              ,
              n.prototype.activateBodyScriptElements = function() {
                  var e, t, n, r, i, o;
                  for (o = [],
                  t = 0,
                  n = (r = this.getScriptElements()).length; n > t; t++)
                      i = r[t],
                      e = this.createScriptElement(i),
                      o.push(i.parentNode.replaceChild(e, i));
                  return o
              }
              ,
              n.prototype.getScriptElements = function() {
                  return document.documentElement.querySelectorAll("script")
              }
              ,
              n
          }(t.Renderer)
      }
      .call(this),
      function() {
          t.View = function() {
              function e(e) {
                  this.delegate = e,
                  this.htmlElement = document.documentElement
              }
              return e.prototype.getRootLocation = function() {
                  return this.getSnapshot().getRootLocation()
              }
              ,
              e.prototype.getElementForAnchor = function(e) {
                  return this.getSnapshot().getElementForAnchor(e)
              }
              ,
              e.prototype.getSnapshot = function() {
                  return t.Snapshot.fromHTMLElement(this.htmlElement)
              }
              ,
              e.prototype.render = function(e, t) {
                  var n, r, i;
                  return i = e.snapshot,
                  n = e.error,
                  r = e.isPreview,
                  this.markAsPreview(r),
                  null != i ? this.renderSnapshot(i, r, t) : this.renderError(n, t)
              }
              ,
              e.prototype.markAsPreview = function(e) {
                  return e ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview")
              }
              ,
              e.prototype.renderSnapshot = function(e, n, r) {
                  return t.SnapshotRenderer.render(this.delegate, r, this.getSnapshot(), t.Snapshot.wrap(e), n)
              }
              ,
              e.prototype.renderError = function(e, n) {
                  return t.ErrorRenderer.render(this.delegate, n, e)
              }
              ,
              e
          }()
      }
      .call(this),
      function() {
          var e = function(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          };
          t.ScrollManager = function() {
              function n(n) {
                  this.delegate = n,
                  this.onScroll = e(this.onScroll, this),
                  this.onScroll = t.throttle(this.onScroll)
              }
              return n.prototype.start = function() {
                  return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1),
                  this.onScroll(),
                  this.started = !0)
              }
              ,
              n.prototype.stop = function() {
                  return this.started ? (removeEventListener("scroll", this.onScroll, !1),
                  this.started = !1) : void 0
              }
              ,
              n.prototype.scrollToElement = function(e) {
                  return e.scrollIntoView()
              }
              ,
              n.prototype.scrollToPosition = function(e) {
                  var t, n;
                  return t = e.x,
                  n = e.y,
                  window.scrollTo(t, n)
              }
              ,
              n.prototype.onScroll = function() {
                  return this.updatePosition({
                      x: window.pageXOffset,
                      y: window.pageYOffset
                  })
              }
              ,
              n.prototype.updatePosition = function(e) {
                  var t;
                  return this.position = e,
                  null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0
              }
              ,
              n
          }()
      }
      .call(this),
      function() {
          t.SnapshotCache = function() {
              function e(e) {
                  this.size = e,
                  this.keys = [],
                  this.snapshots = {}
              }
              var n;
              return e.prototype.has = function(e) {
                  return n(e)in this.snapshots
              }
              ,
              e.prototype.get = function(e) {
                  var t;
                  if (this.has(e))
                      return t = this.read(e),
                      this.touch(e),
                      t
              }
              ,
              e.prototype.put = function(e, t) {
                  return this.write(e, t),
                  this.touch(e),
                  t
              }
              ,
              e.prototype.read = function(e) {
                  var t;
                  return t = n(e),
                  this.snapshots[t]
              }
              ,
              e.prototype.write = function(e, t) {
                  var r;
                  return r = n(e),
                  this.snapshots[r] = t
              }
              ,
              e.prototype.touch = function(e) {
                  var t, r;
                  return r = n(e),
                  (t = this.keys.indexOf(r)) > -1 && this.keys.splice(t, 1),
                  this.keys.unshift(r),
                  this.trim()
              }
              ,
              e.prototype.trim = function() {
                  var e, t, n, r, i;
                  for (i = [],
                  e = 0,
                  n = (r = this.keys.splice(this.size)).length; n > e; e++)
                      t = r[e],
                      i.push(delete this.snapshots[t]);
                  return i
              }
              ,
              n = function(e) {
                  return t.Location.wrap(e).toCacheKey()
              }
              ,
              e
          }()
      }
      .call(this),
      function() {
          var e = function(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          };
          t.Visit = function() {
              function n(n, r, i) {
                  this.controller = n,
                  this.action = i,
                  this.performScroll = e(this.performScroll, this),
                  this.identifier = t.uuid(),
                  this.location = t.Location.wrap(r),
                  this.adapter = this.controller.adapter,
                  this.state = "initialized",
                  this.timingMetrics = {}
              }
              var r;
              return n.prototype.start = function() {
                  return "initialized" === this.state ? (this.recordTimingMetric("visitStart"),
                  this.state = "started",
                  this.adapter.visitStarted(this)) : void 0
              }
              ,
              n.prototype.cancel = function() {
                  var e;
                  return "started" === this.state ? (null != (e = this.request) && e.cancel(),
                  this.cancelRender(),
                  this.state = "canceled") : void 0
              }
              ,
              n.prototype.complete = function() {
                  var e;
                  return "started" === this.state ? (this.recordTimingMetric("visitEnd"),
                  this.state = "completed",
                  "function" == typeof (e = this.adapter).visitCompleted && e.visitCompleted(this),
                  this.controller.visitCompleted(this)) : void 0
              }
              ,
              n.prototype.fail = function() {
                  var e;
                  return "started" === this.state ? (this.state = "failed",
                  "function" == typeof (e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0
              }
              ,
              n.prototype.changeHistory = function() {
                  var e, t;
                  return this.historyChanged ? void 0 : (e = this.location.isEqualTo(this.referrer) ? "replace" : this.action,
                  t = r(e),
                  this.controller[t](this.location, this.restorationIdentifier),
                  this.historyChanged = !0)
              }
              ,
              n.prototype.issueRequest = function() {
                  return this.shouldIssueRequest() && null == this.request ? (this.progress = 0,
                  this.request = new t.HttpRequest(this,this.location,this.referrer),
                  this.request.send()) : void 0
              }
              ,
              n.prototype.getCachedSnapshot = function() {
                  var e;
                  return !(e = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !e.hasAnchor(this.location.anchor) || "restore" !== this.action && !e.isPreviewable() ? void 0 : e
              }
              ,
              n.prototype.hasCachedSnapshot = function() {
                  return null != this.getCachedSnapshot()
              }
              ,
              n.prototype.loadCachedSnapshot = function() {
                  var e, t;
                  return (t = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(),
                  this.render(function() {
                      var n;
                      return this.cacheSnapshot(),
                      this.controller.render({
                          snapshot: t,
                          isPreview: e
                      }, this.performScroll),
                      "function" == typeof (n = this.adapter).visitRendered && n.visitRendered(this),
                      e ? void 0 : this.complete()
                  })) : void 0
              }
              ,
              n.prototype.loadResponse = function() {
                  return null != this.response ? this.render(function() {
                      var e, t;
                      return this.cacheSnapshot(),
                      this.request.failed ? (this.controller.render({
                          error: this.response
                      }, this.performScroll),
                      "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this),
                      this.fail()) : (this.controller.render({
                          snapshot: this.response
                      }, this.performScroll),
                      "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this),
                      this.complete())
                  }) : void 0
              }
              ,
              n.prototype.followRedirect = function() {
                  return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation,
                  this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier),
                  this.followedRedirect = !0) : void 0
              }
              ,
              n.prototype.requestStarted = function() {
                  var e;
                  return this.recordTimingMetric("requestStart"),
                  "function" == typeof (e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0
              }
              ,
              n.prototype.requestProgressed = function(e) {
                  var t;
                  return this.progress = e,
                  "function" == typeof (t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0
              }
              ,
              n.prototype.requestCompletedWithResponse = function(e, n) {
                  return this.response = e,
                  null != n && (this.redirectedToLocation = t.Location.wrap(n)),
                  this.adapter.visitRequestCompleted(this)
              }
              ,
              n.prototype.requestFailedWithStatusCode = function(e, t) {
                  return this.response = t,
                  this.adapter.visitRequestFailedWithStatusCode(this, e)
              }
              ,
              n.prototype.requestFinished = function() {
                  var e;
                  return this.recordTimingMetric("requestEnd"),
                  "function" == typeof (e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0
              }
              ,
              n.prototype.performScroll = function() {
                  return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(),
                  this.scrolled = !0)
              }
              ,
              n.prototype.scrollToRestoredPosition = function() {
                  var e, t;
                  return null != (e = null != (t = this.restorationData) ? t.scrollPosition : void 0) ? (this.controller.scrollToPosition(e),
                  !0) : void 0
              }
              ,
              n.prototype.scrollToAnchor = function() {
                  return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor),
                  !0) : void 0
              }
              ,
              n.prototype.scrollToTop = function() {
                  return this.controller.scrollToPosition({
                      x: 0,
                      y: 0
                  })
              }
              ,
              n.prototype.recordTimingMetric = function(e) {
                  var t;
                  return null != (t = this.timingMetrics)[e] ? t[e] : t[e] = (new Date).getTime()
              }
              ,
              n.prototype.getTimingMetrics = function() {
                  return t.copyObject(this.timingMetrics)
              }
              ,
              r = function(e) {
                  switch (e) {
                  case "replace":
                      return "replaceHistoryWithLocationAndRestorationIdentifier";
                  case "advance":
                  case "restore":
                      return "pushHistoryWithLocationAndRestorationIdentifier"
                  }
              }
              ,
              n.prototype.shouldIssueRequest = function() {
                  return "restore" !== this.action || !this.hasCachedSnapshot()
              }
              ,
              n.prototype.cacheSnapshot = function() {
                  return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(),
                  this.snapshotCached = !0)
              }
              ,
              n.prototype.render = function(e) {
                  return this.cancelRender(),
                  this.frame = requestAnimationFrame((t = this,
                  function() {
                      return t.frame = null,
                      e.call(t)
                  }
                  ));
                  var t
              }
              ,
              n.prototype.cancelRender = function() {
                  return this.frame ? cancelAnimationFrame(this.frame) : void 0
              }
              ,
              n
          }()
      }
      .call(this),
      function() {
          var e = function(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          };
          t.Controller = function() {
              function n() {
                  this.clickBubbled = e(this.clickBubbled, this),
                  this.clickCaptured = e(this.clickCaptured, this),
                  this.pageLoaded = e(this.pageLoaded, this),
                  this.history = new t.History(this),
                  this.view = new t.View(this),
                  this.scrollManager = new t.ScrollManager(this),
                  this.restorationData = {},
                  this.clearCache(),
                  this.setProgressBarDelay(500)
              }
              return n.prototype.start = function() {
                  return t.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0),
                  addEventListener("DOMContentLoaded", this.pageLoaded, !1),
                  this.scrollManager.start(),
                  this.startHistory(),
                  this.started = !0,
                  this.enabled = !0) : void 0
              }
              ,
              n.prototype.disable = function() {
                  return this.enabled = !1
              }
              ,
              n.prototype.stop = function() {
                  return this.started ? (removeEventListener("click", this.clickCaptured, !0),
                  removeEventListener("DOMContentLoaded", this.pageLoaded, !1),
                  this.scrollManager.stop(),
                  this.stopHistory(),
                  this.started = !1) : void 0
              }
              ,
              n.prototype.clearCache = function() {
                  return this.cache = new t.SnapshotCache(10)
              }
              ,
              n.prototype.visit = function(e, n) {
                  var r, i;
                  return null == n && (n = {}),
                  e = t.Location.wrap(e),
                  this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (r = null != (i = n.action) ? i : "advance",
                  this.adapter.visitProposedToLocationWithAction(e, r)) : window.location = e : void 0
              }
              ,
              n.prototype.startVisitToLocationWithAction = function(e, n, r) {
                  var i;
                  return t.supported ? (i = this.getRestorationDataForIdentifier(r),
                  this.startVisit(e, n, {
                      restorationData: i
                  })) : window.location = e
              }
              ,
              n.prototype.setProgressBarDelay = function(e) {
                  return this.progressBarDelay = e
              }
              ,
              n.prototype.startHistory = function() {
                  return this.location = t.Location.wrap(window.location),
                  this.restorationIdentifier = t.uuid(),
                  this.history.start(),
                  this.history.replace(this.location, this.restorationIdentifier)
              }
              ,
              n.prototype.stopHistory = function() {
                  return this.history.stop()
              }
              ,
              n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, n) {
                  return this.restorationIdentifier = n,
                  this.location = t.Location.wrap(e),
                  this.history.push(this.location, this.restorationIdentifier)
              }
              ,
              n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, n) {
                  return this.restorationIdentifier = n,
                  this.location = t.Location.wrap(e),
                  this.history.replace(this.location, this.restorationIdentifier)
              }
              ,
              n.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, n) {
                  var r;
                  return this.restorationIdentifier = n,
                  this.enabled ? (r = this.getRestorationDataForIdentifier(this.restorationIdentifier),
                  this.startVisit(e, "restore", {
                      restorationIdentifier: this.restorationIdentifier,
                      restorationData: r,
                      historyChanged: !0
                  }),
                  this.location = t.Location.wrap(e)) : this.adapter.pageInvalidated()
              }
              ,
              n.prototype.getCachedSnapshotForLocation = function(e) {
                  var t;
                  return null != (t = this.cache.get(e)) ? t.clone() : void 0
              }
              ,
              n.prototype.shouldCacheSnapshot = function() {
                  return this.view.getSnapshot().isCacheable()
              }
              ,
              n.prototype.cacheSnapshot = function() {
                  var e, n;
                  return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(),
                  n = this.view.getSnapshot(),
                  e = this.lastRenderedLocation,
                  t.defer(function(t) {
                      return function() {
                          return t.cache.put(e, n.clone())
                      }
                  }(this))) : void 0
              }
              ,
              n.prototype.scrollToAnchor = function(e) {
                  var t;
                  return (t = this.view.getElementForAnchor(e)) ? this.scrollToElement(t) : this.scrollToPosition({
                      x: 0,
                      y: 0
                  })
              }
              ,
              n.prototype.scrollToElement = function(e) {
                  return this.scrollManager.scrollToElement(e)
              }
              ,
              n.prototype.scrollToPosition = function(e) {
                  return this.scrollManager.scrollToPosition(e)
              }
              ,
              n.prototype.scrollPositionChanged = function(e) {
                  return this.getCurrentRestorationData().scrollPosition = e
              }
              ,
              n.prototype.render = function(e, t) {
                  return this.view.render(e, t)
              }
              ,
              n.prototype.viewInvalidated = function() {
                  return this.adapter.pageInvalidated()
              }
              ,
              n.prototype.viewWillRender = function(e) {
                  return this.notifyApplicationBeforeRender(e)
              }
              ,
              n.prototype.viewRendered = function() {
                  return this.lastRenderedLocation = this.currentVisit.location,
                  this.notifyApplicationAfterRender()
              }
              ,
              n.prototype.pageLoaded = function() {
                  return this.lastRenderedLocation = this.location,
                  this.notifyApplicationAfterPageLoad()
              }
              ,
              n.prototype.clickCaptured = function() {
                  return removeEventListener("click", this.clickBubbled, !1),
                  addEventListener("click", this.clickBubbled, !1)
              }
              ,
              n.prototype.clickBubbled = function(e) {
                  var t, n, r;
                  return this.enabled && this.clickEventIsSignificant(e) && (n = this.getVisitableLinkForNode(e.target)) && (r = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, r) ? (e.preventDefault(),
                  t = this.getActionForLink(n),
                  this.visit(r, {
                      action: t
                  })) : void 0
              }
              ,
              n.prototype.applicationAllowsFollowingLinkToLocation = function(e, t) {
                  return !this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented
              }
              ,
              n.prototype.applicationAllowsVisitingLocation = function(e) {
                  return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented
              }
              ,
              n.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, n) {
                  return t.dispatch("turbolinks:click", {
                      target: e,
                      data: {
                          url: n.absoluteURL
                      },
                      cancelable: !0
                  })
              }
              ,
              n.prototype.notifyApplicationBeforeVisitingLocation = function(e) {
                  return t.dispatch("turbolinks:before-visit", {
                      data: {
                          url: e.absoluteURL
                      },
                      cancelable: !0
                  })
              }
              ,
              n.prototype.notifyApplicationAfterVisitingLocation = function(e) {
                  return t.dispatch("turbolinks:visit", {
                      data: {
                          url: e.absoluteURL
                      }
                  })
              }
              ,
              n.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                  return t.dispatch("turbolinks:before-cache")
              }
              ,
              n.prototype.notifyApplicationBeforeRender = function(e) {
                  return t.dispatch("turbolinks:before-render", {
                      data: {
                          newBody: e
                      }
                  })
              }
              ,
              n.prototype.notifyApplicationAfterRender = function() {
                  return t.dispatch("turbolinks:render")
              }
              ,
              n.prototype.notifyApplicationAfterPageLoad = function(e) {
                  return null == e && (e = {}),
                  t.dispatch("turbolinks:load", {
                      data: {
                          url: this.location.absoluteURL,
                          timing: e
                      }
                  })
              }
              ,
              n.prototype.startVisit = function(e, t, n) {
                  var r;
                  return null != (r = this.currentVisit) && r.cancel(),
                  this.currentVisit = this.createVisit(e, t, n),
                  this.currentVisit.start(),
                  this.notifyApplicationAfterVisitingLocation(e)
              }
              ,
              n.prototype.createVisit = function(e, n, r) {
                  var i, o, s, a, l;
                  return a = (o = null != r ? r : {}).restorationIdentifier,
                  s = o.restorationData,
                  i = o.historyChanged,
                  (l = new t.Visit(this,e,n)).restorationIdentifier = null != a ? a : t.uuid(),
                  l.restorationData = t.copyObject(s),
                  l.historyChanged = i,
                  l.referrer = this.location,
                  l
              }
              ,
              n.prototype.visitCompleted = function(e) {
                  return this.notifyApplicationAfterPageLoad(e.getTimingMetrics())
              }
              ,
              n.prototype.clickEventIsSignificant = function(e) {
                  return !(e.defaultPrevented || e.target.isContentEditable || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
              }
              ,
              n.prototype.getVisitableLinkForNode = function(e) {
                  return this.nodeIsVisitable(e) ? t.closest(e, "a[href]:not([target]):not([download])") : void 0
              }
              ,
              n.prototype.getVisitableLocationForLink = function(e) {
                  var n;
                  return n = new t.Location(e.getAttribute("href")),
                  this.locationIsVisitable(n) ? n : void 0
              }
              ,
              n.prototype.getActionForLink = function(e) {
                  var t;
                  return null != (t = e.getAttribute("data-turbolinks-action")) ? t : "advance"
              }
              ,
              n.prototype.nodeIsVisitable = function(e) {
                  var n;
                  return !(n = t.closest(e, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks")
              }
              ,
              n.prototype.locationIsVisitable = function(e) {
                  return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML()
              }
              ,
              n.prototype.getCurrentRestorationData = function() {
                  return this.getRestorationDataForIdentifier(this.restorationIdentifier)
              }
              ,
              n.prototype.getRestorationDataForIdentifier = function(e) {
                  var t;
                  return null != (t = this.restorationData)[e] ? t[e] : t[e] = {}
              }
              ,
              n
          }()
      }
      .call(this),
      function() {
          !function() {
              var e, t;
              if ((e = t = document.currentScript) && !t.hasAttribute("data-turbolinks-suppress-warning"))
                  for (; e = e.parentNode; )
                      if (e === document.body)
                          return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", t.outerHTML)
          }()
      }
      .call(this),
      function() {
          var e, n, r;
          t.start = function() {
              return n() ? (null == t.controller && (t.controller = e()),
              t.controller.start()) : void 0
          }
          ,
          n = function() {
              return null == window.Turbolinks && (window.Turbolinks = t),
              r()
          }
          ,
          e = function() {
              var e;
              return (e = new t.Controller).adapter = new t.BrowserAdapter(e),
              e
          }
          ,
          (r = function() {
              return window.Turbolinks === t
          }
          )() && t.start()
      }
      .call(this)
  }
  ).call(this),
  "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
}
.call(this),
synced_interval = 4e3,
/*!
* jQuery JavaScript Library v3.4.1
* https://jquery.com/
*
* Includes Sizzle.js
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://jquery.org/license
*
* Date: 2019-05-01T21:04Z
*/
function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document)
          throw new Error("jQuery requires a window with a document");
      return t(e)
  }
  : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  function n(e, t, n) {
      var r, i, o = (n = n || le).createElement("script");
      if (o.text = e,
      t)
          for (r in we)
              (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
      n.head.appendChild(o).parentNode.removeChild(o)
  }
  function r(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[me.call(e)] || "object" : typeof e
  }
  function i(e) {
      var t = !!e && "length"in e && e.length
        , n = r(e);
      return !Ee(e) && !_e(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  function o(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  function s(e, t, n) {
      return Ee(t) ? Se.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n
      }) : t.nodeType ? Se.grep(e, function(e) {
          return e === t !== n
      }) : "string" != typeof t ? Se.grep(e, function(e) {
          return he.call(t, e) > -1 !== n
      }) : Se.filter(t, e, n)
  }
  function a(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; )
          ;
      return e
  }
  function l(e) {
      var t = {};
      return Se.each(e.match(je) || [], function(e, n) {
          t[n] = !0
      }),
      t
  }
  function u(e) {
      return e
  }
  function c(e) {
      throw e
  }
  function f(e, t, n, r) {
      var i;
      try {
          e && Ee(i = e.promise) ? i.call(e).done(t).fail(n) : e && Ee(i = e.then) ? i.call(e, t, n) : t.apply(undefined, [e].slice(r))
      } catch (e) {
          n.apply(undefined, [e])
      }
  }
  function d() {
      le.removeEventListener("DOMContentLoaded", d),
      e.removeEventListener("load", d),
      Se.ready()
  }
  function h(e, t) {
      return t.toUpperCase()
  }
  function p(e) {
      return e.replace(Me, "ms-").replace(Fe, h)
  }
  function m() {
      this.expando = Se.expando + m.uid++
  }
  function g(e) {
      return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ve.test(e) ? JSON.parse(e) : e)
  }
  function y(e, t, n) {
      var r;
      if (n === undefined && 1 === e.nodeType)
          if (r = "data-" + t.replace(ze, "-$&").toLowerCase(),
          "string" == typeof (n = e.getAttribute(r))) {
              try {
                  n = g(n)
              } catch (i) {}
              Ue.set(e, t, n)
          } else
              n = undefined;
      return n
  }
  function v(e, t, n, r) {
      var i, o, s = 20, a = r ? function() {
          return r.cur()
      }
      : function() {
          return Se.css(e, t, "")
      }
      , l = a(), u = n && n[3] || (Se.cssNumber[t] ? "" : "px"), c = e.nodeType && (Se.cssNumber[t] || "px" !== u && +l) && Ge.exec(Se.css(e, t));
      if (c && c[3] !== u) {
          for (l /= 2,
          u = u || c[3],
          c = +l || 1; s--; )
              Se.style(e, t, c + u),
              (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
              c /= o;
          c *= 2,
          Se.style(e, t, c + u),
          n = n || []
      }
      return n && (c = +c || +l || 0,
      i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
      r && (r.unit = u,
      r.start = c,
      r.end = i)),
      i
  }
  function b(e) {
      var t, n = e.ownerDocument, r = e.nodeName, i = et[r];
      return i || (t = n.body.appendChild(n.createElement(r)),
      i = Se.css(t, "display"),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      et[r] = i,
      i)
  }
  function E(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
          (r = e[o]).style && (n = r.style.display,
          t ? ("none" === n && (i[o] = Be.get(r, "display") || null,
          i[o] || (r.style.display = "")),
          "" === r.style.display && Je(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none",
          Be.set(r, "display", n)));
      for (o = 0; o < s; o++)
          null != i[o] && (e[o].style.display = i[o]);
      return e
  }
  function _(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
      t === undefined || t && o(e, t) ? Se.merge([e], n) : n
  }
  function w(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
          Be.set(e[n], "globalEval", !t || Be.get(t[n], "globalEval"))
  }
  function T(e, t, n, i, o) {
      for (var s, a, l, u, c, f, d = t.createDocumentFragment(), h = [], p = 0, m = e.length; p < m; p++)
          if ((s = e[p]) || 0 === s)
              if ("object" === r(s))
                  Se.merge(h, s.nodeType ? [s] : s);
              else if (at.test(s)) {
                  for (a = a || d.appendChild(t.createElement("div")),
                  l = (nt.exec(s) || ["", ""])[1].toLowerCase(),
                  u = it[l] || it._default,
                  a.innerHTML = u[1] + Se.htmlPrefilter(s) + u[2],
                  f = u[0]; f--; )
                      a = a.lastChild;
                  Se.merge(h, a.childNodes),
                  (a = d.firstChild).textContent = ""
              } else
                  h.push(t.createTextNode(s));
      for (d.textContent = "",
      p = 0; s = h[p++]; )
          if (i && Se.inArray(s, i) > -1)
              o && o.push(s);
          else if (c = Xe(s),
          a = _(d.appendChild(s), "script"),
          c && w(a),
          n)
              for (f = 0; s = a[f++]; )
                  rt.test(s.type || "") && n.push(s);
      return d
  }
  function S() {
      return !0
  }
  function C() {
      return !1
  }
  function A(e, t) {
      return e === x() == ("focus" === t)
  }
  function x() {
      try {
          return le.activeElement
      } catch (e) {}
  }
  function O(e, t, n, r, i, o) {
      var s, a;
      if ("object" == typeof t) {
          for (a in "string" != typeof n && (r = r || n,
          n = undefined),
          t)
              O(e, a, n, r, t[a], o);
          return e
      }
      if (null == r && null == i ? (i = n,
      r = n = undefined) : null == i && ("string" == typeof n ? (i = r,
      r = undefined) : (i = r,
      r = n,
      n = undefined)),
      !1 === i)
          i = C;
      else if (!i)
          return e;
      return 1 === o && (s = i,
      (i = function(e) {
          return Se().off(e),
          s.apply(this, arguments)
      }
      ).guid = s.guid || (s.guid = Se.guid++)),
      e.each(function() {
          Se.event.add(this, t, i, r, n)
      })
  }
  function D(e, t, n) {
      n ? (Be.set(e, t, !1),
      Se.event.add(e, t, {
          namespace: !1,
          handler: function(e) {
              var r, i, o = Be.get(this, t);
              if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                      (Se.event.special[t] || {}).delegateType && e.stopPropagation();
                  else if (o = ce.call(arguments),
                  Be.set(this, t, o),
                  r = n(this, t),
                  this[t](),
                  o !== (i = Be.get(this, t)) || r ? Be.set(this, t, !1) : i = {},
                  o !== i)
                      return e.stopImmediatePropagation(),
                      e.preventDefault(),
                      i.value
              } else
                  o.length && (Be.set(this, t, {
                      value: Se.event.trigger(Se.extend(o[0], Se.Event.prototype), o.slice(1), this)
                  }),
                  e.stopImmediatePropagation())
          }
      })) : Be.get(e, t) === undefined && Se.event.add(e, t, S)
  }
  function I(e, t) {
      return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && Se(e).children("tbody")[0] || e
  }
  function L(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
      e
  }
  function k(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
      e
  }
  function N(e, t) {
      var n, r, i, o, s, a, l, u;
      if (1 === t.nodeType) {
          if (Be.hasData(e) && (o = Be.access(e),
          s = Be.set(t, o),
          u = o.events))
              for (i in delete s.handle,
              s.events = {},
              u)
                  for (n = 0,
                  r = u[i].length; n < r; n++)
                      Se.event.add(t, i, u[i][n]);
          Ue.hasData(e) && (a = Ue.access(e),
          l = Se.extend({}, a),
          Ue.set(t, l))
      }
  }
  function P(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && tt.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }
  function j(e, t, r, i) {
      t = fe.apply([], t);
      var o, s, a, l, u, c, f = 0, d = e.length, h = d - 1, p = t[0], m = Ee(p);
      if (m || d > 1 && "string" == typeof p && !be.checkClone && ht.test(p))
          return e.each(function(n) {
              var o = e.eq(n);
              m && (t[0] = p.call(this, n, o.html())),
              j(o, t, r, i)
          });
      if (d && (s = (o = T(t, e[0].ownerDocument, !1, e, i)).firstChild,
      1 === o.childNodes.length && (o = s),
      s || i)) {
          for (l = (a = Se.map(_(o, "script"), L)).length; f < d; f++)
              u = o,
              f !== h && (u = Se.clone(u, !0, !0),
              l && Se.merge(a, _(u, "script"))),
              r.call(e[f], u, f);
          if (l)
              for (c = a[a.length - 1].ownerDocument,
              Se.map(a, k),
              f = 0; f < l; f++)
                  u = a[f],
                  rt.test(u.type || "") && !Be.access(u, "globalEval") && Se.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? Se._evalUrl && !u.noModule && Se._evalUrl(u.src, {
                      nonce: u.nonce || u.getAttribute("nonce")
                  }) : n(u.textContent.replace(pt, ""), u, c))
      }
      return e
  }
  function R(e, t, n) {
      for (var r, i = t ? Se.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || Se.cleanData(_(r)),
          r.parentNode && (n && Xe(r) && w(_(r, "script")),
          r.parentNode.removeChild(r));
      return e
  }
  function H(e, t, n) {
      var r, i, o, s, a = e.style;
      return (n = n || gt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || Xe(e) || (s = Se.style(e, t)),
      !be.pixelBoxStyles() && mt.test(s) && yt.test(t) && (r = a.width,
      i = a.minWidth,
      o = a.maxWidth,
      a.minWidth = a.maxWidth = a.width = s,
      s = n.width,
      a.width = r,
      a.minWidth = i,
      a.maxWidth = o)),
      s !== undefined ? s + "" : s
  }
  function q(e, t) {
      return {
          get: function() {
              if (!e())
                  return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }
  function M(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--; )
          if ((e = vt[n] + t)in bt)
              return e
  }
  function F(e) {
      var t = Se.cssProps[e] || Et[e];
      return t || (e in bt ? e : Et[e] = M(e) || e)
  }
  function W(e, t, n) {
      var r = Ge.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }
  function B(e, t, n, r, i, o) {
      var s = "width" === t ? 1 : 0
        , a = 0
        , l = 0;
      if (n === (r ? "border" : "content"))
          return 0;
      for (; s < 4; s += 2)
          "margin" === n && (l += Se.css(e, n + Ke[s], !0, i)),
          r ? ("content" === n && (l -= Se.css(e, "padding" + Ke[s], !0, i)),
          "margin" !== n && (l -= Se.css(e, "border" + Ke[s] + "Width", !0, i))) : (l += Se.css(e, "padding" + Ke[s], !0, i),
          "padding" !== n ? l += Se.css(e, "border" + Ke[s] + "Width", !0, i) : a += Se.css(e, "border" + Ke[s] + "Width", !0, i));
      return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
      l
  }
  function U(e, t, n) {
      var r = gt(e)
        , i = (!be.boxSizingReliable() || n) && "border-box" === Se.css(e, "boxSizing", !1, r)
        , o = i
        , s = H(e, t, r)
        , a = "offset" + t[0].toUpperCase() + t.slice(1);
      if (mt.test(s)) {
          if (!n)
              return s;
          s = "auto"
      }
      return (!be.boxSizingReliable() && i || "auto" === s || !parseFloat(s) && "inline" === Se.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === Se.css(e, "boxSizing", !1, r),
      (o = a in e) && (s = e[a])),
      (s = parseFloat(s) || 0) + B(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
  }
  function V(e, t, n, r, i) {
      return new V.prototype.init(e,t,n,r,i)
  }
  function z() {
      At && (!1 === le.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, Se.fx.interval),
      Se.fx.tick())
  }
  function $() {
      return e.setTimeout(function() {
          Ct = undefined
      }),
      Ct = Date.now()
  }
  function G(e, t) {
      var n, r = 0, i = {
          height: e
      };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = Ke[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e),
      i
  }
  function K(e, t, n) {
      for (var r, i = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), o = 0, s = i.length; o < s; o++)
          if (r = i[o].call(n, t, e))
              return r
  }
  function Q(e, t, n) {
      var r, i, o, s, a, l, u, c, f = "width"in t || "height"in t, d = this, h = {}, p = e.style, m = e.nodeType && Je(e), g = Be.get(e, "fxshow");
      for (r in n.queue || (null == (s = Se._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
      a = s.empty.fire,
      s.empty.fire = function() {
          s.unqueued || a()
      }
      ),
      s.unqueued++,
      d.always(function() {
          d.always(function() {
              s.unqueued--,
              Se.queue(e, "fx").length || s.empty.fire()
          })
      })),
      t)
          if (i = t[r],
          xt.test(i)) {
              if (delete t[r],
              o = o || "toggle" === i,
              i === (m ? "hide" : "show")) {
                  if ("show" !== i || !g || g[r] === undefined)
                      continue;
                  m = !0
              }
              h[r] = g && g[r] || Se.style(e, r)
          }
      if ((l = !Se.isEmptyObject(t)) || !Se.isEmptyObject(h))
          for (r in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
          null == (u = g && g.display) && (u = Be.get(e, "display")),
          "none" === (c = Se.css(e, "display")) && (u ? c = u : (E([e], !0),
          u = e.style.display || u,
          c = Se.css(e, "display"),
          E([e]))),
          ("inline" === c || "inline-block" === c && null != u) && "none" === Se.css(e, "float") && (l || (d.done(function() {
              p.display = u
          }),
          null == u && (c = p.display,
          u = "none" === c ? "" : c)),
          p.display = "inline-block")),
          n.overflow && (p.overflow = "hidden",
          d.always(function() {
              p.overflow = n.overflow[0],
              p.overflowX = n.overflow[1],
              p.overflowY = n.overflow[2]
          })),
          l = !1,
          h)
              l || (g ? "hidden"in g && (m = g.hidden) : g = Be.access(e, "fxshow", {
                  display: u
              }),
              o && (g.hidden = !m),
              m && E([e], !0),
              d.done(function() {
                  for (r in m || E([e]),
                  Be.remove(e, "fxshow"),
                  h)
                      Se.style(e, r, h[r])
              })),
              l = K(m ? g[r] : 0, r, d),
              r in g || (g[r] = l.start,
              m && (l.end = l.start,
              l.start = 0))
  }
  function X(e, t) {
      var n, r, i, o, s;
      for (n in e)
          if (i = t[r = p(n)],
          o = e[n],
          Array.isArray(o) && (i = o[1],
          o = e[n] = o[0]),
          n !== r && (e[r] = o,
          delete e[n]),
          (s = Se.cssHooks[r]) && "expand"in s)
              for (n in o = s.expand(o),
              delete e[r],
              o)
                  n in e || (e[n] = o[n],
                  t[n] = i);
          else
              t[r] = i
  }
  function Y(e, t, n) {
      var r, i, o = 0, s = Y.prefilters.length, a = Se.Deferred().always(function() {
          delete l.elem
      }), l = function() {
          if (i)
              return !1;
          for (var t = Ct || $(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++)
              u.tweens[o].run(r);
          return a.notifyWith(e, [u, r, n]),
          r < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]),
          a.resolveWith(e, [u]),
          !1)
      }, u = a.promise({
          elem: e,
          props: Se.extend({}, t),
          opts: Se.extend(!0, {
              specialEasing: {},
              easing: Se.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Ct || $(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
              var r = Se.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
              return u.tweens.push(r),
              r
          },
          stop: function(t) {
              var n = 0
                , r = t ? u.tweens.length : 0;
              if (i)
                  return this;
              for (i = !0; n < r; n++)
                  u.tweens[n].run(1);
              return t ? (a.notifyWith(e, [u, 1, 0]),
              a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
              this
          }
      }), c = u.props;
      for (X(c, u.opts.specialEasing); o < s; o++)
          if (r = Y.prefilters[o].call(u, e, c, u.opts))
              return Ee(r.stop) && (Se._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
              r;
      return Se.map(c, K, u),
      Ee(u.opts.start) && u.opts.start.call(e, u),
      u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
      Se.fx.timer(Se.extend(l, {
          elem: e,
          anim: u,
          queue: u.opts.queue
      })),
      u
  }
  function J(e) {
      return (e.match(je) || []).join(" ")
  }
  function Z(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }
  function ee(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(je) || []
  }
  function te(e, t, n, i) {
      var o;
      if (Array.isArray(t))
          Se.each(t, function(t, r) {
              n || Mt.test(e) ? i(e, r) : te(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
          });
      else if (n || "object" !== r(t))
          i(e, t);
      else
          for (o in t)
              te(e + "[" + o + "]", t[o], n, i)
  }
  function ne(e) {
      return function(t, n) {
          "string" != typeof t && (n = t,
          t = "*");
          var r, i = 0, o = t.toLowerCase().match(je) || [];
          if (Ee(n))
              for (; r = o[i++]; )
                  "+" === r[0] ? (r = r.slice(1) || "*",
                  (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }
  function re(e, t, n, r) {
      function i(a) {
          var l;
          return o[a] = !0,
          Se.each(e[a] || [], function(e, a) {
              var u = a(t, n, r);
              return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
              i(u),
              !1)
          }),
          l
      }
      var o = {}
        , s = e === Yt;
      return i(t.dataTypes[0]) || !o["*"] && i("*")
  }
  function ie(e, t) {
      var n, r, i = Se.ajaxSettings.flatOptions || {};
      for (n in t)
          t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && Se.extend(!0, e, r),
      e
  }
  function oe(e, t, n) {
      for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
          l.shift(),
          r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (i in a)
              if (a[i] && a[i].test(r)) {
                  l.unshift(i);
                  break
              }
      if (l[0]in n)
          o = l[0];
      else {
          for (i in n) {
              if (!l[0] || e.converters[i + " " + l[0]]) {
                  o = i;
                  break
              }
              s || (s = i)
          }
          o = o || s
      }
      if (o)
          return o !== l[0] && l.unshift(o),
          n[o]
  }
  function se(e, t, n, r) {
      var i, o, s, a, l, u = {}, c = e.dataTypes.slice();
      if (c[1])
          for (s in e.converters)
              u[s.toLowerCase()] = e.converters[s];
      for (o = c.shift(); o; )
          if (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          l = o,
          o = c.shift())
              if ("*" === o)
                  o = l;
              else if ("*" !== l && l !== o) {
                  if (!(s = u[l + " " + o] || u["* " + o]))
                      for (i in u)
                          if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                              !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0],
                              c.unshift(a[1]));
                              break
                          }
                  if (!0 !== s)
                      if (s && e.throws)
                          t = s(t);
                      else
                          try {
                              t = s(t)
                          } catch (f) {
                              return {
                                  state: "parsererror",
                                  error: s ? f : "No conversion from " + l + " to " + o
                              }
                          }
              }
      return {
          state: "success",
          data: t
      }
  }
  var ae = []
    , le = e.document
    , ue = Object.getPrototypeOf
    , ce = ae.slice
    , fe = ae.concat
    , de = ae.push
    , he = ae.indexOf
    , pe = {}
    , me = pe.toString
    , ge = pe.hasOwnProperty
    , ye = ge.toString
    , ve = ye.call(Object)
    , be = {}
    , Ee = function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }
    , _e = function(e) {
      return null != e && e === e.window
  }
    , we = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
  }
    , Te = "3.4.1"
    , Se = function(e, t) {
      return new Se.fn.init(e,t)
  }
    , Ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  Se.fn = Se.prototype = {
      jquery: Te,
      constructor: Se,
      length: 0,
      toArray: function() {
          return ce.call(this)
      },
      get: function(e) {
          return null == e ? ce.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
          var t = Se.merge(this.constructor(), e);
          return t.prevObject = this,
          t
      },
      each: function(e) {
          return Se.each(this, e)
      },
      map: function(e) {
          return this.pushStack(Se.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(ce.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length
            , n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: de,
      sort: ae.sort,
      splice: ae.splice
  },
  Se.extend = Se.fn.extend = function() {
      var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
      for ("boolean" == typeof s && (u = s,
      s = arguments[a] || {},
      a++),
      "object" == typeof s || Ee(s) || (s = {}),
      a === l && (s = this,
      a--); a < l; a++)
          if (null != (e = arguments[a]))
              for (t in e)
                  r = e[t],
                  "__proto__" !== t && s !== r && (u && r && (Se.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t],
                  o = i && !Array.isArray(n) ? [] : i || Se.isPlainObject(n) ? n : {},
                  i = !1,
                  s[t] = Se.extend(u, o, r)) : r !== undefined && (s[t] = r));
      return s
  }
  ,
  Se.extend({
      expando: "jQuery" + (Te + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== me.call(e)) && (!(t = ue(e)) || "function" == typeof (n = ge.call(t, "constructor") && t.constructor) && ye.call(n) === ve)
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e)
              return !1;
          return !0
      },
      globalEval: function(e, t) {
          n(e, {
              nonce: t && t.nonce
          })
      },
      each: function(e, t) {
          var n, r = 0;
          if (i(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                  ;
          else
              for (r in e)
                  if (!1 === t.call(e[r], r, e[r]))
                      break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(Ce, "")
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (i(Object(e)) ? Se.merge(n, "string" == typeof e ? [e] : e) : de.call(n, e)),
          n
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : he.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
          return e.length = i,
          e
      },
      grep: function(e, t, n) {
          for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
          return r
      },
      map: function(e, t, n) {
          var r, o, s = 0, a = [];
          if (i(e))
              for (r = e.length; s < r; s++)
                  null != (o = t(e[s], s, n)) && a.push(o);
          else
              for (s in e)
                  null != (o = t(e[s], s, n)) && a.push(o);
          return fe.apply([], a)
      },
      guid: 1,
      support: be
  }),
  "function" == typeof Symbol && (Se.fn[Symbol.iterator] = ae[Symbol.iterator]),
  Se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      pe["[object " + t + "]"] = t.toLowerCase()
  });
  var Ae = /*!
* Sizzle CSS Selector Engine v2.3.4
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://js.foundation/
*
* Date: 2019-04-08
*/
  function(e) {
      function t(e, t, n, r) {
          var i, o, s, a, l, u, c, d = t && t.ownerDocument, p = t ? t.nodeType : 9;
          if (n = n || [],
          "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
              return n;
          if (!r && ((t ? t.ownerDocument || t : W) !== N && k(t),
          t = t || N,
          j)) {
              if (11 !== p && (l = be.exec(e)))
                  if (i = l[1]) {
                      if (9 === p) {
                          if (!(s = t.getElementById(i)))
                              return n;
                          if (s.id === i)
                              return n.push(s),
                              n
                      } else if (d && (s = d.getElementById(i)) && M(t, s) && s.id === i)
                          return n.push(s),
                          n
                  } else {
                      if (l[2])
                          return Z.apply(n, t.getElementsByTagName(e)),
                          n;
                      if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                          return Z.apply(n, t.getElementsByClassName(i)),
                          n
                  }
              if (w.qsa && !G[e + " "] && (!R || !R.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
                  if (c = e,
                  d = t,
                  1 === p && fe.test(e)) {
                      for ((a = t.getAttribute("id")) ? a = a.replace(Te, Se) : t.setAttribute("id", a = F),
                      o = (u = A(e)).length; o--; )
                          u[o] = "#" + a + " " + h(u[o]);
                      c = u.join(","),
                      d = Ee.test(e) && f(t.parentNode) || t
                  }
                  try {
                      return Z.apply(n, d.querySelectorAll(c)),
                      n
                  } catch (m) {
                      G(e, !0)
                  } finally {
                      a === F && t.removeAttribute("id")
                  }
              }
          }
          return O(e.replace(le, "$1"), t, n, r)
      }
      function n() {
          function e(n, r) {
              return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
              e[n + " "] = r
          }
          var t = [];
          return e
      }
      function r(e) {
          return e[F] = !0,
          e
      }
      function i(e) {
          var t = N.createElement("fieldset");
          try {
              return !!e(t)
          } catch (n) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t),
              t = null
          }
      }
      function o(e, t) {
          for (var n = e.split("|"), r = n.length; r--; )
              T.attrHandle[n[r]] = t
      }
      function s(e, t) {
          var n = t && e
            , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r)
              return r;
          if (n)
              for (; n = n.nextSibling; )
                  if (n === t)
                      return -1;
          return e ? 1 : -1
      }
      function a(e) {
          return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
          }
      }
      function l(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }
      function u(e) {
          return function(t) {
              return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
          }
      }
      function c(e) {
          return r(function(t) {
              return t = +t,
              r(function(n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--; )
                      n[i = o[s]] && (n[i] = !(r[i] = n[i]))
              })
          })
      }
      function f(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }
      function d() {}
      function h(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++)
              r += e[t].value;
          return r
      }
      function p(e, t, n) {
          var r = t.dir
            , i = t.next
            , o = i || r
            , s = n && "parentNode" === o
            , a = U++;
          return t.first ? function(t, n, i) {
              for (; t = t[r]; )
                  if (1 === t.nodeType || s)
                      return e(t, n, i);
              return !1
          }
          : function(t, n, l) {
              var u, c, f, d = [B, a];
              if (l) {
                  for (; t = t[r]; )
                      if ((1 === t.nodeType || s) && e(t, n, l))
                          return !0
              } else
                  for (; t = t[r]; )
                      if (1 === t.nodeType || s)
                          if (c = (f = t[F] || (t[F] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                          i && i === t.nodeName.toLowerCase())
                              t = t[r] || t;
                          else {
                              if ((u = c[o]) && u[0] === B && u[1] === a)
                                  return d[2] = u[2];
                              if (c[o] = d,
                              d[2] = e(t, n, l))
                                  return !0
                          }
              return !1
          }
      }
      function m(e) {
          return e.length > 1 ? function(t, n, r) {
              for (var i = e.length; i--; )
                  if (!e[i](t, n, r))
                      return !1;
              return !0
          }
          : e[0]
      }
      function g(e, n, r) {
          for (var i = 0, o = n.length; i < o; i++)
              t(e, n[i], r);
          return r
      }
      function y(e, t, n, r, i) {
          for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
              (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
              u && t.push(a)));
          return s
      }
      function v(e, t, n, i, o, s) {
          return i && !i[F] && (i = v(i)),
          o && !o[F] && (o = v(o, s)),
          r(function(r, s, a, l) {
              var u, c, f, d = [], h = [], p = s.length, m = r || g(t || "*", a.nodeType ? [a] : a, []), v = !e || !r && t ? m : y(m, d, e, a, l), b = n ? o || (r ? e : p || i) ? [] : s : v;
              if (n && n(v, b, a, l),
              i)
                  for (u = y(b, h),
                  i(u, [], a, l),
                  c = u.length; c--; )
                      (f = u[c]) && (b[h[c]] = !(v[h[c]] = f));
              if (r) {
                  if (o || e) {
                      if (o) {
                          for (u = [],
                          c = b.length; c--; )
                              (f = b[c]) && u.push(v[c] = f);
                          o(null, b = [], u, l)
                      }
                      for (c = b.length; c--; )
                          (f = b[c]) && (u = o ? te(r, f) : d[c]) > -1 && (r[u] = !(s[u] = f))
                  }
              } else
                  b = y(b === s ? b.splice(p, b.length) : b),
                  o ? o(null, s, b, l) : Z.apply(s, b)
          })
      }
      function b(e) {
          for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = p(function(e) {
              return e === t
          }, s, !0), u = p(function(e) {
              return te(t, e) > -1
          }, s, !0), c = [function(e, n, r) {
              var i = !o && (r || n !== D) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
              return t = null,
              i
          }
          ]; a < i; a++)
              if (n = T.relative[e[a].type])
                  c = [p(m(c), n)];
              else {
                  if ((n = T.filter[e[a].type].apply(null, e[a].matches))[F]) {
                      for (r = ++a; r < i && !T.relative[e[r].type]; r++)
                          ;
                      return v(a > 1 && m(c), a > 1 && h(e.slice(0, a - 1).concat({
                          value: " " === e[a - 2].type ? "*" : ""
                      })).replace(le, "$1"), n, a < r && b(e.slice(a, r)), r < i && b(e = e.slice(r)), r < i && h(e))
                  }
                  c.push(n)
              }
          return m(c)
      }
      function E(e, n) {
          var i = n.length > 0
            , o = e.length > 0
            , s = function(r, s, a, l, u) {
              var c, f, d, h = 0, p = "0", m = r && [], g = [], v = D, b = r || o && T.find.TAG("*", u), E = B += null == v ? 1 : Math.random() || .1, _ = b.length;
              for (u && (D = s === N || s || u); p !== _ && null != (c = b[p]); p++) {
                  if (o && c) {
                      for (f = 0,
                      s || c.ownerDocument === N || (k(c),
                      a = !j); d = e[f++]; )
                          if (d(c, s || N, a)) {
                              l.push(c);
                              break
                          }
                      u && (B = E)
                  }
                  i && ((c = !d && c) && h--,
                  r && m.push(c))
              }
              if (h += p,
              i && p !== h) {
                  for (f = 0; d = n[f++]; )
                      d(m, g, s, a);
                  if (r) {
                      if (h > 0)
                          for (; p--; )
                              m[p] || g[p] || (g[p] = Y.call(l));
                      g = y(g)
                  }
                  Z.apply(l, g),
                  u && !r && g.length > 0 && h + n.length > 1 && t.uniqueSort(l)
              }
              return u && (B = E,
              D = v),
              m
          };
          return i ? r(s) : s
      }
      var _, w, T, S, C, A, x, O, D, I, L, k, N, P, j, R, H, q, M, F = "sizzle" + 1 * new Date, W = e.document, B = 0, U = 0, V = n(), z = n(), $ = n(), G = n(), K = function(e, t) {
          return e === t && (L = !0),
          0
      }, Q = {}.hasOwnProperty, X = [], Y = X.pop, J = X.push, Z = X.push, ee = X.slice, te = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
              if (e[n] === t)
                  return n;
          return -1
      }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", re = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", oe = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(re + "+","g"), le = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$","g"), ue = new RegExp("^" + re + "*," + re + "*"), ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), fe = new RegExp(re + "|>"), de = new RegExp(se), he = new RegExp("^" + ie + "$"), pe = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie + "|[*])"),
          ATTR: new RegExp("^" + oe),
          PSEUDO: new RegExp("^" + se),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)","i"),
          bool: new RegExp("^(?:" + ne + ")$","i"),
          needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)","i")
      }, me = /HTML$/i, ge = /^(?:input|select|textarea|button)$/i, ye = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ee = /[+~]/, _e = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)","ig"), we = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }, Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Se = function(e, t) {
          return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, Ce = function() {
          k()
      }, Ae = p(function(e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
      }, {
          dir: "parentNode",
          next: "legend"
      });
      try {
          Z.apply(X = ee.call(W.childNodes), W.childNodes),
          X[W.childNodes.length].nodeType
      } catch (xe) {
          Z = {
              apply: X.length ? function(e, t) {
                  J.apply(e, ee.call(t))
              }
              : function(e, t) {
                  for (var n = e.length, r = 0; e[n++] = t[r++]; )
                      ;
                  e.length = n - 1
              }
          }
      }
      for (_ in w = t.support = {},
      C = t.isXML = function(e) {
          var t = e.namespaceURI
            , n = (e.ownerDocument || e).documentElement;
          return !me.test(t || n && n.nodeName || "HTML")
      }
      ,
      k = t.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : W;
          return r !== N && 9 === r.nodeType && r.documentElement ? (P = (N = r).documentElement,
          j = !C(N),
          W !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
          w.attributes = i(function(e) {
              return e.className = "i",
              !e.getAttribute("className")
          }),
          w.getElementsByTagName = i(function(e) {
              return e.appendChild(N.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          w.getElementsByClassName = ve.test(N.getElementsByClassName),
          w.getById = i(function(e) {
              return P.appendChild(e).id = F,
              !N.getElementsByName || !N.getElementsByName(F).length
          }),
          w.getById ? (T.filter.ID = function(e) {
              var t = e.replace(_e, we);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }
          ,
          T.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && j) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
              }
          }
          ) : (T.filter.ID = function(e) {
              var t = e.replace(_e, we);
              return function(e) {
                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }
          ,
          T.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && j) {
                  var n, r, i, o = t.getElementById(e);
                  if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                      for (i = t.getElementsByName(e),
                      r = 0; o = i[r++]; )
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o]
                  }
                  return []
              }
          }
          ),
          T.find.TAG = w.getElementsByTagName ? function(e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
          }
          : function(e, t) {
              var n, r = [], i = 0, o = t.getElementsByTagName(e);
              if ("*" === e) {
                  for (; n = o[i++]; )
                      1 === n.nodeType && r.push(n);
                  return r
              }
              return o
          }
          ,
          T.find.CLASS = w.getElementsByClassName && function(e, t) {
              if ("undefined" != typeof t.getElementsByClassName && j)
                  return t.getElementsByClassName(e)
          }
          ,
          H = [],
          R = [],
          (w.qsa = ve.test(N.querySelectorAll)) && (i(function(e) {
              P.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
              e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + re + "*(?:''|\"\")"),
              e.querySelectorAll("[selected]").length || R.push("\\[" + re + "*(?:value|" + ne + ")"),
              e.querySelectorAll("[id~=" + F + "-]").length || R.push("~="),
              e.querySelectorAll(":checked").length || R.push(":checked"),
              e.querySelectorAll("a#" + F + "+*").length || R.push(".#.+[+~]")
          }),
          i(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = N.createElement("input");
              t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              e.querySelectorAll("[name=d]").length && R.push("name" + re + "*[*^$|!~]?="),
              2 !== e.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"),
              P.appendChild(e).disabled = !0,
              2 !== e.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"),
              e.querySelectorAll("*,:x"),
              R.push(",.*:")
          })),
          (w.matchesSelector = ve.test(q = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(e) {
              w.disconnectedMatch = q.call(e, "*"),
              q.call(e, "[s!='']:x"),
              H.push("!=", se)
          }),
          R = R.length && new RegExp(R.join("|")),
          H = H.length && new RegExp(H.join("|")),
          t = ve.test(P.compareDocumentPosition),
          M = t || ve.test(P.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e
                , r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          }
          : function(e, t) {
              if (t)
                  for (; t = t.parentNode; )
                      if (t === e)
                          return !0;
              return !1
          }
          ,
          K = t ? function(e, t) {
              if (e === t)
                  return L = !0,
                  0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === W && M(W, e) ? -1 : t === N || t.ownerDocument === W && M(W, t) ? 1 : I ? te(I, e) - te(I, t) : 0 : 4 & n ? -1 : 1)
          }
          : function(e, t) {
              if (e === t)
                  return L = !0,
                  0;
              var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], l = [t];
              if (!i || !o)
                  return e === N ? -1 : t === N ? 1 : i ? -1 : o ? 1 : I ? te(I, e) - te(I, t) : 0;
              if (i === o)
                  return s(e, t);
              for (n = e; n = n.parentNode; )
                  a.unshift(n);
              for (n = t; n = n.parentNode; )
                  l.unshift(n);
              for (; a[r] === l[r]; )
                  r++;
              return r ? s(a[r], l[r]) : a[r] === W ? -1 : l[r] === W ? 1 : 0
          }
          ,
          N) : N
      }
      ,
      t.matches = function(e, n) {
          return t(e, null, null, n)
      }
      ,
      t.matchesSelector = function(e, n) {
          if ((e.ownerDocument || e) !== N && k(e),
          w.matchesSelector && j && !G[n + " "] && (!H || !H.test(n)) && (!R || !R.test(n)))
              try {
                  var r = q.call(e, n);
                  if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                      return r
              } catch (xe) {
                  G(n, !0)
              }
          return t(n, N, null, [e]).length > 0
      }
      ,
      t.contains = function(e, t) {
          return (e.ownerDocument || e) !== N && k(e),
          M(e, t)
      }
      ,
      t.attr = function(e, t) {
          (e.ownerDocument || e) !== N && k(e);
          var n = T.attrHandle[t.toLowerCase()]
            , r = n && Q.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !j) : undefined;
          return r !== undefined ? r : w.attributes || !j ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }
      ,
      t.escape = function(e) {
          return (e + "").replace(Te, Se)
      }
      ,
      t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }
      ,
      t.uniqueSort = function(e) {
          var t, n = [], r = 0, i = 0;
          if (L = !w.detectDuplicates,
          I = !w.sortStable && e.slice(0),
          e.sort(K),
          L) {
              for (; t = e[i++]; )
                  t === e[i] && (r = n.push(i));
              for (; r--; )
                  e.splice(n[r], 1)
          }
          return I = null,
          e
      }
      ,
      S = t.getText = function(e) {
          var t, n = "", r = 0, i = e.nodeType;
          if (i) {
              if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent)
                      return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling)
                      n += S(e)
              } else if (3 === i || 4 === i)
                  return e.nodeValue
          } else
              for (; t = e[r++]; )
                  n += S(t);
          return n
      }
      ,
      (T = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: pe,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(_e, we),
                  e[3] = (e[3] || e[4] || e[5] || "").replace(_e, we),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(),
                  "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                  e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                  e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                  e[2] = n.slice(0, t)),
                  e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(_e, we).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = V[e + " "];
                  return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && V(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, n, r) {
                  return function(i) {
                      var o = t.attr(i, e);
                      return null == o ? "!=" === n : !n || (o += "",
                      "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                  }
              },
              CHILD: function(e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3)
                    , s = "last" !== e.slice(-4)
                    , a = "of-type" === t;
                  return 1 === r && 0 === i ? function(e) {
                      return !!e.parentNode
                  }
                  : function(t, n, l) {
                      var u, c, f, d, h, p, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, y = a && t.nodeName.toLowerCase(), v = !l && !a, b = !1;
                      if (g) {
                          if (o) {
                              for (; m; ) {
                                  for (d = t; d = d[m]; )
                                      if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)
                                          return !1;
                                  p = m = "only" === e && !p && "nextSibling"
                              }
                              return !0
                          }
                          if (p = [s ? g.firstChild : g.lastChild],
                          s && v) {
                              for (b = (h = (u = (c = (f = (d = g)[F] || (d[F] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === B && u[1]) && u[2],
                              d = h && g.childNodes[h]; d = ++h && d && d[m] || (b = h = 0) || p.pop(); )
                                  if (1 === d.nodeType && ++b && d === t) {
                                      c[e] = [B, h, b];
                                      break
                                  }
                          } else if (v && (b = h = (u = (c = (f = (d = t)[F] || (d[F] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === B && u[1]),
                          !1 === b)
                              for (; (d = ++h && d && d[m] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++b || (v && ((c = (f = d[F] || (d[F] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [B, b]),
                              d !== t)); )
                                  ;
                          return (b -= i) === r || b % r == 0 && b / r >= 0
                      }
                  }
              },
              PSEUDO: function(e, n) {
                  var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                  return o[F] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                  T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                      for (var r, i = o(e, n), s = i.length; s--; )
                          e[r = te(e, i[s])] = !(t[r] = i[s])
                  }) : function(e) {
                      return o(e, 0, i)
                  }
                  ) : o
              }
          },
          pseudos: {
              not: r(function(e) {
                  var t = []
                    , n = []
                    , i = x(e.replace(le, "$1"));
                  return i[F] ? r(function(e, t, n, r) {
                      for (var o, s = i(e, null, r, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o))
                  }) : function(e, r, o) {
                      return t[0] = e,
                      i(t, null, o, n),
                      t[0] = null,
                      !n.pop()
                  }
              }),
              has: r(function(e) {
                  return function(n) {
                      return t(e, n).length > 0
                  }
              }),
              contains: r(function(e) {
                  return e = e.replace(_e, we),
                  function(t) {
                      return (t.textContent || S(t)).indexOf(e) > -1
                  }
              }),
              lang: r(function(e) {
                  return he.test(e || "") || t.error("unsupported lang: " + e),
                  e = e.replace(_e, we).toLowerCase(),
                  function(t) {
                      var n;
                      do {
                          if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                              return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                  }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === P
              },
              focus: function(e) {
                  return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: u(!1),
              disabled: u(!0),
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                  !0 === e.selected
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(e) {
                  return !T.pseudos.empty(e)
              },
              header: function(e) {
                  return ye.test(e.nodeName)
              },
              input: function(e) {
                  return ge.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: c(function() {
                  return [0]
              }),
              last: c(function(e, t) {
                  return [t - 1]
              }),
              eq: c(function(e, t, n) {
                  return [n < 0 ? n + t : n]
              }),
              even: c(function(e, t) {
                  for (var n = 0; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              odd: c(function(e, t) {
                  for (var n = 1; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              lt: c(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                      e.push(r);
                  return e
              }),
              gt: c(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; )
                      e.push(r);
                  return e
              })
          }
      }).pseudos.nth = T.pseudos.eq,
      {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          T.pseudos[_] = a(_);
      for (_ in {
          submit: !0,
          reset: !0
      })
          T.pseudos[_] = l(_);
      return d.prototype = T.filters = T.pseudos,
      T.setFilters = new d,
      A = t.tokenize = function(e, n) {
          var r, i, o, s, a, l, u, c = z[e + " "];
          if (c)
              return n ? 0 : c.slice(0);
          for (a = e,
          l = [],
          u = T.preFilter; a; ) {
              for (s in r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a),
              l.push(o = [])),
              r = !1,
              (i = ce.exec(a)) && (r = i.shift(),
              o.push({
                  value: r,
                  type: i[0].replace(le, " ")
              }),
              a = a.slice(r.length)),
              T.filter)
                  !(i = pe[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(),
                  o.push({
                      value: r,
                      type: s,
                      matches: i
                  }),
                  a = a.slice(r.length));
              if (!r)
                  break
          }
          return n ? a.length : a ? t.error(e) : z(e, l).slice(0)
      }
      ,
      x = t.compile = function(e, t) {
          var n, r = [], i = [], o = $[e + " "];
          if (!o) {
              for (t || (t = A(e)),
              n = t.length; n--; )
                  (o = b(t[n]))[F] ? r.push(o) : i.push(o);
              (o = $(e, E(i, r))).selector = e
          }
          return o
      }
      ,
      O = t.select = function(e, t, n, r) {
          var i, o, s, a, l, u = "function" == typeof e && e, c = !r && A(e = u.selector || e);
          if (n = n || [],
          1 === c.length) {
              if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && j && T.relative[o[1].type]) {
                  if (!(t = (T.find.ID(s.matches[0].replace(_e, we), t) || [])[0]))
                      return n;
                  u && (t = t.parentNode),
                  e = e.slice(o.shift().value.length)
              }
              for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
              !T.relative[a = s.type]); )
                  if ((l = T.find[a]) && (r = l(s.matches[0].replace(_e, we), Ee.test(o[0].type) && f(t.parentNode) || t))) {
                      if (o.splice(i, 1),
                      !(e = r.length && h(o)))
                          return Z.apply(n, r),
                          n;
                      break
                  }
          }
          return (u || x(e, c))(r, t, !j, n, !t || Ee.test(e) && f(t.parentNode) || t),
          n
      }
      ,
      w.sortStable = F.split("").sort(K).join("") === F,
      w.detectDuplicates = !!L,
      k(),
      w.sortDetached = i(function(e) {
          return 1 & e.compareDocumentPosition(N.createElement("fieldset"))
      }),
      i(function(e) {
          return e.innerHTML = "<a href='#'></a>",
          "#" === e.firstChild.getAttribute("href")
      }) || o("type|href|height|width", function(e, t, n) {
          if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }),
      w.attributes && i(function(e) {
          return e.innerHTML = "<input/>",
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
      }) || o("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue
      }),
      i(function(e) {
          return null == e.getAttribute("disabled")
      }) || o(ne, function(e, t, n) {
          var r;
          if (!n)
              return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }),
      t
  }(e);
  Se.find = Ae,
  Se.expr = Ae.selectors,
  Se.expr[":"] = Se.expr.pseudos,
  Se.uniqueSort = Se.unique = Ae.uniqueSort,
  Se.text = Ae.getText,
  Se.isXMLDoc = Ae.isXML,
  Se.contains = Ae.contains,
  Se.escapeSelector = Ae.escape;
  var xe = function(e, t, n) {
      for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
              if (i && Se(e).is(n))
                  break;
              r.push(e)
          }
      return r
  }
    , Oe = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
      return n
  }
    , De = Se.expr.match.needsContext
    , Ie = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  Se.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType ? Se.find.matchesSelector(r, e) ? [r] : [] : Se.find.matches(e, Se.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }
  ,
  Se.fn.extend({
      find: function(e) {
          var t, n, r = this.length, i = this;
          if ("string" != typeof e)
              return this.pushStack(Se(e).filter(function() {
                  for (t = 0; t < r; t++)
                      if (Se.contains(i[t], this))
                          return !0
              }));
          for (n = this.pushStack([]),
          t = 0; t < r; t++)
              Se.find(e, i[t], n);
          return r > 1 ? Se.uniqueSort(n) : n
      },
      filter: function(e) {
          return this.pushStack(s(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(s(this, e || [], !0))
      },
      is: function(e) {
          return !!s(this, "string" == typeof e && De.test(e) ? Se(e) : e || [], !1).length
      }
  });
  var Le, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (Se.fn.init = function(e, t, n) {
      var r, i;
      if (!e)
          return this;
      if (n = n || Le,
      "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !r[1] && t)
              return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
              if (t = t instanceof Se ? t[0] : t,
              Se.merge(this, Se.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : le, !0)),
              Ie.test(r[1]) && Se.isPlainObject(t))
                  for (r in t)
                      Ee(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this
          }
          return (i = le.getElementById(r[2])) && (this[0] = i,
          this.length = 1),
          this
      }
      return e.nodeType ? (this[0] = e,
      this.length = 1,
      this) : Ee(e) ? n.ready !== undefined ? n.ready(e) : e(Se) : Se.makeArray(e, this)
  }
  ).prototype = Se.fn,
  Le = Se(le);
  var Ne = /^(?:parents|prev(?:Until|All))/
    , Pe = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  };
  Se.fn.extend({
      has: function(e) {
          var t = Se(e, this)
            , n = t.length;
          return this.filter(function() {
              for (var e = 0; e < n; e++)
                  if (Se.contains(this, t[e]))
                      return !0
          })
      },
      closest: function(e, t) {
          var n, r = 0, i = this.length, o = [], s = "string" != typeof e && Se(e);
          if (!De.test(e))
              for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Se.find.matchesSelector(n, e))) {
                          o.push(n);
                          break
                      }
          return this.pushStack(o.length > 1 ? Se.uniqueSort(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? he.call(Se(e), this[0]) : he.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(Se.uniqueSort(Se.merge(this.get(), Se(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }),
  Se.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return xe(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return xe(e, "parentNode", n)
      },
      next: function(e) {
          return a(e, "nextSibling")
      },
      prev: function(e) {
          return a(e, "previousSibling")
      },
      nextAll: function(e) {
          return xe(e, "nextSibling")
      },
      prevAll: function(e) {
          return xe(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return xe(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return xe(e, "previousSibling", n)
      },
      siblings: function(e) {
          return Oe((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return Oe(e.firstChild)
      },
      contents: function(e) {
          return "undefined" != typeof e.contentDocument ? e.contentDocument : (o(e, "template") && (e = e.content || e),
          Se.merge([], e.childNodes))
      }
  }, function(e, t) {
      Se.fn[e] = function(n, r) {
          var i = Se.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = Se.filter(r, i)),
          this.length > 1 && (Pe[e] || Se.uniqueSort(i),
          Ne.test(e) && i.reverse()),
          this.pushStack(i)
      }
  });
  var je = /[^\x20\t\r\n\f]+/g;
  Se.Callbacks = function(e) {
      e = "string" == typeof e ? l(e) : Se.extend({}, e);
      var t, n, i, o, s = [], a = [], u = -1, c = function() {
          for (o = o || e.once,
          i = t = !0; a.length; u = -1)
              for (n = a.shift(); ++u < s.length; )
                  !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && (u = s.length,
                  n = !1);
          e.memory || (n = !1),
          t = !1,
          o && (s = n ? [] : "")
      }, f = {
          add: function() {
              return s && (n && !t && (u = s.length - 1,
              a.push(n)),
              function i(t) {
                  Se.each(t, function(t, n) {
                      Ee(n) ? e.unique && f.has(n) || s.push(n) : n && n.length && "string" !== r(n) && i(n)
                  })
              }(arguments),
              n && !t && c()),
              this
          },
          remove: function() {
              return Se.each(arguments, function(e, t) {
                  for (var n; (n = Se.inArray(t, s, n)) > -1; )
                      s.splice(n, 1),
                      n <= u && u--
              }),
              this
          },
          has: function(e) {
              return e ? Se.inArray(e, s) > -1 : s.length > 0
          },
          empty: function() {
              return s && (s = []),
              this
          },
          disable: function() {
              return o = a = [],
              s = n = "",
              this
          },
          disabled: function() {
              return !s
          },
          lock: function() {
              return o = a = [],
              n || t || (s = n = ""),
              this
          },
          locked: function() {
              return !!o
          },
          fireWith: function(e, n) {
              return o || (n = [e, (n = n || []).slice ? n.slice() : n],
              a.push(n),
              t || c()),
              this
          },
          fire: function() {
              return f.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!i
          }
      };
      return f
  }
  ,
  Se.extend({
      Deferred: function(t) {
          var n = [["notify", "progress", Se.Callbacks("memory"), Se.Callbacks("memory"), 2], ["resolve", "done", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Se.Callbacks("once memory"), Se.Callbacks("once memory"), 1, "rejected"]]
            , r = "pending"
            , i = {
              state: function() {
                  return r
              },
              always: function() {
                  return o.done(arguments).fail(arguments),
                  this
              },
              "catch": function(e) {
                  return i.then(null, e)
              },
              pipe: function() {
                  var e = arguments;
                  return Se.Deferred(function(t) {
                      Se.each(n, function(n, r) {
                          var i = Ee(e[r[4]]) && e[r[4]];
                          o[r[1]](function() {
                              var e = i && i.apply(this, arguments);
                              e && Ee(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                          })
                      }),
                      e = null
                  }).promise()
              },
              then: function(t, r, i) {
                  function o(t, n, r, i) {
                      return function() {
                          var a = this
                            , l = arguments
                            , f = function() {
                              var e, f;
                              if (!(t < s)) {
                                  if ((e = r.apply(a, l)) === n.promise())
                                      throw new TypeError("Thenable self-resolution");
                                  f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                  Ee(f) ? i ? f.call(e, o(s, n, u, i), o(s, n, c, i)) : (s++,
                                  f.call(e, o(s, n, u, i), o(s, n, c, i), o(s, n, u, n.notifyWith))) : (r !== u && (a = undefined,
                                  l = [e]),
                                  (i || n.resolveWith)(a, l))
                              }
                          }
                            , d = i ? f : function() {
                              try {
                                  f()
                              } catch (e) {
                                  Se.Deferred.exceptionHook && Se.Deferred.exceptionHook(e, d.stackTrace),
                                  t + 1 >= s && (r !== c && (a = undefined,
                                  l = [e]),
                                  n.rejectWith(a, l))
                              }
                          }
                          ;
                          t ? d() : (Se.Deferred.getStackHook && (d.stackTrace = Se.Deferred.getStackHook()),
                          e.setTimeout(d))
                      }
                  }
                  var s = 0;
                  return Se.Deferred(function(e) {
                      n[0][3].add(o(0, e, Ee(i) ? i : u, e.notifyWith)),
                      n[1][3].add(o(0, e, Ee(t) ? t : u)),
                      n[2][3].add(o(0, e, Ee(r) ? r : c))
                  }).promise()
              },
              promise: function(e) {
                  return null != e ? Se.extend(e, i) : i
              }
          }
            , o = {};
          return Se.each(n, function(e, t) {
              var s = t[2]
                , a = t[5];
              i[t[1]] = s.add,
              a && s.add(function() {
                  r = a
              }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
              s.add(t[3].fire),
              o[t[0]] = function() {
                  return o[t[0] + "With"](this === o ? undefined : this, arguments),
                  this
              }
              ,
              o[t[0] + "With"] = s.fireWith
          }),
          i.promise(o),
          t && t.call(o, o),
          o
      },
      when: function(e) {
          var t = arguments.length
            , n = t
            , r = Array(n)
            , i = ce.call(arguments)
            , o = Se.Deferred()
            , s = function(e) {
              return function(n) {
                  r[e] = this,
                  i[e] = arguments.length > 1 ? ce.call(arguments) : n,
                  --t || o.resolveWith(r, i)
              }
          };
          if (t <= 1 && (f(e, o.done(s(n)).resolve, o.reject, !t),
          "pending" === o.state() || Ee(i[n] && i[n].then)))
              return o.then();
          for (; n--; )
              f(i[n], s(n), o.reject);
          return o.promise()
      }
  });
  var Re = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  Se.Deferred.exceptionHook = function(t, n) {
      e.console && e.console.warn && t && Re.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }
  ,
  Se.readyException = function(t) {
      e.setTimeout(function() {
          throw t
      })
  }
  ;
  var He = Se.Deferred();
  Se.fn.ready = function(e) {
      return He.then(e)["catch"](function(e) {
          Se.readyException(e)
      }),
      this
  }
  ,
  Se.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
          (!0 === e ? --Se.readyWait : Se.isReady) || (Se.isReady = !0,
          !0 !== e && --Se.readyWait > 0 || He.resolveWith(le, [Se]))
      }
  }),
  Se.ready.then = He.then,
  "complete" === le.readyState || "loading" !== le.readyState && !le.documentElement.doScroll ? e.setTimeout(Se.ready) : (le.addEventListener("DOMContentLoaded", d),
  e.addEventListener("load", d));
  var qe = function(e, t, n, i, o, s, a) {
      var l = 0
        , u = e.length
        , c = null == n;
      if ("object" === r(n))
          for (l in o = !0,
          n)
              qe(e, t, l, n[l], !0, s, a);
      else if (i !== undefined && (o = !0,
      Ee(i) || (a = !0),
      c && (a ? (t.call(e, i),
      t = null) : (c = t,
      t = function(e, t, n) {
          return c.call(Se(e), n)
      }
      )),
      t))
          for (; l < u; l++)
              t(e[l], n, a ? i : i.call(e[l], l, t(e[l], n)));
      return o ? e : c ? t.call(e) : u ? t(e[0], n) : s
  }
    , Me = /^-ms-/
    , Fe = /-([a-z])/g
    , We = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
  m.uid = 1,
  m.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {},
          We(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))),
          t
      },
      set: function(e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t)
              i[p(t)] = n;
          else
              for (r in t)
                  i[p(r)] = t[r];
          return i
      },
      get: function(e, t) {
          return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
      },
      access: function(e, t, n) {
          return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n),
          n !== undefined ? n : t)
      },
      remove: function(e, t) {
          var n, r = e[this.expando];
          if (r !== undefined) {
              if (t !== undefined) {
                  n = (t = Array.isArray(t) ? t.map(p) : (t = p(t))in r ? [t] : t.match(je) || []).length;
                  for (; n--; )
                      delete r[t[n]]
              }
              (t === undefined || Se.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
          }
      },
      hasData: function(e) {
          var t = e[this.expando];
          return t !== undefined && !Se.isEmptyObject(t)
      }
  };
  var Be = new m
    , Ue = new m
    , Ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , ze = /[A-Z]/g;
  Se.extend({
      hasData: function(e) {
          return Ue.hasData(e) || Be.hasData(e)
      },
      data: function(e, t, n) {
          return Ue.access(e, t, n)
      },
      removeData: function(e, t) {
          Ue.remove(e, t)
      },
      _data: function(e, t, n) {
          return Be.access(e, t, n)
      },
      _removeData: function(e, t) {
          Be.remove(e, t)
      }
  }),
  Se.fn.extend({
      data: function(e, t) {
          var n, r, i, o = this[0], s = o && o.attributes;
          if (e === undefined) {
              if (this.length && (i = Ue.get(o),
              1 === o.nodeType && !Be.get(o, "hasDataAttrs"))) {
                  for (n = s.length; n--; )
                      s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = p(r.slice(5)),
                      y(o, r, i[r]));
                  Be.set(o, "hasDataAttrs", !0)
              }
              return i
          }
          return "object" == typeof e ? this.each(function() {
              Ue.set(this, e)
          }) : qe(this, function(t) {
              var n;
              if (o && t === undefined)
                  return (n = Ue.get(o, e)) !== undefined ? n : (n = y(o, e)) !== undefined ? n : void 0;
              this.each(function() {
                  Ue.set(this, e, t)
              })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              Ue.remove(this, e)
          })
      }
  }),
  Se.extend({
      queue: function(e, t, n) {
          var r;
          if (e)
              return t = (t || "fx") + "queue",
              r = Be.get(e, t),
              n && (!r || Array.isArray(n) ? r = Be.access(e, t, Se.makeArray(n)) : r.push(n)),
              r || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = Se.queue(e, t)
            , r = n.length
            , i = n.shift()
            , o = Se._queueHooks(e, t)
            , s = function() {
              Se.dequeue(e, t)
          };
          "inprogress" === i && (i = n.shift(),
          r--),
          i && ("fx" === t && n.unshift("inprogress"),
          delete o.stop,
          i.call(e, s, o)),
          !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return Be.get(e, n) || Be.access(e, n, {
              empty: Se.Callbacks("once memory").add(function() {
                  Be.remove(e, [t + "queue", n])
              })
          })
      }
  }),
  Se.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e,
          e = "fx",
          n--),
          arguments.length < n ? Se.queue(this[0], e) : t === undefined ? this : this.each(function() {
              var n = Se.queue(this, e, t);
              Se._queueHooks(this, e),
              "fx" === e && "inprogress" !== n[0] && Se.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              Se.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1, i = Se.Deferred(), o = this, s = this.length, a = function() {
              --r || i.resolveWith(o, [o])
          };
          for ("string" != typeof e && (t = e,
          e = undefined),
          e = e || "fx"; s--; )
              (n = Be.get(o[s], e + "queueHooks")) && n.empty && (r++,
              n.empty.add(a));
          return a(),
          i.promise(t)
      }
  });
  var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , Ge = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$","i")
    , Ke = ["Top", "Right", "Bottom", "Left"]
    , Qe = le.documentElement
    , Xe = function(e) {
      return Se.contains(e.ownerDocument, e)
  }
    , Ye = {
      composed: !0
  };
  Qe.getRootNode && (Xe = function(e) {
      return Se.contains(e.ownerDocument, e) || e.getRootNode(Ye) === e.ownerDocument
  }
  );
  var Je = function(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && Xe(e) && "none" === Se.css(e, "display")
  }
    , Ze = function(e, t, n, r) {
      var i, o, s = {};
      for (o in t)
          s[o] = e.style[o],
          e.style[o] = t[o];
      for (o in i = n.apply(e, r || []),
      t)
          e.style[o] = s[o];
      return i
  }
    , et = {};
  Se.fn.extend({
      show: function() {
          return E(this, !0)
      },
      hide: function() {
          return E(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              Je(this) ? Se(this).show() : Se(this).hide()
          })
      }
  });
  var tt = /^(?:checkbox|radio)$/i
    , nt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
    , rt = /^$|^module$|\/(?:java|ecma)script/i
    , it = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };
  it.optgroup = it.option,
  it.tbody = it.tfoot = it.colgroup = it.caption = it.thead,
  it.th = it.td;
  var ot, st, at = /<|&#?\w+;/;
  ot = le.createDocumentFragment().appendChild(le.createElement("div")),
  (st = le.createElement("input")).setAttribute("type", "radio"),
  st.setAttribute("checked", "checked"),
  st.setAttribute("name", "t"),
  ot.appendChild(st),
  be.checkClone = ot.cloneNode(!0).cloneNode(!0).lastChild.checked,
  ot.innerHTML = "<textarea>x</textarea>",
  be.noCloneChecked = !!ot.cloneNode(!0).lastChild.defaultValue;
  var lt = /^key/
    , ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
    , ct = /^([^.]*)(?:\.(.+)|)/;
  Se.event = {
      global: {},
      add: function(e, t, n, r, i) {
          var o, s, a, l, u, c, f, d, h, p, m, g = Be.get(e);
          if (g)
              for (n.handler && (n = (o = n).handler,
              i = o.selector),
              i && Se.find.matchesSelector(Qe, i),
              n.guid || (n.guid = Se.guid++),
              (l = g.events) || (l = g.events = {}),
              (s = g.handle) || (s = g.handle = function(t) {
                  return void 0 !== Se && Se.event.triggered !== t.type ? Se.event.dispatch.apply(e, arguments) : undefined
              }
              ),
              u = (t = (t || "").match(je) || [""]).length; u--; )
                  h = m = (a = ct.exec(t[u]) || [])[1],
                  p = (a[2] || "").split(".").sort(),
                  h && (f = Se.event.special[h] || {},
                  h = (i ? f.delegateType : f.bindType) || h,
                  f = Se.event.special[h] || {},
                  c = Se.extend({
                      type: h,
                      origType: m,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && Se.expr.match.needsContext.test(i),
                      namespace: p.join(".")
                  }, o),
                  (d = l[h]) || ((d = l[h] = []).delegateCount = 0,
                  f.setup && !1 !== f.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(h, s)),
                  f.add && (f.add.call(e, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  Se.event.global[h] = !0)
      },
      remove: function(e, t, n, r, i) {
          var o, s, a, l, u, c, f, d, h, p, m, g = Be.hasData(e) && Be.get(e);
          if (g && (l = g.events)) {
              for (u = (t = (t || "").match(je) || [""]).length; u--; )
                  if (h = m = (a = ct.exec(t[u]) || [])[1],
                  p = (a[2] || "").split(".").sort(),
                  h) {
                      for (f = Se.event.special[h] || {},
                      d = l[h = (r ? f.delegateType : f.bindType) || h] || [],
                      a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      s = o = d.length; o--; )
                          c = d[o],
                          !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                          c.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, c));
                      s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || Se.removeEvent(e, h, g.handle),
                      delete l[h])
                  } else
                      for (h in l)
                          Se.event.remove(e, h + t[u], n, r, !0);
              Se.isEmptyObject(l) && Be.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var t, n, r, i, o, s, a = Se.event.fix(e), l = new Array(arguments.length), u = (Be.get(this, "events") || {})[a.type] || [], c = Se.event.special[a.type] || {};
          for (l[0] = a,
          t = 1; t < arguments.length; t++)
              l[t] = arguments[t];
          if (a.delegateTarget = this,
          !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
              for (s = Se.event.handlers.call(this, a, u),
              t = 0; (i = s[t++]) && !a.isPropagationStopped(); )
                  for (a.currentTarget = i.elem,
                  n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                      a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                      a.data = o.data,
                      (r = ((Se.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) !== undefined && !1 === (a.result = r) && (a.preventDefault(),
                      a.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, a),
              a.result
          }
      },
      handlers: function(e, t) {
          var n, r, i, o, s, a = [], l = t.delegateCount, u = e.target;
          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
              for (; u !== this; u = u.parentNode || this)
                  if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                      for (o = [],
                      s = {},
                      n = 0; n < l; n++)
                          s[i = (r = t[n]).selector + " "] === undefined && (s[i] = r.needsContext ? Se(i, this).index(u) > -1 : Se.find(i, this, null, [u]).length),
                          s[i] && o.push(r);
                      o.length && a.push({
                          elem: u,
                          handlers: o
                      })
                  }
          return u = this,
          l < t.length && a.push({
              elem: u,
              handlers: t.slice(l)
          }),
          a
      },
      addProp: function(e, t) {
          Object.defineProperty(Se.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: Ee(t) ? function() {
                  if (this.originalEvent)
                      return t(this.originalEvent)
              }
              : function() {
                  if (this.originalEvent)
                      return this.originalEvent[e]
              }
              ,
              set: function(t) {
                  Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t
                  })
              }
          })
      },
      fix: function(e) {
          return e[Se.expando] ? e : new Se.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          click: {
              setup: function(e) {
                  var t = this || e;
                  return tt.test(t.type) && t.click && o(t, "input") && D(t, "click", S),
                  !1
              },
              trigger: function(e) {
                  var t = this || e;
                  return tt.test(t.type) && t.click && o(t, "input") && D(t, "click"),
                  !0
              },
              _default: function(e) {
                  var t = e.target;
                  return tt.test(t.type) && t.click && o(t, "input") && Be.get(t, "click") || o(t, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  },
  Se.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }
  ,
  Se.Event = function(e, t) {
      if (!(this instanceof Se.Event))
          return new Se.Event(e,t);
      e && e.type ? (this.originalEvent = e,
      this.type = e.type,
      this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? S : C,
      this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
      this.currentTarget = e.currentTarget,
      this.relatedTarget = e.relatedTarget) : this.type = e,
      t && Se.extend(this, t),
      this.timeStamp = e && e.timeStamp || Date.now(),
      this[Se.expando] = !0
  }
  ,
  Se.Event.prototype = {
      constructor: Se.Event,
      isDefaultPrevented: C,
      isPropagationStopped: C,
      isImmediatePropagationStopped: C,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = S,
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = S,
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = S,
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
  },
  Se.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
          var t = e.button;
          return null == e.which && lt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && ut.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
  }, Se.event.addProp),
  Se.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      Se.event.special[e] = {
          setup: function() {
              return D(this, e, A),
              !1
          },
          trigger: function() {
              return D(this, e),
              !0
          },
          delegateType: t
      }
  }),
  Se.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      Se.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, r = this, i = e.relatedTarget, o = e.handleObj;
              return i && (i === r || Se.contains(r, i)) || (e.type = o.origType,
              n = o.handler.apply(this, arguments),
              e.type = t),
              n
          }
      }
  }),
  Se.fn.extend({
      on: function(e, t, n, r) {
          return O(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
          return O(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj)
              return r = e.handleObj,
              Se(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
              this;
          if ("object" == typeof e) {
              for (i in e)
                  this.off(i, t, e[i]);
              return this
          }
          return !1 !== t && "function" != typeof t || (n = t,
          t = undefined),
          !1 === n && (n = C),
          this.each(function() {
              Se.event.remove(this, e, n, t)
          })
      }
  });
  var ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
    , dt = /<script|<style|<link/i
    , ht = /checked\s*(?:[^=]|=\s*.checked.)/i
    , pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  Se.extend({
      htmlPrefilter: function(e) {
          return e.replace(ft, "<$1></$2>")
      },
      clone: function(e, t, n) {
          var r, i, o, s, a = e.cloneNode(!0), l = Xe(e);
          if (!(be.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Se.isXMLDoc(e)))
              for (s = _(a),
              r = 0,
              i = (o = _(e)).length; r < i; r++)
                  P(o[r], s[r]);
          if (t)
              if (n)
                  for (o = o || _(e),
                  s = s || _(a),
                  r = 0,
                  i = o.length; r < i; r++)
                      N(o[r], s[r]);
              else
                  N(e, a);
          return (s = _(a, "script")).length > 0 && w(s, !l && _(e, "script")),
          a
      },
      cleanData: function(e) {
          for (var t, n, r, i = Se.event.special, o = 0; (n = e[o]) !== undefined; o++)
              if (We(n)) {
                  if (t = n[Be.expando]) {
                      if (t.events)
                          for (r in t.events)
                              i[r] ? Se.event.remove(n, r) : Se.removeEvent(n, r, t.handle);
                      n[Be.expando] = undefined
                  }
                  n[Ue.expando] && (n[Ue.expando] = undefined)
              }
      }
  }),
  Se.fn.extend({
      detach: function(e) {
          return R(this, e, !0)
      },
      remove: function(e) {
          return R(this, e)
      },
      text: function(e) {
          return qe(this, function(e) {
              return e === undefined ? Se.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return j(this, arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || I(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return j(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = I(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return j(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return j(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (Se.cleanData(_(e, !1)),
              e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e,
          t = null == t ? e : t,
          this.map(function() {
              return Se.clone(this, e, t)
          })
      },
      html: function(e) {
          return qe(this, function(e) {
              var t = this[0] || {}
                , n = 0
                , r = this.length;
              if (e === undefined && 1 === t.nodeType)
                  return t.innerHTML;
              if ("string" == typeof e && !dt.test(e) && !it[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = Se.htmlPrefilter(e);
                  try {
                      for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType && (Se.cleanData(_(t, !1)),
                          t.innerHTML = e);
                      t = 0
                  } catch (i) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = [];
          return j(this, arguments, function(t) {
              var n = this.parentNode;
              Se.inArray(this, e) < 0 && (Se.cleanData(_(this)),
              n && n.replaceChild(t, this))
          }, e)
      }
  }),
  Se.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      Se.fn[e] = function(e) {
          for (var n, r = [], i = Se(e), o = i.length - 1, s = 0; s <= o; s++)
              n = s === o ? this : this.clone(!0),
              Se(i[s])[t](n),
              de.apply(r, n.get());
          return this.pushStack(r)
      }
  });
  var mt = new RegExp("^(" + $e + ")(?!px)[a-z%]+$","i")
    , gt = function(t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e),
      n.getComputedStyle(t)
  }
    , yt = new RegExp(Ke.join("|"),"i");
  !function() {
      function t() {
          if (u) {
              l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
              u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
              Qe.appendChild(l).appendChild(u);
              var t = e.getComputedStyle(u);
              r = "1%" !== t.top,
              a = 12 === n(t.marginLeft),
              u.style.right = "60%",
              s = 36 === n(t.right),
              i = 36 === n(t.width),
              u.style.position = "absolute",
              o = 12 === n(u.offsetWidth / 3),
              Qe.removeChild(l),
              u = null
          }
      }
      function n(e) {
          return Math.round(parseFloat(e))
      }
      var r, i, o, s, a, l = le.createElement("div"), u = le.createElement("div");
      u.style && (u.style.backgroundClip = "content-box",
      u.cloneNode(!0).style.backgroundClip = "",
      be.clearCloneStyle = "content-box" === u.style.backgroundClip,
      Se.extend(be, {
          boxSizingReliable: function() {
              return t(),
              i
          },
          pixelBoxStyles: function() {
              return t(),
              s
          },
          pixelPosition: function() {
              return t(),
              r
          },
          reliableMarginLeft: function() {
              return t(),
              a
          },
          scrollboxSize: function() {
              return t(),
              o
          }
      }))
  }();
  var vt = ["Webkit", "Moz", "ms"]
    , bt = le.createElement("div").style
    , Et = {}
    , _t = /^(none|table(?!-c[ea]).+)/
    , wt = /^--/
    , Tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , St = {
      letterSpacing: "0",
      fontWeight: "400"
  };
  Se.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = H(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, o, s, a = p(t), l = wt.test(t), u = e.style;
              if (l || (t = F(a)),
              s = Se.cssHooks[t] || Se.cssHooks[a],
              n === undefined)
                  return s && "get"in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t];
              "string" === (o = typeof n) && (i = Ge.exec(n)) && i[1] && (n = v(e, t, i),
              o = "number"),
              null != n && n == n && ("number" !== o || l || (n += i && i[3] || (Se.cssNumber[a] ? "" : "px")),
              be.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
              s && "set"in s && (n = s.set(e, n, r)) === undefined || (l ? u.setProperty(t, n) : u[t] = n))
          }
      },
      css: function(e, t, n, r) {
          var i, o, s, a = p(t);
          return wt.test(t) || (t = F(a)),
          (s = Se.cssHooks[t] || Se.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
          i === undefined && (i = H(e, t, r)),
          "normal" === i && t in St && (i = St[t]),
          "" === n || n ? (o = parseFloat(i),
          !0 === n || isFinite(o) ? o || 0 : i) : i
      }
  }),
  Se.each(["height", "width"], function(e, t) {
      Se.cssHooks[t] = {
          get: function(e, n, r) {
              if (n)
                  return !_t.test(Se.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? U(e, t, r) : Ze(e, Tt, function() {
                      return U(e, t, r)
                  })
          },
          set: function(e, n, r) {
              var i, o = gt(e), s = !be.scrollboxSize() && "absolute" === o.position, a = (s || r) && "border-box" === Se.css(e, "boxSizing", !1, o), l = r ? B(e, t, r, a, o) : 0;
              return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - B(e, t, "border", !1, o) - .5)),
              l && (i = Ge.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
              n = Se.css(e, t)),
              W(e, n, l)
          }
      }
  }),
  Se.cssHooks.marginLeft = q(be.reliableMarginLeft, function(e, t) {
      if (t)
          return (parseFloat(H(e, "marginLeft")) || e.getBoundingClientRect().left - Ze(e, {
              marginLeft: 0
          }, function() {
              return e.getBoundingClientRect().left
          })) + "px"
  }),
  Se.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      Se.cssHooks[e + t] = {
          expand: function(n) {
              for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                  i[e + Ke[r] + t] = o[r] || o[r - 2] || o[0];
              return i
          }
      },
      "margin" !== e && (Se.cssHooks[e + t].set = W)
  }),
  Se.fn.extend({
      css: function(e, t) {
          return qe(this, function(e, t, n) {
              var r, i, o = {}, s = 0;
              if (Array.isArray(t)) {
                  for (r = gt(e),
                  i = t.length; s < i; s++)
                      o[t[s]] = Se.css(e, t[s], !1, r);
                  return o
              }
              return n !== undefined ? Se.style(e, t, n) : Se.css(e, t)
          }, e, t, arguments.length > 1)
      }
  }),
  Se.Tween = V,
  V.prototype = {
      constructor: V,
      init: function(e, t, n, r, i, o) {
          this.elem = e,
          this.prop = n,
          this.easing = i || Se.easing._default,
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = r,
          this.unit = o || (Se.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = V.propHooks[this.prop];
          return e && e.get ? e.get(this) : V.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = V.propHooks[this.prop];
          return this.options.duration ? this.pos = t = Se.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
          this.now = (this.end - this.start) * t + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : V.propHooks._default.set(this),
          this
      }
  },
  V.prototype.init.prototype = V.prototype,
  V.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Se.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
              Se.fx.step[e.prop] ? Se.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Se.cssHooks[e.prop] && null == e.elem.style[F(e.prop)] ? e.elem[e.prop] = e.now : Se.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  },
  V.propHooks.scrollTop = V.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  },
  Se.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  },
  Se.fx = V.prototype.init,
  Se.fx.step = {};
  var Ct, At, xt = /^(?:toggle|show|hide)$/, Ot = /queueHooks$/;
  Se.Animation = Se.extend(Y, {
      tweeners: {
          "*": [function(e, t) {
              var n = this.createTween(e, t);
              return v(n.elem, e, Ge.exec(t), n),
              n
          }
          ]
      },
      tweener: function(e, t) {
          Ee(e) ? (t = e,
          e = ["*"]) : e = e.match(je);
          for (var n, r = 0, i = e.length; r < i; r++)
              n = e[r],
              Y.tweeners[n] = Y.tweeners[n] || [],
              Y.tweeners[n].unshift(t)
      },
      prefilters: [Q],
      prefilter: function(e, t) {
          t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
      }
  }),
  Se.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? Se.extend({}, e) : {
          complete: n || !n && t || Ee(e) && e,
          duration: e,
          easing: n && t || t && !Ee(t) && t
      };
      return Se.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Se.fx.speeds ? r.duration = Se.fx.speeds[r.duration] : r.duration = Se.fx.speeds._default),
      null != r.queue && !0 !== r.queue || (r.queue = "fx"),
      r.old = r.complete,
      r.complete = function() {
          Ee(r.old) && r.old.call(this),
          r.queue && Se.dequeue(this, r.queue)
      }
      ,
      r
  }
  ,
  Se.fn.extend({
      fadeTo: function(e, t, n, r) {
          return this.filter(Je).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, r)
      },
      animate: function(e, t, n, r) {
          var i = Se.isEmptyObject(e)
            , o = Se.speed(t, n, r)
            , s = function() {
              var t = Y(this, Se.extend({}, e), o);
              (i || Be.get(this, "finish")) && t.stop(!0)
          };
          return s.finish = s,
          i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, n) {
          var r = function(e) {
              var t = e.stop;
              delete e.stop,
              t(n)
          };
          return "string" != typeof e && (n = t,
          t = e,
          e = undefined),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function() {
              var t = !0
                , i = null != e && e + "queueHooks"
                , o = Se.timers
                , s = Be.get(this);
              if (i)
                  s[i] && s[i].stop && r(s[i]);
              else
                  for (i in s)
                      s[i] && s[i].stop && Ot.test(i) && r(s[i]);
              for (i = o.length; i--; )
                  o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                  t = !1,
                  o.splice(i, 1));
              !t && n || Se.dequeue(this, e)
          })
      },
      finish: function(e) {
          return !1 !== e && (e = e || "fx"),
          this.each(function() {
              var t, n = Be.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Se.timers, s = r ? r.length : 0;
              for (n.finish = !0,
              Se.queue(this, e, []),
              i && i.stop && i.stop.call(this, !0),
              t = o.length; t--; )
                  o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                  o.splice(t, 1));
              for (t = 0; t < s; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish
          })
      }
  }),
  Se.each(["toggle", "show", "hide"], function(e, t) {
      var n = Se.fn[t];
      Se.fn[t] = function(e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, r, i)
      }
  }),
  Se.each({
      slideDown: G("show"),
      slideUp: G("hide"),
      slideToggle: G("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, t) {
      Se.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r)
      }
  }),
  Se.timers = [],
  Se.fx.tick = function() {
      var e, t = 0, n = Se.timers;
      for (Ct = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || Se.fx.stop(),
      Ct = undefined
  }
  ,
  Se.fx.timer = function(e) {
      Se.timers.push(e),
      Se.fx.start()
  }
  ,
  Se.fx.interval = 13,
  Se.fx.start = function() {
      At || (At = !0,
      z())
  }
  ,
  Se.fx.stop = function() {
      At = null
  }
  ,
  Se.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  Se.fn.delay = function(t, n) {
      return t = Se.fx && Se.fx.speeds[t] || t,
      n = n || "fx",
      this.queue(n, function(n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function() {
              e.clearTimeout(i)
          }
      })
  }
  ,
  function() {
      var e = le.createElement("input")
        , t = le.createElement("select").appendChild(le.createElement("option"));
      e.type = "checkbox",
      be.checkOn = "" !== e.value,
      be.optSelected = t.selected,
      (e = le.createElement("input")).value = "t",
      e.type = "radio",
      be.radioValue = "t" === e.value
  }();
  var Dt, It = Se.expr.attrHandle;
  Se.fn.extend({
      attr: function(e, t) {
          return qe(this, Se.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              Se.removeAttr(this, e)
          })
      }
  }),
  Se.extend({
      attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" == typeof e.getAttribute ? Se.prop(e, t, n) : (1 === o && Se.isXMLDoc(e) || (i = Se.attrHooks[t.toLowerCase()] || (Se.expr.match.bool.test(t) ? Dt : undefined)),
              n !== undefined ? null === n ? void Se.removeAttr(e, t) : i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""),
              n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = Se.find.attr(e, t)) ? undefined : r)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!be.radioValue && "radio" === t && o(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t),
                      n && (e.value = n),
                      t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, r = 0, i = t && t.match(je);
          if (i && 1 === e.nodeType)
              for (; n = i[r++]; )
                  e.removeAttribute(n)
      }
  }),
  Dt = {
      set: function(e, t, n) {
          return !1 === t ? Se.removeAttr(e, n) : e.setAttribute(n, n),
          n
      }
  },
  Se.each(Se.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = It[t] || Se.find.attr;
      It[t] = function(e, t, r) {
          var i, o, s = t.toLowerCase();
          return r || (o = It[s],
          It[s] = i,
          i = null != n(e, t, r) ? s : null,
          It[s] = o),
          i
      }
  });
  var Lt = /^(?:input|select|textarea|button)$/i
    , kt = /^(?:a|area)$/i;
  Se.fn.extend({
      prop: function(e, t) {
          return qe(this, Se.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[Se.propFix[e] || e]
          })
      }
  }),
  Se.extend({
      prop: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
              return 1 === o && Se.isXMLDoc(e) || (t = Se.propFix[t] || t,
              i = Se.propHooks[t]),
              n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = Se.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : Lt.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  }),
  be.optSelected || (Se.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex,
          null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex,
          t.parentNode && t.parentNode.selectedIndex)
      }
  }),
  Se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      Se.propFix[this.toLowerCase()] = this
  }),
  Se.fn.extend({
      addClass: function(e) {
          var t, n, r, i, o, s, a, l = 0;
          if (Ee(e))
              return this.each(function(t) {
                  Se(this).addClass(e.call(this, t, Z(this)))
              });
          if ((t = ee(e)).length)
              for (; n = this[l++]; )
                  if (i = Z(n),
                  r = 1 === n.nodeType && " " + J(i) + " ") {
                      for (s = 0; o = t[s++]; )
                          r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (a = J(r)) && n.setAttribute("class", a)
                  }
          return this
      },
      removeClass: function(e) {
          var t, n, r, i, o, s, a, l = 0;
          if (Ee(e))
              return this.each(function(t) {
                  Se(this).removeClass(e.call(this, t, Z(this)))
              });
          if (!arguments.length)
              return this.attr("class", "");
          if ((t = ee(e)).length)
              for (; n = this[l++]; )
                  if (i = Z(n),
                  r = 1 === n.nodeType && " " + J(i) + " ") {
                      for (s = 0; o = t[s++]; )
                          for (; r.indexOf(" " + o + " ") > -1; )
                              r = r.replace(" " + o + " ", " ");
                      i !== (a = J(r)) && n.setAttribute("class", a)
                  }
          return this
      },
      toggleClass: function(e, t) {
          var n = typeof e
            , r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : Ee(e) ? this.each(function(n) {
              Se(this).toggleClass(e.call(this, n, Z(this), t), t)
          }) : this.each(function() {
              var t, i, o, s;
              if (r)
                  for (i = 0,
                  o = Se(this),
                  s = ee(e); t = s[i++]; )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                  e !== undefined && "boolean" !== n || ((t = Z(this)) && Be.set(this, "__className__", t),
                  this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Be.get(this, "__className__") || ""))
          })
      },
      hasClass: function(e) {
          var t, n, r = 0;
          for (t = " " + e + " "; n = this[r++]; )
              if (1 === n.nodeType && (" " + J(Z(n)) + " ").indexOf(t) > -1)
                  return !0;
          return !1
      }
  });
  var Nt = /\r/g;
  Se.fn.extend({
      val: function(e) {
          var t, n, r, i = this[0];
          return arguments.length ? (r = Ee(e),
          this.each(function(n) {
              var i;
              1 === this.nodeType && (null == (i = r ? e.call(this, n, Se(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Se.map(i, function(e) {
                  return null == e ? "" : e + ""
              })),
              (t = Se.valHooks[this.type] || Se.valHooks[this.nodeName.toLowerCase()]) && "set"in t && t.set(this, i, "value") !== undefined || (this.value = i))
          })) : i ? (t = Se.valHooks[i.type] || Se.valHooks[i.nodeName.toLowerCase()]) && "get"in t && (n = t.get(i, "value")) !== undefined ? n : "string" == typeof (n = i.value) ? n.replace(Nt, "") : null == n ? "" : n : void 0
      }
  }),
  Se.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = Se.find.attr(e, "value");
                  return null != t ? t : J(Se.text(e))
              }
          },
          select: {
              get: function(e) {
                  var t, n, r, i = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [], u = a ? s + 1 : i.length;
                  for (r = s < 0 ? u : a ? s : 0; r < u; r++)
                      if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                          if (t = Se(n).val(),
                          a)
                              return t;
                          l.push(t)
                      }
                  return l
              },
              set: function(e, t) {
                  for (var n, r, i = e.options, o = Se.makeArray(t), s = i.length; s--; )
                      ((r = i[s]).selected = Se.inArray(Se.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1),
                  o
              }
          }
      }
  }),
  Se.each(["radio", "checkbox"], function() {
      Se.valHooks[this] = {
          set: function(e, t) {
              if (Array.isArray(t))
                  return e.checked = Se.inArray(Se(e).val(), t) > -1
          }
      },
      be.checkOn || (Se.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      }
      )
  }),
  be.focusin = "onfocusin"in e;
  var Pt = /^(?:focusinfocus|focusoutblur)$/
    , jt = function(e) {
      e.stopPropagation()
  };
  Se.extend(Se.event, {
      trigger: function(t, n, r, i) {
          var o, s, a, l, u, c, f, d, h = [r || le], p = ge.call(t, "type") ? t.type : t, m = ge.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = d = a = r = r || le,
          3 !== r.nodeType && 8 !== r.nodeType && !Pt.test(p + Se.event.triggered) && (p.indexOf(".") > -1 && (p = (m = p.split(".")).shift(),
          m.sort()),
          u = p.indexOf(":") < 0 && "on" + p,
          (t = t[Se.expando] ? t : new Se.Event(p,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
          t.namespace = m.join("."),
          t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          t.result = undefined,
          t.target || (t.target = r),
          n = null == n ? [t] : Se.makeArray(n, [t]),
          f = Se.event.special[p] || {},
          i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
              if (!i && !f.noBubble && !_e(r)) {
                  for (l = f.delegateType || p,
                  Pt.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                      h.push(s),
                      a = s;
                  a === (r.ownerDocument || le) && h.push(a.defaultView || a.parentWindow || e)
              }
              for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); )
                  d = s,
                  t.type = o > 1 ? l : f.bindType || p,
                  (c = (Be.get(s, "events") || {})[t.type] && Be.get(s, "handle")) && c.apply(s, n),
                  (c = u && s[u]) && c.apply && We(s) && (t.result = c.apply(s, n),
                  !1 === t.result && t.preventDefault());
              return t.type = p,
              i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), n) || !We(r) || u && Ee(r[p]) && !_e(r) && ((a = r[u]) && (r[u] = null),
              Se.event.triggered = p,
              t.isPropagationStopped() && d.addEventListener(p, jt),
              r[p](),
              t.isPropagationStopped() && d.removeEventListener(p, jt),
              Se.event.triggered = undefined,
              a && (r[u] = a)),
              t.result
          }
      },
      simulate: function(e, t, n) {
          var r = Se.extend(new Se.Event, n, {
              type: e,
              isSimulated: !0
          });
          Se.event.trigger(r, null, t)
      }
  }),
  Se.fn.extend({
      trigger: function(e, t) {
          return this.each(function() {
              Se.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n)
              return Se.event.trigger(e, t, n, !0)
      }
  }),
  be.focusin || Se.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var n = function(e) {
          Se.event.simulate(t, e.target, Se.event.fix(e))
      };
      Se.event.special[t] = {
          setup: function() {
              var r = this.ownerDocument || this
                , i = Be.access(r, t);
              i || r.addEventListener(e, n, !0),
              Be.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
              var r = this.ownerDocument || this
                , i = Be.access(r, t) - 1;
              i ? Be.access(r, t, i) : (r.removeEventListener(e, n, !0),
              Be.remove(r, t))
          }
      }
  });
  var Rt = e.location
    , Ht = Date.now()
    , qt = /\?/;
  Se.parseXML = function(t) {
      var n;
      if (!t || "string" != typeof t)
          return null;
      try {
          n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (r) {
          n = undefined
      }
      return n && !n.getElementsByTagName("parsererror").length || Se.error("Invalid XML: " + t),
      n
  }
  ;
  var Mt = /\[\]$/
    , Ft = /\r?\n/g
    , Wt = /^(?:submit|button|image|reset|file)$/i
    , Bt = /^(?:input|select|textarea|keygen)/i;
  Se.param = function(e, t) {
      var n, r = [], i = function(e, t) {
          var n = Ee(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
      if (null == e)
          return "";
      if (Array.isArray(e) || e.jquery && !Se.isPlainObject(e))
          Se.each(e, function() {
              i(this.name, this.value)
          });
      else
          for (n in e)
              te(n, e[n], t, i);
      return r.join("&")
  }
  ,
  Se.fn.extend({
      serialize: function() {
          return Se.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = Se.prop(this, "elements");
              return e ? Se.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !Se(this).is(":disabled") && Bt.test(this.nodeName) && !Wt.test(e) && (this.checked || !tt.test(e))
          }).map(function(e, t) {
              var n = Se(this).val();
              return null == n ? null : Array.isArray(n) ? Se.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Ft, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(Ft, "\r\n")
              }
          }).get()
      }
  });
  var Ut = /%20/g
    , Vt = /#.*$/
    , zt = /([?&])_=[^&]*/
    , $t = /^(.*?):[ \t]*([^\r\n]*)$/gm
    , Gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    , Kt = /^(?:GET|HEAD)$/
    , Qt = /^\/\//
    , Xt = {}
    , Yt = {}
    , Jt = "*/".concat("*")
    , Zt = le.createElement("a");
  Zt.href = Rt.href,
  Se.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: Rt.href,
          type: "GET",
          isLocal: Gt.test(Rt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": Jt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": Se.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? ie(ie(e, Se.ajaxSettings), t) : ie(Se.ajaxSettings, e)
      },
      ajaxPrefilter: ne(Xt),
      ajaxTransport: ne(Yt),
      ajax: function(t, n) {
          function r(t, n, r, a) {
              var u, d, h, E, _, w = n;
              c || (c = !0,
              l && e.clearTimeout(l),
              i = undefined,
              s = a || "",
              T.readyState = t > 0 ? 4 : 0,
              u = t >= 200 && t < 300 || 304 === t,
              r && (E = oe(p, T, r)),
              E = se(p, E, T, u),
              u ? (p.ifModified && ((_ = T.getResponseHeader("Last-Modified")) && (Se.lastModified[o] = _),
              (_ = T.getResponseHeader("etag")) && (Se.etag[o] = _)),
              204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = E.state,
              d = E.data,
              u = !(h = E.error))) : (h = w,
              !t && w || (w = "error",
              t < 0 && (t = 0))),
              T.status = t,
              T.statusText = (n || w) + "",
              u ? y.resolveWith(m, [d, w, T]) : y.rejectWith(m, [T, w, h]),
              T.statusCode(b),
              b = undefined,
              f && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, p, u ? d : h]),
              v.fireWith(m, [T, w]),
              f && (g.trigger("ajaxComplete", [T, p]),
              --Se.active || Se.event.trigger("ajaxStop")))
          }
          "object" == typeof t && (n = t,
          t = undefined),
          n = n || {};
          var i, o, s, a, l, u, c, f, d, h, p = Se.ajaxSetup({}, n), m = p.context || p, g = p.context && (m.nodeType || m.jquery) ? Se(m) : Se.event, y = Se.Deferred(), v = Se.Callbacks("once memory"), b = p.statusCode || {}, E = {}, _ = {}, w = "canceled", T = {
              readyState: 0,
              getResponseHeader: function(e) {
                  var t;
                  if (c) {
                      if (!a)
                          for (a = {}; t = $t.exec(s); )
                              a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                      t = a[e.toLowerCase() + " "]
                  }
                  return null == t ? null : t.join(", ")
              },
              getAllResponseHeaders: function() {
                  return c ? s : null
              },
              setRequestHeader: function(e, t) {
                  return null == c && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e,
                  E[e] = t),
                  this
              },
              overrideMimeType: function(e) {
                  return null == c && (p.mimeType = e),
                  this
              },
              statusCode: function(e) {
                  var t;
                  if (e)
                      if (c)
                          T.always(e[T.status]);
                      else
                          for (t in e)
                              b[t] = [b[t], e[t]];
                  return this
              },
              abort: function(e) {
                  var t = e || w;
                  return i && i.abort(t),
                  r(0, t),
                  this
              }
          };
          if (y.promise(T),
          p.url = ((t || p.url || Rt.href) + "").replace(Qt, Rt.protocol + "//"),
          p.type = n.method || n.type || p.method || p.type,
          p.dataTypes = (p.dataType || "*").toLowerCase().match(je) || [""],
          null == p.crossDomain) {
              u = le.createElement("a");
              try {
                  u.href = p.url,
                  u.href = u.href,
                  p.crossDomain = Zt.protocol + "//" + Zt.host != u.protocol + "//" + u.host
              } catch (S) {
                  p.crossDomain = !0
              }
          }
          if (p.data && p.processData && "string" != typeof p.data && (p.data = Se.param(p.data, p.traditional)),
          re(Xt, p, n, T),
          c)
              return T;
          for (d in (f = Se.event && p.global) && 0 == Se.active++ && Se.event.trigger("ajaxStart"),
          p.type = p.type.toUpperCase(),
          p.hasContent = !Kt.test(p.type),
          o = p.url.replace(Vt, ""),
          p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ut, "+")) : (h = p.url.slice(o.length),
          p.data && (p.processData || "string" == typeof p.data) && (o += (qt.test(o) ? "&" : "?") + p.data,
          delete p.data),
          !1 === p.cache && (o = o.replace(zt, "$1"),
          h = (qt.test(o) ? "&" : "?") + "_=" + Ht++ + h),
          p.url = o + h),
          p.ifModified && (Se.lastModified[o] && T.setRequestHeader("If-Modified-Since", Se.lastModified[o]),
          Se.etag[o] && T.setRequestHeader("If-None-Match", Se.etag[o])),
          (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
          T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Jt + "; q=0.01" : "") : p.accepts["*"]),
          p.headers)
              T.setRequestHeader(d, p.headers[d]);
          if (p.beforeSend && (!1 === p.beforeSend.call(m, T, p) || c))
              return T.abort();
          if (w = "abort",
          v.add(p.complete),
          T.done(p.success),
          T.fail(p.error),
          i = re(Yt, p, n, T)) {
              if (T.readyState = 1,
              f && g.trigger("ajaxSend", [T, p]),
              c)
                  return T;
              p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                  T.abort("timeout")
              }, p.timeout));
              try {
                  c = !1,
                  i.send(E, r)
              } catch (S) {
                  if (c)
                      throw S;
                  r(-1, S)
              }
          } else
              r(-1, "No Transport");
          return T
      },
      getJSON: function(e, t, n) {
          return Se.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return Se.get(e, undefined, t, "script")
      }
  }),
  Se.each(["get", "post"], function(e, t) {
      Se[t] = function(e, n, r, i) {
          return Ee(n) && (i = i || r,
          r = n,
          n = undefined),
          Se.ajax(Se.extend({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
          }, Se.isPlainObject(e) && e))
      }
  }),
  Se._evalUrl = function(e, t) {
      return Se.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
              "text script": function() {}
          },
          dataFilter: function(e) {
              Se.globalEval(e, t)
          }
      })
  }
  ,
  Se.fn.extend({
      wrapAll: function(e) {
          var t;
          return this[0] && (Ee(e) && (e = e.call(this[0])),
          t = Se(e, this[0].ownerDocument).eq(0).clone(!0),
          this[0].parentNode && t.insertBefore(this[0]),
          t.map(function() {
              for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
              return e
          }).append(this)),
          this
      },
      wrapInner: function(e) {
          return Ee(e) ? this.each(function(t) {
              Se(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = Se(this)
                , n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = Ee(e);
          return this.each(function(n) {
              Se(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
              Se(this).replaceWith(this.childNodes)
          }),
          this
      }
  }),
  Se.expr.pseudos.hidden = function(e) {
      return !Se.expr.pseudos.visible(e)
  }
  ,
  Se.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }
  ,
  Se.ajaxSettings.xhr = function() {
      try {
          return new e.XMLHttpRequest
      } catch (t) {}
  }
  ;
  var en = {
      0: 200,
      1223: 204
  }
    , tn = Se.ajaxSettings.xhr();
  be.cors = !!tn && "withCredentials"in tn,
  be.ajax = tn = !!tn,
  Se.ajaxTransport(function(t) {
      var n, r;
      if (be.cors || tn && !t.crossDomain)
          return {
              send: function(i, o) {
                  var s, a = t.xhr();
                  if (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                      for (s in t.xhrFields)
                          a[s] = t.xhrFields[s];
                  for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                  t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                  i)
                      a.setRequestHeader(s, i[s]);
                  n = function(e) {
                      return function() {
                          n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                          "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(en[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                              binary: a.response
                          } : {
                              text: a.responseText
                          }, a.getAllResponseHeaders()))
                      }
                  }
                  ,
                  a.onload = n(),
                  r = a.onerror = a.ontimeout = n("error"),
                  a.onabort !== undefined ? a.onabort = r : a.onreadystatechange = function() {
                      4 === a.readyState && e.setTimeout(function() {
                          n && r()
                      })
                  }
                  ,
                  n = n("abort");
                  try {
                      a.send(t.hasContent && t.data || null)
                  } catch (l) {
                      if (n)
                          throw l
                  }
              },
              abort: function() {
                  n && n()
              }
          }
  }),
  Se.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
  }),
  Se.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(e) {
              return Se.globalEval(e),
              e
          }
      }
  }),
  Se.ajaxPrefilter("script", function(e) {
      e.cache === undefined && (e.cache = !1),
      e.crossDomain && (e.type = "GET")
  }),
  Se.ajaxTransport("script", function(e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
          return {
              send: function(r, i) {
                  t = Se("<script>").attr(e.scriptAttrs || {}).prop({
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(),
                      n = null,
                      e && i("error" === e.type ? 404 : 200, e.type)
                  }
                  ),
                  le.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
  });
  var nn, rn = [], on = /(=)\?(?=&|$)|\?\?/;
  Se.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = rn.pop() || Se.expando + "_" + Ht++;
          return this[e] = !0,
          e
      }
  }),
  Se.ajaxPrefilter("json jsonp", function(t, n, r) {
      var i, o, s, a = !1 !== t.jsonp && (on.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(t.data) && "data");
      if (a || "jsonp" === t.dataTypes[0])
          return i = t.jsonpCallback = Ee(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
          a ? t[a] = t[a].replace(on, "$1" + i) : !1 !== t.jsonp && (t.url += (qt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          t.converters["script json"] = function() {
              return s || Se.error(i + " was not called"),
              s[0]
          }
          ,
          t.dataTypes[0] = "json",
          o = e[i],
          e[i] = function() {
              s = arguments
          }
          ,
          r.always(function() {
              o === undefined ? Se(e).removeProp(i) : e[i] = o,
              t[i] && (t.jsonpCallback = n.jsonpCallback,
              rn.push(i)),
              s && Ee(o) && o(s[0]),
              s = o = undefined
          }),
          "script"
  }),
  be.createHTMLDocument = ((nn = le.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
  2 === nn.childNodes.length),
  Se.parseHTML = function(e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
      t = !1),
      t || (be.createHTMLDocument ? ((r = (t = le.implementation.createHTMLDocument("")).createElement("base")).href = le.location.href,
      t.head.appendChild(r)) : t = le),
      o = !n && [],
      (i = Ie.exec(e)) ? [t.createElement(i[1])] : (i = T([e], t, o),
      o && o.length && Se(o).remove(),
      Se.merge([], i.childNodes)));
      var r, i, o
  }
  ,
  Se.fn.load = function(e, t, n) {
      var r, i, o, s = this, a = e.indexOf(" ");
      return a > -1 && (r = J(e.slice(a)),
      e = e.slice(0, a)),
      Ee(t) ? (n = t,
      t = undefined) : t && "object" == typeof t && (i = "POST"),
      s.length > 0 && Se.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
      }).done(function(e) {
          o = arguments,
          s.html(r ? Se("<div>").append(Se.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
          s.each(function() {
              n.apply(this, o || [e.responseText, t, e])
          })
      }
      ),
      this
  }
  ,
  Se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      Se.fn[t] = function(e) {
          return this.on(t, e)
      }
  }),
  Se.expr.pseudos.animated = function(e) {
      return Se.grep(Se.timers, function(t) {
          return e === t.elem
      }).length
  }
  ,
  Se.offset = {
      setOffset: function(e, t, n) {
          var r, i, o, s, a, l, u = Se.css(e, "position"), c = Se(e), f = {};
          "static" === u && (e.style.position = "relative"),
          a = c.offset(),
          o = Se.css(e, "top"),
          l = Se.css(e, "left"),
          ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (r = c.position()).top,
          i = r.left) : (s = parseFloat(o) || 0,
          i = parseFloat(l) || 0),
          Ee(t) && (t = t.call(e, n, Se.extend({}, a))),
          null != t.top && (f.top = t.top - a.top + s),
          null != t.left && (f.left = t.left - a.left + i),
          "using"in t ? t.using.call(e, f) : c.css(f)
      }
  },
  Se.fn.extend({
      offset: function(e) {
          if (arguments.length)
              return e === undefined ? this : this.each(function(t) {
                  Se.offset.setOffset(this, e, t)
              });
          var t, n, r = this[0];
          return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
          n = r.ownerDocument.defaultView,
          {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
          }) : {
              top: 0,
              left: 0
          } : void 0
      },
      position: function() {
          if (this[0]) {
              var e, t, n, r = this[0], i = {
                  top: 0,
                  left: 0
              };
              if ("fixed" === Se.css(r, "position"))
                  t = r.getBoundingClientRect();
              else {
                  for (t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Se.css(e, "position"); )
                      e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && ((i = Se(e).offset()).top += Se.css(e, "borderTopWidth", !0),
                  i.left += Se.css(e, "borderLeftWidth", !0))
              }
              return {
                  top: t.top - i.top - Se.css(r, "marginTop", !0),
                  left: t.left - i.left - Se.css(r, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent; e && "static" === Se.css(e, "position"); )
                  e = e.offsetParent;
              return e || Qe
          })
      }
  }),
  Se.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, t) {
      var n = "pageYOffset" === t;
      Se.fn[e] = function(r) {
          return qe(this, function(e, r, i) {
              var o;
              if (_e(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
              i === undefined)
                  return o ? o[t] : e[r];
              o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
      }
  }),
  Se.each(["top", "left"], function(e, t) {
      Se.cssHooks[t] = q(be.pixelPosition, function(e, n) {
          if (n)
              return n = H(e, t),
              mt.test(n) ? Se(e).position()[t] + "px" : n
      })
  }),
  Se.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      Se.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(n, r) {
          Se.fn[r] = function(i, o) {
              var s = arguments.length && (n || "boolean" != typeof i)
                , a = n || (!0 === i || !0 === o ? "margin" : "border");
              return qe(this, function(t, n, i) {
                  var o;
                  return _e(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                  Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === undefined ? Se.css(t, n, a) : Se.style(t, n, i, a)
              }, t, s ? i : undefined, s)
          }
      })
  }),
  Se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      Se.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }),
  Se.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  }),
  Se.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  }),
  Se.proxy = function(e, t) {
      var n, r, i;
      return "string" == typeof t && (n = e[t],
      t = e,
      e = n),
      Ee(e) ? (r = ce.call(arguments, 2),
      (i = function() {
          return e.apply(t || this, r.concat(ce.call(arguments)))
      }
      ).guid = e.guid = e.guid || Se.guid++,
      i) : undefined
  }
  ,
  Se.holdReady = function(e) {
      e ? Se.readyWait++ : Se.ready(!0)
  }
  ,
  Se.isArray = Array.isArray,
  Se.parseJSON = JSON.parse,
  Se.nodeName = o,
  Se.isFunction = Ee,
  Se.isWindow = _e,
  Se.camelCase = p,
  Se.type = r,
  Se.now = Date.now,
  Se.isNumeric = function(e) {
      var t = Se.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }
  ,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return Se
  });
  var sn = e.jQuery
    , an = e.$;
  return Se.noConflict = function(t) {
      return e.$ === Se && (e.$ = an),
      t && e.jQuery === Se && (e.jQuery = sn),
      Se
  }
  ,
  t || (e.jQuery = e.$ = Se),
  Se
}),
/**!
* @fileOverview Kickass library to create and place poppers near their reference elements.
* @version 1.14.5
* @license
* Copyright (c) 2016 Federico Zivolo and contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
  "use strict";
  function e(e) {
      var t = !1;
      return function() {
          t || (t = !0,
          window.Promise.resolve().then(function() {
              t = !1,
              e()
          }))
      }
  }
  function t(e) {
      var t = !1;
      return function() {
          t || (t = !0,
          setTimeout(function() {
              t = !1,
              e()
          }, ue))
      }
  }
  function n(e) {
      return e && "[object Function]" === {}.toString.call(e)
  }
  function r(e, t) {
      if (1 !== e.nodeType)
          return [];
      var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
      return t ? n[t] : n
  }
  function i(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host
  }
  function o(e) {
      if (!e)
          return document.body;
      switch (e.nodeName) {
      case "HTML":
      case "BODY":
          return e.ownerDocument.body;
      case "#document":
          return e.body
      }
      var t = r(e)
        , n = t.overflow
        , s = t.overflowX
        , a = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + a + s) ? e : o(i(e))
  }
  function s(e) {
      return 11 === e ? de : 10 === e ? he : de || he
  }
  function a(e) {
      if (!e)
          return document.documentElement;
      for (var t = s(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
          n = (e = e.nextElementSibling).offsetParent;
      var i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === r(n, "position") ? a(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
  }
  function l(e) {
      var t = e.nodeName;
      return "BODY" !== t && ("HTML" === t || a(e.firstElementChild) === e)
  }
  function u(e) {
      return null !== e.parentNode ? u(e.parentNode) : e
  }
  function c(e, t) {
      if (!(e && e.nodeType && t && t.nodeType))
          return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
        , r = n ? e : t
        , i = n ? t : e
        , o = document.createRange();
      o.setStart(r, 0),
      o.setEnd(i, 0);
      var s = o.commonAncestorContainer;
      if (e !== s && t !== s || r.contains(i))
          return l(s) ? s : a(s);
      var f = u(e);
      return f.host ? c(f.host, t) : c(e, u(t).host)
  }
  function f(e) {
      var t = "top" === (arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
        , n = e.nodeName;
      if ("BODY" === n || "HTML" === n) {
          var r = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || r)[t]
      }
      return e[t]
  }
  function d(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined && arguments[2]
        , r = f(t, "top")
        , i = f(t, "left")
        , o = n ? -1 : 1;
      return e.top += r * o,
      e.bottom += r * o,
      e.left += i * o,
      e.right += i * o,
      e
  }
  function h(e, t) {
      var n = "x" === t ? "Left" : "Top"
        , r = "Left" === n ? "Right" : "Bottom";
      return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
  }
  function p(e, t, n, r) {
      return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], s(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
  }
  function m(e) {
      var t = e.body
        , n = e.documentElement
        , r = s(10) && getComputedStyle(n);
      return {
          height: p("Height", t, n, r),
          width: p("Width", t, n, r)
      }
  }
  function g(e) {
      return ye({}, e, {
          right: e.left + e.width,
          bottom: e.top + e.height
      })
  }
  function y(e) {
      var t = {};
      try {
          if (s(10)) {
              t = e.getBoundingClientRect();
              var n = f(e, "top")
                , i = f(e, "left");
              t.top += n,
              t.left += i,
              t.bottom += n,
              t.right += i
          } else
              t = e.getBoundingClientRect()
      } catch (y) {}
      var o = {
          left: t.left,
          top: t.top,
          width: t.right - t.left,
          height: t.bottom - t.top
      }
        , a = "HTML" === e.nodeName ? m(e.ownerDocument) : {}
        , l = a.width || e.clientWidth || o.right - o.left
        , u = a.height || e.clientHeight || o.bottom - o.top
        , c = e.offsetWidth - l
        , d = e.offsetHeight - u;
      if (c || d) {
          var p = r(e);
          c -= h(p, "x"),
          d -= h(p, "y"),
          o.width -= c,
          o.height -= d
      }
      return g(o)
  }
  function v(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined && arguments[2]
        , i = s(10)
        , a = "HTML" === t.nodeName
        , l = y(e)
        , u = y(t)
        , c = o(e)
        , f = r(t)
        , h = parseFloat(f.borderTopWidth, 10)
        , p = parseFloat(f.borderLeftWidth, 10);
      n && a && (u.top = Math.max(u.top, 0),
      u.left = Math.max(u.left, 0));
      var m = g({
          top: l.top - u.top - h,
          left: l.left - u.left - p,
          width: l.width,
          height: l.height
      });
      if (m.marginTop = 0,
      m.marginLeft = 0,
      !i && a) {
          var v = parseFloat(f.marginTop, 10)
            , b = parseFloat(f.marginLeft, 10);
          m.top -= h - v,
          m.bottom -= h - v,
          m.left -= p - b,
          m.right -= p - b,
          m.marginTop = v,
          m.marginLeft = b
      }
      return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (m = d(m, t)),
      m
  }
  function b(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1]
        , n = e.ownerDocument.documentElement
        , r = v(e, n)
        , i = Math.max(n.clientWidth, window.innerWidth || 0)
        , o = Math.max(n.clientHeight, window.innerHeight || 0)
        , s = t ? 0 : f(n)
        , a = t ? 0 : f(n, "left");
      return g({
          top: s - r.top + r.marginTop,
          left: a - r.left + r.marginLeft,
          width: i,
          height: o
      })
  }
  function E(e) {
      var t = e.nodeName;
      return "BODY" !== t && "HTML" !== t && ("fixed" === r(e, "position") || E(i(e)))
  }
  function _(e) {
      if (!e || !e.parentElement || s())
          return document.documentElement;
      for (var t = e.parentElement; t && "none" === r(t, "transform"); )
          t = t.parentElement;
      return t || document.documentElement
  }
  function w(e, t, n, r) {
      var s = arguments.length > 4 && arguments[4] !== undefined && arguments[4]
        , a = {
          top: 0,
          left: 0
      }
        , l = s ? _(e) : c(e, t);
      if ("viewport" === r)
          a = b(l, s);
      else {
          var u = void 0;
          "scrollParent" === r ? "BODY" === (u = o(i(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === r ? e.ownerDocument.documentElement : r;
          var f = v(u, l, s);
          if ("HTML" !== u.nodeName || E(l))
              a = f;
          else {
              var d = m(e.ownerDocument)
                , h = d.height
                , p = d.width;
              a.top += f.top - f.marginTop,
              a.bottom = h + f.top,
              a.left += f.left - f.marginLeft,
              a.right = p + f.left
          }
      }
      var g = "number" == typeof (n = n || 0);
      return a.left += g ? n : n.left || 0,
      a.top += g ? n : n.top || 0,
      a.right -= g ? n : n.right || 0,
      a.bottom -= g ? n : n.bottom || 0,
      a
  }
  function T(e) {
      return e.width * e.height
  }
  function S(e, t, n, r, i) {
      var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      if (-1 === e.indexOf("auto"))
          return e;
      var s = w(n, r, o, i)
        , a = {
          top: {
              width: s.width,
              height: t.top - s.top
          },
          right: {
              width: s.right - t.right,
              height: s.height
          },
          bottom: {
              width: s.width,
              height: s.bottom - t.bottom
          },
          left: {
              width: t.left - s.left,
              height: s.height
          }
      }
        , l = Object.keys(a).map(function(e) {
          return ye({
              key: e
          }, a[e], {
              area: T(a[e])
          })
      }).sort(function(e, t) {
          return t.area - e.area
      })
        , u = l.filter(function(e) {
          var t = e.width
            , r = e.height;
          return t >= n.clientWidth && r >= n.clientHeight
      })
        , c = u.length > 0 ? u[0].key : l[0].key
        , f = e.split("-")[1];
      return c + (f ? "-" + f : "")
  }
  function C(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return v(n, r ? _(t) : c(t, n), r)
  }
  function A(e) {
      var t = e.ownerDocument.defaultView.getComputedStyle(e)
        , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
        , r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
      return {
          width: e.offsetWidth + r,
          height: e.offsetHeight + n
      }
  }
  function x(e) {
      var t = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
      };
      return e.replace(/left|right|bottom|top/g, function(e) {
          return t[e]
      })
  }
  function O(e, t, n) {
      n = n.split("-")[0];
      var r = A(e)
        , i = {
          width: r.width,
          height: r.height
      }
        , o = -1 !== ["right", "left"].indexOf(n)
        , s = o ? "top" : "left"
        , a = o ? "left" : "top"
        , l = o ? "height" : "width"
        , u = o ? "width" : "height";
      return i[s] = t[s] + t[l] / 2 - r[l] / 2,
      i[a] = n === a ? t[a] - r[u] : t[x(a)],
      i
  }
  function D(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }
  function I(e, t, n) {
      if (Array.prototype.findIndex)
          return e.findIndex(function(e) {
              return e[t] === n
          });
      var r = D(e, function(e) {
          return e[t] === n
      });
      return e.indexOf(r)
  }
  function L(e, t, r) {
      return (r === undefined ? e : e.slice(0, I(e, "name", r))).forEach(function(e) {
          e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var r = e["function"] || e.fn;
          e.enabled && n(r) && (t.offsets.popper = g(t.offsets.popper),
          t.offsets.reference = g(t.offsets.reference),
          t = r(t, e))
      }),
      t
  }
  function k() {
      if (!this.state.isDestroyed) {
          var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
          };
          e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed),
          e.placement = S(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
          e.originalPlacement = e.placement,
          e.positionFixed = this.options.positionFixed,
          e.offsets.popper = O(this.popper, e.offsets.reference, e.placement),
          e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
          e = L(this.modifiers, e),
          this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
          this.options.onCreate(e))
      }
  }
  function N(e, t) {
      return e.some(function(e) {
          var n = e.name;
          return e.enabled && n === t
      })
  }
  function P(e) {
      for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
          var i = t[r]
            , o = i ? "" + i + n : e;
          if ("undefined" != typeof document.body.style[o])
              return o
      }
      return null
  }
  function j() {
      return this.state.isDestroyed = !0,
      N(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
      this.popper.style.position = "",
      this.popper.style.top = "",
      this.popper.style.left = "",
      this.popper.style.right = "",
      this.popper.style.bottom = "",
      this.popper.style.willChange = "",
      this.popper.style[P("transform")] = ""),
      this.disableEventListeners(),
      this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
      this
  }
  function R(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window
  }
  function H(e, t, n, r) {
      var i = "BODY" === e.nodeName
        , s = i ? e.ownerDocument.defaultView : e;
      s.addEventListener(t, n, {
          passive: !0
      }),
      i || H(o(s.parentNode), t, n, r),
      r.push(s)
  }
  function q(e, t, n, r) {
      n.updateBound = r,
      R(e).addEventListener("resize", n.updateBound, {
          passive: !0
      });
      var i = o(e);
      return H(i, "scroll", n.updateBound, n.scrollParents),
      n.scrollElement = i,
      n.eventsEnabled = !0,
      n
  }
  function M() {
      this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate))
  }
  function F(e, t) {
      return R(e).removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function(e) {
          e.removeEventListener("scroll", t.updateBound)
      }),
      t.updateBound = null,
      t.scrollParents = [],
      t.scrollElement = null,
      t.eventsEnabled = !1,
      t
  }
  function W() {
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
      this.state = F(this.reference, this.state))
  }
  function B(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }
  function U(e, t) {
      Object.keys(t).forEach(function(n) {
          var r = "";
          -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && B(t[n]) && (r = "px"),
          e.style[n] = t[n] + r
      })
  }
  function V(e, t) {
      Object.keys(t).forEach(function(n) {
          !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
      })
  }
  function z(e) {
      return U(e.instance.popper, e.styles),
      V(e.instance.popper, e.attributes),
      e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles),
      e
  }
  function $(e, t, n, r, i) {
      var o = C(i, t, e, n.positionFixed)
        , s = S(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
      return t.setAttribute("x-placement", s),
      U(t, {
          position: n.positionFixed ? "fixed" : "absolute"
      }),
      n
  }
  function G(e, t) {
      var n = t.x
        , r = t.y
        , i = e.offsets.popper
        , o = D(e.instance.modifiers, function(e) {
          return "applyStyle" === e.name
      }).gpuAcceleration;
      o !== undefined && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
      var s = o !== undefined ? o : t.gpuAcceleration
        , l = a(e.instance.popper)
        , u = y(l)
        , c = {
          position: i.position
      }
        , f = {
          left: Math.floor(i.left),
          top: Math.round(i.top),
          bottom: Math.round(i.bottom),
          right: Math.floor(i.right)
      }
        , d = "bottom" === n ? "top" : "bottom"
        , h = "right" === r ? "left" : "right"
        , p = P("transform")
        , m = void 0
        , g = void 0;
      if (g = "bottom" === d ? "HTML" === l.nodeName ? -l.clientHeight + f.bottom : -u.height + f.bottom : f.top,
      m = "right" === h ? "HTML" === l.nodeName ? -l.clientWidth + f.right : -u.width + f.right : f.left,
      s && p)
          c[p] = "translate3d(" + m + "px, " + g + "px, 0)",
          c[d] = 0,
          c[h] = 0,
          c.willChange = "transform";
      else {
          var v = "bottom" === d ? -1 : 1
            , b = "right" === h ? -1 : 1;
          c[d] = g * v,
          c[h] = m * b,
          c.willChange = d + ", " + h
      }
      var E = {
          "x-placement": e.placement
      };
      return e.attributes = ye({}, E, e.attributes),
      e.styles = ye({}, c, e.styles),
      e.arrowStyles = ye({}, e.offsets.arrow, e.arrowStyles),
      e
  }
  function K(e, t, n) {
      var r = D(e, function(e) {
          return e.name === t
      })
        , i = !!r && e.some(function(e) {
          return e.name === n && e.enabled && e.order < r.order
      });
      if (!i) {
          var o = "`" + t + "`"
            , s = "`" + n + "`";
          console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
      }
      return i
  }
  function Q(e, t) {
      var n;
      if (!K(e.instance.modifiers, "arrow", "keepTogether"))
          return e;
      var i = t.element;
      if ("string" == typeof i) {
          if (!(i = e.instance.popper.querySelector(i)))
              return e
      } else if (!e.instance.popper.contains(i))
          return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
          e;
      var o = e.placement.split("-")[0]
        , s = e.offsets
        , a = s.popper
        , l = s.reference
        , u = -1 !== ["left", "right"].indexOf(o)
        , c = u ? "height" : "width"
        , f = u ? "Top" : "Left"
        , d = f.toLowerCase()
        , h = u ? "left" : "top"
        , p = u ? "bottom" : "right"
        , m = A(i)[c];
      l[p] - m < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - m)),
      l[d] + m > a[p] && (e.offsets.popper[d] += l[d] + m - a[p]),
      e.offsets.popper = g(e.offsets.popper);
      var y = l[d] + l[c] / 2 - m / 2
        , v = r(e.instance.popper)
        , b = parseFloat(v["margin" + f], 10)
        , E = parseFloat(v["border" + f + "Width"], 10)
        , _ = y - e.offsets.popper[d] - b - E;
      return _ = Math.max(Math.min(a[c] - m, _), 0),
      e.arrowElement = i,
      e.offsets.arrow = (ge(n = {}, d, Math.round(_)),
      ge(n, h, ""),
      n),
      e
  }
  function X(e) {
      return "end" === e ? "start" : "start" === e ? "end" : e
  }
  function Y(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1]
        , n = be.indexOf(e)
        , r = be.slice(n + 1).concat(be.slice(0, n));
      return t ? r.reverse() : r
  }
  function J(e, t) {
      if (N(e.instance.modifiers, "inner"))
          return e;
      if (e.flipped && e.placement === e.originalPlacement)
          return e;
      var n = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
        , r = e.placement.split("-")[0]
        , i = x(r)
        , o = e.placement.split("-")[1] || ""
        , s = [];
      switch (t.behavior) {
      case Ee.FLIP:
          s = [r, i];
          break;
      case Ee.CLOCKWISE:
          s = Y(r);
          break;
      case Ee.COUNTERCLOCKWISE:
          s = Y(r, !0);
          break;
      default:
          s = t.behavior
      }
      return s.forEach(function(a, l) {
          if (r !== a || s.length === l + 1)
              return e;
          r = e.placement.split("-")[0],
          i = x(r);
          var u = e.offsets.popper
            , c = e.offsets.reference
            , f = Math.floor
            , d = "left" === r && f(u.right) > f(c.left) || "right" === r && f(u.left) < f(c.right) || "top" === r && f(u.bottom) > f(c.top) || "bottom" === r && f(u.top) < f(c.bottom)
            , h = f(u.left) < f(n.left)
            , p = f(u.right) > f(n.right)
            , m = f(u.top) < f(n.top)
            , g = f(u.bottom) > f(n.bottom)
            , y = "left" === r && h || "right" === r && p || "top" === r && m || "bottom" === r && g
            , v = -1 !== ["top", "bottom"].indexOf(r)
            , b = !!t.flipVariations && (v && "start" === o && h || v && "end" === o && p || !v && "start" === o && m || !v && "end" === o && g);
          (d || y || b) && (e.flipped = !0,
          (d || y) && (r = s[l + 1]),
          b && (o = X(o)),
          e.placement = r + (o ? "-" + o : ""),
          e.offsets.popper = ye({}, e.offsets.popper, O(e.instance.popper, e.offsets.reference, e.placement)),
          e = L(e.instance.modifiers, e, "flip"))
      }),
      e
  }
  function Z(e) {
      var t = e.offsets
        , n = t.popper
        , r = t.reference
        , i = e.placement.split("-")[0]
        , o = Math.floor
        , s = -1 !== ["top", "bottom"].indexOf(i)
        , a = s ? "right" : "bottom"
        , l = s ? "left" : "top"
        , u = s ? "width" : "height";
      return n[a] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[u]),
      n[l] > o(r[a]) && (e.offsets.popper[l] = o(r[a])),
      e
  }
  function ee(e, t, n, r) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
        , o = +i[1]
        , s = i[2];
      if (!o)
          return e;
      if (0 === s.indexOf("%")) {
          var a = void 0;
          switch (s) {
          case "%p":
              a = n;
              break;
          case "%":
          case "%r":
          default:
              a = r
          }
          return g(a)[t] / 100 * o
      }
      if ("vh" === s || "vw" === s) {
          return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
      }
      return o
  }
  function te(e, t, n, r) {
      var i = [0, 0]
        , o = -1 !== ["right", "left"].indexOf(r)
        , s = e.split(/(\+|\-)/).map(function(e) {
          return e.trim()
      })
        , a = s.indexOf(D(s, function(e) {
          return -1 !== e.search(/,|\s/)
      }));
      s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
      var l = /\s*,\s*|\s+/
        , u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
      return (u = u.map(function(e, r) {
          var i = (1 === r ? !o : o) ? "height" : "width"
            , s = !1;
          return e.reduce(function(e, t) {
              return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
              s = !0,
              e) : s ? (e[e.length - 1] += t,
              s = !1,
              e) : e.concat(t)
          }, []).map(function(e) {
              return ee(e, i, t, n)
          })
      })).forEach(function(e, t) {
          e.forEach(function(n, r) {
              B(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
          })
      }),
      i
  }
  function ne(e, t) {
      var n = t.offset
        , r = e.placement
        , i = e.offsets
        , o = i.popper
        , s = i.reference
        , a = r.split("-")[0]
        , l = void 0;
      return l = B(+n) ? [+n, 0] : te(n, o, s, a),
      "left" === a ? (o.top += l[0],
      o.left -= l[1]) : "right" === a ? (o.top += l[0],
      o.left += l[1]) : "top" === a ? (o.left += l[0],
      o.top -= l[1]) : "bottom" === a && (o.left += l[0],
      o.top += l[1]),
      e.popper = o,
      e
  }
  function re(e, t) {
      var n = t.boundariesElement || a(e.instance.popper);
      e.instance.reference === n && (n = a(n));
      var r = P("transform")
        , i = e.instance.popper.style
        , o = i.top
        , s = i.left
        , l = i[r];
      i.top = "",
      i.left = "",
      i[r] = "";
      var u = w(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
      i.top = o,
      i.left = s,
      i[r] = l,
      t.boundaries = u;
      var c = t.priority
        , f = e.offsets.popper
        , d = {
          primary: function(e) {
              var n = f[e];
              return f[e] < u[e] && !t.escapeWithReference && (n = Math.max(f[e], u[e])),
              ge({}, e, n)
          },
          secondary: function(e) {
              var n = "right" === e ? "left" : "top"
                , r = f[n];
              return f[e] > u[e] && !t.escapeWithReference && (r = Math.min(f[n], u[e] - ("right" === e ? f.width : f.height))),
              ge({}, n, r)
          }
      };
      return c.forEach(function(e) {
          var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
          f = ye({}, f, d[t](e))
      }),
      e.offsets.popper = f,
      e
  }
  function ie(e) {
      var t = e.placement
        , n = t.split("-")[0]
        , r = t.split("-")[1];
      if (r) {
          var i = e.offsets
            , o = i.reference
            , s = i.popper
            , a = -1 !== ["bottom", "top"].indexOf(n)
            , l = a ? "left" : "top"
            , u = a ? "width" : "height"
            , c = {
              start: ge({}, l, o[l]),
              end: ge({}, l, o[l] + o[u] - s[u])
          };
          e.offsets.popper = ye({}, s, c[r])
      }
      return e
  }
  function oe(e) {
      if (!K(e.instance.modifiers, "hide", "preventOverflow"))
          return e;
      var t = e.offsets.reference
        , n = D(e.instance.modifiers, function(e) {
          return "preventOverflow" === e.name
      }).boundaries;
      if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
          if (!0 === e.hide)
              return e;
          e.hide = !0,
          e.attributes["x-out-of-boundaries"] = ""
      } else {
          if (!1 === e.hide)
              return e;
          e.hide = !1,
          e.attributes["x-out-of-boundaries"] = !1
      }
      return e
  }
  function se(e) {
      var t = e.placement
        , n = t.split("-")[0]
        , r = e.offsets
        , i = r.popper
        , o = r.reference
        , s = -1 !== ["left", "right"].indexOf(n)
        , a = -1 === ["top", "left"].indexOf(n);
      return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0),
      e.placement = x(t),
      e.offsets.popper = g(i),
      e
  }
  for (var ae = "undefined" != typeof window && "undefined" != typeof document, le = ["Edge", "Trident", "Firefox"], ue = 0, ce = 0; ce < le.length; ce += 1)
      if (ae && navigator.userAgent.indexOf(le[ce]) >= 0) {
          ue = 1;
          break
      }
  var fe = ae && window.Promise ? e : t
    , de = ae && !(!window.MSInputMethodContext || !document.documentMode)
    , he = ae && /MSIE 10/.test(navigator.userAgent)
    , pe = function(e, t) {
      if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
  }
    , me = function() {
      function e(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      return function(t, n, r) {
          return n && e(t.prototype, n),
          r && e(t, r),
          t
      }
  }()
    , ge = function(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
    , ye = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
    , ve = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
    , be = ve.slice(3)
    , Ee = {
      FLIP: "flip",
      CLOCKWISE: "clockwise",
      COUNTERCLOCKWISE: "counterclockwise"
  }
    , _e = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function() {},
      onUpdate: function() {},
      modifiers: {
          shift: {
              order: 100,
              enabled: !0,
              fn: ie
          },
          offset: {
              order: 200,
              enabled: !0,
              fn: ne,
              offset: 0
          },
          preventOverflow: {
              order: 300,
              enabled: !0,
              fn: re,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
          },
          keepTogether: {
              order: 400,
              enabled: !0,
              fn: Z
          },
          arrow: {
              order: 500,
              enabled: !0,
              fn: Q,
              element: "[x-arrow]"
          },
          flip: {
              order: 600,
              enabled: !0,
              fn: J,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport"
          },
          inner: {
              order: 700,
              enabled: !1,
              fn: se
          },
          hide: {
              order: 800,
              enabled: !0,
              fn: oe
          },
          computeStyle: {
              order: 850,
              enabled: !0,
              fn: G,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
          },
          applyStyle: {
              order: 900,
              enabled: !0,
              fn: z,
              onLoad: $,
              gpuAcceleration: undefined
          }
      }
  }
    , we = function() {
      function e(t, r) {
          var i = this
            , o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          pe(this, e),
          this.scheduleUpdate = function() {
              return requestAnimationFrame(i.update)
          }
          ,
          this.update = fe(this.update.bind(this)),
          this.options = ye({}, e.Defaults, o),
          this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
          },
          this.reference = t && t.jquery ? t[0] : t,
          this.popper = r && r.jquery ? r[0] : r,
          this.options.modifiers = {},
          Object.keys(ye({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) {
              i.options.modifiers[t] = ye({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
          }),
          this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
              return ye({
                  name: e
              }, i.options.modifiers[e])
          }).sort(function(e, t) {
              return e.order - t.order
          }),
          this.modifiers.forEach(function(e) {
              e.enabled && n(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
          }),
          this.update();
          var s = this.options.eventsEnabled;
          s && this.enableEventListeners(),
          this.state.eventsEnabled = s
      }
      return me(e, [{
          key: "update",
          value: function() {
              return k.call(this)
          }
      }, {
          key: "destroy",
          value: function() {
              return j.call(this)
          }
      }, {
          key: "enableEventListeners",
          value: function() {
              return M.call(this)
          }
      }, {
          key: "disableEventListeners",
          value: function() {
              return W.call(this)
          }
      }]),
      e
  }();
  return we.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
  we.placements = ve,
  we.Defaults = _e,
  we
}),
/*!
* Bootstrap util.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : (e = e || self).Util = t(e.jQuery)
}(this, function(e) {
  "use strict";
  function t(e) {
      return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
  }
  function n() {
      return {
          bindType: o,
          delegateType: o,
          handle: function(t) {
              return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : undefined
          }
      }
  }
  function r(t) {
      var n = this
        , r = !1;
      return e(this).one(l.TRANSITION_END, function() {
          r = !0
      }),
      setTimeout(function() {
          r || l.triggerTransitionEnd(n)
      }, t),
      this
  }
  function i() {
      e.fn.emulateTransitionEnd = r,
      e.event.special[l.TRANSITION_END] = n()
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e;
  var o = "transitionend"
    , s = 1e6
    , a = 1e3
    , l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function(e) {
          do {
              e += ~~(Math.random() * s)
          } while (document.getElementById(e));return e
      },
      getSelectorFromElement: function(e) {
          var t = e.getAttribute("data-target");
          if (!t || "#" === t) {
              var n = e.getAttribute("href");
              t = n && "#" !== n ? n.trim() : ""
          }
          try {
              return document.querySelector(t) ? t : null
          } catch (r) {
              return null
          }
      },
      getTransitionDurationFromElement: function(t) {
          if (!t)
              return 0;
          var n = e(t).css("transition-duration")
            , r = e(t).css("transition-delay")
            , i = parseFloat(n)
            , o = parseFloat(r);
          return i || o ? (n = n.split(",")[0],
          r = r.split(",")[0],
          (parseFloat(n) + parseFloat(r)) * a) : 0
      },
      reflow: function(e) {
          return e.offsetHeight
      },
      triggerTransitionEnd: function(t) {
          e(t).trigger(o)
      },
      supportsTransitionEnd: function() {
          return Boolean(o)
      },
      isElement: function(e) {
          return (e[0] || e).nodeType
      },
      typeCheckConfig: function(e, n, r) {
          for (var i in r)
              if (Object.prototype.hasOwnProperty.call(r, i)) {
                  var o = r[i]
                    , s = n[i]
                    , a = s && l.isElement(s) ? "element" : t(s);
                  if (!new RegExp(o).test(a))
                      throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
              }
      },
      findShadowRoot: function(e) {
          if (!document.documentElement.attachShadow)
              return null;
          if ("function" == typeof e.getRootNode) {
              var t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null
          }
          return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null
      },
      jQueryDetection: function() {
          if (void 0 === e)
              throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
          var t = e.fn.jquery.split(" ")[0].split(".")
            , n = 1
            , r = 2
            , i = 9
            , o = 1
            , s = 4;
          if (t[0] < r && t[1] < i || t[0] === n && t[1] === i && t[2] < o || t[0] >= s)
              throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
      }
  };
  return l.jQueryDetection(),
  i(),
  l
}),
/*!
* Bootstrap tab.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : (e = e || self).Tab = t(e.jQuery, e.Util)
}(this, function(e, t) {
  "use strict";
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function r(e, t, r) {
      return t && n(e.prototype, t),
      r && n(e, r),
      e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var i = "tab"
    , o = "4.4.1"
    , s = "bs.tab"
    , a = "." + s
    , l = ".data-api"
    , u = e.fn[i]
    , c = {
      HIDE: "hide" + a,
      HIDDEN: "hidden" + a,
      SHOW: "show" + a,
      SHOWN: "shown" + a,
      CLICK_DATA_API: "click" + a + l
  }
    , f = {
      DROPDOWN_MENU: "dropdown-menu",
      ACTIVE: "active",
      DISABLED: "disabled",
      FADE: "fade",
      SHOW: "show"
  }
    , d = {
      DROPDOWN: ".dropdown",
      NAV_LIST_GROUP: ".nav, .list-group",
      ACTIVE: ".active",
      ACTIVE_UL: "> li > .active",
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: ".dropdown-toggle",
      DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
  }
    , h = function() {
      function n(e) {
          this._element = e
      }
      var i = n.prototype;
      return i.show = function() {
          var n = this;
          if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(f.ACTIVE) || e(this._element).hasClass(f.DISABLED))) {
              var r, i, o = e(this._element).closest(d.NAV_LIST_GROUP)[0], s = t.getSelectorFromElement(this._element);
              if (o) {
                  var a = "UL" === o.nodeName || "OL" === o.nodeName ? d.ACTIVE_UL : d.ACTIVE;
                  i = (i = e.makeArray(e(o).find(a)))[i.length - 1]
              }
              var l = e.Event(c.HIDE, {
                  relatedTarget: this._element
              })
                , u = e.Event(c.SHOW, {
                  relatedTarget: i
              });
              if (i && e(i).trigger(l),
              e(this._element).trigger(u),
              !u.isDefaultPrevented() && !l.isDefaultPrevented()) {
                  s && (r = document.querySelector(s)),
                  this._activate(this._element, o);
                  var h = function() {
                      var t = e.Event(c.HIDDEN, {
                          relatedTarget: n._element
                      })
                        , r = e.Event(c.SHOWN, {
                          relatedTarget: i
                      });
                      e(i).trigger(t),
                      e(n._element).trigger(r)
                  };
                  r ? this._activate(r, r.parentNode, h) : h()
              }
          }
      }
      ,
      i.dispose = function() {
          e.removeData(this._element, s),
          this._element = null
      }
      ,
      i._activate = function(n, r, i) {
          var o = this
            , s = (!r || "UL" !== r.nodeName && "OL" !== r.nodeName ? e(r).children(d.ACTIVE) : e(r).find(d.ACTIVE_UL))[0]
            , a = i && s && e(s).hasClass(f.FADE)
            , l = function() {
              return o._transitionComplete(n, s, i)
          };
          if (s && a) {
              var u = t.getTransitionDurationFromElement(s);
              e(s).removeClass(f.SHOW).one(t.TRANSITION_END, l).emulateTransitionEnd(u)
          } else
              l()
      }
      ,
      i._transitionComplete = function(n, r, i) {
          if (r) {
              e(r).removeClass(f.ACTIVE);
              var o = e(r.parentNode).find(d.DROPDOWN_ACTIVE_CHILD)[0];
              o && e(o).removeClass(f.ACTIVE),
              "tab" === r.getAttribute("role") && r.setAttribute("aria-selected", !1)
          }
          if (e(n).addClass(f.ACTIVE),
          "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0),
          t.reflow(n),
          n.classList.contains(f.FADE) && n.classList.add(f.SHOW),
          n.parentNode && e(n.parentNode).hasClass(f.DROPDOWN_MENU)) {
              var s = e(n).closest(d.DROPDOWN)[0];
              if (s) {
                  var a = [].slice.call(s.querySelectorAll(d.DROPDOWN_TOGGLE));
                  e(a).addClass(f.ACTIVE)
              }
              n.setAttribute("aria-expanded", !0)
          }
          i && i()
      }
      ,
      n._jQueryInterface = function(t) {
          return this.each(function() {
              var r = e(this)
                , i = r.data(s);
              if (i || (i = new n(this),
              r.data(s, i)),
              "string" == typeof t) {
                  if ("undefined" == typeof i[t])
                      throw new TypeError('No method named "' + t + '"');
                  i[t]()
              }
          })
      }
      ,
      r(n, null, [{
          key: "VERSION",
          get: function() {
              return o
          }
      }]),
      n
  }();
  return e(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function(t) {
      t.preventDefault(),
      h._jQueryInterface.call(e(this), "show")
  }),
  e.fn[i] = h._jQueryInterface,
  e.fn[i].Constructor = h,
  e.fn[i].noConflict = function() {
      return e.fn[i] = u,
      h._jQueryInterface
  }
  ,
  h
}),
/*!
* Bootstrap toast.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : (e = e || self).Toast = t(e.jQuery, e.Util)
}(this, function(e, t) {
  "use strict";
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function r(e, t, r) {
      return t && n(e.prototype, t),
      r && n(e, r),
      e
  }
  function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
  function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
  }
  function s(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
              i(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
      }
      return e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var a = "toast"
    , l = "4.4.1"
    , u = "bs.toast"
    , c = "." + u
    , f = e.fn[a]
    , d = {
      CLICK_DISMISS: "click.dismiss" + c,
      HIDE: "hide" + c,
      HIDDEN: "hidden" + c,
      SHOW: "show" + c,
      SHOWN: "shown" + c
  }
    , h = {
      FADE: "fade",
      HIDE: "hide",
      SHOW: "show",
      SHOWING: "showing"
  }
    , p = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
  }
    , m = {
      animation: !0,
      autohide: !0,
      delay: 500
  }
    , g = {
      DATA_DISMISS: '[data-dismiss="toast"]'
  }
    , y = function() {
      function n(e, t) {
          this._element = e,
          this._config = this._getConfig(t),
          this._timeout = null,
          this._setListeners()
      }
      var i = n.prototype;
      return i.show = function() {
          var n = this
            , r = e.Event(d.SHOW);
          if (e(this._element).trigger(r),
          !r.isDefaultPrevented()) {
              this._config.animation && this._element.classList.add(h.FADE);
              var i = function() {
                  n._element.classList.remove(h.SHOWING),
                  n._element.classList.add(h.SHOW),
                  e(n._element).trigger(d.SHOWN),
                  n._config.autohide && (n._timeout = setTimeout(function() {
                      n.hide()
                  }, n._config.delay))
              };
              if (this._element.classList.remove(h.HIDE),
              t.reflow(this._element),
              this._element.classList.add(h.SHOWING),
              this._config.animation) {
                  var o = t.getTransitionDurationFromElement(this._element);
                  e(this._element).one(t.TRANSITION_END, i).emulateTransitionEnd(o)
              } else
                  i()
          }
      }
      ,
      i.hide = function() {
          if (this._element.classList.contains(h.SHOW)) {
              var t = e.Event(d.HIDE);
              e(this._element).trigger(t),
              t.isDefaultPrevented() || this._close()
          }
      }
      ,
      i.dispose = function() {
          clearTimeout(this._timeout),
          this._timeout = null,
          this._element.classList.contains(h.SHOW) && this._element.classList.remove(h.SHOW),
          e(this._element).off(d.CLICK_DISMISS),
          e.removeData(this._element, u),
          this._element = null,
          this._config = null
      }
      ,
      i._getConfig = function(n) {
          return n = s({}, m, {}, e(this._element).data(), {}, "object" == typeof n && n ? n : {}),
          t.typeCheckConfig(a, n, this.constructor.DefaultType),
          n
      }
      ,
      i._setListeners = function() {
          var t = this;
          e(this._element).on(d.CLICK_DISMISS, g.DATA_DISMISS, function() {
              return t.hide()
          })
      }
      ,
      i._close = function() {
          var n = this
            , r = function() {
              n._element.classList.add(h.HIDE),
              e(n._element).trigger(d.HIDDEN)
          };
          if (this._element.classList.remove(h.SHOW),
          this._config.animation) {
              var i = t.getTransitionDurationFromElement(this._element);
              e(this._element).one(t.TRANSITION_END, r).emulateTransitionEnd(i)
          } else
              r()
      }
      ,
      n._jQueryInterface = function(t) {
          return this.each(function() {
              var r = e(this)
                , i = r.data(u);
              if (i || (i = new n(this,"object" == typeof t && t),
              r.data(u, i)),
              "string" == typeof t) {
                  if ("undefined" == typeof i[t])
                      throw new TypeError('No method named "' + t + '"');
                  i[t](this)
              }
          })
      }
      ,
      r(n, null, [{
          key: "VERSION",
          get: function() {
              return l
          }
      }, {
          key: "DefaultType",
          get: function() {
              return p
          }
      }, {
          key: "Default",
          get: function() {
              return m
          }
      }]),
      n
  }();
  return e.fn[a] = y._jQueryInterface,
  e.fn[a].Constructor = y,
  e.fn[a].noConflict = function() {
      return e.fn[a] = f,
      y._jQueryInterface
  }
  ,
  y
}),
/*!
* Bootstrap collapse.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : (e = e || self).Collapse = t(e.jQuery, e.Util)
}(this, function(e, t) {
  "use strict";
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function r(e, t, r) {
      return t && n(e.prototype, t),
      r && n(e, r),
      e
  }
  function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
  function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
  }
  function s(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
              i(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
      }
      return e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var a = "collapse"
    , l = "4.4.1"
    , u = "bs.collapse"
    , c = "." + u
    , f = ".data-api"
    , d = e.fn[a]
    , h = {
      toggle: !0,
      parent: ""
  }
    , p = {
      toggle: "boolean",
      parent: "(string|element)"
  }
    , m = {
      SHOW: "show" + c,
      SHOWN: "shown" + c,
      HIDE: "hide" + c,
      HIDDEN: "hidden" + c,
      CLICK_DATA_API: "click" + c + f
  }
    , g = {
      SHOW: "show",
      COLLAPSE: "collapse",
      COLLAPSING: "collapsing",
      COLLAPSED: "collapsed"
  }
    , y = {
      WIDTH: "width",
      HEIGHT: "height"
  }
    , v = {
      ACTIVES: ".show, .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
  }
    , b = function() {
      function n(e, n) {
          this._isTransitioning = !1,
          this._element = e,
          this._config = this._getConfig(n),
          this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
          for (var r = [].slice.call(document.querySelectorAll(v.DATA_TOGGLE)), i = 0, o = r.length; i < o; i++) {
              var s = r[i]
                , a = t.getSelectorFromElement(s)
                , l = [].slice.call(document.querySelectorAll(a)).filter(function(t) {
                  return t === e
              });
              null !== a && l.length > 0 && (this._selector = a,
              this._triggerArray.push(s))
          }
          this._parent = this._config.parent ? this._getParent() : null,
          this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle()
      }
      var i = n.prototype;
      return i.toggle = function() {
          e(this._element).hasClass(g.SHOW) ? this.hide() : this.show()
      }
      ,
      i.show = function() {
          var r, i, o = this;
          if (!this._isTransitioning && !e(this._element).hasClass(g.SHOW) && (this._parent && 0 === (r = [].slice.call(this._parent.querySelectorAll(v.ACTIVES)).filter(function(e) {
              return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(g.COLLAPSE)
          })).length && (r = null),
          !(r && (i = e(r).not(this._selector).data(u)) && i._isTransitioning))) {
              var s = e.Event(m.SHOW);
              if (e(this._element).trigger(s),
              !s.isDefaultPrevented()) {
                  r && (n._jQueryInterface.call(e(r).not(this._selector), "hide"),
                  i || e(r).data(u, null));
                  var a = this._getDimension();
                  e(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING),
                  this._element.style[a] = 0,
                  this._triggerArray.length && e(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                  var l = function() {
                      e(o._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW),
                      o._element.style[a] = "",
                      o.setTransitioning(!1),
                      e(o._element).trigger(m.SHOWN)
                  }
                    , c = "scroll" + (a[0].toUpperCase() + a.slice(1))
                    , f = t.getTransitionDurationFromElement(this._element);
                  e(this._element).one(t.TRANSITION_END, l).emulateTransitionEnd(f),
                  this._element.style[a] = this._element[c] + "px"
              }
          }
      }
      ,
      i.hide = function() {
          var n = this;
          if (!this._isTransitioning && e(this._element).hasClass(g.SHOW)) {
              var r = e.Event(m.HIDE);
              if (e(this._element).trigger(r),
              !r.isDefaultPrevented()) {
                  var i = this._getDimension();
                  this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                  t.reflow(this._element),
                  e(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW);
                  var o = this._triggerArray.length;
                  if (o > 0)
                      for (var s = 0; s < o; s++) {
                          var a = this._triggerArray[s]
                            , l = t.getSelectorFromElement(a);
                          if (null !== l)
                              e([].slice.call(document.querySelectorAll(l))).hasClass(g.SHOW) || e(a).addClass(g.COLLAPSED).attr("aria-expanded", !1)
                      }
                  this.setTransitioning(!0);
                  var u = function() {
                      n.setTransitioning(!1),
                      e(n._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(m.HIDDEN)
                  };
                  this._element.style[i] = "";
                  var c = t.getTransitionDurationFromElement(this._element);
                  e(this._element).one(t.TRANSITION_END, u).emulateTransitionEnd(c)
              }
          }
      }
      ,
      i.setTransitioning = function(e) {
          this._isTransitioning = e
      }
      ,
      i.dispose = function() {
          e.removeData(this._element, u),
          this._config = null,
          this._parent = null,
          this._element = null,
          this._triggerArray = null,
          this._isTransitioning = null
      }
      ,
      i._getConfig = function(e) {
          return (e = s({}, h, {}, e)).toggle = Boolean(e.toggle),
          t.typeCheckConfig(a, e, p),
          e
      }
      ,
      i._getDimension = function() {
          return e(this._element).hasClass(y.WIDTH) ? y.WIDTH : y.HEIGHT
      }
      ,
      i._getParent = function() {
          var r, i = this;
          t.isElement(this._config.parent) ? (r = this._config.parent,
          "undefined" != typeof this._config.parent.jquery && (r = this._config.parent[0])) : r = document.querySelector(this._config.parent);
          var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
            , s = [].slice.call(r.querySelectorAll(o));
          return e(s).each(function(e, t) {
              i._addAriaAndCollapsedClass(n._getTargetFromElement(t), [t])
          }),
          r
      }
      ,
      i._addAriaAndCollapsedClass = function(t, n) {
          var r = e(t).hasClass(g.SHOW);
          n.length && e(n).toggleClass(g.COLLAPSED, !r).attr("aria-expanded", r)
      }
      ,
      n._getTargetFromElement = function(e) {
          var n = t.getSelectorFromElement(e);
          return n ? document.querySelector(n) : null
      }
      ,
      n._jQueryInterface = function(t) {
          return this.each(function() {
              var r = e(this)
                , i = r.data(u)
                , o = s({}, h, {}, r.data(), {}, "object" == typeof t && t ? t : {});
              if (!i && o.toggle && /show|hide/.test(t) && (o.toggle = !1),
              i || (i = new n(this,o),
              r.data(u, i)),
              "string" == typeof t) {
                  if ("undefined" == typeof i[t])
                      throw new TypeError('No method named "' + t + '"');
                  i[t]()
              }
          })
      }
      ,
      r(n, null, [{
          key: "VERSION",
          get: function() {
              return l
          }
      }, {
          key: "Default",
          get: function() {
              return h
          }
      }]),
      n
  }();
  return e(document).on(m.CLICK_DATA_API, v.DATA_TOGGLE, function(n) {
      "A" === n.currentTarget.tagName && n.preventDefault();
      var r = e(this)
        , i = t.getSelectorFromElement(this)
        , o = [].slice.call(document.querySelectorAll(i));
      e(o).each(function() {
          var t = e(this)
            , n = t.data(u) ? "toggle" : r.data();
          b._jQueryInterface.call(t, n)
      })
  }),
  e.fn[a] = b._jQueryInterface,
  e.fn[a].Constructor = b,
  e.fn[a].noConflict = function() {
      return e.fn[a] = d,
      b._jQueryInterface
  }
  ,
  b
}),
/*!
* Bootstrap button.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : (e = e || self).Button = t(e.jQuery)
}(this, function(e) {
  "use strict";
  function t(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function n(e, n, r) {
      return n && t(e.prototype, n),
      r && t(e, r),
      e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e;
  var r = "button"
    , i = "4.4.1"
    , o = "bs.button"
    , s = "." + o
    , a = ".data-api"
    , l = e.fn[r]
    , u = {
      ACTIVE: "active",
      BUTTON: "btn",
      FOCUS: "focus"
  }
    , c = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLES: '[data-toggle="buttons"]',
      DATA_TOGGLE: '[data-toggle="button"]',
      DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
      INPUT: 'input:not([type="hidden"])',
      ACTIVE: ".active",
      BUTTON: ".btn"
  }
    , f = {
      CLICK_DATA_API: "click" + s + a,
      FOCUS_BLUR_DATA_API: "focus" + s + a + " blur" + s + a,
      LOAD_DATA_API: "load" + s + a
  }
    , d = function() {
      function t(e) {
          this._element = e
      }
      var r = t.prototype;
      return r.toggle = function() {
          var t = !0
            , n = !0
            , r = e(this._element).closest(c.DATA_TOGGLES)[0];
          if (r) {
              var i = this._element.querySelector(c.INPUT);
              if (i) {
                  if ("radio" === i.type)
                      if (i.checked && this._element.classList.contains(u.ACTIVE))
                          t = !1;
                      else {
                          var o = r.querySelector(c.ACTIVE);
                          o && e(o).removeClass(u.ACTIVE)
                      }
                  else
                      "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(u.ACTIVE) && (t = !1) : t = !1;
                  t && (i.checked = !this._element.classList.contains(u.ACTIVE),
                  e(i).trigger("change")),
                  i.focus(),
                  n = !1
              }
          }
          this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(u.ACTIVE)),
          t && e(this._element).toggleClass(u.ACTIVE))
      }
      ,
      r.dispose = function() {
          e.removeData(this._element, o),
          this._element = null
      }
      ,
      t._jQueryInterface = function(n) {
          return this.each(function() {
              var r = e(this).data(o);
              r || (r = new t(this),
              e(this).data(o, r)),
              "toggle" === n && r[n]()
          })
      }
      ,
      n(t, null, [{
          key: "VERSION",
          get: function() {
              return i
          }
      }]),
      t
  }();
  return e(document).on(f.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(t) {
      var n = t.target;
      if (e(n).hasClass(u.BUTTON) || (n = e(n).closest(c.BUTTON)[0]),
      !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
          t.preventDefault();
      else {
          var r = n.querySelector(c.INPUT);
          if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled")))
              return void t.preventDefault();
          d._jQueryInterface.call(e(n), "toggle")
      }
  }).on(f.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(t) {
      var n = e(t.target).closest(c.BUTTON)[0];
      e(n).toggleClass(u.FOCUS, /^focus(in)?$/.test(t.type))
  }),
  e(window).on(f.LOAD_DATA_API, function() {
      for (var e = [].slice.call(document.querySelectorAll(c.DATA_TOGGLES_BUTTONS)), t = 0, n = e.length; t < n; t++) {
          var r = e[t]
            , i = r.querySelector(c.INPUT);
          i.checked || i.hasAttribute("checked") ? r.classList.add(u.ACTIVE) : r.classList.remove(u.ACTIVE)
      }
      for (var o = 0, s = (e = [].slice.call(document.querySelectorAll(c.DATA_TOGGLE))).length; o < s; o++) {
          var a = e[o];
          "true" === a.getAttribute("aria-pressed") ? a.classList.add(u.ACTIVE) : a.classList.remove(u.ACTIVE)
      }
  }),
  e.fn[r] = d._jQueryInterface,
  e.fn[r].Constructor = d,
  e.fn[r].noConflict = function() {
      return e.fn[r] = l,
      d._jQueryInterface
  }
  ,
  d
}),
/*!
* Bootstrap tooltip.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("popper.js"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "popper.js", "./util.js"], t) : (e = e || self).Tooltip = t(e.jQuery, e.Popper, e.Util)
}(this, function(e, t, n) {
  "use strict";
  function r(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function i(e, t, n) {
      return t && r(e.prototype, t),
      n && r(e, n),
      e
  }
  function o(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
  function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
  }
  function a(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(n), !0).forEach(function(t) {
              o(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
      }
      return e
  }
  function l(e, t) {
      var n = e.nodeName.toLowerCase();
      if (-1 !== t.indexOf(n))
          return -1 === c.indexOf(n) || Boolean(e.nodeValue.match(d) || e.nodeValue.match(h));
      for (var r = t.filter(function(e) {
          return e instanceof RegExp
      }), i = 0, o = r.length; i < o; i++)
          if (n.match(r[i]))
              return !0;
      return !1
  }
  function u(e, t, n) {
      if (0 === e.length)
          return e;
      if (n && "function" == typeof n)
          return n(e);
      for (var r = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), s = function(e) {
          var n = o[e]
            , r = n.nodeName.toLowerCase();
          if (-1 === i.indexOf(n.nodeName.toLowerCase()))
              return n.parentNode.removeChild(n),
              "continue";
          var s = [].slice.call(n.attributes)
            , a = [].concat(t["*"] || [], t[r] || []);
          s.forEach(function(e) {
              l(e, a) || n.removeAttribute(e.nodeName)
          })
      }, a = 0, u = o.length; a < u; a++)
          s(a);
      return r.body.innerHTML
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t,
  n = n && n.hasOwnProperty("default") ? n["default"] : n;
  var c = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
    , f = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
  }
    , d = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
    , h = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
    , p = "tooltip"
    , m = "4.4.1"
    , g = "bs.tooltip"
    , y = "." + g
    , v = e.fn[p]
    , b = "bs-tooltip"
    , E = new RegExp("(^|\\s)" + b + "\\S+","g")
    , _ = ["sanitize", "whiteList", "sanitizeFn"]
    , w = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)"
  }
    , T = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
  }
    , S = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: f,
      popperConfig: null
  }
    , C = {
      SHOW: "show",
      OUT: "out"
  }
    , A = {
      HIDE: "hide" + y,
      HIDDEN: "hidden" + y,
      SHOW: "show" + y,
      SHOWN: "shown" + y,
      INSERTED: "inserted" + y,
      CLICK: "click" + y,
      FOCUSIN: "focusin" + y,
      FOCUSOUT: "focusout" + y,
      MOUSEENTER: "mouseenter" + y,
      MOUSELEAVE: "mouseleave" + y
  }
    , x = {
      FADE: "fade",
      SHOW: "show"
  }
    , O = {
      TOOLTIP: ".tooltip",
      TOOLTIP_INNER: ".tooltip-inner",
      ARROW: ".arrow"
  }
    , D = {
      HOVER: "hover",
      FOCUS: "focus",
      CLICK: "click",
      MANUAL: "manual"
  }
    , I = function() {
      function r(e, n) {
          if (void 0 === t)
              throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
          this._isEnabled = !0,
          this._timeout = 0,
          this._hoverState = "",
          this._activeTrigger = {},
          this._popper = null,
          this.element = e,
          this.config = this._getConfig(n),
          this.tip = null,
          this._setListeners()
      }
      var o = r.prototype;
      return o.enable = function() {
          this._isEnabled = !0
      }
      ,
      o.disable = function() {
          this._isEnabled = !1
      }
      ,
      o.toggleEnabled = function() {
          this._isEnabled = !this._isEnabled
      }
      ,
      o.toggle = function(t) {
          if (this._isEnabled)
              if (t) {
                  var n = this.constructor.DATA_KEY
                    , r = e(t.currentTarget).data(n);
                  r || (r = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                  e(t.currentTarget).data(n, r)),
                  r._activeTrigger.click = !r._activeTrigger.click,
                  r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
              } else {
                  if (e(this.getTipElement()).hasClass(x.SHOW))
                      return void this._leave(null, this);
                  this._enter(null, this)
              }
      }
      ,
      o.dispose = function() {
          clearTimeout(this._timeout),
          e.removeData(this.element, this.constructor.DATA_KEY),
          e(this.element).off(this.constructor.EVENT_KEY),
          e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
          this.tip && e(this.tip).remove(),
          this._isEnabled = null,
          this._timeout = null,
          this._hoverState = null,
          this._activeTrigger = null,
          this._popper && this._popper.destroy(),
          this._popper = null,
          this.element = null,
          this.config = null,
          this.tip = null
      }
      ,
      o.show = function() {
          var r = this;
          if ("none" === e(this.element).css("display"))
              throw new Error("Please use show on visible elements");
          var i = e.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
              e(this.element).trigger(i);
              var o = n.findShadowRoot(this.element)
                , s = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !s)
                  return;
              var a = this.getTipElement()
                , l = n.getUID(this.constructor.NAME);
              a.setAttribute("id", l),
              this.element.setAttribute("aria-describedby", l),
              this.setContent(),
              this.config.animation && e(a).addClass(x.FADE);
              var u = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement
                , c = this._getAttachment(u);
              this.addAttachmentClass(c);
              var f = this._getContainer();
              e(a).data(this.constructor.DATA_KEY, this),
              e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(f),
              e(this.element).trigger(this.constructor.Event.INSERTED),
              this._popper = new t(this.element,a,this._getPopperConfig(c)),
              e(a).addClass(x.SHOW),
              "ontouchstart"in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
              var d = function() {
                  r.config.animation && r._fixTransition();
                  var t = r._hoverState;
                  r._hoverState = null,
                  e(r.element).trigger(r.constructor.Event.SHOWN),
                  t === C.OUT && r._leave(null, r)
              };
              if (e(this.tip).hasClass(x.FADE)) {
                  var h = n.getTransitionDurationFromElement(this.tip);
                  e(this.tip).one(n.TRANSITION_END, d).emulateTransitionEnd(h)
              } else
                  d()
          }
      }
      ,
      o.hide = function(t) {
          var r = this
            , i = this.getTipElement()
            , o = e.Event(this.constructor.Event.HIDE)
            , s = function() {
              r._hoverState !== C.SHOW && i.parentNode && i.parentNode.removeChild(i),
              r._cleanTipClass(),
              r.element.removeAttribute("aria-describedby"),
              e(r.element).trigger(r.constructor.Event.HIDDEN),
              null !== r._popper && r._popper.destroy(),
              t && t()
          };
          if (e(this.element).trigger(o),
          !o.isDefaultPrevented()) {
              if (e(i).removeClass(x.SHOW),
              "ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
              this._activeTrigger[D.CLICK] = !1,
              this._activeTrigger[D.FOCUS] = !1,
              this._activeTrigger[D.HOVER] = !1,
              e(this.tip).hasClass(x.FADE)) {
                  var a = n.getTransitionDurationFromElement(i);
                  e(i).one(n.TRANSITION_END, s).emulateTransitionEnd(a)
              } else
                  s();
              this._hoverState = ""
          }
      }
      ,
      o.update = function() {
          null !== this._popper && this._popper.scheduleUpdate()
      }
      ,
      o.isWithContent = function() {
          return Boolean(this.getTitle())
      }
      ,
      o.addAttachmentClass = function(t) {
          e(this.getTipElement()).addClass(b + "-" + t)
      }
      ,
      o.getTipElement = function() {
          return this.tip = this.tip || e(this.config.template)[0],
          this.tip
      }
      ,
      o.setContent = function() {
          var t = this.getTipElement();
          this.setElementContent(e(t.querySelectorAll(O.TOOLTIP_INNER)), this.getTitle()),
          e(t).removeClass(x.FADE + " " + x.SHOW)
      }
      ,
      o.setElementContent = function(t, n) {
          "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = u(n, this.config.whiteList, this.config.sanitizeFn)),
          t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
      }
      ,
      o.getTitle = function() {
          var e = this.element.getAttribute("data-original-title");
          return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
          e
      }
      ,
      o._getPopperConfig = function(e) {
          var t = this;
          return a({}, {
              placement: e,
              modifiers: {
                  offset: this._getOffset(),
                  flip: {
                      behavior: this.config.fallbackPlacement
                  },
                  arrow: {
                      element: O.ARROW
                  },
                  preventOverflow: {
                      boundariesElement: this.config.boundary
                  }
              },
              onCreate: function(e) {
                  e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
              },
              onUpdate: function(e) {
                  return t._handlePopperPlacementChange(e)
              }
          }, {}, this.config.popperConfig)
      }
      ,
      o._getOffset = function() {
          var e = this
            , t = {};
          return "function" == typeof this.config.offset ? t.fn = function(t) {
              return t.offsets = a({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}),
              t
          }
          : t.offset = this.config.offset,
          t
      }
      ,
      o._getContainer = function() {
          return !1 === this.config.container ? document.body : n.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
      }
      ,
      o._getAttachment = function(e) {
          return T[e.toUpperCase()]
      }
      ,
      o._setListeners = function() {
          var t = this;
          this.config.trigger.split(" ").forEach(function(n) {
              if ("click" === n)
                  e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                      return t.toggle(e)
                  });
              else if (n !== D.MANUAL) {
                  var r = n === D.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                    , i = n === D.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                  e(t.element).on(r, t.config.selector, function(e) {
                      return t._enter(e)
                  }).on(i, t.config.selector, function(e) {
                      return t._leave(e)
                  })
              }
          }),
          this._hideModalHandler = function() {
              t.element && t.hide()
          }
          ,
          e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
          this.config.selector ? this.config = a({}, this.config, {
              trigger: "manual",
              selector: ""
          }) : this._fixTitle()
      }
      ,
      o._fixTitle = function() {
          var e = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
          this.element.setAttribute("title", ""))
      }
      ,
      o._enter = function(t, n) {
          var r = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
          e(t.currentTarget).data(r, n)),
          t && (n._activeTrigger["focusin" === t.type ? D.FOCUS : D.HOVER] = !0),
          e(n.getTipElement()).hasClass(x.SHOW) || n._hoverState === C.SHOW ? n._hoverState = C.SHOW : (clearTimeout(n._timeout),
          n._hoverState = C.SHOW,
          n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
              n._hoverState === C.SHOW && n.show()
          }, n.config.delay.show) : n.show())
      }
      ,
      o._leave = function(t, n) {
          var r = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
          e(t.currentTarget).data(r, n)),
          t && (n._activeTrigger["focusout" === t.type ? D.FOCUS : D.HOVER] = !1),
          n._isWithActiveTrigger() || (clearTimeout(n._timeout),
          n._hoverState = C.OUT,
          n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
              n._hoverState === C.OUT && n.hide()
          }, n.config.delay.hide) : n.hide())
      }
      ,
      o._isWithActiveTrigger = function() {
          for (var e in this._activeTrigger)
              if (this._activeTrigger[e])
                  return !0;
          return !1
      }
      ,
      o._getConfig = function(t) {
          var r = e(this.element).data();
          return Object.keys(r).forEach(function(e) {
              -1 !== _.indexOf(e) && delete r[e]
          }),
          "number" == typeof (t = a({}, this.constructor.Default, {}, r, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
              show: t.delay,
              hide: t.delay
          }),
          "number" == typeof t.title && (t.title = t.title.toString()),
          "number" == typeof t.content && (t.content = t.content.toString()),
          n.typeCheckConfig(p, t, this.constructor.DefaultType),
          t.sanitize && (t.template = u(t.template, t.whiteList, t.sanitizeFn)),
          t
      }
      ,
      o._getDelegateConfig = function() {
          var e = {};
          if (this.config)
              for (var t in this.config)
                  this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
          return e
      }
      ,
      o._cleanTipClass = function() {
          var t = e(this.getTipElement())
            , n = t.attr("class").match(E);
          null !== n && n.length && t.removeClass(n.join(""))
      }
      ,
      o._handlePopperPlacementChange = function(e) {
          var t = e.instance;
          this.tip = t.popper,
          this._cleanTipClass(),
          this.addAttachmentClass(this._getAttachment(e.placement))
      }
      ,
      o._fixTransition = function() {
          var t = this.getTipElement()
            , n = this.config.animation;
          null === t.getAttribute("x-placement") && (e(t).removeClass(x.FADE),
          this.config.animation = !1,
          this.hide(),
          this.show(),
          this.config.animation = n)
      }
      ,
      r._jQueryInterface = function(t) {
          return this.each(function() {
              var n = e(this).data(g)
                , i = "object" == typeof t && t;
              if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this,i),
              e(this).data(g, n)),
              "string" == typeof t)) {
                  if ("undefined" == typeof n[t])
                      throw new TypeError('No method named "' + t + '"');
                  n[t]()
              }
          })
      }
      ,
      i(r, null, [{
          key: "VERSION",
          get: function() {
              return m
          }
      }, {
          key: "Default",
          get: function() {
              return S
          }
      }, {
          key: "NAME",
          get: function() {
              return p
          }
      }, {
          key: "DATA_KEY",
          get: function() {
              return g
          }
      }, {
          key: "Event",
          get: function() {
              return A
          }
      }, {
          key: "EVENT_KEY",
          get: function() {
              return y
          }
      }, {
          key: "DefaultType",
          get: function() {
              return w
          }
      }]),
      r
  }();
  return e.fn[p] = I._jQueryInterface,
  e.fn[p].Constructor = I,
  e.fn[p].noConflict = function() {
      return e.fn[p] = v,
      I._jQueryInterface
  }
  ,
  I
}),
/*!
* Bootstrap popover.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./tooltip.js")) : "function" == typeof define && define.amd ? define(["jquery", "./tooltip.js"], t) : (e = e || self).Popover = t(e.jQuery, e.Tooltip)
}(this, function(e, t) {
  "use strict";
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function r(e, t, r) {
      return t && n(e.prototype, t),
      r && n(e, r),
      e
  }
  function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
  function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
  }
  function s(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
              i(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
      }
      return e
  }
  function a(e, t) {
      e.prototype = Object.create(t.prototype),
      e.prototype.constructor = e,
      e.__proto__ = t
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var l = "popover"
    , u = "4.4.1"
    , c = "bs.popover"
    , f = "." + c
    , d = e.fn[l]
    , h = "bs-popover"
    , p = new RegExp("(^|\\s)" + h + "\\S+","g")
    , m = s({}, t.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  })
    , g = s({}, t.DefaultType, {
      content: "(string|element|function)"
  })
    , y = {
      FADE: "fade",
      SHOW: "show"
  }
    , v = {
      TITLE: ".popover-header",
      CONTENT: ".popover-body"
  }
    , b = {
      HIDE: "hide" + f,
      HIDDEN: "hidden" + f,
      SHOW: "show" + f,
      SHOWN: "shown" + f,
      INSERTED: "inserted" + f,
      CLICK: "click" + f,
      FOCUSIN: "focusin" + f,
      FOCUSOUT: "focusout" + f,
      MOUSEENTER: "mouseenter" + f,
      MOUSELEAVE: "mouseleave" + f
  }
    , E = function(t) {
      function n() {
          return t.apply(this, arguments) || this
      }
      a(n, t);
      var i = n.prototype;
      return i.isWithContent = function() {
          return this.getTitle() || this._getContent()
      }
      ,
      i.addAttachmentClass = function(t) {
          e(this.getTipElement()).addClass(h + "-" + t)
      }
      ,
      i.getTipElement = function() {
          return this.tip = this.tip || e(this.config.template)[0],
          this.tip
      }
      ,
      i.setContent = function() {
          var t = e(this.getTipElement());
          this.setElementContent(t.find(v.TITLE), this.getTitle());
          var n = this._getContent();
          "function" == typeof n && (n = n.call(this.element)),
          this.setElementContent(t.find(v.CONTENT), n),
          t.removeClass(y.FADE + " " + y.SHOW)
      }
      ,
      i._getContent = function() {
          return this.element.getAttribute("data-content") || this.config.content
      }
      ,
      i._cleanTipClass = function() {
          var t = e(this.getTipElement())
            , n = t.attr("class").match(p);
          null !== n && n.length > 0 && t.removeClass(n.join(""))
      }
      ,
      n._jQueryInterface = function(t) {
          return this.each(function() {
              var r = e(this).data(c)
                , i = "object" == typeof t ? t : null;
              if ((r || !/dispose|hide/.test(t)) && (r || (r = new n(this,i),
              e(this).data(c, r)),
              "string" == typeof t)) {
                  if ("undefined" == typeof r[t])
                      throw new TypeError('No method named "' + t + '"');
                  r[t]()
              }
          })
      }
      ,
      r(n, null, [{
          key: "VERSION",
          get: function() {
              return u
          }
      }, {
          key: "Default",
          get: function() {
              return m
          }
      }, {
          key: "NAME",
          get: function() {
              return l
          }
      }, {
          key: "DATA_KEY",
          get: function() {
              return c
          }
      }, {
          key: "Event",
          get: function() {
              return b
          }
      }, {
          key: "EVENT_KEY",
          get: function() {
              return f
          }
      }, {
          key: "DefaultType",
          get: function() {
              return g
          }
      }]),
      n
  }(t);
  return e.fn[l] = E._jQueryInterface,
  e.fn[l].Constructor = E,
  e.fn[l].noConflict = function() {
      return e.fn[l] = d,
      E._jQueryInterface
  }
  ,
  E
}),
/*!
* Bootstrap carousel.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : (e = e || self).Carousel = t(e.jQuery, e.Util)
}(this, function(e, t) {
  "use strict";
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function r(e, t, r) {
      return t && n(e.prototype, t),
      r && n(e, r),
      e
  }
  function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
  function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
  }
  function s(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
              i(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
      }
      return e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var a = "carousel"
    , l = "4.4.1"
    , u = "bs.carousel"
    , c = "." + u
    , f = ".data-api"
    , d = e.fn[a]
    , h = 37
    , p = 39
    , m = 500
    , g = 40
    , y = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
  }
    , v = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
  }
    , b = {
      NEXT: "next",
      PREV: "prev",
      LEFT: "left",
      RIGHT: "right"
  }
    , E = {
      SLIDE: "slide" + c,
      SLID: "slid" + c,
      KEYDOWN: "keydown" + c,
      MOUSEENTER: "mouseenter" + c,
      MOUSELEAVE: "mouseleave" + c,
      TOUCHSTART: "touchstart" + c,
      TOUCHMOVE: "touchmove" + c,
      TOUCHEND: "touchend" + c,
      POINTERDOWN: "pointerdown" + c,
      POINTERUP: "pointerup" + c,
      DRAG_START: "dragstart" + c,
      LOAD_DATA_API: "load" + c + f,
      CLICK_DATA_API: "click" + c + f
  }
    , _ = {
      CAROUSEL: "carousel",
      ACTIVE: "active",
      SLIDE: "slide",
      RIGHT: "carousel-item-right",
      LEFT: "carousel-item-left",
      NEXT: "carousel-item-next",
      PREV: "carousel-item-prev",
      ITEM: "carousel-item",
      POINTER_EVENT: "pointer-event"
  }
    , w = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      ITEM_IMG: ".carousel-item img",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
  }
    , T = {
      TOUCH: "touch",
      PEN: "pen"
  }
    , S = function() {
      function n(e, t) {
          this._items = null,
          this._interval = null,
          this._activeElement = null,
          this._isPaused = !1,
          this._isSliding = !1,
          this.touchTimeout = null,
          this.touchStartX = 0,
          this.touchDeltaX = 0,
          this._config = this._getConfig(t),
          this._element = e,
          this._indicatorsElement = this._element.querySelector(w.INDICATORS),
          this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
          this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
          this._addEventListeners()
      }
      var i = n.prototype;
      return i.next = function() {
          this._isSliding || this._slide(b.NEXT)
      }
      ,
      i.nextWhenVisible = function() {
          !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
      }
      ,
      i.prev = function() {
          this._isSliding || this._slide(b.PREV)
      }
      ,
      i.pause = function(e) {
          e || (this._isPaused = !0),
          this._element.querySelector(w.NEXT_PREV) && (t.triggerTransitionEnd(this._element),
          this.cycle(!0)),
          clearInterval(this._interval),
          this._interval = null
      }
      ,
      i.cycle = function(e) {
          e || (this._isPaused = !1),
          this._interval && (clearInterval(this._interval),
          this._interval = null),
          this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
      }
      ,
      i.to = function(t) {
          var n = this;
          this._activeElement = this._element.querySelector(w.ACTIVE_ITEM);
          var r = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                  e(this._element).one(E.SLID, function() {
                      return n.to(t)
                  });
              else {
                  if (r === t)
                      return this.pause(),
                      void this.cycle();
                  var i = t > r ? b.NEXT : b.PREV;
                  this._slide(i, this._items[t])
              }
      }
      ,
      i.dispose = function() {
          e(this._element).off(c),
          e.removeData(this._element, u),
          this._items = null,
          this._config = null,
          this._element = null,
          this._interval = null,
          this._isPaused = null,
          this._isSliding = null,
          this._activeElement = null,
          this._indicatorsElement = null
      }
      ,
      i._getConfig = function(e) {
          return e = s({}, y, {}, e),
          t.typeCheckConfig(a, e, v),
          e
      }
      ,
      i._handleSwipe = function() {
          var e = Math.abs(this.touchDeltaX);
          if (!(e <= g)) {
              var t = e / this.touchDeltaX;
              this.touchDeltaX = 0,
              t > 0 && this.prev(),
              t < 0 && this.next()
          }
      }
      ,
      i._addEventListeners = function() {
          var t = this;
          this._config.keyboard && e(this._element).on(E.KEYDOWN, function(e) {
              return t._keydown(e)
          }),
          "hover" === this._config.pause && e(this._element).on(E.MOUSEENTER, function(e) {
              return t.pause(e)
          }).on(E.MOUSELEAVE, function(e) {
              return t.cycle(e)
          }),
          this._config.touch && this._addTouchEventListeners()
      }
      ,
      i._addTouchEventListeners = function() {
          var t = this;
          if (this._touchSupported) {
              var n = function(e) {
                  t._pointerEvent && T[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
              }
                , r = function(e) {
                  e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
              }
                , i = function(e) {
                  t._pointerEvent && T[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause && (t.pause(),
                  t.touchTimeout && clearTimeout(t.touchTimeout),
                  t.touchTimeout = setTimeout(function(e) {
                      return t.cycle(e)
                  }, m + t._config.interval))
              };
              e(this._element.querySelectorAll(w.ITEM_IMG)).on(E.DRAG_START, function(e) {
                  return e.preventDefault()
              }),
              this._pointerEvent ? (e(this._element).on(E.POINTERDOWN, function(e) {
                  return n(e)
              }),
              e(this._element).on(E.POINTERUP, function(e) {
                  return i(e)
              }),
              this._element.classList.add(_.POINTER_EVENT)) : (e(this._element).on(E.TOUCHSTART, function(e) {
                  return n(e)
              }),
              e(this._element).on(E.TOUCHMOVE, function(e) {
                  return r(e)
              }),
              e(this._element).on(E.TOUCHEND, function(e) {
                  return i(e)
              }))
          }
      }
      ,
      i._keydown = function(e) {
          if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
              case h:
                  e.preventDefault(),
                  this.prev();
                  break;
              case p:
                  e.preventDefault(),
                  this.next()
              }
      }
      ,
      i._getItemIndex = function(e) {
          return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(w.ITEM)) : [],
          this._items.indexOf(e)
      }
      ,
      i._getItemByDirection = function(e, t) {
          var n = e === b.NEXT
            , r = e === b.PREV
            , i = this._getItemIndex(t)
            , o = this._items.length - 1;
          if ((r && 0 === i || n && i === o) && !this._config.wrap)
              return t;
          var s = (i + (e === b.PREV ? -1 : 1)) % this._items.length;
          return -1 === s ? this._items[this._items.length - 1] : this._items[s]
      }
      ,
      i._triggerSlideEvent = function(t, n) {
          var r = this._getItemIndex(t)
            , i = this._getItemIndex(this._element.querySelector(w.ACTIVE_ITEM))
            , o = e.Event(E.SLIDE, {
              relatedTarget: t,
              direction: n,
              from: i,
              to: r
          });
          return e(this._element).trigger(o),
          o
      }
      ,
      i._setActiveIndicatorElement = function(t) {
          if (this._indicatorsElement) {
              var n = [].slice.call(this._indicatorsElement.querySelectorAll(w.ACTIVE));
              e(n).removeClass(_.ACTIVE);
              var r = this._indicatorsElement.children[this._getItemIndex(t)];
              r && e(r).addClass(_.ACTIVE)
          }
      }
      ,
      i._slide = function(n, r) {
          var i, o, s, a = this, l = this._element.querySelector(w.ACTIVE_ITEM), u = this._getItemIndex(l), c = r || l && this._getItemByDirection(n, l), f = this._getItemIndex(c), d = Boolean(this._interval);
          if (n === b.NEXT ? (i = _.LEFT,
          o = _.NEXT,
          s = b.LEFT) : (i = _.RIGHT,
          o = _.PREV,
          s = b.RIGHT),
          c && e(c).hasClass(_.ACTIVE))
              this._isSliding = !1;
          else if (!this._triggerSlideEvent(c, s).isDefaultPrevented() && l && c) {
              this._isSliding = !0,
              d && this.pause(),
              this._setActiveIndicatorElement(c);
              var h = e.Event(E.SLID, {
                  relatedTarget: c,
                  direction: s,
                  from: u,
                  to: f
              });
              if (e(this._element).hasClass(_.SLIDE)) {
                  e(c).addClass(o),
                  t.reflow(c),
                  e(l).addClass(i),
                  e(c).addClass(i);
                  var p = parseInt(c.getAttribute("data-interval"), 10);
                  p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                  this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                  var m = t.getTransitionDurationFromElement(l);
                  e(l).one(t.TRANSITION_END, function() {
                      e(c).removeClass(i + " " + o).addClass(_.ACTIVE),
                      e(l).removeClass(_.ACTIVE + " " + o + " " + i),
                      a._isSliding = !1,
                      setTimeout(function() {
                          return e(a._element).trigger(h)
                      }, 0)
                  }).emulateTransitionEnd(m)
              } else
                  e(l).removeClass(_.ACTIVE),
                  e(c).addClass(_.ACTIVE),
                  this._isSliding = !1,
                  e(this._element).trigger(h);
              d && this.cycle()
          }
      }
      ,
      n._jQueryInterface = function(t) {
          return this.each(function() {
              var r = e(this).data(u)
                , i = s({}, y, {}, e(this).data());
              "object" == typeof t && (i = s({}, i, {}, t));
              var o = "string" == typeof t ? t : i.slide;
              if (r || (r = new n(this,i),
              e(this).data(u, r)),
              "number" == typeof t)
                  r.to(t);
              else if ("string" == typeof o) {
                  if ("undefined" == typeof r[o])
                      throw new TypeError('No method named "' + o + '"');
                  r[o]()
              } else
                  i.interval && i.ride && (r.pause(),
                  r.cycle())
          })
      }
      ,
      n._dataApiClickHandler = function(r) {
          var i = t.getSelectorFromElement(this);
          if (i) {
              var o = e(i)[0];
              if (o && e(o).hasClass(_.CAROUSEL)) {
                  var a = s({}, e(o).data(), {}, e(this).data())
                    , l = this.getAttribute("data-slide-to");
                  l && (a.interval = !1),
                  n._jQueryInterface.call(e(o), a),
                  l && e(o).data(u).to(l),
                  r.preventDefault()
              }
          }
      }
      ,
      r(n, null, [{
          key: "VERSION",
          get: function() {
              return l
          }
      }, {
          key: "Default",
          get: function() {
              return y
          }
      }]),
      n
  }();
  return e(document).on(E.CLICK_DATA_API, w.DATA_SLIDE, S._dataApiClickHandler),
  e(window).on(E.LOAD_DATA_API, function() {
      for (var t = [].slice.call(document.querySelectorAll(w.DATA_RIDE)), n = 0, r = t.length; n < r; n++) {
          var i = e(t[n]);
          S._jQueryInterface.call(i, i.data())
      }
  }),
  e.fn[a] = S._jQueryInterface,
  e.fn[a].Constructor = S,
  e.fn[a].noConflict = function() {
      return e.fn[a] = d,
      S._jQueryInterface
  }
  ,
  S
}),
/*!
* Bootstrap scrollspy.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : (e = e || self).ScrollSpy = t(e.jQuery, e.Util)
}(this, function(e, t) {
  "use strict";
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function r(e, t, r) {
      return t && n(e.prototype, t),
      r && n(e, r),
      e
  }
  function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
  function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
  }
  function s(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
              i(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
      }
      return e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var a = "scrollspy"
    , l = "4.4.1"
    , u = "bs.scrollspy"
    , c = "." + u
    , f = ".data-api"
    , d = e.fn[a]
    , h = {
      offset: 10,
      method: "auto",
      target: ""
  }
    , p = {
      offset: "number",
      method: "string",
      target: "(string|element)"
  }
    , m = {
      ACTIVATE: "activate" + c,
      SCROLL: "scroll" + c,
      LOAD_DATA_API: "load" + c + f
  }
    , g = {
      DROPDOWN_ITEM: "dropdown-item",
      DROPDOWN_MENU: "dropdown-menu",
      ACTIVE: "active"
  }
    , y = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      NAV_LIST_GROUP: ".nav, .list-group",
      NAV_LINKS: ".nav-link",
      NAV_ITEMS: ".nav-item",
      LIST_ITEMS: ".list-group-item",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
  }
    , v = {
      OFFSET: "offset",
      POSITION: "position"
  }
    , b = function() {
      function n(t, n) {
          var r = this;
          this._element = t,
          this._scrollElement = "BODY" === t.tagName ? window : t,
          this._config = this._getConfig(n),
          this._selector = this._config.target + " " + y.NAV_LINKS + "," + this._config.target + " " + y.LIST_ITEMS + "," + this._config.target + " " + y.DROPDOWN_ITEMS,
          this._offsets = [],
          this._targets = [],
          this._activeTarget = null,
          this._scrollHeight = 0,
          e(this._scrollElement).on(m.SCROLL, function(e) {
              return r._process(e)
          }),
          this.refresh(),
          this._process()
      }
      var i = n.prototype;
      return i.refresh = function() {
          var n = this
            , r = this._scrollElement === this._scrollElement.window ? v.OFFSET : v.POSITION
            , i = "auto" === this._config.method ? r : this._config.method
            , o = i === v.POSITION ? this._getScrollTop() : 0;
          this._offsets = [],
          this._targets = [],
          this._scrollHeight = this._getScrollHeight(),
          [].slice.call(document.querySelectorAll(this._selector)).map(function(n) {
              var r, s = t.getSelectorFromElement(n);
              if (s && (r = document.querySelector(s)),
              r) {
                  var a = r.getBoundingClientRect();
                  if (a.width || a.height)
                      return [e(r)[i]().top + o, s]
              }
              return null
          }).filter(function(e) {
              return e
          }).sort(function(e, t) {
              return e[0] - t[0]
          }).forEach(function(e) {
              n._offsets.push(e[0]),
              n._targets.push(e[1])
          })
      }
      ,
      i.dispose = function() {
          e.removeData(this._element, u),
          e(this._scrollElement).off(c),
          this._element = null,
          this._scrollElement = null,
          this._config = null,
          this._selector = null,
          this._offsets = null,
          this._targets = null,
          this._activeTarget = null,
          this._scrollHeight = null
      }
      ,
      i._getConfig = function(n) {
          if ("string" != typeof (n = s({}, h, {}, "object" == typeof n && n ? n : {})).target) {
              var r = e(n.target).attr("id");
              r || (r = t.getUID(a),
              e(n.target).attr("id", r)),
              n.target = "#" + r
          }
          return t.typeCheckConfig(a, n, p),
          n
      }
      ,
      i._getScrollTop = function() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
      }
      ,
      i._getScrollHeight = function() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }
      ,
      i._getOffsetHeight = function() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
      }
      ,
      i._process = function() {
          var e = this._getScrollTop() + this._config.offset
            , t = this._getScrollHeight()
            , n = this._config.offset + t - this._getOffsetHeight();
          if (this._scrollHeight !== t && this.refresh(),
          e >= n) {
              var r = this._targets[this._targets.length - 1];
              this._activeTarget !== r && this._activate(r)
          } else {
              if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                  return this._activeTarget = null,
                  void this._clear();
              for (var i = this._offsets.length; i--; ) {
                  this._activeTarget !== this._targets[i] && e >= this._offsets[i] && ("undefined" == typeof this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
              }
          }
      }
      ,
      i._activate = function(t) {
          this._activeTarget = t,
          this._clear();
          var n = this._selector.split(",").map(function(e) {
              return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
          })
            , r = e([].slice.call(document.querySelectorAll(n.join(","))));
          r.hasClass(g.DROPDOWN_ITEM) ? (r.closest(y.DROPDOWN).find(y.DROPDOWN_TOGGLE).addClass(g.ACTIVE),
          r.addClass(g.ACTIVE)) : (r.addClass(g.ACTIVE),
          r.parents(y.NAV_LIST_GROUP).prev(y.NAV_LINKS + ", " + y.LIST_ITEMS).addClass(g.ACTIVE),
          r.parents(y.NAV_LIST_GROUP).prev(y.NAV_ITEMS).children(y.NAV_LINKS).addClass(g.ACTIVE)),
          e(this._scrollElement).trigger(m.ACTIVATE, {
              relatedTarget: t
          })
      }
      ,
      i._clear = function() {
          [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
              return e.classList.contains(g.ACTIVE)
          }).forEach(function(e) {
              return e.classList.remove(g.ACTIVE)
          })
      }
      ,
      n._jQueryInterface = function(t) {
          return this.each(function() {
              var r = e(this).data(u);
              if (r || (r = new n(this,"object" == typeof t && t),
              e(this).data(u, r)),
              "string" == typeof t) {
                  if ("undefined" == typeof r[t])
                      throw new TypeError('No method named "' + t + '"');
                  r[t]()
              }
          })
      }
      ,
      r(n, null, [{
          key: "VERSION",
          get: function() {
              return l
          }
      }, {
          key: "Default",
          get: function() {
              return h
          }
      }]),
      n
  }();
  return e(window).on(m.LOAD_DATA_API, function() {
      for (var t = [].slice.call(document.querySelectorAll(y.DATA_SPY)), n = t.length; n--; ) {
          var r = e(t[n]);
          b._jQueryInterface.call(r, r.data())
      }
  }),
  e.fn[a] = b._jQueryInterface,
  e.fn[a].Constructor = b,
  e.fn[a].noConflict = function() {
      return e.fn[a] = d,
      b._jQueryInterface
  }
  ,
  b
}),
/*!
* Bootstrap modal.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : (e = e || self).Modal = t(e.jQuery, e.Util)
}(this, function(e, t) {
  "use strict";
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function r(e, t, r) {
      return t && n(e.prototype, t),
      r && n(e, r),
      e
  }
  function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
  function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
  }
  function s(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
              i(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
      }
      return e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var a = "modal"
    , l = "4.4.1"
    , u = "bs.modal"
    , c = "." + u
    , f = ".data-api"
    , d = e.fn[a]
    , h = 27
    , p = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
  }
    , m = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
  }
    , g = {
      HIDE: "hide" + c,
      HIDE_PREVENTED: "hidePrevented" + c,
      HIDDEN: "hidden" + c,
      SHOW: "show" + c,
      SHOWN: "shown" + c,
      FOCUSIN: "focusin" + c,
      RESIZE: "resize" + c,
      CLICK_DISMISS: "click.dismiss" + c,
      KEYDOWN_DISMISS: "keydown.dismiss" + c,
      MOUSEUP_DISMISS: "mouseup.dismiss" + c,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + c,
      CLICK_DATA_API: "click" + c + f
  }
    , y = {
      SCROLLABLE: "modal-dialog-scrollable",
      SCROLLBAR_MEASURER: "modal-scrollbar-measure",
      BACKDROP: "modal-backdrop",
      OPEN: "modal-open",
      FADE: "fade",
      SHOW: "show",
      STATIC: "modal-static"
  }
    , v = {
      DIALOG: ".modal-dialog",
      MODAL_BODY: ".modal-body",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      STICKY_CONTENT: ".sticky-top"
  }
    , b = function() {
      function n(e, t) {
          this._config = this._getConfig(t),
          this._element = e,
          this._dialog = e.querySelector(v.DIALOG),
          this._backdrop = null,
          this._isShown = !1,
          this._isBodyOverflowing = !1,
          this._ignoreBackdropClick = !1,
          this._isTransitioning = !1,
          this._scrollbarWidth = 0
      }
      var i = n.prototype;
      return i.toggle = function(e) {
          return this._isShown ? this.hide() : this.show(e)
      }
      ,
      i.show = function(t) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
              e(this._element).hasClass(y.FADE) && (this._isTransitioning = !0);
              var r = e.Event(g.SHOW, {
                  relatedTarget: t
              });
              e(this._element).trigger(r),
              this._isShown || r.isDefaultPrevented() || (this._isShown = !0,
              this._checkScrollbar(),
              this._setScrollbar(),
              this._adjustDialog(),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              e(this._element).on(g.CLICK_DISMISS, v.DATA_DISMISS, function(e) {
                  return n.hide(e)
              }),
              e(this._dialog).on(g.MOUSEDOWN_DISMISS, function() {
                  e(n._element).one(g.MOUSEUP_DISMISS, function(t) {
                      e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                  })
              }),
              this._showBackdrop(function() {
                  return n._showElement(t)
              }))
          }
      }
      ,
      i.hide = function(n) {
          var r = this;
          if (n && n.preventDefault(),
          this._isShown && !this._isTransitioning) {
              var i = e.Event(g.HIDE);
              if (e(this._element).trigger(i),
              this._isShown && !i.isDefaultPrevented()) {
                  this._isShown = !1;
                  var o = e(this._element).hasClass(y.FADE);
                  if (o && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  e(document).off(g.FOCUSIN),
                  e(this._element).removeClass(y.SHOW),
                  e(this._element).off(g.CLICK_DISMISS),
                  e(this._dialog).off(g.MOUSEDOWN_DISMISS),
                  o) {
                      var s = t.getTransitionDurationFromElement(this._element);
                      e(this._element).one(t.TRANSITION_END, function(e) {
                          return r._hideModal(e)
                      }).emulateTransitionEnd(s)
                  } else
                      this._hideModal()
              }
          }
      }
      ,
      i.dispose = function() {
          [window, this._element, this._dialog].forEach(function(t) {
              return e(t).off(c)
          }),
          e(document).off(g.FOCUSIN),
          e.removeData(this._element, u),
          this._config = null,
          this._element = null,
          this._dialog = null,
          this._backdrop = null,
          this._isShown = null,
          this._isBodyOverflowing = null,
          this._ignoreBackdropClick = null,
          this._isTransitioning = null,
          this._scrollbarWidth = null
      }
      ,
      i.handleUpdate = function() {
          this._adjustDialog()
      }
      ,
      i._getConfig = function(e) {
          return e = s({}, p, {}, e),
          t.typeCheckConfig(a, e, m),
          e
      }
      ,
      i._triggerBackdropTransition = function() {
          var n = this;
          if ("static" === this._config.backdrop) {
              var r = e.Event(g.HIDE_PREVENTED);
              if (e(this._element).trigger(r),
              r.defaultPrevented)
                  return;
              this._element.classList.add(y.STATIC);
              var i = t.getTransitionDurationFromElement(this._element);
              e(this._element).one(t.TRANSITION_END, function() {
                  n._element.classList.remove(y.STATIC)
              }).emulateTransitionEnd(i),
              this._element.focus()
          } else
              this.hide()
      }
      ,
      i._showElement = function(n) {
          var r = this
            , i = e(this._element).hasClass(y.FADE)
            , o = this._dialog ? this._dialog.querySelector(v.MODAL_BODY) : null;
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
          this._element.style.display = "block",
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          e(this._dialog).hasClass(y.SCROLLABLE) && o ? o.scrollTop = 0 : this._element.scrollTop = 0,
          i && t.reflow(this._element),
          e(this._element).addClass(y.SHOW),
          this._config.focus && this._enforceFocus();
          var s = e.Event(g.SHOWN, {
              relatedTarget: n
          })
            , a = function() {
              r._config.focus && r._element.focus(),
              r._isTransitioning = !1,
              e(r._element).trigger(s)
          };
          if (i) {
              var l = t.getTransitionDurationFromElement(this._dialog);
              e(this._dialog).one(t.TRANSITION_END, a).emulateTransitionEnd(l)
          } else
              a()
      }
      ,
      i._enforceFocus = function() {
          var t = this;
          e(document).off(g.FOCUSIN).on(g.FOCUSIN, function(n) {
              document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
          })
      }
      ,
      i._setEscapeEvent = function() {
          var t = this;
          this._isShown && this._config.keyboard ? e(this._element).on(g.KEYDOWN_DISMISS, function(e) {
              e.which === h && t._triggerBackdropTransition()
          }) : this._isShown || e(this._element).off(g.KEYDOWN_DISMISS)
      }
      ,
      i._setResizeEvent = function() {
          var t = this;
          this._isShown ? e(window).on(g.RESIZE, function(e) {
              return t.handleUpdate(e)
          }) : e(window).off(g.RESIZE)
      }
      ,
      i._hideModal = function() {
          var t = this;
          this._element.style.display = "none",
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._isTransitioning = !1,
          this._showBackdrop(function() {
              e(document.body).removeClass(y.OPEN),
              t._resetAdjustments(),
              t._resetScrollbar(),
              e(t._element).trigger(g.HIDDEN)
          })
      }
      ,
      i._removeBackdrop = function() {
          this._backdrop && (e(this._backdrop).remove(),
          this._backdrop = null)
      }
      ,
      i._showBackdrop = function(n) {
          var r = this
            , i = e(this._element).hasClass(y.FADE) ? y.FADE : "";
          if (this._isShown && this._config.backdrop) {
              if (this._backdrop = document.createElement("div"),
              this._backdrop.className = y.BACKDROP,
              i && this._backdrop.classList.add(i),
              e(this._backdrop).appendTo(document.body),
              e(this._element).on(g.CLICK_DISMISS, function(e) {
                  r._ignoreBackdropClick ? r._ignoreBackdropClick = !1 : e.target === e.currentTarget && r._triggerBackdropTransition()
              }),
              i && t.reflow(this._backdrop),
              e(this._backdrop).addClass(y.SHOW),
              !n)
                  return;
              if (!i)
                  return void n();
              var o = t.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop).one(t.TRANSITION_END, n).emulateTransitionEnd(o)
          } else if (!this._isShown && this._backdrop) {
              e(this._backdrop).removeClass(y.SHOW);
              var s = function() {
                  r._removeBackdrop(),
                  n && n()
              };
              if (e(this._element).hasClass(y.FADE)) {
                  var a = t.getTransitionDurationFromElement(this._backdrop);
                  e(this._backdrop).one(t.TRANSITION_END, s).emulateTransitionEnd(a)
              } else
                  s()
          } else
              n && n()
      }
      ,
      i._adjustDialog = function() {
          var e = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
          this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
      }
      ,
      i._resetAdjustments = function() {
          this._element.style.paddingLeft = "",
          this._element.style.paddingRight = ""
      }
      ,
      i._checkScrollbar = function() {
          var e = document.body.getBoundingClientRect();
          this._isBodyOverflowing = e.left + e.right < window.innerWidth,
          this._scrollbarWidth = this._getScrollbarWidth()
      }
      ,
      i._setScrollbar = function() {
          var t = this;
          if (this._isBodyOverflowing) {
              var n = [].slice.call(document.querySelectorAll(v.FIXED_CONTENT))
                , r = [].slice.call(document.querySelectorAll(v.STICKY_CONTENT));
              e(n).each(function(n, r) {
                  var i = r.style.paddingRight
                    , o = e(r).css("padding-right");
                  e(r).data("padding-right", i).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
              }),
              e(r).each(function(n, r) {
                  var i = r.style.marginRight
                    , o = e(r).css("margin-right");
                  e(r).data("margin-right", i).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
              });
              var i = document.body.style.paddingRight
                , o = e(document.body).css("padding-right");
              e(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
          }
          e(document.body).addClass(y.OPEN)
      }
      ,
      i._resetScrollbar = function() {
          var t = [].slice.call(document.querySelectorAll(v.FIXED_CONTENT));
          e(t).each(function(t, n) {
              var r = e(n).data("padding-right");
              e(n).removeData("padding-right"),
              n.style.paddingRight = r || ""
          });
          var n = [].slice.call(document.querySelectorAll("" + v.STICKY_CONTENT));
          e(n).each(function(t, n) {
              var r = e(n).data("margin-right");
              void 0 !== r && e(n).css("margin-right", r).removeData("margin-right")
          });
          var r = e(document.body).data("padding-right");
          e(document.body).removeData("padding-right"),
          document.body.style.paddingRight = r || ""
      }
      ,
      i._getScrollbarWidth = function() {
          var e = document.createElement("div");
          e.className = y.SCROLLBAR_MEASURER,
          document.body.appendChild(e);
          var t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e),
          t
      }
      ,
      n._jQueryInterface = function(t, r) {
          return this.each(function() {
              var i = e(this).data(u)
                , o = s({}, p, {}, e(this).data(), {}, "object" == typeof t && t ? t : {});
              if (i || (i = new n(this,o),
              e(this).data(u, i)),
              "string" == typeof t) {
                  if ("undefined" == typeof i[t])
                      throw new TypeError('No method named "' + t + '"');
                  i[t](r)
              } else
                  o.show && i.show(r)
          })
      }
      ,
      r(n, null, [{
          key: "VERSION",
          get: function() {
              return l
          }
      }, {
          key: "Default",
          get: function() {
              return p
          }
      }]),
      n
  }();
  return e(document).on(g.CLICK_DATA_API, v.DATA_TOGGLE, function(n) {
      var r, i = this, o = t.getSelectorFromElement(this);
      o && (r = document.querySelector(o));
      var a = e(r).data(u) ? "toggle" : s({}, e(r).data(), {}, e(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
      var l = e(r).one(g.SHOW, function(t) {
          t.isDefaultPrevented() || l.one(g.HIDDEN, function() {
              e(i).is(":visible") && i.focus()
          })
      });
      b._jQueryInterface.call(e(r), a, this)
  }),
  e.fn[a] = b._jQueryInterface,
  e.fn[a].Constructor = b,
  e.fn[a].noConflict = function() {
      return e.fn[a] = d,
      b._jQueryInterface
  }
  ,
  b
}),
/*!
* Bootstrap dropdown.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("popper.js"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "popper.js", "./util.js"], t) : (e = e || self).Dropdown = t(e.jQuery, e.Popper, e.Util)
}(this, function(e, t, n) {
  "use strict";
  function r(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function i(e, t, n) {
      return t && r(e.prototype, t),
      n && r(e, n),
      e
  }
  function o(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n,
      e
  }
  function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
  }
  function a(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(n), !0).forEach(function(t) {
              o(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
      }
      return e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t,
  n = n && n.hasOwnProperty("default") ? n["default"] : n;
  var l = "dropdown"
    , u = "4.4.1"
    , c = "bs.dropdown"
    , f = "." + c
    , d = ".data-api"
    , h = e.fn[l]
    , p = 27
    , m = 32
    , g = 9
    , y = 38
    , v = 40
    , b = 3
    , E = new RegExp(y + "|" + v + "|" + p)
    , _ = {
      HIDE: "hide" + f,
      HIDDEN: "hidden" + f,
      SHOW: "show" + f,
      SHOWN: "shown" + f,
      CLICK: "click" + f,
      CLICK_DATA_API: "click" + f + d,
      KEYDOWN_DATA_API: "keydown" + f + d,
      KEYUP_DATA_API: "keyup" + f + d
  }
    , w = {
      DISABLED: "disabled",
      SHOW: "show",
      DROPUP: "dropup",
      DROPRIGHT: "dropright",
      DROPLEFT: "dropleft",
      MENURIGHT: "dropdown-menu-right",
      MENULEFT: "dropdown-menu-left",
      POSITION_STATIC: "position-static"
  }
    , T = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: ".dropdown form",
      MENU: ".dropdown-menu",
      NAVBAR_NAV: ".navbar-nav",
      VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
  }
    , S = {
      TOP: "top-start",
      TOPEND: "top-end",
      BOTTOM: "bottom-start",
      BOTTOMEND: "bottom-end",
      RIGHT: "right-start",
      RIGHTEND: "right-end",
      LEFT: "left-start",
      LEFTEND: "left-end"
  }
    , C = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null
  }
    , A = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)"
  }
    , x = function() {
      function r(e, t) {
          this._element = e,
          this._popper = null,
          this._config = this._getConfig(t),
          this._menu = this._getMenuElement(),
          this._inNavbar = this._detectNavbar(),
          this._addEventListeners()
      }
      var o = r.prototype;
      return o.toggle = function() {
          if (!this._element.disabled && !e(this._element).hasClass(w.DISABLED)) {
              var t = e(this._menu).hasClass(w.SHOW);
              r._clearMenus(),
              t || this.show(!0)
          }
      }
      ,
      o.show = function(i) {
          if (void 0 === i && (i = !1),
          !(this._element.disabled || e(this._element).hasClass(w.DISABLED) || e(this._menu).hasClass(w.SHOW))) {
              var o = {
                  relatedTarget: this._element
              }
                , s = e.Event(_.SHOW, o)
                , a = r._getParentFromElement(this._element);
              if (e(a).trigger(s),
              !s.isDefaultPrevented()) {
                  if (!this._inNavbar && i) {
                      if (void 0 === t)
                          throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                      var l = this._element;
                      "parent" === this._config.reference ? l = a : n.isElement(this._config.reference) && (l = this._config.reference,
                      "undefined" != typeof this._config.reference.jquery && (l = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary && e(a).addClass(w.POSITION_STATIC),
                      this._popper = new t(l,this._menu,this._getPopperConfig())
                  }
                  "ontouchstart"in document.documentElement && 0 === e(a).closest(T.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  e(this._menu).toggleClass(w.SHOW),
                  e(a).toggleClass(w.SHOW).trigger(e.Event(_.SHOWN, o))
              }
          }
      }
      ,
      o.hide = function() {
          if (!this._element.disabled && !e(this._element).hasClass(w.DISABLED) && e(this._menu).hasClass(w.SHOW)) {
              var t = {
                  relatedTarget: this._element
              }
                , n = e.Event(_.HIDE, t)
                , i = r._getParentFromElement(this._element);
              e(i).trigger(n),
              n.isDefaultPrevented() || (this._popper && this._popper.destroy(),
              e(this._menu).toggleClass(w.SHOW),
              e(i).toggleClass(w.SHOW).trigger(e.Event(_.HIDDEN, t)))
          }
      }
      ,
      o.dispose = function() {
          e.removeData(this._element, c),
          e(this._element).off(f),
          this._element = null,
          this._menu = null,
          null !== this._popper && (this._popper.destroy(),
          this._popper = null)
      }
      ,
      o.update = function() {
          this._inNavbar = this._detectNavbar(),
          null !== this._popper && this._popper.scheduleUpdate()
      }
      ,
      o._addEventListeners = function() {
          var t = this;
          e(this._element).on(_.CLICK, function(e) {
              e.preventDefault(),
              e.stopPropagation(),
              t.toggle()
          })
      }
      ,
      o._getConfig = function(t) {
          return t = a({}, this.constructor.Default, {}, e(this._element).data(), {}, t),
          n.typeCheckConfig(l, t, this.constructor.DefaultType),
          t
      }
      ,
      o._getMenuElement = function() {
          if (!this._menu) {
              var e = r._getParentFromElement(this._element);
              e && (this._menu = e.querySelector(T.MENU))
          }
          return this._menu
      }
      ,
      o._getPlacement = function() {
          var t = e(this._element.parentNode)
            , n = S.BOTTOM;
          return t.hasClass(w.DROPUP) ? (n = S.TOP,
          e(this._menu).hasClass(w.MENURIGHT) && (n = S.TOPEND)) : t.hasClass(w.DROPRIGHT) ? n = S.RIGHT : t.hasClass(w.DROPLEFT) ? n = S.LEFT : e(this._menu).hasClass(w.MENURIGHT) && (n = S.BOTTOMEND),
          n
      }
      ,
      o._detectNavbar = function() {
          return e(this._element).closest(".navbar").length > 0
      }
      ,
      o._getOffset = function() {
          var e = this
            , t = {};
          return "function" == typeof this._config.offset ? t.fn = function(t) {
              return t.offsets = a({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}),
              t
          }
          : t.offset = this._config.offset,
          t
      }
      ,
      o._getPopperConfig = function() {
          var e = {
              placement: this._getPlacement(),
              modifiers: {
                  offset: this._getOffset(),
                  flip: {
                      enabled: this._config.flip
                  },
                  preventOverflow: {
                      boundariesElement: this._config.boundary
                  }
              }
          };
          return "static" === this._config.display && (e.modifiers.applyStyle = {
              enabled: !1
          }),
          a({}, e, {}, this._config.popperConfig)
      }
      ,
      r._jQueryInterface = function(t) {
          return this.each(function() {
              var n = e(this).data(c);
              if (n || (n = new r(this,"object" == typeof t ? t : null),
              e(this).data(c, n)),
              "string" == typeof t) {
                  if ("undefined" == typeof n[t])
                      throw new TypeError('No method named "' + t + '"');
                  n[t]()
              }
          })
      }
      ,
      r._clearMenus = function(t) {
          if (!t || t.which !== b && ("keyup" !== t.type || t.which === g))
              for (var n = [].slice.call(document.querySelectorAll(T.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
                  var s = r._getParentFromElement(n[i])
                    , a = e(n[i]).data(c)
                    , l = {
                      relatedTarget: n[i]
                  };
                  if (t && "click" === t.type && (l.clickEvent = t),
                  a) {
                      var u = a._menu;
                      if (e(s).hasClass(w.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && t.which === g) && e.contains(s, t.target))) {
                          var f = e.Event(_.HIDE, l);
                          e(s).trigger(f),
                          f.isDefaultPrevented() || ("ontouchstart"in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                          n[i].setAttribute("aria-expanded", "false"),
                          a._popper && a._popper.destroy(),
                          e(u).removeClass(w.SHOW),
                          e(s).removeClass(w.SHOW).trigger(e.Event(_.HIDDEN, l)))
                      }
                  }
              }
      }
      ,
      r._getParentFromElement = function(e) {
          var t, r = n.getSelectorFromElement(e);
          return r && (t = document.querySelector(r)),
          t || e.parentNode
      }
      ,
      r._dataApiKeydownHandler = function(t) {
          if ((/input|textarea/i.test(t.target.tagName) ? !(t.which === m || t.which !== p && (t.which !== v && t.which !== y || e(t.target).closest(T.MENU).length)) : E.test(t.which)) && (t.preventDefault(),
          t.stopPropagation(),
          !this.disabled && !e(this).hasClass(w.DISABLED))) {
              var n = r._getParentFromElement(this)
                , i = e(n).hasClass(w.SHOW);
              if (i || t.which !== p)
                  if (i && (!i || t.which !== p && t.which !== m)) {
                      var o = [].slice.call(n.querySelectorAll(T.VISIBLE_ITEMS)).filter(function(t) {
                          return e(t).is(":visible")
                      });
                      if (0 !== o.length) {
                          var s = o.indexOf(t.target);
                          t.which === y && s > 0 && s--,
                          t.which === v && s < o.length - 1 && s++,
                          s < 0 && (s = 0),
                          o[s].focus()
                      }
                  } else {
                      if (t.which === p) {
                          var a = n.querySelector(T.DATA_TOGGLE);
                          e(a).trigger("focus")
                      }
                      e(this).trigger("click")
                  }
          }
      }
      ,
      i(r, null, [{
          key: "VERSION",
          get: function() {
              return u
          }
      }, {
          key: "Default",
          get: function() {
              return C
          }
      }, {
          key: "DefaultType",
          get: function() {
              return A
          }
      }]),
      r
  }();
  return e(document).on(_.KEYDOWN_DATA_API, T.DATA_TOGGLE, x._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, T.MENU, x._dataApiKeydownHandler).on(_.CLICK_DATA_API + " " + _.KEYUP_DATA_API, x._clearMenus).on(_.CLICK_DATA_API, T.DATA_TOGGLE, function(t) {
      t.preventDefault(),
      t.stopPropagation(),
      x._jQueryInterface.call(e(this), "toggle")
  }).on(_.CLICK_DATA_API, T.FORM_CHILD, function(e) {
      e.stopPropagation()
  }),
  e.fn[l] = x._jQueryInterface,
  e.fn[l].Constructor = x,
  e.fn[l].noConflict = function() {
      return e.fn[l] = h,
      x._jQueryInterface
  }
  ,
  x
}),
/*!
* Bootstrap alert.js v4.4.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], t) : (e = e || self).Alert = t(e.jQuery, e.Util)
}(this, function(e, t) {
  "use strict";
  function n(e, t) {
      for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          "value"in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r)
      }
  }
  function r(e, t, r) {
      return t && n(e.prototype, t),
      r && n(e, r),
      e
  }
  e = e && e.hasOwnProperty("default") ? e["default"] : e,
  t = t && t.hasOwnProperty("default") ? t["default"] : t;
  var i = "alert"
    , o = "4.4.1"
    , s = "bs.alert"
    , a = "." + s
    , l = ".data-api"
    , u = e.fn[i]
    , c = {
      DISMISS: '[data-dismiss="alert"]'
  }
    , f = {
      CLOSE: "close" + a,
      CLOSED: "closed" + a,
      CLICK_DATA_API: "click" + a + l
  }
    , d = {
      ALERT: "alert",
      FADE: "fade",
      SHOW: "show"
  }
    , h = function() {
      function n(e) {
          this._element = e
      }
      var i = n.prototype;
      return i.close = function(e) {
          var t = this._element;
          e && (t = this._getRootElement(e)),
          this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
      }
      ,
      i.dispose = function() {
          e.removeData(this._element, s),
          this._element = null
      }
      ,
      i._getRootElement = function(n) {
          var r = t.getSelectorFromElement(n)
            , i = !1;
          return r && (i = document.querySelector(r)),
          i || (i = e(n).closest("." + d.ALERT)[0]),
          i
      }
      ,
      i._triggerCloseEvent = function(t) {
          var n = e.Event(f.CLOSE);
          return e(t).trigger(n),
          n
      }
      ,
      i._removeElement = function(n) {
          var r = this;
          if (e(n).removeClass(d.SHOW),
          e(n).hasClass(d.FADE)) {
              var i = t.getTransitionDurationFromElement(n);
              e(n).one(t.TRANSITION_END, function(e) {
                  return r._destroyElement(n, e)
              }).emulateTransitionEnd(i)
          } else
              this._destroyElement(n)
      }
      ,
      i._destroyElement = function(t) {
          e(t).detach().trigger(f.CLOSED).remove()
      }
      ,
      n._jQueryInterface = function(t) {
          return this.each(function() {
              var r = e(this)
                , i = r.data(s);
              i || (i = new n(this),
              r.data(s, i)),
              "close" === t && i[t](this)
          })
      }
      ,
      n._handleDismiss = function(e) {
          return function(t) {
              t && t.preventDefault(),
              e.close(this)
          }
      }
      ,
      r(n, null, [{
          key: "VERSION",
          get: function() {
              return o
          }
      }]),
      n
  }();
  return e(document).on(f.CLICK_DATA_API, c.DISMISS, h._handleDismiss(new h)),
  e.fn[i] = h._jQueryInterface,
  e.fn[i].Constructor = h,
  e.fn[i].noConflict = function() {
      return e.fn[i] = u,
      h._jQueryInterface
  }
  ,
  h
}),
/*!
Autosize 1.18.18
license: MIT
http://www.jacklmoore.com/autosize
*/
function(e) {
  var t, n = {
      className: "autosizejs",
      id: "autosizejs",
      append: "\n",
      callback: !1,
      resizeDelay: 10,
      placeholder: !0
  }, r = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"], i = e('<textarea aria-hidden="true" tabindex="-1"/>').data("autosize", !0)[0];
  i.style.cssText = "position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;",
  i.style.lineHeight = "99px",
  "99px" === e(i).css("lineHeight") && r.push("lineHeight"),
  i.style.lineHeight = "",
  e.fn.autosize = function(o) {
      return this.length ? (o = e.extend({}, n, o || {}),
      i.parentNode !== document.body && e(document.body).append(i),
      this.each(function() {
          function n() {
              var t, n = window.getComputedStyle ? window.getComputedStyle(d, null) : null;
              n ? (t = parseFloat(n.width),
              "border-box" !== n.boxSizing && "border-box" !== n.webkitBoxSizing && "border-box" !== n.mozBoxSizing || e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, r) {
                  t -= parseFloat(n[r])
              })) : t = h.width(),
              i.style.width = Math.max(t, 0) + "px"
          }
          function s() {
              var s = {};
              if (t = d,
              i.className = o.className,
              i.id = o.id,
              u = parseFloat(h.css("maxHeight")),
              e.each(r, function(e, t) {
                  s[t] = h.css(t)
              }),
              e(i).css(s).attr("wrap", h.attr("wrap")),
              n(),
              window.chrome) {
                  var a = d.style.width;
                  d.style.width = "0px";
                  d.offsetWidth;
                  d.style.width = a
              }
          }
          function a() {
              var e, r;
              t !== d ? s() : n(),
              !d.value && o.placeholder ? i.value = h.attr("placeholder") || "" : i.value = d.value,
              i.value += o.append || "",
              i.style.overflowY = d.style.overflowY,
              r = parseFloat(d.style.height) || 0,
              i.scrollTop = 0,
              i.scrollTop = 9e4,
              e = i.scrollTop,
              u && e > u ? (d.style.overflowY = "scroll",
              e = u) : (d.style.overflowY = "hidden",
              e < c && (e = c)),
              Math.abs(r - e) > .01 && (d.style.height = e + "px",
              i.className = i.className,
              m && o.callback.call(d, d),
              h.trigger("autosize.resized"))
          }
          function l() {
              clearTimeout(f),
              f = setTimeout(function() {
                  var e = h.width();
                  e !== y && (y = e,
                  a())
              }, parseInt(o.resizeDelay, 10))
          }
          var u, c, f, d = this, h = e(d), p = 0, m = e.isFunction(o.callback), g = {
              height: d.style.height,
              overflow: d.style.overflow,
              overflowY: d.style.overflowY,
              wordWrap: d.style.wordWrap,
              resize: d.style.resize
          }, y = h.width(), v = h.css("resize");
          h.data("autosize") || (h.data("autosize", !0),
          "border-box" !== h.css("box-sizing") && "border-box" !== h.css("-moz-box-sizing") && "border-box" !== h.css("-webkit-box-sizing") || (p = h.outerHeight() - h.height()),
          c = Math.max(parseFloat(h.css("minHeight")) - p || 0, h.height()),
          h.css({
              overflow: "hidden",
              overflowY: "hidden",
              wordWrap: "break-word"
          }),
          "vertical" === v ? h.css("resize", "none") : "both" === v && h.css("resize", "horizontal"),
          "onpropertychange"in d ? "oninput"in d ? h.on("input.autosize keyup.autosize", a) : h.on("propertychange.autosize", function() {
              "value" === event.propertyName && a()
          }) : h.on("input.autosize", a),
          !1 !== o.resizeDelay && e(window).on("resize.autosize", l),
          h.on("autosize.resize", a),
          h.on("autosize.resizeIncludeStyle", function() {
              t = null,
              a()
          }),
          h.on("autosize.destroy", function() {
              t = null,
              clearTimeout(f),
              e(window).off("resize", l),
              h.off("autosize").off(".autosize").css(g).removeData("autosize")
          }),
          a())
      })) : this
  }
}(jQuery || $),
WebFontConfig = {
  google: {
      families: ["Lato:400,700"]
  }
},
function() {
  var e = document.createElement("script");
  e.src = "https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",
  e.type = "text/javascript",
  e.async = "true";
  var t = document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(e, t)
}(),
activeLinkHighlighter(),
onTurboLinksLoadScripts = function() {}
,
$(document).on("turbolinks:load", function() {
  onLoadScripts(),
  onGeoLoadScripts()
}),
function(e, t, n, r) {
  function i(t, n) {
      this.options = e.extend(!0, {}, o, n),
      n && n.types && (this.options.types = n.types),
      this.input = t,
      this.$input = e(t),
      this._defaults = o,
      this._name = "geocomplete",
      this.init()
  }
  var o = {
      bounds: !0,
      strictBounds: !1,
      country: null,
      map: !1,
      details: !1,
      detailsAttribute: "name",
      detailsScope: null,
      autoselect: !0,
      location: !1,
      mapOptions: {
          zoom: 14,
          scrollwheel: !1,
          mapTypeId: "roadmap"
      },
      markerOptions: {
          draggable: !1
      },
      maxZoom: 16,
      types: ["geocode"],
      blur: !1,
      geocodeAfterResult: !1,
      restoreValueAfterBlur: !1
  }
    , s = "street_address route intersection political country administrative_area_level_1 administrative_area_level_2 administrative_area_level_3 colloquial_area locality sublocality neighborhood premise subpremise postal_code natural_feature airport park point_of_interest post_box street_number floor room lat lng viewport location formatted_address location_type bounds".split(" ")
    , a = "id place_id url website vicinity reference name rating international_phone_number icon formatted_phone_number".split(" ");
  e.extend(i.prototype, {
      init: function() {
          this.initMap(),
          this.initMarker(),
          this.initGeocoder(),
          this.initDetails(),
          this.initLocation()
      },
      initMap: function() {
          this.options.map && ("function" != typeof this.options.map.setCenter ? (this.map = new google.maps.Map(e(this.options.map)[0],this.options.mapOptions),
          google.maps.event.addListener(this.map, "click", e.proxy(this.mapClicked, this)),
          google.maps.event.addListener(this.map, "dragend", e.proxy(this.mapDragged, this)),
          google.maps.event.addListener(this.map, "idle", e.proxy(this.mapIdle, this)),
          google.maps.event.addListener(this.map, "zoom_changed", e.proxy(this.mapZoomed, this))) : this.map = this.options.map)
      },
      initMarker: function() {
          if (this.map) {
              var t = e.extend(this.options.markerOptions, {
                  map: this.map
              });
              t.disabled || (this.marker = new google.maps.Marker(t),
              google.maps.event.addListener(this.marker, "dragend", e.proxy(this.markerDragged, this)))
          }
      },
      initGeocoder: function() {
          var t = {
              types: this.options.types,
              bounds: !0 === this.options.bounds ? null : this.options.bounds,
              componentRestrictions: this.options.componentRestrictions,
              strictBounds: this.options.strictBounds
          };
          this.options.country && (t.componentRestrictions = {
              country: this.options.country
          }),
          this.autocomplete = new google.maps.places.Autocomplete(this.input,t),
          this.geocoder = new google.maps.Geocoder,
          this.map && !0 === this.options.bounds && this.autocomplete.bindTo("bounds", this.map),
          google.maps.event.addListener(this.autocomplete, "place_changed", e.proxy(this.placeChanged, this)),
          this.$input.on("keypress." + this._name, function(e) {
              if (13 === e.keyCode)
                  return !1
          }),
          !0 === this.options.geocodeAfterResult && this.$input.bind("keypress." + this._name, e.proxy(function() {
              9 != event.keyCode && !0 === this.selected && (this.selected = !1)
          }, this)),
          this.$input.bind("geocode." + this._name, e.proxy(function() {
              this.find()
          }, this)),
          this.$input.bind("geocode:result." + this._name, e.proxy(function() {
              this.lastInputVal = this.$input.val()
          }, this)),
          !0 === this.options.blur && this.$input.on("blur." + this._name, e.proxy(function() {
              !0 === this.options.geocodeAfterResult && !0 === this.selected || (!0 === this.options.restoreValueAfterBlur && !0 === this.selected ? setTimeout(e.proxy(this.restoreLastValue, this), 0) : this.find())
          }, this))
      },
      initDetails: function() {
          function t(e) {
              i[e] = n.find("[" + r + "=" + e + "]")
          }
          if (this.options.details) {
              if (this.options.detailsScope)
                  var n = e(this.input).parents(this.options.detailsScope).find(this.options.details);
              else
                  n = e(this.options.details);
              var r = this.options.detailsAttribute
                , i = {};
              e.each(s, function(e, n) {
                  t(n),
                  t(n + "_short")
              }),
              e.each(a, function(e, n) {
                  t(n)
              }),
              this.$details = n,
              this.details = i
          }
      },
      initLocation: function() {
          var e, t = this.options.location;
          t && ("string" != typeof t ? (t instanceof Array && (e = new google.maps.LatLng(t[0],t[1])),
          t instanceof google.maps.LatLng && (e = t),
          e && (this.map && this.map.setCenter(e),
          this.marker && this.marker.setPosition(e))) : this.find(t))
      },
      destroy: function() {
          this.map && (google.maps.event.clearInstanceListeners(this.map),
          google.maps.event.clearInstanceListeners(this.marker)),
          this.autocomplete.unbindAll(),
          google.maps.event.clearInstanceListeners(this.autocomplete),
          google.maps.event.clearInstanceListeners(this.input),
          this.$input.removeData(),
          this.$input.off(this._name),
          this.$input.unbind("." + this._name)
      },
      find: function(e) {
          this.geocode({
              address: e || this.$input.val()
          })
      },
      geocode: function(t) {
          t.address && (this.options.bounds && !t.bounds && (!0 === this.options.bounds ? t.bounds = this.map && this.map.getBounds() : t.bounds = this.options.bounds),
          this.options.country && (t.region = this.options.country),
          this.geocoder.geocode(t, e.proxy(this.handleGeocode, this)))
      },
      selectFirstResult: function() {
          var t = "";
          e(".pac-item-selected")[0] && (t = "-selected");
          var n = e(".pac-container:visible .pac-item" + t + ":first span:nth-child(2)").text()
            , r = e(".pac-container:visible .pac-item" + t + ":first span:nth-child(3)").text()
            , i = n;
          return r && (i += " - " + r),
          this.$input.val(i),
          i
      },
      restoreLastValue: function() {
          this.lastInputVal && this.$input.val(this.lastInputVal)
      },
      handleGeocode: function(e, t) {
          if (t === google.maps.GeocoderStatus.OK) {
              var n = e[0];
              this.$input.val(n.formatted_address),
              this.update(n),
              e.length > 1 && this.trigger("geocode:multiple", e)
          } else
              this.trigger("geocode:error", t)
      },
      trigger: function(e, t) {
          this.$input.trigger(e, [t])
      },
      center: function(e) {
          e.viewport ? (this.map.fitBounds(e.viewport),
          this.map.getZoom() > this.options.maxZoom && this.map.setZoom(this.options.maxZoom)) : (this.map.setZoom(this.options.maxZoom),
          this.map.setCenter(e.location)),
          this.marker && (this.marker.setPosition(e.location),
          this.marker.setAnimation(this.options.markerOptions.animation))
      },
      update: function(e) {
          this.map && this.center(e.geometry),
          this.$details && this.fillDetails(e),
          this.trigger("geocode:result", e)
      },
      fillDetails: function(t) {
          var n = {}
            , r = t.geometry
            , i = r.viewport
            , o = r.bounds;
          e.each(t.address_components, function(t, r) {
              r.types[0];
              e.each(r.types, function(e, t) {
                  n[t] = r.long_name,
                  n[t + "_short"] = r.short_name
              })
          }),
          e.each(a, function(e, r) {
              n[r] = t[r]
          }),
          e.extend(n, {
              formatted_address: t.formatted_address,
              location_type: r.location_type || "PLACES",
              viewport: i,
              bounds: o,
              location: r.location,
              lat: r.location.lat(),
              lng: r.location.lng()
          }),
          e.each(this.details, e.proxy(function(e, t) {
              var r = n[e];
              this.setDetail(t, r)
          }, this)),
          this.data = n
      },
      setDetail: function(e, t) {
          t === r ? t = "" : "function" == typeof t.toUrlValue && (t = t.toUrlValue()),
          e.is(":input") ? e.val(t) : e.text(t)
      },
      markerDragged: function(e) {
          this.trigger("geocode:dragged", e.latLng)
      },
      mapClicked: function(e) {
          this.trigger("geocode:click", e.latLng)
      },
      mapDragged: function() {
          this.trigger("geocode:mapdragged", this.map.getCenter())
      },
      mapIdle: function() {
          this.trigger("geocode:idle", this.map.getCenter())
      },
      mapZoomed: function() {
          this.trigger("geocode:zoom", this.map.getZoom())
      },
      resetMarker: function() {
          this.marker.setPosition(this.data.location),
          this.setDetail(this.details.lat, this.data.location.lat()),
          this.setDetail(this.details.lng, this.data.location.lng())
      },
      placeChanged: function() {
          var e = this.autocomplete.getPlace();
          if (this.selected = !0,
          e.geometry)
              this.update(e);
          else if (this.options.autoselect) {
              var t = this.selectFirstResult();
              this.find(t)
          }
      }
  }),
  e.fn.geocomplete = function(t) {
      var n = "plugin_geocomplete";
      if ("string" == typeof t) {
          var r = e(this).data(n) || e(this).geocomplete().data(n)
            , o = r[t];
          return "function" == typeof o ? (o.apply(r, Array.prototype.slice.call(arguments, 1)),
          e(this)) : (2 == arguments.length && (o = arguments[1]),
          o)
      }
      return this.each(function() {
          var r = e.data(this, n);
          r || (r = new i(this,t),
          e.data(this, n, r))
      })
  }
}(jQuery, window, document);
