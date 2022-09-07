"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65643],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),s=n(67392),o=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,h=e.defaultValue,m=e.values,k=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),K=N.tabGroupChoices,w=N.setTabGroupChoices,R=(0,r.useState)(y),C=R[0],I=R[1],E=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=K[k];null!=S&&S!==C&&b.some((function(e){return e.value===S}))&&I(S)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==C&&(T(t),I(a),null!=k&&w(k,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;n=null!=(l=E[i])?l:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:_,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},99667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(65488),s=n(85162),o=["components"],u={title:"3. Install Kubernetes (Skip for Docker Installs)",weight:300,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/install-kube"]},c=void 0,p={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",id:"version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",title:"3. Install Kubernetes (Skip for Docker Installs)",description:"Skip this section if you are installing Rancher on a single node with Docker.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"3. Install Kubernetes (Skip for Docker Installs)",weight:300,aliases:["/rancher/v2.0-v2.4/en/installation/air-gap-high-availability/install-kube"]},sidebar:"tutorialSidebar",previous:{title:"2. Collect and Publish Images to your Private Registry",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},next:{title:"4. Install Rancher",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"}},d={},h=[{value:"Installation Outline",id:"installation-outline",level:3},{value:"1. Prepare Images Directory",id:"1-prepare-images-directory",level:3},{value:"2. Create Registry YAML",id:"2-create-registry-yaml",level:3},{value:"3. Install K3s",id:"3-install-k3s",level:3},{value:"4. Save and Start Using the kubeconfig File",id:"4-save-and-start-using-the-kubeconfig-file",level:3},{value:"Note on Upgrading",id:"note-on-upgrading",level:3},{value:"1. Install RKE",id:"1-install-rke",level:3},{value:"2. Create an RKE Config File",id:"2-create-an-rke-config-file",level:3},{value:"3. Run RKE",id:"3-run-rke",level:3},{value:"4. Save Your Files",id:"4-save-your-files",level:3},{value:"Issues or errors?",id:"issues-or-errors",level:3},{value:"Next: Install Rancher",id:"next-install-rancher",level:3}],m={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Skip this section if you are installing Rancher on a single node with Docker.")),(0,l.kt)("p",null,"This section describes how to install a Kubernetes cluster according to our ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/architecture-recommendations#environment-for-kubernetes-installations"},"best practices for the Rancher server environment.")," This cluster should be dedicated to run only the Rancher server."),(0,l.kt)("p",null,"For Rancher before v2.4, Rancher should be installed on an ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," (Rancher Kubernetes Engine) Kubernetes cluster. RKE is a CNCF-certified Kubernetes distribution that runs entirely within Docker containers."),(0,l.kt)("p",null,"In Rancher v2.4, the Rancher management server can be installed on either an RKE cluster or a K3s Kubernetes cluster. K3s is also a fully certified Kubernetes distribution released by Rancher, but is newer than RKE. We recommend installing Rancher on K3s because K3s is easier to use, and more lightweight, with a binary size of less than 100 MB. The Rancher management server can only be run on a Kubernetes cluster in an infrastructure provider where Kubernetes is installed using RKE or K3s. Use of Rancher on hosted Kubernetes providers, such as EKS, is not supported. Note: After Rancher is installed on an RKE cluster, there is no migration path to a K3s setup at this time."),(0,l.kt)("p",null,"The steps to set up an air-gapped Kubernetes cluster on RKE or K3s are shown below."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"K3s",mdxType:"TabItem"},(0,l.kt)("p",null,"In this guide, we are assuming you have created your nodes in your air gapped environment and have a secure Docker private registry on your bastion server."),(0,l.kt)("h3",{id:"installation-outline"},"Installation Outline"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-prepare-images-directory"},"Prepare Images Directory")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-create-registry-yaml"},"Create Registry YAML")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-install-k3s"},"Install K3s")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-save-and-start-using-the-kubeconfig-file"},"Save and Start Using the kubeconfig File"))),(0,l.kt)("h3",{id:"1-prepare-images-directory"},"1. Prepare Images Directory"),(0,l.kt)("p",null,"Obtain the images tar file for your architecture from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/releases"},"releases")," page for the version of K3s you will be running."),(0,l.kt)("p",null,"Place the tar file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"images")," directory before starting K3s on each node, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/\n")),(0,l.kt)("h3",{id:"2-create-registry-yaml"},"2. Create Registry YAML"),(0,l.kt)("p",null,"Create the registries.yaml file at ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/registries.yaml"),". This will tell K3s the necessary details to connect to your private registry."),(0,l.kt)("p",null,"The registries.yaml file should look like this before plugging in the necessary information:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'---\nmirrors:\n  customreg:\n    endpoint:\n      - "https://ip-to-server:5000"\nconfigs:\n  customreg:\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: <path to the cert file used in the registry>\n      key_file:  <path to the key file used in the registry>\n      ca_file: <path to the ca file used in the registry>\n')),(0,l.kt)("p",null,"Note, at this time only secure registries are supported with K3s (SSL with custom CA)."),(0,l.kt)("p",null,"For more information on private registries configuration file for K3s, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"K3s documentation.")),(0,l.kt)("h3",{id:"3-install-k3s"},"3. Install K3s"),(0,l.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,l.kt)("p",null,"To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script."),(0,l.kt)("p",null,"Obtain the K3s binary from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/releases"},"releases")," page, matching the same version used to get the airgap images tar.\nAlso obtain the K3s install script at ",(0,l.kt)("a",{parentName:"p",href:"https://get.k3s.io"},"https://get.k3s.io")),(0,l.kt)("p",null,"Place the binary in ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," on each node.\nPlace the install script anywhere on each node, and name it ",(0,l.kt)("inlineCode",{parentName:"p"},"install.sh"),"."),(0,l.kt)("p",null,"Install K3s on each server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n")),(0,l.kt)("p",null,"Install K3s on each agent:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken ./install.sh\n")),(0,l.kt)("p",null,"Note, take care to ensure you replace ",(0,l.kt)("inlineCode",{parentName:"p"},"myserver")," with the IP or valid DNS of the server and replace ",(0,l.kt)("inlineCode",{parentName:"p"},"mynodetoken")," with the node-token from the server.\nThe node-token is on the server at ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/node-token")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," K3s additionally provides a ",(0,l.kt)("inlineCode",{parentName:"p"},"--resolv-conf")," flag for kubelets, which may help with configuring DNS in air-gap networks.")),(0,l.kt)("h3",{id:"4-save-and-start-using-the-kubeconfig-file"},"4. Save and Start Using the kubeconfig File"),(0,l.kt)("p",null,"When you installed K3s on each Rancher server node, a ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file was created on the node at ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml"),". This file contains credentials for full access to the cluster, and you should save this file in a secure location."),(0,l.kt)("p",null,"To use this ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file,"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl,")," a Kubernetes command-line tool."),(0,l.kt)("li",{parentName:"ol"},"Copy the file at ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")," and save it to the directory ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," on your local machine."),(0,l.kt)("li",{parentName:"ol"},"In the kubeconfig file, the ",(0,l.kt)("inlineCode",{parentName:"li"},"server")," directive is defined as localhost. Configure the server as the DNS of your load balancer, referring to port 6443. (The Kubernetes API server will be reached at port 6443, while the Rancher server will be reached at ports 80 and 443.) Here is an example ",(0,l.kt)("inlineCode",{parentName:"li"},"k3s.yaml"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # Edit this line\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," You can now use ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage your K3s cluster. If you have more than one kubeconfig file, you can specify which one you want to use by passing in the path to the file when using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/k3s.yaml get pods --all-namespaces\n")),(0,l.kt)("p",null,"For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/cluster-access/"},"K3s documentation")," or the ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"official Kubernetes documentation")," about organizing cluster access using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig")," files."),(0,l.kt)("h3",{id:"note-on-upgrading"},"Note on Upgrading"),(0,l.kt)("p",null,"Upgrading an air-gap environment can be accomplished in the following manner:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the new air-gap images (tar file) from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/releases"},"releases")," page for the version of K3s you will be upgrading to. Place the tar in the ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/images/")," directory on each node. Delete the old tar file."),(0,l.kt)("li",{parentName:"ol"},"Copy and replace the old K3s binary in ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," on each node. Copy over the install script at ",(0,l.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"https://get.k3s.io")," (as it is possible it has changed since the last release). Run the script again just as you had done in the past with the same environment variables."),(0,l.kt)("li",{parentName:"ol"},"Restart the K3s service (if not restarted automatically by installer)."))),(0,l.kt)(s.Z,{value:"RKE",mdxType:"TabItem"},(0,l.kt)("p",null,"We will create a Kubernetes cluster using Rancher Kubernetes Engine (RKE). Before being able to start your Kubernetes cluster, you\u2019ll need to install RKE and create a RKE config file."),(0,l.kt)("h3",{id:"1-install-rke"},"1. Install RKE"),(0,l.kt)("p",null,"Install RKE by following the instructions in the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE documentation.")),(0,l.kt)("h3",{id:"2-create-an-rke-config-file"},"2. Create an RKE Config File"),(0,l.kt)("p",null,"From a system that can access ports 22/TCP and 6443/TCP on the Linux host node(s) that you set up in a previous step, use the sample below to create a new file named ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"."),(0,l.kt)("p",null,"This file is an RKE configuration file, which is a configuration for the cluster you're deploying Rancher to."),(0,l.kt)("p",null,"Replace values in the code sample below with help of the ",(0,l.kt)("em",{parentName:"p"},"RKE Options")," table. Use the IP address or DNS names of the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes"},"3 nodes")," you created."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Tip:")," For more details on the options available, see the RKE ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"Config Options"),".")),(0,l.kt)("figcaption",null,"RKE Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS or IP address for the node within the air gapped network.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"A user that can run Docker commands.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"role")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"List of Kubernetes roles assigned to the node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"internal_address")),(0,l.kt)("td",{parentName:"tr",align:null},"optional",(0,l.kt)("sup",null,"1")),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS or IP address used for internal cluster traffic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ssh_key_path")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the SSH private key used to authenticate to the node (defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa"),").")))),(0,l.kt)("blockquote",null,(0,l.kt)("sup",null,"1")," Some services like AWS EC2 require setting the `internal_address` if you want to use self-referencing security groups or firewalls."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n  - address: 10.10.3.187 # node air gap network IP\n    internal_address: 172.31.7.22 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n  - address: 10.10.3.254 # node air gap network IP\n    internal_address: 172.31.13.132 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n  - address: 10.10.3.89 # node air gap network IP\n    internal_address: 172.31.3.216 # node intra-cluster IP\n    user: rancher\n    role: ['controlplane', 'etcd', 'worker']\n    ssh_key_path: /home/user/.ssh/id_rsa\n\nprivate_registries:\n  - url: <REGISTRY.YOURDOMAIN.COM:PORT> # private registry url\n    user: rancher\n    password: '*********'\n    is_default: true\n")),(0,l.kt)("h3",{id:"3-run-rke"},"3. Run RKE"),(0,l.kt)("p",null,"After configuring ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),", bring up your Kubernetes cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rke up --config ./rancher-cluster.yml\n")),(0,l.kt)("h3",{id:"4-save-your-files"},"4. Save Your Files"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important"),"\nThe files mentioned below are needed to maintain, troubleshoot and upgrade your cluster.")),(0,l.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube_config_rancher-cluster.yml"),": The ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains the current state of the cluster including the RKE configuration and the certificates.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"li"},"The Kubernetes Cluster State file is only created when using RKE v0.2.0 or higher."))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),' The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.')),(0,l.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting")," page."),(0,l.kt)("h3",{id:"next-install-rancher"},(0,l.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Next: Install Rancher")))}k.isMDXComponent=!0}}]);