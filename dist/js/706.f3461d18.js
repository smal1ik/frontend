"use strict";(self["webpackChunkkportal"]=self["webpackChunkkportal"]||[]).push([[706],{8898:function(e,t,o){var r=o(6265),s=o.n(r),c=(o(6802),o(4239));const a=s().create();a.interceptors.request.use((e=>(localStorage.getItem("access_token")&&(e.headers.authorization=`JWT ${localStorage.getItem("access_token")}`),e)),(e=>{})),a.interceptors.response.use((e=>(localStorage.getItem("access_token")&&(e.headers.authorization=`JWT ${localStorage.getItem("access_token")}`),e)),(e=>{if("token_not_valid"===e.response.data.code)return s().post(`${c.Z.getters.getServerUrl}/auth/jwt/refresh`,{refresh:localStorage.getItem("refresh_token")}).then((t=>(localStorage.setItem("access_token",t.data.access),e.config.authorization=`JWT ${localStorage.getItem("access_token")}`,a.request(e.config)))).error((e=>{console.log("Logout - токен истёк."),c.Z.commit("logout")}))})),t["Z"]=a},9706:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var r=o(3396),s=o(7139);const c=(0,r._)("h2",null,"Личный кабинет",-1);function a(e,t,o,a,l,n){return(0,r.wg)(),(0,r.iD)("div",null,[c,(0,r.Uk)(" "+(0,s.zw)(l.localStorage.getItem("tmp_username")),1)])}var l=o(8898),n={name:"Secure",data(){return{secure_data:"",roles:[],localStorage:localStorage}},components:{},created(){console.log("secure page"),this.getSecure(),this.getRoles(),this.getServices()},methods:{getSecure(){l.Z.get(`${this.$store.getters.getServerUrl}/test`).then((e=>{console.log("response secure"),console.log(e),console.log(localStorage.getItem("tmp_username")),this.secure_data=e.data.key})).catch((function(e){console.log("error"),console.log(e)}))},getRoles(){l.Z.get(`${this.$store.getters.getServerUrl}/get_roles`).then((e=>{console.log("response roles"),console.log(e.data),this.roles=e.data.roles})).catch((function(e){console.log("error"),console.log(e)}))},getServices(){l.Z.get(`${this.$store.getters.getServerUrl}/service/for_me`).then((e=>{console.log("response services"),console.log(e.data),this.services=e.data})).catch((function(e){console.log("error"),console.log(e)}))}}},g=o(89);const i=(0,g.Z)(n,[["render",a]]);var u=i}}]);
//# sourceMappingURL=706.f3461d18.js.map