(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),s=c(7),r=c.n(s),i=(c(14),c(2)),a=c(0),l=Object(n.createContext)(),u=function(e){var t=JSON.parse(localStorage.getItem("theme")),c=null===t?{isLightTheme:!0}:t,o=Object(n.useState)({isLightTheme:c.isLightTheme,light:{text:"#555",ui:"#ddd",bg:"#eee"},dark:{text:"#ddd",ui:"#333",bg:"#555"},showToggleText:!1}),s=Object(i.a)(o,2),r=s[0],u=s[1];return Object(n.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(r))}),[r]),Object(a.jsx)(l.Provider,{value:{theme:r,setTheme:u},children:e.children})},d=c(8),h=c(17),j=function(e,t){switch(t.type){case"ADD_TODO":return[].concat(Object(d.a)(e),[{name:t.todo.name,note:t.todo.note,id:Object(h.a)()}]);case"REMOVE_TODO":return e.filter((function(e){return e.id!==t.id}));default:return e}},b=Object(n.createContext)(),O=function(e){var t=Object(n.useReducer)(j,[],(function(){var e=localStorage.getItem("todos");return e?JSON.parse(e):[]})),c=Object(i.a)(t,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(a.jsx)(b.Provider,{value:{todos:o,todoDispatch:s},children:e.children})},g=function(){var e=Object(n.useContext)(b).todos,t=Object(n.useContext)(l).theme,c=t.isLightTheme?t.light:t.dark;return Object(a.jsxs)("div",{className:"navbar",style:{background:c.ui,color:c.text},children:[Object(a.jsx)("h1",{children:"To-do List"}),Object(a.jsxs)("p",{children:[e.length," tasks remaining"]})]})},x=c(4),m=function(){var e=Object(n.useContext)(l),t=e.theme,c=e.setTheme,o=t.isLightTheme?t.light:t.dark,s=function(){c(Object(x.a)(Object(x.a)({},t),{},{showToggleText:!t.showToggleText}))};return Object(a.jsx)("div",{style:{background:o.bg,border:"1px solid "+o.text},onClick:function(){c(Object(x.a)(Object(x.a)({},t),{},{isLightTheme:!t.isLightTheme}))},onMouseEnter:s,onMouseLeave:s,className:"theme-toggle"})},f=function(){var e=Object(n.useContext)(l).theme,t=e.isLightTheme?e.light:e.dark,c=e.showToggleText?"block":"none";return Object(a.jsx)("div",{style:{display:c,color:t.text},className:"theme-toggle-text",children:"Change Theme"})},v=function(){var e=Object(n.useContext)(b).todoDispatch,t=Object(n.useContext)(l).theme,c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],r=o[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),h=d[0],j=d[1],O=t.isLightTheme?t.light:t.dark;return Object(a.jsxs)("form",{style:{background:O.ui,color:O.text},onSubmit:function(t){t.preventDefault(),e({type:"ADD_TODO",todo:{name:s,note:h}}),r(""),j("")},children:[Object(a.jsx)("input",{style:{background:O.bg,color:O.text},type:"text",placeholder:"What's your task?",value:s,onChange:function(e){return r(e.target.value)},required:!0}),Object(a.jsx)("input",{style:{background:O.bg,color:O.text},type:"text",placeholder:"Set note for the task",value:h,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("input",{style:{background:O.text,color:O.ui},type:"submit",value:"Add Task"})]})},k=function(e){var t=e.todo,c=Object(n.useContext)(b).todoDispatch,o=Object(n.useContext)(l).theme,s=o.isLightTheme?o.light:o.dark;return Object(a.jsxs)("li",{style:{background:s.bg},onClick:function(){return c({type:"REMOVE_TODO",id:t.id})},children:[Object(a.jsx)("div",{style:{color:s.text},className:"name",children:t.name}),Object(a.jsx)("div",{style:{color:s.text},className:"note",children:t.note})]})},p=function(){var e=Object(n.useContext)(b).todos,t=Object(n.useContext)(l).theme,c=t.isLightTheme?t.light:t.dark;return e.length?Object(a.jsx)("div",{style:{background:c.ui},className:"todo-list",children:Object(a.jsx)("ul",{children:e.map((function(e){return Object(a.jsx)(k,{todo:e},e.id)}))})}):Object(a.jsx)("div",{style:{background:c.ui,color:c.text},className:"empty",children:"No more tasks for today!"})},y=function(){var e=Object(n.useContext)(l).theme,t=e.isLightTheme?e.light:e.dark;return Object(a.jsx)("div",{className:"main",style:{background:t.ui,height:"100vh",width:"100vw"},children:Object(a.jsxs)("div",{className:"todo-container",style:{width:"50%",margin:"auto"},children:[Object(a.jsx)(g,{}),Object(a.jsx)("hr",{style:{background:t.text}}),Object(a.jsx)(p,{}),Object(a.jsx)("hr",{style:{background:t.text}}),Object(a.jsx)(v,{}),Object(a.jsx)(m,{}),Object(a.jsx)(f,{})]})})};var T=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(u,{children:Object(a.jsx)(O,{children:Object(a.jsx)(y,{})})})})};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.97348558.chunk.js.map