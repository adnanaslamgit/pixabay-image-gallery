(this["webpackJsonppixabay-image-gallery"]=this["webpackJsonppixabay-image-gallery"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(4),r=s.n(a),i=s(2),l=s(0),o=function(e){var t=e.item,s=(e.tag,t.tags.split(","));return Object(l.jsxs)("div",{className:"max-w-md rounded overflow-hidden shadow-lg h-30",children:[Object(l.jsx)("img",{src:t.webformatURL,alt:"Random",className:"w-full transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..."}),Object(l.jsxs)("div",{className:"px-6 py-4",children:[Object(l.jsxs)("div",{className:"font-bold text-red-600 text-base mb-3",children:["Clicked By : ",t.user]}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{className:"text-sm",children:[Object(l.jsx)("b",{children:"Views"})," : ",t.views]}),Object(l.jsxs)("li",{className:"text-sm",children:[Object(l.jsx)("b",{children:"Likes"})," : ",t.likes]}),Object(l.jsxs)("li",{className:"text-sm",children:[Object(l.jsx)("b",{children:"Comments"})," : ",t.comments]}),Object(l.jsxs)("li",{className:"text-sm",children:[Object(l.jsx)("b",{children:"Downloads"})," : ",t.downloads]})]})]}),Object(l.jsx)("div",{className:"px-6 text-base py-4",children:s.map((function(e,t){return Object(l.jsxs)("span",{className:"inline-block mr-1 mt-1 bg-gray-200  rounded-full px-2 py-1 text-sm font-semibold  text-gray-800",children:["#",e]},t)}))})]})},d=function(e){var t=e.searchText,s=Object(n.useState)(),c=Object(i.a)(s,2),a=c[0],r=c[1];return Object(l.jsx)("div",{className:"max-w-md overflow-hidden my-12 mx-auto",children:Object(l.jsx)("form",{on:!0,onSubmit:function(e){e.preventDefault(),t(a)},className:"w-full max-w-md",children:Object(l.jsxs)("div",{className:"flex items-center border-b-2 border-green-500 py-2",children:[Object(l.jsx)("input",{className:"appearance-none bg-transparent border-none  outline-none w-full text-gray-700 mr-2 py-1 px-2 leading-tight  focus:outline-none",onChange:function(e){return r(e.target.value)},type:"text",placeholder:"Type to Search Images....."}),Object(l.jsx)("button",{className:"flex-shrink-0 bg-green-500  hover:bg-green-700 border-green-500 hover:border-green-700  text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Search"})]})})})},b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(!0),r=Object(i.a)(a,2),b=r[0],m=r[1],j=Object(n.useState)(""),x=Object(i.a)(j,2),u=x[0],h=x[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=YOUR_PIXABAY_API_KEY&q=".concat(u,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){c(e.hits),m(!1)})).catch((function(e){return console.log(e)}))}),[u]),Object(l.jsxs)("div",{className:"container mx-auto",children:[Object(l.jsx)(d,{searchText:function(e){return h(e)}}),!b&&0===s.length&&Object(l.jsx)("h1",{className:"text-4xl text-center mx-auto mt-32",children:"No Images Found"}),b?Object(l.jsx)("h1",{className:"text-6xl text-center mx-auto mt-32",children:Object(l.jsx)("img",{src:"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",className:"mx-auto",alt:"Loading"})}):Object(l.jsx)("div",{className:"grid grid-cols-4 gap-6",children:s.map((function(e){return Object(l.jsx)(o,{item:e},e.id)}))})]})};s(10);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.809e2efc.chunk.js.map