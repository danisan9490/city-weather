(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),l=t.n(c),o=(t(13),t(3)),i=t.n(o),s=t(7),u=t(1),m=(t(15),function(e){var a=e.titulo;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper light-blue darken-2"},r.a.createElement("a",{href:"#!",className:"brand-logo"},a)))}),d=t(2),p=t(4),E=function(e){var a=e.mensaje;return r.a.createElement("p",{className:"red darken-4 error"},a)},v=function(e){var a=e.busqueda,t=e.guardarBusqueda,c=e.guardarConsultar,l=a.ciudad,o=a.pais,i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],v=s[1],f=function(e){t(Object(p.a)(Object(p.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==l.trim()&&""!==o.trim()?(v(!1),c(!0)):v(!0)}},m?r.a.createElement(E,{mensaje:"All fields are required"}):null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"text",name:"ciudad",id:"ciudad",value:l,onChange:f}),r.a.createElement("label",{htmlFor:"ciudad"},"City: ")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("select",{name:"pais",id:"pais",value:o,onChange:f},r.a.createElement("option",{value:""},"-- Choose Country --"),r.a.createElement("option",{value:"US"},"United States"),r.a.createElement("option",{value:"MX"},"Mexico"),r.a.createElement("option",{value:"AR"},"Argentina"),r.a.createElement("option",{value:"CO"},"Colombia"),r.a.createElement("option",{value:"CR"},"Costa Rica"),r.a.createElement("option",{value:"ES"},"Spain"),r.a.createElement("option",{value:"PE"},"Peru")),r.a.createElement("label",{htmlFor:"pais"},"Country: ")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"submit",value:"Search",className:"waves-effect waves-light btn-large btn-block yellow accent-4"})))},f=function(e){var a=e.resultado,t=a.name,n=a.main;if(!t)return null;return r.a.createElement("div",{className:"card-panel white col s12"},r.a.createElement("div",{className:"black-text"},r.a.createElement("h2",null,t,": "),r.a.createElement("p",{className:"temperatura"},parseFloat(n.temp-273.15,10).toFixed(2),"  ",r.a.createElement("span",null," \u2103 ")),r.a.createElement("p",null,"Max:",parseFloat(n.temp_max-273.15,10).toFixed(2),"  ",r.a.createElement("span",null," \u2103 ")),r.a.createElement("p",null,"Min:",parseFloat(n.temp_min-273.15,10).toFixed(2),"  ",r.a.createElement("span",null," \u2103 "))))};var b=function(){var e,a=Object(n.useState)({ciudad:"",pais:""}),t=Object(u.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(!1),d=Object(u.a)(o,2),p=d[0],b=d[1],h=Object(n.useState)({}),g=Object(u.a)(h,2),j=g[0],w=g[1],N=Object(n.useState)(!1),O=Object(u.a)(N,2),x=O[0],C=O[1],S=c.ciudad,k=c.pais;return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=13;break}return"3474cbad59a643bcfa72ef477262b036",a="http://api.openweathermap.org/data/2.5/weather?q=".concat(S,",").concat(k,"&appid=").concat("3474cbad59a643bcfa72ef477262b036"),e.next=5,fetch(a);case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,console.log(n),w(n),b(!1),"404"===n.cod?C(!0):C(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),e=x?r.a.createElement(E,{mensaje:"No Results"}):r.a.createElement(f,{resultado:j}),r.a.createElement("div",{className:"App"},r.a.createElement(m,{titulo:"City Weather React App"}),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row contenedor-form"},r.a.createElement("div",{className:"col m6 s12"},r.a.createElement(v,{busqueda:c,guardarBusqueda:l,guardarConsultar:b})),r.a.createElement("div",{className:"col m6 s12 componente"},e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.2cbd6c4c.chunk.js.map