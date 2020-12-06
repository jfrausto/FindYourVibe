/*! For license information please see main.8f4227db.chunk.js.LICENSE.txt */
(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{111:function(e,t,a){},120:function(e,t,a){e.exports=a(186)},125:function(e,t,a){},144:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),o=(a(125),a(21)),s=a(10),i=(a(76),a(86),a(8)),u=a(59),m=a(12),p=a(14),b=a(7),E=a(31),d=a.n(E),g=function(e){return d.a.get("/api/songs/"+e)},f=function(e){return d.a.get("/api/nouns/"+e)},h=function(e){return d.a.post("/api/postBlurb",e)},v=function(e){return d.a.post("/api/postGlobal",e)},y=function(){return d.a.get("/api/globalPosts")},O=function(e){return d.a.get("/api/blurbs/"+e)},N=function(e){return d.a.get("/api/lyrics/"+e)},x=a(38),A=a(36);a(95);function j(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){O("connorjohn@gmail.com").then((function(e){l(e.data.songCollection),console.log(e.data.songCollection)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"mt-3",fluid:!0},r.a.createElement(u.a,{fluid:!0},r.a.createElement("h1",{className:"text-center"},"Collections Page"),r.a.createElement("p",{className:"mt-4"},"~~~m y   v i b e s~~~"))),r.a.createElement(m.a,{className:"mt-2"},r.a.createElement(p.a,null,a.map((function(e){return r.a.createElement(b.a,{xs:6,md:4,lg:3,xl:3,key:e.songId},r.a.createElement(A.a,{className:"rounded bottom MarginFix px-sm-3"},r.a.createElement(x.a,{className:"cardBorder"},r.a.createElement(A.a.Toggle,{as:x.a.Header,className:"card-selector",eventKey:"0"},r.a.createElement("img",{src:e.albumThumbnail,height:"100px",width:"100px"}),r.a.createElement("h4",{className:"songTitle"},e.songArtistAlbum)),r.a.createElement(A.a.Collapse,{eventKey:"0"},r.a.createElement(x.a.Body,null,r.a.createElement("h4",null,"Lyrics"),r.a.createElement("p",{className:"songLyrics"},e.lyrics))))))})))))}var w=a(193),C=a(192),S=a(39);a(144);var I=function(){var e=Object(s.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"bunnies",id:"navbar"},r.a.createElement(w.a.Brand,{href:"/"},r.a.createElement("i",{className:"fab fa-forumbee"}),"ViBee"),r.a.createElement(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(w.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(C.a,{className:"ml-auto"},r.a.createElement(o.b,{className:"nav-items",to:"/"},"Home"),r.a.createElement(o.b,{className:"nav-items",to:"/profile"},"Profile"),r.a.createElement(S.a,{onClick:function(){try{e.push("/signup")}catch(t){console.log(t)}},className:"btn--outline"},"Sign Up")," ",r.a.createElement(S.a,{onClick:function(){try{e.push("/login")}catch(t){console.log(t)}},className:"btn--outline"},"Log In")))))};a(148);function k(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"mt-3",fluid:!0},r.a.createElement(u.a,{fluid:!0},r.a.createElement("h1",{className:"text-center"},"viBee"),r.a.createElement("p",{className:"mt-4"},"~~~ f i n d  your  v i b e ~~~"))))}var D=a(51),T=a(20),_=a.n(T),B=a(34),P=a(114),L=a.n(P);a(150);function R(e){var t=e.handleButtonClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(S.a,{onClick:t,className:"px-md-5",size:"sm",variant:"info"},"Analyze")),r.a.createElement(b.a,null,r.a.createElement(S.a,{onClick:t,className:"px-md-5",size:"sm",variant:"dark"},"Post")))}var F=a(115),G=a(72),U=["Lulz \ud83e\udd23","Down \ud83d\ude22","Wavy \ud83c\udfc4\u200d\u2642\ufe0f","Funky \ud83d\udd7a","Clowny \ud83e\udd21","Magical \ud83e\uddd9\u200d\u2642\ufe0f","Clairvoyant \ud83d\udd2e","Slumpy \ud83e\udda5","Lovey-Dovey \ud83d\udc9b","Popping Off \ud83d\udd95","On One \ud83e\udd2a","Dead \ud83d\udc80","Chillin' \ud83e\udd76","Meh \ud83d\ude11","Feelin' Good \ud83d\ude0e","Flirty \ud83d\ude4a","Hating \ud83d\udca9","Hopeful \ud83d\udcad","Lit \u2708"];function W(e){var t=e.vibeCheck,a=Object(n.useState)("Vibe"),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(F.a,{size:"sm",id:"dropdown-item-button",drop:"up",title:c},U.map((function(e){return r.a.createElement(G.a.Item,{key:e,as:"button"},r.a.createElement("div",{onClick:function(e){t(e.target.textContent),o(e.target.textContent)}},e))})))))}function H(e){var t=e.songElement,a=e.handleSongSelect;return r.a.createElement("div",null,r.a.createElement(A.a,{className:"rounded bottom MarginFix px-sm-3"},r.a.createElement(x.a,{className:"cardBorder"},r.a.createElement(A.a.Toggle,{as:x.a.Header,id:t.count,className:"card-selector",eventKey:"0",onClick:function(e){return a(e,{songID:t.songObj.id,title:t.songObj.title,artist:t.songObj.artist.name,wholeObj:t.songObj})}},r.a.createElement("img",{src:t.songObj.thumbnail,height:"100px",width:"100px"}),r.a.createElement("h4",{className:"songTitle"},t.songObj.title," - ",t.songObj.artist.name)),r.a.createElement(A.a.Collapse,{eventKey:"0"},r.a.createElement(x.a.Body,null," ",r.a.createElement("p",{className:"songLyrics",id:t.count+3},"LOADING..."))))))}function K(e){var t=e.songPool,a=e.handleSongSelect;return r.a.createElement(m.a,null,t.map((function(e){return r.a.createElement(p.a,{key:e.songObj.id},r.a.createElement(b.a,{xs:"12",lg:{span:10,offset:1},className:"songCardCol my-auto"},r.a.createElement(H,{songElement:e,handleSongSelect:a})))})))}var z=a(117),M=a.n(z).a.connect(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAR1fxTQDHTRB1-WsABaocg1QivN_4gkdQ",REACT_APP_FIREBASE_APP_ID:"1:409434493935:web:77167dba9c2d4b065ddc1a",REACT_APP_FIREBASE_AUTH_DOMAIN:"vibey-development.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://vibey-development.firebaseio.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"409434493935",REACT_APP_FIREBASE_PROJECT_ID:"vibey-development",REACT_APP_FIREBASE_STORAGE_BUCKET:"vibey-development.appspot.com"}).PORT||"http://localhost:3000");function V(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1],E=Object(n.useState)([]),d=Object(i.a)(E,2),y=d[0],O=d[1],x=Object(n.useState)({songID:-1,songArtistAlbum:"",lyrics:"",albumThumbnail:""}),A=Object(i.a)(x,2),j=A[0],w=A[1];Object(n.useEffect)((function(){console.log("i selected a song"),console.log(j)}),[j]);var C=function(){var e=Object(B.a)(_.a.mark((function e(t){var a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:a=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:if(console.log("...inside handleGeniusCall front-end..."),"string"!==typeof a.data){e.next=13;break}return console.log("Please provide words for genius"),e.abrupt("return");case 13:for(console.log(a.data),n=[],r=0;r<3;r++)n.push({count:r+1,songObj:a.data[r]});console.log(n),O(n);case 18:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){if("card-selector"===e.parentElement.classList[0]){var a=parseInt(e.parentElement.id)+3;return"LOADING..."===document.getElementById("".concat(a)).textContent?(w({songID:t.songID,songArtistAlbum:"".concat(t.title," - ").concat(t.artist),lyrics:"LOADING...",albumThumbnail:t.wholeObj.thumbnail}),!1):(w(Object(D.a)(Object(D.a)({},j),{},{songID:t.songID,songArtistAlbum:"".concat(t.title," - ").concat(t.artist),albumThumbnail:t.wholeObj.thumbnail})),!0)}var n=parseInt(e.id)+3;return"LOADING..."===document.getElementById("".concat(n)).textContent?(w({songID:t.songID,songArtistAlbum:"".concat(t.title," - ").concat(t.artist),lyrics:"LOADING...",albumThumbnail:t.wholeObj.thumbnail}),!1):(w(Object(D.a)(Object(D.a)({},j),{},{songID:t.songID,songArtistAlbum:"".concat(t.title," - ").concat(t.artist),albumThumbnail:t.wholeObj.thumbnail})),!0)},I=function(){var e=Object(B.a)(_.a.mark((function e(t,a){var n,r,l,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target,console.log(n.id),console.log(a),document.querySelectorAll(".card-selector, .songTitle").forEach((function(e){return e.classList.remove("green-bg")})),"card-selector"===n.parentElement.classList[0]&&n.parentElement.classList.add("green-bg"),n.classList.add("green-bg"),console.log(a),!S(n,a)){e.next=11;break}return e.abrupt("return");case 11:if(n.parentElement.classList[0],"card-selector"!==n.parentElement.classList[0]){e.next=32;break}return e.prev=13,e.next=16,N(n.parentElement.id);case 16:r=e.sent,e.next=22;break;case 19:throw e.prev=19,e.t0=e.catch(13),e.t0;case 22:console.log("we are back in blurb Input - if "),console.log(r.data),w({songID:a.songID,songArtistAlbum:"".concat(a.title," - ").concat(a.artist),lyrics:r.data,albumThumbnail:a.wholeObj.thumbnail}),l=parseInt(n.parentElement.id),console.log(l),l+=3,document.getElementById("".concat(l)).textContent=r.data,e.next=49;break;case 32:return e.prev=32,e.next=35,N(n.id);case 35:r=e.sent,e.next=41;break;case 38:throw e.prev=38,e.t1=e.catch(32),e.t1;case 41:console.log("we are back in blurb Input - else"),console.log(r),w({songID:a.songID,songArtistAlbum:"".concat(a.title," - ").concat(a.artist),lyrics:r.data,albumThumbnail:a.wholeObj.thumbnail}),c=parseInt(n.id),console.log(c),c+=3,document.getElementById("".concat(c)).textContent=r.data;case 49:case"end":return e.stop()}}),e,null,[[13,19],[32,38]])})));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(B.a)(_.a.mark((function e(t){var n,r,l,c,o,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.textContent,""!==s){e.next=3;break}return e.abrupt("return");case 3:if("Analyze"!==n){e.next=19;break}return e.prev=4,e.next=7,f(s);case 7:r=e.sent,e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(4),e.t0;case 13:l=r.data,document.querySelectorAll(".songLyrics").forEach((function(e){e.textContent="LOADING..."})),C(l),e.next=45;break;case 19:return console.log("post button click!"),c={$push:{blurbs:{vibe:""===a?"\ud83e\udd10":a,body:s,chosenSongArtist:j.songArtistAlbum,thumbnail:j.albumThumbnail},songCollection:{songId:j.songID,songArtistAlbum:j.songArtistAlbum,lyrics:j.lyrics,albumThumbnail:j.albumThumbnail}}},o={userName:"hastaLaVista",vibe:""===a?"\ud83e\udd10":a,body:s,chosenSongArtist:j.songArtistAlbum,thumbnail:j.albumThumbnail},e.prev=22,e.next=25,h(c);case 25:i=e.sent,e.next=31;break;case 28:throw e.prev=28,e.t1=e.catch(22),e.t1;case 31:return e.prev=31,e.next=34,v(o);case 34:e.sent,e.next=40;break;case 37:throw e.prev=37,e.t2=e.catch(31),e.t2;case 40:console.log("oh no"),M.emit("new blurb post","whoa! you heard me!"),console.log("WAITING FOR THIS LOG UNDER ME"),console.log(i),window.location.replace("./profile");case 45:case"end":return e.stop()}}),e,null,[[4,10],[22,28],[31,37]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"mt-5"},r.a.createElement(p.a,null,r.a.createElement(b.a,null,r.a.createElement(K,{songPool:y,handleSongSelect:I}))),r.a.createElement(p.a,{className:"mt-2"},r.a.createElement(b.a,{xs:12,md:{span:8,offset:2}},r.a.createElement(L.a,{onChange:function(e){return u(e.target.value)},placeholder:"What's on your mind?",countLimit:140,rows:3}))),r.a.createElement(p.a,{className:"mt-2"},r.a.createElement(R,{handleButtonClick:k}),r.a.createElement(W,{vibeCheck:function(e){l(e)}}))))}var q=a(70),Q=a.n(q);a(111);function J(e){var t=e.globalPosts,a=Object(n.useState)([]),l=Object(i.a)(a,2),c=l[0],o=l[1];Object(n.useEffect)((function(){o(t)}),[t]);return r.a.createElement("div",{className:"mt-2"},c.map((function(e){return r.a.createElement(m.a,{className:"postDivContainerBackground mb-2 p-2",key:e._id},r.a.createElement(p.a,null,r.a.createElement(b.a,{xs:4},r.a.createElement("p",null,"~",r.a.createElement("span",{className:"user-name"},e.userName)))),r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"postColColor my-auto",xs:2,lg:{span:2,offset:3}},r.a.createElement("img",{className:"postSongImage",src:e.thumbnail,height:"50px",width:"50px"})),r.a.createElement(b.a,{xs:10,lg:4,className:"postColColor my-auto"},r.a.createElement("span",{className:"postSongTitle"},e.chosenSongArtist))),r.a.createElement(p.a,null,r.a.createElement(b.a,{xs:12,lg:{span:6,offset:3},className:"postColColor my-auto"},r.a.createElement("p",{className:"postBlurb"},e.body))),r.a.createElement(p.a,{className:"postFooter"},r.a.createElement(b.a,{xs:8,lg:{span:3,offset:3},className:"postColColor my-auto"},r.a.createElement("p",{className:"postDate"},(t=e.time,r.a.createElement(Q.a,{date:t})))),r.a.createElement(b.a,{xs:4,lg:3,className:"postColColor my-auto"},r.a.createElement("p",null,"Vibe: ",r.a.createElement("span",{className:"postVibeEmoji"},e.vibe)))));var t})))}function $(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){y().then((function(e){console.log("...got public posts from DB...!!!"),console.log(e.data),l(e.data)})),M.on("updating posts",(function(e){console.log("we got the update over here!!"),console.log(e),l(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(k,null),r.a.createElement(V,null),r.a.createElement(J,{globalPosts:a})))}function Y(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){O("connorjohn@gmail.com").then((function(e){l(e.data.blurbs),console.log("".concat(e.data.blurbs," is the data passed into setUserBlurbs"))}))}),[]);return r.a.createElement("div",{className:"mt-2"},a.reverse().map((function(e){return r.a.createElement(m.a,{className:"postDivContainerBackground mb-2 p-2",key:e._id},r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"postColColor my-auto",xs:2,lg:{span:2,offset:3}},r.a.createElement("img",{className:"postSongImage",src:e.thumbnail,height:"50px",width:"50px"})),r.a.createElement(b.a,{xs:10,lg:4,className:"postColColor my-auto"},r.a.createElement("span",{className:"postSongTitle"},e.chosenSongArtist))),r.a.createElement(p.a,null,r.a.createElement(b.a,{xs:12,lg:{span:6,offset:3},className:"postColColor my-auto"},r.a.createElement("p",{className:"postBlurb"},e.body))),r.a.createElement(p.a,{className:"postFooter"},r.a.createElement(b.a,{xs:8,lg:{span:3,offset:3},className:"postColColor my-auto"},r.a.createElement("p",{className:"postDate"},(t=e.time,r.a.createElement(Q.a,{date:t})))),r.a.createElement(b.a,{xs:4,lg:3,className:"postColColor my-auto"},r.a.createElement("p",null,"Vibe: ",r.a.createElement("span",{className:"postVibeEmoji"},e.vibe)))));var t})))}function X(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(o.b,{to:"/collection"},r.a.createElement(S.a,{variant:"danger"},"My Collections")),r.a.createElement(k,null),r.a.createElement(Y,null)))}var Z=a(194),ee=a(191),te=a(118),ae=(a(184),te.a.initializeApp({apiKey:"AIzaSyAR1fxTQDHTRB1-WsABaocg1QivN_4gkdQ",authDomain:"vibey-development.firebaseapp.com",databaseURL:"https://vibey-development.firebaseio.com",projectId:"vibey-development",storageBucket:"vibey-development.appspot.com",messagingSenderId:"409434493935",appId:"1:409434493935:web:77167dba9c2d4b065ddc1a"})),ne=ae.auth(),re=r.a.createContext();function le(){return Object(n.useContext)(re)}function ce(e){var t=e.children,a=Object(n.useState)(),l=Object(i.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(!0),u=Object(i.a)(s,2),m=u[0],p=u[1];Object(n.useEffect)((function(){return ne.onAuthStateChanged((function(e){p(!1),o(e)}))}),[]);var b={currentUser:c,login:function(e,t){return ne.signInWithEmailAndPassword(e,t)},signup:function(e,t){return ne.createUserWithEmailAndPassword(e,t)},logout:function(){return ne.signOut()}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.Provider,{value:b},!m&&t))}function oe(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),l=le().signup,c=Object(n.useState)(""),u=Object(i.a)(c,2),m=u[0],p=u[1],b=Object(n.useState)(!1),E=Object(i.a)(b,2),d=E[0],g=E[1],f=Object(s.f)();function h(){return(h=Object(B.a)(_.a.mark((function n(r){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",p("Passwords do not match"));case 3:return n.prev=3,p(""),g(!0),n.next=8,l(e.current.value,t.current.value);case 8:f.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),p("Failed to create an account");case 14:g(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(x.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),m&&r.a.createElement(Z.a,{variant:"danger"},m),r.a.createElement(ee.a,{onSubmit:function(e){return h.apply(this,arguments)}},r.a.createElement(ee.a.Group,{id:"email"},r.a.createElement(ee.a.Label,null,"Email"),r.a.createElement(ee.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(ee.a.Group,{id:"password"},r.a.createElement(ee.a.Label,null,"Password"),r.a.createElement(ee.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(ee.a.Group,{id:"password-confirm"},r.a.createElement(ee.a.Label,null,"Confirm Password"),r.a.createElement(ee.a.Control,{type:"password",ref:a,required:!0})),r.a.createElement(S.a,{disabled:d,className:"w-100",type:"submit"},"Sign Up")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Log In")))}function se(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=le().login,l=Object(n.useState)(""),c=Object(i.a)(l,2),u=c[0],m=c[1],p=Object(n.useState)(!1),b=Object(i.a)(p,2),E=b[0],d=b[1],g=Object(s.f)();function f(){return(f=Object(B.a)(_.a.mark((function n(r){return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,m(""),d(!0),n.next=6,a(e.current.value,t.current.value);case 6:g.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),m("Failed to log in");case 12:d(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(x.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),u&&r.a.createElement(Z.a,{variant:"danger"},u),r.a.createElement(ee.a,{onSubmit:function(e){return f.apply(this,arguments)}},r.a.createElement(ee.a.Group,{id:"email"},r.a.createElement(ee.a.Label,null,"Email"),r.a.createElement(ee.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(ee.a.Group,{id:"password"},r.a.createElement(ee.a.Label,null,"Password"),r.a.createElement(ee.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(S.a,{disabled:E,className:"w-100",type:"submit"},"Log In")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(o.b,{to:"/signup"},"Sign Up")))}var ie=a(119);function ue(e){var t=e.component,a=Object(ie.a)(e,["component"]),n=le().currentUser;return console.log({currentUser:n}),n&&console.log(n.email),r.a.createElement(s.a,Object.assign({},a,{render:function(e){return r.a.createElement(t,e)}}))}var me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(I,null),r.a.createElement(ce,null,r.a.createElement(s.c,null,r.a.createElement(ue,{exact:!0,path:"/",component:$}),r.a.createElement(ue,{path:"/profile",component:X}),r.a.createElement(ue,{path:"/collection",component:j}),r.a.createElement(m.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"}},r.a.createElement("div",{className:"w-100",style:{maxWidth:"400px"}},r.a.createElement(s.a,{path:"/signup",component:oe}),r.a.createElement(s.a,{path:"/login",component:se})))))))},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(me,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");pe?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):be(e)}))}}()},76:function(e,t,a){},95:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.8f4227db.chunk.js.map