(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{595:function(e,t,r){"use strict";r.r(t);var d=r(68),n={name:"web3",middleware:["web3"],computed:{fnEthereum:function(){return d.a}}},o=r(7),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resp-wide"},[r("div",{staticClass:"max-w-2xl mx-auto py-16 sm:py-20 sm:px-6 lg:px-8 lg:max-w-7xl"},[r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[e._m(0),e._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[r("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.ether.productionMode,expression:"!$store.state.ether.productionMode"}],staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Production Mode\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.$store.state.ether.productionMode)+"\n            ")])]),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Chain ID (Name)\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.$store.state.ether.chainId)+" ("+e._s(e.fnEthereum.chainId2NetworkName(e.$store.state.ether.chainId))+")\n            ")])]),e._v(" "),e.$store.state.ether.blockNumber?r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Block Height\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.$store.state.ether.blockNumberStr)+"\n            ")])]):e._e()])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",[e._v("\n          ETH (Ethereum) Blockchain\n        ")])])}],!1,null,null,null);t.default=component.exports}}]);