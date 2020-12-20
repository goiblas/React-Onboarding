(this["webpackJsonpreact-onboarding"]=this["webpackJsonpreact-onboarding"]||[]).push([[0],{87:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n(0),a=n.n(r),o=n(8),c=n.n(o),s=n(24),l=n(46),d=n(140),u=n(139),p=n(134),b=n(143),m=n(144),j=n(142),h=n(47),f=n.n(h),x=n(135),O=n(133),v=n(136),g=n(137),w=n(138),y=n(48),k=n.n(y),C=n(64),q=n.n(C),S=n(141),N=n(49),R=n(127),E=n(14),L=n(36),z=n.n(L),P=n(54),B=n(65),T=n(132),A=n(145),I=n(55),M=n(130);var D=function(e){var t=e.children,n=Object(r.useRef)(null);return null===n.current&&(n.current=document.createElement("div"),n.current.setAttribute("id","_clever-tour")),Object(r.useEffect)((function(){return document.body.appendChild(n.current),function(){document.body.removeChild(n.current)}}),[n]),Object(o.createPortal)(t,n.current)},F="9999em",W=1600,$=Object(R.a)((function(e){return{"@keyframes ripple":{"0%":{boxShadow:"inset 0 0 0 14px #8fc7eb"},"100%":{transform:"scale(3)",boxShadow:"inset 0 0 0 0 #8fc7eb"}},wrapper:{height:function(e){return e.size},width:function(e){return e.size},transform:"translate(-50%, -50%)",position:"absolute"},dot:{height:"100%",width:"100%",backgroundColor:"#3a99d8",borderRadius:F,position:"relative",zIndex:1},ripple:{position:"absolute",top:0,left:0,height:"100%",width:"100%",borderRadius:F,animation:"$ripple ".concat(W,"ms infinite ").concat(800,"ms cubic-bezier(0.64, 0.42, 0.54, 1)"),"&:last-child":{animationDelay:"-".concat(W,"ms")},"@media (prefers-reduced-motion)":{animationPlayState:"paused",animationDelay:"-".concat(1400,"ms"),"&:last-child":{animationDelay:"-".concat(800,"ms")}}}}})),J=a.a.forwardRef((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.size,n=void 0===t?14:t,r=arguments.length>1?arguments[1]:void 0,a=$({size:n});return Object(i.jsxs)("div",{ref:r,className:a.wrapper,children:[Object(i.jsx)("div",{className:a.dot}),Object(i.jsx)("div",{className:a.ripple}),Object(i.jsx)("div",{className:a.ripple})]})})),V=n(66);function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.gap,i=void 0===n?32:n,r=t.position,a=void 0===r?"right":r,o=document.querySelector(e),c=o.getBoundingClientRect(),s=c.top+c.height/2,l="right"===a?c.right+i:c.left-i;return{y:s,x:l}}function H(e){return new Promise((function(t){var n;Object(V.a)(document.querySelector(e));var i=function(){window.clearTimeout(n),n=setTimeout(t,66)};window.addEventListener("scroll",i),i()}))}var U=n(129),_=Object(R.a)((function(e){return{paper:{padding:e.spacing(3),backgroundColor:e.palette.background.paper,maxWidth:"94vw",width:"420px",borderRadius:12},popper:{zIndex:e.zIndex.tooltip,'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-16px","&::before":{borderWidth:"0 24px 24px 24px",borderColor:"transparent transparent ".concat(e.palette.background.paper," transparent")}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-16px","&::before":{borderWidth:"24px 24px 0 24px",borderColor:"".concat(e.palette.background.paper," transparent transparent transparent")}}},arrow:{position:"absolute","&::before":{content:'""',margin:"auto",display:"block",width:0,height:0,borderStyle:"solid"}}}})),K=a.a.forwardRef((function(e,t){var n=e.anchorEl,r=e.children,o=_(),c=a.a.useState(null),l=Object(s.a)(c,2),d=l[0],u=l[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(U.a,{ref:t,open:Boolean(n),anchorEl:n,className:o.popper,placement:"bottom-start",modifiers:{flip:{behavior:["bottom","top"]},offset:{offset:"0,32"},preventOverflow:{enabled:"true",boundariesElement:"scrollParent"},arrow:{enabled:!0,element:d}},children:[Object(i.jsx)("div",{className:o.paper,children:r}),Object(i.jsx)("span",{className:o.arrow,ref:u})]})})})),Q=Object(R.a)((function(e){return{button:{width:28,height:36,display:"inline-flex",border:0,backgroundColor:"transparent","&:focus:not(:focus-visible)":{outline:0}},dot:{backgroundColor:function(t){return t.actived?e.palette.primary.dark:e.palette.primary.light},height:8,width:8,margin:"auto",borderRadius:9999}}})),X=function(e){var t=e.actived,n=e.onClick,r=Q({actived:t});return Object(i.jsx)("button",{className:r.button,onClick:n,children:Object(i.jsx)("span",{className:r.dot})})},Y=Object(R.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1},navigation:{display:"flex",justifyContent:"space-between"}}})),Z=function(e){var t=e.x,n=e.y;return{clientWidth:0,clientHeight:0,getBoundingClientRect:function(){return{left:t,right:t,top:n,bottom:n}}}},ee=function(e){var t=e.open,n=e.steps,a=e.onCompleted,o=Y(),c=Object(r.useState)(0),l=Object(s.a)(c,2),d=l[0],u=l[1],p=Object(r.useState)(null),b=Object(s.a)(p,2),m=b[0],j=b[1],h=Object(r.useState)(!1),f=Object(s.a)(h,2),x=f[0],v=f[1],g=Object(r.useRef)(),w=function(e,t){return!e[t]};Object(r.useEffect)((function(){t?Object(I.a)(window):Object(I.b)(window)}),[t]),Object(r.useEffect)((function(){function e(){return(e=Object(P.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),t=n[d],e.next=4,H(t.selector);case 4:j(G(t.selector)),v(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[d,n,t]);var y=Object(r.useCallback)(function(){var e=Object(P.a)(z.a.mark((function e(t){var i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=n[d]).onAfter){e.next=6;break}return v(!0),e.next=5,i.onAfter();case 5:v(!1);case 6:w(n,t)?(a(),u(0)):u(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,a,d]),k=Object(M.a)((function(){if(t&&!x){var e=n[d];v(!0),H(e.selector).then((function(){j(G(e.selector)),v(!1)}))}}),200);Object(r.useEffect)((function(){return window.addEventListener("resize",k.callback),function(){window.removeEventListener("resize",k.callback)}}),[k.callback]);return t?Object(i.jsx)(D,{children:Object(i.jsx)(A.a,{className:o.backdrop,open:!0,onClick:function(e){return e.stopPropagation()},children:!x&&m&&Object(i.jsx)(B.a,{shards:[g],children:Object(i.jsxs)("div",{style:{position:"absolute",top:m.y,left:m.x},children:[Object(i.jsx)(J,{}),Object(i.jsxs)(K,{ref:g,anchorEl:Z(m),children:[Object(i.jsx)("h2",{children:n[d].title}),Object(i.jsx)("p",{children:n[d].content}),Object(i.jsx)(T.a,{children:Object(i.jsxs)("div",{className:o.navigation,children:[Object(i.jsx)(O.a,{focusRipple:!1,disabled:0===d,onClick:function(){return y(d-1)},children:"Previus"}),Object(i.jsx)("div",{children:n.map((function(e,t){return Object(i.jsx)(X,{actived:t===d,onClick:function(){return y(t)}},t)}))}),Object(i.jsx)(O.a,{focusRipple:!1,"data-autofocus":!0,onClick:function(){return y(d+1)},children:d===n.length-1?"Finish":"Next"})]})})]})]})})})}):null},te=240,ne=Object(R.a)((function(e){return{root:{display:"flex"},drawer:Object(l.a)({},e.breakpoints.up("sm"),{width:te,flexShrink:0}),appBar:Object(l.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(te,"px)"),marginLeft:te}),menuButton:Object(l.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:te},content:{flexGrow:1,padding:e.spacing(3)}}})),ie=[{selector:'[data-onboarding-step="1"]',title:"Title step 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{selector:'[data-onboarding-step="2"]',title:"Title step 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{selector:'[data-onboarding-step="3"]',title:"Title step 3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}];var re=function(e){var t=e.window,n=ne(),r=Object(E.a)(),o=a.a.useState(!1),c=Object(s.a)(o,2),l=c[0],h=c[1],y=a.a.useState(!1),C=Object(s.a)(y,2),R=C[0],L=C[1],z=function(){h(!l)},P=Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:n.toolbar}),Object(i.jsx)(p.a,{}),Object(i.jsxs)(x.a,{children:[Object(i.jsxs)(v.a,{button:!0,children:[Object(i.jsx)(g.a,{children:Object(i.jsx)(f.a,{})}),Object(i.jsx)(w.a,{primary:"Inbox"})]}),Object(i.jsxs)(v.a,{button:!0,children:[Object(i.jsx)(g.a,{children:Object(i.jsx)(k.a,{})}),Object(i.jsx)(w.a,{primary:"Starred"})]}),Object(i.jsxs)(v.a,{button:!0,children:[Object(i.jsx)(g.a,{children:Object(i.jsx)(f.a,{})}),Object(i.jsx)(w.a,{primary:Object(i.jsx)("span",{"data-onboarding-step":"3",children:"Send email"})})]}),Object(i.jsxs)(v.a,{button:!0,children:[Object(i.jsx)(g.a,{children:Object(i.jsx)(k.a,{})}),Object(i.jsx)(w.a,{primary:"Drafts"})]})]}),Object(i.jsx)(p.a,{}),Object(i.jsx)(x.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(i.jsxs)(v.a,{button:!0,children:[Object(i.jsx)(g.a,{children:t%2===0?Object(i.jsx)(f.a,{}):Object(i.jsx)(k.a,{})}),Object(i.jsx)(w.a,{primary:e})]},e)}))})]}),B=void 0!==t?function(){return t().document.body}:void 0;return Object(i.jsxs)("div",{className:n.root,children:[Object(i.jsx)(ee,{open:R,steps:ie,onCompleted:function(){return L(!1)}}),Object(i.jsx)(u.a,{}),Object(i.jsx)(d.a,{position:"fixed",className:n.appBar,children:Object(i.jsxs)(S.a,{children:[Object(i.jsx)(j.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:z,className:n.menuButton,children:Object(i.jsx)(q.a,{})}),Object(i.jsx)(N.a,{variant:"h6",noWrap:!0,children:"Responsive drawer"})]})}),Object(i.jsxs)("nav",{className:n.drawer,"aria-label":"mailbox folders",children:[Object(i.jsx)(m.a,{smUp:!0,implementation:"css",children:Object(i.jsx)(b.a,{container:B,variant:"temporary",anchor:"rtl"===r.direction?"right":"left",open:l,onClose:z,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0},children:P})}),Object(i.jsx)(m.a,{xsDown:!0,implementation:"css",children:Object(i.jsx)(b.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0,children:P})})]}),Object(i.jsxs)("main",{className:n.content,children:[Object(i.jsx)("div",{className:n.toolbar}),Object(i.jsx)(O.a,{ariant:"outlined",color:"primary","data-onboarding-step":"1",onClick:function(){return L(!0)},children:"Start onboarding"}),Object(i.jsx)("div",{style:{paddingTop:32},children:Object(i.jsx)(N.a,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."})}),Object(i.jsx)(N.a,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),Object(i.jsx)("div",{children:Object(i.jsx)(O.a,{variant:"outlined",color:"primary","data-onboarding-step":"2",children:"Another action"})})]})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(re,{})}),document.getElementById("root")),ae()}},[[87,1,2]]]);
//# sourceMappingURL=main.39c97e99.chunk.js.map