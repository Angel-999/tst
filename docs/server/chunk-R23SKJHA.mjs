import './polyfills.server.mjs';
import{c as Xt,d as Wt,e as Zt,f as st,g as lt,h as ct,i as Yt,j as Jt}from"./chunk-5V22XGA2.mjs";import{A as Gt,C as Qt,L as at,M as rt,O as Bt,P as Ht,R as Ut,S as qt,X as W,Y as Z,aa as Kt,r as q,s as X,u as Vt}from"./chunk-ILFLJVW5.mjs";import"./chunk-L7VUT5VZ.mjs";import{$ as Et,Aa as tt,Ab as bt,Bb as jt,Db as kt,E as Nt,Eb as s,Fb as v,Gb as g,Hb as b,Ib as nt,Jb as T,Jc as Rt,K as It,Kb as N,Lb as I,Lc as P,Mb as y,Mc as Pt,Nb as L,Ob as it,S as G,Sb as $t,T as Dt,Tb as h,U as D,Ua as Q,Wb as zt,Xa as r,Ya as C,Z as w,Zb as j,_a as K,f as M,fa as z,g as Y,ga as O,gb as wt,h as _t,ha as ut,ib as R,k as V,lb as c,lc as F,m as vt,mb as Ot,nb as l,oa as Lt,ob as et,pa as E,pb as A,qa as Ft,qb as d,ra as Mt,rc as k,s as yt,sa as ft,sb as B,sc as ot,tb as H,u as xt,ub as U,va as J,vb as p,wb as m,x as St,xa as At,xb as u,yb as x,z as Tt,zb as S}from"./chunk-QA52JJBE.mjs";import"./chunk-5XUXGTUW.mjs";var ge=["textEl"];function Ce(t,e){if(t&1&&u(0,"span",1),t&2){let a=s();l("nzType",a.nzIcon)}}function _e(t,e){if(t&1){let a=jt();p(0,"img",4),kt("error",function(n){Ft(a);let o=s();return Mt(o.imgError(n))}),m()}if(t&2){let a=s();l("src",a.nzSrc,Q),Ot("srcset",a.nzSrcSet)("alt",a.nzAlt)}}function ve(t,e){if(t&1&&(p(0,"span",3,0),y(2),m()),t&2){let a=s();r(2),L(a.nzText)}}var ye="avatar",ht=(()=>{let e=class e{constructor(i,n,o){this.nzConfigService=i,this.elementRef=n,this.cdr=o,this._nzModuleName=ye,this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new At,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(i){this.nzError.emit(i),i.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.calcStringSize())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.calcStringSize()}ngAfterViewInit(){this.calcStringSize()}calcStringSize(){if(!this.hasText||!this.textEl)return;let i=this.textEl.nativeElement,n=i.offsetWidth,o=this.el.getBoundingClientRect?.().width??0,f=this.nzGap*2<o?this.nzGap*2:8,_=o-f<n?(o-f)/n:1;i.style.transform=`scale(${_}) translateX(-50%)`,i.style.lineHeight=this.customSize||""}setSizeStyle(){typeof this.nzSize=="number"?this.customSize=`${this.nzSize}px`:this.customSize=null,this.cdr.markForCheck()}};e.\u0275fac=function(n){return new(n||e)(C(q),C(tt),C(F))},e.\u0275cmp=z({type:e,selectors:[["nz-avatar"]],viewQuery:function(n,o){if(n&1&&nt(ge,5),n&2){let f;T(f=N())&&(o.textEl=f.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(n,o){n&2&&(et("width",o.customSize)("height",o.customSize)("line-height",o.customSize)("font-size",o.hasIcon&&o.customSize?o.nzSize/2:null,"px"),A("ant-avatar-lg",o.nzSize==="large")("ant-avatar-sm",o.nzSize==="small")("ant-avatar-square",o.nzShape==="square")("ant-avatar-circle",o.nzShape==="circle")("ant-avatar-icon",o.nzIcon)("ant-avatar-image",o.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:[2,"nzGap","nzGap",ot],nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],standalone:!0,features:[R,E,h],decls:3,vars:3,consts:[["textEl",""],["nz-icon","",3,"nzType"],[3,"src"],[1,"ant-avatar-string"],[3,"error","src"]],template:function(n,o){n&1&&c(0,Ce,1,1,"span",1)(1,_e,1,3,"img",2)(2,ve,3,1,"span",3),n&2&&(d(o.nzIcon&&o.hasIcon?0:-1),r(),d(o.nzSrc&&o.hasSrc?1:-1),r(),d(o.nzText&&o.hasText?2:-1))},dependencies:[Qt,Gt,Vt],encapsulation:2,changeDetection:0});let t=e;return V([X()],t.prototype,"nzShape",void 0),V([X()],t.prototype,"nzSize",void 0),V([X()],t.prototype,"nzGap",void 0),t})();var ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=O({type:e}),e.\u0275inj=w({imports:[ht]});let t=e;return t})();var Te=["*"];function Ne(t,e){t&1&&(p(0,"span",3),u(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),m())}function Ie(t,e){}function De(t,e){if(t&1&&(p(0,"div",8),y(1),m()),t&2){let a=s(2);r(),L(a.nzTip)}}function Ee(t,e){if(t&1&&(p(0,"div")(1,"div",5),c(2,Ie,0,0,"ng-template",6)(3,De,2,1,"div",7),m()()),t&2){let a=s(),i=I(1);r(),A("ant-spin-rtl",a.dir==="rtl")("ant-spin-spinning",a.isLoading)("ant-spin-lg",a.nzSize==="large")("ant-spin-sm",a.nzSize==="small")("ant-spin-show-text",a.nzTip),r(),l("ngTemplateOutlet",a.nzIndicator||i),r(),l("ngIf",a.nzTip)}}function Le(t,e){if(t&1&&(p(0,"div",9),g(1),m()),t&2){let a=s();A("ant-spin-blur",a.isLoading)}}var ne="spin",ie=(()=>{let e=class e{constructor(i,n,o){this.nzConfigService=i,this.cdr=n,this.directionality=o,this._nzModuleName=ne,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new M,this.spinning$=new Y(this.nzSpinning),this.delay$=new _t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){this.delay$.pipe(G(this.nzDelay),It(),Dt(n=>n===0?this.spinning$:this.spinning$.pipe(Nt(o=>St(o?n:0)))),D(this.destroy$)).subscribe(n=>{this.isLoading=n,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(ne).pipe(D(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change?.pipe(D(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(i){let{nzSpinning:n,nzDelay:o}=i;n&&this.spinning$.next(this.nzSpinning),o&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(n){return new(n||e)(C(q),C(F),C(rt))},e.\u0275cmp=z({type:e,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(n,o){n&2&&A("ant-spin-nested-loading",!o.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:[2,"nzDelay","nzDelay",ot],nzSimple:[2,"nzSimple","nzSimple",k],nzSpinning:[2,"nzSpinning","nzSpinning",k]},exportAs:["nzSpin"],standalone:!0,features:[R,E,h],ngContentSelectors:Te,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(n,o){n&1&&(v(),c(0,Ne,5,0,"ng-template",null,0,j)(2,Ee,4,12,"div",1)(3,Le,2,2,"div",2)),n&2&&(r(2),l("ngIf",o.isLoading),r(),l("ngIf",!o.nzSimple))},dependencies:[Rt,P],encapsulation:2});let t=e;return V([X()],t.prototype,"nzIndicator",void 0),t})(),oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=O({type:e}),e.\u0275inj=w({});let t=e;return t})();function Ae(t,e){if(t&1&&(x(0),u(1,"img",4),S()),t&2){let a=s(2);r(),l("src",a.nzNotFoundImage,Q)("alt",a.isContentString?a.nzNotFoundContent:"empty")}}function we(t,e){if(t&1&&c(0,Ae,2,2,"ng-container",3),t&2){let a=s();l("nzStringTemplateOutlet",a.nzNotFoundImage)}}function Oe(t,e){t&1&&u(0,"nz-empty-simple")}function be(t,e){t&1&&u(0,"nz-empty-default")}function je(t,e){if(t&1&&c(0,Oe,1,0,"nz-empty-simple")(1,be,1,0,"nz-empty-default"),t&2){let a=s();d(a.nzNotFoundImage==="simple"?0:1)}}function ke(t,e){if(t&1&&(x(0),y(1),S()),t&2){let a=s(2);r(),it(" ",a.isContentString?a.nzNotFoundContent:a.locale.description," ")}}function $e(t,e){if(t&1&&(p(0,"p",1),c(1,ke,2,1,"ng-container",3),m()),t&2){let a=s();r(),l("nzStringTemplateOutlet",a.nzNotFoundContent)}}function Re(t,e){if(t&1&&(x(0),y(1),S()),t&2){let a=s(2);r(),it(" ",a.nzNotFoundFooter," ")}}function Pe(t,e){if(t&1&&(p(0,"div",2),c(1,Re,2,1,"ng-container",3),m()),t&2){let a=s();r(),l("nzStringTemplateOutlet",a.nzNotFoundFooter)}}function Ve(t,e){if(t&1&&y(0),t&2){let a=s(2);it(" ",a.content," ")}}function Ge(t,e){}function Qe(t,e){if(t&1&&c(0,Ge,0,0,"ng-template",0),t&2){let a=s(2);l("cdkPortalOutlet",a.contentPortal)}}function Be(t,e){if(t&1&&c(0,Ve,1,1)(1,Qe,1,1,null,0),t&2){let a=s();d(a.contentType==="string"?0:1)}}function He(t,e){t&1&&u(0,"nz-empty",1)}function Ue(t,e){t&1&&u(0,"nz-empty",2)}function qe(t,e){t&1&&u(0,"nz-empty")}function Xe(t,e){if(t&1&&c(0,He,1,0,"nz-empty",1)(1,Ue,1,0,"nz-empty",2)(2,qe,1,0,"nz-empty"),t&2){let a,i=s(2);d((a=i.size)==="normal"?0:a==="small"?1:2)}}function We(t,e){if(t&1&&c(0,Xe,3,1),t&2){let a=s();d(a.specificContent!==null?0:-1)}}var Ze=new Et("nz-empty-component-name"),Ke=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-empty-default"]],exportAs:["nzEmptyDefault"],standalone:!0,features:[h],decls:12,vars:0,consts:[["width","184","height","152","viewBox","0 0 184 152","xmlns","http://www.w3.org/2000/svg",1,"ant-empty-img-default"],["fill","none","fill-rule","evenodd"],["transform","translate(24 31.67)"],["cx","67.797","cy","106.89","rx","67.797","ry","12.668",1,"ant-empty-img-default-ellipse"],["d","M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",1,"ant-empty-img-default-path-1"],["d","M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z","transform","translate(13.56)",1,"ant-empty-img-default-path-2"],["d","M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",1,"ant-empty-img-default-path-3"],["d","M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",1,"ant-empty-img-default-path-4"],["d","M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",1,"ant-empty-img-default-path-5"],["transform","translate(149.65 15.383)",1,"ant-empty-img-default-g"],["cx","20.654","cy","3.167","rx","2.849","ry","2.815"],["d","M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],template:function(n,o){n&1&&(ft(),p(0,"svg",0)(1,"g",1)(2,"g",2),u(3,"ellipse",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7),m(),u(8,"path",8),p(9,"g",9),u(10,"ellipse",10)(11,"path",11),m()()())},encapsulation:2,changeDetection:0});let t=e;return t})(),Ye=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-empty-simple"]],exportAs:["nzEmptySimple"],standalone:!0,features:[h],decls:6,vars:0,consts:[["width","64","height","41","viewBox","0 0 64 41","xmlns","http://www.w3.org/2000/svg",1,"ant-empty-img-simple"],["transform","translate(0 1)","fill","none","fill-rule","evenodd"],["cx","32","cy","33","rx","32","ry","7",1,"ant-empty-img-simple-ellipse"],["fill-rule","nonzero",1,"ant-empty-img-simple-g"],["d","M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"],["d","M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",1,"ant-empty-img-simple-path"]],template:function(n,o){n&1&&(ft(),p(0,"svg",0)(1,"g",1),u(2,"ellipse",2),p(3,"g",3),u(4,"path",4)(5,"path",5),m()()())},encapsulation:2,changeDetection:0});let t=e;return t})(),Je=["default","simple"],ae=(()=>{let e=class e{constructor(i,n){this.i18n=i,this.cdr=n,this.nzNotFoundImage="default",this.isContentString=!1,this.isImageBuildIn=!0,this.destroy$=new M}ngOnChanges(i){let{nzNotFoundContent:n,nzNotFoundImage:o}=i;if(n){let f=n.currentValue;this.isContentString=typeof f=="string"}if(o){let f=o.currentValue||"default";this.isImageBuildIn=Je.findIndex(_=>_===f)>-1}}ngOnInit(){this.i18n.localeChange.pipe(D(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getLocaleData("Empty"),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}};e.\u0275fac=function(n){return new(n||e)(C(Kt),C(F))},e.\u0275cmp=z({type:e,selectors:[["nz-empty"]],hostAttrs:[1,"ant-empty"],inputs:{nzNotFoundImage:"nzNotFoundImage",nzNotFoundContent:"nzNotFoundContent",nzNotFoundFooter:"nzNotFoundFooter"},exportAs:["nzEmpty"],standalone:!0,features:[E,h],decls:5,vars:3,consts:[[1,"ant-empty-image"],[1,"ant-empty-description"],[1,"ant-empty-footer"],[4,"nzStringTemplateOutlet"],[3,"src","alt"]],template:function(n,o){n&1&&(p(0,"div",0),c(1,we,1,1,"ng-container")(2,je,2,1),m(),c(3,$e,2,1,"p",1)(4,Pe,2,1,"div",2)),n&2&&(r(),d(o.isImageBuildIn?2:1),r(2),d(o.nzNotFoundContent!==null?3:-1),r(),d(o.nzNotFoundFooter?4:-1))},dependencies:[Z,W,Ke,Ye],encapsulation:2,changeDetection:0});let t=e;return t})();function tn(t){switch(t){case"table":case"list":return"normal";case"select":case"tree-select":case"cascader":case"transfer":return"small";default:return""}}var gt=(()=>{let e=class e{constructor(i,n,o,f){this.configService=i,this.viewContainerRef=n,this.cdr=o,this.injector=f,this.contentType="string",this.size="",this.destroy$=new M}ngOnChanges(i){i.nzComponentName&&(this.size=tn(i.nzComponentName.currentValue)),i.specificContent&&!i.specificContent.isFirstChange()&&(this.content=i.specificContent.currentValue,this.renderEmpty())}ngOnInit(){this.subscribeDefaultEmptyContentChange()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}renderEmpty(){let i=this.content;if(typeof i=="string")this.contentType="string";else if(i instanceof K){let n={$implicit:this.nzComponentName};this.contentType="template",this.contentPortal=new Ht(i,this.viewContainerRef,n)}else if(i instanceof Lt){let n=J.create({parent:this.injector,providers:[{provide:Ze,useValue:this.nzComponentName}]});this.contentType="component",this.contentPortal=new Bt(i,this.viewContainerRef,n)}else this.contentType="string",this.contentPortal=void 0;this.cdr.detectChanges()}subscribeDefaultEmptyContentChange(){this.configService.getConfigChangeEventForComponent("empty").pipe(G(!0),D(this.destroy$)).subscribe(()=>{this.content=this.specificContent||this.getUserDefaultEmptyContent(),this.renderEmpty()})}getUserDefaultEmptyContent(){return(this.configService.getConfigForComponent("empty")||{}).nzDefaultEmptyContent}};e.\u0275fac=function(n){return new(n||e)(C(q),C(wt),C(F),C(J))},e.\u0275cmp=z({type:e,selectors:[["nz-embed-empty"]],inputs:{nzComponentName:"nzComponentName",specificContent:"specificContent"},exportAs:["nzEmbedEmpty"],standalone:!0,features:[E,h],decls:2,vars:1,consts:[[3,"cdkPortalOutlet"],["nzNotFoundImage","simple",1,"ant-empty-normal"],["nzNotFoundImage","simple",1,"ant-empty-small"]],template:function(n,o){n&1&&c(0,Be,2,1)(1,We,1,1),n&2&&d(o.content?0:1)},dependencies:[ae,qt,Ut],encapsulation:2,changeDetection:0});let t=e;return t})(),re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=O({type:e}),e.\u0275inj=w({imports:[ae,gt]});let t=e;return t})();var $=["*"];function on(t,e){if(t&1&&u(0,"nz-avatar",1),t&2){let a=s();l("nzSrc",a.nzSrc)}}function an(t,e){t&1&&g(0)}var rn=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],sn=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function ln(t,e){if(t&1&&u(0,"nz-list-item-meta-avatar",0),t&2){let a=s();l("nzSrc",a.avatarStr)}}function cn(t,e){if(t&1&&(p(0,"nz-list-item-meta-avatar"),bt(1,2),m()),t&2){let a=s();r(),l("ngTemplateOutlet",a.avatarTpl)}}function pn(t,e){if(t&1&&(x(0),y(1),S()),t&2){let a=s(3);r(),L(a.nzTitle)}}function mn(t,e){if(t&1&&(p(0,"nz-list-item-meta-title"),c(1,pn,2,1,"ng-container",3),m()),t&2){let a=s(2);r(),l("nzStringTemplateOutlet",a.nzTitle)}}function dn(t,e){if(t&1&&(x(0),y(1),S()),t&2){let a=s(3);r(),L(a.nzDescription)}}function un(t,e){if(t&1&&(p(0,"nz-list-item-meta-description"),c(1,dn,2,1,"ng-container",3),m()),t&2){let a=s(2);r(),l("nzStringTemplateOutlet",a.nzDescription)}}function fn(t,e){if(t&1&&(p(0,"div",1),c(1,mn,2,1,"nz-list-item-meta-title")(2,un,2,1,"nz-list-item-meta-description"),g(3,1),g(4,2),m()),t&2){let a=s();r(),d(a.nzTitle&&!a.titleComponent?1:-1),r(),d(a.nzDescription&&!a.descriptionComponent?2:-1)}}function zn(t,e){t&1&&g(0)}var hn=["nz-list-item-actions",""];function gn(t,e){}function Cn(t,e){t&1&&u(0,"em",1)}function _n(t,e){if(t&1&&(p(0,"li"),c(1,gn,0,0,"ng-template",0)(2,Cn,1,0,"em",1),m()),t&2){let a=e.$implicit,i=e.$index,n=e.$count;r(),l("ngTemplateOutlet",a),r(),d(i!==n-1?2:-1)}}var vn=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],yn=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"],de=(t,e)=>({$implicit:t,index:e});function xn(t,e){if(t&1&&(x(0),y(1),S()),t&2){let a=s(2);r(),L(a.nzHeader)}}function Sn(t,e){if(t&1&&(p(0,"nz-list-header"),c(1,xn,2,1,"ng-container",6),m()),t&2){let a=s();r(),l("nzStringTemplateOutlet",a.nzHeader)}}function Tn(t,e){t&1&&u(0,"div"),t&2&&et("min-height",53,"px")}function Nn(t,e){}function In(t,e){if(t&1&&(p(0,"div",7),c(1,Nn,0,0,"ng-template",8),m()),t&2){let a=e.$implicit,i=e.$index,n=s(2);l("nzSpan",n.nzGrid.span||null)("nzXs",n.nzGrid.xs||null)("nzSm",n.nzGrid.sm||null)("nzMd",n.nzGrid.md||null)("nzLg",n.nzGrid.lg||null)("nzXl",n.nzGrid.xl||null)("nzXXl",n.nzGrid.xxl||null),r(),l("ngTemplateOutlet",n.nzRenderItem)("ngTemplateOutletContext",zt(9,de,a,i))}}function Dn(t,e){if(t&1&&(p(0,"div",2),H(1,In,2,12,"div",7,B),m()),t&2){let a=s();l("nzGutter",a.nzGrid.gutter||null),r(),U(a.nzDataSource)}}function En(t,e){}function Ln(t,e){if(t&1&&(x(0),c(1,En,0,0,"ng-template",8),S()),t&2){let a=e.$implicit,i=e.$index,n=s(2);r(),l("ngTemplateOutlet",n.nzRenderItem)("ngTemplateOutletContext",zt(2,de,a,i))}}function Fn(t,e){if(t&1&&(p(0,"div",3),H(1,Ln,2,5,"ng-container",null,B),g(3,4),m()),t&2){let a=s();r(),U(a.nzDataSource)}}function Mn(t,e){if(t&1&&u(0,"nz-list-empty",4),t&2){let a=s();l("nzNoResult",a.nzNoResult)}}function An(t,e){if(t&1&&(x(0),y(1),S()),t&2){let a=s(2);r(),L(a.nzFooter)}}function wn(t,e){if(t&1&&(p(0,"nz-list-footer"),c(1,An,2,1,"ng-container",6),m()),t&2){let a=s();r(),l("nzStringTemplateOutlet",a.nzFooter)}}function On(t,e){}function bn(t,e){}function jn(t,e){if(t&1&&(p(0,"nz-list-pagination"),c(1,bn,0,0,"ng-template",5),m()),t&2){let a=s();r(),l("ngTemplateOutlet",a.nzPagination)}}var kn=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],$n=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];function Rn(t,e){if(t&1&&u(0,"ul",3),t&2){let a=s(2);l("nzActions",a.nzActions)}}function Pn(t,e){if(t&1&&(c(0,Rn,1,1,"ul",3),g(1)),t&2){let a=s();d(a.nzActions&&a.nzActions.length>0?0:-1)}}function Vn(t,e){if(t&1&&(x(0),y(1),S()),t&2){let a=s(3);r(),L(a.nzContent)}}function Gn(t,e){if(t&1&&c(0,Vn,2,1,"ng-container",4),t&2){let a=s(2);l("nzStringTemplateOutlet",a.nzContent)}}function Qn(t,e){if(t&1&&(g(0,1),g(1,2),c(2,Gn,1,1,"ng-container")),t&2){let a=s();r(2),d(a.nzContent?2:-1)}}function Bn(t,e){t&1&&g(0,3)}function Hn(t,e){}function Un(t,e){}function qn(t,e){}function Xn(t,e){if(t&1&&(p(0,"nz-list-item-extra"),c(1,qn,0,0,"ng-template",6),m()),t&2){let a=s(2);r(),l("ngTemplateOutlet",a.nzExtra)}}function Wn(t,e){}function Zn(t,e){if(t&1&&(p(0,"div",5),c(1,Hn,0,0,"ng-template",6)(2,Un,0,0,"ng-template",6),m(),c(3,Xn,2,1,"nz-list-item-extra")(4,Wn,0,0,"ng-template",6)),t&2){let a=s(),i=I(1),n=I(3),o=I(5);r(),l("ngTemplateOutlet",n),r(),l("ngTemplateOutlet",i),r(),d(a.nzExtra?3:-1),r(),l("ngTemplateOutlet",o)}}function Kn(t,e){}function Yn(t,e){}function Jn(t,e){}function ti(t,e){}function ei(t,e){if(t&1&&c(0,Kn,0,0,"ng-template",6)(1,Yn,0,0,"ng-template",6)(2,Jn,0,0,"ng-template",6)(3,ti,0,0,"ng-template",6),t&2){let a=s(),i=I(1),n=I(3),o=I(5);l("ngTemplateOutlet",n),r(),l("ngTemplateOutlet",a.nzExtra),r(),l("ngTemplateOutlet",o),r(),l("ngTemplateOutlet",i)}}var se=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],standalone:!0,features:[h],ngContentSelectors:$,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(n,o){n&1&&(v(),p(0,"h4",0),g(1),m())},encapsulation:2,changeDetection:0});let t=e;return t})(),le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],standalone:!0,features:[h],ngContentSelectors:$,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(n,o){n&1&&(v(),p(0,"div",0),g(1),m())},encapsulation:2,changeDetection:0});let t=e;return t})(),ue=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],standalone:!0,features:[h],ngContentSelectors:$,decls:3,vars:1,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc"]],template:function(n,o){n&1&&(v(),p(0,"div",0),c(1,on,1,1,"nz-avatar",1)(2,an,1,0),m()),n&2&&(r(),d(o.nzSrc?1:2))},dependencies:[ee,ht],encapsulation:2,changeDetection:0});let t=e;return t})(),ni=(()=>{let e=class e{set nzAvatar(i){i instanceof K?(this.avatarStr="",this.avatarTpl=i):this.avatarStr=i}constructor(i){this.elementRef=i,this.avatarStr=""}};e.\u0275fac=function(n){return new(n||e)(C(tt))},e.\u0275cmp=z({type:e,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(n,o,f){if(n&1&&(b(f,le,5),b(f,se,5)),n&2){let _;T(_=N())&&(o.descriptionComponent=_.first),T(_=N())&&(o.titleComponent=_.first)}},hostAttrs:[1,"ant-list-item-meta"],inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],standalone:!0,features:[h],ngContentSelectors:sn,decls:4,vars:3,consts:[[3,"nzSrc"],[1,"ant-list-item-meta-content"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"]],template:function(n,o){n&1&&(v(rn),c(0,ln,1,1,"nz-list-item-meta-avatar",0)(1,cn,2,1,"nz-list-item-meta-avatar"),g(2),c(3,fn,5,2,"div",1)),n&2&&(d(o.avatarStr?0:-1),r(),d(o.avatarTpl?1:-1),r(2),d(o.nzTitle||o.nzDescription||o.descriptionComponent||o.titleComponent?3:-1))},dependencies:[ue,P,se,Z,W,le],encapsulation:2,changeDetection:0});let t=e;return t})(),ce=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],standalone:!0,features:[h],ngContentSelectors:$,decls:1,vars:0,template:function(n,o){n&1&&(v(),g(0))},encapsulation:2,changeDetection:0});let t=e;return t})(),ii=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-item-action"]],viewQuery:function(n,o){if(n&1&&nt(K,7),n&2){let f;T(f=N())&&(o.templateRef=f.first)}},exportAs:["nzListItemAction"],standalone:!0,features:[h],ngContentSelectors:$,decls:1,vars:0,template:function(n,o){n&1&&(v(),c(0,zn,1,0,"ng-template"))},encapsulation:2,changeDetection:0});let t=e;return t})(),oi=(()=>{let e=class e{constructor(i,n){this.nzActions=[],this.actions=[],this.inputActionChanges$=new M,this.contentChildrenChanges$=xt(()=>this.nzListItemActions?vt(null):this.initialized.pipe(yt(()=>this.nzListItemActions.changes.pipe(G(this.nzListItemActions))))),this.initialized=new M,Tt(this.contentChildrenChanges$,this.inputActionChanges$).pipe(D(n)).subscribe(()=>{this.nzActions.length?this.actions=this.nzActions:this.actions=this.nzListItemActions.map(o=>o.templateRef),i.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngAfterContentInit(){this.initialized.next(),this.initialized.complete()}};e.\u0275fac=function(n){return new(n||e)(C(F),C(at))},e.\u0275cmp=z({type:e,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(n,o,f){if(n&1&&b(f,ii,4),n&2){let _;T(_=N())&&(o.nzListItemActions=_)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],standalone:!0,features:[$t([at]),E,h],attrs:hn,decls:2,vars:0,consts:[[3,"ngTemplateOutlet"],[1,"ant-list-item-action-split"]],template:function(n,o){n&1&&H(0,_n,3,2,"li",null,B),n&2&&U(o.actions)},dependencies:[P],encapsulation:2,changeDetection:0});let t=e;return t})(),fe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],standalone:!0,features:[h],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(n,o){n&1&&u(0,"nz-embed-empty",0),n&2&&l("nzComponentName","list")("specificContent",o.nzNoResult)},dependencies:[re,gt],encapsulation:2,changeDetection:0});let t=e;return t})(),ai=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],standalone:!0,features:[h],ngContentSelectors:$,decls:1,vars:0,template:function(n,o){n&1&&(v(),g(0))},encapsulation:2,changeDetection:0});let t=e;return t})(),pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],standalone:!0,features:[h],ngContentSelectors:$,decls:1,vars:0,template:function(n,o){n&1&&(v(),g(0))},encapsulation:2,changeDetection:0});let t=e;return t})(),me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=z({type:e,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],standalone:!0,features:[h],ngContentSelectors:$,decls:1,vars:0,template:function(n,o){n&1&&(v(),g(0))},encapsulation:2,changeDetection:0});let t=e;return t})(),ri=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=ut({type:e,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"],standalone:!0});let t=e;return t})(),ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=ut({type:e,selectors:[["nz-list","nzGrid",""]],hostAttrs:[1,"ant-list-grid"],standalone:!0});let t=e;return t})(),mt=(()=>{let e=class e{get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}constructor(i){this.directionality=i,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new Y(this.nzItemLayout),this.destroy$=new M}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(D(this.destroy$)).subscribe(i=>{this.dir=i})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(i){i.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}};e.\u0275fac=function(n){return new(n||e)(C(rt))},e.\u0275cmp=z({type:e,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(n,o,f){if(n&1&&(b(f,pe,5),b(f,me,5),b(f,ri,5)),n&2){let _;T(_=N())&&(o.nzListFooterComponent=_.first),T(_=N())&&(o.nzListPaginationComponent=_.first),T(_=N())&&(o.nzListLoadMoreDirective=_.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(n,o){n&2&&A("ant-list-rtl",o.dir==="rtl")("ant-list-vertical",o.nzItemLayout==="vertical")("ant-list-lg",o.nzSize==="large")("ant-list-sm",o.nzSize==="small")("ant-list-split",o.nzSplit)("ant-list-bordered",o.nzBordered)("ant-list-loading",o.nzLoading)("ant-list-something-after-last-item",o.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:[2,"nzBordered","nzBordered",k],nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:[2,"nzLoading","nzLoading",k],nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:[2,"nzSplit","nzSplit",k],nzNoResult:"nzNoResult"},exportAs:["nzList"],standalone:!0,features:[R,E,h],ngContentSelectors:yn,decls:14,vars:8,consts:[[3,"nzSpinning"],[3,"min-height"],["nz-row","",3,"nzGutter"],[1,"ant-list-items"],[3,"nzNoResult"],[3,"ngTemplateOutlet"],[4,"nzStringTemplateOutlet"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&(v(vn),c(0,Sn,2,1,"nz-list-header"),g(1),p(2,"nz-spin",0),x(3),c(4,Tn,1,2,"div",1)(5,Dn,3,1,"div",2)(6,Fn,4,0,"div",3)(7,Mn,1,1,"nz-list-empty",4),S(),m(),c(8,wn,2,1,"nz-list-footer"),g(9,1),c(10,On,0,0,"ng-template",5),g(11,2),c(12,jn,2,1,"nz-list-pagination"),g(13,3)),n&2&&(d(o.nzHeader?0:-1),r(2),l("nzSpinning",o.nzLoading),r(2),d(o.nzLoading&&o.nzDataSource&&o.nzDataSource.length===0?4:-1),r(),d(o.nzGrid&&o.nzDataSource?5:6),r(2),d(!o.nzLoading&&o.nzDataSource&&o.nzDataSource.length===0?7:-1),r(),d(o.nzFooter?8:-1),r(2),l("ngTemplateOutlet",o.nzLoadMore),r(2),d(o.nzPagination?12:-1))},dependencies:[P,ai,Z,W,oe,ie,ct,lt,st,fe,pe,me],encapsulation:2,changeDetection:0});let t=e;return t})(),Ct=(()=>{let e=class e{get isVerticalAndExtra(){return this.itemLayout==="vertical"&&(!!this.listItemExtraDirective||!!this.nzExtra)}constructor(i,n){this.parentComp=i,this.cdr=n,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(i=>{this.itemLayout=i,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}};e.\u0275fac=function(n){return new(n||e)(C(mt),C(F))},e.\u0275cmp=z({type:e,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(n,o,f){if(n&1&&b(f,ce,5),n&2){let _;T(_=N())&&(o.listItemExtraDirective=_.first)}},hostAttrs:[1,"ant-list-item"],hostVars:2,hostBindings:function(n,o){n&2&&A("ant-list-item-no-flex",o.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:[2,"nzNoFlex","nzNoFlex",k]},exportAs:["nzListItem"],standalone:!0,features:[R,h],ngContentSelectors:$n,decls:8,vars:1,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["nz-list-item-actions","",3,"nzActions"],[4,"nzStringTemplateOutlet"],[1,"ant-list-item-main"],[3,"ngTemplateOutlet"]],template:function(n,o){n&1&&(v(kn),c(0,Pn,2,1,"ng-template",null,0,j)(2,Qn,3,1,"ng-template",null,1,j)(4,Bn,1,0,"ng-template",null,2,j)(6,Zn,5,4)(7,ei,4,4)),n&2&&(r(6),d(o.isVerticalAndExtra?6:7))},dependencies:[oi,Z,W,P,ce],encapsulation:2,changeDetection:0});let t=e;return t})();var he=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=O({type:e}),e.\u0275inj=w({imports:[mt,fe,Ct,ni,ue]});let t=e;return t})();function li(t,e){if(t&1&&(p(0,"div",3)(1,"nz-list-item")(2,"nz-card",5),u(3,"nz-card-meta",6),m()()()),t&2){s();let a=I(8);r(2),l("nzCover",a),r(),l("nzTitle","title")("nzDescription","description")}}function ci(t,e){t&1&&u(0,"img",7),t&2&&l("src","https://ik.imagekit.io/7lvwoay0t/TST-Icon",Q)}var dt=class t{constructor(){}ngOnInit(){}trucksList=[{id:1,title:"Truck 1",imageUrl:"https://ik.imagekit.io/7lvwoay0t/TST-Icon",description:"Plates of truck 1",status:"Available"},{id:2,title:"Truck 2",imageUrl:"https://ik.imagekit.io/7lvwoay0t/TST-Icon",description:"Plates of truck 2",status:"Available"},{id:3,title:"Truck 3",imageUrl:"https://ik.imagekit.io/7lvwoay0t/TST-Icon",description:"Plates of truck 3",status:"Available"},{id:4,title:"Truck 4",imageUrl:"https://ik.imagekit.io/7lvwoay0t/TST-Icon",description:"Plates of truck 4",status:"Available"},{id:5,title:"Truck 5",imageUrl:"https://ik.imagekit.io/7lvwoay0t/TST-Icon",description:"Plates of truck 5",status:"Available"},{id:5,title:"Truck 5",imageUrl:"https://ik.imagekit.io/7lvwoay0t/TST-Icon",description:"Plates of truck 5",status:"Available"},{id:5,title:"Truck 5",imageUrl:"https://ik.imagekit.io/7lvwoay0t/TST-Icon",description:"Plates of truck 5",status:"Available"}];static \u0275fac=function(a){return new(a||t)};static \u0275cmp=z({type:t,selectors:[["app-trucks"]],standalone:!0,features:[h],decls:9,vars:1,consts:[["coverTemplate",""],["nzGrid",""],["nz-row","",3,"nzGutter"],["nz-col","","nzFlex",""],["nz-row","","nzGutter","16"],[2,"width","300px","border-radius","10px","border","0",3,"nzCover"],[3,"nzTitle","nzDescription"],["alt","example",2,"object-fit","cover","aspect-ratio","16/9","border-radius","10px",3,"src"]],template:function(a,i){a&1&&(u(0,"nz-back-top"),p(1,"nz-list",1)(2,"div",2),H(3,li,4,3,"div",3,B),m()(),p(5,"nz-list",1),u(6,"div",4),m(),c(7,ci,1,1,"ng-template",null,0,j)),a&2&&(r(2),l("nzGutter",24),r(),U(i.trucksList))},dependencies:[Zt,Wt,Xt,Jt,Yt,Pt,he,mt,Ct,ze,ct,lt,st],styles:["#coverTemplate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{aspect-ratio:1;object-fit:cover}"]})};var So=[{path:"",component:dt}];export{So as TRUCKS_ROUTES};
