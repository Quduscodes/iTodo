(this.webpackJsonpitodo=this.webpackJsonpitodo||[]).push([[0],{11:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var c=o(1),l=o.n(c),n=o(4),s=o.n(n),d=o(3),a=o(0);var i=function(e){return Object(a.jsxs)("div",{className:"header",style:e.isDark?null:{color:"black"},children:[Object(a.jsxs)("label",{className:"switch",children:[Object(a.jsx)("input",{type:"checkbox",checked:e.isDark,onChange:e.toggle}),Object(a.jsx)("span",{className:"slider round"})]}),Object(a.jsx)("h1",{children:"iTodo"}),Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("div",{className:"menu-button",style:e.isDark?null:{backgroundColor:"black"}}),Object(a.jsx)("div",{className:"menu-button",style:e.isDark?null:{backgroundColor:"black"}}),Object(a.jsx)("div",{className:"menu-button",style:e.isDark?null:{backgroundColor:"black"}})]})]})};var r=function(e){var t=e.count;return Object(a.jsx)("div",{className:"todoCounter",children:Object(a.jsxs)("h3",{children:["Today's Todos - ",t," Todos"]})})};var b=function(e){var t=e.todo,o=e.theme;return Object(a.jsxs)("div",{className:"todoItem",style:o?null:{backgroundColor:"#cdcdcd",color:"black",fontWeight:"bold",fontSize:15,borderBottom:"2px solid black"},children:[Object(a.jsx)("input",{type:"checkbox",checked:t.completed}),Object(a.jsx)("p",{style:t.completed?{color:"#cdcdcd",fontStyle:"italic",textDecoration:"line-through"}:null,children:t.text})]})},j=[{id:1,text:"Welcome to iTodo",completed:!1},{id:2,text:"Click Plus Button to add new todo",completed:!1},{id:3,text:"Improve Codebase",completed:!1},{id:4,text:"Click on the check box to mark an item as completed",completed:!1},{id:5,text:"Enter multiple todos by entering separate Todos in separate lines",completed:!1}];var u=function(e){var t=e.show,o=e.onClick;return!1===t?null:Object(a.jsx)("div",{className:"todoModal",onClick:o,children:Object(a.jsxs)("div",{className:"modalContent",onClick:function(e){e.stopPropagation()},children:[Object(a.jsx)("div",{className:"modalHeader",children:Object(a.jsx)("h4",{className:"modalTitle",children:"Add New Todo"})}),Object(a.jsx)("div",{className:"modalBody",children:Object(a.jsx)("textarea",{cols:"40",rows:"8",placeholder:"Enter to-do..."})}),Object(a.jsx)("div",{className:"modalFooter",children:Object(a.jsx)("button",{className:"button",onClick:o,children:"Add Todo(s)"})})]})})},m=o(5),h=[];var x=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),o=t[0],l=t[1],n=Object(c.useState)(!1),s=Object(d.a)(n,2),x=s[0],k=s[1],O=(h.length>0?h:j).map((function(e){return Object(a.jsx)(b,{todo:e,theme:x},e.id)}));return Object(a.jsxs)("div",{className:"App",style:x?null:{backgroundColor:"#cdcdcd",color:"black",fontWeight:"bold",fontSize:15},children:[Object(a.jsx)(i,{isDark:x,toggle:function(){k(!x)}}),Object(a.jsx)(r,{count:h.length}),Object(a.jsx)(m.a,{icon:"+",mainButtonStyles:{backgroundColor:" rgb(39, 46, 49)"},event:"click",text:"Add New Todo",onClick:function(){l(!0)}}),Object(a.jsx)(u,{show:o,onClick:function(){l(!1)}}),O]})};o(11);s.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.675257aa.chunk.js.map