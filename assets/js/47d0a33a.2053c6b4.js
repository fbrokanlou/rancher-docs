"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14374],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(i,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43008:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],s={title:"System Tools",weight:22},i=void 0,p={unversionedId:"reference-guides/system-tools",id:"version-2.0-2.4/reference-guides/system-tools",title:"System Tools",description:"System Tools is a tool to perform operational tasks on Rancher Launched Kubernetes clusters or installations of Rancher on an RKE cluster. The tasks include:",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/system-tools.md",sourceDirName:"reference-guides",slug:"/reference-guides/system-tools",permalink:"/v2.0-v2.4/reference-guides/system-tools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/system-tools.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"System Tools",weight:22},sidebar:"tutorialSidebar",previous:{title:"Project Logging",permalink:"/v2.0-v2.4/reference-guides/rancher-project-tools/project-logging"},next:{title:"Example YAML",permalink:"/v2.0-v2.4/reference-guides/rke1-template-example-yaml"}},m={},u=[{value:"Usage",id:"usage",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Usage",id:"usage-2",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"System Tools is a tool to perform operational tasks on ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," clusters or ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"installations of Rancher on an RKE cluster.")," The tasks include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Collect logging and system metrics from nodes."),(0,o.kt)("li",{parentName:"ul"},"Remove Kubernetes resources created by Rancher.")),(0,o.kt)("p",null,"The following commands are available:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#logs"},"logs")),(0,o.kt)("td",{parentName:"tr",align:null},"Collect Kubernetes cluster component logs from nodes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#stats"},"stats")),(0,o.kt)("td",{parentName:"tr",align:null},"Stream system metrics from nodes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#remove"},"remove")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove Kubernetes resources created by Rancher.")))),(0,o.kt)("h1",{id:"download-system-tools"},"Download System Tools"),(0,o.kt)("p",null,"You can download the latest version of System Tools from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-tools/releases/latest"},"GitHub releases page"),". Download the version of ",(0,o.kt)("inlineCode",{parentName:"p"},"system-tools")," for the OS that you are using to interact with the cluster."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,o.kt)("th",{parentName:"tr",align:null},"Filename"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"system-tools_darwin-amd64"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"system-tools_linux-amd64"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Windows"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"system-tools_windows-amd64.exe"))))),(0,o.kt)("p",null,"After you download the tools, complete the following actions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rename the file to ",(0,o.kt)("inlineCode",{parentName:"p"},"system-tools"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give the file executable permissions by running the following command:"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Using Windows?"),"\nThe file is already an executable, you can skip this step.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"chmod +x system-tools\n")))),(0,o.kt)("h1",{id:"logs"},"Logs"),(0,o.kt)("p",null,"The logs subcommand will collect log files of core Kubernetes cluster components from nodes in ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched Kubernetes clusters")," or nodes on an ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"RKE Kubernetes cluster that Rancher is installed on."),". See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/troubleshooting"},"Troubleshooting")," for a list of core Kubernetes cluster components."),(0,o.kt)("p",null,"System Tools will use the provided kubeconfig file to deploy a DaemonSet, that will copy all the logfiles from the core Kubernetes cluster components and add them to a single tar file (",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-logs.tar")," by default). If you only want to collect logging from a single node, you can specify the node by using ",(0,o.kt)("inlineCode",{parentName:"p"},"--node NODENAME")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-n NODENAME"),"."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./system-tools_darwin-amd64 logs --kubeconfig <KUBECONFIG>\n")),(0,o.kt)("p",null,"The following are the options for the logs command:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--kubeconfig <KUBECONFIG_PATH>, -c <KUBECONFIG_PATH>")),(0,o.kt)("td",{parentName:"tr",align:null},"The cluster's kubeconfig file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--output <FILENAME>, -o cluster-logs.tar")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the created tarball containing the logs. If no output filename is defined, the options defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"cluster-logs.tar"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--node <NODENAME>, -n node1")),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the nodes to collect the logs from. If no node is specified, logs from all nodes in the cluster will be collected.")))),(0,o.kt)("h1",{id:"stats"},"Stats"),(0,o.kt)("p",null,"The stats subcommand will display system metrics from nodes in ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched Kubernetes clusters")," or nodes in an ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"RKE Kubernetes cluster that Rancher is installed on."),"."),(0,o.kt)("p",null,"System Tools will deploy a DaemonSet, and run a predefined command based on ",(0,o.kt)("inlineCode",{parentName:"p"},"sar")," (System Activity Report) to show system metrics."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./system-tools_darwin-amd64 stats --kubeconfig <KUBECONFIG>\n")),(0,o.kt)("p",null,"The following are the options for the stats command:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--kubeconfig <KUBECONFIG_PATH>, -c <KUBECONFIG_PATH>")),(0,o.kt)("td",{parentName:"tr",align:null},"The cluster's kubeconfig file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--node <NODENAME>, -n node1")),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the nodes to display the system metrics from. If no node is specified, logs from all nodes in the cluster will be displayed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--stats-command value, -s value")),(0,o.kt)("td",{parentName:"tr",align:null},"The command to run to display the system metrics. If no command is defined, the options defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"/usr/bin/sar -u -r -F 1 1"),".")))),(0,o.kt)("h1",{id:"remove"},"Remove"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning:")," This command will remove data from your etcd nodes. Make sure you have created a ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/backup-restore-and-disaster-recovery"},"backup of etcd")," before executing the command.")),(0,o.kt)("p",null,"When you install Rancher on a Kubernetes cluster, it will create Kubernetes resources to run and to store configuration data. If you want to remove Rancher from your cluster, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," subcommand to remove the Kubernetes resources. When you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," subcommand, the following resources will be removed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Rancher deployment namespace (",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system")," by default)."),(0,o.kt)("li",{parentName:"ul"},"Any ",(0,o.kt)("inlineCode",{parentName:"li"},"serviceAccount"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"clusterRoles"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"clusterRoleBindings")," that Rancher applied the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle.io/creator:norman")," label to. Rancher applies this label to any resource that it creates as of v2.1.0."),(0,o.kt)("li",{parentName:"ul"},"Labels, annotations, and finalizers."),(0,o.kt)("li",{parentName:"ul"},"Rancher Deployment."),(0,o.kt)("li",{parentName:"ul"},"Machines, clusters, projects, and user custom resource deployments (CRDs)."),(0,o.kt)("li",{parentName:"ul"},"All resources create under the ",(0,o.kt)("inlineCode",{parentName:"li"},"management.cattle.io")," API Group."),(0,o.kt)("li",{parentName:"ul"},"All CRDs created by Rancher v2.x.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Using 2.0.8 or Earlier?")),(0,o.kt)("p",{parentName:"blockquote"},"These versions of Rancher do not automatically delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceAccount"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clusterRole"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"clusterRoleBindings")," resources after the job runs. You'll have to delete them yourself.")),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)("p",null,"When you run the command below, all the resources listed ",(0,o.kt)("a",{parentName:"p",href:"#remove"},"above")," will be removed from the cluster."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning:")," This command will remove data from your etcd nodes. Make sure you have created a ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/backup-restore-and-disaster-recovery"},"backup of etcd")," before executing the command.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./system-tools remove --kubeconfig <KUBECONFIG> --namespace <NAMESPACE>\n")),(0,o.kt)("p",null,"The following are the options for the ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," command:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--kubeconfig <KUBECONFIG_PATH>, -c <KUBECONFIG_PATH>")),(0,o.kt)("td",{parentName:"tr",align:null},"The cluster's kubeconfig file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--namespace <NAMESPACE>, -n cattle-system")),(0,o.kt)("td",{parentName:"tr",align:null},"Rancher 2.x deployment namespace (",(0,o.kt)("inlineCode",{parentName:"td"},"<NAMESPACE>"),"). If no namespace is defined, the options defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"cattle-system"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--force")),(0,o.kt)("td",{parentName:"tr",align:null},"Skips the interactive removal confirmation and removes the Rancher deployment without prompt.")))))}c.isMDXComponent=!0}}]);