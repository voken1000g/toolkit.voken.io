(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{493:function(t,e,r){(function(e){const o=r(175);class n extends Error{constructor(t){super(t),this.name="InvalidStartError",this.code="INVALID_START"}}class c extends Error{constructor(t){super(t),this.name="InvalidLengthError",this.code="INVALID_LENGTH"}}t.exports={fromVPriv:function(input){if(!input instanceof String)throw TypeError("Except: String");if("vpriv"!==input.slice(0,5))throw new n("A VOKEN Private Key should start with `vpriv`");if(52!==(input=input.slice(5)).length)throw new c("The length of a VOKEN Private Key should be `57`");let t=e.from(o.decode(input));for(;t.length<32;)t=e.concat([e.from("00","hex"),t]);return t},toVPriv:function(input){if(32!==input.length)throw new c("The length of a Private Key should be `32`");return"vpriv"+o.encode(input)},InvalidStartError:n,InvalidLengthError:c}}).call(this,r(9).Buffer)},508:function(t,e,r){"use strict";(function(t){var o,n=r(0),c=(r(16),r(17),r(77),r(78),r(493)),l=r.n(c),d=r(121),v=r.n(d),f=r(64),m=r.n(f),h=r(502),_=r.n(h),y=r(177),w=r.n(y),x=r(175),C=r.n(x),E=r(503),S=r.n(E);e.a={name:"sign",layout:"indigoWave",head:function(){return{title:this.$t("nav.Messenger")}},data:function(){return{vpriv:"",vprivError:"",passwordSet:"",passwordRepeat:"",bufPrivateKey:t.from(""),bufPrivateKeyEncrypted:t.from(""),password:"",bufTestEncrypted:t.from(""),message:""}},watch:{vpriv:function(){try{var t=l.a.fromVPriv(this.vpriv),e=v.a.fromPrivateKey(t);m.a.fromPublicKey(e);this.vprivError=""}catch(t){this.vprivError=t.message}}},computed:{passwordSame:function(){return this.passwordSet===this.passwordRepeat},passwordConfirmed:function(){return this.passwordSet&&this.passwordSame},cached:function(){return 32===this.bufPrivateKeyEncrypted.length&&this.bufTestEncrypted.length>0},bufPassword:function(){return t.from(this.password)},passwordMatched:function(){return"VOKEN Message Helper"===_.a.decrypt(this.bufTestEncrypted,this.bufPassword).toString()},bufPublicKey:function(){return this.$store.state.bufPublicKey},address:function(){return this.$store.state.address},ready:function(){return 32===this.bufPrivateKey.length&&33===this.bufPublicKey.length&&this.address},bufMessage:function(){return this.message&&this.ready?t.from(this.message):t.from("")},bufMessageAESKey:function(){return this.bufMessage.length>0?w.a.sha1(this.bufMessage):t.from("")},bufMessageSig:function(){return this.bufMessageAESKey.length>0?S.a.sign(this.bufMessageAESKey,this.bufPrivateKey):t.from("")},strMessageSig:function(){return this.bufMessageSig.length>0?C.a.encode(this.bufMessageSig):t.from("")},bufMessageSigLength:function(){return this.bufMessageSig.length>0?t.from([this.bufMessageSig.length]):t.from("")},bufBodyAESEncrypted:function(){return this.bufMessageSigLength.length>0?_.a.encrypt(t.concat([this.bufMessageSigLength,this.bufMessageSig,this.bufPublicKey,this.bufMessage]),this.bufMessageAESKey):t.from("")},strBodyEncoded:function(){if(this.bufBodyAESEncrypted.length>0){var body=t.concat([this.bufMessageAESKey,this.bufBodyAESEncrypted]);return C.a.encode(body)}return""}},mounted:(o=Object(n.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=this.getCache("bufPrivateKeyEncrypted"))&&(this.bufPrivateKeyEncrypted=t.from(r.data)),(o=this.getCache("bufTestEncrypted"))&&(this.bufTestEncrypted=t.from(o.data));case 4:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),methods:{start:function(){if(this.vpriv){if(!this.vprivError){if(this.passwordSet){if(this.passwordSet===this.passwordRepeat){this.bufPrivateKey=l.a.fromVPriv(this.vpriv);var e=_.a.encrypt(this.bufPrivateKey,t.from(this.passwordSet));this.setCache("bufPrivateKeyEncrypted",e);var r=v.a.fromPrivateKey(this.bufPrivateKey);this.$store.dispatch("SET_PUBLIC_KEY",r);var o=_.a.encrypt(t.from("VOKEN Message Helper"),t.from(this.passwordSet));return void this.setCache("bufTestEncrypted",o)}return void this.$toast.error("Please confirm the `Password`...")}return void this.$toast.error("`Password` is empty...")}this.$toast.error("Invalid `Private Key`...")}else this.$toast.error("`Private Key` could not be empty...")},unlock:function(){if(this.passwordMatched){this.bufPrivateKey=_.a.decrypt(this.bufPrivateKeyEncrypted,this.bufPassword);var t=v.a.fromPrivateKey(this.bufPrivateKey);this.$store.dispatch("SET_PUBLIC_KEY",t)}else this.$toast.error("The `Password` does not work")},reset:function(){this.vpriv="",this.vprivError="",this.passwordSet="",this.passwordRepeat="",this.bufPrivateKey=t.from(""),this.bufPrivateKeyEncrypted=t.from(""),this.password="",this.bufTestEncrypted=t.from(""),this.removeCache("bufPrivateKeyEncrypted"),this.removeCache("bufTestEncrypted")},copyEncodedData:function(){this.$refs["encoded-message"].select(),document.execCommand("copy")?this.$toast.info("Copied"):this.$toast.info("Copy failed")},setCache:function(e,r){var o=w.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.setLocalStorage(o,r)},getCache:function(e){var r=w.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.getLocalStorage(r)},removeCache:function(e){var r=w.a.sha256(t.from(e)).toString("hex");return this.$auth.$storage.removeLocalStorage(r)}}}}).call(this,r(9).Buffer)},523:function(t,e,r){var content=r(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("0eebb9ed",content,!0,{sourceMap:!1})},544:function(t,e,r){"use strict";r(523)},545:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.initialize[data-v-521473a0]{width:100%;max-width:36rem;background-image:linear-gradient(to bottom right,var(--gradient-color-stops));--gradient-from-color:#fdf2f2;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(253,242,242,0));--gradient-to-color:#fcd9bd;border-radius:.375rem;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);--text-opacity:1;color:#4b5563;color:rgba(75,85,99,var(--text-opacity))}.initialize label[data-v-521473a0]{font-size:.875rem}.initialize input[data-v-521473a0]{font-family:Hack,monospace,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:.75rem}.initialize .btn[data-v-521473a0]{font-weight:700;font-size:1.125rem}.sign[data-v-521473a0]{background-image:linear-gradient(to bottom right,var(--gradient-color-stops));--gradient-from-color:#fdf2f2;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(253,242,242,0));--gradient-to-color:#f8b4d9;border-radius:.375rem;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}',""]),t.exports=o},590:function(t,e,r){"use strict";r.r(e);var o=r(508).a,n=(r(544),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"resp-wide pb-12"},[r("article",{staticClass:"resp-mt prose lg:prose-lg xl:prose-xl max-w-none"},[r("h1",[t._v("\n      "+t._s(t.$t("nav.Messenger_Sign"))+"\n    ")]),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("messenger.You_can_sign_and_encode__"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"my-6 border-t"}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.cached&&!t.ready,expression:"!cached && !ready"}],staticClass:"initialize py-4 px-2 sm:px-4"},[r("div",{staticClass:"font-bold text-gray-800 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Set_your_Private_Key_to_start"))+"...\n    ")]),t._v(" "),r("div",{staticClass:"mt-6 space-y-3"},[r("div",{class:{success:t.vpriv&&!t.vprivError,error:t.vpriv&&t.vprivError}},[r("label",{attrs:{for:"vpriv"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!t.vpriv||!t.vprivError,expression:"!vpriv || !vprivError"}]},[t._v("\n            "+t._s(t.$t("messenger.Set_your_Private_Key"))+"\n          ")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.vpriv&&t.vprivError,expression:"vpriv && vprivError"}]},[t._v("\n            "+t._s(t.vprivError)+"\n          ")])]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.vpriv,expression:"vpriv"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"text",id:"vpriv",placeholder:"vpriv..."},domProps:{value:t.vpriv},on:{input:function(e){e.target.composing||(t.vpriv=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])]),t._v(" "),r("div",{class:{success:t.passwordConfirmed}},[r("label",{attrs:{for:"password_set"}},[t._v("\n          "+t._s(t.$t("messenger.Set_a_password"))+"\n        ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordSet,expression:"passwordSet"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password_set"},domProps:{value:t.passwordSet},on:{input:function(e){e.target.composing||(t.passwordSet=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])]),t._v(" "),r("div",{class:{success:t.passwordConfirmed,error:t.passwordRepeat&&!t.passwordSame}},[r("label",{attrs:{for:"password_repeat"}},[t._v("\n          "+t._s(t.$t("messenger.Confirm_the_password"))+"\n        ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordRepeat,expression:"passwordRepeat"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password_repeat"},domProps:{value:t.passwordRepeat},on:{input:function(e){e.target.composing||(t.passwordRepeat=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)])])]),t._v(" "),r("div",{staticClass:"mt-4 space-y-2 md:flex md:space-y-0 md:space-x-4"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.start}},[t._v("\n        "+t._s(t.$t("messenger.Start"))+"\n      ")]),t._v(" "),r("a",{staticClass:"w-full btn justify-center py-3",attrs:{target:"_blank",href:t.localePath("/wallet/generator")}},[t._v("\n        "+t._s(t.$t("messenger.Visit_Generator"))+"\n      ")])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.cached&&!t.ready,expression:"cached && !ready"}],staticClass:"initialize py-4 px-2 sm:px-4 space-y-4"},[r("div",{staticClass:"font-bold text-gray-800 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Your_Private_Key_is_encrypted__"))+"\n    ")]),t._v(" "),r("div",{class:{success:t.passwordMatched}},[r("label",{attrs:{for:"password"}},[t._v("\n        "+t._s(t.$t("messenger.Input_the_password_to_unlock"))+"\n      ")]),t._v(" "),r("div",{staticClass:"relative mt-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("div",{staticClass:"absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none"},[r("fa",{staticClass:"fa-error",attrs:{icon:["fas","times"]}}),t._v(" "),r("fa",{staticClass:"fa-success",attrs:{icon:["fas","check"]}}),t._v(" "),r("fa",{staticClass:"fa-warn",attrs:{icon:["fas","exclamation-triangle"]}})],1)]),t._v(" "),r("div",{staticClass:"mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.unlock}},[t._v("\n          "+t._s(t.$t("messenger.Unlock"))+"\n        ")]),t._v(" "),r("button",{staticClass:"w-full btn btn-gray justify-center py-3 uppercase",attrs:{type:"button"},on:{click:t.reset}},[t._v("\n          "+t._s(t.$t("messenger.Reset"))+"\n        ")])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticClass:"sign mt-4 md:mt-6 lg:mt-8 xl:mt-10 py-6 lg:py-10 px-2 sm:px-4"},[r("h2",{staticClass:"font-bold text-2xl text-gray-700 text-center"},[t._v("\n      "+t._s(t.$t("messenger.Sign__Encode_A_Message"))+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-8 w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0"},[r("div",{staticClass:"w-full"},[r("label",{staticClass:"text-sm",attrs:{for:"message"}},[t._v("\n          "+t._s(t.$t("messenger.Text_Message"))+"\n        ")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none",attrs:{id:"message",rows:"10",placeholder:t.$t("messenger.Input_the_original_message_here_")},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-full"},[r("label",{staticClass:"text-sm",attrs:{for:"encoded_message"}},[t._v("\n          "+t._s(t.$t("messenger.Encoded_data__with__"))+"\n        ")]),t._v(" "),r("textarea",{ref:"encoded-message",staticClass:"textarea-indigo w-full mt-1 py-3 px-4 bg-indigo-100 font-mono text-sm lg:text-base text-indigo-600 resize-none",attrs:{id:"encoded_message",rows:"10",readonly:""},domProps:{value:t.strBodyEncoded}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.bufMessageSig.length>0,expression:"bufMessageSig.length > 0"}],staticClass:"my-10 lg:my-4 px-4 flex text-green-600 space-x-4 font-mono"},[r("fa",{staticClass:"text-3xl",attrs:{icon:["fas","signature"]}}),t._v(" "),r("div",[r("div",[t._v("\n          "+t._s(t.$t("messenger.Your_Signature_"))+"\n        ")]),t._v(" "),r("div",{staticClass:"mt-1 text-xs md:text-sm break-all"},[t._v("\n          "+t._s(t.strMessageSig)+"\n        ")])])],1),t._v(" "),r("div",{staticClass:"mt-2 sm:flex sm:justify-end"},[r("div",{staticClass:"w-full sm:max-w-md"},[r("button",{staticClass:"w-full btn btn-pink justify-center py-3 font-bold",attrs:{type:"button"},on:{click:t.copyEncodedData}},[t._v("\n          "+t._s(t.$t("messenger.Copy_the_encoded_data"))+"\n        ")])])])])])}),[],!1,null,"521473a0",null);e.default=component.exports}}]);