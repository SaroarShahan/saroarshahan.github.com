(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/bg.d6dac1c0.png"},37:function(e,t,n){e.exports=n(94)},64:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),o=n(10),l=n(6),u=n(8),m=n(7),s=n(16),d=n.n(s),p=n(32),f=n.n(p);function h(){var e=Object(l.a)(["\n  margin: 0 0 1.5rem;\n  color: #fff;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media (max-width: 991px) {\n    font-size: 1.4rem;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(l.a)(["\n  margin: 0 0 2rem;\n  font-weight: 700;\n  font-size: 3.5rem;\n  color: #fff;\n  letter-spacing: .2rem;\n\n  @media (max-width: 991px) {\n    font-size: 2.8rem;\n    margin: 0 0 1.5rem;\n  }\n"]);return g=function(){return e},e}function w(){var e=Object(l.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  width: 40%;\n  height: 100%;\n  background: ",";\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 3rem 0;\n  }\n\n  @media (max-width: 448px) and (min-width: 320px) {\n    padding: 1rem 0;\n  }\n\n"]);return w=function(){return e},e}var y=function(){return r.a.createElement(b,{bg:f.a},r.a.createElement(v,null,"Today's Weather"),r.a.createElement(E,null,"Find temperature, humidity and more..."))},b=m.a.div(w(),function(e){return e.bg?"url(".concat(e.bg,")"):null}),v=m.a.h1(g()),E=m.a.p(h()),j=(n(64),function(e){var t=e.city,n=e.country,a=e.temperature,c=e.humidity,i=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"weather__info"},r.a.createElement("p",{className:"weather__key"},"City:",r.a.createElement("span",{className:"weather__value"},t||"N/A")),r.a.createElement("p",{className:"weather__key"},"Country:",r.a.createElement("span",{className:"weather__value"},n||"N/A")),r.a.createElement("p",{className:"weather__key"},"Temperature:",r.a.createElement("span",{className:"weather__value"},a||"N/A")),r.a.createElement("p",{className:"weather__key"},"Humidity:",r.a.createElement("span",{className:"weather__value"},c||"N/A")),r.a.createElement("p",{className:"weather__key"},"Weather forecast:",r.a.createElement("span",{className:"weather__value"},i||"N/A"))))}),x=n(12);function _(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 18rem);\n"]);return _=function(){return e},e}var O=function(e){var t=e.fullscreen,n=e.small,a=e.large,c=e.color;return t?r.a.createElement(N,null,r.a.createElement(x.ClipLoader,{sizeUnit:"px",size:40,color:c||"#0f9aee",loading:!0})):n?r.a.createElement(x.ClipLoader,{sizeUnit:"px",size:20,color:c||"#0f9aee",loading:!0}):a?r.a.createElement(x.ClipLoader,{sizeUnit:"px",size:80,color:c||"#0f9aee",loading:!0}):r.a.createElement(x.ClipLoader,{sizeUnit:"px",size:40,color:c||"#0f9aee",loading:!0})},N=m.a.div(_()),C=function(e){var t=e.getWeather,n=e.isLoading,c=Object(a.useState)(""),i=Object(u.a)(c,2),o=i[0],l=i[1],m=Object(a.useState)(""),s=Object(u.a)(m,2),d=s[0],p=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",name:"city",placeholder:"City name...",onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"text",name:"country",placeholder:"Country name...",onChange:function(e){return p(e.target.value)}}),r.a.createElement("button",{onClick:function(){t({cityName:o,countryName:d}),l(""),p("")},className:"btn",type:"submit"},n?r.a.createElement(O,{small:!0,color:"#fff"}):"Search"))},k="76abe5b9b0be9f78c04a1a3d1f2fd577";function z(){var e=Object(l.a)(["\n    width: 60%;\n    height: 100%;\n    background-color: #2c3e50;\n    padding: 3rem;\n\n    @media (max-width: 768px) {\n        width: 100%;\n        padding: 1rem;\n    }\n"]);return z=function(){return e},e}function S(){var e=Object(l.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: center;\n    height: 90vh;\n    width: 90vw;\n\n    @media (max-width: 768px) {\n        flex-flow: column wrap;\n        height: auto;\n        max-height: 90vh;\n    }\n"]);return S=function(){return e},e}function A(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n\n   \n"]);return A=function(){return e},e}var L=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),m=l[0],s=l[1],p=Object(a.useState)(""),f=Object(u.a)(p,2),h=f[0],g=f[1],w=Object(a.useState)(null),b=Object(u.a)(w,2),v=b[0],E=b[1],x=Object(a.useState)(null),_=Object(u.a)(x,2),O=_[0],N=_[1],z=Object(a.useState)(""),S=Object(u.a)(z,2),A=S[0],L=S[1];Object(a.useEffect)(function(){navigator.geolocation.getCurrentPosition(q)},[]);var q=function(e){var t=e.coords.latitude,n=e.coords.longitude,a="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(t,",").concat(n,"&key=AIzaSyCgQs71zWRYkIHoiCl2Lejbsno12zv9qwA");d.a.get(a).then(function(e){if(200===e.status){var t=e.data.results[0].address_components[2].long_name,n=e.data.results[7].address_components[0].long_name,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,",").concat(n,"&appid=").concat(k,"&units=metric");F(a),setInterval(function(){F(a),console.log("called")},3e5)}})},F=function(e){d.a.get(e).then(function(e){s(e.data.name),g(e.data.sys.country),E(e.data.main.temp),N(e.data.main.humidity),L(e.data.weather[0].description)}).catch(function(e){o.b.error("Location not found!")})};return r.a.createElement(W,null,r.a.createElement(I,null,r.a.createElement(y,null),r.a.createElement(U,null,r.a.createElement(C,{getWeather:function(e){var t=e.cityName,n=e.countryName;if(t)if(n){var a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,",").concat(n,"&appid=").concat(k,"&units=metric");c(!0),d.a.get(a).then(function(e){s(e.data.name),g(e.data.sys.country),E(e.data.main.temp),N(e.data.main.humidity),L(e.data.weather[0].description),c(!1)}).catch(function(e){c(!1)})}else o.b.error("City and Country field should not be empty!");else o.b.error("City and Country field should not be empty!")},isLoading:n}),r.a.createElement(j,{city:m,country:h,temperature:v,humidity:O,description:A}))))},W=m.a.div(A()),I=m.a.div(S()),U=m.a.div(z());n(93);var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.3591165e.chunk.js.map