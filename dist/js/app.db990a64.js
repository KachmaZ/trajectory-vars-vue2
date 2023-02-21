(function(){"use strict";var e={2498:function(e,t,r){var i=r(144),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("ModalEditor"),t("section",{staticClass:"mt-3 mb-5"},[t("VehiclesSection")],1),t("section",[t("YandexMap")],1)],1)},o=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"yandex-map"},[t("yandex-map",{attrs:{coords:e.coords,zoom:e.zoom},on:{click:e.onClick}},e._l(e.getAllVehicles,(function(e){return t("ymap-marker",{key:e.id,attrs:{coords:[e.latitude,e.longitude],"marker-id":e.id,"hint-content":e.name+" "+e.model}})})),1)],1)},n=[],u=r(5836),c=r(629),s={data:()=>({settings:{apiKey:"360b7364-84ef-49c8-9916-1d64891bf151"},coords:[59.93901,30.31583],zoom:12}),computed:{...(0,c.Se)(["getAllVehicles"])},methods:{onClick(e){this.coords=e.get("coords")}},components:{yandexMap:u.xR,ymapMarker:u.Jk}},d=s,p=r(1001),h=(0,p.Z)(d,a,n,!1,null,"25fb3557",null),m=h.exports,v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vehicles"},[t("div",{staticClass:"vehicles_head"},[t("VehiclesFilter"),t("VehicleAddButton")],1),t("VehiclesGrid")],1)},f=[],V=function(){var e=this,t=e._self._c;return t("div",{staticClass:"add"},[t("div",{staticClass:"add_btn",on:{click:e.showToggle}},[t("svg",{attrs:{fill:"#d0d326",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 45.402 45.402","xml:space":"preserve"}},[t("g",[t("path",{attrs:{d:"M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141\n          c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27\n          c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435\n          c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"}})])])]),e.shown?t("form",{staticClass:"add_form",on:{submit:function(t){return t.preventDefault(),e.submitNewUser.apply(null,arguments)}}},[t("input",{attrs:{type:"text",name:"name",required:"",autocomplete:"off",placeholder:"Name"}}),t("input",{attrs:{type:"text",name:"model",required:"",autocomplete:"off",placeholder:"Model"}}),t("input",{attrs:{type:"number",name:"year",required:"",autocomplete:"off",placeholder:"Year"}}),t("input",{attrs:{type:"text",name:"color",required:"",autocomplete:"off",placeholder:"Color"}}),t("input",{attrs:{type:"number",name:"price",required:"",autocomplete:"off",placeholder:"Price"}}),t("input",{attrs:{type:"number",name:"latitude",required:"",autocomplete:"off",placeholder:"Latitude"}}),t("input",{attrs:{type:"number",name:"longitude",required:"",autocomplete:"off",placeholder:"Longitude"}}),t("button",{attrs:{type:"submit"}},[e._v("Add vehicle")])]):e._e()])},g=[],b={data(){return{shown:!1}},methods:{...(0,c.nv)(["addVehicle"]),showToggle(){this.shown=!this.shown},submitNewUser(e){let t=e.target.elements,r={name:t.name.value,model:t.model.value,year:t.year.value,color:t.color.value,price:t.price.value,latitude:t.latitude.value,longitude:t.longitude.value};this.addVehicle(r),this.showToggle}}},_=b,y=(0,p.Z)(_,V,g,!1,null,"8b096c7c",null),C=y.exports,w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vehicles-grid row g-4"},e._l(e.getSortedVehicles,(function(e){return t("VehicleCard",{key:e.id,attrs:{vehicle:e}})})),1)},x=[],S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper col-12 col-sm-6 col-lg-4 p-2"},[t("div",{staticClass:"vehicle-card p-4"},[t("h2",{staticClass:"vehicle-card_title"},[e._v(e._s(e.vehicle.name)+" "+e._s(e.vehicle.model))]),t("h4",{staticClass:"vehicle-card_subtitle"},[e._v(" "+e._s(e.vehicle.year)+" ")]),t("div",{staticClass:"vehicle-card_color"},[t("div",{staticClass:"vehicle-card_color__name"},[e._v("Color: "+e._s(e.vehicle.color))]),t("div",{staticClass:"vehicle-card_color__circle",style:{backgroundColor:e.vehicle.color}})]),t("div",{staticClass:"vehicle-card_price mb-3"},[e._v("Price: "+e._s(e.vehicle.price))]),t("div",{staticClass:"vehicle-card_btns"},[t("b-button",{attrs:{variant:"danger"},on:{click:function(t){return e.delVehicle(e.vehicle.id)}}},[e._v("Delete")]),t("b-button",{attrs:{variant:"warning"},on:{click:e.openEditor}},[e._v("Edit")])],1)])])},k=[],E={props:{vehicle:Object},methods:{...(0,c.nv)(["delVehicle","setEditorStatus","setCurrentVehicleId"]),openEditor(){this.setCurrentVehicleId(this.vehicle.id),this.setEditorStatus(!0)}}},P=E,q=(0,p.Z)(P,S,k,!1,null,null,null),I=q.exports,A={computed:{...(0,c.Se)(["getSortedVehicles"])},components:{VehicleCard:I}},O=A,j=(0,p.Z)(O,w,x,!1,null,null,null),M=j.exports,F=function(){var e=this,t=e._self._c;return t("b-dropdown",{attrs:{variant:"outline-success",text:"Sort by "+e.getFilterValue}},e._l(["id","name","model","year","price"],(function(r){return t("b-dropdown-item-button",{key:r},[e._v(" "+e._s(r)+" ")])})),1)},Z=[],N={computed:{...(0,c.Se)(["getFilterValue"])},methods:{...(0,c.nv)(["filterVehicles","setFilterValue"])},mounted(){document.querySelectorAll(".dropdown-item").forEach((e=>{e.addEventListener("click",(e=>{this.setFilterValue(e.target.innerHTML)}))}))}},T=N,L=(0,p.Z)(T,F,Z,!1,null,null,null),D=L.exports,z={components:{VehicleAddButton:C,VehiclesGrid:M,VehiclesFilter:D}},Y=z,B=(0,p.Z)(Y,v,f,!1,null,null,null),G=B.exports,H=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.getEditorStatus,expression:"getEditorStatus"}],staticClass:"modal-editor_wrapper",on:{click:function(t){return t.stopPropagation(),e.onClick(t)}}},[t("div",{staticClass:"modal-editor p-4"},[t("h2",[e._v("Edit vehicle card")]),t("form",{staticClass:"modal-editor_form",on:{submit:function(t){return t.preventDefault(),e.submitEditVehicle.apply(null,arguments)}}},[t("label",{attrs:{for:"name"}},[e._v("Name: "),t("input",{attrs:{type:"text",name:"name",required:"",autocomplete:"off"},domProps:{value:e.getCurrentVehicle.name}})]),t("label",{attrs:{for:"model"}},[e._v("Model: "),t("input",{attrs:{type:"text",name:"model",required:"",autocomplete:"off"},domProps:{value:e.getCurrentVehicle.model}})]),t("label",{attrs:{for:"year"}},[e._v("Year: "),t("input",{attrs:{type:"number",name:"year",required:"",autocomplete:"off"},domProps:{value:e.getCurrentVehicle.year}})]),t("label",{attrs:{for:"color"}},[e._v("Color: "),t("input",{attrs:{type:"text",name:"color",required:"",autocomplete:"off"},domProps:{value:e.getCurrentVehicle.color}})]),t("label",{attrs:{for:"price"}},[e._v("Price: "),t("input",{attrs:{type:"number",name:"price",required:"",autocomplete:"off"},domProps:{value:e.getCurrentVehicle.price}})]),t("label",{attrs:{for:"latitude"}},[e._v("Latitude: "),t("input",{attrs:{type:"number",step:"any",name:"latitude",required:"",autocomplete:"off"},domProps:{value:e.getCurrentVehicle.latitude}})]),t("label",{attrs:{for:"longitude"}},[e._v("Longitude: "),t("input",{attrs:{type:"number",step:"any",name:"longitude",required:"",autocomplete:"off"},domProps:{value:e.getCurrentVehicle.longitude}})]),t("button",{staticClass:"mt-3",attrs:{type:"submit"}},[e._v("Edit vehicle")])])])])},U=[],J={computed:{...(0,c.Se)(["getEditorStatus","getCurrentVehicle"])},methods:{...(0,c.nv)(["setEditorStatus","editVehicle"]),onClick(e){e.target==document.querySelector(".modal-editor_wrapper")&&this.setEditorStatus(!1)},submitEditVehicle(e){let t=e.target.elements,r={id:this.getCurrentVehicle.id,name:t.name.value,model:t.model.value,year:Number(t.year.value),color:t.color.value,price:Number(t.price.value),latitude:Number(t.latitude.value),longitude:Number(t.longitude.value)};this.editVehicle(r),this.setEditorStatus(!1)}}},K=J,R=(0,p.Z)(K,H,U,!1,null,null,null),X=R.exports,$={name:"App",components:{YandexMap:m,VehiclesSection:G,ModalEditor:X},methods:{...(0,c.nv)(["fetchAll"])},async mounted(){this.fetchAll()}},Q=$,W=(0,p.Z)(Q,l,o,!1,null,null,null),ee=W.exports,te=(r(541),{actions:{async fetchAll(e){const t=await fetch("https://test.tspb.su/test-task/vehicles"),r=await t.json();e.commit("updateVehicles",r)},addVehicle(e,t){t={...t,id:e.state.currentId},e.commit("updateId",1),e.commit("updateAddVehicle",t)},delVehicle(e,t){e.commit("updateDelVehicle",t)},editVehicle(e,t){e.commit("updateEditVehicle",t)},setFilterValue(e,t){e.commit("updateFilterValue",t.trim())},setEditorStatus(e,t){e.commit("updateEditorStatus",t)},setCurrentVehicleId(e,t){e.commit("updateCurrentVehicleId",t)}},mutations:{updateVehicles(e,t){e.vehicles=t},updateId(e,t){e.currentId+=t},updateCurrentVehicleId(e,t){e.currentVehicleId=t},updateAddVehicle(e,t){e.vehicles.unshift(t)},updateDelVehicle(e,t){e.vehicles=e.vehicles.filter((e=>e.id!=t))},updateEditVehicle(e,t){let r=[...e.vehicles],i=r.findIndex((t=>t.id===e.currentVehicleId));r[i]=t,e.vehicles=r},updateFilterValue(e,t){e.filterValue=t},updateEditorStatus(e,t){e.editorStatus=t}},state:{vehicles:[],currentId:21,filterValue:"name",currentVehicleId:1,editorStatus:!1},getters:{getAllVehicles(e){return e.vehicles},getSortedVehicles(e){function t(t,r){return t[e.filterValue]>r[e.filterValue]?-1:t[e.filterValue]<r[e.filterValue]?1:0}return e.vehicles.sort(t)},getCurrentVehicle(e){return e.vehicles.find((t=>t.id===e.currentVehicleId))},getFilterValue(e){return e.filterValue.toLowerCase()},getEditorStatus(e){return e.editorStatus}}});i["default"].use(c.ZP);var re=new c.ZP.Store({modules:{vehicles:te}}),ie=r(9657),le=r(3017);i["default"].use(ie.XG7),i["default"].use(le.A7),i["default"].config.productionTip=!1,new i["default"]({store:re,render:e=>e(ee)}).$mount("#app")}},t={};function r(i){var l=t[i];if(void 0!==l)return l.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,i,l,o){if(!i){var a=1/0;for(s=0;s<e.length;s++){i=e[s][0],l=e[s][1],o=e[s][2];for(var n=!0,u=0;u<i.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](i[u])}))?i.splice(u--,1):(n=!1,o<a&&(a=o));if(n){e.splice(s--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[i,l,o]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var l,o,a=i[0],n=i[1],u=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(l in n)r.o(n,l)&&(r.m[l]=n[l]);if(u)var s=u(r)}for(t&&t(i);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},i=self["webpackChunktrajectory_vars_vue2"]=self["webpackChunktrajectory_vars_vue2"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(2498)}));i=r.O(i)})();
//# sourceMappingURL=app.db990a64.js.map