"use strict";(self["webpackChunkkportal"]=self["webpackChunkkportal"]||[]).push([[485],{8898:function(e,t,r){var o=r(6265),l=r.n(o),a=(r(9058),r(4239));const s=l().create();s.interceptors.request.use((e=>(localStorage.getItem("access_token")&&(e.headers.authorization=`JWT ${localStorage.getItem("access_token")}`),e)),(e=>{})),s.interceptors.response.use((e=>(localStorage.getItem("access_token")&&(e.headers.authorization=`JWT ${localStorage.getItem("access_token")}`),e)),(e=>{if("token_not_valid"===e.response.data.code)return l().post(`${a.Z.getters.getServerUrl}/auth/jwt/refresh`,{refresh:localStorage.getItem("refresh_token")}).then((t=>(localStorage.setItem("access_token",t.data.access),e.config.authorization=`JWT ${localStorage.getItem("access_token")}`,s.request(e.config)))).error((e=>{console.log("Logout - токен истёк."),a.Z.commit("logout")}))})),t["Z"]=s},5485:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var o=r(3396),l=r(7139),a=r(5101),s=r(1489),n=r(6572),i=r(6422),c=r(3369),u=r(165);const m={key:0};function d(e,t,r,d,h,g){const f=(0,o.up)("v-card-header-text"),k=(0,o.up)("v-card-header");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h2",null,(0,l.zw)(h.title),1),(0,o.Wm)(s._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"ma-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(n.E,{color:"white"})])),_:1})])),_:1}),(0,o.Wm)(c.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i.O,{ref:"form"},{default:(0,o.w5)((()=>[(0,o.Wm)(u.h,{modelValue:h.email,"onUpdate:modelValue":t[0]||(t[0]=e=>h.email=e),label:"E-mail",variant:"outlined",rules:[h.rules.required,h.rules.email]},null,8,["modelValue","rules"]),h.errors.length?((0,o.wg)(),(0,o.iD)("p",m,(0,l.zw)(h.errors),1)):(0,o.kq)("",!0),(0,o.Wm)(c.K,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(a.T,{type:"submit",color:"primary",onClick:g.checkEmail},{default:(0,o.w5)((()=>[(0,o.Uk)(" Отправить ")])),_:1},8,["onClick"])])),_:1})])),_:1},512)])),_:1})])),_:1})])}var h=r(6265),g=r.n(h),f=(r(8898),{name:"Reg",props:{remindMode:void 0},data(){return{title:"...",remind:!1,email:null,errors:"",rules:{required:e=>!!e||"Поле не может быть пустым.",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Недействительная электронная почта"}}}},components:{},created(){console.log("remind mode"),console.log(this.remindMode),"remind"===this.remindMode?(this.title="Восстановление пароля",this.remind=!0):(this.title="Регистрация нового пользователя",this.remind=!1)},methods:{checkEmail:function(){if(!this.errors.length)return"remind"===this.remindMode?g().post(`${this.$store.getters.getServerUrl}/auth/users/reset_password/`,{email:this.email}).then((e=>{console.log(e)})):console.log("Тут должен быть запрос на регистрацию"),!0}}}),k=r(89);const p=(0,k.Z)(f,[["render",d]]);var _=p}}]);
//# sourceMappingURL=485.7d770031.js.map