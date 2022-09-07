"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27656],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49892:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate",weight:3060},c=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication.md",tags:[],version:"current",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate",weight:3060},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},next:{title:"ConfigMaps",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"}},l={},p=[{value:"1. Create a Secret",id:"1-create-a-secret",level:3},{value:"2. Add the Secret to an Ingress",id:"2-add-the-secret-to-an-ingress",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you create an ingress within Rancher/Kubernetes, you must provide it with a secret that includes a TLS private key and certificate, which are used to encrypt and decrypt communications that come through the ingress. You can make certificates available for ingress use by adding the certificate to the ingress deployment."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must have a TLS private key and certificate available to upload."))),(0,o.kt)("h3",{id:"1-create-a-secret"},"1. Create a Secret"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster where you want to deploy your ingress and click ",(0,o.kt)("strong",{parentName:"li"},"More Resources > Core > Secrets"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"TLS Certificate"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a name for the secret. Note: Your secret must have a unique name among the other certificates, registries, and secrets within your project/workspace."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Private Key")," field, either copy and paste your certificate's private key into the text box (include the header and footer), or click ",(0,o.kt)("strong",{parentName:"li"},"Read from a file")," to browse to the private key on your file system. If possible, we recommend using ",(0,o.kt)("strong",{parentName:"li"},"Read from a file")," to reduce likelihood of error. Note: Private key files end with an extension of ",(0,o.kt)("inlineCode",{parentName:"li"},".key"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Certificate")," field, either copy and paste your certificate into the text box (include the header and footer), or click ",(0,o.kt)("strong",{parentName:"li"},"Read from a file")," to browse to the certificate on your file system. If possible, we recommend using ",(0,o.kt)("strong",{parentName:"li"},"Read from a file")," to reduce likelihood of error. Note: Certificate files end with an extension of ",(0,o.kt)("inlineCode",{parentName:"li"},".crt"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("h3",{id:"2-add-the-secret-to-an-ingress"},"2. Add the Secret to an Ingress"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the cluster where you want to deploy your ingress and click ",(0,o.kt)("strong",{parentName:"li"},"Service Discovery > Ingresses"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Namespace")," of the ingress."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for the ingress."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Certificates")," tab, select the secret containing your certificate and private key."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Now you can add the certificate when launching an ingress within the current project or namespace. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},"Adding Ingress"),"."))}m.isMDXComponent=!0}}]);