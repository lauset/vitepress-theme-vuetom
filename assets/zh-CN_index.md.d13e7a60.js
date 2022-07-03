import{o as n,c as i,a as t,F as c,r as u,d as g,t as m}from"./app.1150a4b2.js";const h="vitepress-theme-vuetom",v="2.0.0",f="Vitepress Theme Vuetom",_="dist/index.js",y="types/index.d.ts",b={pub:"npm publish",clean:"rimraf ./dist",build:"pnpm clean && pnpm build:css && pnpm build:vt","build:vt":"tsc -p . && node scripts/build-vt","build:css":"gulp --require sucrase/register/ts -f vuetom/gulpfile.ts"},x={node:">=14.0.0"},V=["dist","types","vuetom"],j=["vitepress","theme"],k="lauset",T="MIT",N={type:"git",url:"git+https://github.com/lauset/vitepress-theme-vuetom.git"},w={url:"https://github.com/lauset/vitepress-theme-vuetom/issues"},z="https://github.com/lauset/vitepress-theme-vuetom#readme",C={"@types/gulp-autoprefixer":"0.0.33","@types/gulp-clean-css":"4.3.0","@types/gulp-rename":"2.0.1","@types/gulp-sass":"5.0.0","@typescript-eslint/eslint-plugin":"^5.30.0","@typescript-eslint/parser":"^5.30.0",eslint:"^8.18.0","eslint-config-airbnb-base":"^15.0.0","eslint-plugin-import":"^2.26.0","eslint-plugin-vue":"^9.1.1","fs-extra":"^10.1.0",globby:"^11.1.0",gulp:"^4.0.2","gulp-autoprefixer":"8.0.0","gulp-clean-css":"4.3.0","gulp-rename":"2.0.0","gulp-sass":"5.1.0",sass:"^1.53.0",sucrase:"3.22.0",typescript:"^4.7.4"},S={dayjs:"^1.11.3",vitepress:"1.0.0-alpha.4"},P={peerDependencyRules:{ignoreMissing:["@algolia/client-search","react","react-dom","@types/react"]}};var D={name:h,version:v,description:f,main:_,typings:y,scripts:b,engines:x,files:V,keywords:j,author:k,license:T,repository:N,bugs:w,homepage:z,devDependencies:C,dependencies:S,pnpm:P};const R={class:"frontpage sponsors"},B=t("h2",null,"\u611F \u8C22",-1),E={class:"platinum-sponsors"},I=["href"],M=["src","alt","id"],$={class:"gold-sponsors"},A=["href"],F=["src","alt","id"],q=JSON.parse('{"title":"Vuetom","titleTemplate":"Vite & Vue Powered Static Site Generator","description":"","frontmatter":{"layout":"home","title":"Vuetom","titleTemplate":"Vite & Vue Powered Static Site Generator","hero":{"name":"Vuetom","text":null,"tagline":"vitepress flat theme","actions":[{"theme":"brand big","text":"\u5FEB \u901F \u5F00 \u59CB","link":"/zh-CN/guide/info"},{"theme":"alt big","text":"\u914D \u7F6E","link":"/zh-CN/guide/config"}]},"features":[{"title":"\u{1F4E6} \u4F18\u5316\u7684\u6784\u5EFA","details":"\u53EF\u9009 \u201C\u591A\u9875\u5E94\u7528\u201D \u6216 \u201C\u5E93\u201D \u6A21\u5F0F\u7684\u9884\u914D\u7F6E Rollup \u6784\u5EFA"},{"title":"\u{1F529} \u901A\u7528\u7684\u63D2\u4EF6","details":"\u5728\u5F00\u53D1\u548C\u6784\u5EFA\u4E4B\u95F4\u5171\u4EAB Rollup-superset \u63D2\u4EF6\u63A5\u53E3\u3002"},{"title":"\u{1F511} \u5B8C\u5168\u7C7B\u578B\u5316\u7684API","details":"\u7075\u6D3B\u7684 API \u548C\u5B8C\u6574 TypeScript \u7C7B\u578B\u3002"}]},"headers":[],"relativePath":"zh-CN/index.md"}'),G={name:"zh-CN/index.md"},J=Object.assign(G,{setup(L){const a=[{id:"vue",name:"Vue",href:"https://v3.cn.vuejs.org/",src:"https://v3.cn.vuejs.org/logo.png",tier:"platinum"},{id:"vite",name:"Vite",href:"https://vitejs.cn/",src:"https://vitejs.cn/logo.svg"},{id:"vitepress",name:"Vitepress",href:"https://fttp.jjf-tech.cn/vitepress/",src:"https://v3.cn.vuejs.org/logo.png"},{id:"elementplus",name:"Element Plus",href:"https://element-plus.gitee.io/zh-CN/",src:"https://element-plus.gitee.io/images/element-plus-logo.svg"}];function d(){g(()=>{const r=document.getElementsByClassName("name")[0];r.style.position="relative";const o=document.createElement("span");o.classList.add("release-tag");const e=`v${D.version}`;o.innerText=e,e!==void 0&&r.appendChild(o)})}return d(),(r,o)=>(n(),i("div",null,[t("div",R,[B,t("div",E,[(n(!0),i(c,null,u(a.filter(e=>e.tier==="platinum"),({href:e,src:l,name:s,id:p})=>(n(),i("a",{href:e,target:"_blank",rel:"noopener","aria-label":"sponsor-img"},[t("img",{src:l,alt:s,id:`sponsor-${p}`},null,8,M),t("p",null,m(s),1)],8,I))),256))]),t("div",$,[(n(!0),i(c,null,u(a.filter(e=>e.tier!=="platinum"),({href:e,src:l,name:s,id:p})=>(n(),i("a",{href:e,target:"_blank",rel:"noopener","aria-label":"sponsor-img"},[t("img",{src:l,alt:s,id:`sponsor-${p}`},null,8,F),t("p",null,m(s),1)],8,A))),256))])])]))}});export{q as __pageData,J as default};