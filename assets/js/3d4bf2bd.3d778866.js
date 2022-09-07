"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57338],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Windows Support",weight:2},s=void 0,p={unversionedId:"explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",id:"version-2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",title:"Windows Support",description:"Prior to Rancher v2.5.6, the agent did not have native Windows manifests on downstream clusters with Windows nodes. This would result in a failing agent pod for the cluster.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support.md",sourceDirName:"explanations/integrations-in-rancher/fleet-gitops-at-scale",slug:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",permalink:"/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support.md",tags:[],version:"2.5",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Windows Support",weight:2},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/architecture"},next:{title:"Using Fleet Behind a Proxy",permalink:"/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy"}},c={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Prior to Rancher v2.5.6, the ",(0,a.kt)("inlineCode",{parentName:"p"},"agent")," did not have native Windows manifests on downstream clusters with Windows nodes. This would result in a failing ",(0,a.kt)("inlineCode",{parentName:"p"},"agent")," pod for the cluster."),(0,a.kt)("p",null,"If you are upgrading from an older version of Rancher to v2.5.6+, you can deploy a working ",(0,a.kt)("inlineCode",{parentName:"p"},"agent")," with the following workflow ",(0,a.kt)("em",{parentName:"p"},"in the downstream cluster"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cordon all Windows nodes."),(0,a.kt)("li",{parentName:"ol"},"Apply the below toleration to the ",(0,a.kt)("inlineCode",{parentName:"li"},"agent")," workload."),(0,a.kt)("li",{parentName:"ol"},"Uncordon all Windows nodes."),(0,a.kt)("li",{parentName:"ol"},"Delete all ",(0,a.kt)("inlineCode",{parentName:"li"},"agent")," pods. New pods should be created with the new toleration."),(0,a.kt)("li",{parentName:"ol"},"Once the ",(0,a.kt)("inlineCode",{parentName:"li"},"agent")," pods are running, and auto-update is enabled for Fleet, they should be updated to a Windows-compatible ",(0,a.kt)("inlineCode",{parentName:"li"},"agent")," version.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tolerations:\n- effect: NoSchedule\n  key: cattle.io/os\n  operator: Equal\n  value: linux\n")))}f.isMDXComponent=!0}}]);