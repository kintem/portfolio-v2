(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[0],[,,,function(e,t,n){e.exports={navBar:"NavBar_navBar__169o_",iconContainer:"NavBar_iconContainer__24LXn",menuIcon:"NavBar_menuIcon__3FN6N",menu:"NavBar_menu__3GLgk",active:"NavBar_active__3Tb7-",default:"NavBar_default__1dBpz",open:"NavBar_open__3JRin"}},,function(e,t,n){e.exports={projectCard:"ProjectCard_projectCard__1hadp",iconContainer:"ProjectCard_iconContainer__1zBv_",left:"ProjectCard_left__T_Lb6",skillsIcon:"ProjectCard_skillsIcon__3mA5v",linkIcon:"ProjectCard_linkIcon__z71NI"}},function(e,t,n){e.exports={contactContainer:"Contact_contactContainer__GZ4-v",iconContainer:"Contact_iconContainer__2Z-X0",mailIconContainer:"Contact_mailIconContainer__371NZ",linkedinIcon:"Contact_linkedinIcon__1WCcE",githubIcon:"Contact_githubIcon__30iIC",mailIcon:"Contact_mailIcon__1t8T7"}},,function(e,t,n){e.exports={aboutContainer:"About_aboutContainer__3dzCO",infoContainer:"About_infoContainer__18eIS",skillsContainer:"About_skillsContainer__2A5DR",headingContainer:"About_headingContainer__2RdkS",skillsIcon:"About_skillsIcon__8hstB"}},function(e,t,n){e.exports={homeContainer:"Home_homeContainer__3qKYz",name:"Home_name__3ymkI",linkedinIcon:"Home_linkedinIcon__3yqN2",githubIcon:"Home_githubIcon__pXsgW"}},,function(e,t,n){e.exports={projectsContainer:"Projects_projectsContainer__1Ervx",headingContainer:"Projects_headingContainer__tldaR",projectCardsContainer:"Projects_projectCardsContainer__27iqZ"}},,,,function(e,t,n){e.exports={App:"App_App__15LM-"}},,function(e,t,n){e.exports={heading:"Heading_heading__njkQq"}},,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(14),s=n.n(i),o=(n(23),n(10)),r=n(15),l=n.n(r),b=n(4),d=n(2),j=n(3),m=n.n(j),h=n(0),u=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=function(e){var t=e.isCurrent;return{className:"".concat(t?m.a.active:m.a.default),style:{color:t?"#F65C78":"#1b1b1b"}}},s=n?Object(h.jsxs)("nav",{className:m.a.menu,"data-aos":"fade-left",children:[Object(h.jsx)(b.a,{to:"projects",getProps:i,children:"Projects"},"nav:projects"),Object(h.jsx)(b.a,{to:"about",getProps:i,children:"About"},"nav:about"),Object(h.jsx)(b.a,{to:"contact",getProps:i,children:"Contact"},"nav:contact")]}):"",r=n?"".concat(m.a.navBar," ").concat(m.a.open):"".concat(m.a.navBar);return Object(h.jsxs)("section",{className:r,children:[Object(h.jsx)("span",{className:m.a.iconContainer,children:Object(h.jsx)(b.a,{to:"/portfolio-v2",getProps:i,children:Object(h.jsx)(d.b,{icon:"fa-solid:home"})},"nav:home")}),s,Object(h.jsx)("span",{onClick:function(){return c(!n)},className:m.a.iconContainer,children:Object(h.jsx)(d.b,{icon:n?"heroicons-solid:x":"gg-menu",className:n?"".concat(m.a.active," ").concat(m.a.menuIcon):"".concat(m.a.menuIcon)})})]})},p=n(9),_=n.n(p),x=function(){return Object(h.jsxs)("section",{className:_.a.homeContainer,children:[Object(h.jsxs)("h1",{children:["Hi, I'm ",Object(h.jsx)("span",{className:_.a.name,children:"Kinte."})]}),Object(h.jsx)("h2",{children:"A Web Developer."}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"https://github.com/kintem",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(d.b,{icon:"fa-brands:github-square",className:_.a.githubIcon})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/kinte-matulyte/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(d.b,{icon:"fa-brands:linkedin",className:_.a.linkedinIcon})})]})]})},f=n(17),g=n.n(f),O=function(e){var t=e.text;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h2",{className:g.a.heading,children:t})})},C=n(8),k=n.n(C),v=n.p+"static/media/profile.fed041e8.jpg",N=function(){var e=["fa-html5","fa-brands:css3-alt","fa-brands:js-square","fa-brands:react","bx-bxl-sass","fa-brands:node","simple-icons:express"].map((function(e){return Object(h.jsx)(d.b,{icon:e,className:k.a.skillsIcon},"about:".concat(e))}));return Object(h.jsxs)("section",{className:k.a.aboutContainer,children:[Object(h.jsxs)("div",{className:k.a.headingContainer,children:[Object(h.jsx)(O,{text:"About"}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:k.a.infoContainer,"data-aos":"zoom-in",children:[Object(h.jsx)("img",{src:v,alt:"Photo of Kinte Matulyte"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sapiente laborum quam provident, aliquid quaerat ad quibusdam dolore, distinctio maiores labore. Consectetur quisquam ducimus odio esse iste, inventore deserunt adipisci."})]}),Object(h.jsx)("div",{className:k.a.skillsContainer,"data-aos":"zoom-in",children:e})]})},I=n(5),P=n.n(I),y=function(e){var t=e.project,n=t.icons.map((function(e){return Object(h.jsx)(d.a,{icon:e,className:P.a.skillsIcon},"pr-card:".concat(e))})),a="".concat(P.a.projectCard);return Object(h.jsxs)("article",{className:a,"data-aos":t.id%2===0?"fade-left":"fade-right",children:[Object(h.jsxs)("div",{className:P.a.left,children:[Object(h.jsx)("img",{src:t.img,alt:""}),Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:t.description})]}),Object(h.jsxs)("div",{className:P.a.iconContainer,children:[n,Object(h.jsx)("a",{href:t.githubURL,children:Object(h.jsx)(d.b,{icon:"fa-brands:github",className:P.a.linkIcon})}),Object(h.jsx)("a",{href:t.liveURL,children:Object(h.jsx)(d.b,{icon:"dashicons-admin-site-alt3",className:P.a.linkIcon})})]})]})},L=n.p+"static/media/sallysays1.ad5f35f8.png",A=n.p+"static/media/college-thrifts.b9cb6c28.png",R=n.p+"static/media/ticket-tracker.7e1cd175.png",B=n.p+"static/media/morse.37d50c22.png",q=[{id:1,name:"College Thrifts",img:A,icons:["fa-brands:react","bx-bxl-sass"],description:"MVP built for a client in 4 weeks during the _nology bootcamp",githubURL:"",liveURL:"https://college-thrifts.web.app/"},{id:2,name:"Sally Says",img:L,icons:["fa-html5","fa-brands:js-square","bx-bxl-sass"],description:"JavaScript memory game based on Simon Says",githubURL:"https://github.com/kintem/sally-says",liveURL:"https://kintem.github.io/sally-says/"},{id:"pr3",name:"Planet API",img:"",icons:[],githubURL:"",liveURL:""},{id:4,name:"Punk API App",img:n.p+"static/media/punkapi.25906f2a.png",icons:["fa-brands:react","bx-bxl-sass"],description:"A front-end for Punk API built using React",githubURL:"https://github.com/kintem/punkapi-app",liveURL:""},{id:5,name:"Morse Code Translator",img:B,icons:["fa-html5","fa-brands:js-square","fa-brands:css3-alt"],description:"Simple Morse code translator built in 2.5 hours for one of the Tech Test challenges during the _nology bootcamp",githubURL:"https://github.com/kintem/morse-code-translator",liveURL:"https://kintem.github.io/morse-code-translator/"},{id:6,name:"Ticket Tracker",img:R,icons:["fa-brands:react","bx-bxl-sass"],description:"Ticket tracker app built using React and hosted with Firebase",githubURL:"https://github.com/kintem/ticket-tracker",liveURL:"https://ticket-tracker-9fe82.web.app/"}],U=n(11),w=n.n(U),S=function(){return Object(h.jsxs)("section",{className:w.a.projectsContainer,children:[Object(h.jsxs)("div",{className:w.a.headingContainer,children:[Object(h.jsx)(O,{text:"Projects"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)("div",{className:w.a.projectCardsContainer,children:q.map((function(e){return Object(h.jsx)(y,{project:e},"project:".concat(e.id))}))})]})},T=n(6),z=n.n(T),F=function(){return Object(h.jsxs)("section",{className:z.a.contactContainer,children:[Object(h.jsx)(O,{text:"Contact"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:"Feel free to say hello via any of these links!"}),Object(h.jsxs)("div",{className:z.a.iconContainer,"data-aos":"zoom-in",children:[Object(h.jsx)("a",{href:"https://github.com/kintem",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(d.b,{icon:"fa-brands:github-square",className:z.a.githubIcon})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/kinte-matulyte/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(d.b,{icon:"fa-brands:linkedin",className:z.a.linkedinIcon})}),Object(h.jsx)("div",{className:z.a.mailIconContainer,children:Object(h.jsx)("a",{href:"mailto:kintemat@gmail.com",children:Object(h.jsx)(d.b,{icon:"fluent-mail-20-filled",className:z.a.mailIcon})})})]})]})},H=function(){return Object(h.jsxs)(b.b,{children:[Object(h.jsx)(x,{path:"/portfolio-v2"}),Object(h.jsx)(N,{path:"about"}),Object(h.jsx)(S,{path:"projects"}),Object(h.jsx)(F,{path:"contact"})]})},M=n(18),J=n.n(M),Z=(n(31),function(){J.a.init();var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)("div",{className:l.a.App,"data-aos":"zoom-in",children:[Object(h.jsx)(u,{activePage:n}),Object(h.jsx)(H,{setActivePage:c})]})}),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Z,{})}),document.getElementById("root")),D()}],[[32,1,2]]]);
//# sourceMappingURL=main.b43e1e7b.chunk.js.map