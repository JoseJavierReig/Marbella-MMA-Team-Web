"use strict";(self["webpackChunkmarbella_mma_team_web"]=self["webpackChunkmarbella_mma_team_web"]||[]).push([[318],{9318:function(t,s,e){e.r(s),e.d(s,{default:function(){return f}});var a=function(){var t=this,s=t._self._c;return s("div",t._l(t.translateLocation,(function(t){return s("LocationContainer",{key:t,attrs:{title:t.title,src:t.src,dir:t.dir,reverse:t.reverse,morning:t.morning,evening:t.evening}})})),1)},i=[],n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"location-container"},[s("div",{staticClass:"location-info-container"},[s("h2",{staticClass:"location-title"},[t._v(t._s(t.title))]),s("span",{staticClass:"location-info"},[s("v-icon",{staticClass:"icon",attrs:{dark:""}},[t._v("mdi-phone")]),s("span",{staticClass:"info-text"},[t._v("+34 606 707 909")])],1),s("span",{staticClass:"location-info"},[s("v-icon",{staticClass:"icon",attrs:{dark:""}},[t._v("mdi-map-marker")]),s("span",{staticClass:"info-text"},[t._v(t._s(t.dir))])],1),s("div",{staticClass:"location-schedule-container"},[s("div",{staticClass:"location-schedule"},[s("h2",{staticClass:"location-schedule-title"},[t._v(t._s(t.$t("location.where")))]),s("div",{staticClass:"schedule-container"},[s("div",{staticClass:"schedule"},[s("h3",{staticClass:"location-schedule-subtitle"},[t._v(t._s(t.$t("location.morning")))]),t._l(t.morning,(function(e){return s("div",{key:e,staticClass:"schedule-day-container"},[s("span",{staticClass:"info-text schedule-text"},[t._v(t._s(t.$t(`weekDays.${e.day}`))+": ")]),s("span",{staticClass:"info-text"},[t._v(t._s(e.hour))])])}))],2),s("div",{staticClass:"schedule"},[s("h3",{staticClass:"location-schedule-subtitle"},[t._v(t._s(t.$t("location.evening")))]),t._l(t.evening,(function(e){return s("div",{key:e,staticClass:"schedule-day-container"},[s("span",{staticClass:"info-text schedule-text"},[t._v(t._s(t.$t(`weekDays.${e.day}`))+": ")]),s("span",{staticClass:"info-text"},[t._v(t._s(e.hour))])])}))],2)])]),s("v-btn",[t._v("horarios")])],1)]),s("div",{staticClass:"location-map-container"},[s("iframe",{staticStyle:{border:"0"},attrs:{src:t.src,width:"100%",height:"100%",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])])},o=[],r={name:"LocationContainer",props:{reverse:Boolean,title:String,src:String,dir:String,morning:Array,evening:Array}},l=r,c=e(1656),d=(0,c.A)(l,n,o,!1,null,"edfe8e90",null),u=d.exports,m={components:{LocationContainer:u},data:()=>({locations:[{name:"real",title:"Real club de padel Marbella",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.7378460449295!2d-4.973362522866862!3d36.488047385231155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7329f4742dbda5%3A0x73c64e215c2e4dc1!2sReal%20Club%20Padel%20Marbella!5e0!3m2!1ses!2ses!4v1726693843388!5m2!1ses!2ses",dir:"",morning:[{day:"monday",hour:"12:00/13:00"},{day:"friday",hour:"12:00/13:00"},{day:"saturday",hour:"11:00/12:00"}],evening:[{day:"monday",hour:"19:30/20:30"},{day:"wednesday",hour:"19:30/20:30"},{day:"friday",hour:"19:30/20:30"}],reverse:!1},{name:"unit",title:"Unit 41 Fitness",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.0873255050315!2d-4.981179622866471!3d36.503754084351954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732b606c08e6bf%3A0xe9908b71ed5fc014!2sUnit%2041%20Fitness!5e0!3m2!1ses!2ses!4v1726694930575!5m2!1ses!2ses",dir:"",morning:[],evening:[{day:"tuesday",hour:"17:30/19:00"},{day:"thursday",hour:"17:30/19:00"}],reverse:!0}]}),created(){console.log(this.locations),this.locations.forEach((t=>{t.dir=this.$t(`location.${t.name}`)}))},computed:{translateLocation(){return this.locations.forEach((t=>{t.dir=this.$t(`location.${t.name}`)})),this.locations}}},h=m,v=(0,c.A)(h,a,i,!1,null,"356bd3e0",null),f=v.exports}}]);
//# sourceMappingURL=318.016e7fb9.js.map