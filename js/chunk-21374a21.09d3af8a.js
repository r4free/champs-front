(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21374a21"],{"10be":function(t,s,e){},"50be":function(t,s,e){"use strict";var a=e("10be"),r=e.n(a);r.a},bc33:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"all-wrapper menu-side with-pattern"},[e("div",{staticClass:"auth-box-w"},[e("div",{staticClass:"logo-w"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{alt:"",src:"img/logo-big.png"}})])],1),e("h4",{staticClass:"auth-header"},[t._v("\n            Concluir cadastro\n        ")]),e("form",{on:{submit:function(s){return s.preventDefault(),t.register(s)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{placeholder:"Seu email",type:"email",required:"",disabled:""},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t.errors.email?e("span",{staticClass:"text-danger"},[e("small",[t._v(t._s(t.errors.email))])]):t._e(),e("div",{staticClass:"pre-icon os-icon os-icon-mail"})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Nome")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{placeholder:"Seu nome",type:"text",required:""},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),t.errors.name?e("span",{staticClass:"text-danger"},[e("small",[t._v(t._s(t.errors.name))])]):t._e(),e("div",{staticClass:"pre-icon os-icon os-icon-user-male-circle"})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Senha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"Sua senha",type:"password",required:"",minlength:"6"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t.errors.password?e("span",{staticClass:"text-danger"},[e("small",[t._v(t._s(t.errors.password))])]):t._e(),e("div",{staticClass:"pre-icon os-icon os-icon-fingerprint"})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Confirmar senha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control",attrs:{placeholder:"Sua senha",type:"password",required:"",minlength:"6"},domProps:{value:t.password_confirmation},on:{input:function(s){s.target.composing||(t.password_confirmation=s.target.value)}}}),t.errors.password_confirmation?e("span",{staticClass:"text-danger"},[e("small",[t._v(t._s(t.errors.password_confirmation))])]):t._e(),e("div",{staticClass:"pre-icon os-icon os-icon-fingerprint"})]),t._m(0),e("p",{staticClass:"text-center"},[e("router-link",{attrs:{to:"/entrar"}},[t._v("Já tenho cadastro")])],1)])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"buttons-w"},[e("button",{staticClass:"btn btn-primary btn-block"},[t._v("Finalizar")])])}],o=(e("7f7f"),e("1022")),n={data:function(){return{name:"",email:"",password:"",password_confirmation:"",errors:{}}},methods:{register:function(){var t=this;this.preload(!0),this.axios.post(Object(o["p"])(this.$route.params.token),{name:this.name,email:this.email,password:this.password,password_confirmation:this.password_confirmation}).then(function(s){t.$store.commit("SET_USER",s.data),t.$store.commit("SET_TOKEN",s.data.data.token),setTimeout(function(){t.$router.push({name:"admin.index"}),t.$snotify.success("Seja bem vindo!","Sucesso")},500)}).catch(function(s){500!==s.response.status&&response.status?t.errors=s.response.data.errors:(t.$router.push({name:"home"}),t.$Snotify.error("Erro desconhecido"))}).finally(function(){return setTimeout(function(){return t.preload(!1)})})}},mounted:function(){var t=this;this.$store.commit("LOGOUT"),this.$store.commit("SET_TOKEN",null),localStorage.clear(),axios.get(Object(o["q"])(this.$route.params.token)).then(function(s){t.email=s.data.email,dd(s)}).catch(function(s){t.$router.push({name:"login"})}).finally(function(){return t.preload(!1)})}},i=n,l=(e("50be"),e("2877")),c=Object(l["a"])(i,a,r,!1,null,null,null);c.options.__file="InviteRegister.vue";s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-21374a21.09d3af8a.js.map