(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(145),c=n(153),s=n.n(c),l=n(164),d=n.n(l),p=n(158),m=n(148),f=(n(49),n(159),n(160),n(144)),h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return this.props.blogPosts.map(function(t){var e=t.node,n=s()(e,"frontmatter.title")||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},i.a.createElement(u.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))})},e}(i.a.Component);n.d(e,"pageQuery",function(){return y});var g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=s()(this,"props.data.site.siteMetadata.title"),e=s()(this,"props.data.allMarkdownRemark.edges"),n=s()(this,"props.data.site.siteMetadata.description");return i.a.createElement(m.a,{location:this.props.location,title:t},i.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),i.a.createElement(p.a,null),i.a.createElement(h,{blogPosts:e}))},e}(i.a.Component),y=(e.default=g,"2584137191")},144:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s});var a=n(162),r=n.n(a),o=n(163),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var u=new r.a(i.a);var c=u.rhythm,s=u.scale},145:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(143),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var s=n(146),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(34);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(t,e,n){var a;t.exports=(a=n(147))&&a.default||a},147:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(48),c=n(2),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},148:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(145),c=n(144),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,r)},e}(i.a.Component);e.a=s},158:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=(n(159),n(160),n(161)),c=n.n(u),s=n(144),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},i.a.createElement("img",{src:c.a,alt:"Artūras",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),i.a.createElement("p",null,i.a.createElement("strong",null,"Artūras")," kuris gyvena Vilniuje ir (ne)dirba naudingus darbus."," ",i.a.createElement("a",{href:"https://twitter.com/Arturas"},"You should follow him on Twitter")))},e}(i.a.Component);e.a=l},161:function(t,e,n){t.exports=n.p+"static/profile-pic-d9ac4e7f8f271155c63dbca227199e43.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-19c47c2d059ec6e1a4a8.js.map