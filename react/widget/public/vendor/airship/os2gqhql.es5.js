/*! Built with http://stenciljs.com */
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}();airship.loadBundle("os2gqhql",["exports"],function(e){var t=window.airship.h,a=function(){function e(){this.minValue=0,this.maxValue=10,this.step=1,this.disabled=!1,this.draggable=!1,this.thumbs=[]}return e.prototype.validateValue=function(e){if(!this._isBetweenValidValues(e))throw new Error("RangeSlider: Value "+e+" has to be between minValue ("+this.minValue+") and maxValue ("+this.maxValue+")");this._updateThumbs()},e.prototype.validateRange=function(e){var t=this;if(2!==e.length)throw new Error("RangeSlider: Range "+e+" need two values at most");e.map(function(e){return t.validateValue(e)}),this._updateThumbs()},e.prototype.componentWillLoad=function(){this._validateValues(),this._updateThumbs()},e.prototype.render=function(){var e=this;if(!(this.thumbs.length<1)){var a={"as-range-slider":!0,"as-range-slider--disabled":this.disabled};return t("div",{class:a},t("div",{class:"as-range-slider__rail"},this.thumbs.map(function(t){return e._renderThumb(t)}),this._renderRangeBar()))}},e.prototype._updateThumbs=function(){this.thumbs=this._createThumbs()},e.prototype._renderThumb=function(e){var a=this;return t("as-range-slider-thumb",{value:e.value,valueMin:e.valueMin,valueMax:e.valueMax,percentage:e.percentage,disabled:this.disabled,formatValue:this.formatValue,onThumbMove:function(t){return a._onThumbMove(e,t.detail)},onThumbIncrease:function(){return a._onKeyboardThumbMove(e,1)},onThumbDecrease:function(){return a._onKeyboardThumbMove(e,-1)},onThumbChangeStart:function(){return a._emitChangeIn(a.changeStart)},onThumbChangeEnd:function(){return a._emitChangeIn(a.changeEnd)}})},e.prototype._renderRangeBar=function(){var e=this,a=this._getCurrentThumbPercentages(),n=a[0],r=a[1],s=this.draggable&&void 0!==this.range;return t("as-range-slider-bar",{rangeStartPercentage:n,rangeEndPercentage:r,draggable:s,disabled:this.disabled,stepPercentage:this._getStepPercentage(),onBarChangeStart:function(){return e._emitChangeIn(e.changeStart)},onBarChangeEnd:function(){return e._emitChangeIn(e.changeEnd)},onBarMove:function(t){return e._onBarMove(t)}})},e.prototype._getCurrentThumbPercentages=function(){return[this._sliderHasRange()?this.thumbs[0].percentage:0,this.thumbs[this.thumbs.length-1].percentage]},e.prototype._validateValues=function(){this.value?this.validateValue(this.value):this.range&&this.validateRange(this.range)},e.prototype._createThumbs=function(){var e=this;if(!this.range||!this.range.length)return[this._getThumbData(this.value)];var t=this.range.map(function(t){return e._getThumbData(t)});return this._clampThumbValues(t),t},e.prototype._getThumbData=function(e){return{percentage:this._isBetweenValidValues(e)?this._getPercentage(e):this._getPercentage(this.minValue),value:this._isBetweenValidValues(e)?e:this.minValue,valueMax:this.maxValue,valueMin:this.minValue}},e.prototype._isBetweenValidValues=function(e){return e>=this.minValue&&e<=this.maxValue},e.prototype._sliderHasRange=function(){return this.range&&2===this.range.length},e.prototype._onKeyboardThumbMove=function(e,t){var a=this._getPercentage(e.value+t*this.step);a<0||a>100||this._onThumbMove(e,a)},e.prototype._onThumbMove=function(e,t){var a=this.thumbs,n=a[0],r=a[1],s=n===e,i=r===e,o=this._getValueFromPercentage(t),u=this._getStepValue(o),l=this._getPercentage(u),h=this.minValue,c=this.maxValue;this._sliderHasRange()&&s&&(c=r.value-this.step)<u||this._sliderHasRange()&&i&&(h=n.value+this.step)>u||(e.value=u,e.valueMin=h,e.valueMax=c,e.percentage=l,this.thumbs=this.thumbs.slice(),this._emitChangeIn(this.change))},e.prototype._onBarMove=function(e){var t=this,a=e.detail.map(function(e){return t._getValueFromPercentage(e)}).map(function(e){return t._getStepValue(e)}).map(function(e){return{percentage:t._getPercentage(e),value:e}});this._clampThumbValues(a),this.thumbs=a.slice(),this._emitChangeIn(this.change)},e.prototype._emitChangeIn=function(e){var t=this.thumbs.map(function(e){return e.value});return e.emit(t)},e.prototype._getPercentage=function(e){return(e-this.minValue)/(this.maxValue-this.minValue)*100},e.prototype._getValueFromPercentage=function(e){return e*(this.maxValue-this.minValue)/100+this.minValue},e.prototype._getStepPercentage=function(){var e=this.maxValue-this.minValue;return 100*this.step/e},e.prototype._clampThumbValues=function(e){var t=e[0],a=e[1];t.valueMin=this.minValue,t.valueMax=Math.min(a.value-this.step,this.maxValue),a.valueMin=Math.max(this.minValue,t.value+this.step),a.valueMax=this.maxValue},e.prototype._getStepValue=function(e){return Math.round(e/this.step)*this.step},Object.defineProperty(e,"is",{get:function(){return"as-range-slider"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},draggable:{type:Boolean,attr:"draggable"},formatValue:{type:"Any",attr:"format-value"},maxValue:{type:Number,attr:"max-value"},minValue:{type:Number,attr:"min-value"},range:{type:"Any",attr:"range",watchCallbacks:["validateRange"]},step:{type:Number,attr:"step"},thumbs:{state:!0},value:{type:Number,attr:"value",watchCallbacks:["validateValue"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0},{name:"changeStart",method:"changeStart",bubbles:!0,cancelable:!0,composed:!0},{name:"changeEnd",method:"changeEnd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);as-range-slider{--slider--rail-color:var(--as-color-ui-03, #E2E6E3);--slider--range-color:var(--as-color-primary, #1785FB);display:block}as-range-slider .as-range-slider--disabled{pointer-events:none}as-range-slider .as-range-slider__rail{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;width:100%;height:12px}as-range-slider .as-range-slider__rail::before{content:' ';position:absolute;z-index:-1;top:50%;left:0;width:100%;height:2px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:var(--slider--rail-color,#e2e6e3);pointer-events:none}"},enumerable:!0,configurable:!0}),e}(),n=function(){function e(){}return e.prototype.handleMouseDown=function(e){var t=this,a=function(t){e.move(t),t.preventDefault(),t.stopPropagation()},n=function(r){t._handleRelease(r,{move:a,release:n},e),r.preventDefault(),r.stopPropagation()};document.addEventListener("mousemove",a),document.addEventListener("touchmove",a),document.addEventListener("mouseup",n),document.addEventListener("touchend",n),document.addEventListener("dragstart",this.preventAndStop)},e.prototype._handleRelease=function(e,t,a){document.removeEventListener("mousemove",t.move),document.removeEventListener("mouseup",t.release),a.move&&a.move(e),a.release&&a.release(e)},e.prototype.preventAndStop=function(e){e.preventDefault(),e.stopPropagation()},e}(),r=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return __extends(a,e),a.prototype.render=function(){var e={left:this.rangeStartPercentage+"%",width:this.rangeEndPercentage-this.rangeStartPercentage+"%"},a={"as-range-slider__range-bar":!0,"as-range-slider__range-bar--disabled":this.disabled,"as-range-slider__range-bar--draggable":this.draggable};return t("div",{class:a,style:e})},a.prototype.onMouseDown=function(t){var a=this;this.draggable&&(this.barChangeStart.emit(),this.railElement=document.querySelector(".as-range-slider__rail"),this.rangeBarElement=this.element.querySelector(".as-range-slider__range-bar"),this.previousMouseEvent=t,e.prototype.handleMouseDown.call(this,{move:function(e){return a.onMove(e)},release:function(){return a._onRelease()}}))},a.prototype.onMove=function(e){if(this.previousMouseEvent){this.setCursorTo("grabbing"),this.rangeBarElement&&this.rangeBarElement.classList&&this.rangeBarElement.classList.add("as-range-slider__range-bar--moving");var t=this._getRangeDifference(),a=this._getMovementDelta(e,this.previousMouseEvent),n=100*(this.rangeBarElement.offsetLeft+a)/this.railElement.offsetWidth,r=n+t;n<0&&(r=(n=0)+t),r>100&&(n=(r=100)-t),this._updateRangePercentages([n,r])&&(this.previousMouseEvent=e),this.barMove.emit([this.rangeStartPercentage,this.rangeEndPercentage])}else this.previousMouseEvent=e},a.prototype._updateRangePercentages=function(e){var t=e[0],a=e[1],n=t<this.rangeStartPercentage?-1:1,r=Math.abs(this.rangeStartPercentage-t),s=this.stepPercentage,i=this._getRangeDifference();return r>=s?(this.rangeStartPercentage+=n*r,this.rangeEndPercentage+=n*r,!0):a>100-s?(this.rangeStartPercentage=100-i,this.rangeEndPercentage=100,!1):t<0+s?(this.rangeStartPercentage=0,this.rangeEndPercentage=0+i,!1):void 0},a.prototype._onRelease=function(){this.setCursorTo(""),this.rangeBarElement&&this.rangeBarElement.classList&&this.rangeBarElement.classList.remove("as-range-slider__range-bar--moving"),this.barChangeEnd.emit()},a.prototype._getMovementDelta=function(e,t){return e.clientX-t.clientX},a.prototype._getRangeDifference=function(){return this.rangeEndPercentage-this.rangeStartPercentage},a.prototype.setCursorTo=function(e){document.body.style.cursor=e},Object.defineProperty(a,"is",{get:function(){return"as-range-slider-bar"},enumerable:!0,configurable:!0}),Object.defineProperty(a,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},draggable:{type:Boolean,attr:"draggable"},element:{elementRef:!0},rangeEndPercentage:{type:Number,attr:"range-end-percentage",mutable:!0},rangeStartPercentage:{type:Number,attr:"range-start-percentage",mutable:!0},stepPercentage:{type:Number,attr:"step-percentage"}}},enumerable:!0,configurable:!0}),Object.defineProperty(a,"events",{get:function(){return[{name:"barMove",method:"barMove",bubbles:!0,cancelable:!0,composed:!0},{name:"barChangeStart",method:"barChangeStart",bubbles:!0,cancelable:!0,composed:!0},{name:"barChangeEnd",method:"barChangeEnd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(a,"listeners",{get:function(){return[{name:"mousedown",method:"onMouseDown",passive:!0},{name:"touchstart",method:"onMouseDown",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(a,"style",{get:function(){return"\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);as-range-slider-bar{--slider--rail-color--disabled:#E2E6E3}as-range-slider-bar .as-range-slider__range-bar{position:absolute;z-index:1;top:50%;height:2px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:var(--slider--range-color,#1785fb)}as-range-slider-bar .as-range-slider__range-bar--disabled{background-color:var(--slider--rail-color--disabled,#e2e6e3)}as-range-slider-bar .as-range-slider__range-bar--draggable{cursor:-webkit-grab;cursor:grab}as-range-slider-bar .as-range-slider__range-bar--draggable::after{content:' ';position:absolute;top:-6px;left:0;width:calc(100% - 20px);height:12px;-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}as-range-slider-bar .as-range-slider__range-bar--moving{cursor:-webkit-grabbing;cursor:grabbing}"},enumerable:!0,configurable:!0}),a}(n),s=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return __extends(a,e),a.prototype.render=function(){var e={left:this.percentage+"%"},a={"as-range-slider__thumb":!0,"as-range-slider__thumb--disabled":this.disabled},n={"as-caption":!0,"as-font-medium":!0,"as-range-slider__value":!0,"as-range-slider__value--disabled":this.disabled};return t("div",{role:"slider",tabindex:this.disabled?"-1":"0","aria-valuetext":this._getDisplayValue(this.value),"aria-valuenow":this.value,"aria-valuemin":this.valueMin,"aria-valuemax":this.valueMax,class:a,style:e,"data-value":this.value},t("div",{class:"as-range-slider__thumb-handle"}),t("span",{class:n},this._getDisplayValue(this.value)))},a.prototype.onMouseDown=function(t){var a=this;this.thumbChangeStart.emit(),this.railElement=document.querySelector(".as-range-slider__rail");var n=t.target;n.classList.add("as-range-slider__thumb-handle--moving"),this.thumbValue=n.parentElement.querySelector(".as-range-slider__value"),this.thumbValue.classList.add("as-range-slider__value--moving"),e.prototype.handleMouseDown.call(this,{move:function(e){return a._onMove(e)},release:function(){return a._onRelease(n)}}),n.focus()},a.prototype.onKeyDown=function(e){if(!this.disabled){var t=!1;switch(e.keyCode){case 40:case 37:this.thumbDecrease.emit(),t=!0;break;case 38:case 39:this.thumbIncrease.emit(),t=!0}t&&(e.preventDefault(),e.stopPropagation())}},a.prototype._onMove=function(e){this.setCursorTo("grabbing");var t=100*(e.pageX-this.railElement.offsetLeft)/this.railElement.offsetWidth;t<0||t>100||this.thumbMove.emit(t)},a.prototype._onRelease=function(e){e.classList.remove("as-range-slider__thumb-handle--moving"),this.thumbValue.classList.remove("as-range-slider__value--moving"),this.setCursorTo(""),this.thumbChangeEnd.emit()},a.prototype._getDisplayValue=function(e){var t=Math.round(e);return this.formatValue&&this.formatValue(t)||t},a.prototype.setCursorTo=function(e){document.body.style.cursor=e},Object.defineProperty(a,"is",{get:function(){return"as-range-slider-thumb"},enumerable:!0,configurable:!0}),Object.defineProperty(a,"properties",{get:function(){return{disabled:{type:Boolean,attr:"disabled"},element:{elementRef:!0},formatValue:{type:"Any",attr:"format-value"},percentage:{type:Number,attr:"percentage"},value:{type:Number,attr:"value"},valueMax:{type:Number,attr:"value-max"},valueMin:{type:Number,attr:"value-min"}}},enumerable:!0,configurable:!0}),Object.defineProperty(a,"events",{get:function(){return[{name:"thumbMove",method:"thumbMove",bubbles:!0,cancelable:!0,composed:!0},{name:"thumbChangeStart",method:"thumbChangeStart",bubbles:!0,cancelable:!0,composed:!0},{name:"thumbChangeEnd",method:"thumbChangeEnd",bubbles:!0,cancelable:!0,composed:!0},{name:"thumbIncrease",method:"thumbIncrease",bubbles:!0,cancelable:!0,composed:!0},{name:"thumbDecrease",method:"thumbDecrease",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(a,"listeners",{get:function(){return[{name:"mousedown",method:"onMouseDown",passive:!0},{name:"touchstart",method:"onMouseDown",passive:!0},{name:"keydown",method:"onKeyDown"}]},enumerable:!0,configurable:!0}),Object.defineProperty(a,"style",{get:function(){return"\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);\@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);as-range-slider-thumb .as-range-slider__thumb{position:absolute;z-index:2;width:12px;height:12px;-webkit-transform:translate3d(-6px,0,0);transform:translate3d(-6px,0,0);-webkit-transition:opacity .2s ease,-webkit-transform .2s ease;transition:opacity .2s ease,-webkit-transform .2s ease;transition:transform .2s ease,opacity .2s ease;transition:transform .2s ease,opacity .2s ease,-webkit-transform .2s ease}as-range-slider-thumb .as-range-slider__value{position:absolute;bottom:-16px;left:50%;-webkit-transform:translate3d(-53%,0,0);transform:translate3d(-53%,0,0);-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;pointer-events:none}as-range-slider-thumb .as-range-slider__value--disabled{color:var(--as-color-type-03,#bababa)}as-range-slider-thumb .as-range-slider__thumb:hover .as-range-slider__value{-webkit-transform:translate3d(-53%,4px,0);transform:translate3d(-53%,4px,0)}as-range-slider-thumb .as-range-slider__thumb-handle{width:12px;height:12px;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;border:1px solid var(--as-color-primary,#1785fb);border-radius:50%;background:#fff;cursor:-webkit-grab;cursor:grab}as-range-slider-thumb .as-range-slider__thumb-handle::before{content:'';position:absolute;top:-15px;left:-15px;width:30px;height:30px}as-range-slider-thumb .as-range-slider__thumb-handle.as-range-slider__thumb-handle--moving,as-range-slider-thumb .as-range-slider__thumb-handle:hover{-webkit-transform:scale(1.33);transform:scale(1.33)}as-range-slider-thumb .as-range-slider__thumb-handle--moving{cursor:-webkit-grabbing;cursor:grabbing}as-range-slider-thumb .as-range-slider__thumb--disabled .as-range-slider__thumb-handle{border:1px solid var(--as-color-ui-03,#e2e6e3);background:var(--as-color-ui-02,#f5f5f5)}as-range-slider-thumb .as-range-slider__thumb--disabled .as-range-slider__thumb-handle:focus{background:var(--as-color-ui-02,#f5f5f5)}as-range-slider-thumb .as-range-slider__thumb:focus{outline:0}as-range-slider-thumb .as-range-slider__thumb:focus .as-range-slider__thumb-handle{background:var(--as-color-primary,#1785fb)}as-range-slider-thumb .as-range-slider__thumb+.as-range-slider__thumb:hover{-webkit-transform:translate3d(-6px,0,0) scale(1.33);transform:translate3d(-6px,0,0) scale(1.33)}as-range-slider-thumb .as-range-slider__thumb-handle--moving+.as-range-slider__value--moving{-webkit-transform:translate3d(-53%,4px,0);transform:translate3d(-53%,4px,0)}"},enumerable:!0,configurable:!0}),a}(n);e.AsRangeSlider=a,e.AsRangeSliderBar=r,e.AsRangeSliderThumb=s,Object.defineProperty(e,"__esModule",{value:!0})});