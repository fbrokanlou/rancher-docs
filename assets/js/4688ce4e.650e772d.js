"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[13838],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(k,l(l({ref:e},d),{},{components:n})):r.createElement(k,l({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2810:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Role-based Access Control",weight:3},s=void 0,u={unversionedId:"explanations/integrations-in-rancher/istio/rbac-for-istio",id:"explanations/integrations-in-rancher/istio/rbac-for-istio",title:"Role-based Access Control",description:"This section describes the permissions required to access Istio features.",source:"@site/docs/explanations/integrations-in-rancher/istio/rbac-for-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/rbac-for-istio",permalink:"/explanations/integrations-in-rancher/istio/rbac-for-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/rbac-for-istio.md",tags:[],version:"current",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Role-based Access Control",weight:3},sidebar:"tutorialSidebar",previous:{title:"CPU and Memory Allocations",permalink:"/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},next:{title:"Disabling Istio",permalink:"/explanations/integrations-in-rancher/istio/disable-istio"}},d={},c=[{value:"Cluster-Admin Access",id:"cluster-admin-access",level:2},{value:"Admin and Edit access",id:"admin-and-edit-access",level:2},{value:"Summary of Default Permissions for Kubernetes Default roles",id:"summary-of-default-permissions-for-kubernetes-default-roles",level:2}],p={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the permissions required to access Istio features."),(0,i.kt)("p",null,"The rancher istio chart installs three ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles")),(0,i.kt)("h2",{id:"cluster-admin-access"},"Cluster-Admin Access"),(0,i.kt)("p",null,"By default, only those with the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install istio app in a cluster"),(0,i.kt)("li",{parentName:"ul"},"Configure resource allocations for Istio")),(0,i.kt)("h2",{id:"admin-and-edit-access"},"Admin and Edit access"),(0,i.kt)("p",null,"By default, only Admin and Edit roles can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable and disable Istio sidecar auto-injection for namespaces"),(0,i.kt)("li",{parentName:"ul"},"Add the Istio sidecar to workloads"),(0,i.kt)("li",{parentName:"ul"},"View the traffic metrics and traffic graph for the cluster"),(0,i.kt)("li",{parentName:"ul"},"Configure Istio's resources (such as the gateway, destination rules, or virtual services)")),(0,i.kt)("h2",{id:"summary-of-default-permissions-for-kubernetes-default-roles"},"Summary of Default Permissions for Kubernetes Default roles"),(0,i.kt)("p",null,"Istio creates three ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," and adds Istio CRD access to the following default K8s ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"ClusterRole create by chart"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Default K8s ClusterRole"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Rancher Role"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"istio-admin")),(0,i.kt)("td",{parentName:"tr",align:"right"},"admin"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Project Owner")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"istio-edit")),(0,i.kt)("td",{parentName:"tr",align:"right"},"edit"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Project Member")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"istio-view")),(0,i.kt)("td",{parentName:"tr",align:"right"},"view"),(0,i.kt)("td",{parentName:"tr",align:"right"},"Read-only")))),(0,i.kt)("p",null,"Rancher will continue to use cluster-owner, cluster-member, project-owner, project-member, etc as role names, but will utilize default roles to determine access. For each default K8s ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," there are different Istio CRD permissions and K8s actions (Create ( C ), Get ( G ), List ( L ), Watch ( W ), Update ( U ), Patch ( P ), Delete( D ), All ( * )) that can be performed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CRDs"),(0,i.kt)("th",{parentName:"tr",align:null},"Admin"),(0,i.kt)("th",{parentName:"tr",align:null},"Edit"),(0,i.kt)("th",{parentName:"tr",align:null},"View"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"config.istio.io")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"adapters")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"attributemanifests")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"handlers")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"httpapispecbindings")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"httpapispecs")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"instances")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"quotaspecbindings")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"quotaspecs")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"rules")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"templates"))))),(0,i.kt)("td",{parentName:"tr",align:null},"GLW"),(0,i.kt)("td",{parentName:"tr",align:null},"GLW"),(0,i.kt)("td",{parentName:"tr",align:null},"GLW")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"networking.istio.io")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"destinationrules")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"envoyfilters")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"gateways")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"serviceentries")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"sidecars")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"virtualservices")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"workloadentries"))))),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"GLW")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"security.istio.io")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"authorizationpolicies")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"peerauthentications")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"requestauthentications"))))),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"GLW")))))}m.isMDXComponent=!0}}]);