(this["webpackJsonpfeugo-frontend"]=this["webpackJsonpfeugo-frontend"]||[]).push([[4],{193:function(n,e,t){"use strict";t.r(e);var a=t(12),r=t(2),i=t(0),c=t.n(i),o=t(3),u=t(9);function l(){var n=Object(r.a)(["\n  position: relative;\n  bottom: 0;\n  font-size: 10px;\n  width: 80%;\n  margin-left: 10%;"]);return l=function(){return n},n}var f=o.a.p(l()),m=function(){var n=Object(i.useState)([]),e=Object(a.a)(n,2),t=e[0],r=e[1];return Object(i.useEffect)((function(){u.a.fetch('*[_type == "footer"]').then((function(n){r(n),n.forEach((function(n){r(n)}))}))}),[]),c.a.createElement(f,null,t.companyInfo)},d=t(60),s=function(){var n=Object(i.useState)(""),e=Object(a.a)(n,2),t=e[0],r=e[1];return Object(i.useEffect)((function(){u.a.fetch('*[_type == "showreel"] ').then((function(n){n.forEach((function(n){r(n)}))}))}),[]),c.a.createElement("div",{style:{marginBottom:"50px"}},c.a.createElement(d.a,{video:t}))},p=t(23);function h(){var n=Object(r.a)(["\n  width: 100%;\n  display:flex;\n\n  justify-content: space-between;\n  align-items: center;\n \n  @media screen and (max-width: 1000px) {\n    width: 80%;\n    margin-left: 10%;\n    text-align: left;\n  }"]);return h=function(){return n},n}function x(){var n=Object(r.a)(["\nwidth: 35px;\nmargin: 5px;\n@media screen and (max-width: 1000px) {\n  width: 25px;\n}\n  "]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n  text-decoration: none;\n    color: black;\n  "]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n    font-size: 22px;\n     @media screen and (max-width: 1000px) {\n       margin-left: 10%;\n        width: 80%;\n      }\n"]);return g=function(){return n},n}function w(){var n=Object(r.a)(["\n  width: 80%;\n  overflow: hidden;\n  margin-top: 5%;\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n  }"]);return w=function(){return n},n}function b(){var n=Object(r.a)(["\n\n  width: 100%;\n  display: flex;\n  justify-content:center;\n  flex-flow: row wrap;\n\n  * {\n    padding: 0;\n    margin: 2px 0;\n    margin-right: 5px;\n  }\n\n  @media screen and (max-width: 1000px) {\n   justify-content: center;\n  }\n  \n  "]);return b=function(){return n},n}function E(){var n=Object(r.a)(["\n  @media screen and (max-width: 1000px) {\n    padding: 0 15%;\n  }\n"]);return E=function(){return n},n}function j(){var n=Object(r.a)(["\n  margin: 5px 0;\n  text-decoration: none;\n  color: black;\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n  text-align: center;\n  font-size: 22px;\n\n  font-weight: bold;"]);return O=function(){return n},n}function y(){var n=Object(r.a)(["\n  text-align: left;\n  width: 75%;\n  @media screen and (max-width: 1000px) {\n    text-align: center;\n    width: 100%;\n\n    h2 {\n      font-size: 20px\n      @media screen and (max-width: 1000px) {\n        font-size: 16px\n      }\n    }\n    p {\n      font-size: 14px\n    }\n  }"]);return y=function(){return n},n}function z(){var n=Object(r.a)(["\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column\n  width: 100%;\n  @media screen and (max-width: 1000px) {\n    margin-top: 5px;\n  }"]);return z=function(){return n},n}function k(){var n=Object(r.a)(["\nmargin: 80px 0 0 0;\n  @media screen and (max-width: 1000px) {\n    font-size: 18px;\n   \n} \n"]);return k=function(){return n},n}function H(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;"]);return H=function(){return n},n}var S=t.n(p)()(u.a);function _(n){return S.image(n)}var G=o.a.div(H()),J=o.a.h1(k()),L=o.a.div(z()),M=o.a.div(y()),R=o.a.p(O()),B=o.a.p(j()),C=o.a.p(E()),F=o.a.div(b()),I=o.a.div(w()),q=o.a.div(g()),A=o.a.a(v()),D=o.a.img(x()),K=o.a.div(h());e.default=function(){var n=Object(i.useState)({header:"",desc:"",descHeader:"",teamMembers:[],vimeo:"",instagram:""}),e=Object(a.a)(n,2),t=e[0],r=e[1];return Object(i.useEffect)((function(){u.a.fetch('*[_type == "about"] {\n      header, desc, phone, vimeo, instagram, email, descHeader, teamMembers[]->{name}\n    }').then((function(n){n.forEach((function(n){r(n)}))}))}),[]),c.a.createElement(G,null,c.a.createElement("div",null,c.a.createElement(J,null,t.header),c.a.createElement(L,null,c.a.createElement(M,null,c.a.createElement("h2",{style:{margin:"0"}},t.descHeader),c.a.createElement(C,null,t.desc," "),c.a.createElement(F,null,c.a.createElement("p",null,"Founded by Charlie Rees, Edd Roberts and George Harper")),c.a.createElement(q,null,c.a.createElement(R,null,"Get in touch with us:"),c.a.createElement(K,null,c.a.createElement("div",null,c.a.createElement(A,{href:"mailto:".concat(t.email)},c.a.createElement(B,null,t.email)),c.a.createElement(A,{href:"tel:".concat(t.phone)},c.a.createElement(B,null,t.phone))),c.a.createElement("div",null,c.a.createElement(A,{href:"https://www.instagram.com/fuegofilmsldn/"},c.a.createElement(D,{alt:"instagram Logo",src:_(t.instagram).url()})),c.a.createElement(A,{href:"https://vimeo.com/fuegofilmsltd"},c.a.createElement(D,{alt:"vimeo Logo",src:_(t.vimeo).url()})))))),c.a.createElement(I,null,c.a.createElement(s,null))),c.a.createElement(m,null)))}}}]);
//# sourceMappingURL=4.fe22fc74.chunk.js.map