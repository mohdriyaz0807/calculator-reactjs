(this["webpackJsonpmy-react-calculator"]=this["webpackJsonpmy-react-calculator"]||[]).push([[0],[,function(_,t,e){"use strict";var s=e(0);e(2),e(4);t.a=function(_){var t="="===_.label?"green":"gold";return Object(s.jsx)("div",{children:Object(s.jsx)("button",{style:{backgroundColor:t,color:"black"},className:"item",onClick:function(){_.show(_.label)},children:_.label})})}},,,function(_,t,e){},,function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_RIYAZ_Documents_guvi_tasks_my_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_components_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_components_display__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState2=Object(C_Users_RIYAZ_Documents_guvi_tasks_my_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1],Output=function Output(val){switch(val){case"AC":setResult("");break;case"C":if("number"===typeof result)setResult("");else{var clear=result.split("").slice(0,result.length-1).join("");setResult(clear)}break;case"\u221aX":setResult(Math.sqrt(result));break;case"=":var ans=eval(result);setResult(ans);break;default:"number"===typeof result?(setResult(""),setResult(val)):setResult(result+val)}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_display__WEBPACK_IMPORTED_MODULE_5__.a,{value:result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"AC",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"C",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"\u221aX",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"/",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"7",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"8",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"9",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"*",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"4",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"5",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"6",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"-",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"1",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"2",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"3",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"+",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"%",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"0",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:".",show:Output}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button__WEBPACK_IMPORTED_MODULE_4__.a,{label:"=",show:Output})]})]})}__webpack_exports__.a=App},function(_,t,e){"use strict";var s=e(0);e(2),e(4);t.a=function(_){return Object(s.jsx)("div",{children:Object(s.jsx)("input",{className:"textfield",type:"text",value:_.value,readOnly:!0})})}},,,,,,,function(_,t,e){},function(_,t,e){},function(_,t,e){"use strict";e.r(t);var s=e(0),u=e(2),a=e.n(u),E=e(5),n=e.n(E),O=(e(14),e(6)),c=function(_){_&&_ instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(t){var e=t.getCLS,s=t.getFID,u=t.getFCP,a=t.getLCP,E=t.getTTFB;e(_),s(_),u(_),a(_),E(_)}))};n.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O.a,{})}),document.getElementById("root")),c()}],[[16,1,2]]]);
//# sourceMappingURL=main.87f4f64f.chunk.js.map