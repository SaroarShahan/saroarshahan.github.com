(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{239:function(e,n,t){e.exports=t.p+"static/media/saroarshahan.a4afcfd3.jpg"},453:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(27),i=t(138),l=t(10),o=t(28),u=t(450),f=t(239),m=t.n(f);function s(){var e=Object(c.a)(["\n  padding: 1rem;\n"]);return s=function(){return e},e}function d(){var e=Object(c.a)(["\n  position: absolute;\n  top: 120%;\n  right: 0;\n  border: 1px solid rgba(0, 0, 0, 0.0625);\n  background-color: #fff;\n  width: 10rem;\n  border-radius: 0.2rem;\n  z-index: 999;\n  opacity: ",";\n  visibility: ",";\n  transition: all 0.3s ease-in-out 0s;\n"]);return d=function(){return e},e}function h(){var e=Object(c.a)(["\n  padding-left: 0.3rem;\n"]);return h=function(){return e},e}function b(){var e=Object(c.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n"]);return b=function(){return e},e}function p(){var e=Object(c.a)(["\n  position: fixed;\n  right: 1.5rem;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]);return p=function(){return e},e}function v(){var e=Object(c.a)(["\n  padding: 0.5rem;\n  cursor: pointer;\n  line-height: 0;\n"]);return v=function(){return e},e}function E(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);\n  padding: 0 1rem;\n  position: fixed;\n  width: 100%;\n  height: 4rem;\n  z-index: 999;\n"]);return E=function(){return e},e}var g=function(e){var n=e.onHamburger,t=e.isOpen,c=Object(a.useState)(!1),l=Object(i.a)(c,2),o=l[0],f=l[1],s=Object(a.useRef)(null),d=function e(n){s.current.contains(n.target)||(f(!1),document.removeEventListener("click",e))};return r.a.createElement(j,null,r.a.createElement(O,{onClick:function(){return n(!t)}},r.a.createElement(u.a,null)),r.a.createElement(k,{onClick:function(){f(!0),document.addEventListener("click",d)}},r.a.createElement(x,{src:m.a,alt:"user avatar"}),r.a.createElement(y,null,"Shahan"),r.a.createElement(w,{isActive:o,ref:s},r.a.createElement(C,null,"Logout"))))},j=o.a.div(E()),O=o.a.div(v()),k=o.a.div(p()),x=o.a.img(b()),y=o.a.span(h()),w=o.a.ul(d(),function(e){return e.isActive?"1":"0"},function(e){return e.isActive?"visible":"hidden"}),C=o.a.li(s()),z=t(18);function A(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-left: 1.2rem;\n  border-left: 0.5rem;\n  font-weight: 500;\n  background-color: ",";\n  color: ",";\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: ",";\n    height: 100%;\n    background-color: #5f5f5f;\n  }\n"]);return A=function(){return e},e}function V(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  color: #72777a;\n  height: 3.3rem;\n"]);return V=function(){return e},e}function H(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 2;\n  height: 100vh;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 0rem;\n    transition: all 400ms ease;\n    &-track {\n      -webkit-box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);\n      background-color: #f5f5f5;\n    }\n    &-thumb {\n      border-radius: 0rem;\n      background-color: #5f5f5f;\n    }\n  }\n  &:hover {\n    &::-webkit-scrollbar {\n      width: 0.5rem;\n    }\n  }\n"]);return H=function(){return e},e}function M(){var e=Object(c.a)(["\n  color: #313435;\n  font-weight: 700;\n  line-height: 1;\n  letter-spacing: 0.2rem;\n  margin-bottom: 0;\n"]);return M=function(){return e},e}function S(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 4rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);\n  cursor: pointer;\n"]);return S=function(){return e},e}function P(){var e=Object(c.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 15.5rem;\n  background-color: #fff;\n  border-right: 1px solid rgba(0, 0, 0, 0.0625);\n  transform: ",";\n  z-index: 99;\n"]);return P=function(){return e},e}var D=function(e){var n=e.location,t=e.history,a=e.isActive,c=e.onClick;return r.a.createElement(F,{isActive:a},r.a.createElement(L,{onClick:function(){return t.push("/")}},r.a.createElement(B,null,"ReactAdminator")),r.a.createElement(J,null,r.a.createElement(z.b,{to:"/dashboard"},r.a.createElement(R,{onClick:c},r.a.createElement(G,{isActive:n.pathname.includes("/dashboard")},"Dashboard"))),r.a.createElement(z.b,{to:"/calendar"},r.a.createElement(R,{onClick:c},r.a.createElement(G,{isActive:n.pathname.includes("/calendar")},"Calendar"))),r.a.createElement(z.b,{to:"/charts"},r.a.createElement(R,{onClick:c},r.a.createElement(G,{isActive:n.pathname.includes("/charts")},"Charts"))),r.a.createElement(z.b,{to:"/forms"},r.a.createElement(R,{onClick:c},r.a.createElement(G,{isActive:n.pathname.includes("/forms")},"Forms"))),r.a.createElement(z.b,{to:"/map"},r.a.createElement(R,{onClick:c},r.a.createElement(G,{isActive:n.pathname.includes("/map")},"Map")))))},F=o.a.aside(P(),function(e){return!e.isActive&&"translateX(-100%)"}),L=o.a.div(S()),B=o.a.h3(M()),J=o.a.ul(H()),R=o.a.li(V()),G=o.a.div(A(),function(e){return e.isActive&&" #cacaca"},function(e){return e.isActive&&" #313435"},function(e){return e.isActive&&".3rem"});function W(){var e=Object(c.a)(["\n  display: inline-block;\n  margin-left: 0.3rem;\n\n  &:hover {\n    color: #7c8695;\n  }\n"]);return W=function(){return e},e}function X(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #7c8695;\n  background-color: #fff;\n  border-top: 1px solid rgba(0, 0, 0, 0.0625);\n  text-align: center;\n  font-size: 1rem;\n  min-height: 4rem;\n"]);return X=function(){return e},e}var Y=function(){var e=new Date;return r.a.createElement(_,null,r.a.createElement("p",null,"Copyright \xa9 ",e.getFullYear()," Developed by",r.a.createElement(q,{href:"https://www.facebook.com/SaroarShahan",rel:"noopener noreferrer",target:"_blank"},"SaroarShahan"),"."))},_=o.a.div(X()),q=o.a.a(W());function I(){return r.a.createElement("div",{style:{height:60}})}function K(){var e=Object(c.a)(["\n  width: 100%;\n  background-color: #f9fafb;\n  padding: 1.5rem;\n  min-height: calc(100vh - 7.8rem);\n"]);return K=function(){return e},e}function N(){var e=Object(c.a)(["\n  padding-left: ",";\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n"]);return N=function(){return e},e}function Q(){var e=Object(c.a)(["\n  display: flex;\n  transition: all 0.4s ease 0s;\n  position: relative;\n"]);return Q=function(){return e},e}var T=Object(l.f)(function(e){var n=Object(a.useState)(!0),t=Object(i.a)(n,2),c=t[0],l=t[1],o=window.innerWidth;Object(a.useEffect)(function(){o<=768&&l(!1)},[o]),window.addEventListener("resize",function(){l(!(o<=768))});var u=e.children,f=e.location,m=e.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{isActive:c},r.a.createElement(D,{location:f,history:m,isActive:c,onClick:function(){o<=768&&l(!1)}}),r.a.createElement(Z,{isActive:c},r.a.createElement("div",null,r.a.createElement(g,{isOpen:c,onHamburger:l}),r.a.createElement(I,null)),r.a.createElement($,null,u),r.a.createElement(Y,null))))}),U=o.a.div(Q()),Z=o.a.div(N(),function(e){return e.isActive?"15.5rem":"0rem"}),$=o.a.main(K()),ee=t(30),ne=t(31),te=t(33),ae=t(32),re=t(34),ce=t(29),ie=function(e){return r.a.createElement("svg",Object.assign({height:"512pt",viewBox:"-50 0 512 512",width:"512pt"},e),r.a.createElement("path",{d:"M388.129 512H24.773C11.093 512 0 500.906 0 487.227V24.773C0 11.093 11.09 0 24.773 0H388.13c13.683 0 24.773 11.094 24.773 24.773v462.454c0 13.68-11.09 24.773-24.773 24.773zm0 0",fill:"#6f6571"}),r.a.createElement("path",{d:"M371.613 478.969H41.29a8.26 8.26 0 0 1-8.258-8.258V41.289a8.26 8.26 0 0 1 8.258-8.258h330.324c4.563 0 8.258 3.7 8.258 8.258v429.422a8.26 8.26 0 0 1-8.258 8.258zm0 0",fill:"#ff8086"}),r.a.createElement("path",{d:"M371.613 33.031H41.29a8.26 8.26 0 0 0-8.258 8.258v57.809h165.16c4.563 0 8.258-3.7 8.258-8.258V74.324c0-4.562 3.7-8.258 8.262-8.258h49.547a8.258 8.258 0 0 1 8.258 8.258V90.84a8.258 8.258 0 0 0 8.257 8.258h99.098V41.289a8.26 8.26 0 0 0-8.258-8.258zm0 0",fill:"#eceaec"}),r.a.createElement("g",{fill:"#fff"},r.a.createElement("path",{d:"M206.45 231.227c-22.766 0-41.29 18.523-41.29 41.289v66.066c0 22.766 18.524 41.29 41.29 41.29 22.769 0 41.292-18.524 41.292-41.29v-66.066c0-22.766-18.523-41.29-41.293-41.29zm24.777 107.355c0 13.66-11.114 24.773-24.778 24.773-13.66 0-24.773-11.113-24.773-24.773v-66.066c0-13.66 11.113-24.774 24.773-24.774 13.664 0 24.778 11.113 24.778 24.774zm0 0M148.645 330.324h-8.258v-90.84c0-4.566-3.696-8.257-8.258-8.257s-8.258 3.695-8.258 8.257v90.84H84.902l22.203-88.84c1.114-4.418-1.582-8.902-6.007-10.007-4.438-1.137-8.91 1.574-10.008 6.007l-24.774 99.098a8.22 8.22 0 0 0 1.5 7.078 8.234 8.234 0 0 0 6.508 3.18h49.547v24.773c0 4.567 3.695 8.258 8.258 8.258s8.258-3.695 8.258-8.258V346.84h8.258a8.253 8.253 0 0 0 8.257-8.258 8.25 8.25 0 0 0-8.257-8.258zm0 0M346.84 330.324h-8.262v-90.84a8.25 8.25 0 0 0-8.258-8.257 8.255 8.255 0 0 0-8.257 8.257v90.84h-38.965l22.199-88.84c1.113-4.418-1.578-8.902-6.008-10.007-4.434-1.137-8.91 1.574-10.008 6.007l-24.773 99.098a8.22 8.22 0 0 0 1.5 7.078 8.245 8.245 0 0 0 6.508 3.18h49.546v24.773a8.253 8.253 0 0 0 8.258 8.258 8.253 8.253 0 0 0 8.258-8.258V346.84h8.262a8.255 8.255 0 0 0 8.258-8.258 8.253 8.253 0 0 0-8.258-8.258zm0 0"})),r.a.createElement("path",{d:"M16.516 478.969V1.399C6.914 4.811 0 14.003 0 24.772v462.454C0 500.907 11.09 512 24.773 512H388.13c10.77 0 19.957-6.914 23.371-16.516H33.031c-9.12 0-16.515-7.394-16.515-16.515zm0 0",fill:"#5d5360"}),r.a.createElement("path",{d:"M198.191 99.098h-49.546V74.324c0-4.562 3.699-8.258 8.257-8.258h57.809a8.259 8.259 0 0 0-8.262 8.258V90.84a8.258 8.258 0 0 1-8.258 8.258zm0 0M264.258 66.066a8.258 8.258 0 0 1 8.258 8.258V90.84a8.258 8.258 0 0 0 8.257 8.258h57.805V74.324a8.255 8.255 0 0 0-8.258-8.258zm0 0M123.871 66.066H82.578a8.258 8.258 0 0 0-8.258 8.258v24.774h57.809V74.324c0-4.562-3.7-8.258-8.258-8.258zm0 0",fill:"#dad8db"}),r.a.createElement("path",{d:"M346.84 140.387H66.063a8.258 8.258 0 0 1 0-16.516H346.84a8.258 8.258 0 0 1 0 16.516zm0 0",fill:"#e5646e"}))};function le(){var e=Object(c.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n  font-weight: 500;\n"]);return le=function(){return e},e}function oe(){var e=Object(c.a)(["\n  height: 20rem;\n  width: 20rem;\n  padding: 2.5rem;\n  display: flex;\n  align-items: center;\n"]);return oe=function(){return e},e}function ue(){var e=Object(c.a)(["\n  color: #fff;\n  font-weight: 500;\n  font-size: 1.5rem;\n"]);return ue=function(){return e},e}function fe(){var e=Object(c.a)(["\n  margin-top: 0.7rem;\n  border-radius: 90rem;\n  padding: 0.3rem 1.5rem;\n  background-color: #0f9aee;\n"]);return fe=function(){return e},e}function me(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 18rem);\n"]);return me=function(){return e},e}function se(e){return r.a.createElement(de,null,r.a.createElement(pe,null,r.a.createElement(ie,null)),r.a.createElement(ve,null,"Oops! Page not found"),r.a.createElement(he,null,r.a.createElement(be,{onClick:function(){return e.history.replace("/")}},"Go Back")))}var de=o.a.div(me()),he=o.a.div(fe()),be=o.a.button(ue()),pe=o.a.div(oe()),ve=o.a.p(le()),Ee=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,455)).then(function(e){return{default:e.DashboardContainer}})}),ge=function(e){function n(){return Object(ee.a)(this,n),Object(te.a)(this,Object(ae.a)(n).apply(this,arguments))}return Object(re.a)(n,e),Object(ne.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(a.Suspense,{fallback:r.a.createElement(ce.a,{fullscreen:!0})},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/dashboard",component:Ee}),r.a.createElement(l.a,{exact:!0,from:"/",to:"/dashboard"}),r.a.createElement(l.b,{render:function(){return r.a.createElement(se,{history:e.props.history})}})))}}]),n}(a.Component),je=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,454)).then(function(e){return{default:e.ChartsContainer}})}),Oe=function(e){function n(){return Object(ee.a)(this,n),Object(te.a)(this,Object(ae.a)(n).apply(this,arguments))}return Object(re.a)(n,e),Object(ne.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(ce.a,{fullscreen:!0})},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/charts",component:je})))}}]),n}(a.Component),ke=Object(a.lazy)(function(){return Promise.all([t.e(5),t.e(6)]).then(t.bind(null,456))}),xe=function(e){function n(){return Object(ee.a)(this,n),Object(te.a)(this,Object(ae.a)(n).apply(this,arguments))}return Object(re.a)(n,e),Object(ne.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(ce.a,{fullscreen:!0})},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/calendar",component:ke})))}}]),n}(a.Component),ye=Object(a.lazy)(function(){return t.e(10).then(t.bind(null,451))}),we=function(e){function n(){return Object(ee.a)(this,n),Object(te.a)(this,Object(ae.a)(n).apply(this,arguments))}return Object(re.a)(n,e),Object(ne.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(ce.a,{fullscreen:!0})},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/forms",component:ye})))}}]),n}(a.Component),Ce=Object(a.lazy)(function(){return Promise.all([t.e(4),t.e(12)]).then(t.bind(null,452))}),ze=[{path:"/dashboard",component:ge},{path:"/calendar",component:xe},{path:"/charts",component:Oe},{path:"/forms",component:we},{path:"/map",component:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(ce.a,{fullscreen:!0})},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/map",component:Ce})))}},{path:"/",component:ge,exact:!0}],Ae=t(37);n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null,r.a.createElement(l.d,null,ze.map(function(e,n){return r.a.createElement(Ae.a,Object.assign({},"/"===e&&{exact:!0},{key:n,path:e.path,component:e.component}))}))))}}}]);
//# sourceMappingURL=11.7be9e540.chunk.js.map