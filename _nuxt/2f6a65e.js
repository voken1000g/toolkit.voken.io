(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{767:function(e,t,r){"use strict";r.r(t);var d=r(218),n=r(51),l={name:"dashboard-index",middleware:["web3","vokenEarlyBirdSale"],computed:{fnEthereum:function(){return d.a},DAPP:function(){return n.a},ether:function(){return this.$store.state.ether},voken:function(){return this.$store.state.voken},earlyBirdSale:function(){return this.$store.state.vokenEarlyBirdSale}}},v=r(14),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resp-wide pb-20"},[r("div",{staticClass:"max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"},[r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[e._m(0),e._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[r("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Chain ID\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.$store.state.ether.chainId)+"\n            ")])]),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Chain Name\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.fnEthereum.chainId2NetworkName(e.$store.state.ether.chainId))+"\n            ")])]),e._v(" "),e.$store.state.ether.blockNumber?r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Block Height\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.$store.state.ether.blockNumberStr)+"\n            ")])]):e._e(),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Latest ETH Price\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.ether.usdPriceObj.d)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.ether.usdPriceObj.f,expression:"ether.usdPriceObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.ether.usdPriceObj.f))]),e._v("\n              DAI (USD)\n            ")])])])])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.ether.productionMode,expression:"$store.state.ether.productionMode"}],staticClass:"max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"},[r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[e._m(1),e._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[r("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Address\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.$store.state.ether.account)+"\n            ")])]),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              ETH Balance\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.$store.state.ether.balanceStr)+" ETH\n            ")])]),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              VokenTB Balance (total)\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.voken.balanceObj.d)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.voken.balanceObj.f,expression:"voken.balanceObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.voken.balanceObj.f))]),e._v("\n              VokenTB\n            ")])])])])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.ether.productionMode,expression:"$store.state.ether.productionMode"}],staticClass:"max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"},[r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._v("\n          VokenTB\n        ")]),e._v(" "),r("p",{staticClass:"mt-1 max-w-2xl text-sm text-gray-500"},[e._v("\n          Voken TeraByte on Ethereum blockchain #"+e._s(e.$store.state.voken.blockNumberStr)+"\n        ")])]),e._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[r("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              VokenTB Main Contract\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.DAPP.CONTRACT_ADDRESS_VOKEN_TB)+"\n            ")])]),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Total Supply / Cap\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.voken.totalSupplyObj.d)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.voken.totalSupplyObj.f,expression:"voken.totalSupplyObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.voken.totalSupplyObj.f))]),e._v("\n              /\n              "+e._s(e.voken.capObj.d)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.voken.capObj.f,expression:"voken.capObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.voken.capObj.f))]),e._v("\n              VokenTB\n            ")])])])])])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.ether.productionMode,expression:"$store.state.ether.productionMode"}],staticClass:"max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"},[r("div",{staticClass:"bg-white shadow overflow-hidden sm:rounded-lg"},[r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._v("\n          VokenTB Early-Bird Sale\n        ")]),e._v(" "),r("p",{staticClass:"mt-1 max-w-2xl text-sm text-gray-500"},[e._v("\n          Early-Bird Sale on Ethereum Blockchain #"+e._s(e.earlyBirdSale.blockNumberStr)+"\n        ")])]),e._v(" "),r("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[r("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Early-Bird Sale Contract\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.DAPP.CONTRACT_ADDRESS_EARLY_BIRD)+"\n            ")])]),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Sale Price\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.earlyBirdSale.usdPriceObj.d)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.earlyBirdSale.usdPriceObj.f,expression:"earlyBirdSale.usdPriceObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.earlyBirdSale.usdPriceObj.f))]),e._v("\n              DAI (USD)\n            ")])]),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Sold\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.earlyBirdSale.issuedObj.d)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.earlyBirdSale.issuedObj.f,expression:"earlyBirdSale.issuedObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.earlyBirdSale.issuedObj.f))]),e._v("\n              +\n              "+e._s(e.earlyBirdSale.bonusesObj.d)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.earlyBirdSale.bonusesObj.f,expression:"earlyBirdSale.bonusesObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.earlyBirdSale.bonusesObj.f))]),e._v("\n              =\n              "+e._s(e.earlyBirdSale.volumeObj.d)),r("span",{directives:[{name:"show",rawName:"v-show",value:e.earlyBirdSale.volumeObj.f,expression:"earlyBirdSale.volumeObj.f"}],staticClass:"number-f"},[e._v("."+e._s(e.earlyBirdSale.volumeObj.f))]),e._v("\n              VokenTB\n            ")])]),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Maximum\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.earlyBirdSale.weiMaxStr)+" ETH\n            ")])]),e._v(" "),r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Minimum\n            ")]),e._v(" "),r("dd",[e._v("\n              "+e._s(e.earlyBirdSale.weiMinStr)+" ETH\n            ")])])])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._v("\n          Ethereum Blockchain\n        ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._v("\n          ETH Wallet\n        ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"div-striped-list-card"},[r("dt",[e._v("\n              Token Symbol (Name)\n            ")]),e._v(" "),r("dd",[e._v("\n              VokenTB (Voken TeraByte)\n            ")])])}],!1,null,null,null);t.default=component.exports}}]);