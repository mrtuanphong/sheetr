(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,a){e.exports=a(408)},184:function(e,t,a){},191:function(e,t,a){},208:function(e,t){},210:function(e,t){},242:function(e,t){},243:function(e,t){},312:function(e,t){},403:function(e,t,a){},404:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(167),i=a.n(l),c=a(19),o=a(30),s=a(5);a(184);var m=a(42),u=a.n(m);a(191);var d=a(98),f=a.n(d),h=a(170),p=a(26),E=a(171),g=a.n(E),w=a(172),v=a.n(w);function b(e,t,a){var n=e.trim().split(","),r=t.trim().split(","),l=[];if(n.length!==r.length)return console.log("days times not same for id "+a),"date ERROR at id "+a;for(var i=0;i<n.length;i++)r[i]=r[i].replace("permenant","\u221e"),l[i]=n[i]+" @ "+r[i];return l=l.join(" & ")}function y(e){if(null===e.article||void 0===e.article)return null;var t,a=e.article,n=a.id,l=a.title,i=a.artists,o=a.days,s=a.times,m=a.location,d=a.categories,f=a.teaser_text,h=a.image_teaser;return r.a.createElement("div",{className:"article"},r.a.createElement("div",{className:"article-info"},r.a.createElement(c.b,{to:"/program/".concat(n)},r.a.createElement(u.a,{src:"https://drive.google.com/uc?id=".concat(h),placeholder:"https://drive.google.com/uc?id=1m_AKM-NObKai64_ErCrVm8uQD3009m5z"},function(t,a){return r.a.createElement("img",{id:"img-article-".concat(n),onClick:function(){return e.openArticle(n)},style:{margin:a?"33.3%":"0",width:a?"33.3%":"100%"},src:t,alt:l})})),r.a.createElement("h4",null,l),i&&r.a.createElement("h4",{className:"secondary"},i),r.a.createElement("div",{className:"name-and-icon"},r.a.createElement("h5",null,b(o,s,n)),r.a.createElement("img",{className:"icon",src:"http://www.unframedfestival.de/images/ico/icons8-calendar-50.png",alt:"calender"})),r.a.createElement("div",{className:"name-and-icon"},r.a.createElement("h5",null,d," @ ",m),r.a.createElement("img",{className:"icon",src:"http://www.unframedfestival.de/images/ico/icons8-two-tickets-50.png",alt:"category"})),r.a.createElement("p",null,r.a.createElement("span",{dangerouslySetInnerHTML:(t=f,{__html:t})})),r.a.createElement(c.b,{to:"/program/".concat(n),onClick:function(){return e.openArticle(n)}},"Read More")))}a(403);function k(e){if(null===e.article||void 0===e.article)return null;var t,a=e.article,n=a.id,l=a.title,i=a.artists,o=a.days,m=a.times,d=a.location,f=a.categories,h=a.image_teaser,p=a.text,E=a.photoCredit,g=a.photoLink;return r.a.createElement(s.Grid,{fluid:!0,className:"article-open"},r.a.createElement(s.Col,{xs:12},r.a.createElement(c.b,{className:"pinklink",to:"/program/",onClick:function(){return e.closeArticle()}},"\u2039 BACK"),r.a.createElement("br",null),r.a.createElement("h2",null,l),r.a.createElement("br",null),r.a.createElement(u.a,{src:"https://drive.google.com/uc?id=".concat(h),placeholder:"https://drive.google.com/uc?id=1m_AKM-NObKai64_ErCrVm8uQD3009m5z"},function(e,t){return r.a.createElement("img",{className:"article-photo",style:{margin:t?"10% 33.3% 10% 33.3%":"0 auto",maxWidth:t?"33.3%":"100%"},src:e,alt:l})}),r.a.createElement(s.Row,null,r.a.createElement(s.Col,{xs:12,md:8},r.a.createElement("p",{dangerouslySetInnerHTML:(t=p,{__html:t})}),r.a.createElement("br",null),"Photo by"," ",r.a.createElement("a",{className:"pinklink",href:g},E)),r.a.createElement(s.Col,{xs:12,md:4},r.a.createElement(s.Row,null,r.a.createElement("div",{className:"icon-and-info"},r.a.createElement("img",{alt:"when",src:"http://www.unframedfestival.de/images/ico/icons8-calendar-50.png"}),r.a.createElement("h4",null,b(o,m,n))),r.a.createElement("div",{className:"icon-and-info"},r.a.createElement("img",{alt:"who",src:"http://www.unframedfestival.de/images/ico/icons8-contacts-32.png"}),r.a.createElement("h4",null,i)),r.a.createElement("div",{className:"icon-and-info"},r.a.createElement("img",{alt:"categories",src:"http://www.unframedfestival.de/images/ico/icons8-two-tickets-50.png"}),r.a.createElement("h4",null,f)),r.a.createElement("div",{className:"icon-and-info"},r.a.createElement("img",{alt:"where",src:"http://www.unframedfestival.de/images/ico/icons8-map-pin-50.png"}),r.a.createElement("h4",null,d)))))))}a(404);var N=["1 May","2 May","3 May","4 May"],O=["Party","Exhibition"],x=Object(o.d)(function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)(1),o=Object(p.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(p.a)(u,2),f=d[0],h=d[1],E=Object(n.useState)(!1),g=Object(p.a)(E,2),w=g[0],b=g[1],x=Object(n.useState)(!1),R=Object(p.a)(x,2),S=R[0],A=R[1],C=function(e){A(e),b(!0)},j=function(t){var a=e.articles;!1!==t.day?a=a.filter(function(e){return e.days.includes(t.day)}):!1!==t.cat&&(a=a.filter(function(e){return e.categories.includes(t.cat)})),i(a.map(function(e){return r.a.createElement(y,{article:e,openArticle:C,key:e.id})})),m(t.day),h(t.cat),sessionStorage.setItem("filters",JSON.stringify(t))};return Object(n.useEffect)(function(){e.articleIDRoute>0&&e.articleIDRoute<=e.articles.length&&C(e.articleIDRoute);var t=sessionStorage.getItem("filters");t?(t=JSON.parse(t),m(t.day),h(t.cat),j(t)):j({day:s,cat:f})},[e]),r.a.createElement("div",{className:"program",id:"the-program"},w?r.a.createElement(k,{article:e.articles.filter(function(e){return e.id===S}).pop(),closeArticle:function(){b(!1)}}):r.a.createElement("div",null,r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"buttons button-group filters-button-group"},N.map(function(e,t){return r.a.createElement("button",{key:t,className:"button"+(s===t+1?" is-checked":""),onClick:function(){j({day:t+1,cat:!1})}},e)}),O.map(function(e,t){return r.a.createElement("button",{key:t,className:"button"+(f===e?" is-checked":""),onClick:function(){j({day:!1,cat:e})}},e)}))),r.a.createElement("div",{className:"all-articles"},r.a.createElement(v.a,{breakpointCols:{default:3,960:3,768:2,600:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},l))))}),R="117qsaEFQLenUyr6RPyYMPYJtkur_7vBK_NA9hepH6xQ";function S(e){var t=Object(n.useState)({data:[]}),a=Object(p.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)(!0),o=Object(p.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(p.a)(u,2),E=d[0],w=d[1],v=function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{g.a.init({key:R,callback:function(e){i({data:e}),sessionStorage.setItem("savedsheet",JSON.stringify(e))},simpleSheet:!0}),m(!1)}catch(t){console.log(t),w(!0)}case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=e.match.params;return Object(n.useEffect)(function(){var e=sessionStorage.getItem("savedsheet");e?(i({data:JSON.parse(e)}),m(!1)):(m(!0),v())},[]),s?r.a.createElement("div",null,"Loading .. "):E?r.a.createElement("div",null,"Something went wrong ..."):r.a.createElement("div",null,r.a.createElement(x,{articles:l.data,articleIDRoute:b.id}))}a(405);a(406);a(407);var A=r.a.createElement(c.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(function(e){return r.a.createElement(s.Grid,{fluid:!0},r.a.createElement(s.Col,{xs:12},r.a.createElement(s.Row,{start:"md",center:"xs"},r.a.createElement(s.Col,{xs:12,md:6},r.a.createElement("h1",null,"DEMO-SHEETR")),r.a.createElement(s.Col,{xs:12,md:6},r.a.createElement(s.Row,{center:"xs",end:"md"},r.a.createElement("div",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.c,{exact:!0,to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/program"},"PROGRAM")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/about"},"ABOUT")))))))))},null),r.a.createElement(o.a,{exact:!0,path:"/",component:function(e){return r.a.createElement("section",null,r.a.createElement(s.Grid,{fluid:!0},r.a.createElement(s.Row,{id:"intro"},r.a.createElement(s.Col,{xs:12},r.a.createElement(u.a,{src:"https://drive.google.com/uc?id=1cs6SGriScKVD20wIVkUVi4UNw_unJQ4q",placeholder:"https://drive.google.com/uc?id=1m_AKM-NObKai64_ErCrVm8uQD3009m5z"},function(e,t){return r.a.createElement("img",{style:{margin:t?"33.3%":"0",width:t?"33.3%":"100%"},src:e,alt:"banner"})}),r.a.createElement("div",{className:"large-text"},r.a.createElement("h2",null,"1-4 May 2019"),r.a.createElement("p",null,"Welcome to the fourth edition of the Unframed Festival titled"),r.a.createElement("p",{className:"highlighted"},r.a.createElement("strong",null,'"MATTER OF WORDS"'))))),r.a.createElement(s.Row,null,r.a.createElement(s.Col,{xs:12,md:8,mdOffset:2},r.a.createElement("div",{id:"intro-inverse"},r.a.createElement("p",null,"As unframed people, we want to focus on socio-political debates, that are struggling to exist in our societies."),r.a.createElement("p",null,"It is not about convincing people but about collecting material to stimulate critical reflection, for those who are interested. It is a space to gather as individuals and to discuss the pluralities of transformation in society."),r.a.createElement("p",null,"The Topic of this year, MATTER OF WORDS, will go from the spoken self-empowerment, to the strength through languages of a group. From the power of words into radical definitions, to the power of words that cradle us. From the words we blind ourselves with, to the ones that brand us forever. From the words that are banned by societies, to the ones that are(miss)- used for propagandas. From the silence of oppressive violences, to the noise left by liberating actions. And much more."),r.a.createElement("p",null,"We may not understand all of them, we may leave with more questions than we came with - that\u2019s okay"),r.a.createElement("p",{className:"highlighted"},r.a.createElement("strong",null,"*")," ",r.a.createElement("em",null,"+++++++ We do not tolerate any kind of sexism, racism and other forms of discrimination ++++++++\xa0")))))))}}),r.a.createElement(o.a,{path:"/about",component:function(){return r.a.createElement("section",{className:"about large-text"},r.a.createElement(s.Grid,{fluid:!0},r.a.createElement(s.Row,null,r.a.createElement(s.Col,{xs:12,md:8,mdOffset:2},r.a.createElement("h2",null," About the Festival "),r.a.createElement("p",null,"The UNFRAMED FESTIVAL is an open format festival using Cultures and Arts as tools of empowerment and resistance within annually changing political topics. Crossover artworks, talks and workshops raise questions about contemporary issues of our societies and provide space for dialogues and collective creativity. A multicultural program for a journey where debates are raised and Utopias are defined as spaces of the possible."),r.a.createElement("p",null,"The festival's main focus is",r.a.createElement("ul",null,r.a.createElement("li",null," giving a voice back to the people"),r.a.createElement("li",null," raising debates"),r.a.createElement("li",null," being a stage of culture for everyone"),r.a.createElement("li",null," create a place for connecting and networking"),r.a.createElement("li",null," free access for everyone "))),r.a.createElement("h2",null," About Us "),r.a.createElement("p",null,"The UNFRAMED Society exists since 2015 with the aim to make socio-political discourses that often go unheard present and to raise the debate about them. We want to make the social power relations we live in visible and give a voice to people, movements and groups who talk about their own struggles, realities and stories. It is central to us that we talk with each other and not about each other. Artists, experts and acitivists are invited to discuss, exchange, to raise new questions and answer some others - all in the idea to bring together different perspectives and realities."),r.a.createElement("p",null,"The UNFRAMED Festival sees itself as a space of encounter that stimulates mutual understanding and awareness between different personalities, practices, backgrounds, languages and countries. For this we tie together divers forms of expression. We link art, theatre, film, dance, performance and music with science, literature, talks, discussions and workshops."),r.a.createElement("p",null,"Art and communication is seen as a tool for empowerment, resistance and visibility."),r.a.createElement("p",null,"We want to create a free stage which brings together art, activism and the public for an annually changing debate to discuss, think, dream and connect."),r.a.createElement("p",null,"Our association \u201cUnframed e.V.\u201d supports the organisation of the Unframed Festival together with other socio-political events."),r.a.createElement("p",{class:"highlighted"},"* +++++++ We do not tolerate any kind of sexism, racism and other forms of discrimination ++++++"),r.a.createElement("h2",null,"Contact "),r.a.createElement("p",null,"If you have any questions or requests don\u2019t hesitate to contact us:"),r.a.createElement("p",null,"Unframed Festival",r.a.createElement("br",null),"\u2105 ThinkFarm Berlin",r.a.createElement("br",null),"Moosdorfstr. 7-9",r.a.createElement("br",null),"12435 Berlin",r.a.createElement("br",null),r.a.createElement("br",null),"Email: unframedproject [at] posteo [punkt] net")))))}}),r.a.createElement(o.a,{exact:!0,path:"/program",component:S}),r.a.createElement(o.a,{path:"/program/:id",component:S}),r.a.createElement(function(e){return r.a.createElement("footer",null,r.a.createElement(s.Grid,{fluid:!0},r.a.createElement(s.Row,null,r.a.createElement(s.Col,{xs:12,sm:12,md:8,lg:6,mdOffset:2,lgOffset:3},r.a.createElement("center",null,r.a.createElement("p",null,"The Unframed Festival is an autonomous self organised project of the Unframed Society."),r.a.createElement("a",{href:"http://www.facebook.com/UnframedFestival/"},r.a.createElement("img",{alt:"facebook",src:"http://www.unframedfestival.de/images/ico/social/facebook-3-48.png"})),"\xa0 \xa0\xa0",r.a.createElement("a",{href:"http://www.instagram.com/unframed_festival/"},r.a.createElement("img",{alt:"instagram",src:"http://www.unframedfestival.de/images/ico/social/instagram-48.png"})),r.a.createElement("p",null,"This website was built with Love on React using TableTop and Masonry."))))))},null)));i.a.render(A,document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.0c387df3.chunk.js.map