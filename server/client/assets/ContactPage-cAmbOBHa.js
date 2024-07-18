import{r as e,g as t,m as n,c as r,C as l,d as o,e as a,z as i,h as s,F as c,i as u,k as d,l as m,n as f,o as p,p as g,q as h,D as b,s as y,V as $,t as x,v,w,x as C,y as j,R as O,A as E,B as S,E as I,G as M,H as k,I as F,b as N,T as P,J as R,K as z,M as W,N as q,O as H,P as _,Q as T,U as A,W as L,X as B,Y as D,Z as V,$ as X,a0 as G,a1 as Y,a2 as K,a3 as U,a4 as J,j as Z,a5 as Q,a6 as ee,_ as te}from"./index-BhmypF9s.js";import{C as ne}from"./index-CpnAvF3Q.js";import{T as re}from"./index-CZGfFkUm.js";import{u as le,r as oe}from"./responsiveObserver-sH1PktzQ.js";import{u as ae}from"./TextArea-VaQbqWxD.js";import{I as ie}from"./index-D6ifqdOH.js";import{B as se}from"./button-BgjIoduF.js";import"./styleChecker-CJc-p3xt.js";import"./compact-item-DliNTE-G.js";const ce=e=>"object"==typeof e&&null!=e&&1===e.nodeType,ue=(e,t)=>(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e,de=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return ue(n.overflowY,t)||ue(n.overflowX,t)||(e=>{const t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(t){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},me=(e,t,n,r,l,o,a,i)=>o<e&&a>t||o>e&&a<t?0:o<=e&&i<=n||a>=t&&i>=n?o-e-r:a>t&&i<n||o<e&&i>n?a-t+l:0,fe=e=>{const t=e.parentElement;return null==t?e.getRootNode().host||null:t},pe=(e,t)=>{var n,r,l,o;if("undefined"==typeof document)return[];const{scrollMode:a,block:i,inline:s,boundary:c,skipOverflowHiddenElements:u}=t,d="function"==typeof c?c:e=>e!==c;if(!ce(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,f=[];let p=e;for(;ce(p)&&d(p);){if(p=fe(p),p===m){f.push(p);break}null!=p&&p===document.body&&de(p)&&!de(document.documentElement)||null!=p&&de(p,u)&&f.push(p)}const g=null!=(r=null==(n=window.visualViewport)?void 0:n.width)?r:innerWidth,h=null!=(o=null==(l=window.visualViewport)?void 0:l.height)?o:innerHeight,{scrollX:b,scrollY:y}=window,{height:$,width:x,top:v,right:w,bottom:C,left:j}=e.getBoundingClientRect(),{top:O,right:E,bottom:S,left:I}=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);let M="start"===i||"nearest"===i?v-O:"end"===i?C+S:v+$/2-O+S,k="center"===s?j+x/2-I+E:"end"===s?w+E:j-I;const F=[];for(let N=0;N<f.length;N++){const e=f[N],{height:t,width:n,top:r,right:l,bottom:o,left:c}=e.getBoundingClientRect();if("if-needed"===a&&v>=0&&j>=0&&C<=h&&w<=g&&v>=r&&C<=o&&j>=c&&w<=l)return F;const u=getComputedStyle(e),d=parseInt(u.borderLeftWidth,10),p=parseInt(u.borderTopWidth,10),O=parseInt(u.borderRightWidth,10),E=parseInt(u.borderBottomWidth,10);let S=0,I=0;const P="offsetWidth"in e?e.offsetWidth-e.clientWidth-d-O:0,R="offsetHeight"in e?e.offsetHeight-e.clientHeight-p-E:0,z="offsetWidth"in e?0===e.offsetWidth?0:n/e.offsetWidth:0,W="offsetHeight"in e?0===e.offsetHeight?0:t/e.offsetHeight:0;if(m===e)S="start"===i?M:"end"===i?M-h:"nearest"===i?me(y,y+h,h,p,E,y+M,y+M+$,$):M-h/2,I="start"===s?k:"center"===s?k-g/2:"end"===s?k-g:me(b,b+g,g,d,O,b+k,b+k+x,x),S=Math.max(0,S+y),I=Math.max(0,I+b);else{S="start"===i?M-r-p:"end"===i?M-o+E+R:"nearest"===i?me(r,o,t,p,E+R,M,M+$,$):M-(r+t/2)+R/2,I="start"===s?k-c-d:"center"===s?k-(c+n/2)+P/2:"end"===s?k-l+O+P:me(c,l,n,d,O+P,k,k+x,x);const{scrollLeft:a,scrollTop:u}=e;S=0===W?0:Math.max(0,Math.min(u+S/W,e.scrollHeight-t/W+R)),I=0===z?0:Math.max(0,Math.min(a+I/z,e.scrollWidth-n/z+P)),M+=u-S,k+=a-I}F.push({el:e,top:S,left:I})}return F},ge=e=>{return!1===e?{block:"end",inline:"nearest"}:(t=e)===Object(t)&&0!==Object.keys(t).length?e:{block:"start",inline:"nearest"};var t};const he=e.createContext({}),be=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},ye=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:r,gridColumns:l}=e,o={};for(let a=l;a>=0;a--)0===a?(o[`${r}${t}-${a}`]={display:"none"},o[`${r}-push-${a}`]={insetInlineStart:"auto"},o[`${r}-pull-${a}`]={insetInlineEnd:"auto"},o[`${r}${t}-push-${a}`]={insetInlineStart:"auto"},o[`${r}${t}-pull-${a}`]={insetInlineEnd:"auto"},o[`${r}${t}-offset-${a}`]={marginInlineStart:0},o[`${r}${t}-order-${a}`]={order:0}):(o[`${r}${t}-${a}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${a/l*100}%`,maxWidth:a/l*100+"%"}],o[`${r}${t}-push-${a}`]={insetInlineStart:a/l*100+"%"},o[`${r}${t}-pull-${a}`]={insetInlineEnd:a/l*100+"%"},o[`${r}${t}-offset-${a}`]={marginInlineStart:a/l*100+"%"},o[`${r}${t}-order-${a}`]={order:a});return o[`${r}${t}-flex`]={flex:`var(--${n}${t}-flex)`},o})(e,t),$e=t("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),xe=t("Grid",(e=>{const t=n(e,{gridColumns:24}),l={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[be(t),ye(t,""),ye(t,"-xs"),Object.keys(l).map((e=>((e,t,n)=>({[`@media (min-width: ${r(t)})`]:Object.assign({},ye(e,n))}))(t,l[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({})));function ve(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const we=["xs","sm","md","lg","xl","xxl"],Ce=e.forwardRef(((t,n)=>{const{getPrefixCls:r,direction:a}=e.useContext(l),{gutter:i,wrap:s}=e.useContext(he),{prefixCls:c,span:u,order:d,offset:m,push:f,pull:p,className:g,children:h,flex:b,style:y}=t,$=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),x=r("col",c),[v,w,C]=xe(x),j={};let O={};we.forEach((e=>{let n={};const r=t[e];"number"==typeof r?n.span=r:"object"==typeof r&&(n=r||{}),delete $[e],O=Object.assign(Object.assign({},O),{[`${x}-${e}-${n.span}`]:void 0!==n.span,[`${x}-${e}-order-${n.order}`]:n.order||0===n.order,[`${x}-${e}-offset-${n.offset}`]:n.offset||0===n.offset,[`${x}-${e}-push-${n.push}`]:n.push||0===n.push,[`${x}-${e}-pull-${n.pull}`]:n.pull||0===n.pull,[`${x}-rtl`]:"rtl"===a}),n.flex&&(O[`${x}-${e}-flex`]=!0,j[`--${x}-${e}-flex`]=ve(n.flex))}));const E=o(x,{[`${x}-${u}`]:void 0!==u,[`${x}-order-${d}`]:d,[`${x}-offset-${m}`]:m,[`${x}-push-${f}`]:f,[`${x}-pull-${p}`]:p},g,O,w,C),S={};if(i&&i[0]>0){const e=i[0]/2;S.paddingLeft=e,S.paddingRight=e}return b&&(S.flex=ve(b),!1!==s||S.minWidth||(S.minWidth=0)),v(e.createElement("div",Object.assign({},$,{style:Object.assign(Object.assign(Object.assign({},S),y),j),className:E,ref:n}),h))}));function je(t,n){const[r,l]=e.useState("string"==typeof t?t:"");return e.useEffect((()=>{(()=>{if("string"==typeof t&&l(t),"object"==typeof t)for(let e=0;e<oe.length;e++){const r=oe[e];if(!n[r])continue;const o=t[r];if(void 0!==o)return void l(o)}})()}),[JSON.stringify(t),n]),r}const Oe=e.forwardRef(((t,n)=>{const{prefixCls:r,justify:a,align:i,className:s,style:c,children:u,gutter:d=0,wrap:m}=t,f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:p,direction:g}=e.useContext(l),[h,b]=e.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[y,$]=e.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),x=je(i,y),v=je(a,y),w=e.useRef(d),C=le();e.useEffect((()=>{const e=C.subscribe((e=>{$(e);const t=w.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&b(e)}));return()=>C.unsubscribe(e)}),[]);const j=p("row",r),[O,E,S]=$e(j),I=(()=>{const e=[void 0,void 0];return(Array.isArray(d)?d:[d,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<oe.length;r++){const l=oe[r];if(h[l]&&void 0!==t[l]){e[n]=t[l];break}}else e[n]=t})),e})(),M=o(j,{[`${j}-no-wrap`]:!1===m,[`${j}-${v}`]:v,[`${j}-${x}`]:x,[`${j}-rtl`]:"rtl"===g},s,E,S),k={},F=null!=I[0]&&I[0]>0?I[0]/-2:void 0;F&&(k.marginLeft=F,k.marginRight=F);const[N,P]=I;k.rowGap=P;const R=e.useMemo((()=>({gutter:[N,P],wrap:m})),[N,P,m]);return O(e.createElement(he.Provider,{value:R},e.createElement("div",Object.assign({},f,{className:M,style:Object.assign(Object.assign({},k),c),ref:n}),u)))}));function Ee(t){const[n,r]=e.useState(t);return e.useEffect((()=>{const e=setTimeout((()=>{r(t)}),t.length?0:10);return()=>{clearTimeout(e)}}),[t]),n}const Se=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},Ie=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${r(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${r(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Me=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},ke=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},s(e)),Ie(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Me(e,e.controlHeightSM)),"&-large":Object.assign({},Me(e,e.controlHeightLG))})}},Fe=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:l,antCls:o,labelRequiredMarkColor:a,labelColor:c,labelFontSize:u,labelHeight:d,labelColonMarginInlineStart:m,labelColonMarginInlineEnd:f,itemMarginBottom:p}=e;return{[t]:Object.assign(Object.assign({},s(e)),{marginBottom:p,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,\n        &-hidden${o}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:d,color:c,fontSize:u,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:a,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:m,marginInlineEnd:f},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${l}-col-'"]):not([class*="' ${l}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%",lineHeight:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:i,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Ne=(e,t)=>{const{formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},Pe=e=>{const{componentCls:t,formItemCls:n,inlineItemMarginBottom:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:r,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,\n        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},Re=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),ze=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:Re(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},We=e=>{const{componentCls:t,formItemCls:n,antCls:l}=e;return{[`${t}-vertical`]:{[`${n}:not(${n}-horizontal)`]:{[`${n}-row`]:{flexDirection:"column"},[`${n}-label > label`]:{height:"auto"},[`${n}-control`]:{width:"100%"},[`${n}-label,\n        ${l}-col-24${n}-label,\n        ${l}-col-xl-24${n}-label`]:Re(e)}},[`@media (max-width: ${r(e.screenXSMax)})`]:[ze(e),{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${l}-col-xs-24${n}-label`]:Re(e)}}}],[`@media (max-width: ${r(e.screenSMMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${l}-col-sm-24${n}-label`]:Re(e)}}},[`@media (max-width: ${r(e.screenMDMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${l}-col-md-24${n}-label`]:Re(e)}}},[`@media (max-width: ${r(e.screenLGMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${l}-col-lg-24${n}-label`]:Re(e)}}}}},qe=e=>{const{formItemCls:t,antCls:n}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,\n      ${n}-col-24${t}-label,\n      ${n}-col-xl-24${t}-label`]:Re(e),[`@media (max-width: ${r(e.screenXSMax)})`]:[ze(e),{[t]:{[`${n}-col-xs-24${t}-label`]:Re(e)}}],[`@media (max-width: ${r(e.screenSMMax)})`]:{[t]:{[`${n}-col-sm-24${t}-label`]:Re(e)}},[`@media (max-width: ${r(e.screenMDMax)})`]:{[t]:{[`${n}-col-md-24${t}-label`]:Re(e)}},[`@media (max-width: ${r(e.screenLGMax)})`]:{[t]:{[`${n}-col-lg-24${t}-label`]:Re(e)}}}},He=(e,t)=>n(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),_e=t("Form",((e,t)=>{let{rootPrefixCls:n}=t;const r=He(e,n);return[ke(r),Fe(r),Se(r),Ne(r,r.componentCls),Ne(r,r.formItemCls),Pe(r),We(r),qe(r),a(r),i]}),(e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0})),{order:-1e3}),Te=[];function Ae(e,t,n){return{key:"string"==typeof e?e:`${t}-${arguments.length>3&&void 0!==arguments[3]?arguments[3]:0}`,error:e,errorStatus:n}}const Le=t=>{let{help:n,helpStatus:r,errors:l=Te,warnings:a=Te,className:i,fieldId:s,onVisibleChanged:g}=t;const{prefixCls:h}=e.useContext(c),b=`${h}-item-explain`,y=u(h),[$,x,v]=_e(h,y),w=e.useMemo((()=>d(h)),[h]),C=Ee(l),j=Ee(a),O=e.useMemo((()=>null!=n?[Ae(n,"help",r)]:[].concat(m(C.map(((e,t)=>Ae(e,"error","error",t)))),m(j.map(((e,t)=>Ae(e,"warning","warning",t)))))),[n,r,C,j]),E={};return s&&(E.id=`${s}_help`),$(e.createElement(f,{motionDeadline:w.motionDeadline,motionName:`${h}-show-help`,visible:!!O.length,onVisibleChanged:g},(t=>{const{className:n,style:r}=t;return e.createElement("div",Object.assign({},E,{className:o(b,n,v,y,i,x),style:r,role:"alert"}),e.createElement(p,Object.assign({keys:O},d(h),{motionName:`${h}-show-help-item`,component:!1}),(t=>{const{key:n,error:r,errorStatus:l,className:a,style:i}=t;return e.createElement("div",{key:n,className:o(a,{[`${b}-${l}`]:l}),style:i},r)})))})))},Be=["parentNode"],De="form_item";function Ve(e){return void 0===e||!1===e?[]:Array.isArray(e)?e:[e]}function Xe(e,t){if(!e.length)return;const n=e.join("_");if(t)return`${t}_${n}`;return Be.includes(n)?`${De}_${n}`:n}function Ge(e,t,n,r,l,o){let a=r;return void 0!==o?a=o:n.validating?a="validating":e.length?a="error":t.length?a="warning":(n.touched||l&&n.validated)&&(a="success"),a}function Ye(e){return Ve(e).join("_")}function Ke(t){const[n]=g(),r=e.useRef({}),l=e.useMemo((()=>null!=t?t:Object.assign(Object.assign({},n),{__INTERNAL__:{itemRef:e=>t=>{const n=Ye(e);t?r.current[n]=t:delete r.current[n]}},scrollToField:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=function(e,t){const n=t.getFieldInstance(e),r=h(n);if(r)return r;const l=Xe(Ve(e),t.__INTERNAL__.name);return l?document.getElementById(l):void 0}(e,l);n&&function(e,t){if(!e.isConnected||!(e=>{let t=e;for(;t&&t.parentNode;){if(t.parentNode===document)return!0;t=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}return!1})(e))return;const n=(e=>{const t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e);if("object"==typeof(r=t)&&"function"==typeof r.behavior)return t.behavior(pe(e,t));var r;const l="boolean"==typeof t||null==t?void 0:t.behavior;for(const{el:o,top:a,left:i}of pe(e,ge(t))){const e=a-n.top+n.bottom,t=i-n.left+n.right;o.scroll({top:e,left:t,behavior:l})}}(n,Object.assign({scrollMode:"if-needed",block:"nearest"},t))},getFieldInstance:e=>{const t=Ye(e);return r.current[t]}})),[t,n]);return[l]}const Ue=(t,n)=>{const r=e.useContext(b),{getPrefixCls:a,direction:i,form:s}=e.useContext(l),{prefixCls:c,className:d,rootClassName:m,size:f,disabled:p=r,form:g,colon:h,labelAlign:E,labelWrap:S,labelCol:I,wrapperCol:M,hideRequiredMark:k,layout:F="horizontal",scrollToFirstError:N,requiredMark:P,onFinishFailed:R,name:z,style:W,feedbackIcons:q,variant:H}=t,_=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(t,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),T=y(f),A=e.useContext($),L=e.useMemo((()=>void 0!==P?P:!k&&(!s||void 0===s.requiredMark||s.requiredMark)),[k,P,s]),B=null!=h?h:null==s?void 0:s.colon,D=a("form",c),V=u(D),[X,G,Y]=_e(D,V),K=o(D,`${D}-${F}`,{[`${D}-hide-required-mark`]:!1===L,[`${D}-rtl`]:"rtl"===i,[`${D}-${T}`]:T},Y,V,G,null==s?void 0:s.className,d,m),[U]=Ke(g),{__INTERNAL__:J}=U;J.name=z;const Z=e.useMemo((()=>({name:z,labelAlign:E,labelCol:I,labelWrap:S,wrapperCol:M,vertical:"vertical"===F,colon:B,requiredMark:L,itemRef:J.itemRef,form:U,feedbackIcons:q})),[z,E,I,M,F,B,L,U,q]),Q=e.useRef(null);e.useImperativeHandle(n,(()=>{var e;return Object.assign(Object.assign({},U),{nativeElement:null===(e=Q.current)||void 0===e?void 0:e.nativeElement})}));const ee=(e,t)=>{if(e){let n={block:"nearest"};"object"==typeof e&&(n=e),U.scrollToField(t,n)}};return X(e.createElement(x.Provider,{value:H},e.createElement(v,{disabled:p},e.createElement(w.Provider,{value:T},e.createElement(C,{validateMessages:A},e.createElement(j.Provider,{value:Z},e.createElement(O,Object.assign({id:z},_,{name:z,onFinishFailed:e=>{if(null==R||R(e),e.errorFields.length){const t=e.errorFields[0].name;if(void 0!==N)return void ee(N,t);s&&void 0!==s.scrollToFirstError&&ee(s.scrollToFirstError,t)}},form:U,ref:Q,style:Object.assign(Object.assign({},null==s?void 0:s.style),W),className:K}))))))))},Je=e.forwardRef(Ue);const Ze=()=>{const{status:t,errors:n=[],warnings:r=[]}=e.useContext(S);return{status:t,errors:n,warnings:r}};Ze.Context=S;const Qe=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},et=k(["Form","item-item"],((e,t)=>{let{rootPrefixCls:n}=t;const r=He(e,n);return[Qe(r)]})),tt=t=>{const{prefixCls:n,status:r,wrapperCol:l,children:a,errors:i,warnings:s,_internalItemRender:u,extra:d,help:m,fieldId:f,marginBottom:p,onErrorVisibleChanged:g}=t,h=`${n}-item`,b=e.useContext(j),y=l||b.wrapperCol||{},$=o(`${h}-control`,y.className),x=e.useMemo((()=>Object.assign({},b)),[b]);delete x.labelCol,delete x.wrapperCol;const v=e.createElement("div",{className:`${h}-control-input`},e.createElement("div",{className:`${h}-control-input-content`},a)),w=e.useMemo((()=>({prefixCls:n,status:r})),[n,r]),C=null!==p||i.length||s.length?e.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},e.createElement(c.Provider,{value:w},e.createElement(Le,{fieldId:f,errors:i,warnings:s,help:m,helpStatus:r,className:`${h}-explain-connected`,onVisibleChanged:g})),!!p&&e.createElement("div",{style:{width:0,height:p}})):null,O={};f&&(O.id=`${f}_extra`);const E=d?e.createElement("div",Object.assign({},O,{className:`${h}-extra`}),d):null,S=u&&"pro_table_render"===u.mark&&u.render?u.render(t,{input:v,errorList:C,extra:E}):e.createElement(e.Fragment,null,v,C,E);return e.createElement(j.Provider,{value:x},e.createElement(Ce,Object.assign({},y,{className:$}),S),e.createElement(et,{prefixCls:n}))};var nt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},rt=function(t,n){return e.createElement(F,N({},t,{ref:n,icon:nt}))},lt=e.forwardRef(rt);const ot=t=>{let{prefixCls:n,label:r,htmlFor:l,labelCol:a,labelAlign:i,colon:s,required:c,requiredMark:u,tooltip:d,vertical:m}=t;var f;const[p]=ae("Form"),{labelAlign:g,labelCol:h,labelWrap:b,colon:y}=e.useContext(j);if(!r)return null;const $=a||h||{},x=`${n}-item-label`,v=o(x,"left"===(i||g)&&`${x}-left`,$.className,{[`${x}-wrap`]:!!b});let w=r;const C=!0===s||!1!==y&&!1!==s;C&&!m&&"string"==typeof r&&r.trim()&&(w=r.replace(/[:|：]\s*$/,""));const O=function(t){return t?"object"!=typeof t||e.isValidElement(t)?{title:t}:t:null}(d);if(O){const{icon:t=e.createElement(lt,null)}=O,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(O,["icon"]),l=e.createElement(P,Object.assign({},r),e.cloneElement(t,{className:`${n}-item-tooltip`,title:"",onClick:e=>{e.preventDefault()},tabIndex:null}));w=e.createElement(e.Fragment,null,w,l)}const E="optional"===u,S="function"==typeof u;S?w=u(w,{required:!!c}):E&&!c&&(w=e.createElement(e.Fragment,null,w,e.createElement("span",{className:`${n}-item-optional`,title:""},(null==p?void 0:p.optional)||(null===(f=R.Form)||void 0===f?void 0:f.optional))));const I=o({[`${n}-item-required`]:c,[`${n}-item-required-mark-optional`]:E||S,[`${n}-item-no-colon`]:!C});return e.createElement(Ce,Object.assign({},$,{className:v}),e.createElement("label",{htmlFor:l,className:I,title:"string"==typeof r?r:""},w))},at={success:z,warning:W,error:q,validating:H};function it(t){let{children:n,errors:r,warnings:l,hasFeedback:a,validateStatus:i,prefixCls:s,meta:c,noStyle:u}=t;const d=`${s}-item`,{feedbackIcons:m}=e.useContext(j),f=Ge(r,l,c,null,!!a,i),{isFormItemInput:p,status:g,hasFeedback:h,feedbackIcon:b}=e.useContext(S),y=e.useMemo((()=>{var t;let n;if(a){const i=!0!==a&&a.icons||m,s=f&&(null===(t=null==i?void 0:i({status:f,errors:r,warnings:l}))||void 0===t?void 0:t[f]),c=f&&at[f];n=!1!==s&&c?e.createElement("span",{className:o(`${d}-feedback-icon`,`${d}-feedback-icon-${f}`)},s||e.createElement(c,null)):null}const i={status:f||"",errors:r,warnings:l,hasFeedback:!!a,feedbackIcon:n,isFormItemInput:!0};return u&&(i.status=(null!=f?f:g)||"",i.isFormItemInput=p,i.hasFeedback=!!(null!=a?a:h),i.feedbackIcon=void 0!==a?i.feedbackIcon:b),i}),[f,a,u,p,g]);return e.createElement(S.Provider,{value:y},n)}var st=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};function ct(t){const{prefixCls:n,className:r,rootClassName:l,style:a,help:i,errors:s,warnings:c,validateStatus:u,meta:d,hasFeedback:m,hidden:f,children:p,fieldId:g,required:h,isRequired:b,onSubItemMetaChange:y,layout:$}=t,x=st(t,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),v=`${n}-item`,{requiredMark:w,vertical:C}=e.useContext(j),O=C||"vertical"===$,E=e.useRef(null),S=Ee(s),I=Ee(c),M=null!=i,k=!!(M||s.length||c.length),F=!!E.current&&_(E.current),[N,P]=e.useState(null);T((()=>{if(k&&E.current){const e=getComputedStyle(E.current);P(parseInt(e.marginBottom,10))}}),[k,F]);const R=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Ge(e?S:d.errors,e?I:d.warnings,d,"",!!m,u)}(),z=o(v,r,l,{[`${v}-with-help`]:M||S.length||I.length,[`${v}-has-feedback`]:R&&m,[`${v}-has-success`]:"success"===R,[`${v}-has-warning`]:"warning"===R,[`${v}-has-error`]:"error"===R,[`${v}-is-validating`]:"validating"===R,[`${v}-hidden`]:f,[`${v}-${$}`]:$});return e.createElement("div",{className:z,style:a,ref:E},e.createElement(Oe,Object.assign({className:`${v}-row`},A(x,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),e.createElement(ot,Object.assign({htmlFor:g},t,{requiredMark:w,required:null!=h?h:b,prefixCls:n,vertical:O})),e.createElement(tt,Object.assign({},t,d,{errors:S,warnings:I,prefixCls:n,status:R,help:i,marginBottom:N,onErrorVisibleChanged:e=>{e||P(null)}}),e.createElement(L.Provider,{value:y},e.createElement(it,{prefixCls:n,meta:d,errors:d.errors,warnings:d.warnings,hasFeedback:m,validateStatus:R},p)))),!!N&&e.createElement("div",{className:`${v}-margin-offset`,style:{marginBottom:-N}}))}const ut=e.memo((e=>{let{children:t}=e;return t}),((e,t)=>function(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>{const r=e[n],l=t[n];return r===l||"function"==typeof r||"function"==typeof l}))}(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every(((e,n)=>e===t.childProps[n]))));const dt=function(t){const{name:n,noStyle:r,className:a,dependencies:i,prefixCls:s,shouldUpdate:c,rules:d,children:f,required:p,label:g,messageVariables:h,trigger:b="onChange",validateTrigger:y,hidden:$,help:x,layout:v}=t,{getPrefixCls:w}=e.useContext(l),{name:C}=e.useContext(j),O=function(e){if("function"==typeof e)return e;const t=E(e);return t.length<=1?t[0]:t}(f),S="function"==typeof O,k=e.useContext(L),{validateTrigger:F}=e.useContext(B),N=void 0!==y?y:F,P=!(null==n),R=w("form",s),z=u(R),[W,q,H]=_e(R,z);K();const _=e.useContext(D),T=e.useRef(),[A,U]=function(t){const[n,r]=e.useState(t),l=e.useRef(null),o=e.useRef([]),a=e.useRef(!1);return e.useEffect((()=>(a.current=!1,()=>{a.current=!0,I.cancel(l.current),l.current=null})),[]),[n,function(e){a.current||(null===l.current&&(o.current=[],l.current=I((()=>{l.current=null,r((e=>{let t=e;return o.current.forEach((e=>{t=e(t)})),t}))}))),o.current.push(e))}]}({}),[J,Z]=V((()=>({errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}))),Q=(e,t)=>{U((n=>{const r=Object.assign({},n),l=[].concat(m(e.name.slice(0,-1)),m(t)).join("__SPLIT__");return e.destroy?delete r[l]:r[l]=e,r}))},[ee,te]=e.useMemo((()=>{const e=m(J.errors),t=m(J.warnings);return Object.values(A).forEach((n=>{e.push.apply(e,m(n.errors||[])),t.push.apply(t,m(n.warnings||[]))})),[e,t]}),[A,J.errors,J.warnings]),ne=function(){const{itemRef:t}=e.useContext(j),n=e.useRef({});return function(e,r){const l=r&&"object"==typeof r&&r.ref,o=e.join("_");return n.current.name===o&&n.current.originRef===l||(n.current.name=o,n.current.originRef=l,n.current.ref=M(t(e),l)),n.current.ref}}();function re(n,l,i){return r&&!$?e.createElement(it,{prefixCls:R,hasFeedback:t.hasFeedback,validateStatus:t.validateStatus,meta:J,errors:ee,warnings:te,noStyle:!0},n):e.createElement(ct,Object.assign({key:"row"},t,{className:o(a,H,z,q),prefixCls:R,fieldId:l,isRequired:i,errors:ee,warnings:te,meta:J,onSubItemMetaChange:Q,layout:v}),n)}if(!P&&!S&&!i)return W(re(O));let le={};return"string"==typeof g?le.label=g:n&&(le.label=String(n)),h&&(le=Object.assign(Object.assign({},le),h)),W(e.createElement(X,Object.assign({},t,{messageVariables:le,trigger:b,validateTrigger:N,onMetaChange:e=>{const t=null==_?void 0:_.getKey(e.name);if(Z(e.destroy?{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}:e,!0),r&&!1!==x&&k){let n=e.name;if(e.destroy)n=T.current||n;else if(void 0!==t){const[e,r]=t;n=[e].concat(m(r)),T.current=n}k(e,n)}}}),((r,l,o)=>{const a=Ve(n).length&&l?l.name:[],s=Xe(a,C),u=void 0!==p?p:!!(null==d?void 0:d.some((e=>{if(e&&"object"==typeof e&&e.required&&!e.warningOnly)return!0;if("function"==typeof e){const t=e(o);return(null==t?void 0:t.required)&&!(null==t?void 0:t.warningOnly)}return!1}))),f=Object.assign({},r);let g=null;if(Array.isArray(O)&&P)g=O;else if(S&&(!c&&!i||P));else if(!i||S||P)if(e.isValidElement(O)){const n=Object.assign(Object.assign({},O.props),f);if(n.id||(n.id=s),x||ee.length>0||te.length>0||t.extra){const e=[];(x||ee.length>0)&&e.push(`${s}_help`),t.extra&&e.push(`${s}_extra`),n["aria-describedby"]=e.join(" ")}ee.length>0&&(n["aria-invalid"]="true"),u&&(n["aria-required"]="true"),G(O)&&(n.ref=ne(a,O));new Set([].concat(m(Ve(b)),m(Ve(N)))).forEach((e=>{n[e]=function(){for(var t,n,r,l,o,a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];null===(r=f[e])||void 0===r||(t=r).call.apply(t,[f].concat(i)),null===(o=(l=O.props)[e])||void 0===o||(n=o).call.apply(n,[l].concat(i))}}));const r=[n["aria-required"],n["aria-invalid"],n["aria-describedby"]];g=e.createElement(ut,{control:f,update:O,childProps:r},Y(O,n))}else g=S&&(c||i)&&!P?O(o):O;else;return re(g,s,u)})))};dt.useStatus=Ze;const mt=Je;mt.Item=dt,mt.List=t=>{var{prefixCls:n,children:r}=t,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(t,["prefixCls","children"]);const{getPrefixCls:a}=e.useContext(l),i=a("form",n),s=e.useMemo((()=>({prefixCls:i,status:"error"})),[i]);return e.createElement(U,Object.assign({},o),((t,n,l)=>e.createElement(c.Provider,{value:s},r(t.map((e=>Object.assign(Object.assign({},e),{fieldKey:e.key}))),n,{errors:l.errors,warnings:l.warnings}))))},mt.ErrorList=Le,mt.useForm=Ke,mt.useFormInstance=function(){const{form:t}=e.useContext(j);return t},mt.useWatch=J,mt.Provider=C,mt.create=()=>{};var ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"}}]},name:"environment",theme:"outlined"},pt=function(t,n){return e.createElement(F,N({},t,{ref:n,icon:ft}))},gt=e.forwardRef(pt),ht={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},bt=function(t,n){return e.createElement(F,N({},t,{ref:n,icon:ht}))},yt=e.forwardRef(bt),$t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]},name:"phone",theme:"outlined"},xt=function(t,n){return e.createElement(F,N({},t,{ref:n,icon:$t}))},vt=e.forwardRef(xt);const{Title:wt}=re,Ct=()=>{const[t,n]=e.useState(!1),r=async e=>{n(!0);try{const t=await(async()=>(await te((()=>import("./index-DJRQaurD.js")),[])).default)();await t.send("service_vzhry7q","template_8qe1gjj",e,"AfZ2YVWXffHclCoJW"),ee.success("Your message has been sent successfully!")}catch(t){ee.error("Failed to send message. Please try again later.")}finally{n(!1)}};return Z.jsxs("div",{style:{padding:"20px"},children:[Z.jsx(wt,{level:2,children:"Contact Us"}),Z.jsxs(ne,{style:{marginBottom:"20px"},children:[Z.jsx(re.Paragraph,{children:"Have a question or need support? Reach out to us using the contact information below."}),Z.jsxs("ul",{style:{listStyleType:"none",padding:0},children:[Z.jsxs("li",{children:[Z.jsx(vt,{style:{marginRight:"10px"}}),Z.jsx("span",{children:"Phone: +1234567890"})]}),Z.jsxs("li",{children:[Z.jsx(yt,{style:{marginRight:"10px"}}),Z.jsx("span",{children:"Email: contact@example.com"})]}),Z.jsxs("li",{children:[Z.jsx(gt,{style:{marginRight:"10px"}}),Z.jsx("span",{children:"Address: 123 Street, City, Country"})]})]})]}),Z.jsx(ne,{title:"Send us a Message",style:{marginBottom:"20px"},children:Z.jsxs(mt,{layout:"vertical",onFinish:e=>{r(e)},children:[Z.jsx(mt.Item,{label:"Name",name:"user_name",rules:[{required:!0,message:"Please enter your name"}],children:Z.jsx(ie,{})}),Z.jsx(mt.Item,{label:"Email",name:"user_email",rules:[{required:!0,message:"Please enter your email"},{type:"email",message:"Please enter a valid email"}],children:Z.jsx(ie,{})}),Z.jsx(mt.Item,{label:"Message",name:"user_message",rules:[{required:!0,message:"Please enter your message"}],children:Z.jsx(ie.TextArea,{rows:4})}),Z.jsx(mt.Item,{children:Z.jsx(se,{type:"primary",htmlType:"submit",disabled:t,children:t?Z.jsx(Q,{size:"small"}):"Submit"})})]})})]})};export{Ct as default};