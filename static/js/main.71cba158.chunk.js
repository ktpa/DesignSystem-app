(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(47),i=a.n(l),o=(a(60),a(2)),c=a(3),s=a(4),u=a(5),m=a(18),d=a(7),p=(a(30),a(39),a(40),a(31),a(66),a(68),a(25),a(71),a(41),a(74),a(12)),h=a(24),g=a.n(h),y=(a(75),a(77),r.a.createContext(null));g.a.initializeApp({apiKey:"AIzaSyB4DQfTqNMJrnRQv4h4hrAfM7PWNmjFVWo",authDomain:"designsystem-app.firebaseapp.com",databaseURL:"https://designsystem-app.firebaseio.com",projectId:"designsystem-app",storageBucket:"designsystem-app.appspot.com",messagingSenderId:"584912358716",appId:"1:584912358716:web:f28876b182d1cd29e7a239",measurementId:"G-4ELWFERPBF"});var f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).doSignInAnonymously=function(){var e=n.getOrderId();n.state.auth.signInAnonymously().then((function(t){return n.saveOrderData(t,JSON.stringify(e))})).catch((function(e){return n.errorMessage(e)}))},n.errorMessage=function(e){return r.a.createElement("p",null,"Sign in failed. Error code: ",JSON.stringify(e.code),". Error message: ",JSON.stringify(e.message),".")},n.state={db:g.a.database(),auth:g.a.auth(),orderId:"",order:[]},g.a.auth().onAuthStateChanged((function(e){})),n.setState=n.setState.bind(Object(p.a)(n)),n.getOrderId=n.getOrderId.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"componentDidCatch",value:function(e,t){return r.a.createElement("p",null,"An error occured. Error: ",JSON.stringify(e),". ErrorInfo: ",JSON.stringify(t),".")}},{key:"saveOrderData",value:function(e,t){var a=r.a.useContext(y);console.log(a,"yes"),null!==e.user&&Object.keys(this.context.cart).forEach((function(e){}))}},{key:"getOrderId",value:function(){return JSON.stringify(Math.floor(89998*Math.random())+1e4)}},{key:"getUserData",value:function(){var e=this;this.state.auth.onAuthStateChanged((function(t){t&&e.state.db.ref("/test/".concat(null===t||void 0===t?void 0:t.uid)).once("value").then((function(e){e.forEach((function(e){var t=e.val();Object.keys(t).forEach((function(e){console.log(Object.entries(Object.keys(t)))}))}))}))}))}}]),a}(r.a.Component),v=r.a.createContext(null),E=f,b=a(23),C=a(17),k=a(8),N=a(28),S=a(11),x=(a(111),a(19)),w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).animationTimer=0,n.setLoadingTimer=function(){n.animationTimer&&n.clearLoadingTimer(),n.animationTimer=setTimeout((function(){n.setState({disableButton:!1,show:!1}),n.animationTimer=0}),2e3)},n.clearLoadingTimer=function(){n.animationTimer&&(clearTimeout(n.animationTimer),n.animationTimer=0)},n.toggleState=function(){n.props.onClick(),n.setState({disableButton:!0,show:!0}),n.setLoadingTimer()},n.state={show:!1,disableAnimation:!1,disableButton:!1},n.toggleState=n.toggleState.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(n.Fragment,null,n.createElement(S.DefaultButton,{className:"product".concat(this.props.id),disabled:this.state.disableButton,icon:this.state.disableButton?n.createElement(x.Icon,{src:"spinner-lg"}):null,onClick:this.toggleState},this.state.disableButton?"Adding...":"Add to cart"),n.createElement(N.Modal,{animationDuration:this.state.disableAnimation?0:void 0,title:"Successfully added item to cart!",size:this.context.windowWidth<=481?"calc(80% + 2rem)":"auto",dialogClassName:"display-flex center paxl",show:this.state.show,onHide:function(){return e.setState({show:!1})}},n.createElement(S.DefaultButton,{large:!0,flat:!0,style:{width:"100%",marginTop:"3rem"},onClick:function(){return e.setState({show:!1})}},"Close")))}},{key:"componentDidMount",value:function(){clearTimeout(this.animationTimer)}},{key:"componentWillUnmount",value:function(){(this.state.disableButton||this.state.show)&&clearTimeout(this.animationTimer)}}]),a}(n.Component);function I(e){var t=r.a.useContext(y),a=t.addToCart,n=t.removeFromCart,l=e.product,i=l.id,o=l.name,c=l.description,s=l.price,u=l.image,d=l.quantity;return"/DesignSystem-app"===window.location.pathname||"/DesignSystem-app/"===window.location.pathname||"/DesignSystem-app/checkout"===window.location.pathname||"/"===window.location.pathname||"/checkout"===window.location.pathname?r.a.createElement("div",{className:"".concat(e.showCart?"showCart display-flex row":"column"," Products ").concat(e.className?e.className:"")},r.a.createElement(m.b,{to:"/product".concat(i)},r.a.createElement("span",{className:"productImage mtl ".concat(e.showCart?"mobile":"")},r.a.createElement("img",{alt:"".concat(c),src:u}))),r.a.createElement("span",{className:"".concat(e.showCart&&!e.mobileView?"display-flex":"")},r.a.createElement("p",{className:"mtl productTitle em-max type-md"},o),r.a.createElement("p",{className:"prodictDescription type-sm"},c),r.a.createElement("p",{className:" productPrice type-sm"},s,"kr"),e.showCart?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"productQuantity type-sm"},"Quantity: ",d),r.a.createElement(S.DangerButton,Object.assign({onClick:function(){return n(i)}},{style:{minWidth:"5em",maxWidth:"10em"}}),"Remove")):r.a.createElement(w,{id:i,onClick:function(){return a(i)}}))):r.a.createElement(r.a.Fragment,null,e.showCart?r.a.createElement("div",{className:"".concat(e.showCart?"showCart display-flex row":"column"," Products ").concat(e.className?e.className:"")},r.a.createElement("a",{href:"/product".concat(i)},r.a.createElement("span",{className:"productImage mtl ".concat(e.showCart?"mobile":"")},r.a.createElement("img",{alt:"".concat(c),src:u}))),r.a.createElement("span",{className:"".concat(e.showCart&&!e.mobileView?"display-flex":"")},r.a.createElement("p",{className:"mtl productTitle em-max type-md"},o),r.a.createElement("p",{className:"prodictDescription type-sm"},c),r.a.createElement("p",{className:" productPrice type-sm"},s,"kr"),e.showCart?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"productQuantity type-sm"},"Quantity: ",d),r.a.createElement(S.DangerButton,Object.assign({onClick:function(){return n(i)}},{style:{minWidth:"5em",maxWidth:"10em"}}),"Remove")):r.a.createElement(w,{id:i,onClick:function(){return a(i)}}))):r.a.createElement(k.Grid,{className:"grid-show mbxl",justifyContent:"space-evenly"},r.a.createElement(k.FlexCol,Object.assign({col:16},{style:{maxWidth:"30rem",height:"37rem"},contentAlignment:"middle",breakpoint:"sm"}),r.a.createElement("div",{style:{width:"100%",height:"80%"}},r.a.createElement("img",{alt:"".concat(c),src:u,style:{maxHeight:"45rem",maxWidth:"100%",objectFit:"cover"}}))),r.a.createElement(k.FlexCol,Object.assign({col:6},{style:{maxWidth:"30rem",height:"35rem",marginTop:"4rem"},breakpoint:"sm"}),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("span",{className:"pll display-flex em-high h1"},o),r.a.createElement("br",null),r.a.createElement("span",{className:"pll display-flex h2"},s,"kr"),e.showCart?null:r.a.createElement(w,{id:i,onClick:function(){return a(i)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"pll display-flex"},c)))))}w.contextType=y;var O=a(49),j=a.n(O),B=a(50),F=a.n(B),P=a(51),T=a.n(P),D=a(52),L=a.n(D),A=a(53),W=a.n(A),z=a(54),J=a.n(z),K=[{id:1,name:"Leopard Print Coat",description:"Leopard print coat with neon accents.",price:"299",image:j.a,quantity:1},{id:2,name:"Round Sunglasses",description:"Round, yellow sunglasses with a silver frame.",price:"279",image:L.a,quantity:1},{id:3,name:"New Balance X-90 Pink",description:"New Balance sneakers model X-90 in pale pink.",price:"599",image:W.a,quantity:1},{id:4,name:"Lounge Blazer",description:"A slouchy, lounge blazer in cerise pink.",price:"449",image:F.a,quantity:1},{id:5,name:"Satin Boots",description:"A pair of boots in a cerise pink, made of smooth satin.",price:"389",image:T.a,quantity:1},{id:6,name:"Gold Bomber Jacket",description:"An oversized bomber jacket in a sparkly gold.",price:"629",image:J.a,quantity:1}],R=function(){var e=r.a.useContext(y),t=e.currentCart,a=e.cart;return r.a.createElement(b.Siteframe,{headerProps:{className:"bg-light-gray paxl",companyName:r.a.createElement("span",{style:{color:"black"}},"RetroShop"),cols:[r.a.createElement(k.Grid,Object.assign({className:"grid-show position-fixed type-black em-alt"},{style:{right:"0"}},{flexDirection:"row",justifyContent:"space-between"}),r.a.createElement(k.FlexCol,{fixed:!0},r.a.createElement("span",null,"Accessories")),r.a.createElement(k.FlexCol,{fixed:!0},r.a.createElement("span",null,"Clothes")),r.a.createElement(k.FlexCol,{fixed:!0},r.a.createElement("span",null,"Brands")))]},sidebarProps:{className:"bg-decorative-yellow",primaryLinks:[{text:[r.a.createElement("img",{alt:"RetroShop logo",key:"000",style:{width:"90%",margin:"auto"},src:"https://i.imgur.com/ANCnCV1.png"})],id:"logo"},{text:"Coat",path:"/product",id:"1"},{text:"Sunglasses",path:"/product",id:"2"},{text:"Sneakers",path:"/product",id:"3"},{text:"Blazer",path:"/product",id:"4"},{text:"Boots",path:"/product",id:"5"},{text:"Jacket",path:"/product",id:"6"},{text:"All products",path:"/",id:""}],secondaryLinks:[{text:"Shopping Bag"},{text:"Checkout",path:"/checkout",id:"0"}],renderLink:function(e){var n=e.text,l=e.path,i=e.id;return r.a.createElement(r.a.Fragment,null,"logo"===i?n:l?r.a.createElement(m.b,{to:"".concat("/checkout"!==l?"".concat(l).concat(i):a.length>=1?l:"/"),key:i,href:l,style:{padding:"3px",color:"unset",textDecoration:"none"}},r.a.createElement(S.DefaultButton,{disabled:"/checkout"===l&&0===a.length,className:"0"===i?"":"mlxl pan pui-btn--flat type-black"},n)):r.a.createElement(S.DefaultButton,{className:"mas",onClick:t},n))}}},r.a.createElement("div",{className:"bg-light-green scroll",style:{height:"100%",width:"auto"}},r.a.createElement(C.Panel,{className:"bg-light-green display-flex",style:{backgroundImage:'url("https://i.imgur.com/6Ncy7S2.png")',minWidth:"fit-content",width:"auto",height:"20%",overflow:"auto",padding:"0"}}),r.a.createElement(C.Panel,{header:r.a.createElement("h3",{className:"mam"},"All products"),className:"scroll display-flex",style:{minWidth:"fit-content",width:"auto",height:"auto"}},r.a.createElement(k.Grid,{className:"grid-show pbxl scroll",justifyContent:"space-evenly"},K.map((function(e){return r.a.createElement(k.FlexCol,{key:e.id,col:8,className:"width-product pan"},r.a.createElement(I,{key:e.id,showCart:!1,product:e}))}))))))},M=(a(114),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).centeringStyle={margin:"0",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"20px"},e.centeringStyleImage={margin:"0",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"40px"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.createElement("div",{style:{display:"flex",justifyContent:"center",justifySelf:"center"}},n.createElement("img",{style:this.centeringStyleImage,src:this.props.product.image,alt:""}),n.createElement("p",{style:this.centeringStyle},this.props.product.name),n.createElement("p",{style:this.centeringStyle},"Price: ",this.props.product.price,"kr"),n.createElement("p",{style:this.centeringStyle},"Quantity: ",this.props.product.quantity),n.createElement(x.Icon,{onClick:function(){return e.props.onAdd(e.props.product)},src:"add_circle"}),n.createElement(x.Icon,{onClick:function(){return e.props.onMinus(e.props.product,e.props.product.id)},src:"cancel"}))}}]),a}(n.Component)),q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(y.Consumer,null,(function(t){return n.createElement("div",{style:G},n.createElement("h2",{style:H},"You have this many different items: ",e.props.cart.filter((function(e){return e.quantity>0})).length),e.props.cart.map((function(e){return n.createElement(M,{key:e.id,product:e,onAdd:function(){return t.addToCart(e.id)},onMinus:function(){return t.removeFromCart(e.id)}})})))}))}}]),a}(n.Component),G={display:"flex",flexDirection:"column",justifyContent:"center",justifySelf:"center"},H={margin:"20px"},Z=a(6),V=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var e=document.getElementById("userFirstName"),t=document.getElementById("userLastName"),a=document.getElementById("userEmail"),n=document.getElementById("userPhoneNumber"),r=document.getElementById("userAdress"),l=document.getElementById("userZipcode"),i=document.getElementById("userCountry");localStorage.firstName&&(e.value=JSON.parse(localStorage.firstName)),localStorage.lastName&&(t.value=JSON.parse(localStorage.lastName)),localStorage.email&&(a.value=JSON.parse(localStorage.email)),localStorage.phoneNumber&&(n.value=JSON.parse(localStorage.phoneNumber)),localStorage.adress&&(r.value=JSON.parse(localStorage.adress)),localStorage.zipcode&&(l.value=JSON.parse(localStorage.zipcode)),localStorage.country&&(i.value=JSON.parse(localStorage.country))},e.centerStyle={paddingTop:"20px",display:"flex",justifyContent:"center",alignItems:"center"},e.gridContainer={display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:"50px",gridRowGap:"20px",justifyContent:"center"},e.gridItem={fontSize:"16px"},e}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target.value,a=e.target.name;if("phoneNumber"===a||"zipcode"===a)for(var n=/^[a-zA-Z]+$/,r=0;r<e.target.value.length;r++)t[r].match(n)&&(e.target.value="",t="");else if("firstName"===a||"lastName"===a||"country"===a)for(var l=/^[a-zA-Z]+$/,i=0;i<e.target.value.length;i++)t[i].match(l)||(e.target.value="",t="");var o=JSON.stringify(t);localStorage.setItem(a,o)}},{key:"render",value:function(){return n.createElement("div",null,n.createElement("form",{style:this.gridContainer,action:""},n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userFirstName"},"First Name"),n.createElement(Z.Input,{name:"firstName",id:"userFirstName",onChange:this.handleInputChange})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userLastName"},"Last Name"),n.createElement(Z.Input,{name:"lastName",id:"userLastName",onChange:this.handleInputChange})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userEmail"},"Email"),n.createElement(Z.Input,{name:"email",id:"userEmail",onChange:this.handleInputChange})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userPhoneNumber"},"Phone Number"),n.createElement(Z.Input,{name:"phoneNumber",id:"userPhoneNumber",onChange:this.handleInputChange})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userAdress"},"Adress"),n.createElement(Z.Input,{name:"adress",id:"userAdress",onChange:this.handleInputChange})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userZipcode"},"Zipcode"),n.createElement(Z.Input,{name:"zipcode",id:"userZipcode",onChange:this.handleInputChange})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userCountry"},"Country"),n.createElement(Z.Input,{name:"country",id:"userCountry",onChange:this.handleInputChange}))))}}]),a}(n.Component),Y=(a(34),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).shippingPaymentBox={width:"150px",height:"150px",backgroundColor:"lightgray",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",margin:"10px",border:"2px solid black",borderRadius:"16px",fontStyle:"italic",fontSize:"16px",fontWeight:"bold"},n.shippingPaymentBoxInside={width:"100px",height:"50px",backgroundColor:"red",margin:"0",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid black",borderRadius:"16px"},n.state={date:new Date},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("shippingDiv"),t=0;t<e.length;t++)e[t].addEventListener("click",this.handleDivSelect)}},{key:"render",value:function(){return n.createElement("div",{className:"pui-no-select",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},n.createElement("div",{id:"dhlShipping",className:"shippingDiv",style:this.shippingPaymentBox},n.createElement("div",{style:this.shippingPaymentBoxInside},"DHL"),n.createElement("p",null,"24h"),n.createElement("p",{className:"amountForShipping"},"99kr")),n.createElement("div",{id:"shenkerShipping",className:"shippingDiv",style:this.shippingPaymentBox},n.createElement("div",{style:this.shippingPaymentBoxInside},"Shenker"),n.createElement("p",null,"48h"),n.createElement("p",{className:"amountForShipping"},"49kr")),n.createElement("div",{id:"postNordShipping",className:"shippingDiv",style:this.shippingPaymentBox},n.createElement("div",{style:this.shippingPaymentBoxInside},"Postnord"),n.createElement("p",null,"72h"),n.createElement("p",{className:"amountForShipping"},"free")))}},{key:"handleDivSelect",value:function(e){for(var t=document.getElementsByClassName("shippingDiv"),a=0;a<t.length;a++)t[a].style.backgroundColor="lightgray",e.currentTarget.querySelectorAll(".amountForShipping")[a]&&console.log(e.currentTarget.querySelectorAll(".amountForShipping")[a].textContent);e.currentTarget.style.backgroundColor="red"}}]),a}(n.Component)),Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).shippingPaymentBox={width:"150px",height:"150px",backgroundColor:"lightgray",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",margin:"10px",border:"2px solid black",borderRadius:"16px",fontStyle:"italic",fontSize:"16px",fontWeight:"bold"},e.shippingPaymentBoxInside={width:"100px",height:"50px",backgroundColor:"red",margin:"0",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid black",borderRadius:"16px"},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("paymentDiv"),t=0;t<e.length;t++)e[t].addEventListener("click",this.handleDivSelect)}},{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("div",{className:"pui-no-select",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},n.createElement("div",{onClick:function(){return e.props.displayBankCard()},className:"paymentDiv",style:this.shippingPaymentBox},n.createElement("div",{style:this.shippingPaymentBoxInside},"Bank Card"),n.createElement("p",null,"Mastercard"),n.createElement("p",null,"Visa")),n.createElement("div",{onClick:function(){return e.props.displaySwish()},className:"paymentDiv",style:this.shippingPaymentBox},n.createElement("div",{style:this.shippingPaymentBoxInside},"Swish")),n.createElement("div",{onClick:function(){return e.props.displayKlarna()},className:"paymentDiv",style:this.shippingPaymentBox},n.createElement("div",{style:this.shippingPaymentBoxInside},"Klarna"),n.createElement("p",null,"Split up your payment"))))}},{key:"handleDivSelect",value:function(e){for(var t=document.getElementsByClassName("paymentDiv"),a=0;a<t.length;a++)t[a].style.backgroundColor="lightgray";e.currentTarget.style.backgroundColor="red"}}]),a}(n.Component),$=(a(35),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var e=document.getElementById("userFirstNameBank"),t=document.getElementById("userLastNameBank");localStorage.firstName&&(e.value=JSON.parse(localStorage.firstName)),localStorage.lastName&&(t.value=JSON.parse(localStorage.lastName))},e.centerStyle={display:"flex",justifyContent:"center",paddingTop:"20px"},e.gridContainer={display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:"50px",gridRowGap:"20px",justifyContent:"center"},e.gridItem={fontSize:"16px"},e}return Object(c.a)(a,[{key:"checkIfNumber",value:function(e){var t=e.target.value,a=e.target.id,n=/^[a-zA-Z]+$/;if("userCardNumber"===a||"userCvc"===a||"userMonth"===a||"userYear"===a)for(var r=0;r<e.target.value.length;r++)t[r].match(n)&&(e.target.value="",t="");else for(var l=0;l<e.target.value.length;l++)t[l].match(n)||(e.target.value="",t="")}},{key:"render",value:function(){return n.createElement("div",null,n.createElement("form",{style:this.gridContainer,action:""},n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userFirstNameBank"},"First Name"),n.createElement(Z.Input,{id:"userFirstNameBank",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userLastNameBank"},"Last Name"),n.createElement(Z.Input,{id:"userLastNameBank",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userCardNumber"},"Card Number"),n.createElement(Z.Input,{id:"userCardNumber",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userCvc"},"CVC"),n.createElement(Z.Input,{id:"userCvc",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userMonth"},"Month"),n.createElement(Z.Input,{id:"userMonth",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userYear"},"Year"),n.createElement(Z.Input,{id:"userYear",onChange:this.checkIfNumber}))))}}]),a}(n.Component)),U=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var e=document.getElementById("userFirstNameKlarna"),t=document.getElementById("userLastNameKlarna"),a=document.getElementById("userEmailKlarna");localStorage.firstName&&(e.value=JSON.parse(localStorage.firstName)),localStorage.lastName&&(t.value=JSON.parse(localStorage.lastName)),localStorage.phoneNumber&&(a.value=JSON.parse(localStorage.phoneNumber))},e.gridContainer={display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:"50px",gridRowGap:"20px",justifyContent:"center"},e.gridItem={fontSize:"16px"},e}return Object(c.a)(a,[{key:"checkIfNumber",value:function(e){for(var t=e.target.value,a=/^[a-zA-Z]+$/,n=0;n<e.target.value.length;n++)t[n].match(a)||(e.target.value="",t="")}},{key:"render",value:function(){return n.createElement("div",null,n.createElement("form",{style:this.gridContainer},n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userFirstNameKlarna"},"First Name"),n.createElement(Z.Input,{id:"userFirstNameKlarna",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userLastNameKlarna"},"Last Name"),n.createElement(Z.Input,{id:"userLastNameKlarna",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userEmailKlarna"},"Email"),n.createElement(Z.Input,{id:"userEmailKlarna"}))))}}]),a}(n.Component),X=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var e=document.getElementById("userFirstNameSwish"),t=document.getElementById("userLastNameSwish"),a=document.getElementById("userPhoneNumberSwish");localStorage.firstName&&(e.value=JSON.parse(localStorage.firstName)),localStorage.lastName&&(t.value=JSON.parse(localStorage.lastName)),localStorage.phoneNumber&&(a.value=JSON.parse(localStorage.phoneNumber))},e.centerStyle={display:"flex",justifyContent:"center",paddingTop:"20px"},e.gridContainer={display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:"50px",gridRowGap:"20px",justifyContent:"center"},e.gridItem={fontSize:"16px"},e}return Object(c.a)(a,[{key:"checkIfNumber",value:function(e){var t=e.target.value,a=/^[a-zA-Z]+$/;if("userPhoneNumberSwish"===e.target.id)for(var n=0;n<e.target.value.length;n++)t[n].match(a)&&(e.target.value="");else for(var r=0;r<e.target.value.length;r++)t[r].match(a)||(e.target.value="")}},{key:"render",value:function(){return n.createElement("div",null,n.createElement("form",{style:this.gridContainer,action:""},n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userFirstNameSwish"},"First Name"),n.createElement(Z.Input,{id:"userFirstNameSwish",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userLastNameSwish"},"Last Name"),n.createElement(Z.Input,{id:"userLastNameSwish",onChange:this.checkIfNumber})),n.createElement("div",{style:this.gridItem},n.createElement("label",{htmlFor:"userPhoneNumberSwish"},"Phone Number"),n.createElement(Z.Input,{id:"userPhoneNumberSwish",onChange:this.checkIfNumber}))))}}]),a}(n.Component),_=(a(27),a(120),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=function(e,t){return n.setState({isLoading:!0}),e.doSignInAnonymously(),setTimeout((function(){t.cart=[],n.setState({isLoading:!1})}),2e3),null},n.state={isLoading:!1},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(v.Consumer,null,(function(t){return r.a.createElement(y.Consumer,null,(function(a){return r.a.createElement(r.a.Fragment,null,!0===e.state.isLoading?r.a.createElement("div",{className:"icon icon-middle spinner position-absolute",style:{fontSize:"96px",margin:"0 auto"}},r.a.createElement("svg",{className:"icon-spinner-lg",height:"100px",width:"100px",viewBox:"0 0 101 101",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{className:"ring",cx:"50%",cy:"50%",fill:"none",r:"45%",strokeLinecap:"butt",strokeWidth:"10%"}),r.a.createElement("circle",{className:"path",cx:"50%",cy:"50%",fill:"none",r:"45%",strokeLinecap:"butt",strokeWidth:"10%"}))):null,r.a.createElement("p",{className:"type-sm"},"Confirm Payment"),r.a.createElement(S.PrimaryButton,{large:!0,disabled:e.state.isLoading||a.cart.length<=0,className:"auth",id:"anon",onClick:a.cart.length<=0?null:function(){return!0===e.props.checkIfDone()?e.handleClick(t,a):function(){return null}}},"Confirm order"))}))}))}}]),a}(r.a.Component)),ee=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).receiptStyle={position:"fixed",backgroundColor:"lightgray",marginLeft:"40%",width:"400px",bottom:"10vh",top:"10vh",display:"flex",alignItems:"center",flexDirection:"column",border:"2px solid black",borderRadius:"16px",justifyContent:"space-around"},e}return Object(c.a)(a,[{key:"reloadWebsite",value:function(){window.location.reload()}},{key:"render",value:function(){return n.createElement("div",{id:"receipt",style:this.receiptStyle},n.createElement("h2",null,"Receipt"),n.createElement("p",null,"-----------------------------------------"),n.createElement("h3",null,"The products costs ",""," ",this.props.status.price),n.createElement("h3",null,"The shipping costs ",""," ",this.props.status.shippingPrice,"kr"),n.createElement("h3",null,"The shipping will take ",""," ",this.props.status.shippingTime," ",""," working days"),n.createElement("h3",null,"Total price is ",""," ",this.props.status.totalPrice," kr"),n.createElement("button",{onClick:this.reloadWebsite},"Ok"))}}]),a}(n.Component),te=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={hideBankCard:!0,hideSwish:!0,hideKlarna:!0,cart:[],firstName:!1,lastName:!1,email:!1,adress:!1,hideReceipt:!0,price:0,shippingPrice:0,shippingTime:"",totalPrice:0},e.displayBankCard=function(){e.setState({hideBankCard:!1}),e.setState({hideSwish:!0}),e.setState({hideKlarna:!0})},e.displaySwish=function(){e.setState({hideBankCard:!0}),e.setState({hideSwish:!1}),e.setState({hideKlarna:!0})},e.displayKlarna=function(){e.setState({hideBankCard:!0}),e.setState({hideSwish:!0}),e.setState({hideKlarna:!1})},e.checkIfInfoFilledOut=function(){return("/checkout"===window.location.pathname||"/DesignSystem-app/checkout"===window.location.pathname)&&(!1===e.state.hideBankCard||!1===e.state.hideKlarna||!1===e.state.hideSwish?e.context.cart.length>=1?(e.checkShippingChosen({cost:99,time:1},{cost:49,time:2},{cost:0,time:3}),!0):(alert("Your shopping bag is empty. Please add items to your shopping bag before checkout."),!1):(alert("Please select a payment method."),!1))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(y.Consumer,null,(function(t){return n.createElement("div",{style:{position:"relative",height:"100vh"}},n.createElement(b.Siteframe,{headerProps:{className:"bg-light-gray paxl",companyName:n.createElement("span",{style:{color:"black",fontSize:"30px",fontStyle:"italic"}},"RetroShop"),productName:n.createElement("div",null,n.createElement(m.b,{to:"/"},n.createElement(S.BrandButton,null,"Go to frontPage")))}},n.createElement("div",{className:"bg-light-green paxl scroll",style:{height:"100%",overflow:"scroll"}},e.state.hideReceipt?null:n.createElement(ee,{status:e.state}),n.createElement(C.Panel,Object.assign({className:"txt-c"},{title:"Shopping Bag"}),n.createElement(q,{cart:t.cart}),n.createElement("p",{className:"txt-r h4 em-high"},"Total: ",e.getTotal(),"kr")),n.createElement(C.Panel,Object.assign({className:"txt-c"},{title:"Your Information"}),n.createElement(V,{status:e.state})),n.createElement(C.Panel,Object.assign({className:"txt-c"},{title:"Shipping"}),n.createElement(Y,null)),n.createElement(C.Panel,Object.assign({className:"txt-c"},{title:"Payment"}),n.createElement(Q,{displayBankCard:e.displayBankCard,displayKlarna:e.displayKlarna,displaySwish:e.displaySwish}),e.state.hideBankCard?null:n.createElement($,null),e.state.hideKlarna?null:n.createElement(U,null),e.state.hideSwish?null:n.createElement(X,null)),n.createElement(C.Panel,Object.assign({className:"txt-c pbxxl"},{title:"Confirmation"}),n.createElement(_,{checkIfDone:e.checkIfInfoFilledOut})))))}))}},{key:"getTotal",value:function(){return this.context.getCurrentTotal()}},{key:"checkShippingChosen",value:function(e,t,a){var n=document.getElementById("dhlShipping"),r=document.getElementById("postNordShipping"),l=document.getElementById("shenkerShipping");return"red"===n.style.backgroundColor?(console.log("DHL has been chosen"),this.checkPaymentChosen(e),!0):"red"===r.style.backgroundColor?(console.log("Postnord has been chosen"),this.checkPaymentChosen(a),!0):"red"===l.style.backgroundColor?(console.log("Shenker has been chosen"),this.checkPaymentChosen(t),!0):(alert("please choose an shipping method"),!1)}},{key:"checkPaymentChosen",value:function(e){return!1===this.state.hideBankCard?(this.checkBankCardFilledOut(e),!0):!1===this.state.hideKlarna?(this.checkKlarnaFilledOut(e),!0):!1===this.state.hideSwish&&(this.checkSwishFilledOut(e),!0)}},{key:"checkSwishFilledOut",value:function(e){var t=document.getElementById("userFirstNameSwish"),a=document.getElementById("userLastNameSwish"),n=document.getElementById("userPhoneNumberSwish");return""!==t.value&&null!==t.value&&""!==a.value&&null!==a.value&&""!==n.value&&null!==a.value?(this.orderHasBeenPlaced(e),!0):(alert("Please fill out the payment options"),!1)}},{key:"checkKlarnaFilledOut",value:function(e){var t=document.getElementById("userFirstNameKlarna"),a=document.getElementById("userLastNameKlarna"),n=document.getElementById("userEmailKlarna");return""!==t.value&&null!==t.value&&""!==a.value&&null!==a.value&&""!==n.value&&null!==a.value?(this.orderHasBeenPlaced(e),!0):(alert("Please fill out the payment options"),!1)}},{key:"checkBankCardFilledOut",value:function(e){var t=document.getElementById("userFirstNameBank"),a=document.getElementById("userLastNameBank"),n=document.getElementById("userCardNumber"),r=document.getElementById("userCvc"),l=document.getElementById("userMonth"),i=document.getElementById("userYear");return""!==t.value&&null!==t.value&&""!==a.value&&null!==a.value&&""!==n.value&&null!==a.value&&""!==r.value&&null!==r.value&&""!==l.value&&null!==l.value&&""!==i.value&&null!==i.value?(this.orderHasBeenPlaced(e),!0):(alert("Please fill out the payment options"),!1)}},{key:"orderHasBeenPlaced",value:function(e){var t=this,a=this.getTotal();this.setState({shippingPrice:e.cost}),this.setState({shippingTime:e.time}),this.setState({price:a});var n=a+e.cost;return this.setState({totalPrice:n}),setTimeout((function(){t.setState({hideReceipt:!1})}),2e3),!0}}]),a}(n.Component);te.contextType=y;a(45);var ae=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(y.Consumer,null,(function(t){return n.createElement(b.Siteframe,{headerProps:{className:"bg-light-gray paxl",companyName:n.createElement("span",{style:{color:"black"}},"RetroShop"),cols:[n.createElement(k.Grid,Object.assign({className:"grid-show position-fixed type-black em-alt"},{style:{right:"0",height:"window.innerHeight"}},{flexDirection:"row",justifyContent:"space-between"}),n.createElement(k.FlexCol,{fixed:!0},n.createElement("span",null,"Accessories")),n.createElement(k.FlexCol,{fixed:!0},n.createElement("span",null,"Clothes")),n.createElement(k.FlexCol,{fixed:!0},n.createElement("span",null,"Brands")))]},sidebarProps:{className:"bg-decorative-yellow overflow-hidden",primaryLinks:[{text:[n.createElement("img",{alt:"RetroShop logo",key:"logo",style:{width:"90%",margin:"auto"},src:"https://i.imgur.com/ANCnCV1.png"})],id:"logo"},{text:"Coat",path:"/product",id:"1"},{text:"Sunglasses",path:"/product",id:"2"},{text:"Sneakers",path:"/product",id:"3"},{text:"Blazer",path:"/product",id:"4"},{text:"Boots",path:"/product",id:"5"},{text:"Jacket",path:"/product",id:"6"},{text:"All products",path:"/",id:""}],secondaryLinks:[{text:"Shopping Bag"},{text:"Checkout",path:"/checkout",id:"0"}],renderLink:function(e){var a=e.text,r=e.path,l=e.id;return n.createElement(n.Fragment,null,"logo"===l?a:r?n.createElement(m.b,{to:"".concat("/checkout"!==r?"".concat(r).concat(l):t.cart.length>=1?r:"/"),key:l,href:r,style:{padding:"3px",color:"unset",textDecoration:"none"}},n.createElement(S.DefaultButton,{disabled:"/checkout"===r&&0===t.cart.length,className:"0"===l?"":"mlxl pan pui-btn--flat type-black"},a)):n.createElement(S.DefaultButton,{className:"mas",onClick:t.currentCart},a))}}},n.createElement("div",{className:"bg-light-green",style:{height:"100%",width:"auto",overflowX:"hidden"}},n.createElement(C.Panel,{className:"bg-light-green display-flex",style:{backgroundImage:'url("https://i.imgur.com/6Ncy7S2.png")',minWidth:"fit-content",width:"auto",height:"20%",overflow:"auto",padding:"0"}}),n.createElement("div",{className:"bg-white border-rounded",style:{width:"70rem",height:"50rem",margin:"auto",marginTop:"4rem",boxShadow:"0px 3px 5px 0px rgba(0,0,0,0.38)"}},n.createElement(I,{id:e.props.id,product:e.props.product}))))}))}}]),a}(n.Component),ne=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).removeFromCart=function(e){var t=n.state,a=t.cart,r=t.total;a.map((function(t){t.id===e&&t.quantity<=1?(r-=parseInt(t.price),n.removeProduct(e,r)):t.id===e&&(t.quantity--,r-=parseInt(t.price),n.setState({cart:a,total:r}))}))},n.getCurrentTotal=function(){var e=0,t=n.state.cart;return void 0!==t||null!==t?(t.forEach((function(t){e+=parseInt(t.price)*t.quantity})),e):0},n.currentCart=function(){n.setState((function(e){return{showCart:!e.showCart}}))},n.addToCart=function(e){var t=n.state,a=t.cart,r=t.total,l=K.find((function(t){return t.id===e})),i=a.find((function(t){return e===t.id}));i?(i.quantity++,r+=parseInt(i.price)):l&&(a.push(l),r+=parseInt(l.price)),n.setState({cart:a,total:r})},n.state={cart:[],addToCart:n.addToCart,removeFromCart:n.removeFromCart,currentCart:n.currentCart,updateScreenWidth:n.updateScreenWidth,showCart:!1,total:0,getCurrentTotal:n.getCurrentTotal,windowWidth:window.innerWidth},n.addToCart=n.addToCart.bind(Object(p.a)(n)),n.removeFromCart=n.removeFromCart.bind(Object(p.a)(n)),n.currentCart=n.currentCart.bind(Object(p.a)(n)),n.setState=n.setState.bind(Object(p.a)(n)),n.getCurrentTotal=n.getCurrentTotal.bind(Object(p.a)(n)),n.updateScreenWidth=n.updateScreenWidth.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.windowWidth;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.Provider,{value:this.state},this.props.children,r.a.createElement(N.Modal,{dialogClassName:"pbxxl",size:"".concat(t<=481?"100%":"calc(70% + 2rem)"),onHide:function(){return e.setState({showCart:!1})},show:this.state.showCart},this.showCartProducts(),0===this.getCurrentTotal()?null:r.a.createElement("p",{className:"pal em-high float-right"},"Total: ",this.getCurrentTotal(),"kr"))))}},{key:"showCartProducts",value:function(){var e=this.state.windowWidth;return 1<=this.state.cart.length?this.state.cart.map((function(t){return 0===t.quantity?null:r.a.createElement(I,{className:"width-product",showCart:!0,key:t.id,mobileView:e<=481,product:t})})):0===this.state.cart.length?r.a.createElement("p",null,"Looks like your shopping bag is empty..."):void 0}},{key:"removeProduct",value:function(e,t){var a=this.state.cart.filter((function(t){return t.id!==e}));this.setState({cart:a,total:t})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateScreenWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateScreenWidth)}},{key:"updateScreenWidth",value:function(){this.setState({windowWidth:window.innerWidth})}}]),a}(r.a.Component),re=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/DesignSystem-app"},r.a.createElement(ne,null,r.a.createElement(v.Provider,{value:new E},r.a.createElement(d.c,null,K.map((function(e){var t="product".concat(e.id);return r.a.createElement(d.a,{key:e.id,path:"/".concat(t)},r.a.createElement(ae,{id:e.id,product:e}))})),r.a.createElement(d.a,{path:"/checkout"},r.a.createElement(te,null)),r.a.createElement(d.a,{path:""},r.a.createElement(R,null))))))}}]),a}(r.a.Component);re.contextType=y,document.cookie="cross-site-cookie=bar; SameSite=None; Secure",i.a.render(r.a.createElement(re,null),document.getElementById("root"))},35:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/leopard-coat.39cbbfe2.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/blazer.175d8079.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/boots.9d92fd2f.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/sunglasses.39774673.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/sneakers.4b5deeac.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/jacket.a09fb58e.jpg"},55:function(e,t,a){e.exports=a(122)},60:function(e,t,a){},74:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.71cba158.chunk.js.map