"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9613],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},68046:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={title:"Creating Credentials in the vSphere Console",weight:3},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",title:"Creating Credentials in the vSphere Console",description:"This section describes how to create a vSphere username and password. You will need to provide these vSphere credentials to Rancher, which allows Rancher to provision resources in vSphere.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials.md",tags:[],version:"current",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Creating Credentials in the vSphere Console",weight:3},sidebar:"tutorialSidebar",previous:{title:"Provisioning Kubernetes Clusters in vSphere",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"},next:{title:"Creating a vSphere Virtual Machine Template",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template"}},u={},c=[],h={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes how to create a vSphere username and password. You will need to provide these vSphere credentials to Rancher, which allows Rancher to provision resources in vSphere."),(0,i.kt)("p",null,"The following table lists the permissions required for the vSphere user account:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Privilege Group"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Operations"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Datastore"),(0,i.kt)("td",{parentName:"tr",align:"left"},"AllocateSpace ",(0,i.kt)("br",null)," Browse ",(0,i.kt)("br",null)," FileManagement (Low level file operations) ",(0,i.kt)("br",null)," UpdateVirtualMachineFiles ",(0,i.kt)("br",null)," UpdateVirtualMachineMetadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Global"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set custom attribute")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Network"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Assign")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Resource"),(0,i.kt)("td",{parentName:"tr",align:"left"},"AssignVMToPool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Virtual Machine"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Config (All) ",(0,i.kt)("br",null)," GuestOperations (All) ",(0,i.kt)("br",null)," Interact (All) ",(0,i.kt)("br",null)," Inventory (All) ",(0,i.kt)("br",null)," Provisioning (All)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"vSphere Tagging"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Assign or Unassign vSphere Tag ",(0,i.kt)("br",null)," Assign or Unassign vSphere Tag on Object")))),(0,i.kt)("p",null,"The following steps create a role with the required privileges and then assign it to a new user in the vSphere console:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"vSphere")," console, go to the ",(0,i.kt)("strong",{parentName:"p"},"Administration")," page.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Roles")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new role.  Give it a name and select the privileges listed in the permissions table above."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(49802).Z,width:"3360",height:"2100"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Users and Groups")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new user. Fill out the form and then click ",(0,i.kt)("strong",{parentName:"p"},"OK"),". Make sure to note the username and password, because you will need it when configuring node templates in Rancher."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(31221).Z,width:"3360",height:"2100"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Global Permissions")," tab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new Global Permission. Add the user you created earlier and assign it the role you created earlier. Click ",(0,i.kt)("strong",{parentName:"p"},"OK"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(20399).Z,width:"3360",height:"2100"})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(41489).Z,width:"3360",height:"2100"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," You now have credentials that Rancher can use to manipulate vSphere resources."))}d.isMDXComponent=!0},41489:function(e,t,r){t.Z=r.p+"assets/images/globalpermissionrole-75b571d28828939a3a5b9b133cd0e7f4.png"},20399:function(e,t,r){t.Z=r.p+"assets/images/globalpermissionuser-6629c43e22f678b8197ec3775b82ab20.png"},49802:function(e,t,r){t.Z=r.p+"assets/images/rancherroles1-45cbc752f9456c0a0dc646e79bf3e4a0.png"},31221:function(e,t,r){t.Z=r.p+"assets/images/rancheruser-cc7f8540d23135de045bf01a67b35abd.png"}}]);