"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8035],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},772:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={id:"azure_ad",title:"Microsoft Azure AD"},u=void 0,p={unversionedId:"configuration/providers/azure_ad",id:"configuration/providers/azure_ad",title:"Microsoft Azure AD",description:"For adding an application to the Microsoft Azure AD follow these steps to add an application.",source:"@site/docs/configuration/providers/azure_ad.md",sourceDirName:"configuration/providers",slug:"/configuration/providers/azure_ad",permalink:"/oauth2-proxy/docs/next/configuration/providers/azure_ad",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/configuration/providers/azure_ad.md",tags:[],version:"current",frontMatter:{id:"azure_ad",title:"Microsoft Azure AD"},sidebar:"docs",previous:{title:"LinkedIn",permalink:"/oauth2-proxy/docs/next/configuration/providers/linkedin"},next:{title:"OpenID Connect",permalink:"/oauth2-proxy/docs/next/configuration/providers/openid_connect"}},s={},d=[],l={toc:d},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For adding an application to the Microsoft Azure AD follow ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"},"these steps to add an application"),"."),(0,i.kt)("p",null,"Take note of your ",(0,i.kt)("inlineCode",{parentName:"p"},"TenantId")," if applicable for your situation. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TenantId")," can be used to override the default\n",(0,i.kt)("inlineCode",{parentName:"p"},"common")," authorization server with a tenant specific server."))}m.isMDXComponent=!0}}]);