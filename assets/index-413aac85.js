import{M as E,m as q,x as f,b as p,k as I,w as u,d as v,e as t,t as e,h as V,C as H,c as L,g as i,D as j,f as a,J,B as U,F as K,a as Q,j as M}from"./index-898e6ee3.js";import{a as T,u as G,_ as w,c as W,D as X,b as Y,S as R}from"./sweetalert2.all-156f0bd9.js";import{M as B}from"./Modal-4afc0395.js";import{u as N,_ as S}from"./FormUploadFile-1956cea3.js";import{_ as O}from"./FormSelect-34374eed.js";import{i as Z}from"./isNil-c75b1b34.js";import"./plugin-vueexport-helper-c27b6911.js";import"./menu-8855fc71.js";import"./default.cssvuetypestyleindex0srctruelang-40922a68.js";const tt=[{date:"2024/01/31",name:"王小明",item:"",payDate:"",netDisbursement:"",postBack:!0,type:"corporation",email:"123@gmail.com",identity:"",phone:"09123456789",bankId:"001",bankAccount:"123456789"},{date:"2024/01/15",name:"李大華",item:"",payDate:"",netDisbursement:"",postBack:!0,type:"person",email:"1234@gmail.com",taxId:"",phone:"09123456789",bankId:"001",bankAccount:"123456789"}];function et(){const{setResponseList:k,list:b,pagination:c}=E();return{getPaymentlogList:async g=>{console.log(g),k({records:tt,total:1,size:10,current:1,pages:1})},pagination:c,paymentLogList:b}}const st={key:0,class:"table-responsive"},ot={class:"table mb-0 border-top table-bordered text-nowrap rounded"},lt=t("th",{class:"w-25"},"法人",-1),nt=t("th",{class:"w-25"},"姓名 ",-1),at=t("th",{class:"w-25"},"Email ",-1),rt=t("th",{class:"w-25"},"電話 ",-1),ct=t("th",{class:"w-25"},"帳戶資訊",-1),dt={key:0},it=t("th",{class:"w-25"},"身分證字號",-1),ut={key:1},_t=t("th",{class:"w-25"},"統編",-1),mt=t("tr",null,[t("th",{class:"w-25"}),t("td",null,[t("button",{type:"button",class:"btn btn-primary"},"回簽pdf勞報單")])],-1),ht=q({__name:"LogInfoModal",setup(k,{expose:b}){const c=f(null),l=f();return b({show:_=>{l.value=_,c.value.show()}}),(_,d)=>(p(),I(B,{ref_key:"modalRef",ref:c,title:"檢視明細","dialog-class":"modal-dialog-centered"},{default:u(()=>[l.value?(p(),v("div",st,[t("table",ot,[t("tbody",null,[t("tr",null,[lt,t("td",null,e(l.value.type==="person"?"是":"否"),1)]),t("tr",null,[nt,t("td",null,e(l.value.name),1)]),t("tr",null,[at,t("td",null,e(l.value.email),1)]),t("tr",null,[rt,t("td",null,e(l.value.phone),1)]),t("tr",null,[ct,t("td",null,e(l.value.bankId)+" - "+e(l.value.bankAccount),1)]),l.value.type==="person"?(p(),v("tr",dt,[it,t("td",null,e(l.value.identity),1)])):(p(),v("tr",ut,[_t,t("td",null,e(l.value.taxId),1)])),mt])])])):V("",!0)]),_:1},512))}}),pt={key:0,class:"table-responsive",style:{"overflow-y":"hidden"}},bt={key:0,class:"table mb-0 border-top table-bordered text-nowrap rounded"},yt=t("tr",null,[t("th",{colspan:"2",class:"bg-dark text-center"},"領款人")],-1),ft=t("th",{class:"w-25"},"專案名稱",-1),vt=t("tr",null,[t("th",{class:"w-25"},"是否為法人"),t("td",null," 否 ")],-1),gt=t("th",{class:"w-25"},"領款人姓名",-1),wt=t("th",{class:"w-25"},"身分證字號",-1),kt=t("th",{class:"w-25"},"聯絡電話",-1),$t=t("th",{class:"w-25"},"戶籍地址",-1),xt=t("th",{class:"w-25"},"通訊地址",-1),Ct=t("th",{class:"w-25"},"是否加上核果報帳使用",-1),At=t("th",{class:"w-25"},"銀行匯款帳號",-1),Bt=t("tr",null,[t("th",{colspan:"2",class:"bg-dark text-center"},"領款金額")],-1),Dt=t("th",{class:"w-25"},"支付金額",-1),Ft=t("span",{class:"input-group-text"},"新臺幣",-1),Lt=t("span",{class:"input-group-text"},"元",-1),Mt=t("th",{class:"w-25"},"所得類別",-1),Rt=t("tr",null,[t("th",{class:"w-25"},"-代扣所得稅 5 %"),t("td",null," 新臺幣 0 元 ")],-1),St=t("tr",null,[t("th",{class:"w-25"},"-健保補充費 2.11 %"),t("td",null," 新臺幣 16,000 元 ")],-1),It=t("tr",null,[t("th",{class:"w-25"},"=支領淨額"),t("td",null," 新臺幣 0 元 ")],-1),Vt=t("tr",null,[t("th",{class:"w-25"},"支付方式"),t("td",null,"匯款")],-1),jt=t("th",{class:"w-25"},"收款日期",-1),Tt=t("th",{class:""},"上傳已簽名之勞報單",-1),Gt={class:""},Nt={key:1,class:"table mb-0 border-top table-bordered text-nowrap rounded"},Ot=t("tr",null,[t("th",{colspan:"2",class:"bg-dark text-center"},"領款人")],-1),Pt=t("th",{class:"w-25"},"專案名稱",-1),zt=t("tr",null,[t("th",{class:"w-25"},"是否為法人"),t("td",null," 是 ")],-1),Et=t("th",{class:"w-25"},"公司名稱",-1),qt=t("th",{class:"w-25"},"統編",-1),Ht=t("th",{class:"w-25"},"聯絡電話",-1),Jt=t("th",{class:"w-25"},"公司地址",-1),Ut=t("th",{class:"w-25"},"銀行匯款帳號",-1),Kt=t("tr",null,[t("th",{colspan:"2",class:"bg-dark text-center"},"領款金額")],-1),Qt=t("th",{class:"w-25"},"支付金額",-1),Wt=t("span",{class:"input-group-text"},"新臺幣",-1),Xt=t("span",{class:"input-group-text"},"元",-1),Yt=t("th",{class:"w-25"},"收款日期",-1),Zt=t("th",{class:""},"上傳發票",-1),te={class:""},ee={class:"btn-list text-center mt-5"},se=t("button",{class:"btn btn-md btn-primary",type:"submit"},"確定",-1),oe={__name:"CreateFormModal",props:{reload:{type:Function,required:!0}},setup(k,{expose:b}){const{getOutsorucerById:c}=N(),l=H(),g=k,_=f(null),d={project:"",amount:"",incomeCategory:void 0,date:"",singFile:""},s=f(null);L(()=>Z(i(s)));const C=L(()=>{const h={};return T().shape({...h})}),{handleSubmit:A,resetForm:m,values:D,defineField:F}=G({initialValues:d,validationSchema:C}),$=async h=>{s.value=c(h),m(),_.value.show()},x=()=>{s.value=void 0,m({values:d,touched:!1})},y=A(async h=>{console.log(h),l.success("成功"),g.reload(),_.value.hide()});return b({show:$}),(h,n)=>(p(),I(B,{ref_key:"modalRef",ref:_,title:"建立付款","hide-footer":!0,dialogClass:"modal-lg modal-dialog-scrollable","data-bs-backdrop":"static","modal-hide":x},{default:u(()=>[t("form",{class:"row h-full",onSubmit:n[1]||(n[1]=j((...o)=>i(y)&&i(y)(...o),["prevent"]))},[s.value?(p(),v("div",pt,[s.value.type==="person"?(p(),v("table",bt,[t("tbody",null,[yt,t("tr",null,[ft,t("td",null,[a(w,{name:"project",formGroupAttr:{class:"mb-0"},placeholder:"專案名稱"})])]),vt,t("tr",null,[gt,t("td",null,e(s.value.name),1)]),t("tr",null,[wt,t("td",null,e(s.value.identity),1)]),t("tr",null,[kt,t("td",null,e(s.value.phone),1)]),t("tr",null,[$t,t("td",null,e(s.value.residenceAddress),1)]),t("tr",null,[xt,t("td",null,e(s.value.address),1)]),t("tr",null,[Ct,t("td",null,e(s.value.useForNucleusAccounting?"是":"否"),1)]),t("tr",null,[At,t("td",null,e(s.value.bankId)+" - "+e(s.value.bankAccount),1)]),Bt,t("tr",null,[Dt,t("td",null,[a(w,{name:"project",formGroupAttr:{class:"mb-0"},type:"number"},{iconLeft:u(()=>[Ft]),iconRight:u(()=>[Lt]),_:1})])]),t("tr",null,[Mt,t("td",null,[a(O,{name:"incomeCategory",placeholder:"請選擇所得類別",formGroupAttr:{class:"mb-0"},options:[{label:"薪資所得",value:"薪資所得"},{label:"執行業務所得5A",value:"執行業務所得5A"},{label:"執行業務所得5B",value:"執行業務所得5B"}]})])]),Rt,St,It,Vt,t("tr",null,[jt,t("td",null,[a(w,{name:"date",formGroupAttr:{class:"mb-0"},type:"date"})])]),t("tr",null,[Tt,t("td",null,[t("div",Gt,[a(S,{name:"singFile",label:"",btnText:"上傳已簽名之勞報單",accept:".pdf"})])])])])])):(p(),v("table",Nt,[t("tbody",null,[Ot,t("tr",null,[Pt,t("td",null,[a(w,{name:"project",formGroupAttr:{class:"mb-0"},placeholder:"專案名稱"})])]),zt,t("tr",null,[Et,t("td",null,e(s.value.name),1)]),t("tr",null,[qt,t("td",null,e(s.value.taxTd),1)]),t("tr",null,[Ht,t("td",null,e(s.value.phone),1)]),t("tr",null,[Jt,t("td",null,e(s.value.companyAddress),1)]),t("tr",null,[Ut,t("td",null,e(s.value.bankId)+" - "+e(s.value.bankAccount),1)]),Kt,t("tr",null,[Qt,t("td",null,[a(w,{name:"amount",formGroupAttr:{class:"mb-0"},type:"number"},{iconLeft:u(()=>[Wt]),iconRight:u(()=>[Xt]),_:1})])]),t("tr",null,[Yt,t("td",null,[a(w,{name:"date",formGroupAttr:{class:"mb-0"},type:"date"})])]),t("tr",null,[Zt,t("td",null,[t("div",te,[a(S,{name:"singFile",label:"",btnText:"上傳發票",accept:".jpg,.png,.jpeg"})])])])])])),t("div",ee,[t("button",{class:"btn btn-md btn-outline-primary",type:"button",onClick:n[0]||(n[0]=o=>_.value.hide())},"取消"),se])])):V("",!0)],32)]),_:1},512))}},le={class:"row row-sm"},ne={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin"},ae={class:"card custom-card"},re={class:"card-header border-bottom-0 pb-0"},ce={class:"d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap"},de={class:"input-group mb-2 mb-lg-0",style:{"max-width":"80%"}},ie=t("button",{class:"btn btn-info",type:"button"},"下載 CSV ",-1),ue={class:"card-body"},_e={class:"d-flex"},me=["onClick"],he=["onClick"],pe={class:"col-12"},be={class:"btn-list text-center"},ye=t("button",{class:"btn btn-md btn-primary",type:"submit"},"確定",-1),fe="付款管理",De={__name:"index",setup(k){const{getPaymentlogList:b,pagination:c,paymentLogList:l}=et(),{getOutsorucerOption:g,outsorucerOption:_}=N(),d=J({keyword:"",sort:"desc",orderBy:"createDate",date:[void 0,void 0]}),{handleSubmit:s,resetForm:C}=G({initialValues:{user:void 0},validationSchema:T().shape({user:W().nullable(!1).typeError("請選擇領款人").required("請選擇領款人")})}),A=[{key:"date",label:"日期",sort:!0},{key:"type",label:"法人",sort:!0},{key:"name",label:"姓名",sort:!0},{key:"item",label:"品項名稱"},{key:"payDate",label:"支付日期"},{key:"netDisbursement",label:"支付淨額"},{key:"postBack",label:"是否回傳"},{key:"action",label:"Action"}],m=async(n=1,o=10)=>{await b({page:n,limit:o,...d})},D=(n="createTime",o="desc")=>{d.orderBy=n,d.sort=o,m(1,c.value.size)},F=n=>{R.fire({title:"Are you sure?",text:`刪除此紀錄「${n.date}/${n.name}」？`,icon:"warning",showCancelButton:!0,confirmButtonText:"是的，確定刪除"}).then(async o=>{o.isConfirmed&&(await m(l.value.length===1?1:c.value.current),R.fire("已刪除!",`刪除紀錄「${n.date}/${n.name}」！`,"success"))})};U(()=>{m(1),g()});const $=f(null),x=f(null),y=f(null),h=s(n=>{console.log(n),x.value.show(n.user),y.value.hide()});return(n,o)=>{const P=Q("Datepicker");return p(),v(K,null,[a(Y,{title:fe}),t("div",le,[t("div",ne,[t("div",ae,[t("div",re,[t("div",ce,[t("div",de,[a(P,{modelValue:d.date,"onUpdate:modelValue":o[0]||(o[0]=r=>d.date=r),range:"","enable-time-picker":!1,format:"yyyy/MM/dd",style:{width:"100%","max-width":"300px"},placeholder:"日期範圍"},null,8,["modelValue"]),t("button",{class:"btn btn-primary",type:"button",onClick:o[1]||(o[1]=r=>m(1))}," 搜尋 ")]),t("div",null,[t("button",{class:"btn btn-primary me-2",type:"button",onClick:o[2]||(o[2]=r=>y.value.show())},"建立付款 "),ie])])]),t("div",ue,[a(X,{header:A,items:i(l),onChangePage:m,onOrderChange:D,pagination:i(c),orderBy:d.orderBy,sort:d.sort},{type:u(({value:r})=>[M(e(r==="corporation"?"是":"否"),1)]),postBack:u(({value:r})=>[M(e(r?"是":"否"),1)]),action:u(({item:r})=>[t("div",_e,[t("button",{class:"btn btn-sm btn-danger me-2",onClick:z=>F(r)},"刪除",8,me),t("button",{class:"btn btn-sm btn-info me-2",onClick:z=>$.value.show(r)},"檢視",8,he)])]),_:1},8,["items","pagination","orderBy","sort"])])])])]),a(ht,{ref_key:"logInfoModalRef",ref:$},null,512),a(oe,{ref_key:"createFormModalRef",ref:x,reload:()=>m(i(c).current,i(c).size)},null,8,["reload"]),a(B,{ref_key:"modalRef",ref:y,title:"建立付款領款人","modal-hide":()=>i(C)(),"hide-footer":!0,dialogClass:" modal-dialog-centered","data-bs-backdrop":"static"},{default:u(()=>[t("form",{class:"row",onSubmit:o[4]||(o[4]=j((...r)=>i(h)&&i(h)(...r),["prevent"]))},[t("div",pe,[a(O,{name:"user",label:"領款人",placeholder:"選擇領款人",options:i(_),searchable:!0},null,8,["options"])]),t("div",be,[t("button",{class:"btn btn-md btn-outline-primary",type:"button",onClick:o[3]||(o[3]=r=>y.value.hide())},"取消"),ye])],32)]),_:1},8,["modal-hide"])],64)}}};export{De as default};
