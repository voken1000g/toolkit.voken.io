(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{550:function(t,e,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7a85bdb2",content,!0,{sourceMap:!1})},591:function(t,e,n){"use strict";n(550)},592:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,".number-f[data-v-2f553089]{\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(151, 166, 186, var(--tw-text-opacity))\n}",""]),t.exports=o},613:function(t,e,n){"use strict";n.r(e);var o={name:"bind",middleware:["web3","voken"],layout:"indigoBubble",components:{VueAvatar:n(176).a},data:function(){return{address:""}},computed:{vokenAccount:function(){return this.$store.state.voken.account}}},l=(n(591),n(7)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resp-wide pb-40"},["0"===t.vokenAccount.vokenInt?n("wallet-bind"):n("div",{staticClass:"resp-mt mx-auto max-w-xl text-center"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n      Already Done\n    ")]),t._v(" "),n("div",{staticClass:"w-14 h-14 resp-mt lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg"},[n("vue-avatar",{attrs:{value:t.vokenAccount.vokenAddress}})],1),t._v(" "),n("h3",{staticClass:"resp-mt text-cool-gray-500"},[t._v("\n      Your Voken Wallet Address\n    ")]),t._v(" "),n("p",{staticClass:"mt-4 text-lg font-mono font-bold text-cool-gray-700 break-all"},[t._v("\n      "+t._s(t.vokenAccount.vokenAddress)+"\n    ")]),t._v(" "),n("div",{staticClass:"mt-6 font-mono text-cool-gray-700"},[t._v("\n      "+t._s(t.vokenAccount.balanceObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.balanceObj.f,expression:"vokenAccount.balanceObj.f"}],staticClass:"number-f"},[t._v("."+t._s(t.vokenAccount.balanceObj.f))]),t._v("\n      VokenTB\n      "),t.vokenAccount.balance===t.vokenAccount.vesting?n("span",{staticClass:"text-cool-gray-400"},[t._v("(vesting)")]):n("span",[t._v("\n        ("+t._s(t.vokenAccount.availableObj.d)),n("span",{directives:[{name:"show",rawName:"v-show",value:t.vokenAccount.availableObj.f,expression:"vokenAccount.availableObj.f"}],staticClass:"number-f"},[t._v("."+t._s(t.vokenAccount.availableObj.f))]),t._v("\n          available)\n      ")])]),t._v(" "),n("div",{staticClass:"resp-mt"},[n("nuxt-link",{staticClass:"w-full btn justify-center py-3 font-bold text-lg",attrs:{to:t.localePath("/migrate")}},[t._v("\n        Migrate to Voken Blockchain\n      ")])],1)]),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resp-mt mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8"},[n("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-8"},[n("div",[n("h2",{staticClass:"text-3xl font-extrabold text-gray-900"},[t._v("\n          Ready to Voken Blockchain?\n        ")]),t._v(" "),n("p",{staticClass:"mt-4 leading-7 text-lg text-gray-500"},[t._v("\n          Just one-step away.\n          Bind your Voken wallet address, then migrate and experience.\n        ")])]),t._v(" "),n("div",{staticClass:"mt-12 lg:mt-0 lg:col-span-2"},[n("dl",{staticClass:"space-y-12"},[n("div",[n("dt",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n              FREE: Susitna Voken on the beta network\n            ")]),t._v(" "),n("dd",{staticClass:"mt-2 text-base text-gray-500"},[t._v("\n              After you set up your Voken Address,\n              you would receive some "),n("b",[t._v("Susitna Voken")]),t._v(" on vnCHAIN Susitna (beta network) within 48 hours.\n              Meanwhile, you can experience the Proxy ClientBase by using it, even send some to your friends.\n            ")])]),t._v(" "),n("div",[n("dt",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n              Voken on vnCHAIN main network\n            ")]),t._v(" "),n("dd",{staticClass:"mt-2 text-base text-gray-500"},[n("p",[t._v("\n                The transfer function of VokenTB will not be disabled\n                in order to facilitate user transfer, distribution, or trade.\n              ")]),t._v(" "),n("p",[t._v("\n                Once the main network is online,\n                you can map the ERC20 version of VokenTB to the vnCHAIN main network\n                by transferring all or part of your funds to a specific address.\n              ")])])])])])])])}],!1,null,"2f553089",null);e.default=component.exports;installComponents(component,{WalletBind:n(598).default})}}]);