(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{577:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(16),n(32),n(536)),c=n.n(o),l=n(537),m=n(539),d={name:"onboard",components:{VueQr:c.a},data:function(){return{locationHref:location.href}},computed:{browser:function(){return Object(m.a)()},metaMaskOnBoardReady:function(){return"chrome"===this.browser.name||"firefox"===this.browser.name}},methods:{getMetaMask:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(new l.a).startOnboarding();case 2:case"end":return t.stop()}}),t)})))()}}},f=n(7),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resp-wide"},[n("div",{staticClass:"resp-mt mx-auto max-w-xl text-center"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n      Welcome Onboard\n    ")]),t._v(" "),n("p",{staticClass:"mt-4 sm:mt-6 lg:mt-10 px-2 sm:px-4 lg:px-6 leading-8 text-lg text-cool-gray-600 text-center"},[t._v("\n      Please scan the QR-Code with your Trust/imToken APP\n      or install the Metamask extension for your\n      "+t._s(t.browser.name.slice(0,1).toUpperCase()+t.browser.name.slice(1).toLowerCase())+"\n      browser.\n    ")]),t._v(" "),n("div",{staticClass:"resp-mt flex items-center justify-center"},[n("div",{staticClass:"w-1/2"},[n("vue-qr",{staticClass:"border-cool-gray-300 border",attrs:{text:t.locationHref,size:640,margin:32,colorDark:"#27303f"}})],1)]),t._v(" "),n("div",{staticClass:"resp-mt"},[t.metaMaskOnBoardReady?n("button",{staticClass:"w-full btn btn-pink justify-center py-3 font-bold text-lg",on:{click:t.getMetaMask}},[t._v("\n        Install MetaMask\n      ")]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);