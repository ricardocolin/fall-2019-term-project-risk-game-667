!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}({5:function(e,t){!function(e){"use strict";e(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){t.preventDefault();var o=e(this.hash);if(o.length){var n=o.offset().top;return e("#header").length&&(n-=e("#header").outerHeight()-2),"#header"==e(this).attr("href")&&(n=0),e("html, body").animate({scrollTop:n},1500,"easeInOutExpo"),e(this).parents(".nav-menu, .mobile-nav").length&&(e(".nav-menu .active, .mobile-nav .active").removeClass("active"),e(this).closest("li").addClass("active")),e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").fadeOut()),!1}}}));var t=e("section"),o=e(".nav-menu, #mobile-nav");e(window).on("scroll",(function(){var n=e(this).scrollTop()+80;t.each((function(){var t=e(this).offset().top,i=t+e(this).outerHeight();n>=t&&n<=i&&(n<=i&&o.find("li").removeClass("active"),o.find('a[href="#'+e(this).attr("id")+'"]').parent("li").addClass("active"))}))})),e(window).scroll((function(){e(this).scrollTop()>100?e("#header").addClass("header-scrolled"):e("#header").removeClass("header-scrolled")})),e(window).scrollTop()>100&&e("#header").addClass("header-scrolled"),e(window).scroll((function(){e(this).scrollTop()>100?e(".back-to-top").fadeIn("slow"):e(".back-to-top").fadeOut("slow")})),e(".back-to-top").click((function(){return e("html, body").animate({scrollTop:0},1500,"easeInOutExpo",(function(){e(".nav-menu ul:first li:first").addClass("active")})),!1})),e(window).on("load",(function(){var t=e(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});e("#portfolio-flters li").on("click",(function(){e("#portfolio-flters li").removeClass("filter-active"),e(this).addClass("filter-active"),t.isotope({filter:e(this).data("filter")})})),e(document).ready((function(){e(".venobox").venobox()}))})),AOS.init({duration:800})}(jQuery)}});