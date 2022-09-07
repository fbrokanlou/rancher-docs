"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80352],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return h}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,v=d["".concat(a,".").concat(h)]||d[h]||l[h]||i;return t?n.createElement(v,s(s({ref:r},p),{},{components:t})):n.createElement(v,s({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28497:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],u={title:"Setting up the vSphere Cloud Provider",weight:4},a=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere",title:"Setting up the vSphere Cloud Provider",description:"In this section, you'll learn how to set up the vSphere cloud provider for a Rancher managed RKE Kubernetes cluster in vSphere.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Setting up the vSphere Cloud Provider",weight:4},sidebar:"tutorialSidebar",previous:{title:"Setting up the Google Compute Engine Cloud Provider",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine"},next:{title:"Rancher Agents",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"}},p={},l=[],d={toc:l};function h(e){var r=e.components,u=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,u,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, you'll learn how to set up the vSphere cloud provider for a Rancher managed RKE Kubernetes cluster in vSphere."),(0,i.kt)("p",null,"Follow these steps while creating the vSphere cluster in Rancher:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("strong",{parentName:"p"},"Cloud Provider")," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:t(22394).Z,width:"750",height:"514"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Edit as YAML"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Insert the following structure to the pre-populated cluster YAML. As of Rancher v2.3+, this structure must be placed under ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config"),". In versions before v2.3, it has to be defined as a top-level field. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," ",(0,i.kt)("em",{parentName:"p"},"must")," be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"vsphere"),". "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config: # Required as of Rancher v2.3+\n  cloud_provider:\n      name: vsphere\n      vsphereCloudProvider:\n          [Insert provider configuration]\n")))),(0,i.kt)("p",null,"Rancher uses RKE (the Rancher Kubernetes Engine) to provision Kubernetes clusters. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/vsphere/config-reference/"},"vSphere configuration reference in the RKE documentation")," for details about the properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"vsphereCloudProvider")," directive."))}h.isMDXComponent=!0},22394:function(e,r,t){r.Z=t.p+"assets/images/vsphere-node-driver-cloudprovider-63a1bd74e8578ba477d8d24ab8e25957.png"}}]);