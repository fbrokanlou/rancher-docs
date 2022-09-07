"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63758],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return k}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),i=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},d=function(t){var e=i(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=i(r),k=a,N=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return r?n.createElement(N,u(u({ref:e},d),{},{components:r})):n.createElement(N,u({ref:e},d))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,u=new Array(l);u[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,u[1]=p;for(var i=2;i<l;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92779:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),u=["components"],p={title:"Windows and Linux Cluster Feature Parity",weight:3},o=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity",title:"Windows and Linux Cluster Feature Parity",description:"Windows clusters do not share the same feature support as Linux clusters.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity.md",tags:[],version:"2.5",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Windows and Linux Cluster Feature Parity",weight:3},sidebar:"tutorialSidebar",previous:{title:"Configuration for Storage Classes in Azure",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/azure-storageclass-configuration"},next:{title:"Networking Requirements for Host Gateway (L2bridge)",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway"}},d={},s=[],m={toc:s};function k(t){var e=t.components,r=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Windows clusters do not share the same feature support as Linux clusters."),(0,l.kt)("p",null,"The following chart describes the feature parity between Windows and Linux on Rancher as of Rancher v2.5.8:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Component")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Linux")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Windows")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Distributions")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE2"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Tenatively Planned For 2.6.x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"K3S"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Rancher Components")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Agent"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fleet"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EKS Operator"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AKS Operator"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GKE Operator"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alerting v1"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Monitoring v1"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Logging v1"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Monitoring/Alerting v2"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported In 2.5.8+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Logging v2"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported In 2.5.8+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Istio"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Catalog v1"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Catalog v2"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPA"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Longhorn"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CIS Scans"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Backup/Restore Operator"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CNI / Add-ons")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flannel"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Canal"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Calico"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Tentatively Planned for 2.6.x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cilium"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multus"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Traefik"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NGINX Ingress"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")))),(0,l.kt)("p",null,"For updated information on feature support, you may visit ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/windows"},"rancher/windows")," on GitHub."))}k.isMDXComponent=!0}}]);