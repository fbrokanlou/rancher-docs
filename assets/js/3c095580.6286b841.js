"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89474],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],u={title:"Configuring FreeIPA",weight:1114,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/authentication/freeipa/"]},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",title:"Configuring FreeIPA",description:"Available as of v2.0.5",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-freeipa.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Configuring FreeIPA",weight:1114,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/authentication/freeipa/"]},sidebar:"tutorialSidebar",previous:{title:"Configuring Active Directory (AD)",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory"},next:{title:"Configuring Azure AD",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad"}},l={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.0.5")),(0,i.kt)("p",null,"If your organization uses FreeIPA for user authentication, you can configure Rancher to allow your users to login using their FreeIPA credentials."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"You must have a ",(0,i.kt)("a",{parentName:"li",href:"https://www.freeipa.org/"},"FreeIPA Server")," configured."),(0,i.kt)("li",{parentName:"ul"},"Create a service account in FreeIPA with ",(0,i.kt)("inlineCode",{parentName:"li"},"read-only")," access. Rancher uses this account to verify group membership when a user makes a request using an API key."),(0,i.kt)("li",{parentName:"ul"},"Read ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign into Rancher using a local user assigned the ",(0,i.kt)("inlineCode",{parentName:"p"},"administrator")," role (i.e., the ",(0,i.kt)("em",{parentName:"p"},"local principal"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,i.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"FreeIPA"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the ",(0,i.kt)("strong",{parentName:"p"},"Configure an FreeIPA server")," form."),(0,i.kt)("p",{parentName:"li"},"You may need to log in to your domain controller to find the information requested in the form."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Using TLS?"),"\nIf the certificate is self-signed or not from a recognized certificate authority, make sure you provide the complete chain. That chain is needed to verify the server's certificate."),(0,i.kt)("br",null),(0,i.kt)("br",null),"**User Search Base vs. Group Search Base**",(0,i.kt)("p",{parentName:"blockquote"},"Search base allows Rancher to search for users and groups that are in your FreeIPA.  These fields are only for search bases and not for search filters."),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"If your users and groups are in the same search base, complete only the User Search Base."),(0,i.kt)("li",{parentName:"ul"},"If your groups are in a different search base, you can optionally complete the Group Search Base. This field is dedicated to searching groups, but is not required.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If your FreeIPA deviates from the standard AD schema, complete the ",(0,i.kt)("strong",{parentName:"p"},"Customize Schema")," form to match it. Otherwise, skip this step."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Search Attribute")," The Search Attribute field defaults with three specific values: ",(0,i.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),". After FreeIPA is configured, when a user enters text to add users or groups, Rancher automatically queries the FreeIPA server and attempts to match fields by user id, last name, or first name. Rancher specifically searches for users/groups that begin with the text entered in the search field."),(0,i.kt)("p",{parentName:"blockquote"},"The default field value ",(0,i.kt)("inlineCode",{parentName:"p"},"uid|sn|givenName"),", but you can configure this field to a subset of these fields. The pipe (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),") between the fields separates these fields."),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uid"),": User ID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sn"),": Last Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"givenName"),": First Name")),(0,i.kt)("p",{parentName:"blockquote"},"With this search attribute, Rancher creates search filters for users and groups, but you ",(0,i.kt)("em",{parentName:"p"},"cannot")," add your own search filters in this field."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter your FreeIPA username and password in ",(0,i.kt)("strong",{parentName:"p"},"Authenticate with FreeIPA")," to confirm that Rancher is configured to use FreeIPA authentication."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FreeIPA authentication is configured."),(0,i.kt)("li",{parentName:"ul"},"You are signed into Rancher with your FreeIPA account (i.e., the ",(0,i.kt)("em",{parentName:"li"},"external principal"),").")))}d.isMDXComponent=!0}}]);