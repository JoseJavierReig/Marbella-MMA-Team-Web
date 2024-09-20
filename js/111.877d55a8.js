"use strict";(self["webpackChunkmarbella_mma_team_web"]=self["webpackChunkmarbella_mma_team_web"]||[]).push([[111],{6111:function(t,n,e){e.r(n),e.d(n,{default:function(){return C}});var a=function(){var t=this,n=t._self._c;return n("div",t._l(t.translateLocation,(function(e){return n("LocationContainer",{key:e,attrs:{name:e.name,title:e.title,src:e.src,dir:e.dir,reverse:e.reverse,morning:e.morning,evening:e.evening,number:t.number}})})),1)},o=[],r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"location-container"},[n("div",{staticClass:"location-info-container"},[n("h2",{staticClass:"location-title"},[t._v(t._s(t.title))]),n("span",{staticClass:"location-info"},[n("v-icon",{staticClass:"icon",attrs:{dark:""}},[t._v("mdi-phone")]),n("span",{staticClass:"info-text"},[t._v(t._s(t.number))])],1),n("span",{staticClass:"location-info"},[n("v-icon",{staticClass:"icon",attrs:{dark:""}},[t._v("mdi-map-marker")]),n("span",{staticClass:"info-text"},[t._v(t._s(t.dir))])],1),n("div",{staticClass:"location-schedule-container"},[n("h2",{staticClass:"location-schedule-title"},[t._v(t._s(t.$t("location.schedules")))]),n("div",{staticClass:"location-schedule-table"},[n("table",[n("thead",[n("tr",[n("th"),t._l(t.$weekdays,(function(e){return n("th",{key:e},[t._v(" "+t._s(t.$t(`weekDays.${e}`))+" ")])}))],2)]),n("tbody",[n("tr",[n("td",[t._v(t._s(t.$t("location.morning")))]),t._l(t.morning,(function(e){return n("td",{key:e,class:t.getColorHour(t.name,e.hour)},[t._v(t._s(e.hour))])}))],2),n("tr",[n("td",[t._v(t._s(t.$t("location.evening")))]),t._l(t.evening,(function(e){return n("td",{key:e,class:t.getColorHour(t.name,e.hour)},[t._v(t._s(e.hour))])}))],2)])])]),n("BtnInfo",{attrs:{text:t.$t("general.moreInfo"),name:t.name,morning:t.morning,evening:t.evening}})],1)]),n("div",{staticClass:"location-map-container"},[n("iframe",{staticStyle:{border:"0"},attrs:{src:t.src,width:"100%",height:"100%",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])])},s=[],i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"btn-info-container"},[n("v-dialog",{model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[n("v-card",{attrs:{dark:""}},[n("v-card-title",{staticClass:"dialog-title"},[t._v(" "+t._s(t.$t("location.schedules"))+" "),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(n){return t.openAndCloseDialog()}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("v-card-text",{staticClass:"dialog-content"},[n("table",[n("thead",[n("tr",[n("th"),t._l(t.$weekdays,(function(e){return n("th",{key:e},[t._v(" "+t._s(t.$t(`weekDays.${e}`))+" ")])}))],2)]),n("tbody",[n("tr",[n("td",[t._v(t._s(t.$t("location.morning")))]),t._l(t.morning,(function(e){return n("td",{key:e,class:t.getColorHour(t.name,e.hour)},[t._v(t._s(e.hour))])}))],2),n("tr",[n("td",[t._v(t._s(t.$t("location.evening")))]),t._l(t.evening,(function(e){return n("td",{key:e,class:t.getColorHour(t.name,e.hour)},[t._v(t._s(e.hour))])}))],2)])])])],1)],1),n("v-btn",{staticClass:"btn-info",on:{click:function(n){return t.openAndCloseDialog()}}},[t._v(" "+t._s(t.text)+" ")])],1)},l=[],d={name:"BtnInfo",props:{text:String,name:String,morning:Array,evening:Array},data:()=>({dialog:!1}),methods:{openAndCloseDialog(){this.dialog=!this.dialog},getColorHour(t,n){console.log(t);let e="";return n&&(e="real"===t?"td-real":"td-unit"),e}}},c=d,u=e(1656),m=(0,u.A)(c,i,l,!1,null,"c9c8dc52",null),h=m.exports,g={name:"LocationContainer",props:{reverse:Boolean,name:String,title:String,src:String,dir:String,morning:Array,evening:Array,number:String},components:{BtnInfo:h},methods:{getColorHour(t,n){console.log(t);let e="";return n&&(e="real"===t?"td-real":"td-unit"),e}}},v=g,y=(0,u.A)(v,r,s,!1,null,"0e57d679",null),f=y.exports,_={components:{LocationContainer:f},data:()=>({locations:[{name:"real",title:"Real club de padel Marbella",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.7378460449295!2d-4.973362522866862!3d36.488047385231155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7329f4742dbda5%3A0x73c64e215c2e4dc1!2sReal%20Club%20Padel%20Marbella!5e0!3m2!1ses!2ses!4v1726693843388!5m2!1ses!2ses",dir:"",morning:[{day:"monday",hour:"12:00/ 13:00"},{day:"tuesday",hour:null},{day:"wednesday",hour:null},{day:"thursday",hour:null},{day:"friday",hour:"12:00/ 13:00"},{day:"saturday",hour:"11:00/ 12:00"}],evening:[{day:"monday",hour:"19:30/ 20:30"},{day:"tuesday",hour:null},{day:"wednesday",hour:"19:30/ 20:30"},{day:"thursday",hour:null},{day:"friday",hour:"19:30/ 20:30"},{day:"saturday",hour:null}],reverse:!1},{name:"unit",title:"Unit 41 Fitness",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.0873255050315!2d-4.981179622866471!3d36.503754084351954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732b606c08e6bf%3A0xe9908b71ed5fc014!2sUnit%2041%20Fitness!5e0!3m2!1ses!2ses!4v1726694930575!5m2!1ses!2ses",dir:"",morning:[],evening:[{day:"monday",hour:null},{day:"tuesday",hour:"17:30/19:00"},{day:"wednesday",hour:null},{day:"thursday",hour:"17:30/19:00"},{day:"friday",hour:null},{day:"saturday",hour:null}],reverse:!0}],number:"+34 606 707 909"}),created(){console.log(this.locations),this.locations.forEach((t=>{t.dir=this.$t(`location.${t.name}`)}))},computed:{translateLocation(){return this.locations.forEach((t=>{t.dir=this.$t(`location.${t.name}`)})),this.locations}}},b=_,p=(0,u.A)(b,a,o,!1,null,"4f50f779",null),C=p.exports}}]);
//# sourceMappingURL=111.877d55a8.js.map