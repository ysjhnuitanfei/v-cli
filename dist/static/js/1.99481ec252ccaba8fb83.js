webpackJsonp([1],{"3HIr":function(n,t,e){n.exports=e.p+"static/img/radio_button_1.e971a62.png"},"64Z5":function(n,t,e){t=n.exports=e("UTlt")(!1),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n/**\n* loading\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 0.15rem;\n  bottom: 0.1rem;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 0.06rem;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0.06rem;\n  height: 0.06rem;\n  border-radius: 0.03rem;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #04BE02;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 0.15rem;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 0.16rem;\n  padding: 0.2rem 0.5rem 0.12rem 0.13rem;\n  margin: 0;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 0.01rem 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n",""])},BDiG:function(n,t,e){"use strict";function i(n){b||e("Gfrq")}var r=e("3cXf"),o=e.n(r),a=e("AA3o"),s=e.n(a),h=e("xSur"),l=e.n(h),c=e("+Up5"),u=e.n(c),d=function(n){return Array.prototype.slice.call(n)},m=function(){function n(t){if(s()(this,n),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=u()(this._default,t),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return l()(n,[{key:"_auto",value:function(){var n=this;n.stop(),n._options.auto&&(n.timer=setTimeout(function(){n.next()},n._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var n=this;this.resizeHandler=function(){setTimeout(function(){n.updateItemWidth(),n._setOffset(),n._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var n=0;n<this.realCount;n++)this._position.push(n)}},{key:"_movePosition",value:function(n){var t=this;if(n>0){var e=t._position.splice(0,1);t._position.push(e[0])}else if(n<0){var i=t._position.pop();t._position.unshift(i)}}},{key:"_setOffset",value:function(){var n=this,t=n._position.indexOf(n._current);n._offset=[],d(n.$items).forEach(function(e,i){n._offset.push((i-t)*n._distance)})}},{key:"_setTransition",value:function(n){n=n||this._options.duration||"none";var t="none"===n?"none":n+"ms";d(this.$items).forEach(function(n,e){n.style.webkitTransition=t,n.style.transition=t})}},{key:"_setTransform",value:function(n){var t=this;n=n||0,d(t.$items).forEach(function(e,i){var r=t._offset[i]+n,o="translate3d("+r+"px, 0, 0)";"vertical"===t._options.direction&&(o="translate3d(0, "+r+"px, 0)"),e.style.webkitTransform=o,e.style.transform=o})}},{key:"_bind",value:function(){var n=this,t=this;t.touchstartHandler=function(n){t.stop(),t._start.x=n.changedTouches[0].pageX,t._start.y=n.changedTouches[0].pageY,t._setTransition("none")},t.touchmoveHandler=function(e){if(1!==t.count){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var i=t._move.x-t._start.x,r=t._move.y-t._start.y,o=r,a=Math.abs(i)>Math.abs(r);"horizontal"===t._options.direction&&a&&(o=i),n._options.loop||n._current!==n.count-1&&0!==n._current||(o/=3),(t._options.minMovingDistance&&Math.abs(o)>=t._options.minMovingDistance||!t._options.minMovingDistance)&&a&&t._setTransform(o),a&&e.preventDefault()}},t.touchendHandler=function(n){if(1!==t.count){t._end.x=n.changedTouches[0].pageX,t._end.y=n.changedTouches[0].pageY;var e=t._end.y-t._start.y;"horizontal"===t._options.direction&&(e=t._end.x-t._start.x),e=t.getDistance(e),0!==e&&t._options.minMovingDistance&&Math.abs(e)<t._options.minMovingDistance||(e>t._options.threshold?t.move(-1):e<-t._options.threshold?t.move(1):t.move(0),t._loopRender())}},t.transitionEndHandler=function(n){t._activate(t._current);var e=t._eventHandlers.swiped;e&&e.apply(t,[t._prev%t.count,t._current%t.count]),t._auto(),t._loopRender(),n.preventDefault()},t.$container.addEventListener("touchstart",t.touchstartHandler,!1),t.$container.addEventListener("touchmove",t.touchmoveHandler,!1),t.$container.addEventListener("touchend",t.touchendHandler,!1),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var n=this;n._loop()&&(0===n._offset[n._offset.length-1]?(n.$container.appendChild(n.$items[0]),n._loopEvent(1)):0===n._offset[0]&&(n.$container.insertBefore(n.$items[n.$items.length-1],n.$container.firstChild),n._loopEvent(-1)))}},{key:"_loopEvent",value:function(n){var t=this;t._itemDestoy(),t.$items=t.$container.querySelectorAll(t._options.item),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1),t._movePosition(n),t._setOffset(),t._setTransform()}},{key:"getDistance",value:function(n){return this._loop()?n:n>0&&0===this._current?0:n<0&&this._current===this.realCount-1?0:n}},{key:"_moveIndex",value:function(n){0!==n&&(this._prev=this._current,this._current+=this.realCount,this._current+=n,this._current%=this.realCount)}},{key:"_activate",value:function(n){var t=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(e,i){e.classList.remove(t),n===Number(e.dataset.index)&&e.classList.add(t)})}},{key:"go",value:function(n){var t=this;return t.stop(),n=n||0,n+=this.realCount,n%=this.realCount,n=this._position.indexOf(n)-this._position.indexOf(this._current),t._moveIndex(n),t._setOffset(),t._setTransition(),t._setTransform(),t._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(n){return this.go(this._current+n),this}},{key:"on",value:function(n,t){return this._eventHandlers[n]&&console.error("[swiper] event "+n+" is already register"),"function"!=typeof t&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[n]=t,this}},{key:"_itemDestoy",value:function(){var n=this;this.$items.length&&d(this.$items).forEach(function(t){t.removeEventListener("webkitTransitionEnd",n.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var n=this.$container.querySelector(this._options.item+"-clone");n&&this.$container.removeChild(n),n=this.$container.querySelector(this._options.item+"-clone"),n&&this.$container.removeChild(n)}}}]),n}(),v=m,p=e("St0H"),f=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var n=this;this.hasTwoLoopItem(),this.$nextTick(function(){n.list&&0===n.list.length||n.render(n.index),n.xheight=n.getHeight(),n.$emit("on-get-height",n.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(n){Object(p.a)(n.url,this.$router),this.$emit("on-click-list-item",JSON.parse(o()(n)))},buildBackgroundUrl:function(n){return n.fallbackImg?"url("+n.img+"), url("+n.fallbackImg+")":"url("+n.img+")"},render:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new v({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(t,e){n.current=e%n.length,n.index=e%n.length}),t>0&&this.swiper.go(t)},rerender:function(){var n=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){n.index=n.value||0,n.current=n.value||0,n.length=n.list.length||n.$children.length,n.destroy(),n.render(n.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var n=parseInt(this.height,10);return n?this.height:n?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(n){n?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(n){this.rerender()},current:function(n){this.index=n,this.$emit("on-index-change",n)},index:function(n){var t=this;n!==this.current&&this.$nextTick(function(){t.swiper&&t.swiper.go(n)}),this.$emit("input",n)},value:function(n){this.index=n}},beforeDestroy:function(){this.destroy()}}),g=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-slider"},[e("div",{staticClass:"vux-swiper",style:{height:n.xheight}},[n._t("default"),n._v(" "),n._l(n.list,function(t,i){return e("div",{staticClass:"vux-swiper-item",attrs:{"data-index":i},on:{click:function(e){n.clickListItem(t)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(t)}}),n._v(" "),n.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(t.title))]):n._e()])])}),n._v(" "),n._l(n.listTwoLoopItem,function(t,i){return n.listTwoLoopItem.length>0?e("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":i},on:{click:function(e){n.clickListItem(t)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(t)}}),n._v(" "),n.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(t.title))]):n._e()])]):n._e()})],2),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.showDots,expression:"showDots"}],class:[n.dotsClass,"vux-indicator","vux-indicator-"+n.dotsPosition]},n._l(n.length,function(t){return e("a",{attrs:{href:"javascript:"}},[e("i",{staticClass:"vux-icon-dot",class:{active:t-1===n.current}})])}))])},x=[];g._withStripped=!0;var _=e("18Nq"),b=!1,w=i,k=Object(_.a)(f,g,x,!1,w,null,null);k.options.__file="node_modules\\_vux@2.9.0@vux\\src\\components\\swiper\\swiper.vue";t.a=k.exports},BnYQ:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("gyMJ"),e("0xDb"),e("bFJ2"),e("nxAZ"),e("+Up5"),e("BDiG"),e("BGNQ"),e("UwQd");throw new Error('Cannot find module "../public/Comment/Index.vue"')},F72N:function(n,t,e){var i=e("UBjg");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var r=e("urRS").default;r("e0a40c98",i,!1,{})},Gfrq:function(n,t,e){var i=e("64Z5");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var r=e("urRS").default;r("75415ceb",i,!1,{})},NaL2:function(n,t,e){var i=e("jLFw");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var r=e("urRS").default;r("bdc59906",i,!1,{})},TFKM:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIklEQVRYR+2WQXLaQBBFf4sqFTvICYJPEHwDfAKTG5iNWlrFuYFzgjgrqdnIOUHICZKcIOQExjdgrSrUqXYNLjEoiTEwbDI7FUj9pqf//0M48aIT18fBAPI8H3U6HU2S5Mcum9obYDqdDlW1BDB0hZdEdJEkyfw5IHsDiMh3Ve2r6rjb7S6rqroFcBnH8dlkMln+C+IQAArgLTPPrFhZlv2qqhYAbpjZYP669gKwc4+i6Ftd12dZllnRx2VdAbBg5qsgAMy8sRERuQEwYubRUQGKorglojEzD5qFROQOwOCoAO6s7wF8Ymbb8dNygzlP0/T6aB0oimJGRKM4jgf+tIuIDeb7owxhnucDIiqJ6NwAfL07X/gJYK6qTRkuVPVDc1itO1sqsA8A6K1Wqwf7s/vgpWul/TYG8GBn32Y2Thltw2eK6PkmtQUgIkbdA/DZZCQiJq/XqvrLpKWqsyzLbMh2Xk6ePWY+X7/cBqB1XV9kWWZaNk1vPO9cdXM4rXtf4jh+tZ6boABr42r6RlAAETFZfjwZgDOuYdOgQnfAknPDoEIDbBlUMAAzsCiK7psKazUiX3aHkmGbAoICuIi+8pMz2BG48Or7ER0SYE5EMz+6gwCsz98S1A+wVgBVvVbVr5aGNoT2HEXRs67Zzayo67pvkQ3AHPAx3Pws2QIoisJa9cYA0jQdO/d699IQshQlors/XU72uhW/FKr53n+Ak3fgN1kRyjBH709BAAAAAElFTkSuQmCC"},TMTW:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABBUlEQVRYR+2UwRGCMBBFNwc4W4JWYA1WoCVICVyW4eYtQy4pQUvQDiyBEizBMzNMHBiZQQdkNyYDh3De7Hv52UXAzJ+YmQ9BICQQEnCSgFLqaIzZx3GcpGn65Ky2E4GiKEohxBYAyiiKdhyJvwSklOs8zx9a61VVVfe3xA0RD9QUrAWa2AHgDAAJIl46CQA4ZVl29SrQg3ecVoIK7dexExiAt/3qut40z8GVYAmMwbtn4MKberKADzhZwBecJOATPingG04RMAODZb1yQ0P6cwiVUt8CTuHcBJzDJwVs9pp7hvwf4Dam1nNngNr3ow4RRznLFrC6LvPQsmeAeRmr8pDA7Am8AK91ZCHBDr6rAAAAAElFTkSuQmCC"},UBjg:function(n,t,e){var i=e("L4zZ");t=n.exports=e("UTlt")(!1),t.push([n.i,"\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.tc {\n  text-align: center;\n}\n.vux-swiper {\n  height: 1.6rem !important;\n}\n.topic {\n  padding: 0 0.1rem;\n}\n.topic h1 {\n  font-size: 0.16rem;\n  font-weight: normal;\n  height: 0.35rem;\n  line-height: 0.4rem;\n  color: #333;\n}\n.topic p {\n  font-size: 0.12rem;\n  line-height: 0.2rem;\n  color: #666;\n  text-align: justify;\n}\n.vux-indicator.vux-indicator-right {\n  bottom: 0 !important;\n}\n.i-love-music {\n  width: 80%;\n  left: 8%;\n  margin-top: 0.2rem;\n  padding: 1% 2% !important;\n  border: solid 0.01rem #bebebe;\n}\n.i-love-music::before {\n  border-width: 0 !important;\n}\n.i-love-music .vux-label {\n  float: left;\n  height: 0.2rem;\n  line-height: 0.2rem;\n  font-size: 0.16rem;\n  color: #333;\n}\n.i-love-music img.song-head {\n  display: block;\n  margin-right: 0.1rem;\n  width: 0.5rem;\n  height: 0.5rem;\n}\n.i-love-music .vux-label-desc {\n  width: 100%;\n  float: left;\n  height: 0.2rem;\n  line-height: 0.2rem;\n  font-size: 0.12rem;\n  color: #999;\n}\n.i-right-con {\n  float: right;\n  height: 0.35rem;\n}\n.i-right-con img.play-btn {\n  width: 0.3rem;\n  height: 0.3rem;\n}\n.i-right-con img.love-btn {\n  width: 0.34rem;\n  height: 0.34rem;\n}\n.vote {\n  margin-top: 0.2rem;\n}\n.vote-list {\n  width: 2.2rem;\n  height: auto;\n  margin: auto;\n}\n.vote-list li {\n  box-sizing: border-box;\n  width: 100%;\n  float: left;\n  height: auto;\n  margin-top: 0.08rem;\n  padding: 0.02rem 0.1rem;\n  border-radius: 0.05rem;\n  border: solid 0.01rem #808992;\n}\n.vote-list li span {\n  float: left;\n  width: 1rem;\n  height: 0.3rem;\n  line-height: 0.3rem;\n  font-size: 0.14rem;\n  color: #333;\n}\n.vote-list li p {\n  float: left;\n  margin-left: 0.1rem;\n  width: 0.6rem;\n  height: 0.3rem;\n  line-height: 0.3rem;\n  text-align: right;\n  font-size: 0.14rem;\n}\n.check-vote-bg {\n  float: right;\n  width: 0.2rem;\n  height: 0.2rem;\n  margin-top: 0.06rem;\n  background: url("+i(e("a/B1"))+") no-repeat center center;\n  background-size: 100%;\n}\n.check-vote-bg.checks-vote-bg {\n  background: url("+i(e("3HIr"))+") no-repeat center center;\n  background-size: 100%;\n}\n.vote-list li img {\n  float: right;\n  width: 0.2rem;\n  height: 0.2rem;\n  margin-top: 0.06rem;\n}\n.comment {\n  margin-top: 0.4rem;\n  border-top: 0.01rem solid #efefef;\n}\n.comment li {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n}\n.com-l {\n  width: 0.7rem;\n  min-height: 0.8rem;\n  float: left;\n}\n.com-l .com-l-img {\n  float: right;\n  position: relative;\n  margin-right: 0.1rem;\n  margin-top: 0.1rem;\n  width: 0.4rem;\n  height: 0.4rem;\n}\n.com-l img.head-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.com-l img.sex-img {\n  width: 0.18rem;\n  height: 0.18rem;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n}\n.com-r {\n  margin-left: 0.7rem;\n  height: auto;\n  overflow: hidden;\n  min-height: 0.5rem;\n  border-bottom: 0.01rem solid #efefef;\n}\n.com-r .com-head {\n  width: 100%;\n  margin-top: 0.05rem;\n  height: 0.3rem;\n  line-height: 0.3rem;\n}\n.com-r .com-head .com-r-name {\n  float: left;\n  width: 70%;\n  font-size: 0.14rem;\n  color: #999;\n}\n.com-r .com-head .com-r-praise {\n  float: right;\n  font-size: 0.14rem;\n  font-style: normal;\n  padding: 0 0.2rem 0 0.25rem;\n  color: #999;\n  background: url("+i(e("TFKM"))+") no-repeat left center;\n  background-size: 0.2rem 0.2rem;\n}\n.com-con {\n  font-size: 0.14rem;\n  color: #333;\n  padding-right: 0.3rem;\n  text-align: justify;\n}\n.com-time {\n  width: 100%;\n  float: left;\n  line-height: 0.25rem;\n  font-size: 0.12rem;\n  color: #999;\n  font-style: normal;\n}\n.comment-input-content {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0.4rem;\n  background: #f5f5f5;\n  z-index: 111;\n  border-top: solid 0.01rem #ebebeb;\n}\n.comment-input-content input {\n  box-sizing: border-box;\n  float: left;\n  width: 68%;\n  margin-left: 5%;\n  margin-top: 0.05rem;\n  height: 0.3rem;\n  border-radius: 0.25rem;\n  padding: 0 0.15rem 0 0.35rem;\n  border: solid 0.01rem #808992;\n  outline: none;\n  font-size: 0.14rem;\n  background: #fff url("+i(e("TMTW"))+") no-repeat 0.05rem center;\n  background-size: 0.32rem 0.32rem;\n}\n.comment-input-content button {\n  float: right;\n  margin-top: 0.05rem;\n  margin-right: 5%;\n  width: 20%;\n  height: 0.3rem;\n  border: none;\n  background: #00a7f2;\n  line-height: 0.3rem;\n  color: #fff;\n  font-size: 0.14rem;\n  border-radius: 0.25rem;\n}\n.toast-vote .weui-toast__content {\n  font-size: 0.16rem !important;\n  padding: 0.05rem 0.1rem !important;\n}\n",""])},VZWR:function(n,t,e){n.exports=e.p+"static/img/play.bad8c3a.png"},"a/B1":function(n,t,e){n.exports=e.p+"static/img/radio_button_0.d3577ec.png"},jLFw:function(n,t,e){t=n.exports=e("UTlt")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n/**\n* loading\n*/\n.vux-header {\n  position: relative;\n  padding: 0.03rem 0;\n  box-sizing: border-box;\n  background-color: #35495e;\n}\n.vux-header .vux-header-title {\n  line-height: 0.4rem;\n  text-align: center;\n  font-size: 0.18rem;\n  font-weight: 400;\n  color: #fff;\n}\n.vux-header-title-area,\n.vux-header .vux-header-title {\n  margin: 0 0.88rem;\n  height: 0.4rem;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vux-header .vux-header-title > span {\n  display: inline-block;\n}\n.vux-header .vux-header-left,\n.vux-header .vux-header-right {\n  position: absolute;\n  top: 0.14rem;\n  display: block;\n  font-size: 0.14rem;\n  line-height: 0.21rem;\n  color: #ccc;\n}\n.vux-header .vux-header-left a,\n.vux-header .vux-header-left button,\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  float: left;\n  margin-right: 0.08rem;\n  color: #ccc;\n}\n.vux-header .vux-header-left a:active,\n.vux-header .vux-header-left button:active,\n.vux-header .vux-header-right a:active,\n.vux-header .vux-header-right button:active {\n  opacity: 0.5;\n}\n.vux-header .vux-header-left {\n  left: 0.18rem;\n}\n.vux-header .vux-header-left .vux-header-back {\n  padding-left: 0.16rem;\n}\n.vux-header .vux-header-left .left-arrow {\n  position: absolute;\n  width: 0.3rem;\n  height: 0.3rem;\n  top: -0.05rem;\n  left: -0.05rem;\n}\n.vux-header .vux-header-left .left-arrow:before {\n  content: "";\n  position: absolute;\n  width: 0.12rem;\n  height: 0.12rem;\n  border: 0.01rem solid #ccc;\n  border-width: 0.01rem 0 0 0.01rem;\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n  top: 0.08rem;\n  left: 0.07rem;\n}\n.vux-header .vux-header-right {\n  right: 0.15rem;\n}\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  margin-left: 0.08rem;\n  margin-right: 0;\n}\n.vux-header .vux-header-right .vux-header-more:after {\n  content: "\\2022   \\2022   \\2022   ";\n  font-size: 0.16rem;\n}\n.vux-header-fade-in-right-enter-active {\n  -webkit-animation: fadeinR .5s;\n          animation: fadeinR .5s;\n}\n.vux-header-fade-in-left-enter-active {\n  -webkit-animation: fadeinL .5s;\n          animation: fadeinL .5s;\n}\n@-webkit-keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(1.5rem);\n            transform: translateX(1.5rem);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(1.5rem);\n            transform: translateX(1.5rem);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@-webkit-keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-1.5rem);\n            transform: translateX(-1.5rem);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-1.5rem);\n            transform: translateX(-1.5rem);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n',""])},mk5J:function(n,t,e){n.exports=e.p+"static/img/love-no.be77777.png"},nxAZ:function(n,t,e){"use strict";function i(n){c||e("NaL2")}var r=e("+Up5"),o=e.n(r),a=(Object,String,String,Object,{name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return o()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}),s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-header"},[e("div",{staticClass:"vux-header-left"},[n._t("overwrite-left",[e("transition",{attrs:{name:n.transition}},[e("a",{directives:[{name:"show",rawName:"v-show",value:n._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&n._k(t.keyCode,"preventDefault",void 0,t.key,void 0))return null},n.onClickBack]}},[n._v(n._s(void 0===n._leftOptions.backText?"返回":n._leftOptions.backText))])]),n._v(" "),e("transition",{attrs:{name:n.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:n.onClickBack}})])]),n._v(" "),n._t("left")],2),n._v(" "),n.shouldOverWriteTitle?n._e():e("h1",{staticClass:"vux-header-title",on:{click:function(t){n.$emit("on-click-title")}}},[n._t("default",[e("transition",{attrs:{name:n.transition}},[e("span",{directives:[{name:"show",rawName:"v-show",value:n.title,expression:"title"}]},[n._v(n._s(n.title))])])])],2),n._v(" "),n.shouldOverWriteTitle?e("div",{staticClass:"vux-header-title-area"},[n._t("overwrite-title")],2):n._e(),n._v(" "),e("div",{staticClass:"vux-header-right"},[n.rightOptions.showMore?e("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&n._k(t.keyCode,"preventDefault",void 0,t.key,void 0))return null},function(t){n.$emit("on-click-more")}]}}):n._e(),n._v(" "),n._t("right")],2)])},h=[];s._withStripped=!0;var l=e("18Nq"),c=!1,u=i,d=Object(l.a)(a,s,h,!1,u,null,null);d.options.__file="node_modules\\_vux@2.9.0@vux\\src\\components\\x-header\\index.vue";t.a=d.exports}});