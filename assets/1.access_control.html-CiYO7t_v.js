import{_ as i,c as d,e,a as n,d as t,b as r,w as s,r as u,o as f}from"./app-Cj9qBG0P.js";const a={},p={id:"超级用户权限-root用户拥有最高权限-可访问、修改所有文件及系统设置。",tabindex:"-1"},x={class:"header-anchor",href:"#超级用户权限-root用户拥有最高权限-可访问、修改所有文件及系统设置。"};function m(b,l){const o=u("font");return f(),d("div",null,[l[25]||(l[25]=e('<p>要谈安卓的权限管理要从 <em>Linux</em> 的权限管理说起</p><h4 id="linux-权限管理" tabindex="-1"><a class="header-anchor" href="#linux-权限管理"><span>Linux 权限管理</span></a></h4><h5 id="用户权限-普通用户只能操作自己文件-无法修改系统或他人文件。" tabindex="-1"><a class="header-anchor" href="#用户权限-普通用户只能操作自己文件-无法修改系统或他人文件。"><span>用户权限 ：普通用户只能操作自己文件，无法修改系统或他人文件。</span></a></h5><h5 id="系统权限-系统进程运行受限权限-控制系统资源。" tabindex="-1"><a class="header-anchor" href="#系统权限-系统进程运行受限权限-控制系统资源。"><span>系统权限 ：系统进程运行受限权限，控制系统资源。</span></a></h5>',4)),n("h5",p,[n("a",x,[n("span",null,[l[1]||(l[1]=t("超级用户权限 ：root用户拥有最高权限，可访问、修改")),r(o,{color:"#ff6699"},{default:s(()=>l[0]||(l[0]=[n("strong",null,"所有",-1)])),_:1}),l[2]||(l[2]=t("文件及系统设置。"))])])]),l[26]||(l[26]=n("h2",{id:"安卓-权限管理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安卓-权限管理"},[n("span",null,"安卓 权限管理")])],-1)),l[27]||(l[27]=n("h3",{id:"应用权限",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#应用权限"},[n("span",null,"应用权限")])],-1)),n("ul",null,[n("li",null,[r(o,{color:"#ff6699"},{default:s(()=>l[3]||(l[3]=[t("应用权限")])),_:1}),l[4]||(l[4]=t("是应用声明的权限，表明应用所需的系统资源或功能。如，网络访问、存储读写、位置信息等。"))]),l[9]||(l[9]=n("li",null,"在安卓6.0（API 23）之前，应用权限在应用安装时由用户统一授予，用户没有机会对每个具体权限进行单独控制。",-1)),n("li",null,[r(o,{color:"#ff6699"},{default:s(()=>l[5]||(l[5]=[t("应用权限类型")])),_:1}),l[6]||(l[6]=t("包括普通权限（如网络访问）和敏感权限（如位置、摄像头等）。敏感权限需要在运行时请求。"))]),n("li",null,[r(o,{color:"#ff6699"},{default:s(()=>l[7]||(l[7]=[t("运行时权限")])),_:1}),l[8]||(l[8]=t("是在安卓6.0（API 23）引入的新权限模型，用于处理涉及隐私和安全的敏感权限，如摄像头、麦克风、位置等。"))]),l[10]||(l[10]=n("li",null,"对于这些敏感权限，应用不仅需要声明，还需要在运行时动态向用户请求授权。",-1)),l[11]||(l[11]=n("li",null,"用户可以在应用运行过程中选择是否授予这些敏感权限，并且可以随时在设置中更改授权。",-1))]),r(o,{color:"#ff6699"},{default:s(()=>l[12]||(l[12]=[t("运行时权限特点")])),_:1}),l[28]||(l[28]=t("：")),l[29]||(l[29]=n("ul",null,[n("li",null,"在使用特定功能时，应用必须请求用户授予运行时权限（如使用摄像头或访问位置信息）。"),n("li",null,"如果用户拒绝授予运行时权限，应用可能无法访问相关功能。")],-1)),l[30]||(l[30]=n("h3",{id:"用户权限",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#用户权限"},[n("span",null,"用户权限")])],-1)),n("ul",null,[n("li",null,[r(o,{color:"#ff6699"},{default:s(()=>l[13]||(l[13]=[t("用户权限")])),_:1}),l[14]||(l[14]=t("控制设备上的用户对系统资源的访问。"))]),l[15]||(l[15]=n("li",null,"用户可以通过系统设置管理每个应用的权限，允许或拒绝某个应用对特定功能的访问。",-1))]),l[31]||(l[31]=n("h3",{id:"系统权限",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#系统权限"},[n("span",null,"系统权限")])],-1)),r(o,{color:"#ff6699"},{default:s(()=>l[16]||(l[16]=[t("系统权限")])),_:1}),l[32]||(l[32]=t("由定制化系统（华米OV）或安卓系统定义的权限，通常用于管理系统级功能和安全性：")),n("ul",null,[n("li",null,[r(o,{color:"#ff6699"},{default:s(()=>l[17]||(l[17]=[t("签名权限")])),_:1}),l[18]||(l[18]=t("：某些权限需要应用的签名与系统或其他应用的签名相匹配，只有特定的应用才能获取这些权限。如，访问电话功能（")),l[19]||(l[19]=n("code",null,"READ_PHONE_STATE",-1)),l[20]||(l[20]=t("）。"))]),n("li",null,[r(o,{color:"#ff6699"},{default:s(()=>l[21]||(l[21]=[t("系统应用权限")])),_:1}),l[22]||(l[22]=t("：某些系统应用（如设置、系统管理工具等）具有特权权限，允许它们执行系统级操作，如修改系统设置。"))]),n("li",null,[r(o,{color:"#ff6699"},{default:s(()=>l[23]||(l[23]=[t("设备管理器权限")])),_:1}),l[24]||(l[24]=t("：设备管理员应用可以获得更高级别的权限，允许它们控制设备的安全性和管理功能，如擦除设备数据、锁定设备等。"))])])])}const v=i(a,[["render",m],["__file","1.access_control.html.vue"]]),k=JSON.parse('{"path":"/series/root/1.access_control.html","title":"关于安卓系统的权限","lang":"en-US","frontmatter":{"title":"关于安卓系统的权限","date":"2024/10/07","tags":["android"]},"headers":[{"level":2,"title":"安卓 权限管理","slug":"安卓-权限管理","link":"#安卓-权限管理","children":[{"level":3,"title":"应用权限","slug":"应用权限","link":"#应用权限","children":[]},{"level":3,"title":"用户权限","slug":"用户权限","link":"#用户权限","children":[]},{"level":3,"title":"系统权限","slug":"系统权限","link":"#系统权限","children":[]}]}],"git":{},"filePathRelative":"series/root/1.access_control.md"}');export{v as comp,k as data};
