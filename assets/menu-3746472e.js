import{a5 as o,a6 as h,a7 as c,a8 as d,y as b}from"./index-c5178373.js";var I="[object Symbol]";function g(a){return typeof a=="symbol"||o(a)&&h(a)==I}const L={itemList:[{name:"Dashboard",title:"外包商管理",id:"Dashboard"},{name:"Config",title:"參數設定",id:"Config"}]},p=a=>{console.log(a);let s=L.itemList,t=[];for(let i of s){let e={icon:i.icon??"fa fa-circle",active:!1,id:i.id,defaultActive:!1};if(i.name&&i.title)e.name=i.name,e.title=i.title,e.type="link",e.active=!0,t.push(e);else if(i.children&&i.children.length>0){e.title=i.title,e.type="sub",e.active=!1;let n=[];for(let r of i.children){let m={active:!1,defaultActive:!1};r.name&&r.title&&(m.name=r.name,m.title=r.title,m.type="link",m.active=!0,e.id=i.id,n.push(m))}n.length>0&&(e.children=n,t.push(e))}}return t},k=c("menu",{state:()=>({menuItemList:[],isInit:!1,mainPage:"Dashboard"}),getters:{activeMenuStackList(){var i,e,n,r,m,f;let a="Dashboard",s=this.menuItemList.find(l=>l.name==a),t=[];for(let l of this.menuItemList){if(t.length>0)break;if(l.active&&t.push({title:l.title,name:l.name}),l.children){for(let u of l.children)if(u.active){t.push({title:u.title,name:u.name});break}}}if(t.length>0&&t[0].name!=a)t.unshift(s);else if(t.length==0){const l=d.currentRoute.value;(i=l.meta)!=null&&i.parent?(t=this.getMenuStackList((e=l.meta)==null?void 0:e.parent),t.push({title:(n=l.meta)==null?void 0:n.title,name:l.name}),this.manualActiveMenu((r=l.meta)==null?void 0:r.parent)):(m=l.meta)!=null&&m.title&&(t.push(s),t.push({title:(f=l.meta)==null?void 0:f.title,name:l.name}))}return t},getMenuStackList(){return a=>{let s="Dashboard",t=this.menuItemList.find(e=>e.name==s),i=[];for(let e of this.menuItemList){if(i.length>0)break;if(e.name==a){i.push({title:e.title,name:e.name});break}else if(e.children){for(let n of e.children)if(n.name==a){i.push({title:e.title,name:e.name}),i.push({title:n.title,name:n.name});break}}}return i.length>0&&i[0].name!=s&&i.unshift(t),i}}},actions:{initMenuItemList(){var s,t;const a=b();this.isInit=!0,this.menuItemList=p(a.getUser.role),this.mainPage=((s=this.menuItemList[0])==null?void 0:s.name)??((t=this.menuItemList[0])==null?void 0:t.children[0].name)??"Dashboard",this.manualActiveMenu(this.mainPage)},inactiveAllMenuItem(){for(let a of this.menuItemList)if(a.active=!1,a.defaultActive=!1,a.children)for(let s of a.children)s.active=!1,s.defaultActive=!1},manualActiveMenu(a){let s=!1,t=null,i=null;for(let e of this.menuItemList){if(e.name==a){s=!0,t=e;break}if(e.children){for(let n of e.children)if(n.name==a){s=!0,t=e,i=n;break}}if(s)break}if(t){for(let e of this.menuItemList)if(e.active=e==t,e.defaultActive=e==t,e.children)for(let n of e.children)n.active=n==i,n.defaultActive=n==i}}}});export{g as i,k as u};
