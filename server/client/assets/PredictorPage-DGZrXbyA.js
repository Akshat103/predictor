const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Filter-CpHUp8yM.js","assets/index-B8Vx2Q6j.js","assets/index-Bvv3RkMR.css","assets/index-Ch6uXJkd.js","assets/Filter-CYivYX3d.css","assets/PredictionResult-zvPMJwb3.js"])))=>i.map(i=>d[i]);
import{r as e,_ as o,u as l,a as d,j as s,S as t,f as p}from"./index-B8Vx2Q6j.js";const u=e.lazy(()=>o(()=>import("./Filter-CpHUp8yM.js"),__vite__mapDeps([0,1,2,3,4]))),x=e.lazy(()=>o(()=>import("./PredictionResult-zvPMJwb3.js"),__vite__mapDeps([5,1,2,3]))),j=()=>{const a=l(),r=d(i=>i.options.loading),[c,n]=e.useState(!0);return e.useEffect(()=>{(async()=>{await a(p()),n(!1)})()},[a]),c?s.jsx(t,{}):s.jsxs("div",{className:"predictor-page",children:[s.jsxs("section",{className:"filter-section",children:[s.jsx("p",{children:"Predict Colleges"}),s.jsx(e.Suspense,{fallback:s.jsx(t,{}),children:s.jsx(u,{loading:r})})]}),s.jsx(e.Suspense,{fallback:s.jsx(t,{}),children:s.jsx(x,{})})]})};export{j as default};
