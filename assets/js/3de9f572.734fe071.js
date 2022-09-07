"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59359],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||n;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},95302:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"Overriding the Default Limit for a Namespace",weight:2,aliases:["/rancher/v2.x/en/project-admin/resource-quotas/override-namespace-default/"]},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",id:"version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",title:"Overriding the Default Limit for a Namespace",description:"Although the Namespace Default Limit propagates from the project to each namespace when created, in some cases, you may need to increase (or decrease) the quotas for a specific namespace. In this situation, you can override the default limits by editing the namespace.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces.md",tags:[],version:"2.5",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Overriding the Default Limit for a Namespace",weight:2,aliases:["/rancher/v2.x/en/project-admin/resource-quotas/override-namespace-default/"]},sidebar:"tutorialSidebar",previous:{title:"How Resource Quotas Work in Rancher Projects",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas"},next:{title:"Setting Container Default Resource Limits",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"}},p={},m=[{value:"Editing Namespace Resource Quotas",id:"editing-namespace-resource-quotas",level:3}],l={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Although the ",(0,n.kt)("strong",{parentName:"p"},"Namespace Default Limit")," propagates from the project to each namespace when created, in some cases, you may need to increase (or decrease) the quotas for a specific namespace. In this situation, you can override the default limits by editing the namespace."),(0,n.kt)("p",null,"In the diagram below, the Rancher administrator has a resource quota in effect for their project. However, the administrator wants to override the namespace limits for ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace 3")," so that it has more resources available. Therefore, the administrator ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"raises the namespace limits")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace 3")," so that the namespace can access more resources."),(0,n.kt)("sup",null,"Namespace Default Limit Override"),"![Namespace Default Limit Override](/img/rancher-resource-quota-override.svg)",(0,n.kt)("p",null,"How to: ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Editing Namespace Resource Quotas")),(0,n.kt)("h3",{id:"editing-namespace-resource-quotas"},"Editing Namespace Resource Quotas"),(0,n.kt)("p",null,"If there is a ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"resource quota")," configured for a project, you can override the namespace default limit to provide a specific namespace with access to more (or less) project resources."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, open the cluster that contains the namespace for which you want to edit the resource quota.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main menu, select ",(0,n.kt)("strong",{parentName:"p"},"Projects/Namespaces"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the namespace for which you want to edit the resource quota. Select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the Resource Quota ",(0,n.kt)("strong",{parentName:"p"},"Limits"),".  These limits determine the resources available to the namespace. The limits must be set within the configured project limits."),(0,n.kt)("p",{parentName:"li"},"For more information about each ",(0,n.kt)("strong",{parentName:"p"},"Resource Type"),", see ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"Resource Quotas"),"."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"If a resource quota is not configured for the project, these options will not be available."),(0,n.kt)("li",{parentName:"ul"},"If you enter limits that exceed the configured project limits, Rancher will not let you save your edits."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Your override is applied to the namespace's resource quota."))}d.isMDXComponent=!0}}]);