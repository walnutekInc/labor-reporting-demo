import{S as v,x as g,b as d,d as i,j as S,t as u,E as y,T as V,e as c,h,f as _,V as k,z as B,w as N,U as R,W as w,X as x,P as m,g as t,G as P}from"./index-898e6ee3.js";import{s as j}from"./default.cssvuetypestyleindex0srctruelang-40922a68.js";import{d as q}from"./sweetalert2.all-156f0bd9.js";const A={key:0,class:"mg-b-10"},F={class:"text-danger"},G={class:"invalid-feedback"},z={__name:"FormSelect",props:{name:{type:String,required:!0},value:{type:[String,Number,Array]},label:{type:String,default:void 0},required:{type:Boolean,default:!1},formGroupAttr:Object,disabled:Boolean},setup(e){const l=e,f=v(l,"name"),{value:s,errorMessage:o}=q(f,void 0,{initialValue:l.value??void 0,validateOnValueUpdate:!1}),p=g(null);return(r,n)=>(d(),i("div",m({class:"form-group"},{...e.formGroupAttr},{class:{"has-error":!!t(o)}}),[e.label?(d(),i("p",A,[S(u(e.label)+" ",1),y(c("span",F,"*",512),[[V,e.required]])])):h("",!0),_(t(j),m({ref_key:"multiSelectRef",ref:p},r.$attrs,{modelValue:t(s),"onUpdate:modelValue":n[0]||(n[0]=a=>P(s)?s.value=a:null),disabled:e.disabled}),k({_:2},[B(Object.keys(r.$slots),a=>({name:a,fn:N(b=>[R(r.$slots,a,w(x(b||{})))])}))]),1040,["modelValue","disabled"]),c("div",G,u(t(o)),1)],16))}};export{z as _};
