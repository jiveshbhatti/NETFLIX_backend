(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){},51:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(34),a=c.n(r),i=(c(42),c(6)),l=c.n(i),j=c(15),o=c(4),u=c(88),b=c(89),d=c(90),O=(c(44),c(10)),h=function(e){return{type:"LOGIN_SUCCESS",payload:e}},x=c(36),p=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return Object(x.a)({},e)}},m=c(0),v={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},f=Object(s.createContext)(v),g=function(e){var t=e.children,c=Object(s.useReducer)(p,v),n=Object(o.a)(c,2),r=n[0],a=n[1];return Object(s.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r.user))}),[r.user]),Object(m.jsx)(f.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,dispatch:a},children:t})},N=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useContext)(f).dispatch;return window.onscroll=function(){return n(0!==window.pageYOffset),function(){return window.onscroll=null}},Object(m.jsx)("div",{className:c?"navbar scrolled":"navbar",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""}),Object(m.jsx)(O.b,{to:"/",className:"link",children:Object(m.jsx)("span",{children:"Homepage"})}),Object(m.jsx)(O.b,{to:"/series",className:"link",children:Object(m.jsx)("span",{className:"navbarmainLinks",children:"Series"})}),Object(m.jsx)(O.b,{to:"/movies",className:"link",children:Object(m.jsx)("span",{className:"navbarmainLinks",children:"Movies"})})]}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)(u.a,{className:"icon"}),Object(m.jsx)(b.a,{className:"icon"}),Object(m.jsx)("img",{src:"https://i.imgur.com/vsMezLR.jpg",alt:""}),Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsx)(d.a,{className:"icon"}),Object(m.jsxs)("div",{className:"options",children:[Object(m.jsx)("span",{children:"Settings"}),Object(m.jsx)("span",{onClick:function(){return r({type:"LOGOUT"})},children:"Logout"})]})]})]})]})})},y=c(91),I=c(92),w=(c(51),c(18)),C=c.n(w).a.create({baseURL:"https://netflix-jivesh.herokuapp.com/api/"});function S(e){var t=e.type,c=e.setGenre,n=Object(s.useState)({}),r=Object(o.a)(n,2),a=r[0],i=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/movies/random?type=".concat(t),{headers:{token:"jivesh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFlYjI4ZjgwNGUyNzIzZTNmMjlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzgxMjM1MiwiZXhwIjoxNjM4MjQ0MzUyfQ.WnoO_DCBrC1WtEXGtch9j_vsIyUH1wwP9jYz6hZNEAM"}});case 3:c=e.sent,i(c.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),console.log(a),Object(m.jsxs)("div",{className:"featured",children:[t&&Object(m.jsxs)("div",{className:"category",children:[Object(m.jsx)("span",{children:"movies"===t?"Movies":"Series"}),Object(m.jsxs)("select",{name:"genre",id:"genre",onChange:function(e){return c(e.target.value)},children:[Object(m.jsx)("option",{children:"Genre"}),Object(m.jsx)("option",{value:"adventure",children:"Adventure"}),Object(m.jsx)("option",{value:"comedy",children:"Comedy"}),Object(m.jsx)("option",{value:"crime",children:"Crime"}),Object(m.jsx)("option",{value:"fantasy",children:"Fantasy"}),Object(m.jsx)("option",{value:"historical",children:"Historical"}),Object(m.jsx)("option",{value:"horror",children:"Horror"}),Object(m.jsx)("option",{value:"romance",children:"Romance"}),Object(m.jsx)("option",{value:"sci-fi",children:"Sci-fi"}),Object(m.jsx)("option",{value:"thriller",children:"Thriller"}),Object(m.jsx)("option",{value:"western",children:"Western"}),Object(m.jsx)("option",{value:"animation",children:"Animation"}),Object(m.jsx)("option",{value:"drama",children:"Drama"}),Object(m.jsx)("option",{value:"documentary",children:"Documentary"})]})]}),Object(m.jsx)("img",{src:a.img,alt:""}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("img",{src:a.imgTitle,alt:""}),Object(m.jsx)("span",{className:"desc",children:a.desc}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsxs)("button",{className:"play",children:[Object(m.jsx)(y.a,{}),Object(m.jsx)("span",{children:"Play"})]}),Object(m.jsxs)("button",{className:"more",children:[Object(m.jsx)(I.a,{}),Object(m.jsx)("span",{children:"Info"})]})]})]})]})}c(70);var k=c(96),M=c(97),z=(c(71),c(93)),U=c(94),_=c(95),R=c(3);function G(e){var t=e.index,c=e.item,n=Object(s.useState)(!1),r=Object(o.a)(n,2),a=r[0],i=r[1],u=Object(s.useState)({}),b=Object(o.a)(u,2),d=b[0],h=b[1];Object(s.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/movies/find/"+c,{headers:{token:"jivesh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFlYjI4ZjgwNGUyNzIzZTNmMjlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzgxMjM1MiwiZXhwIjoxNjM4MjQ0MzUyfQ.WnoO_DCBrC1WtEXGtch9j_vsIyUH1wwP9jYz6hZNEAM"}});case 3:t=e.sent,h(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[c]);Object(R.h)();return Object(m.jsx)(O.b,{to:{pathname:"/watch",movie:d},children:Object(m.jsxs)("div",{className:"listItem",style:{left:a&&225*t-50+2.5*t},onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[console.log("this is movie image",d,d.title),Object(m.jsx)("img",{src:d.imgSm,alt:"title pic"}),a&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("video",{src:d.trailer,autoPlay:!0,loop:!0}),Object(m.jsxs)("div",{className:"itemInfo",children:[Object(m.jsxs)("div",{className:"icons",children:[Object(m.jsx)(y.a,{className:"icon"}),Object(m.jsx)(z.a,{className:"icon"}),Object(m.jsx)(U.a,{className:"icon"}),Object(m.jsx)(_.a,{className:"icon"})]}),Object(m.jsxs)("div",{className:"itemInfoTop",children:[Object(m.jsx)("span",{children:d.duration}),Object(m.jsxs)("span",{className:"limit",children:["+",d.limit]}),Object(m.jsx)("span",{children:d.year})]}),Object(m.jsx)("div",{className:"desc",children:d.description}),Object(m.jsx)("div",{className:"genre",children:"Action"})]})]})]})})}c(72);function T(e){var t=e.list,c=Object(s.useState)(!1),n=Object(o.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)(0),l=Object(o.a)(i,2),j=l[0],u=l[1],b=Object(s.useState)(window.innerWidth/230),d=Object(o.a)(b,2),O=d[0],h=(d[1],Object(s.useRef)()),x=function(e){a(!0);var t=h.current.getBoundingClientRect().x-50;"left"===e&&j>0&&(u(j-1),h.current.style.transform="translateX(".concat(230+t,"px)")),"right"===e&&j<10-O&&(u(j+1),h.current.style.transform="translateX(".concat(-230+t,"px)"))};return Object(m.jsxs)("div",{className:"list",children:[Object(m.jsx)("span",{className:"listTitle",children:t.title}),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(k.a,{className:"sliderArrow left",onClick:function(){return x("left")},style:{display:!r&&"none"}}),Object(m.jsx)("div",{className:"container",ref:h,children:t.content.map((function(e,t){return Object(m.jsx)(G,{index:t,item:e})}))}),Object(m.jsx)(M.a,{className:"sliderArrow right",onClick:function(){return x("right")}})]})]})}var W=function(e){var t=e.type,c=Object(s.useState)([]),n=Object(o.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)(null),u=Object(o.a)(i,2),b=u[0],d=u[1];return Object(s.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("lists".concat(t?"?type="+t:"").concat(b?"&genre="+b:""),{headers:{token:"jivesh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFlYjI4ZjgwNGUyNzIzZTNmMjlhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzgxMjM1MiwiZXhwIjoxNjM4MjQ0MzUyfQ.WnoO_DCBrC1WtEXGtch9j_vsIyUH1wwP9jYz6hZNEAM"}});case 3:c=e.sent,a(c.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t,b]),Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)(N,{}),Object(m.jsx)(S,{type:t,setGenre:d}),r.map((function(e){return console.log(e.title),Object(m.jsx)(T,{list:e})}))]})};c(73);function E(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),a=Object(o.a)(r,2),i=a[0],u=a[1],b=Object(s.useState)(""),d=Object(o.a)(b,2),O=d[0],h=d[1],x=Object(s.useRef)(),p=Object(s.useRef)(),v=Object(s.useRef)(),f=Object(R.g)(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,u(p.current.value),h(v.current.value),e.next=6,C.post("auth/register",{email:c,username:O,password:i});case 6:console.log(O,i,c),f.push("/login"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"register",children:[Object(m.jsx)("div",{className:"top",children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"loginButton",children:" Sign In"})})]})}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(m.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(m.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),c?Object(m.jsxs)("form",{className:"input",children:[Object(m.jsx)("input",{type:"username",placeholder:"username",ref:v}),Object(m.jsx)("input",{type:"password",placeholder:"password",ref:p}),Object(m.jsx)("button",{className:"registerButton",onClick:g,children:"Start"})]}):Object(m.jsxs)("div",{className:"input",children:[Object(m.jsx)("input",{type:"email",placeholder:"email address",ref:x}),Object(m.jsx)("button",{className:"registerButton",onClick:function(){n(x.current.value)},children:"Get Started"})]})]})]})}var L=c(98);c(74);function A(){var e=Object(R.h)(),t=e.movie;return console.log(e),console.log(t),Object(m.jsxs)("div",{className:"watch",children:[Object(m.jsx)(O.b,{to:"/",children:Object(m.jsxs)("div",{className:"back",children:[Object(m.jsx)(L.a,{}),"Home"]})}),Object(m.jsx)("video",{className:"video",autoPlay:!0,progress:!0,controls:!0,src:t.video})]})}var F=function(){var e=Object(j.a)(l.a.mark((function e(t,c){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,e.next=4,C.post("auth/login",t);case 4:s=e.sent,c(h(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:"LOGIN_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}();c(75);function J(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),a=Object(o.a)(r,2),i=a[0],l=a[1],j=Object(s.useContext)(f).dispatch;return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("div",{className:"top",children:Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""})})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("h1",{children:"Sign In"}),Object(m.jsx)("h3",{children:"NOT ACTUAL NETFLIX!!!"}),Object(m.jsx)("input",{type:"email",placeholder:"Email or phone number",onChange:function(e){return n(e.target.value)}}),Object(m.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)}}),Object(m.jsx)("button",{className:"loginButton",onClick:function(e){e.preventDefault(),F({email:c,password:i},j)},children:"Sign In"}),Object(m.jsxs)("span",{children:["New to Netflix? ",Object(m.jsx)("b",{children:"Sign up now."})]}),Object(m.jsxs)("small",{children:["This page is protected by Google reCAPTCHA to ensure you're not a bot. ",Object(m.jsx)("b",{children:"Learn more"}),"."]})]})})]})}var Z=function(){var e=Object(s.useContext)(f).user;return Object(m.jsx)(O.a,{children:Object(m.jsxs)(R.d,{children:[Object(m.jsx)(R.b,{exact:!0,path:"/",children:e?Object(m.jsx)(W,{}):Object(m.jsx)(R.a,{to:"/register"})}),Object(m.jsx)(R.b,{exact:!0,path:"/register",children:e?Object(m.jsx)(R.a,{to:"/"}):Object(m.jsx)(E,{})}),Object(m.jsx)(R.b,{exact:!0,path:"/login",children:e?Object(m.jsx)(R.a,{to:"/"}):Object(m.jsx)(J,{})}),e&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(R.b,{exact:!0,path:"/movies",children:Object(m.jsx)(W,{type:"movie"})}),Object(m.jsx)(R.b,{exact:!0,path:"/series",children:Object(m.jsx)(W,{type:"series"})}),Object(m.jsx)(R.b,{exact:!0,path:"/watch",children:Object(m.jsx)(A,{})})]})]})})};a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(g,{children:Object(m.jsx)(Z,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.dd78b53e.chunk.js.map