(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),o=a.n(i),c=(a(57),a(9)),s=a(10),l=a(11),d=a(12),u=a(18),m=a(15),p=(a(26),a(35),a(36),a(27),a(63),a(65),a(28),a(68),a(70),a(72),a(43)),h=a(8),f=a(20),g=a.n(f);a(73),a(75);g.a.initializeApp({apiKey:"AIzaSyB4DQfTqNMJrnRQv4h4hrAfM7PWNmjFVWo",authDomain:"designsystem-app.firebaseapp.com",databaseURL:"https://designsystem-app.firebaseio.com",projectId:"designsystem-app",storageBucket:"designsystem-app.appspot.com",messagingSenderId:"584912358716",appId:"1:584912358716:web:f28876b182d1cd29e7a239",measurementId:"G-4ELWFERPBF"});var y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).doSignInAnonymously=function(){var e=n.getOrderId();n.state.auth.signInAnonymously().then((function(t){return n.saveOrderData(t,JSON.stringify(e))})).catch((function(e){return n.errorMessage(e)}))},n.errorMessage=function(e){return r.a.createElement("p",null,"Sign in failed. Error code: ",JSON.stringify(e.code),". Error message: ",JSON.stringify(e.message),".")},n.state={db:g.a.database(),auth:g.a.auth(),orderId:"",order:{2:{quantity:2,price:199},4:{quantity:1,price:399}}},g.a.auth().onAuthStateChanged((function(e){e?console.log("signed in",e.uid):console.log("no user")})),n.setState=n.setState.bind(Object(h.a)(n)),n.getOrderId=n.getOrderId.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"componentDidCatch",value:function(e,t){return r.a.createElement("p",null,"An error occured. Error: ",JSON.stringify(e),". ErrorInfo: ",JSON.stringify(t),".")}},{key:"saveOrderData",value:function(e,t){var a=this;null!==e.user&&Object.keys(this.state.order).forEach((function(n){var r,i=a.state.db.ref("/test/".concat(null===(r=e.user)||void 0===r?void 0:r.uid,"/").concat(t,"/").concat(n));Object.entries(a.state.order[n]).forEach((function(e){i.update(Object(p.a)({},e[0],e[1]))}))}))}},{key:"getOrderId",value:function(){return JSON.stringify(Math.floor(89998*Math.random())+1e4)}},{key:"getUserData",value:function(){var e=this;this.state.auth.onAuthStateChanged((function(t){t&&e.state.db.ref("/test/".concat(null===t||void 0===t?void 0:t.uid)).once("value").then((function(e){e.forEach((function(e){var t=e.val();Object.keys(t).forEach((function(e){console.log(Object.entries(Object.keys(t)))}))}))}))}))}}]),a}(r.a.Component),b=r.a.createContext(null),E=y,v=a(22),w=a(23),x=a(2),C=a(24),k=a(14),S=(a(110),a(31)),j=r.a.createContext(null),N=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggleState=function(){n.props.onClick(),n.setState({disableButton:!0,show:!0}),setTimeout((function(){n.setState({disableButton:!1,show:!1})}),2e3)},n.state={show:!1,disableAnimation:!1,disableButton:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(n.Fragment,null,n.createElement(k.DefaultButton,{className:"product".concat(this.props.id),disabled:this.state.disableButton,icon:this.state.disableButton?n.createElement(S.Icon,{src:"spinner-lg"}):null,onClick:this.toggleState},this.state.disableButton?"Adding...":"Add to cart"),n.createElement(C.Modal,{animationDuration:this.state.disableAnimation?0:void 0,title:"Successfully added item to cart!",size:this.context.windowWidth<=481?"calc(80% + 2rem)":"auto",dialogClassName:"display-flex center paxl",show:this.state.show,onHide:function(){return e.setState({show:!1})}},n.createElement(k.DefaultButton,{large:!0,flat:!0,style:{width:"100%",marginTop:"3rem"},onClick:function(){return e.setState({show:!1})}},"Close")))}}]),a}(n.Component);function O(e){var t=r.a.useContext(j),a=t.addToCart,n=t.removeFromCart,i=e.product,o=i.id,c=i.name,s=i.description,l=i.price,d=i.image,u=i.quantity;return"/DesignSystem-app/"===window.location.pathname?r.a.createElement("div",{className:"".concat(e.showCart?"showCart display-flex row":""," Products ").concat(e.className?e.className:"")},r.a.createElement("span",{className:"productImage mtl ".concat(e.showCart?"mobile":"")},r.a.createElement("img",{alt:"".concat(s),src:d})),r.a.createElement("span",{className:"".concat(e.showCart&&!e.mobileView?"display-flex":"")},r.a.createElement("p",{className:"mtl productTitle em-max type-md"},c),r.a.createElement("p",{className:"prodictDescription type-sm"},s),r.a.createElement("p",{className:" productPrice type-sm"},l,"kr"),e.showCart?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"productQuantity type-sm"},"Quantity: ",u),r.a.createElement(k.DangerButton,Object.assign({onClick:function(){return n(o)}},{style:{minWidth:"5em",maxWidth:"10em"}}),"Remove")):r.a.createElement(N,{id:o,onClick:function(){return a(o)}}))):r.a.createElement(x.Grid,{className:"grid-show mbxl",justifyContent:"space-evenly"},r.a.createElement(x.FlexCol,{style:{maxWidth:"30rem",height:"37rem"},contentAlignment:"middle",breakpoint:"sm",col:"16"},r.a.createElement("div",{style:{width:"100%",height:"80%"}},r.a.createElement("img",{alt:"".concat(s),src:d,style:{maxHeight:"45rem",maxWidth:"100%",objectFit:"cover"}}))),r.a.createElement(x.FlexCol,{style:{maxWidth:"30rem",height:"35rem",marginTop:"4rem"},breakpoint:"sm",col:"6"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("span",{className:"pll display-flex em-high h1"},c),r.a.createElement("br",null),r.a.createElement("span",{className:"pll display-flex h2"},l,"kr"),r.a.createElement(N,{id:o,onClick:function(){return a(o)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"pll display-flex"},s))))}N.contextType=j;var B=a(44),F=a.n(B),W=a(45),I=a.n(W),A=a(46),D=a.n(A),P=a(47),q=a.n(P),L=a(48),T=a.n(L),z=a(49),J=a.n(z),M=[{id:1,name:"Leopard Print Coat",description:"Leopard print coat with neon accents.",price:"299",image:F.a,quantity:1},{id:2,name:"Round Sunglasses",description:"Round, yellow sunglasses with a silver frame.",price:"279",image:q.a,quantity:1},{id:3,name:"New Balance X-90 Pink",description:"New Balance sneakers model X-90 in pale pink.",price:"599",image:T.a,quantity:1},{id:4,name:"Lounge Blazer",description:"A slouchy, lounge blazer in cerise pink.",price:"449",image:I.a,quantity:1},{id:5,name:"Satin Boots",description:"A pair of boots in a cerise pink, made of smooth satin.",price:"389",image:D.a,quantity:1},{id:6,name:"Gold Bomber Jacket",description:"An oversized bomber jacket in a sparkly gold.",price:"629",image:J.a,quantity:1}],R=function(){var e=r.a.useContext(j).currentCart;return r.a.createElement(v.Siteframe,{headerProps:{className:"bg-light-gray paxl",companyName:r.a.createElement("span",{style:{color:"black"}},"RetroShop"),cols:[r.a.createElement(x.Grid,Object.assign({className:"grid-show position-fixed type-black em-alt"},{style:{right:"0"}},{flexDirection:"row",justifyContent:"space-between"}),r.a.createElement(x.FlexCol,{fixed:!0},r.a.createElement("span",null,"Accessories")),r.a.createElement(x.FlexCol,{fixed:!0},r.a.createElement("span",null,"Clothes")),r.a.createElement(x.FlexCol,{fixed:!0},r.a.createElement("span",null,"Brands")))]},sidebarProps:{className:"bg-decorative-yellow",primaryLinks:[{text:"Coat",path:"/product1",id:"1"},{text:"Sunglasses",path:"/product2",id:"2"},{text:"Sneakers",path:"/product3",id:"3"},{text:"Blazer",path:"/product4",id:"4"},{text:"Boots",path:"/product5",id:"5"},{text:"Jacket",path:"/product6",id:"6"},{text:"All products",path:"/",id:"999"}],secondaryLinks:[{text:"Shopping Bag"},{text:"Checkout",path:"/checkout",id:"0"}],renderLink:function(t){var a=t.text,n=t.path,i=t.id;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(u.b,{to:"".concat(n),key:i,href:n,style:{color:"unset",textDecoration:"none"}},r.a.createElement(k.DefaultButton,{className:"0"===i?"":"pui-btn--flat type-black"},a)):r.a.createElement(k.DefaultButton,{className:"maxl",onClick:e},a))}}},r.a.createElement("div",{className:"bg-light-green paxl scroll",style:{height:"100%",width:"auto"}},r.a.createElement(w.Panel,{header:r.a.createElement("h3",{className:"mam"},"All products"),className:"scroll display-flex",style:{minWidth:"fit-content",width:"auto",height:"auto"}},r.a.createElement(x.Grid,{className:"grid-show pbxl scroll",justifyContent:"space-evenly"},M.map((function(e){return r.a.createElement(x.FlexCol,{key:e.id,col:8,className:"width-product pan"},r.a.createElement(O,{key:e.id,showCart:!1,product:e}))}))))))},G=(a(40),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(v.Siteframe,{headerProps:{className:"bg-light-gray paxl",companyName:n.createElement("span",{style:{color:"black"}},"RetroShop"),cols:[n.createElement(x.Grid,Object.assign({className:"grid-show position-fixed type-black em-alt"},{style:{right:"0",height:"window.innerHeight"}},{flexDirection:"row",justifyContent:"space-between"}),n.createElement(x.FlexCol,{fixed:!0},n.createElement("span",null,"Accessories")),n.createElement(x.FlexCol,{fixed:!0},n.createElement("span",null,"Clothes")),n.createElement(x.FlexCol,{fixed:!0},n.createElement("span",null,"Brands")))]},sidebarProps:{className:"bg-decorative-yellow",primaryLinks:[{text:[n.createElement("img",{style:{width:"100%"},src:"https://i.imgur.com/ANCnCV1.png"})]},{text:"Coat",path:"/product",id:"1"},{text:"Sunglasses",path:"/product",id:"2"},{text:"Sneakers",path:"/product",id:"3"},{text:"Blazer",path:"/product",id:"4"},{text:"Boots",path:"/product",id:"5"},{text:"Jacket",path:"/product",id:"6"}],secondaryLinks:[{text:"Checkout"},{text:"Contact"}],renderLink:function(e){var t=e.text,a=e.path,r=e.id;return n.createElement(n.Fragment,null,n.createElement(u.b,{to:"".concat(a).concat(r),key:r,href:a,className:"underline-hover",style:{color:"unset"}},t))}}},n.createElement("div",{className:"bg-light-green",style:{height:"100%",width:"auto",overflowX:"hidden"}},n.createElement(w.Panel,{className:"bg-light-green display-flex",style:{backgroundImage:'url("https://i.imgur.com/MGlC0Hj.png")',minWidth:"fit-content",width:"auto",height:"20%",overflow:"auto",padding:"0"}}),n.createElement("div",{className:"bg-white border-rounded",style:{width:"70rem",height:"50rem",margin:"auto",marginTop:"4rem",boxShadow:"0px 3px 5px 0px rgba(0,0,0,0.38)"}},n.createElement(O,{id:this.props.id,product:this.props.product})))))}}]),a}(n.Component)),H=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).removeFromCart=function(e){var t=n.state,a=t.cart,r=t.total;a.map((function(t){t.id===e&&t.quantity<=1?(r-=parseInt(t.price),n.removeProduct(e,r)):t.id===e&&(t.quantity--,r-=parseInt(t.price),n.setState({cart:a,total:r}))}))},n.currentCart=function(){n.setState((function(e){return{showCart:!e.showCart}}))},n.addToCart=function(e){var t=n.state,a=t.cart,r=t.total,i=M.find((function(t){return t.id===e})),o=a.find((function(t){return e===t.id}));o?(o.quantity++,r+=parseInt(o.price)):i&&(a.push(i),r+=parseInt(i.price)),n.setState({cart:a,total:r})},n.state={cart:[],addToCart:n.addToCart,removeFromCart:n.removeFromCart,currentCart:n.currentCart,updateScreenWidth:n.updateScreenWidth,showCart:!1,total:0,windowWidth:window.innerWidth},n.addToCart=n.addToCart.bind(Object(h.a)(n)),n.removeFromCart=n.removeFromCart.bind(Object(h.a)(n)),n.currentCart=n.currentCart.bind(Object(h.a)(n)),n.setState=n.setState.bind(Object(h.a)(n)),n.updateScreenWidth=n.updateScreenWidth.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.windowWidth;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.Provider,{value:this.state},this.props.children,r.a.createElement(C.Modal,{dialogClassName:"pbxxl",size:"".concat(t<=481?"100%":"calc(70% + 2rem)"),onHide:function(){return e.setState({showCart:!1})},show:this.state.showCart},this.showInfo(),0===this.state.total?null:r.a.createElement("p",{className:"pal em-high float-right"},"Total: ",this.state.total,"kr"))))}},{key:"showInfo",value:function(){var e=this.state.windowWidth;return 1<=this.state.cart.length?this.state.cart.map((function(t){return 0===t.quantity?null:r.a.createElement(O,{className:"width-product",showCart:!0,key:t.id,mobileView:e<=481,product:t})})):0===this.state.cart.length?r.a.createElement("p",null,"Looks like your shopping bag is empty..."):void 0}},{key:"removeProduct",value:function(e,t){var a=this.state.cart.filter((function(t){return t.id!==e}));this.setState({cart:a,total:t})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateScreenWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateScreenWidth)}},{key:"updateScreenWidth",value:function(){this.setState({windowWidth:window.innerWidth})}}]),a}(r.a.Component),Q=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(b.Provider,{value:new E},r.a.createElement(u.a,{basename:"/DesignSystem-app"},r.a.createElement(m.c,null,M.map((function(e){"product".concat(e.id);return r.a.createElement(m.a,{key:e.id,path:"/product".concat(e.id)},r.a.createElement(G,{id:e.id,product:e}))})),r.a.createElement(m.a,{path:"/product"},r.a.createElement(R,null))," */}",r.a.createElement(m.a,{path:"/checkout"}),r.a.createElement(m.a,{path:"/"},r.a.createElement(R,null))))))}}]),a}(r.a.Component);document.cookie="cross-site-cookie=bar; SameSite=None; Secure",o.a.render(r.a.createElement(Q,null),document.getElementById("root"))},44:function(e,t,a){e.exports=a.p+"static/media/leopard-coat.39cbbfe2.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/blazer.175d8079.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/boots.9d92fd2f.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/sunglasses.39774673.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/sneakers.4b5deeac.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/jacket.a09fb58e.jpg"},52:function(e,t,a){e.exports=a(113)},57:function(e,t,a){},72:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.a39040a5.chunk.js.map