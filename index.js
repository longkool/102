function loadComments(e){for(var r=0;r<e.feed.entry.length;r++){for(var a=0;a<e.feed.entry[r].link.length;a++)if("alternate"==e.feed.entry[r].link[a].rel){var t=e.feed.entry[r].link[a].href;break}var n=e.feed.entry[r].author[0].gd$image.src;if("https://img1.blogblog.com/img/b16-rounded.gif"!==n&&"https://img1.blogblog.com/img/blank.gif"!==n)var s=e.feed.entry[r].author[0].gd$image.src.replace("s512-c","s"+avatarSize+"-c");else s="//lh4.ggpht.com/-ntdKjBQECcg/W1anAMHdApI/AAAAAAAAHAU/33XLL1zWB48qhyaufndHFjWU5VRkFUrHACLcBGAs/s"+avatarSize+"-c/anonymous.png";if(e.feed.entry[r].author[0].uri)var i=e.feed.entry[r].author[0].uri.$t;else i="javascript:void(0)";var c=e.feed.entry[r].author[0].name.$t,d=e.feed.entry[r].summary.$t.replace(/(<([^>]+)>)/gi,""),g=d;if(d.length>characters){var l=d.substring(0,characters-3),f=l.lastIndexOf(" ");d=l.substring(0,f)+" ..."}$("._rc").append('<div class="rc-content"><div class="rc-img"><a href='+i+"><img src="+s+' /></a></div><div class="rc-main"><span class="rc-user"><a href='+t+">"+c+'</a></span><span class="rc-summary" title="'+g+'">'+d+"</span></div></div>")}}
$(window).on("load",function(){function e(e,a){for(var t=0;t<e[a].link.length;t++)if("alternate"==e[a].link[t].rel){var s=e[a].link[t].href;break}return s}function a(e,a){var t=e[a].title.$t,s=e[a].content.$t;if("media$thumbnail"in e[a]){var l=e[a].media$thumbnail.url,n=l.replace("/s72-c","/w640"),i=l.replace("/s72-c","/w280"),r=l.replace("/s72-c","/w100");s.indexOf("youtube.com/embed")>-1&&(n=l.replace("/default.","/hqdefault."),i=l.replace("/default.","/mqdefault."),r=l)}else n=noThumbnail,i=noThumbnail.replace("/s680","/w280"),r=noThumbnail.replace("/s680","/w100");return['<img class="post-thumb" alt="'+t+'" src="'+n+'"/>','<img class="post-thumb" alt="'+t+'" src="'+i+'"/>','<img class="post-thumb" alt="'+t+'" src="'+r+'"/>']}function t(e,a){if(void 0!=e[a].category)var t='<span class="post-tag">'+e[a].category[0].term+"</span>";else t="";return t}function s(s,l,n,i){if(l.match("post-list")||l.match("related")){var r="";r="recent"==i?"/feeds/posts/default?alt=json-in-script&max-results="+n:"random"==i?"/feeds/posts/default?max-results="+n+"&start-index="+(Math.floor(Math.random()*n)+1)+"&alt=json-in-script":"/feeds/posts/default/-/"+i+"?alt=json-in-script&max-results="+n,$.ajax({url:r,type:"get",dataType:"jsonp",success:function(n){if(l.match("post-list"))var i='<ul class="custom-widget">';else l.match("related")&&(i='<ul class="related-posts">');var r,o,c,u,m,h=n.feed.entry;if(void 0!=h){for(var d=0,p=h;d<p.length;d++){var f=e(p,d),b='<a href="'+f+'">'+p[d].title.$t+"</a>",v=a(p,d),g=t(p,d),w=(p[d].author[0].name.$t,o=void 0,c=(o=p[d].published.$t).substring(0,4),u=o.substring(5,7),m=o.substring(8,10),'<span class="post-date">'+monthFormat[parseInt(u,10)-1]+" "+m+", "+c+"</span>"),x=(r=p[d].content.$t,$("<div>").html(r).text().trim().substr(0,86),"");l.match("post-list")?x+='<li class="item-'+d+'"><a class="post-image-link" href="'+f+'">'+v[2]+'</a><h2 class="post-title">'+b+'</h2><div class="post-meta">'+w+"</div></div></li>":l.match("related")&&(x+='<li class="related-item item-'+d+'"><div class="post-image-wrap"><a class="post-image-link" href="'+f+'">'+v[1]+"</a>"+g+'</div><h2 class="post-title">'+b+'</h2><div class="post-meta">'+w+"</div></li>"),i+=x}i+="</ul>"}else i='<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown-o"/></ul>';s.html(i)}})}}$("#main-menu").each(function(){for(var e=$(this).find(".HTML ul > li").children("a"),a=e.length,t=0;t<a;t++){var s=e.eq(t),l=s.text();if("_"!==l.charAt(0)&&"_"===e.eq(t+1).text().charAt(0)){var n=s.parent();n.append('<ul class="sub-menu m-sub"/>')}"_"===l.charAt(0)&&(s.text(l.replace("_","")),s.parent().appendTo(n.children(".sub-menu")))}for(t=0;t<a;t++){var i=e.eq(t),r=i.text();if("_"!==r.charAt(0)&&"_"===e.eq(t+1).text().charAt(0)){var o=i.parent();o.append('<ul class="sub-menu2 m-sub"/>')}"_"===r.charAt(0)&&(i.text(r.replace("_","")),i.parent().appendTo(o.children(".sub-menu2")))}$("#main-menu ul li ul").parent("li").addClass("has-sub"),$("#main-menu-nav > li > a").each(function(){var e=$(this);"homepage"==e.attr("href").trim().toLowerCase()&&e.attr("href","/").parent("li").addClass("li-home")}),$("#main-menu .widget").addClass("show-menu")}),$("#main-menu-nav").clone().appendTo(".mobile-menu"),$(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".mobile-menu ul > li a").each(function(){var e=$(this).attr("href").trim();e.toLowerCase(),e.split("/")}),$(".slide-menu-toggle").on("click",function(){$("body").toggleClass("nav-active"),$(".overlay").fadeToggle(170)}),$(".mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))}),$(".show-search, .show-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()}),$(".hide-search, .hide-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()}),$(".Label a, a.b-label").attr("href",function(e,a){return a.replace(a,a+"?&max-results="+postPerPage)}),$(".back-top").each(function(){var e=$(this);$(window).on("scroll",function(){$(this).scrollTop()>=100?e.fadeIn(250):e.fadeOut(250)}),e.click(function(){$("html, body").animate({scrollTop:0},500)})}),$(".common-widget .widget-content").each(function(){var e=$(this),a=e.text().trim(),t=a.toLowerCase(),l=a.split("/");s(e,t,l[0],l[1])}),$(".related-ready").each(function(){var e=$(this);s(e,"related",3,e.find(".related-tag").data("label"))})
$.ajax({url:"/feeds/comments/summary",type:"get",data:{alt:"json","max-results":numComments},dataType:"jsonp",jsonpCallback:"loadComments"});
});
