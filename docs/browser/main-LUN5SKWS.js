import{a as J,b as U,c as H,l as G,m as Q,n as $,o as ee,p as te,q as ne,r as ie,s as oe,t as re,v as se}from"./chunk-6CQXNMI2.js";import"./chunk-2QBX5PKA.js";import{F as K,G as X,H as Y,a as k,b as L,c as B,da as ae,e as W,ea as le,u as j,v as V,w as Z,x as q}from"./chunk-ZDHGXF5N.js";import{$ as f,Ba as S,Eb as T,Ec as R,Ia as b,Nb as s,Qb as N,Rb as E,Sb as P,Ub as D,Ya as m,_a as A,aa as y,ab as x,cb as _,eb as O,fc as F,ga as C,ia as M,ma as z,na as v,ob as u,sc as w,wb as a,xb as l,xc as I,yb as h}from"./chunk-ZUAC6MGO.js";var de=[{path:"",pathMatch:"full",redirectTo:"/home"},{path:"home",loadChildren:()=>import("./chunk-Q7IXPG3Y.js").then(o=>o.WELCOME_ROUTES)},{path:"trucks",loadChildren:()=>import("./chunk-73AWGM3X.js").then(o=>o.TRUCKS_ROUTES)}];var pe=[Z,q,j,V];function ge(o){let e=o,t=Math.floor(Math.abs(o)),n=o.toString().replace(/^[^.]*\.?/,"").length;return t===1&&n===0?1:5}var me=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",ge];var ye="@",Ce=(()=>{let e=class e{constructor(n,i,r,d,p){this.doc=n,this.delegate=i,this.zone=r,this.animationType=d,this.moduleImpl=p,this._rendererFactoryPromise=null,this.scheduler=C(x,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-S2P3L6WZ.js").then(i=>i)).catch(i=>{throw new f(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc);let d=new r(this.delegate,this._engine,this.zone);return this.delegate=d,d})}createRenderer(n,i){let r=this.delegate.createRenderer(n,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let d=new g(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let ce=p.createRenderer(n,i);d.use(ce),this.scheduler?.notify(9)}).catch(p=>{d.use(r)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){A()},e.\u0275prov=y({token:e,factory:e.\u0275fac});let o=e;return o})(),g=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,i){this.delegate.insertBefore(e,t,n,i)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,i){this.delegate.setAttribute(e,t,n,i)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,i){this.delegate.setStyle(e,t,n,i)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(ye)}};function ue(o="animations"){return O("NgAsyncAnimations"),z([{provide:_,useFactory:(e,t,n)=>new Ce(e,t,n,o),deps:[w,L,S]},{provide:b,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}I(me);var he={providers:[F({eventCoalescing:!0}),H(de),W(),X(pe),le(ae),v(se),ue(),k()]};var c=class o{isCollapsed=!1;static \u0275fac=function(t){return new(t||o)};static \u0275cmp=M({type:o,selectors:[["app-root"]],standalone:!0,features:[D],decls:46,vars:4,consts:[[1,"app-layout"],["nzCollapsible","","nzWidth","256px","nzBreakpoint","md",1,"menu-sidebar",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],[1,"sidebar-logo"],["routerLink","/home"],["src","../../public/favicon.ico","alt","logo"],["nz-menu","","nzTheme","dark","nzMode","inline",3,"nzInlineCollapsed"],["nz-submenu","","nzOpen","","nzTitle","Main","nzIcon","home"],["nz-menu-item","","nzMatchRouter",""],["nz-submenu","","nzOpen","","nzTitle","Dispatching","nzIcon","usergroup-add"],["nz-submenu","","nzOpen","","nzTitle","Company","nzIcon","apartment"],["routerLink","/trucks"],[1,"app-header"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],[1,"inner-content"]],template:function(t,n){t&1&&(a(0,"nz-layout",0)(1,"nz-sider",1),P("nzCollapsedChange",function(r){return E(n.isCollapsed,r)||(n.isCollapsed=r),r}),a(2,"div",2)(3,"a",3),h(4,"img",4),a(5,"h1"),s(6,"TST Board"),l()()(),a(7,"ul",5)(8,"li",6)(9,"ul")(10,"li",7)(11,"a",3),s(12,"Home"),l()()()(),a(13,"li",8)(14,"ul")(15,"li",7)(16,"a"),s(17,"Clients"),l()(),a(18,"li",7)(19,"a"),s(20,"Brokers"),l()(),a(21,"li",7)(22,"a"),s(23,"Loads"),l()()()(),a(24,"li",9)(25,"ul")(26,"li",7)(27,"a",10),s(28,"Trucks"),l()(),a(29,"li",7)(30,"a"),s(31,"Equipment"),l()(),a(32,"li",7)(33,"a"),s(34,"Drivers"),l()(),a(35,"li",7)(36,"a"),s(37,"Dispatchers"),l()()()()()(),a(38,"nz-layout")(39,"nz-header")(40,"div",11)(41,"span",12),T("click",function(){return n.isCollapsed=!n.isCollapsed}),h(42,"span",13),l()()(),a(43,"nz-content")(44,"div",14),h(45,"router-outlet"),l()()()()),t&2&&(m(),N("nzCollapsed",n.isCollapsed),u("nzTrigger",null),m(6),u("nzInlineCollapsed",n.isCollapsed),m(35),u("nzType",n.isCollapsed?"menu-unfold":"menu-fold"))},dependencies:[R,U,J,Y,K,re,oe,ne,te,ie,ee,$,G,Q],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{height:100vh}.menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px #00000059}.header-trigger[_ngcontent-%COMP%]{height:64px;padding:20px 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.trigger[_ngcontent-%COMP%]:hover{color:#1890ff}.sidebar-logo[_ngcontent-%COMP%]{position:relative;height:64px;padding-left:24px;overflow:hidden;line-height:64px;transition:all .3s}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;height:32px;width:32px;vertical-align:middle}.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block;margin:0 0 0 20px;color:#fff;font-weight:600;font-size:14px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;vertical-align:middle}nz-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}.app-header[_ngcontent-%COMP%]{position:relative;height:64px;padding:0;box-shadow:0 1px 4px #00152914}.inner-content[_ngcontent-%COMP%]{padding:24px;height:100%}"]})};B(c,he).catch(o=>console.error(o));
