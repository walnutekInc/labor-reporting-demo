import{U as oe,V as ce,Q as ue,k as ne,l as le,D as S,A as de,o as ae,g as he,C as k,a as o,w as fe,B as F,m as me,W as pe,t as q,E as z,R as $e,s as ye,c as ve,O as _e,S as ge,f as be,F as Me}from"./index-c5178373.js";import{u as we,i as De,b as xe,c as Se,_ as J,e as ke,D as Te,f as Ce,S as re}from"./sweetalert2.all-2f8fa414.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./menu-3746472e.js";const Oe=[{id:"1",year:"2024",healthFee:2.11,incomeTaxFive:5,incomeTaxNineA:10,basicSalary:27470,incomeTax:88500}],Fe=()=>{const{setResponseList:W,pagination:R,list:O}=we();return{getConfigs:$=>{console.log($),W({records:Oe,total:1,size:10,current:1,pages:1})},pagination:R,configList:O}};var ie={exports:{}};(function(W,R){(function(O,v){W.exports=v()})(oe,function(){var O=1e3,v=6e4,$=36e5,A="millisecond",f="second",T="minute",D="hour",b="day",M="week",c="month",d="quarter",_="year",L="date",P="Invalid Date",X=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ee={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],e=r%100;return"["+r+(n[(e-20)%10]||n[e]||n[0])+"]"}},w=function(r,n,e){var s=String(r);return!s||s.length>=n?r:""+Array(n+1-s.length).join(e)+r},Y={s:w,z:function(r){var n=-r.utcOffset(),e=Math.abs(n),s=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+w(s,2,"0")+":"+w(t,2,"0")},m:function r(n,e){if(n.date()<e.date())return-r(e,n);var s=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(s,c),a=e-t<0,i=n.clone().add(s+(a?-1:1),c);return+(-(s+(e-t)/(a?t-i:i-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:c,y:_,w:M,d:b,D:L,h:D,m:T,s:f,ms:A,Q:d}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},B="en",C={};C[B]=ee;var H="$isDayjsObject",te=function(r){return r instanceof Q||!(!r||!r[H])},K=function r(n,e,s){var t;if(!n)return B;if(typeof n=="string"){var a=n.toLowerCase();C[a]&&(t=a),e&&(C[a]=e,t=a);var i=n.split("-");if(!t&&i.length>1)return r(i[0])}else{var l=n.name;C[l]=n,t=l}return!s&&t&&(B=t),t||!s&&B},m=function(r,n){if(te(r))return r.clone();var e=typeof n=="object"?n:{};return e.date=r,e.args=arguments,new Q(e)},u=Y;u.l=K,u.i=te,u.w=function(r,n){return m(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var Q=function(){function r(e){this.$L=K(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[H]=!0}var n=r.prototype;return n.parse=function(e){this.$d=function(s){var t=s.date,a=s.utc;if(t===null)return new Date(NaN);if(u.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var i=t.match(X);if(i){var l=i[2]-1||0,h=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],l,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)):new Date(i[1],l,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==P},n.isSame=function(e,s){var t=m(e);return this.startOf(s)<=t&&t<=this.endOf(s)},n.isAfter=function(e,s){return m(e)<this.startOf(s)},n.isBefore=function(e,s){return this.endOf(s)<m(e)},n.$g=function(e,s,t){return u.u(e)?this[s]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,s){var t=this,a=!!u.u(s)||s,i=u.p(e),l=function(j,g){var N=u.w(t.$u?Date.UTC(t.$y,g,j):new Date(t.$y,g,j),t);return a?N:N.endOf(b)},h=function(j,g){return u.w(t.toDate()[j].apply(t.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(g)),t)},p=this.$W,y=this.$M,x=this.$D,U="set"+(this.$u?"UTC":"");switch(i){case _:return a?l(1,0):l(31,11);case c:return a?l(1,y):l(0,y+1);case M:var V=this.$locale().weekStart||0,I=(p<V?p+7:p)-V;return l(a?x-I:x+(6-I),y);case b:case L:return h(U+"Hours",0);case D:return h(U+"Minutes",1);case T:return h(U+"Seconds",2);case f:return h(U+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,s){var t,a=u.p(e),i="set"+(this.$u?"UTC":""),l=(t={},t[b]=i+"Date",t[L]=i+"Date",t[c]=i+"Month",t[_]=i+"FullYear",t[D]=i+"Hours",t[T]=i+"Minutes",t[f]=i+"Seconds",t[A]=i+"Milliseconds",t)[a],h=a===b?this.$D+(s-this.$W):s;if(a===c||a===_){var p=this.clone().set(L,1);p.$d[l](h),p.init(),this.$d=p.set(L,Math.min(this.$D,p.daysInMonth())).$d}else l&&this.$d[l](h);return this.init(),this},n.set=function(e,s){return this.clone().$set(e,s)},n.get=function(e){return this[u.p(e)]()},n.add=function(e,s){var t,a=this;e=Number(e);var i=u.p(s),l=function(y){var x=m(a);return u.w(x.date(x.date()+Math.round(y*e)),a)};if(i===c)return this.set(c,this.$M+e);if(i===_)return this.set(_,this.$y+e);if(i===b)return l(1);if(i===M)return l(7);var h=(t={},t[T]=v,t[D]=$,t[f]=O,t)[i]||1,p=this.$d.getTime()+e*h;return u.w(p,this)},n.subtract=function(e,s){return this.add(-1*e,s)},n.format=function(e){var s=this,t=this.$locale();if(!this.isValid())return t.invalidDate||P;var a=e||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),l=this.$H,h=this.$m,p=this.$M,y=t.weekdays,x=t.months,U=t.meridiem,V=function(g,N,E,G){return g&&(g[N]||g(s,a))||E[N].slice(0,G)},I=function(g){return u.s(l%12||12,g,"0")},j=U||function(g,N,E){var G=g<12?"AM":"PM";return E?G.toLowerCase():G};return a.replace(Z,function(g,N){return N||function(E){switch(E){case"YY":return String(s.$y).slice(-2);case"YYYY":return u.s(s.$y,4,"0");case"M":return p+1;case"MM":return u.s(p+1,2,"0");case"MMM":return V(t.monthsShort,p,x,3);case"MMMM":return V(x,p);case"D":return s.$D;case"DD":return u.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return V(t.weekdaysMin,s.$W,y,2);case"ddd":return V(t.weekdaysShort,s.$W,y,3);case"dddd":return y[s.$W];case"H":return String(l);case"HH":return u.s(l,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return j(l,h,!0);case"A":return j(l,h,!1);case"m":return String(h);case"mm":return u.s(h,2,"0");case"s":return String(s.$s);case"ss":return u.s(s.$s,2,"0");case"SSS":return u.s(s.$ms,3,"0");case"Z":return i}return null}(g)||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,s,t){var a,i=this,l=u.p(s),h=m(e),p=(h.utcOffset()-this.utcOffset())*v,y=this-h,x=function(){return u.m(i,h)};switch(l){case _:a=x()/12;break;case c:a=x();break;case d:a=x()/3;break;case M:a=(y-p)/6048e5;break;case b:a=(y-p)/864e5;break;case D:a=y/$;break;case T:a=y/v;break;case f:a=y/O;break;default:a=y}return t?a:u.a(a)},n.daysInMonth=function(){return this.endOf(c).$D},n.$locale=function(){return C[this.$L]},n.locale=function(e,s){if(!e)return this.$L;var t=this.clone(),a=K(e,s,!0);return a&&(t.$L=a),t},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),se=Q.prototype;return m.prototype=se,[["$ms",A],["$s",f],["$m",T],["$H",D],["$W",b],["$M",c],["$y",_],["$D",L]].forEach(function(r){se[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),m.extend=function(r,n){return r.$i||(r(n,Q,m),r.$i=!0),m},m.locale=K,m.isDayjs=te,m.unix=function(r){return m(1e3*r)},m.en=C[B],m.Ls=C,m.p={},m})})(ie);var Ae=ie.exports;const Le=ce(Ae),Ye={class:"col-12"},Ne={class:"form-group"},Be=o("p",{class:"mg-b-10"},[z("年份 "),o("span",{class:"text-danger"},"*")],-1),He=o("template",null,null,-1),Ve={class:"invalid-feedback"},je={class:"col-12"},We=o("span",{class:"input-group-text"},"%",-1),Re={class:"col-12"},Ue=o("span",{class:"input-group-text"},"%",-1),qe={class:"col-12"},ze=o("span",{class:"input-group-text"},"%",-1),Ie={class:"col-12"},Ee={class:"col-12"},Je={class:"btn-list text-center mt-5"},Pe=o("button",{class:"btn btn-md btn-primary",type:"submit"}," 確定 ",-1),Ze={__name:"FormModal",props:{reload:{type:Function,required:!0}},setup(W,{expose:R}){const O=ue(),v=W,$=ne(null),A={year:"2024",healthFee:"",incomeTaxFive:"",incomeTaxNineA:"",basicSalary:"",incomeTax:""},f=ne(null),T=le(()=>De(S(f))),{handleSubmit:D,resetForm:b,values:M,errors:c,defineField:d}=xe({initialValues:A,validationSchema:Se().shape({})}),[_,L]=d("year"),P=async w=>{w&&(console.log(w),f.value=w,b({values:{...w}})),$.value.show()},X=()=>{f.value=void 0,b({values:A,touched:!1})},Z=D(async w=>{console.log(w),O.success("成功"),v.reload(),$.value.hide()}),ee=w=>Le(w).format("YYYY");return R({show:P}),(w,Y)=>{const B=de("Datepicker");return ae(),he(ke,{ref_key:"modalRef",ref:$,title:T.value?"新增年份":"編輯年份","hide-footer":!0,"modal-hide":X},{default:k(()=>{var C;return[o("form",{class:"row",onSubmit:Y[2]||(Y[2]=fe((...H)=>S(Z)&&S(Z)(...H),["prevent"]))},[o("div",Ye,[o("div",Ne,[Be,F(B,me({"year-picker":"",locale:"zh-TW",format:ee,class:{"is-invalid border border-danger":!!S(c).year},modelValue:S(_),"onUpdate:modelValue":Y[0]||(Y[0]=H=>pe(_)?_.value=H:null)},S(L),{placeholder:"請選擇"}),{default:k(()=>[He]),_:1},16,["class","modelValue"]),o("div",Ve,q((C=S(c))==null?void 0:C.year),1)])]),o("div",je,[F(J,{name:"healthFee",label:"健保補充費",type:"number",required:"",placeholder:"請輸入"},{iconRight:k(()=>[We]),_:1})]),o("div",Re,[F(J,{name:"incomeTaxFive",label:"代扣所得稅(50)",type:"number",required:"",placeholder:"請輸入"},{iconRight:k(()=>[Ue]),_:1})]),o("div",qe,[F(J,{name:"incomeTaxNineA",label:"代扣所得稅(9A)",type:"number",required:"",placeholder:"請輸入"},{iconRight:k(()=>[ze]),_:1})]),o("div",Ie,[F(J,{name:"basicSalary",label:"補充保費基本薪資",required:"",type:"number",placeholder:"請輸入"})]),o("div",Ee,[F(J,{name:"incomeTax",label:"所得稅款",required:"",type:"number",placeholder:"請輸入"})]),o("div",Je,[o("button",{class:"btn btn-md btn-outline-primary",type:"button",onClick:Y[1]||(Y[1]=H=>$.value.hide())}," 取消 "),Pe])],32)]}),_:1},8,["title"])}}},Ke={class:"row row-sm"},Qe={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin"},Ge={class:"card custom-card"},Xe={class:"card-header border-bottom-0 pb-0"},et={class:"row"},tt={class:"col-12"},nt={class:"d-flex flex-column flex-lg-row justify-content-between"},st={class:"input-group wd-lg-25p"},rt={class:"input-group-append"},at={class:"card-body"},it={class:"d-flex"},ot=["onClick"],ct=["onClick"],ut="參數設定",mt={__name:"index",setup(W){const{getConfigs:R,configList:O,pagination:v}=Fe(),$=$e({keyword:"",sort:"createDate",orderBy:"desc"});ye(()=>{f(1)});const A=[{key:"year",label:"年份",sort:!0},{key:"healthFee",label:"健保補充費"},{key:"incomeTaxFive",label:"代扣所得稅(50)"},{key:"incomeTaxNineA",label:"代扣所得稅(9A)"},{key:"basicSalary",label:"補充保費基本薪資"},{key:"incomeTax",label:"所得稅款"},{key:"action",label:"Action"}],f=async(M=1,c=10)=>{let d={page:M,limit:c,...$};await R(d)},T=(M="createTime",c="desc")=>{$.orderBy=M,$.sort=c,f(1,v.value.size)},D=ne(null),b=M=>{re.fire({title:"Are you sure?",text:`刪除年份「${M.year}」參數檔？`,type:"warning",showCancelButton:!0,confirmButtonText:"是的，確定刪除"}).then(async c=>{c.value&&(await f(outsourcerList.value.length==1?1:v.value.current),re.fire("This Deleted!",`刪除年份「${M.year}」參數檔！`,"success"))})};return(M,c)=>(ae(),ve(Me,null,[F(Ce,{title:ut}),o("div",Ke,[o("div",Qe,[o("div",Ge,[o("div",Xe,[o("div",et,[o("div",tt,[o("div",nt,[o("div",st,[_e(o("input",{type:"text",class:"form-control",placeholder:"搜尋","onUpdate:modelValue":c[0]||(c[0]=d=>$.keyword=d),onKeyup:c[1]||(c[1]=be(d=>f(1),["enter"]))},null,544),[[ge,$.keyword]]),o("span",rt,[o("button",{class:"btn btn-primary",type:"button",onClick:c[2]||(c[2]=d=>f(1))}," 搜尋 ")])]),o("button",{class:"btn btn-primary mt-2 mt-lg-0",onClick:c[3]||(c[3]=d=>D.value.show())},"新增年份")])])])]),o("div",at,[F(Te,{header:A,items:S(O),onChangePage:f,onOrderChange:T,pagination:S(v),orderBy:$.orderBy,sort:$.sort},{healthFee:k(({value:d})=>[z(q(d)+"% ",1)]),incomeTaxFive:k(({value:d})=>[z(q(d)+"% ",1)]),incomeTaxNineA:k(({value:d})=>[z(q(d)+"% ",1)]),basicSalary:k(({value:d})=>[z(q(d.toLocaleString()),1)]),incomeTax:k(({value:d})=>[z(q(d.toLocaleString()),1)]),action:k(({item:d})=>[o("div",it,[o("button",{class:"btn btn-sm btn-danger me-2",type:"button",onClick:_=>b(d)},"刪除",8,ot),o("button",{class:"btn btn-sm btn-info me-2",type:"button",onClick:_=>D.value.show(d)},"修改",8,ct)])]),_:1},8,["items","pagination","orderBy","sort"])])])]),F(Ze,{ref_key:"formModalRef",ref:D,reload:()=>f(S(v).current,S(v).size)},null,8,["reload"])])],64))}};export{mt as default};
