"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90674],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=o,v=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85502:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={title:"Creating a vSphere Cluster",shortTitle:"vSphere",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-vsphere/"]},l=void 0,p={unversionedId:"pages-for-subheaders/vsphere",id:"version-2.0-2.4/pages-for-subheaders/vsphere",title:"Creating a vSphere Cluster",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/vsphere.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/vsphere",permalink:"/v2.0-v2.4/pages-for-subheaders/vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/vsphere.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Creating a vSphere Cluster",shortTitle:"vSphere",description:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",metaDescription:"Use Rancher to create a vSphere cluster. It may consist of groups of VMs with distinct properties which allow for fine-grained control over the sizing of nodes.",weight:2225,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-vsphere/"]},sidebar:"tutorialSidebar",previous:{title:"Creating an Azure Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster"},next:{title:"Provisioning Kubernetes Clusters in vSphere",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"}},u={},c=[{value:"Self-healing Node Pools",id:"self-healing-node-pools",level:3},{value:"Dynamically Populated Options for Instances and Scheduling",id:"dynamically-populated-options-for-instances-and-scheduling",level:3},{value:"More Supported Operating Systems",id:"more-supported-operating-systems",level:3},{value:"Video Walkthrough of v2.3.3 Node Template Features",id:"video-walkthrough-of-v233-node-template-features",level:3}],h={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"By using Rancher with vSphere, you can bring cloud operations on-premises."),(0,s.kt)("p",null,"Rancher can provision nodes in vSphere and install Kubernetes on them. When creating a Kubernetes cluster in vSphere, Rancher first provisions the specified number of virtual machines by communicating with the vCenter API. Then it installs Kubernetes on top of them."),(0,s.kt)("p",null,"A vSphere cluster may consist of multiple groups of VMs with distinct properties, such as the amount of memory or the number of vCPUs. This grouping allows for fine-grained control over the sizing of nodes for each Kubernetes role."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#vsphere-enhancements-in-rancher-v2-3"},"vSphere Enhancements in Rancher v2.3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#creating-a-vsphere-cluster"},"Creating a vSphere Cluster")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#provisioning-storage"},"Provisioning Storage")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#enabling-the-vsphere-cloud-provider"},"Enabling the vSphere Cloud Provider"))),(0,s.kt)("h1",{id:"vsphere-enhancements-in-rancher-v23"},"vSphere Enhancements in Rancher v2.3"),(0,s.kt)("p",null,"The vSphere node templates have been updated, allowing you to bring cloud operations on-premises with the following enhancements:"),(0,s.kt)("h3",{id:"self-healing-node-pools"},"Self-healing Node Pools"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,s.kt)("p",null,"One of the biggest advantages of provisioning vSphere nodes with Rancher is that it allows you to take advantage of Rancher's self-healing node pools, also called the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace feature,")," in your on-premises clusters. Self-healing node pools are designed to help you replace worker nodes for stateless applications. When Rancher provisions nodes from a node template, Rancher can automatically replace unreachable nodes."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Important:")," It is not recommended to enable node auto-replace on a node pool of master nodes or nodes with persistent volumes attached, because VMs are treated ephemerally. When a node in a node pool loses connectivity with the cluster, its persistent volumes are destroyed, resulting in data loss for stateful applications.")),(0,s.kt)("h3",{id:"dynamically-populated-options-for-instances-and-scheduling"},"Dynamically Populated Options for Instances and Scheduling"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.3.3")),(0,s.kt)("p",null,"Node templates for vSphere have been updated so that when you create a node template with your vSphere credentials, the template is automatically populated with the same options for provisioning VMs that you have access to in the vSphere console."),(0,s.kt)("p",null,"For the fields to be populated, your setup needs to fulfill the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere#prerequisites"},"prerequisites.")),(0,s.kt)("h3",{id:"more-supported-operating-systems"},"More Supported Operating Systems"),(0,s.kt)("p",null,"In Rancher v2.3.3+, you can provision VMs with any operating system that supports ",(0,s.kt)("inlineCode",{parentName:"p"},"cloud-init"),". Only YAML format is supported for the ",(0,s.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/examples.html"},"cloud config.")),(0,s.kt)("p",null,"In Rancher before v2.3.3, the vSphere node driver included in Rancher only supported the provisioning of VMs with ",(0,s.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/os/v1.x/en/"},"RancherOS")," as the guest operating system."),(0,s.kt)("h3",{id:"video-walkthrough-of-v233-node-template-features"},"Video Walkthrough of v2.3.3 Node Template Features"),(0,s.kt)("p",null,"In this YouTube video, we demonstrate how to set up a node template with the new features designed to help you bring cloud operations to on-premises clusters."),(0,s.kt)("p",null,'{{< youtube id="dPIwg6x1AlU">}}'),(0,s.kt)("h1",{id:"creating-a-vsphere-cluster"},"Creating a vSphere Cluster"),(0,s.kt)("p",null,"In ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere"},"this section,")," you'll learn how to use Rancher to install an ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in vSphere."),(0,s.kt)("h1",{id:"provisioning-storage"},"Provisioning Storage"),(0,s.kt)("p",null,"For an example of how to provision storage in vSphere using Rancher, refer to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},"this section.")," In order to dynamically provision storage in vSphere, the vSphere provider must be ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},"enabled.")),(0,s.kt)("h1",{id:"enabling-the-vsphere-cloud-provider"},"Enabling the vSphere Cloud Provider"),(0,s.kt)("p",null,"When a cloud provider is set up in Rancher, the Rancher server can automatically provision new infrastructure for the cluster, including new nodes or persistent storage devices."),(0,s.kt)("p",null,"For details, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},"enabling the vSphere cloud provider.")))}d.isMDXComponent=!0}}]);