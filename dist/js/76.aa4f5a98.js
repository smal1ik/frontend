"use strict";(self["webpackChunkkportal"]=self["webpackChunkkportal"]||[]).push([[76],{8898:function(e,t,l){var r=l(6265),o=l.n(r),s=(l(6802),l(4239));const a=o().create();a.interceptors.request.use((e=>(localStorage.getItem("access_token")&&(e.headers.authorization=`JWT ${localStorage.getItem("access_token")}`),e)),(e=>{})),a.interceptors.response.use((e=>(localStorage.getItem("access_token")&&(e.headers.authorization=`JWT ${localStorage.getItem("access_token")}`),e)),(e=>{if("token_not_valid"===e.response.data.code)return o().post(`${s.Z.getters.getServerUrl}/auth/jwt/refresh`,{refresh:localStorage.getItem("refresh_token")}).then((t=>(localStorage.setItem("access_token",t.data.access),e.config.authorization=`JWT ${localStorage.getItem("access_token")}`,a.request(e.config)))).error((e=>{console.log("Logout - токен истёк."),s.Z.commit("logout")}))})),t["Z"]=a},5076:function(e,t,l){l.r(t),l.d(t,{default:function(){return y}});var r=l(3396),o=l(7139),s=l(2882),a=l(1489),n=l(7783),u=l(6422),i=l(3369),d=l(4842);const c=(0,r._)("span",{style:{"font-weight":"bold"}},"Tittle:",-1),h={style:{"white-space":"pre-line"}},p=(0,r._)("span",{style:{"font-weight":"bold"}},"Short text:",-1),m={style:{"white-space":"pre-line"}},g=(0,r._)("span",{style:{"font-weight":"bold"}},"Text:",-1),w={style:{"white-space":"pre-line"}},f=(0,r.Uk)(" Добавить ");function _(e,t,l,_,k,x){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(a._,{class:"my-4 pa-4"},{default:(0,r.w5)((()=>[(0,r.Wm)(n.k,null,{default:(0,r.w5)((()=>[(0,r._)("div",null,[c,(0,r._)("p",h,(0,o.zw)(k.title),1)])])),_:1}),(0,r.Wm)(n.k,null,{default:(0,r.w5)((()=>[(0,r._)("div",null,[p,(0,r._)("p",m,(0,o.zw)(k.shorttext),1)])])),_:1}),(0,r.Wm)(n.k,null,{default:(0,r.w5)((()=>[(0,r._)("div",null,[g,(0,r._)("p",w,(0,o.zw)(k.text),1)])])),_:1})])),_:1}),(0,r.Wm)(i.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u.O,{ref:"form"},{default:(0,r.w5)((()=>[(0,r.Wm)(d.z,{modelValue:k.title,"onUpdate:modelValue":t[0]||(t[0]=e=>k.title=e),label:"Tittle",type:"text",variant:"outlined",rules:[k.rules.required]},null,8,["modelValue","rules"]),(0,r.Wm)(d.z,{modelValue:k.shorttext,"onUpdate:modelValue":t[1]||(t[1]=e=>k.shorttext=e),label:"Short text",type:"text",variant:"outlined",rules:[k.rules.required]},null,8,["modelValue","rules"]),(0,r.Wm)(d.z,{modelValue:k.text,"onUpdate:modelValue":t[2]||(t[2]=e=>k.text=e),label:"Text",type:"text",variant:"outlined",rules:[k.rules.required],required:""},null,8,["modelValue","rules"]),(0,r.Wm)(i.K,{align:"center"},{default:(0,r.w5)((()=>[(0,r.Wm)(s.T,{color:"primary",onClick:x.AddNews},{default:(0,r.w5)((()=>[f])),_:1},8,["onClick"])])),_:1})])),_:1},512)])),_:1})])}var k=l(8898),x={name:"NewsUpdate",data(){return{post:{},title:"",shorttext:"",text:"",short:!0,rules:{required:e=>!!e||"Поле не может быть пустым."}}},components:{},created(){console.log("Add news page"),k.Z.get(`${this.$store.getters.getServerUrl}/get_roles`).then((e=>{e.data.roles.includes("news_editor")||this.$router.push("/news/")}))},methods:{async AddNews(){(await this.$refs.form.validate()).valid&&(k.Z.post(`${this.$store.getters.getServerUrl}/posts/new/`,{title:this.title,shorttext:this.shorttext,text:this.text,short:!0}).catch((function(e){console.log("error"),console.log(e)})),await this.$router.push("/news/"))}}},v=l(89);const W=(0,v.Z)(x,[["render",_]]);var y=W}}]);
//# sourceMappingURL=76.aa4f5a98.js.map