(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),i=(n(0),n(268)),o={id:"delay",title:"delay",sidebar_label:"delay"},c={id:"api/delay",title:"delay",description:"Allows for the provided animation to start with a specified delay.",source:"@site/docs/api/delay.md",permalink:"/react-native-reanimated/docs/next/api/delay",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/api/delay.md",version:"next",sidebar_label:"delay",sidebar:"docs",previous:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/next/api/cancelAnimation"},next:{title:"loop",permalink:"/react-native-reanimated/docs/next/api/loop"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],d={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Allows for the provided animation to start with a specified delay."),Object(i.b)("p",null,"In case the value for which we are starting the delayed animation is running a previous animation, that animation won't be cancelled until the new animation starts after the delay.\nIf you want the animation to cancel immediately, use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"cancelAnimation"}),Object(i.b)("inlineCode",{parentName:"a"},"cancelAnimation"))," method."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"delayms-number"},Object(i.b)("inlineCode",{parentName:"h4"},"delayMS")," ","[number]"),Object(i.b)("p",null,"Delay in milliseconds after which we want the provided animation to start."),Object(i.b)("h4",{id:"delayedanimation-animation"},Object(i.b)("inlineCode",{parentName:"h4"},"delayedAnimation")," ","[animation]"),Object(i.b)("p",null,"The animation that will be started after the delay."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"useAnimatedStyle"}),Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Timing animation will start on the ",Object(i.b)("inlineCode",{parentName:"p"},"sharedValue")," after one second."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"sharedValue.value = delay(1000, withTiming(70));\n")))}u.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return n?r.a.createElement(b,c(c({ref:t},d),{},{components:n})):r.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);