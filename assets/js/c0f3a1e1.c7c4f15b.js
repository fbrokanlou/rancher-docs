"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52746],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1296:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"CPU and Memory Allocations",weight:1},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",id:"explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",title:"CPU and Memory Allocations",description:"This section describes the minimum recommended computing resources for the Istio components in a cluster.",source:"@site/docs/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",permalink:"/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations.md",tags:[],version:"current",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"CPU and Memory Allocations",weight:1},sidebar:"tutorialSidebar",previous:{title:"Istio",permalink:"/pages-for-subheaders/istio"},next:{title:"Role-based Access Control",permalink:"/explanations/integrations-in-rancher/istio/rbac-for-istio"}},m={},p=[{value:"Editing the Overlay File",id:"editing-the-overlay-file",level:3}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes the minimum recommended computing resources for the Istio components in a cluster."),(0,o.kt)("p",null,"The CPU and memory allocations for each component are ",(0,o.kt)("a",{parentName:"p",href:"#configuring-resource-allocations"},"configurable.")),(0,o.kt)("p",null,"Before enabling Istio, we recommend that you confirm that your Rancher worker nodes have enough CPU and memory to run all of the components of Istio."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In larger deployments, it is strongly advised that the infrastructure be placed on dedicated nodes in the cluster by adding a node selector for each Istio component."))),(0,o.kt)("p",null,"The table below shows a summary of the minimum recommended resource requests and limits for the CPU and memory of each core Istio component."),(0,o.kt)("p",null,"In Kubernetes, the resource request indicates that the workload will not deployed on a node unless the node has at least the specified amount of memory and CPU available. If the workload surpasses the limit for CPU or memory, it can be terminated or evicted from the node. For more information on managing resource limits for containers, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"Kubernetes documentation.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Workload"),(0,o.kt)("th",{parentName:"tr",align:null},"CPU - Request"),(0,o.kt)("th",{parentName:"tr",align:null},"Memory - Request"),(0,o.kt)("th",{parentName:"tr",align:null},"CPU - Limit"),(0,o.kt)("th",{parentName:"tr",align:null},"Memory - Limit"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ingress gateway"),(0,o.kt)("td",{parentName:"tr",align:null},"100m"),(0,o.kt)("td",{parentName:"tr",align:null},"128mi"),(0,o.kt)("td",{parentName:"tr",align:null},"2000m"),(0,o.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"egress gateway"),(0,o.kt)("td",{parentName:"tr",align:null},"100m"),(0,o.kt)("td",{parentName:"tr",align:null},"128mi"),(0,o.kt)("td",{parentName:"tr",align:null},"2000m"),(0,o.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"istiod"),(0,o.kt)("td",{parentName:"tr",align:null},"500m"),(0,o.kt)("td",{parentName:"tr",align:null},"2048mi"),(0,o.kt)("td",{parentName:"tr",align:null},"No limit"),(0,o.kt)("td",{parentName:"tr",align:null},"No limit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"proxy"),(0,o.kt)("td",{parentName:"tr",align:null},"10m"),(0,o.kt)("td",{parentName:"tr",align:null},"10mi"),(0,o.kt)("td",{parentName:"tr",align:null},"2000m"),(0,o.kt)("td",{parentName:"tr",align:null},"1024mi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Totals:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"710m")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"2314Mi")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"6000m")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"3072Mi"))))),(0,o.kt)("h1",{id:"configuring-resource-allocations"},"Configuring Resource Allocations"),(0,o.kt)("p",null,"You can individually configure the resource allocation for each type of Istio component. This section includes the default resource allocations for each component."),(0,o.kt)("p",null,"To make it easier to schedule the workloads to a node, a cluster-admin can reduce the CPU and memory resource requests for the component. However, the default CPU and memory allocations are the minimum that we recommend."),(0,o.kt)("p",null,"You can find more information about Istio configuration in the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/"},"official Istio documentation"),"."),(0,o.kt)("p",null,"To configure the resources allocated to an Istio component,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Installed Apps"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace. In one of the Istio workloads, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-istio"),", click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit/Upgrade"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Upgrade")," to edit the base components via changes to the values.yaml or add an ",(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/configuration-options#overlay-file"},"overlay file"),". For more information about editing the overlay file, see ",(0,o.kt)("a",{parentName:"li",href:"/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations#editing-the-overlay-file"},"this section.")),(0,o.kt)("li",{parentName:"ol"},"Change the CPU or memory allocations, the nodes where each component will be scheduled to, or the node tolerations."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Upgrade"),". to rollout changes")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The resource allocations for the Istio components are updated."),(0,o.kt)("h3",{id:"editing-the-overlay-file"},"Editing the Overlay File"),(0,o.kt)("p",null,"The overlay file can contain any of the values in the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/reference/config/istio.operator.v1alpha1/#IstioOperatorSpec"},"Istio Operator spec.")," The overlay file included with the Istio application is just one example of a potential configuration of the overlay file."),(0,o.kt)("p",null,"As long as the file contains ",(0,o.kt)("inlineCode",{parentName:"p"},"kind: IstioOperator")," and the YAML options are valid, the file can be used as an overlay."),(0,o.kt)("p",null,"In the example overlay file provided with the Istio application, the following section allows you to change Kubernetes resources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#      k8s:\n#        resources:\n#          requests:\n#            cpu: 200m\n")))}d.isMDXComponent=!0}}]);