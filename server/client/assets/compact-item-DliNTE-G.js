function t(t,e,n){const{focusElCls:i,focus:s,borderElCls:o}=n,r=o?"> *":"",a=["hover",s?"focus":null,"active"].filter(Boolean).map((t=>`&:${t} ${r}`)).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:t.calc(t.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[a]:{zIndex:2}},i?{[`&${i}`]:{zIndex:2}}:{}),{[`&[disabled] ${r}`]:{zIndex:0}})}}function e(t,e,n){const{borderElCls:i}=n,s=i?`> ${i}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${s}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${s}, &${t}-sm ${s}, &${t}-lg ${s}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${s}, &${t}-sm ${s}, &${t}-lg ${s}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function n(n){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{focus:!0};const{componentCls:s}=n,o=`${s}-compact`;return{[o]:Object.assign(Object.assign({},t(n,o,i)),e(s,o,i))}}export{n as g};