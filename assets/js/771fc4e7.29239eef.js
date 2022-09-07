"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[92296],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47704:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={title:"Creating an Aliyun ACK Cluster",shortTitle:"Alibaba Cloud Container Service for Kubernetes",weight:2120},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba",title:"Creating an Aliyun ACK Cluster",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Creating an Aliyun ACK Cluster",shortTitle:"Alibaba Cloud Container Service for Kubernetes",weight:2120},sidebar:"tutorialSidebar",previous:{title:"Creating an AKS Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"},next:{title:"Creating a Tencent TKE Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create an ACK Cluster",id:"create-an-ack-cluster",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,s.kt)("p",null,"You can use Rancher to create a cluster hosted in Alibaba Cloud Kubernetes (ACK). Rancher has already implemented and packaged the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},"cluster driver")," for ACK, but by default, this cluster driver is ",(0,s.kt)("inlineCode",{parentName:"p"},"inactive"),". In order to launch ACK clusters, you will need to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers#activating-deactivating-cluster-drivers"},"enable the ACK cluster driver"),". After enabling the cluster driver, you can start provisioning ACK clusters."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to ACK will incur charges.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In Aliyun, activate the following services in their respective consoles."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://cs.console.aliyun.com"},"Container Service")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ros.console.aliyun.com"},"Resource Orchestration Service")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ram.console.aliyun.com"},"RAM")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Make sure that the account you will be using to create the ACK cluster has the appropriate permissions. Referring to the official Alibaba Cloud documentation about ",(0,s.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/86483.htm"},"Role authorization")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/86484.htm"},"Use the Container Service console as a RAM user")," for details.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In Alibaba Cloud, create an ",(0,s.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/53045.html"},"access key"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In Alibaba Cloud, create an ",(0,s.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/51793.html"},"SSH key pair"),". This key is used to access nodes in the Kubernetes cluster."))),(0,s.kt)("h2",{id:"create-an-ack-cluster"},"Create an ACK Cluster"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the ",(0,s.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,s.kt)("strong",{parentName:"p"},"Add Cluster"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Choose ",(0,s.kt)("strong",{parentName:"p"},"Alibaba ACK"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter a ",(0,s.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Use ",(0,s.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,s.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,s.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Configure ",(0,s.kt)("strong",{parentName:"p"},"Account Access")," for the ACK cluster. Choose the geographical region in which to build your cluster, and input the access key that was created as part of the prerequisite steps.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Next: Configure Cluster"),", then choose cluster type, the version of Kubernetes and the availability zone.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If you choose ",(0,s.kt)("strong",{parentName:"p"},"Kubernetes")," as the cluster type, Click ",(0,s.kt)("strong",{parentName:"p"},"Next: Configure Master Nodes"),", then complete the ",(0,s.kt)("strong",{parentName:"p"},"Master Nodes")," form.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Next: Configure Worker Nodes"),", then complete the ",(0,s.kt)("strong",{parentName:"p"},"Worker Nodes")," form.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Review your options to confirm they're correct. Then click ",(0,s.kt)("strong",{parentName:"p"},"Create"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," "),(0,s.kt)("p",null,"Your cluster is created and assigned a state of ",(0,s.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,s.kt)("p",null,"You can access your cluster after its state is updated to ",(0,s.kt)("strong",{parentName:"p"},"Active.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,s.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,s.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))}m.isMDXComponent=!0}}]);