(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/NYTlogo.e09902d3.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),c=a.n(o),r=(a(12),a(1)),s=a(2),i=a(4),d=a(3);a(13);var m=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid mobileNav"},l.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"./index.html"},"NYT Post"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:""},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#mostPopular"},"Popular")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#mostRecent"},"Recent")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About Us"))))))}}]),a}(l.a.Component),h=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid homeImage col-12"},l.a.createElement("img",{className:"img-fluid",src:a(14),alt:""}),l.a.createElement("div",{className:"carousel-caption"},"The New York Times (NYT), sometimes also known as The Times, is an American newspaper based in New York City with worldwide influence and readership. Here you can find a list of most popular and recent articles, which was posted on their official site.",l.a.createElement("p",null,'"All the News That\'s Fit to Print"')))}}]),n}(l.a.Component),u=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={data:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.LoadData()}},{key:"LoadData",value:function(){var e=this;fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=UUrrYw7RdU4mvrjHgLHzaAEGV71z36gY").then((function(e){return e.json()})).then((function(t){return e.setState({data:t.results},(function(){console.log(e.state.data)}))}))}},{key:"ShowArticles",value:function(e){return this.state.data.map((function(e,t){return console.log(e.media+".2.media-metadata.2.url"),l.a.createElement(R,{id:e.id,title:e.title,abstract:e.abstract})})).slice(e,e+4)}},{key:"render",value:function(){return null!=this.state.data?l.a.createElement("div",{className:"container-fluid",id:"mostPopular"},l.a.createElement("div",{className:"row articleRow"},l.a.createElement("hr",null),l.a.createElement("h4",null,"Most Popular Articles"),this.ShowArticles(0),l.a.createElement("button",{className:"btn hide-me","data-toggle":"collapse","data-target":"#secondRow"},"Show More")),l.a.createElement("div",{className:"row collapse articleRow",id:"secondRow"},this.ShowArticles(4),l.a.createElement("button",{className:"btn hide-me","data-toggle":"collapse","data-target":".thirdRow","aria-expanded":"false","aria-controls":"#thirdRow #secondRowHideBttn"},"Show More"),l.a.createElement("button",{id:"secondRowHideBttn",className:"btn thirdRow collapse show","data-toggle":"collapse","data-target":"#secondRow"},"Hide")),l.a.createElement("div",{className:"row collapse articleRow thirdRow",id:"thirdRow"},this.ShowArticles(8),l.a.createElement("button",{className:"btn hide-me","data-toggle":"collapse","data-target":".fourthRow","aria-expaned":"false","aria-controls":"#fourtRow #thirdRowHideBttn"},"Show More"),l.a.createElement("button",{id:"thirdRowHideBttn",className:"btn fourthRow collapse show","data-toggle":"collapse","data-target":"#secondRow,#thirdRow"},"Hide All")),l.a.createElement("div",{className:"row collapse articleRow fourthRow",id:"fourthRow"},this.ShowArticles(12),l.a.createElement("button",{className:"btn hide-me","data-toggle":"collapse","data-target":".fifthRow","aria-expanded":"false","aria-controls":"#fifthRow #fourthRowHideBttn"},"Show More"),l.a.createElement("button",{id:"fourthRowHideBttn",className:"btn  fifthRow collapse show","data-toggle":"collapse","data-target":"#secondRow,#thirdRow,#fourthRow"},"Hide All")),l.a.createElement("div",{className:"row collapse articleRow fifthRow",id:"fifthRow"},this.ShowArticles(16),l.a.createElement("button",{className:"btn collapse show","data-toggle":"collapse","data-target":"#secondRow,#thirdRow,#fourthRow,#fifthRow"},"Hide All"))):l.a.createElement("div",null,"No Data")}}]),a}(l.a.Component),w=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={data:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.LoadData()}},{key:"LoadData",value:function(){var e=this;fetch("https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=UUrrYw7RdU4mvrjHgLHzaAEGV71z36gY").then((function(e){return e.json()})).then((function(t){return e.setState({data:t.results},(function(){console.log(e.state.data)}))}))}},{key:"ShowArticles",value:function(e){return this.state.data.map((function(e,t){return console.log(e.media+".2.media-metadata.2.url"),l.a.createElement(R,{id:e.id,title:e.title,abstract:e.abstract})})).slice(e,e+4)}},{key:"render",value:function(){return null!=this.state.data?l.a.createElement("div",{className:"container-fluid",id:"mostRecent"},l.a.createElement("div",{className:"row articleRow"},l.a.createElement("hr",null),l.a.createElement("h4",null,"Recent Articles"),this.ShowArticles(0),l.a.createElement("button",{className:"btn hide-me","data-toggle":"collapse","data-target":"#secondRowRecent"},"Show More")),l.a.createElement("div",{className:"row collapse articleRow",id:"secondRowRecent"},this.ShowArticles(4),l.a.createElement("button",{className:"btn hide-me","data-toggle":"collapse","data-target":".thirdRowRecent","aria-expanded":"false","aria-controls":"#thirdRowRecent #secondRowHideBttnRecent"},"Show More"),l.a.createElement("button",{id:"secondRowHideBttnRecent",className:"btn thirdRowRecent collapse show","data-toggle":"collapse","data-target":"#secondRowRecent"},"Hide")),l.a.createElement("div",{className:"row collapse articleRow thirdRowRecent",id:"thirdRowRecent"},this.ShowArticles(8),l.a.createElement("button",{className:"btn hide-me","data-toggle":"collapse","data-target":".fourthRowRecent","aria-expaned":"false","aria-controls":"#fourtRowRecent #thirdRowHideBttnRecent"},"Show More"),l.a.createElement("button",{id:"thirdRowHideBttnRecent",className:"btn fourthRowRecent collapse show","data-toggle":"collapse","data-target":"#secondRowRecent,#thirdRowRecent"},"Hide All")),l.a.createElement("div",{className:"row collapse articleRow fourthRowRecent",id:"fourthRowRecent"},this.ShowArticles(12),l.a.createElement("button",{className:"btn hide-me","data-toggle":"collapse","data-target":".fifthRowRecent","aria-expanded":"false","aria-controls":"#fifthRowRecent #fourthRowHideBttnRecent"},"Show More"),l.a.createElement("button",{id:"fourthRowHideBttnRecent",className:"btn  fifthRowRecent collapse show","data-toggle":"collapse","data-target":"#secondRowRecent,#thirdRowRecent,#fourthRowRecent"},"Hide All")),l.a.createElement("div",{className:"row collapse articleRow fifthRowRecent",id:"fifthRowRecent"},this.ShowArticles(16),l.a.createElement("button",{className:"btn collapse show","data-toggle":"collapse","data-target":"#secondRowRecent,#thirdRowRecent,#fourthRowRecent,#fifthRowRecent"},"Hide All"))):l.a.createElement("div",null,"No Data")}}]),a}(l.a.Component),R=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card col-3",style:{"max-width":"25rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},this.props.title),l.a.createElement("p",{className:"card-text"},this.props.abstract),l.a.createElement("a",{href:"#",class:"btn btn-primary"},"Open")))}}]),a}(l.a.Component),f=function(){return l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null),l.a.createElement(h,null),l.a.createElement(u,null),l.a.createElement(w,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.f46783a2.chunk.js.map