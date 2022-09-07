"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51409],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),n=a(86010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,o),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(87462),n=a(67294),i=a(86010),o=a(72389),l=a(67392),s=a(7094),c=a(12466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,h=e.groupId,v=e.className,g=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,x=(0,n.useState)(y),E=x[0],O=x[1],C=[],R=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var j=w[h];null!=j&&j!==E&&k.some((function(e){return e.value===j}))&&O(j)}var Z=function(e){var t=e.currentTarget,a=C.indexOf(t),r=k[a].value;r!==E&&(R(t),O(r),null!=h&&T(h,String(r)))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=C.indexOf(e.currentTarget)+1;a=null!=(r=C[n])?r:C[0];break;case"ArrowLeft":var i,o=C.indexOf(e.currentTarget)-1;a=null!=(i=C[o])?i:C[C.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},v)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},39249:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=a(65488),l=a(85162),s=["components"],c={title:"Certificate Rotation",weight:2040},u=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",id:"how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",title:"Certificate Rotation",description:"Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates.md",tags:[],version:"current",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Certificate Rotation",weight:2040},sidebar:"tutorialSidebar",previous:{title:"Cloning Clusters",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},next:{title:"Nodes and Node Pools",permalink:"/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"}},p={},m=[{value:"Certificate Rotation",id:"certificate-rotation",level:3},{value:"Additional Notes",id:"additional-notes",level:3}],f={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window."))),(0,i.kt)("p",null,"By default, Kubernetes clusters require certificates and Rancher launched Kubernetes clusters automatically generate  certificates for the Kubernetes components. Rotating these certificates is important before the certificates expire as well as if a certificate is compromised. After the certificates are rotated, the Kubernetes components are automatically restarted."),(0,i.kt)("p",null,"Certificates can be rotated for the following services:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"RKE",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"etcd"),(0,i.kt)("li",{parentName:"ul"},"kubelet (node certificate)"),(0,i.kt)("li",{parentName:"ul"},"kubelet (serving certificate, if ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/services/#kubelet-options"},"enabled"),")"),(0,i.kt)("li",{parentName:"ul"},"kube-apiserver"),(0,i.kt)("li",{parentName:"ul"},"kube-proxy"),(0,i.kt)("li",{parentName:"ul"},"kube-scheduler"),(0,i.kt)("li",{parentName:"ul"},"kube-controller-manager"))),(0,i.kt)(l.Z,{value:"RKE2",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"admin"),(0,i.kt)("li",{parentName:"ul"},"api-server"),(0,i.kt)("li",{parentName:"ul"},"controller-manager"),(0,i.kt)("li",{parentName:"ul"},"scheduler"),(0,i.kt)("li",{parentName:"ul"},"rke2-controller"),(0,i.kt)("li",{parentName:"ul"},"rke2-server"),(0,i.kt)("li",{parentName:"ul"},"cloud-controller"),(0,i.kt)("li",{parentName:"ul"},"etcd"),(0,i.kt)("li",{parentName:"ul"},"auth-proxy"),(0,i.kt)("li",{parentName:"ul"},"kubelet"),(0,i.kt)("li",{parentName:"ul"},"kube-proxy")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For users who didn't rotate their webhook certificates, and they have expired after one year, please see this ",(0,i.kt)("a",{parentName:"p",href:"/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"},"page")," for help."))),(0,i.kt)("h3",{id:"certificate-rotation"},"Certificate Rotation"),(0,i.kt)("p",null,"Rancher launched Kubernetes clusters have the ability to rotate the auto-generated certificates through the UI."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster you want to rotate certificates for amd click ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > Rotate Certificates"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select which certificates that you want to rotate."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rotate all Service certificates (keep the same CA)"),(0,i.kt)("li",{parentName:"ul"},"Rotate an individual service and choose one of the services from the drop-down menu"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Results:")," The selected certificates will be rotated and the related services will be restarted to start using the new certificate."),(0,i.kt)("h3",{id:"additional-notes"},"Additional Notes"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"RKE",mdxType:"TabItem"},(0,i.kt)("p",null,"Even though the RKE CLI can use custom certificates for the Kubernetes cluster components, Rancher currently doesn't allow the ability to upload these in Rancher launched Kubernetes clusters.")),(0,i.kt)(l.Z,{value:"RKE2",mdxType:"TabItem"},(0,i.kt)("p",null,"In RKE2, both etcd and control plane nodes are treated as the same ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," concept. As such, when rotating certificates of services specific to either of these components will result in certificates being rotated on both. The certificates will only change for the specified service, but you will see nodes for both components go into an updating state. You may also see worker only nodes go into an updating state. This is to restart the workers after a certificate change to ensure they get the latest client certs."))))}h.isMDXComponent=!0}}]);