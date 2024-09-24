import{o as D}from"./chunk-WQVRDUNE.js";import{M as n,N as r,O as M,V as i,f as A,j as N,ka as S,la as I,m as l,ma as T,n as c,na as R,oa as E,p as u,pa as H,q as p,r as f,ra as w,sa as F,ta as m}from"./chunk-XMMIK2EA.js";var B=[],d=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=f({type:t});static \u0275inj=c({imports:[m.forRoot(B),m]})};var h=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["nav-bar"]],decls:22,vars:0,consts:[["routerLink","/"],["routerLink","/authors"],["routerLink","/authors/add"],["routerLink","/books"],["routerLink","/login"],["routerLink","/register"],["routerLink","/about"]],template:function(e,a){e&1&&(n(0,"nav")(1,"h2",0),i(2,"Book's Web"),r(),n(3,"ul")(4,"li")(5,"a",1),i(6,"Authors"),r()(),n(7,"li")(8,"a",2),i(9,"Add Author"),r()(),n(10,"li")(11,"a",3),i(12,"Books"),r()(),n(13,"li")(14,"a",4),i(15,"Login"),r()(),n(16,"li")(17,"a",5),i(18,"Register"),r()(),n(19,"li")(20,"a",6),i(21,"About"),r()()()())},dependencies:[F],styles:["nav[_ngcontent-%COMP%]{background-color:#333;color:#fff;padding:1rem}ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;display:flex}li[_ngcontent-%COMP%]{margin-right:1rem}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var v=class t{title="books-client";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"container"]],template:function(e,a){e&1&&(M(0,"nav-bar"),n(1,"div",0),M(2,"router-outlet"),r())},dependencies:[w,h]})};var b=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-not-found"]],decls:2,vars:0,template:function(e,a){e&1&&(n(0,"p"),i(1,"not-found works!"),r())}})};var g=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-about"]],decls:2,vars:0,template:function(e,a){e&1&&(n(0,"p"),i(1,"about works!"),r())}})};var C=class t{constructor(o){this.http=o}apiUrl="http://localhost:8000/api/users";tokenKey="authToken";_isAuthenticated=new A(this.hasToken());hasToken(){return!!localStorage.getItem(this.tokenKey)}saveToken(o){localStorage.setItem(this.tokenKey,o),this._isAuthenticated.next(!0)}removeToken(){localStorage.removeItem(this.tokenKey),this._isAuthenticated.next(!1)}login(o,e){return this.http.post(`${this.apiUrl}/login`,{username:o,password:e}).pipe(N(a=>this.saveToken(a.token)))}logout(){this.removeToken()}getToken(){return localStorage.getItem(this.tokenKey)}isAuthenticated(){return this._isAuthenticated.asObservable()}static \u0275fac=function(e){return new(e||t)(u(S))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})};var k=class t{constructor(o){this.authService=o}intercept(o,e){let a=this.authService.getToken();if(a){let O=o.clone({headers:o.headers.set("Authorization",`Bearer ${a}`)});return e.handle(O)}else return e.handle(o)}static \u0275fac=function(e){return new(e||t)(u(C))};static \u0275prov=l({token:t,factory:t.\u0275fac})};var L=[{path:"",redirectTo:"/books",pathMatch:"full"},{path:"books",loadChildren:()=>import("./chunk-2J32Q6XQ.js").then(t=>t.BooksModule)},{path:"authors",loadChildren:()=>import("./chunk-TDHGSVWJ.js").then(t=>t.AuthorsModule)},{path:"",loadChildren:()=>import("./chunk-6G2YPJMU.js").then(t=>t.UsersModule)},{path:"about",component:g},{path:"**",component:b}],y=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=f({type:t,bootstrap:[v]});static \u0275inj=c({providers:[T(R()),{provide:I,useClass:k,multi:!0}],imports:[H,d,D,m.forRoot(L)]})};E().bootstrapModule(y,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
