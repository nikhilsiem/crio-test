(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(9),r=n.n(c),i=(n(18),n(8)),l=n.n(i),o=n(10),u=n(12),b=n(29),j=n(28),d=n(31),h=n(30),m=n(11),x=n.n(m),O=(n(24),n(1)),f=function(e){e.key;var t=e.name,n=e.thumb,s=e.cuisines,a=e.cost,c=e.rating,r=e.votes;return Object(O.jsx)(j.a,{fluid:!0,className:"res-container",children:Object(O.jsx)(b.a,{children:Object(O.jsx)(d.a,{className:"res-card",children:Object(O.jsxs)("div",{className:"inline-show",children:[Object(O.jsx)(h.a,{src:n,className:"res-image",rounded:!0}),Object(O.jsx)(d.a.Title,{className:"res-name",children:t}),Object(O.jsxs)("div",{style:{display:"inline-block"},children:[Object(O.jsx)(x.a,{count:c,onChange:function(e){console.log(e)},size:18,activeColor:"#800000"}),Object(O.jsx)(d.a.Text,{className:"res-rating",children:c}),Object(O.jsxs)(d.a.Text,{className:"res-votes",children:["(",r,") delivery reviews"]})]}),Object(O.jsx)(d.a.Text,{className:"res-cuisines",children:s}),Object(O.jsxs)(d.a.Text,{className:"res-cost",children:["\u20b9",a," per person"]})]})})})})};n(26);var v=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(s.useEffect)((function(){c()}));var c=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://developers.zomato.com/api/v2.1/geocode?lat=12.9039&lon=77.6013",{method:"GET",headers:{Accept:"application/json","user-key":"f91be19c725fd96a6fb68414adc6ec34"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.nearby_restaurants);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"Zomato",children:[Object(O.jsx)("div",{className:"buttons-align",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)("button",{class:"btn btn-small",children:"Filter"}),Object(O.jsx)("button",{class:"btn btn-small",children:"Rating: 4.0+"}),Object(O.jsx)("button",{class:"btn btn-small",children:"Safe and Hygienic"}),Object(O.jsx)("button",{class:"btn btn-small",children:"Delivery Time"}),Object(O.jsx)("button",{class:"btn btn-small",children:"Rating"}),Object(O.jsx)("button",{class:"btn btn-small",children:"Cost"})]})}),Object(O.jsx)("h2",{children:"Restaurants near you:"}),Object(O.jsx)("div",{children:n.map((function(e){return Object(O.jsx)(f,{name:e.restaurant.name,thumb:e.restaurant.thumb,cuisines:e.restaurant.cuisines,cost:e.restaurant.average_cost_for_two,rating:e.restaurant.user_rating.aggregate_rating,votes:e.restaurant.user_rating.votes},e.restaurant.R.res_id)}))})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.13dd90db.chunk.js.map