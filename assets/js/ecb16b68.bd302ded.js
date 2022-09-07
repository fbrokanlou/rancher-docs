"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57890],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Rancher Deployment Strategies",weight:100,aliases:["/rancher/v2.0-v2.4/en/best-practices/deployment-strategies","/rancher/v2.0-v2.4/en/best-practices/v2.0-v2.4/deployment-strategies","/rancher/v2.x/en/best-practices/v2.0-v2.4/deployment-strategies/"]},l=void 0,c={unversionedId:"reference-guides/best-practices/deployment-strategies",id:"version-2.0-2.4/reference-guides/best-practices/deployment-strategies",title:"Rancher Deployment Strategies",description:"There are two recommended deployment strategies. Each one has its own pros and cons. Read more about which one would fit best for your use case:",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/best-practices/deployment-strategies.md",sourceDirName:"reference-guides/best-practices",slug:"/reference-guides/best-practices/deployment-strategies",permalink:"/v2.0-v2.4/reference-guides/best-practices/deployment-strategies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/best-practices/deployment-strategies.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Rancher Deployment Strategies",weight:100,aliases:["/rancher/v2.0-v2.4/en/best-practices/deployment-strategies","/rancher/v2.0-v2.4/en/best-practices/v2.0-v2.4/deployment-strategies","/rancher/v2.x/en/best-practices/v2.0-v2.4/deployment-strategies/"]},sidebar:"tutorialSidebar",previous:{title:"Tips for Setting Up Containers",permalink:"/v2.0-v2.4/reference-guides/best-practices/containers"},next:{title:"Tips for Running Rancher",permalink:"/v2.0-v2.4/reference-guides/best-practices/deployment-types"}},p={},u=[{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Pros",id:"pros-1",level:3},{value:"Cons",id:"cons-1",level:3}],d={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two recommended deployment strategies. Each one has its own pros and cons. Read more about which one would fit best for your use case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#hub-and-spoke-strategy"},"Hub and Spoke")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#regional-strategy"},"Regional"))),(0,o.kt)("h1",{id:"hub-and-spoke-strategy"},"Hub and Spoke Strategy"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In this deployment scenario, there is a single Rancher control plane managing Kubernetes clusters across the globe. The control plane would be run on a high-availability Kubernetes cluster, and there would be impact due to latencies."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(56904).Z,width:"1332",height:"749"})),(0,o.kt)("h3",{id:"pros"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Environments could have nodes and network connectivity across regions."),(0,o.kt)("li",{parentName:"ul"},"Single control plane interface to view/see all regions and environments."),(0,o.kt)("li",{parentName:"ul"},"Kubernetes does not require Rancher to operate and can tolerate losing connectivity to the Rancher control plane.")),(0,o.kt)("h3",{id:"cons"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subject to network latencies."),(0,o.kt)("li",{parentName:"ul"},"If the control plane goes out, global provisioning of new services is unavailable until it is restored. However, each Kubernetes cluster can continue to be managed individually.")),(0,o.kt)("h1",{id:"regional-strategy"},"Regional Strategy"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"In the regional deployment model a control plane is deployed in close proximity to the compute nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(38039).Z,width:"1331",height:"557"})),(0,o.kt)("h3",{id:"pros-1"},"Pros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rancher functionality in regions stay operational if a control plane in another region goes down."),(0,o.kt)("li",{parentName:"ul"},"Network latency is greatly reduced, improving the performance of functionality in Rancher."),(0,o.kt)("li",{parentName:"ul"},"Upgrades of the Rancher control plane can be done independently per region.")),(0,o.kt)("h3",{id:"cons-1"},"Cons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Overhead of managing multiple Rancher installations."),(0,o.kt)("li",{parentName:"ul"},"Visibility across global Kubernetes clusters requires multiple interfaces/panes of glass."),(0,o.kt)("li",{parentName:"ul"},"Deploying multi-cluster apps in Rancher requires repeating the process for each Rancher server.")))}m.isMDXComponent=!0},56904:function(e,t,n){t.Z=n.p+"assets/images/hub-and-spoke-e5f8b93bb0f2caaa2932942b77ac2a2f.png"},38039:function(e,t,n){t.Z=n.p+"assets/images/regional-85aa0ca404aa35cee043f324fdbdd3cb.png"}}]);