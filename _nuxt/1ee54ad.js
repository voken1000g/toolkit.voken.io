(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{481:function(e,t,r){"use strict";r.r(t);var l={name:"LayoutWProse"},o=r(7),component=Object(o.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("article",{staticClass:"prose lg:prose-lg xl:prose-xl max-w-none"},[this._t("default")],2)}),[],!1,null,"6a3d2caa",null);t.default=component.exports},498:function(e,t,r){"use strict";(function(e){r(34),r(35),r(17);var l=r(165),o=r.n(l),c=r(113),n=r.n(c),d=r(164),m=r(112),h=r(481);t.a={name:"wallet-public-key",layout:"wallet",components:{LayoutWProse:h.default,LayoutW:m.default,VueAvatar:d.a},head:function(){return{title:this.$t("nav.Wallet_Public_Key")}},data:function(){return{address:"",vpub:"",vpubError:"",bufPublicKeyCompressed:null,hexPublicKeyCompressed:"",hexPublicKeyCompressedError:"",bufPublicKeyUncompressed:null,hexPublicKeyUncompressed:"",hexPublicKeyUncompressedError:""}},watch:{vpub:function(){if(this.vpub)try{this.bufPublicKeyCompressed=n.a.fromVPub(this.vpub),this.address=o.a.fromPublicKey(this.bufPublicKeyCompressed),this.hexPublicKeyCompressed=this.bufPublicKeyCompressed.toString("hex"),this.vpubError=""}catch(e){this.vpubError=e.message,this.address="",this.bufPublicKeyCompressed=null,this.hexPublicKeyCompressed="",this.hexPublicKeyCompressedError="",this.bufPublicKeyUncompressed=null,this.hexPublicKeyUncompressed="",this.hexPublicKeyUncompressedError=""}else this.vpubError="",this.address=""},hexPublicKeyCompressed:function(){if(this.hexPublicKeyCompressed)try{this.bufPublicKeyCompressed=e.from(this.hexPublicKeyCompressed,"hex"),this.bufPublicKeyUncompressed=n.a.decompress(this.bufPublicKeyCompressed),this.vpub=n.a.toVPub(this.bufPublicKeyCompressed),this.hexPublicKeyUncompressed=this.bufPublicKeyUncompressed.toString("hex"),this.hexPublicKeyCompressedError=""}catch(e){this.bufPublicKeyCompressed=null,this.hexPublicKeyCompressedError=e.message,this.address="",this.vpub="",this.vpubError="",this.bufPublicKeyUncompressed=null,this.hexPublicKeyUncompressed="",this.hexPublicKeyUncompressedError=""}else this.bufPublicKeyCompressed=null,this.hexPublicKeyCompressedError=""},hexPublicKeyUncompressed:function(){if(this.hexPublicKeyUncompressed)try{this.bufPublicKeyUncompressed=e.from(this.hexPublicKeyUncompressed,"hex"),this.bufPublicKeyCompressed=n.a.compress(this.bufPublicKeyUncompressed),this.vpub=n.a.toVPub(this.bufPublicKeyCompressed),this.hexPublicKeyUncompressedError=""}catch(e){this.bufPublicKeyUncompressed=null,this.hexPublicKeyUncompressedError=e.message,this.address="",this.vpub="",this.vpubError="",this.bufPublicKeyCompressed=null,this.hexPublicKeyCompressed="",this.hexPublicKeyCompressedError=""}else this.bufPublicKeyUncompressed=null,this.hexPublicKeyUncompressedError=""}},computed:{vpubClass:function(){return this.vpub?this.vpubError?"error":"success":null},vpubLabel:function(){return"error"===this.vpubClass?this.vpubError:this.$t("wallet.VOKEN_Public_Key__")},hexPublicKeyCompressedClass:function(){return this.hexPublicKeyCompressed?this.hexPublicKeyCompressedError?"error":"success":null},hexPublicKeyCompressedLabel:function(){return"error"===this.hexPublicKeyCompressedClass?this.hexPublicKeyCompressedError:this.$t("wallet.Compressed_Public_Key_in_HEX")},hexPublicKeyDecompressedClass:function(){return this.hexPublicKeyUncompressed?this.hexPublicKeyUncompressedError?"error":"success":null},hexPublicKeyDecompressedLabel:function(){return"error"===this.hexPublicKeyDecompressedClass?this.hexPublicKeyUncompressedError:this.$t("wallet.Uncompressed_Public_Key_in_HEX")},isAddress:function(){return o.a.isAddress(this.address)}}}}).call(this,r(9).Buffer)},555:function(e,t,r){"use strict";r.r(t);var l=r(498).a,o=r(7),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("layout-w",{staticClass:"pb-36"},[r("layout-w-prose",{staticClass:"mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16"},[r("h1",[e._v("\n      "+e._s(e.$t("nav.Wallet_Public_Key"))+"\n    ")]),e._v(" "),r("p",{staticClass:"text-green-500"},[r("span",{staticClass:"text-5xl"},[r("fa",{attrs:{icon:["fas","shield-alt"]}})],1),e._v(" "),r("br"),e._v("\n      "+e._s(e.$t("wallet.All_items_on_this_page_are_secure__"))+"\n    ")])]),e._v(" "),r("div",{staticClass:"w-full mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 mx-auto font-mono text-sm md:text-base"},[r("div",{staticClass:"space-y-10 lg:space-y-0 lg:flex lg:items-end lg:justify-center lg:space-x-8"},[r("div",{staticClass:"w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto lg:mx-0 bg-white rounded-md shadow-md lg:shadow-lg"},[r("vue-avatar",{directives:[{name:"show",rawName:"v-show",value:e.isAddress,expression:"isAddress"}],attrs:{value:e.address}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isAddress,expression:"!isAddress"}],staticClass:"h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300"},[r("fa",{directives:[{name:"show",rawName:"v-show",value:!e.isAddress,expression:"!isAddress"}],attrs:{icon:["fas","seedling"]}})],1)],1),e._v(" "),r("div",{staticClass:"w-full lg:max-w-2xl"},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"public-key-converter-address"}},[e._v("\n          "+e._s(e.$t("wallet.VOKEN_Address"))+"\n        ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"input-indigo w-full py-3 px-4 font-mono text-sm md:text-base text-gray-500",attrs:{type:"text",id:"public-key-converter-address",placeholder:e.$t("wallet.Auto_Convert_"),readonly:"",disabled:""},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])])]),e._v(" "),r("div",{staticClass:"mt-12 md:mt-14 lg:mt-16",class:e.vpubClass},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"public-key-converter-vpub"}},[e._v("\n        "+e._s(e.vpubLabel)+"\n      ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.vpub,expression:"vpub"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base",attrs:{type:"text",id:"public-key-converter-vpub",placeholder:"vpub..."},domProps:{value:e.vpub},on:{input:function(t){t.target.composing||(e.vpub=t.target.value)}}}),e._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),e._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}})],1)])]),e._v(" "),r("div",{staticClass:"mt-4 md:mt-6 lg:mt-8",class:e.hexPublicKeyCompressedClass},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"public-key-converter-public-key-compressed"}},[e._v("\n        "+e._s(e.hexPublicKeyCompressedLabel)+"\n      ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.hexPublicKeyCompressed,expression:"hexPublicKeyCompressed"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base",attrs:{type:"text",id:"public-key-converter-public-key-compressed",placeholder:"02/03..."},domProps:{value:e.hexPublicKeyCompressed},on:{input:function(t){t.target.composing||(e.hexPublicKeyCompressed=t.target.value)}}}),e._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),e._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}})],1)])]),e._v(" "),r("div",{staticClass:"mt-4 md:mt-6 lg:mt-8",class:e.hexPublicKeyDecompressedClass},[r("label",{staticClass:"font-medium text-gray-700 text-left",attrs:{for:"public-key-converter-public-key-decompressed"}},[e._v("\n        "+e._s(e.hexPublicKeyDecompressedLabel)+"\n      ")]),e._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.hexPublicKeyUncompressed,expression:"hexPublicKeyUncompressed"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base",attrs:{type:"text",id:"public-key-converter-public-key-decompressed",placeholder:"04..."},domProps:{value:e.hexPublicKeyUncompressed},on:{input:function(t){t.target.composing||(e.hexPublicKeyUncompressed=t.target.value)}}}),e._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),e._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}})],1)])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LayoutWProse:r(481).default,LayoutW:r(112).default})}}]);