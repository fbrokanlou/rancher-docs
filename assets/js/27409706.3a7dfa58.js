"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43151],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Flows and ClusterFlows",weight:1},s=void 0,u={unversionedId:"explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",id:"explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",title:"Flows and ClusterFlows",description:"For the full details on configuring Flows and ClusterFlows, see the Banzai Cloud Logging operator documentation.",source:"@site/docs/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows.md",sourceDirName:"explanations/integrations-in-rancher/logging/custom-resource-configuration",slug:"/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",permalink:"/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows.md",tags:[],version:"current",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Flows and ClusterFlows",weight:1},sidebar:"tutorialSidebar",previous:{title:"Custom Resource Configuration",permalink:"/pages-for-subheaders/custom-resource-configuration"},next:{title:"Outputs and ClusterOutputs",permalink:"/explanations/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"}},c={},p=[{value:"Matches",id:"matches",level:3},{value:"Filters",id:"filters",level:3},{value:"Outputs",id:"outputs",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For the full details on configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),", see the ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/flow/"},"Banzai Cloud Logging operator documentation.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#yaml-example"},"YAML Example"))),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#flows"},"Flows"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#matches"},"Matches")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#filters"},"Filters")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#outputs"},"Outputs")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#clusterflows"},"ClusterFlows"))),(0,a.kt)("h1",{id:"flows"},"Flows"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," defines which logs to collect and filter and which output to send the logs to."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," is a namespaced resource, which means logs will only be collected from the namespace that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," is deployed in."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Flows")," can be configured by filling out forms in the Rancher UI. "),(0,a.kt)("p",null,"For more details about the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," custom resource, see ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/flow_types/"},"FlowSpec.")),(0,a.kt)("h3",{id:"matches"},"Matches"),(0,a.kt)("p",null,"Match statements are used to select which containers to pull logs from."),(0,a.kt)("p",null,"You can specify match statements to select or exclude logs according to Kubernetes labels, container and host names. Match statements are evaluated in the order they are defined and processed only until the first matching select or exclude rule applies."),(0,a.kt)("p",null,"Matches can be configured by filling out the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," forms in the Rancher UI."),(0,a.kt)("p",null,"For detailed examples on using the match statement, see the ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/log-routing/"},"official documentation on log routing.")),(0,a.kt)("h3",{id:"filters"},"Filters"),(0,a.kt)("p",null,"You can define one or more filters within a ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow"),". Filters can perform various actions on the logs, for example, add additional data, transform the logs, or parse values from the records. The filters in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," are applied in the order in the definition."),(0,a.kt)("p",null,"For a list of filters supported by the Banzai Cloud Logging operator, see ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/filters/"},"this page.")),(0,a.kt)("p",null,"Filters need to be configured in YAML."),(0,a.kt)("h3",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"Output")," will receive logs from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow"),". Because the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," is a namespaced resource, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Output")," must reside in same namespace as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Outputs")," can be referenced when filling out the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," forms in the Rancher UI."),(0,a.kt)("h1",{id:"clusterflows"},"ClusterFlows"),(0,a.kt)("p",null,"Matches, filters and ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs")," are configured for ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," in the same way that they are configured for ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows"),". The key difference is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," is scoped at the cluster level and can configure log collection across all namespaces."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," can be configured by filling out forms in the Rancher UI."),(0,a.kt)("p",null,"After ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," selects logs from all namespaces in the cluster, logs from the cluster will be collected and logged to the selected ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,a.kt)("h1",{id:"yaml-example"},"YAML Example"),(0,a.kt)("p",null,"The following example ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," transforms the log messages from the default namespace and sends them to an S3 ",(0,a.kt)("inlineCode",{parentName:"p"},"Output"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: flow-sample\n  namespace: default\nspec:\n  filters:\n    - parser:\n        remove_key_name_field: true\n        parse:\n          type: nginx\n    - tag_normaliser:\n        format: ${namespace_name}.${pod_name}.${container_name}\n  localOutputRefs:\n    - s3-output\n  match:\n    - select:\n        labels:\n          app: nginx\n")))}m.isMDXComponent=!0}}]);