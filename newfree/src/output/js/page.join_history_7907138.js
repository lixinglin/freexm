seajs.use(["$","handlebars"],function(a,n){a(function(){function i(){return e.data("ajax-busy")?!1:(e.data("ajax-busy",!0),s.show(),void a.getJSON("/ajax/join_history_list.php",{p:e.data("page")}).done(l))}function l(a){s.hide(),e.data("ajax-busy",!1),0===e.find(".item").length&&0==a.view.length&&e.html('<div class="b-nodata">您还未报名任何活动！</div>'),0!==a.view.length?(e.data("page",e.data("page")+1),t(a)):o.off("scroll.updatejoin_history")}function t(n){e.append(a(c(n)))}var e=a("#join_history"),s=a("#join_historylistloading"),o=a(window),d=a(document),c=n.template({1:function(a,n,i,l){var t,e,s=n.helperMissing,o="function",d=this.escapeExpression;return'<div class="item">\n    <div class="photo">\n        <a href="/view/activity_detail.html?id='+d((e=null!=(e=n.id||(null!=a?a.id:a))?e:s,typeof e===o?e.call(a,{name:"id",hash:{},data:l}):e))+'">\n            <img src="'+d((e=null!=(e=n.photo_src||(null!=a?a.photo_src:a))?e:s,typeof e===o?e.call(a,{name:"photo_src",hash:{},data:l}):e))+'" class="ui-loading" alt="'+d((e=null!=(e=n.title||(null!=a?a.title:a))?e:s,typeof e===o?e.call(a,{name:"title",hash:{},data:l}):e))+'" >\n        </a>\n    </div>\n    <div class="detail">\n        <a class="title" href="/view/activity_detail.html?id='+d((e=null!=(e=n.id||(null!=a?a.id:a))?e:s,typeof e===o?e.call(a,{name:"id",hash:{},data:l}):e))+'">'+d((e=null!=(e=n.title||(null!=a?a.title:a))?e:s,typeof e===o?e.call(a,{name:"title",hash:{},data:l}):e))+'</a>\n        <div class="ui-grid">\n            <div class="ui-grid-row">\n                <div class="ui-grid-6">\n                    <span class="iconfont">&#xe611;</span>\n                    '+d((e=null!=(e=n.join||(null!=a?a.join:a))?e:s,typeof e===o?e.call(a,{name:"join",hash:{},data:l}):e))+'人已报名\n                </div>\n                <div class="ui-grid-6">\n                    <span class="iconfont">&#xe603;</span>\n                    '+d((e=null!=(e=n.start_date||(null!=a?a.start_date:a))?e:s,typeof e===o?e.call(a,{name:"start_date",hash:{},data:l}):e))+'\n                </div>\n            </div>\n            <div class="ui-grid-row">\n                <div class="ui-grid-12">\n                    <span class="iconfont">&#xe604;</span>\n                    '+d((e=null!=(e=n.location||(null!=a?a.location:a))?e:s,typeof e===o?e.call(a,{name:"location",hash:{},data:l}):e))+'\n                </div>\n            </div>\n        </div>\n    </div>\n    <img src="'+(null!=(e=null!=(e=n.qrcode||(null!=a?a.qrcode:a))?e:s,t=typeof e===o?e.call(a,{name:"qrcode",hash:{},data:l}):e)?t:"")+'" alt="" class="qrcode"/>\n</div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,i,l){var t,e,s;return e=null!=(e=n.view||(null!=a?a.view:a))?e:n.helperMissing,s={name:"view",hash:{},fn:this.program(1,l,0),inverse:this.noop,data:l},t="function"==typeof e?e.call(a,s):e,n.view||(t=n.blockHelperMissing.call(a,t,s)),null!=t?t:""},useData:!0});o.on("scroll.updatejoin_history",function(){d.scrollTop()>=d.height()-o.height()&&i()}),S.data.renderData.isLogin?i():e.html('<div class="b-nodata">请<a href="/view/login.html?pathname=/view/join_history.html">登录</a>后再查看此页面</div>')})});