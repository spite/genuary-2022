(()=>{(function(){"use strict";"SVGPathSeg"in window||(window.SVGPathSeg=function(t,e,a){this.pathSegType=t,this.pathSegTypeAsLetter=e,this._owningPathSegList=a},SVGPathSeg.PATHSEG_UNKNOWN=0,SVGPathSeg.PATHSEG_CLOSEPATH=1,SVGPathSeg.PATHSEG_MOVETO_ABS=2,SVGPathSeg.PATHSEG_MOVETO_REL=3,SVGPathSeg.PATHSEG_LINETO_ABS=4,SVGPathSeg.PATHSEG_LINETO_REL=5,SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,SVGPathSeg.PATHSEG_ARC_ABS=10,SVGPathSeg.PATHSEG_ARC_REL=11,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(t){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CLOSEPATH,"z",t)},SVGPathSegClosePath.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},SVGPathSegClosePath.prototype.clone=function(){return new SVGPathSegClosePath(void 0)},window.SVGPathSegMovetoAbs=function(t,e,a){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_MOVETO_ABS,"M",t),this._x=e,this._y=a},SVGPathSegMovetoAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegMovetoAbs.prototype.clone=function(){return new SVGPathSegMovetoAbs(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(t,e,a){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_MOVETO_REL,"m",t),this._x=e,this._y=a},SVGPathSegMovetoRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegMovetoRel.prototype.clone=function(){return new SVGPathSegMovetoRel(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(t,e,a){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_ABS,"L",t),this._x=e,this._y=a},SVGPathSegLinetoAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegLinetoAbs.prototype.clone=function(){return new SVGPathSegLinetoAbs(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(t,e,a){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_REL,"l",t),this._x=e,this._y=a},SVGPathSegLinetoRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegLinetoRel.prototype.clone=function(){return new SVGPathSegLinetoRel(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(t,e,a,b,i,s,o){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",t),this._x=e,this._y=a,this._x1=b,this._y1=i,this._x2=s,this._y2=o},SVGPathSegCurvetoCubicAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(t,e,a,b,i,s,o){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",t),this._x=e,this._y=a,this._x1=b,this._y1=i,this._x2=s,this._y2=o},SVGPathSegCurvetoCubicRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(t,e,a,b,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",t),this._x=e,this._y=a,this._x1=b,this._y1=i},SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(t,e,a,b,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",t),this._x=e,this._y=a,this._x1=b,this._y1=i},SVGPathSegCurvetoQuadraticRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(t,e,a,b,i,s,o,c){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_ARC_ABS,"A",t),this._x=e,this._y=a,this._r1=b,this._r2=i,this._angle=s,this._largeArcFlag=o,this._sweepFlag=c},SVGPathSegArcAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},SVGPathSegArcAbs.prototype.clone=function(){return new SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(t,e,a,b,i,s,o,c){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_ARC_REL,"a",t),this._x=e,this._y=a,this._r1=b,this._r2=i,this._angle=s,this._largeArcFlag=o,this._sweepFlag=c},SVGPathSegArcRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},SVGPathSegArcRel.prototype.clone=function(){return new SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(t,e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",t),this._x=e},SVGPathSegLinetoHorizontalAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new SVGPathSegLinetoHorizontalAbs(void 0,this._x)},Object.defineProperty(SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(t,e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",t),this._x=e},SVGPathSegLinetoHorizontalRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new SVGPathSegLinetoHorizontalRel(void 0,this._x)},Object.defineProperty(SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(t,e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",t),this._y=e},SVGPathSegLinetoVerticalAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new SVGPathSegLinetoVerticalAbs(void 0,this._y)},Object.defineProperty(SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(t,e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",t),this._y=e},SVGPathSegLinetoVerticalRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new SVGPathSegLinetoVerticalRel(void 0,this._y)},Object.defineProperty(SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(t,e,a,b,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",t),this._x=e,this._y=a,this._x2=b,this._y2=i},SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(t,e,a,b,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",t),this._x=e,this._y=a,this._x2=b,this._y2=i},SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(t,e,a){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",t),this._x=e,this._y=a},SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(t,e,a){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",t),this._x=e,this._y=a},SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)},Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new SVGPathSegClosePath(void 0)},SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(t,e){return new SVGPathSegMovetoAbs(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegMovetoRel=function(t,e){return new SVGPathSegMovetoRel(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(t,e){return new SVGPathSegLinetoAbs(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegLinetoRel=function(t,e){return new SVGPathSegLinetoRel(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(t,e,a,b,i,s){return new SVGPathSegCurvetoCubicAbs(void 0,t,e,a,b,i,s)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(t,e,a,b,i,s){return new SVGPathSegCurvetoCubicRel(void 0,t,e,a,b,i,s)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(t,e,a,b){return new SVGPathSegCurvetoQuadraticAbs(void 0,t,e,a,b)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(t,e,a,b){return new SVGPathSegCurvetoQuadraticRel(void 0,t,e,a,b)},SVGPathElement.prototype.createSVGPathSegArcAbs=function(t,e,a,b,i,s,o){return new SVGPathSegArcAbs(void 0,t,e,a,b,i,s,o)},SVGPathElement.prototype.createSVGPathSegArcRel=function(t,e,a,b,i,s,o){return new SVGPathSegArcRel(void 0,t,e,a,b,i,s,o)},SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(t){return new SVGPathSegLinetoHorizontalAbs(void 0,t)},SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(t){return new SVGPathSegLinetoHorizontalRel(void 0,t)},SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(t){return new SVGPathSegLinetoVerticalAbs(void 0,t)},SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(t){return new SVGPathSegLinetoVerticalRel(void 0,t)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(t,e,a,b){return new SVGPathSegCurvetoCubicSmoothAbs(void 0,t,e,a,b)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(t,e,a,b){return new SVGPathSegCurvetoCubicSmoothRel(void 0,t,e,a,b)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(t,e){return new SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,e)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(t,e){return new SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,e)}),"SVGPathSegList"in window||(window.SVGPathSegList=function(t){this._pathElement=t,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},Object.defineProperty(SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},SVGPathSegList.prototype._updateListFromPathMutations=function(t){if(!!this._pathElement){var e=!1;t.forEach(function(a){a.attributeName=="d"&&(e=!0)}),e&&(this._list=this._parsePath(this._pathElement.getAttribute("d")))}},SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},SVGPathSegList.prototype.segmentChanged=function(t){this._writeListToPath()},SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach(function(t){t._owningPathSegList=null}),this._list=[],this._writeListToPath()},SVGPathSegList.prototype.initialize=function(t){return this._checkPathSynchronizedToList(),this._list=[t],t._owningPathSegList=this,this._writeListToPath(),t},SVGPathSegList.prototype._checkValidIndex=function(t){if(isNaN(t)||t<0||t>=this.numberOfItems)throw"INDEX_SIZE_ERR"},SVGPathSegList.prototype.getItem=function(t){return this._checkPathSynchronizedToList(),this._checkValidIndex(t),this._list[t]},SVGPathSegList.prototype.insertItemBefore=function(t,e){return this._checkPathSynchronizedToList(),e>this.numberOfItems&&(e=this.numberOfItems),t._owningPathSegList&&(t=t.clone()),this._list.splice(e,0,t),t._owningPathSegList=this,this._writeListToPath(),t},SVGPathSegList.prototype.replaceItem=function(t,e){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._checkValidIndex(e),this._list[e]=t,t._owningPathSegList=this,this._writeListToPath(),t},SVGPathSegList.prototype.removeItem=function(t){this._checkPathSynchronizedToList(),this._checkValidIndex(t);var e=this._list[t];return this._list.splice(t,1),this._writeListToPath(),e},SVGPathSegList.prototype.appendItem=function(t){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._list.push(t),t._owningPathSegList=this,this._writeListToPath(),t},SVGPathSegList._pathSegArrayAsString=function(t){var e="",a=!0;return t.forEach(function(b){a?(a=!1,e+=b._asPathString()):e+=" "+b._asPathString()}),e},SVGPathSegList.prototype._parsePath=function(t){if(!t||t.length==0)return[];var e=this,a=function(){this.pathSegList=[]};a.prototype.appendSegment=function(c){this.pathSegList.push(c)};var b=function(c){this._string=c,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()};b.prototype._isCurrentSpace=function(){var c=this._string[this._currentIndex];return c<=" "&&(c==" "||c==`
`||c=="	"||c=="\r"||c=="\f")},b.prototype._skipOptionalSpaces=function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex++;return this._currentIndex<this._endIndex},b.prototype._skipOptionalSpacesOrDelimiter=function(){return this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&this._string.charAt(this._currentIndex)!=","?!1:(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)==","&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},b.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},b.prototype.peekSegmentType=function(){var c=this._string[this._currentIndex];return this._pathSegTypeFromChar(c)},b.prototype._pathSegTypeFromChar=function(c){switch(c){case"Z":case"z":return SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return SVGPathSeg.PATHSEG_LINETO_REL;case"C":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return SVGPathSeg.PATHSEG_ARC_ABS;case"a":return SVGPathSeg.PATHSEG_ARC_REL;case"H":return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return SVGPathSeg.PATHSEG_UNKNOWN}},b.prototype._nextCommandHelper=function(c,d){return(c=="+"||c=="-"||c=="."||c>="0"&&c<="9")&&d!=SVGPathSeg.PATHSEG_CLOSEPATH?d==SVGPathSeg.PATHSEG_MOVETO_ABS?SVGPathSeg.PATHSEG_LINETO_ABS:d==SVGPathSeg.PATHSEG_MOVETO_REL?SVGPathSeg.PATHSEG_LINETO_REL:d:SVGPathSeg.PATHSEG_UNKNOWN},b.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0;var c=this.peekSegmentType();return c==SVGPathSeg.PATHSEG_MOVETO_ABS||c==SVGPathSeg.PATHSEG_MOVETO_REL},b.prototype._parseNumber=function(){var c=0,d=0,f=1,p=0,h=1,n=1,g=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="+"?this._currentIndex++:this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="-"&&(this._currentIndex++,h=-1),!(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")&&this._string.charAt(this._currentIndex)!=".")){for(var u=this._currentIndex;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)this._currentIndex++;if(this._currentIndex!=u)for(var m=this._currentIndex-1,v=1;m>=u;)d+=v*(this._string.charAt(m--)-"0"),v*=10;if(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="."){if(this._currentIndex++,this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)p+=(this._string.charAt(this._currentIndex++)-"0")*(f*=.1)}if(this._currentIndex!=g&&this._currentIndex+1<this._endIndex&&(this._string.charAt(this._currentIndex)=="e"||this._string.charAt(this._currentIndex)=="E")&&this._string.charAt(this._currentIndex+1)!="x"&&this._string.charAt(this._currentIndex+1)!="m"){if(this._currentIndex++,this._string.charAt(this._currentIndex)=="+"?this._currentIndex++:this._string.charAt(this._currentIndex)=="-"&&(this._currentIndex++,n=-1),this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)c*=10,c+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var r=d+p;if(r*=h,c&&(r*=Math.pow(10,n*c)),g!=this._currentIndex)return this._skipOptionalSpacesOrDelimiter(),r}},b.prototype._parseArcFlag=function(){if(!(this._currentIndex>=this._endIndex)){var c=!1,d=this._string.charAt(this._currentIndex++);if(d=="0")c=!1;else if(d=="1")c=!0;else return;return this._skipOptionalSpacesOrDelimiter(),c}},b.prototype.parseSegment=function(){var c=this._string[this._currentIndex],d=this._pathSegTypeFromChar(c);if(d==SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==SVGPathSeg.PATHSEG_UNKNOWN||(d=this._nextCommandHelper(c,this._previousCommand),d==SVGPathSeg.PATHSEG_UNKNOWN))return null}else this._currentIndex++;switch(this._previousCommand=d,d){case SVGPathSeg.PATHSEG_MOVETO_REL:return new SVGPathSegMovetoRel(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_MOVETO_ABS:return new SVGPathSegMovetoAbs(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_REL:return new SVGPathSegLinetoRel(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_ABS:return new SVGPathSegLinetoAbs(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new SVGPathSegLinetoHorizontalRel(e,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new SVGPathSegLinetoHorizontalAbs(e,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new SVGPathSegLinetoVerticalRel(e,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new SVGPathSegLinetoVerticalAbs(e,this._parseNumber());case SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new SVGPathSegClosePath(e);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var f={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicRel(e,f.x,f.y,f.x1,f.y1,f.x2,f.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:var f={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicAbs(e,f.x,f.y,f.x1,f.y1,f.x2,f.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:var f={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicSmoothRel(e,f.x,f.y,f.x2,f.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:var f={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicSmoothAbs(e,f.x,f.y,f.x2,f.y2);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:var f={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoQuadraticRel(e,f.x,f.y,f.x1,f.y1);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:var f={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoQuadraticAbs(e,f.x,f.y,f.x1,f.y1);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new SVGPathSegCurvetoQuadraticSmoothRel(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new SVGPathSegCurvetoQuadraticSmoothAbs(e,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_ARC_REL:var f={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegArcRel(e,f.x,f.y,f.x1,f.y1,f.arcAngle,f.arcLarge,f.arcSweep);case SVGPathSeg.PATHSEG_ARC_ABS:var f={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegArcAbs(e,f.x,f.y,f.x1,f.y1,f.arcAngle,f.arcLarge,f.arcSweep);default:throw"Unknown path seg type."}};var i=new a,s=new b(t);if(!s.initialCommandIsMoveTo())return[];for(;s.hasMoreData();){var o=s.parseSegment();if(!o)return[];i.appendSegment(o)}return i.pathSegList})})();var i0="135dev",Lb={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pb={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a6=0,ao=1,b6=2;var bo=1,t6=2,$t=3,Qt=0,ta=1,$b=2,to=1;var gb=0,ei=1,ai=2,io=3,so=4,i6=5,Qb=100,s6=101,o6=102,oo=103,co=104,c6=200,d6=201,f6=202,p6=203,fo=204,po=205,h6=206,n6=207,g6=208,r6=209,l6=210,u6=0,m6=1,v6=2,s0=3,j6=4,y6=5,K6=6,V6=7,Fi=0,z6=1,G6=2,Cb=0,k6=1,_6=2,x6=3,S6=4,w6=5,ho=300,bi=301,ti=302,o0=303,c0=304,Ii=306,d0=307,f0=1e3,oa=1001,p0=1002,ca=1003,no=1004;var go=1005;var ra=1006,M6=1007;var Di=1008;var La=1009,E6=1010,T6=1011,Oi=1012,A6=1013,Ni=1014,Ba=1015,et=1016,L6=1017,P6=1018,C6=1019,ii=1020,R6=1021,at=1022,ba=1023,H6=1024,F6=1025,I6=ba,bt=1026,si=1027,D6=1028,O6=1029,N6=1030,B6=1031,U6=1032,W6=1033,ro=33776,lo=33777,uo=33778,mo=33779,vo=35840,jo=35841,yo=35842,Ko=35843,q6=36196,Vo=37492,zo=37496,X6=37808,Y6=37809,J6=37810,Z6=37811,$6=37812,Q6=37813,ef=37814,af=37815,bf=37816,tf=37817,sf=37818,of=37819,cf=37820,df=37821,ff=36492,pf=37840,hf=37841,nf=37842,gf=37843,rf=37844,lf=37845,uf=37846,mf=37847,vf=37848,jf=37849,yf=37850,Kf=37851,Vf=37852,zf=37853,Gf=2200,kf=2201,_f=2202,Bi=2300,Ui=2301,h0=2302,tt=2400,it=2401,Wi=2402,n0=2500,Go=2501,xf=0;var ja=3e3,ab=3001,g0=3007,r0=3002,Sf=3003,ko=3004,_o=3005,xo=3006,wf=3200,Mf=3201,st=0,Ef=1;var l0=7680;var Tf=519,oi=35044,qi=35048;var ot="300 es",Ua=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let b=this._listeners;b[e]===void 0&&(b[e]=[]),b[e].indexOf(a)===-1&&b[e].push(a)}hasEventListener(e,a){if(this._listeners===void 0)return!1;let b=this._listeners;return b[e]!==void 0&&b[e].indexOf(a)!==-1}removeEventListener(e,a){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let b=this._listeners[e.type];if(b!==void 0){e.target=this;let i=b.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}};var u0=Math.PI/180,m0=180/Math.PI,la=[];for(let t=0;t<256;t++)la[t]=(t<16?"0":"")+t.toString(16);var Af=typeof crypto!="undefined"&&"randomUUID"in crypto;function Pa(){if(Af)return crypto.randomUUID().toUpperCase();let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,b=Math.random()*4294967295|0;return(la[t&255]+la[t>>8&255]+la[t>>16&255]+la[t>>24&255]+"-"+la[e&255]+la[e>>8&255]+"-"+la[e>>16&15|64]+la[e>>24&255]+"-"+la[a&63|128]+la[a>>8&255]+"-"+la[a>>16&255]+la[a>>24&255]+la[b&255]+la[b>>8&255]+la[b>>16&255]+la[b>>24&255]).toUpperCase()}function Va(t,e,a){return Math.max(e,Math.min(a,t))}function Lf(t,e){return(t%e+e)%e}function v0(t,e,a){return(1-a)*t+a*e}function So(t){return(t&t-1)==0&&t!==0}function Pf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}var X=class{constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,a){return a!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,a)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e,a){return a!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,a)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,b=this.y,i=e.elements;return this.x=i[0]*a+i[3]*b+i[6],this.y=i[1]*a+i[4]*b+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this}clampLength(e,a){let b=this.length();return this.divideScalar(b||1).multiplyScalar(Math.max(e,Math.min(a,b)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,b=this.y-e.y;return a*a+b*b}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,b){return this.x=e.x+(a.x-e.x)*b,this.y=e.y+(a.y-e.y)*b,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a,b){return b!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let b=Math.cos(a),i=Math.sin(a),s=this.x-e.x,o=this.y-e.y;return this.x=s*b-o*i+e.x,this.y=s*i+o*b+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};X.prototype.isVector2=!0;var da=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,a,b,i,s,o,c,d,f){let p=this.elements;return p[0]=e,p[1]=i,p[2]=c,p[3]=a,p[4]=s,p[5]=d,p[6]=b,p[7]=o,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,b=e.elements;return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[8]=b[8],this}extractBasis(e,a,b){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),b.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let b=e.elements,i=a.elements,s=this.elements,o=b[0],c=b[3],d=b[6],f=b[1],p=b[4],h=b[7],n=b[2],g=b[5],u=b[8],m=i[0],v=i[3],r=i[6],l=i[1],k=i[4],j=i[7],z=i[2],w=i[5],y=i[8];return s[0]=o*m+c*l+d*z,s[3]=o*v+c*k+d*w,s[6]=o*r+c*j+d*y,s[1]=f*m+p*l+h*z,s[4]=f*v+p*k+h*w,s[7]=f*r+p*j+h*y,s[2]=n*m+g*l+u*z,s[5]=n*v+g*k+u*w,s[8]=n*r+g*j+u*y,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],b=e[1],i=e[2],s=e[3],o=e[4],c=e[5],d=e[6],f=e[7],p=e[8];return a*o*p-a*c*f-b*s*p+b*c*d+i*s*f-i*o*d}invert(){let e=this.elements,a=e[0],b=e[1],i=e[2],s=e[3],o=e[4],c=e[5],d=e[6],f=e[7],p=e[8],h=p*o-c*f,n=c*d-p*s,g=f*s-o*d,u=a*h+b*n+i*g;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/u;return e[0]=h*m,e[1]=(i*f-p*b)*m,e[2]=(c*b-i*o)*m,e[3]=n*m,e[4]=(p*a-i*d)*m,e[5]=(i*s-c*a)*m,e[6]=g*m,e[7]=(b*d-f*a)*m,e[8]=(o*a-b*s)*m,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,b,i,s,o,c){let d=Math.cos(s),f=Math.sin(s);return this.set(b*d,b*f,-b*(d*o+f*c)+o+e,-i*f,i*d,-i*(-f*o+d*c)+c+a,0,0,1),this}scale(e,a){let b=this.elements;return b[0]*=e,b[3]*=e,b[6]*=e,b[1]*=a,b[4]*=a,b[7]*=a,this}rotate(e){let a=Math.cos(e),b=Math.sin(e),i=this.elements,s=i[0],o=i[3],c=i[6],d=i[1],f=i[4],p=i[7];return i[0]=a*s+b*d,i[3]=a*o+b*f,i[6]=a*c+b*p,i[1]=-b*s+a*d,i[4]=-b*o+a*f,i[7]=-b*c+a*p,this}translate(e,a){let b=this.elements;return b[0]+=e*b[2],b[3]+=e*b[5],b[6]+=e*b[8],b[1]+=a*b[2],b[4]+=a*b[5],b[7]+=a*b[8],this}equals(e){let a=this.elements,b=e.elements;for(let i=0;i<9;i++)if(a[i]!==b[i])return!1;return!0}fromArray(e,a=0){for(let b=0;b<9;b++)this.elements[b]=e[b+a];return this}toArray(e=[],a=0){let b=this.elements;return e[a]=b[0],e[a+1]=b[1],e[a+2]=b[2],e[a+3]=b[3],e[a+4]=b[4],e[a+5]=b[5],e[a+6]=b[6],e[a+7]=b[7],e[a+8]=b[8],e}clone(){return new this.constructor().fromArray(this.elements)}};da.prototype.isMatrix3=!0;function wo(t){if(t.length===0)return-Infinity;let e=t[0];for(let a=1,b=t.length;a<b;++a)t[a]>e&&(e=t[a]);return e}var I9={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xi(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Mo(t,e=0){let a=3735928559^e,b=1103547991^e;for(let i=0,s;i<t.length;i++)s=t.charCodeAt(i),a=Math.imul(a^s,2654435761),b=Math.imul(b^s,1597334677);return a=Math.imul(a^a>>>16,2246822507)^Math.imul(b^b>>>13,3266489909),b=Math.imul(b^b>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),4294967296*(2097151&b)+(a>>>0)}var ct,Rb=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ct===void 0&&(ct=Xi("canvas")),ct.width=e.width,ct.height=e.height;let b=ct.getContext("2d");e instanceof ImageData?b.putImageData(e,0,0):b.drawImage(e,0,0,e.width,e.height),a=ct}return a.width>2048||a.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),a.toDataURL("image/jpeg",.6)):a.toDataURL("image/png")}},Cf=0,fa=class extends Ua{constructor(e=fa.DEFAULT_IMAGE,a=fa.DEFAULT_MAPPING,b=oa,i=oa,s=ra,o=Di,c=ba,d=La,f=1,p=ja){super();Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Pa(),this.name="",this.image=e,this.mipmaps=[],this.mapping=a,this.wrapS=b,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new da,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let b={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Pa()),!a&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?s.push(j0(i[o].image)):s.push(j0(i[o]))}else s=j0(i);e.images[i.uuid]={uuid:i.uuid,url:s}}b.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(b.userData=this.userData),a||(e.textures[this.uuid]=b),b}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case f0:e.x=e.x-Math.floor(e.x);break;case oa:e.x=e.x<0?0:1;break;case p0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case f0:e.y=e.y-Math.floor(e.y);break;case oa:e.y=e.y<0?0:1;break;case p0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};fa.DEFAULT_IMAGE=void 0;fa.DEFAULT_MAPPING=ho;fa.prototype.isTexture=!0;function j0(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?Rb.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Oe=class{constructor(e=0,a=0,b=0,i=1){this.x=e,this.y=a,this.z=b,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,b,i){return this.x=e,this.y=a,this.z=b,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,a){return a!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,a)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e,a){return a!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,a)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,b=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*a+o[4]*b+o[8]*i+o[12]*s,this.y=o[1]*a+o[5]*b+o[9]*i+o[13]*s,this.z=o[2]*a+o[6]*b+o[10]*i+o[14]*s,this.w=o[3]*a+o[7]*b+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,b,i,s,o=.01,c=.1,d=e.elements,f=d[0],p=d[4],h=d[8],n=d[1],g=d[5],u=d[9],m=d[2],v=d[6],r=d[10];if(Math.abs(p-n)<o&&Math.abs(h-m)<o&&Math.abs(u-v)<o){if(Math.abs(p+n)<c&&Math.abs(h+m)<c&&Math.abs(u+v)<c&&Math.abs(f+g+r-3)<c)return this.set(1,0,0,0),this;a=Math.PI;let k=(f+1)/2,j=(g+1)/2,z=(r+1)/2,w=(p+n)/4,y=(h+m)/4,L=(u+v)/4;return k>j&&k>z?k<o?(b=0,i=.707106781,s=.707106781):(b=Math.sqrt(k),i=w/b,s=y/b):j>z?j<o?(b=.707106781,i=0,s=.707106781):(i=Math.sqrt(j),b=w/i,s=L/i):z<o?(b=.707106781,i=.707106781,s=0):(s=Math.sqrt(z),b=y/s,i=L/s),this.set(b,i,s,a),this}let l=Math.sqrt((v-u)*(v-u)+(h-m)*(h-m)+(n-p)*(n-p));return Math.abs(l)<.001&&(l=1),this.x=(v-u)/l,this.y=(h-m)/l,this.z=(n-p)/l,this.w=Math.acos((f+g+r-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this.w=Math.max(e.w,Math.min(a.w,this.w)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this.w=Math.max(e,Math.min(a,this.w)),this}clampLength(e,a){let b=this.length();return this.divideScalar(b||1).multiplyScalar(Math.max(e,Math.min(a,b)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,b){return this.x=e.x+(a.x-e.x)*b,this.y=e.y+(a.y-e.y)*b,this.z=e.z+(a.z-e.z)*b,this.w=e.w+(a.w-e.w)*b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a,b){return b!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oe.prototype.isVector4=!0;var ka=class extends Ua{constructor(e,a,b={}){super();this.width=e,this.height=a,this.depth=1,this.scissor=new Oe(0,0,e,a),this.scissorTest=!1,this.viewport=new Oe(0,0,e,a),this.texture=new fa(void 0,b.mapping,b.wrapS,b.wrapT,b.magFilter,b.minFilter,b.format,b.type,b.anisotropy,b.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:a,depth:1},this.texture.generateMipmaps=b.generateMipmaps!==void 0?b.generateMipmaps:!1,this.texture.internalFormat=b.internalFormat!==void 0?b.internalFormat:null,this.texture.minFilter=b.minFilter!==void 0?b.minFilter:ra,this.depthBuffer=b.depthBuffer!==void 0?b.depthBuffer:!0,this.stencilBuffer=b.stencilBuffer!==void 0?b.stencilBuffer:!1,this.depthTexture=b.depthTexture!==void 0?b.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,a,b=1){(this.width!==e||this.height!==a||this.depth!==b)&&(this.width=e,this.height=a,this.depth=b,this.texture.image.width=e,this.texture.image.height=a,this.texture.image.depth=b,this.dispose()),this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};ka.prototype.isWebGLRenderTarget=!0;var Eo=class extends ka{constructor(e,a,b){super(e,a);let i=this.texture;this.texture=[];for(let s=0;s<b;s++)this.texture[s]=i.clone()}setSize(e,a,b=1){if(this.width!==e||this.height!==a||this.depth!==b){this.width=e,this.height=a,this.depth=b;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=a,this.texture[i].image.depth=b;this.dispose()}return this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let a=0,b=e.texture.length;a<b;a++)this.texture[a]=e.texture[a].clone();return this}};Eo.prototype.isWebGLMultipleRenderTargets=!0;var ci=class extends ka{constructor(e,a,b){super(e,a,b);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};ci.prototype.isWebGLMultisampleRenderTarget=!0;var pa=class{constructor(e=0,a=0,b=0,i=1){this._x=e,this._y=a,this._z=b,this._w=i}static slerp(e,a,b,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),b.slerpQuaternions(e,a,i)}static slerpFlat(e,a,b,i,s,o,c){let d=b[i+0],f=b[i+1],p=b[i+2],h=b[i+3],n=s[o+0],g=s[o+1],u=s[o+2],m=s[o+3];if(c===0){e[a+0]=d,e[a+1]=f,e[a+2]=p,e[a+3]=h;return}if(c===1){e[a+0]=n,e[a+1]=g,e[a+2]=u,e[a+3]=m;return}if(h!==m||d!==n||f!==g||p!==u){let v=1-c,r=d*n+f*g+p*u+h*m,l=r>=0?1:-1,k=1-r*r;if(k>Number.EPSILON){let z=Math.sqrt(k),w=Math.atan2(z,r*l);v=Math.sin(v*w)/z,c=Math.sin(c*w)/z}let j=c*l;if(d=d*v+n*j,f=f*v+g*j,p=p*v+u*j,h=h*v+m*j,v===1-c){let z=1/Math.sqrt(d*d+f*f+p*p+h*h);d*=z,f*=z,p*=z,h*=z}}e[a]=d,e[a+1]=f,e[a+2]=p,e[a+3]=h}static multiplyQuaternionsFlat(e,a,b,i,s,o){let c=b[i],d=b[i+1],f=b[i+2],p=b[i+3],h=s[o],n=s[o+1],g=s[o+2],u=s[o+3];return e[a]=c*u+p*h+d*g-f*n,e[a+1]=d*u+p*n+f*h-c*g,e[a+2]=f*u+p*g+c*n-d*h,e[a+3]=p*u-c*h-d*n-f*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,b,i){return this._x=e,this._y=a,this._z=b,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let b=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,d=Math.sin,f=c(b/2),p=c(i/2),h=c(s/2),n=d(b/2),g=d(i/2),u=d(s/2);switch(o){case"XYZ":this._x=n*p*h+f*g*u,this._y=f*g*h-n*p*u,this._z=f*p*u+n*g*h,this._w=f*p*h-n*g*u;break;case"YXZ":this._x=n*p*h+f*g*u,this._y=f*g*h-n*p*u,this._z=f*p*u-n*g*h,this._w=f*p*h+n*g*u;break;case"ZXY":this._x=n*p*h-f*g*u,this._y=f*g*h+n*p*u,this._z=f*p*u+n*g*h,this._w=f*p*h-n*g*u;break;case"ZYX":this._x=n*p*h-f*g*u,this._y=f*g*h+n*p*u,this._z=f*p*u-n*g*h,this._w=f*p*h+n*g*u;break;case"YZX":this._x=n*p*h+f*g*u,this._y=f*g*h+n*p*u,this._z=f*p*u-n*g*h,this._w=f*p*h-n*g*u;break;case"XZY":this._x=n*p*h-f*g*u,this._y=f*g*h-n*p*u,this._z=f*p*u+n*g*h,this._w=f*p*h+n*g*u;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return a!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let b=a/2,i=Math.sin(b);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(b),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,b=a[0],i=a[4],s=a[8],o=a[1],c=a[5],d=a[9],f=a[2],p=a[6],h=a[10],n=b+c+h;if(n>0){let g=.5/Math.sqrt(n+1);this._w=.25/g,this._x=(p-d)*g,this._y=(s-f)*g,this._z=(o-i)*g}else if(b>c&&b>h){let g=2*Math.sqrt(1+b-c-h);this._w=(p-d)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+f)/g}else if(c>h){let g=2*Math.sqrt(1+c-b-h);this._w=(s-f)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(d+p)/g}else{let g=2*Math.sqrt(1+h-b-c);this._w=(o-i)/g,this._x=(s+f)/g,this._y=(d+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let b=e.dot(a)+1;return b<Number.EPSILON?(b=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=b):(this._x=0,this._y=-e.z,this._z=e.y,this._w=b)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=b),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Va(this.dot(e),-1,1)))}rotateTowards(e,a){let b=this.angleTo(e);if(b===0)return this;let i=Math.min(1,a/b);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,a){return a!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,a)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let b=e._x,i=e._y,s=e._z,o=e._w,c=a._x,d=a._y,f=a._z,p=a._w;return this._x=b*p+o*c+i*f-s*d,this._y=i*p+o*d+s*c-b*f,this._z=s*p+o*f+b*d-i*c,this._w=o*p-b*c-i*d-s*f,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);let b=this._x,i=this._y,s=this._z,o=this._w,c=o*e._w+b*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=b,this._y=i,this._z=s,this;let d=1-c*c;if(d<=Number.EPSILON){let g=1-a;return this._w=g*o+a*this._w,this._x=g*b+a*this._x,this._y=g*i+a*this._y,this._z=g*s+a*this._z,this.normalize(),this._onChangeCallback(),this}let f=Math.sqrt(d),p=Math.atan2(f,c),h=Math.sin((1-a)*p)/f,n=Math.sin(a*p)/f;return this._w=o*h+this._w*n,this._x=b*h+this._x*n,this._y=i*h+this._y*n,this._z=s*h+this._z*n,this._onChangeCallback(),this}slerpQuaternions(e,a,b){this.copy(e).slerp(a,b)}random(){let e=Math.random(),a=Math.sqrt(1-e),b=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(a*Math.cos(i),b*Math.sin(s),b*Math.cos(s),a*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};pa.prototype.isQuaternion=!0;var V=class{constructor(e=0,a=0,b=0){this.x=e,this.y=a,this.z=b}set(e,a,b){return b===void 0&&(b=this.z),this.x=e,this.y=a,this.z=b,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,a){return a!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,a)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e,a){return a!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,a)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e,a){return a!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,a)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(To.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,b=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*b+s[6]*i,this.y=s[1]*a+s[4]*b+s[7]*i,this.z=s[2]*a+s[5]*b+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,b=this.y,i=this.z,s=e.elements,o=1/(s[3]*a+s[7]*b+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*b+s[8]*i+s[12])*o,this.y=(s[1]*a+s[5]*b+s[9]*i+s[13])*o,this.z=(s[2]*a+s[6]*b+s[10]*i+s[14])*o,this}applyQuaternion(e){let a=this.x,b=this.y,i=this.z,s=e.x,o=e.y,c=e.z,d=e.w,f=d*a+o*i-c*b,p=d*b+c*a-s*i,h=d*i+s*b-o*a,n=-s*a-o*b-c*i;return this.x=f*d+n*-s+p*-c-h*-o,this.y=p*d+n*-o+h*-s-f*-c,this.z=h*d+n*-c+f*-o-p*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,b=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*b+s[8]*i,this.y=s[1]*a+s[5]*b+s[9]*i,this.z=s[2]*a+s[6]*b+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=Math.max(e.x,Math.min(a.x,this.x)),this.y=Math.max(e.y,Math.min(a.y,this.y)),this.z=Math.max(e.z,Math.min(a.z,this.z)),this}clampScalar(e,a){return this.x=Math.max(e,Math.min(a,this.x)),this.y=Math.max(e,Math.min(a,this.y)),this.z=Math.max(e,Math.min(a,this.z)),this}clampLength(e,a){let b=this.length();return this.divideScalar(b||1).multiplyScalar(Math.max(e,Math.min(a,b)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,b){return this.x=e.x+(a.x-e.x)*b,this.y=e.y+(a.y-e.y)*b,this.z=e.z+(a.z-e.z)*b,this}cross(e,a){return a!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,a)):this.crossVectors(this,e)}crossVectors(e,a){let b=e.x,i=e.y,s=e.z,o=a.x,c=a.y,d=a.z;return this.x=i*d-s*c,this.y=s*o-b*d,this.z=b*c-i*o,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let b=e.dot(this)/a;return this.copy(e).multiplyScalar(b)}projectOnPlane(e){return y0.copy(this).projectOnVector(e),this.sub(y0)}reflect(e){return this.sub(y0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let b=this.dot(e)/a;return Math.acos(Va(b,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,b=this.y-e.y,i=this.z-e.z;return a*a+b*b+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,b){let i=Math.sin(a)*e;return this.x=i*Math.sin(b),this.y=Math.cos(a)*e,this.z=i*Math.cos(b),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,b){return this.x=e*Math.sin(a),this.y=b,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),b=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=b,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a,b){return b!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,a=Math.random()*Math.PI*2,b=Math.sqrt(1-e**2);return this.x=b*Math.cos(a),this.y=b*Math.sin(a),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};V.prototype.isVector3=!0;var y0=new V,To=new pa,Ma=class{constructor(e=new V(Infinity,Infinity,Infinity),a=new V(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){let a=Infinity,b=Infinity,i=Infinity,s=-Infinity,o=-Infinity,c=-Infinity;for(let d=0,f=e.length;d<f;d+=3){let p=e[d],h=e[d+1],n=e[d+2];p<a&&(a=p),h<b&&(b=h),n<i&&(i=n),p>s&&(s=p),h>o&&(o=h),n>c&&(c=n)}return this.min.set(a,b,i),this.max.set(s,o,c),this}setFromBufferAttribute(e){let a=Infinity,b=Infinity,i=Infinity,s=-Infinity,o=-Infinity,c=-Infinity;for(let d=0,f=e.count;d<f;d++){let p=e.getX(d),h=e.getY(d),n=e.getZ(d);p<a&&(a=p),h<b&&(b=h),n<i&&(i=n),p>s&&(s=p),h>o&&(o=h),n>c&&(c=n)}return this.min.set(a,b,i),this.max.set(s,o,c),this}setFromPoints(e){this.makeEmpty();for(let a=0,b=e.length;a<b;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let b=di.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(b),this.max.copy(e).add(b),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let a=e.geometry;a!==void 0&&(a.boundingBox===null&&a.computeBoundingBox(),K0.copy(a.boundingBox),K0.applyMatrix4(e.matrixWorld),this.union(K0));let b=e.children;for(let i=0,s=b.length;i<s;i++)this.expandByObject(b[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,b;return e.normal.x>0?(a=e.normal.x*this.min.x,b=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,b=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,b+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,b+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,b+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,b+=e.normal.z*this.min.z),a<=-e.constant&&b>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),Yi.subVectors(this.max,fi),dt.subVectors(e.a,fi),ft.subVectors(e.b,fi),pt.subVectors(e.c,fi),rb.subVectors(ft,dt),lb.subVectors(pt,ft),Hb.subVectors(dt,pt);let a=[0,-rb.z,rb.y,0,-lb.z,lb.y,0,-Hb.z,Hb.y,rb.z,0,-rb.x,lb.z,0,-lb.x,Hb.z,0,-Hb.x,-rb.y,rb.x,0,-lb.y,lb.x,0,-Hb.y,Hb.x,0];return!V0(a,dt,ft,pt,Yi)||(a=[1,0,0,0,1,0,0,0,1],!V0(a,dt,ft,pt,Yi))?!1:(Ji.crossVectors(rb,lb),a=[Ji.x,Ji.y,Ji.z],V0(a,dt,ft,pt,Yi))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return di.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(di).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bb[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bb[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bb[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bb[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bb[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bb[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bb[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bb[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bb),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Ma.prototype.isBox3=!0;var bb=[new V,new V,new V,new V,new V,new V,new V,new V],di=new V,K0=new Ma,dt=new V,ft=new V,pt=new V,rb=new V,lb=new V,Hb=new V,fi=new V,Yi=new V,Ji=new V,Fb=new V;function V0(t,e,a,b,i){for(let s=0,o=t.length-3;s<=o;s+=3){Fb.fromArray(t,s);let c=i.x*Math.abs(Fb.x)+i.y*Math.abs(Fb.y)+i.z*Math.abs(Fb.z),d=e.dot(Fb),f=a.dot(Fb),p=b.dot(Fb);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>c)return!1}return!0}var Rf=new Ma,Ao=new V,z0=new V,G0=new V,Ib=class{constructor(e=new V,a=-1){this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let b=this.center;a!==void 0?b.copy(a):Rf.setFromPoints(e).getCenter(b);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,b.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let b=this.center.distanceToSquared(e);return a.copy(e),b>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){G0.subVectors(e,this.center);let a=G0.lengthSq();if(a>this.radius*this.radius){let b=Math.sqrt(a),i=(b-this.radius)*.5;this.center.add(G0.multiplyScalar(i/b)),this.radius+=i}return this}union(e){return z0.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ao.copy(e.center).add(z0)),this.expandByPoint(Ao.copy(e.center).sub(z0)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},tb=new V,k0=new V,Zi=new V,ub=new V,_0=new V,$i=new V,x0=new V,Db=class{constructor(e=new V,a=new V(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tb)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let b=a.dot(this.direction);return b<0?a.copy(this.origin):a.copy(this.direction).multiplyScalar(b).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=tb.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(tb.copy(this.direction).multiplyScalar(a).add(this.origin),tb.distanceToSquared(e))}distanceSqToSegment(e,a,b,i){k0.copy(e).add(a).multiplyScalar(.5),Zi.copy(a).sub(e).normalize(),ub.copy(this.origin).sub(k0);let s=e.distanceTo(a)*.5,o=-this.direction.dot(Zi),c=ub.dot(this.direction),d=-ub.dot(Zi),f=ub.lengthSq(),p=Math.abs(1-o*o),h,n,g,u;if(p>0)if(h=o*d-c,n=o*c-d,u=s*p,h>=0)if(n>=-u)if(n<=u){let m=1/p;h*=m,n*=m,g=h*(h+o*n+2*c)+n*(o*h+n+2*d)+f}else n=s,h=Math.max(0,-(o*n+c)),g=-h*h+n*(n+2*d)+f;else n=-s,h=Math.max(0,-(o*n+c)),g=-h*h+n*(n+2*d)+f;else n<=-u?(h=Math.max(0,-(-o*s+c)),n=h>0?-s:Math.min(Math.max(-s,-d),s),g=-h*h+n*(n+2*d)+f):n<=u?(h=0,n=Math.min(Math.max(-s,-d),s),g=n*(n+2*d)+f):(h=Math.max(0,-(o*s+c)),n=h>0?s:Math.min(Math.max(-s,-d),s),g=-h*h+n*(n+2*d)+f);else n=o>0?-s:s,h=Math.max(0,-(o*n+c)),g=-h*h+n*(n+2*d)+f;return b&&b.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Zi).multiplyScalar(n).add(k0),g}intersectSphere(e,a){tb.subVectors(e.center,this.origin);let b=tb.dot(this.direction),i=tb.dot(tb)-b*b,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),c=b-o,d=b+o;return c<0&&d<0?null:c<0?this.at(d,a):this.at(c,a)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let b=-(this.origin.dot(e.normal)+e.constant)/a;return b>=0?b:null}intersectPlane(e,a){let b=this.distanceToPlane(e);return b===null?null:this.at(b,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let b,i,s,o,c,d,f=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,n=this.origin;return f>=0?(b=(e.min.x-n.x)*f,i=(e.max.x-n.x)*f):(b=(e.max.x-n.x)*f,i=(e.min.x-n.x)*f),p>=0?(s=(e.min.y-n.y)*p,o=(e.max.y-n.y)*p):(s=(e.max.y-n.y)*p,o=(e.min.y-n.y)*p),b>o||s>i||((s>b||b!==b)&&(b=s),(o<i||i!==i)&&(i=o),h>=0?(c=(e.min.z-n.z)*h,d=(e.max.z-n.z)*h):(c=(e.max.z-n.z)*h,d=(e.min.z-n.z)*h),b>d||c>i)||((c>b||b!==b)&&(b=c),(d<i||i!==i)&&(i=d),i<0)?null:this.at(b>=0?b:i,a)}intersectsBox(e){return this.intersectBox(e,tb)!==null}intersectTriangle(e,a,b,i,s){_0.subVectors(a,e),$i.subVectors(b,e),x0.crossVectors(_0,$i);let o=this.direction.dot(x0),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;ub.subVectors(this.origin,e);let d=c*this.direction.dot($i.crossVectors(ub,$i));if(d<0)return null;let f=c*this.direction.dot(_0.cross(ub));if(f<0||d+f>o)return null;let p=-c*ub.dot(x0);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,a,b,i,s,o,c,d,f,p,h,n,g,u,m,v){let r=this.elements;return r[0]=e,r[4]=a,r[8]=b,r[12]=i,r[1]=s,r[5]=o,r[9]=c,r[13]=d,r[2]=f,r[6]=p,r[10]=h,r[14]=n,r[3]=g,r[7]=u,r[11]=m,r[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){let a=this.elements,b=e.elements;return a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15],this}copyPosition(e){let a=this.elements,b=e.elements;return a[12]=b[12],a[13]=b[13],a[14]=b[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,b){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),b.setFromMatrixColumn(this,2),this}makeBasis(e,a,b){return this.set(e.x,a.x,b.x,0,e.y,a.y,b.y,0,e.z,a.z,b.z,0,0,0,0,1),this}extractRotation(e){let a=this.elements,b=e.elements,i=1/ht.setFromMatrixColumn(e,0).length(),s=1/ht.setFromMatrixColumn(e,1).length(),o=1/ht.setFromMatrixColumn(e,2).length();return a[0]=b[0]*i,a[1]=b[1]*i,a[2]=b[2]*i,a[3]=0,a[4]=b[4]*s,a[5]=b[5]*s,a[6]=b[6]*s,a[7]=0,a[8]=b[8]*o,a[9]=b[9]*o,a[10]=b[10]*o,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let a=this.elements,b=e.x,i=e.y,s=e.z,o=Math.cos(b),c=Math.sin(b),d=Math.cos(i),f=Math.sin(i),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let n=o*p,g=o*h,u=c*p,m=c*h;a[0]=d*p,a[4]=-d*h,a[8]=f,a[1]=g+u*f,a[5]=n-m*f,a[9]=-c*d,a[2]=m-n*f,a[6]=u+g*f,a[10]=o*d}else if(e.order==="YXZ"){let n=d*p,g=d*h,u=f*p,m=f*h;a[0]=n+m*c,a[4]=u*c-g,a[8]=o*f,a[1]=o*h,a[5]=o*p,a[9]=-c,a[2]=g*c-u,a[6]=m+n*c,a[10]=o*d}else if(e.order==="ZXY"){let n=d*p,g=d*h,u=f*p,m=f*h;a[0]=n-m*c,a[4]=-o*h,a[8]=u+g*c,a[1]=g+u*c,a[5]=o*p,a[9]=m-n*c,a[2]=-o*f,a[6]=c,a[10]=o*d}else if(e.order==="ZYX"){let n=o*p,g=o*h,u=c*p,m=c*h;a[0]=d*p,a[4]=u*f-g,a[8]=n*f+m,a[1]=d*h,a[5]=m*f+n,a[9]=g*f-u,a[2]=-f,a[6]=c*d,a[10]=o*d}else if(e.order==="YZX"){let n=o*d,g=o*f,u=c*d,m=c*f;a[0]=d*p,a[4]=m-n*h,a[8]=u*h+g,a[1]=h,a[5]=o*p,a[9]=-c*p,a[2]=-f*p,a[6]=g*h+u,a[10]=n-m*h}else if(e.order==="XZY"){let n=o*d,g=o*f,u=c*d,m=c*f;a[0]=d*p,a[4]=-h,a[8]=f*p,a[1]=n*h+m,a[5]=o*p,a[9]=g*h-u,a[2]=u*h-g,a[6]=c*p,a[10]=m*h+n}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hf,e,Ff)}lookAt(e,a,b){let i=this.elements;return _a.subVectors(e,a),_a.lengthSq()===0&&(_a.z=1),_a.normalize(),mb.crossVectors(b,_a),mb.lengthSq()===0&&(Math.abs(b.z)===1?_a.x+=1e-4:_a.z+=1e-4,_a.normalize(),mb.crossVectors(b,_a)),mb.normalize(),Qi.crossVectors(_a,mb),i[0]=mb.x,i[4]=Qi.x,i[8]=_a.x,i[1]=mb.y,i[5]=Qi.y,i[9]=_a.y,i[2]=mb.z,i[6]=Qi.z,i[10]=_a.z,this}multiply(e,a){return a!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,a)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let b=e.elements,i=a.elements,s=this.elements,o=b[0],c=b[4],d=b[8],f=b[12],p=b[1],h=b[5],n=b[9],g=b[13],u=b[2],m=b[6],v=b[10],r=b[14],l=b[3],k=b[7],j=b[11],z=b[15],w=i[0],y=i[4],L=i[8],J=i[12],F=i[1],x=i[5],te=i[9],A=i[13],P=i[2],I=i[6],C=i[10],H=i[14],$=i[3],ce=i[7],he=i[11],ie=i[15];return s[0]=o*w+c*F+d*P+f*$,s[4]=o*y+c*x+d*I+f*ce,s[8]=o*L+c*te+d*C+f*he,s[12]=o*J+c*A+d*H+f*ie,s[1]=p*w+h*F+n*P+g*$,s[5]=p*y+h*x+n*I+g*ce,s[9]=p*L+h*te+n*C+g*he,s[13]=p*J+h*A+n*H+g*ie,s[2]=u*w+m*F+v*P+r*$,s[6]=u*y+m*x+v*I+r*ce,s[10]=u*L+m*te+v*C+r*he,s[14]=u*J+m*A+v*H+r*ie,s[3]=l*w+k*F+j*P+z*$,s[7]=l*y+k*x+j*I+z*ce,s[11]=l*L+k*te+j*C+z*he,s[15]=l*J+k*A+j*H+z*ie,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],b=e[4],i=e[8],s=e[12],o=e[1],c=e[5],d=e[9],f=e[13],p=e[2],h=e[6],n=e[10],g=e[14],u=e[3],m=e[7],v=e[11],r=e[15];return u*(+s*d*h-i*f*h-s*c*n+b*f*n+i*c*g-b*d*g)+m*(+a*d*g-a*f*n+s*o*n-i*o*g+i*f*p-s*d*p)+v*(+a*f*h-a*c*g-s*o*h+b*o*g+s*c*p-b*f*p)+r*(-i*c*p-a*d*h+a*c*n+i*o*h-b*o*n+b*d*p)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,b){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=b),this}invert(){let e=this.elements,a=e[0],b=e[1],i=e[2],s=e[3],o=e[4],c=e[5],d=e[6],f=e[7],p=e[8],h=e[9],n=e[10],g=e[11],u=e[12],m=e[13],v=e[14],r=e[15],l=h*v*f-m*n*f+m*d*g-c*v*g-h*d*r+c*n*r,k=u*n*f-p*v*f-u*d*g+o*v*g+p*d*r-o*n*r,j=p*m*f-u*h*f+u*c*g-o*m*g-p*c*r+o*h*r,z=u*h*d-p*m*d-u*c*n+o*m*n+p*c*v-o*h*v,w=a*l+b*k+i*j+s*z;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/w;return e[0]=l*y,e[1]=(m*n*s-h*v*s-m*i*g+b*v*g+h*i*r-b*n*r)*y,e[2]=(c*v*s-m*d*s+m*i*f-b*v*f-c*i*r+b*d*r)*y,e[3]=(h*d*s-c*n*s-h*i*f+b*n*f+c*i*g-b*d*g)*y,e[4]=k*y,e[5]=(p*v*s-u*n*s+u*i*g-a*v*g-p*i*r+a*n*r)*y,e[6]=(u*d*s-o*v*s-u*i*f+a*v*f+o*i*r-a*d*r)*y,e[7]=(o*n*s-p*d*s+p*i*f-a*n*f-o*i*g+a*d*g)*y,e[8]=j*y,e[9]=(u*h*s-p*m*s-u*b*g+a*m*g+p*b*r-a*h*r)*y,e[10]=(o*m*s-u*c*s+u*b*f-a*m*f-o*b*r+a*c*r)*y,e[11]=(p*c*s-o*h*s-p*b*f+a*h*f+o*b*g-a*c*g)*y,e[12]=z*y,e[13]=(p*m*i-u*h*i+u*b*n-a*m*n-p*b*v+a*h*v)*y,e[14]=(u*c*i-o*m*i-u*b*d+a*m*d+o*b*v-a*c*v)*y,e[15]=(o*h*i-p*c*i+p*b*d-a*h*d-o*b*n+a*c*n)*y,this}scale(e){let a=this.elements,b=e.x,i=e.y,s=e.z;return a[0]*=b,a[4]*=i,a[8]*=s,a[1]*=b,a[5]*=i,a[9]*=s,a[2]*=b,a[6]*=i,a[10]*=s,a[3]*=b,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],b=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,b,i))}makeTranslation(e,a,b){return this.set(1,0,0,e,0,1,0,a,0,0,1,b,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),b=Math.sin(e);return this.set(1,0,0,0,0,a,-b,0,0,b,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),b=Math.sin(e);return this.set(a,0,b,0,0,1,0,0,-b,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),b=Math.sin(e);return this.set(a,-b,0,0,b,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let b=Math.cos(a),i=Math.sin(a),s=1-b,o=e.x,c=e.y,d=e.z,f=s*o,p=s*c;return this.set(f*o+b,f*c-i*d,f*d+i*c,0,f*c+i*d,p*c+b,p*d-i*o,0,f*d-i*c,p*d+i*o,s*d*d+b,0,0,0,0,1),this}makeScale(e,a,b){return this.set(e,0,0,0,0,a,0,0,0,0,b,0,0,0,0,1),this}makeShear(e,a,b,i,s,o){return this.set(1,b,s,0,e,1,o,0,a,i,1,0,0,0,0,1),this}compose(e,a,b){let i=this.elements,s=a._x,o=a._y,c=a._z,d=a._w,f=s+s,p=o+o,h=c+c,n=s*f,g=s*p,u=s*h,m=o*p,v=o*h,r=c*h,l=d*f,k=d*p,j=d*h,z=b.x,w=b.y,y=b.z;return i[0]=(1-(m+r))*z,i[1]=(g+j)*z,i[2]=(u-k)*z,i[3]=0,i[4]=(g-j)*w,i[5]=(1-(n+r))*w,i[6]=(v+l)*w,i[7]=0,i[8]=(u+k)*y,i[9]=(v-l)*y,i[10]=(1-(n+m))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,b){let i=this.elements,s=ht.set(i[0],i[1],i[2]).length(),o=ht.set(i[4],i[5],i[6]).length(),c=ht.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ca.copy(this);let f=1/s,p=1/o,h=1/c;return Ca.elements[0]*=f,Ca.elements[1]*=f,Ca.elements[2]*=f,Ca.elements[4]*=p,Ca.elements[5]*=p,Ca.elements[6]*=p,Ca.elements[8]*=h,Ca.elements[9]*=h,Ca.elements[10]*=h,a.setFromRotationMatrix(Ca),b.x=s,b.y=o,b.z=c,this}makePerspective(e,a,b,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let c=this.elements,d=2*s/(a-e),f=2*s/(b-i),p=(a+e)/(a-e),h=(b+i)/(b-i),n=-(o+s)/(o-s),g=-2*o*s/(o-s);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=n,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,a,b,i,s,o){let c=this.elements,d=1/(a-e),f=1/(b-i),p=1/(o-s),h=(a+e)*d,n=(b+i)*f,g=(o+s)*p;return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-n,c[2]=0,c[6]=0,c[10]=-2*p,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let a=this.elements,b=e.elements;for(let i=0;i<16;i++)if(a[i]!==b[i])return!1;return!0}fromArray(e,a=0){for(let b=0;b<16;b++)this.elements[b]=e[b+a];return this}toArray(e=[],a=0){let b=this.elements;return e[a]=b[0],e[a+1]=b[1],e[a+2]=b[2],e[a+3]=b[3],e[a+4]=b[4],e[a+5]=b[5],e[a+6]=b[6],e[a+7]=b[7],e[a+8]=b[8],e[a+9]=b[9],e[a+10]=b[10],e[a+11]=b[11],e[a+12]=b[12],e[a+13]=b[13],e[a+14]=b[14],e[a+15]=b[15],e}};Ve.prototype.isMatrix4=!0;var ht=new V,Ca=new Ve,Hf=new V(0,0,0),Ff=new V(1,1,1),mb=new V,Qi=new V,_a=new V,Lo=new Ve,Po=new pa,Ob=class{constructor(e=0,a=0,b=0,i=Ob.DefaultOrder){this._x=e,this._y=a,this._z=b,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,b,i=this._order){return this._x=e,this._y=a,this._z=b,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,b=!0){let i=e.elements,s=i[0],o=i[4],c=i[8],d=i[1],f=i[5],p=i[9],h=i[2],n=i[6],g=i[10];switch(a){case"XYZ":this._y=Math.asin(Va(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(n,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Va(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Va(n,-1,1)),Math.abs(n)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Va(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(n,g),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(Va(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Va(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(n,f),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,b===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,b){return Lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lo,a,b)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return Po.setFromEuler(this),this.setFromQuaternion(Po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new V(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Ob.prototype.isEuler=!0;Ob.DefaultOrder="XYZ";Ob.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Co=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},If=0,Ro=new V,nt=new pa,ib=new Ve,es=new V,pi=new V,Df=new V,Of=new pa,Ho=new V(1,0,0),Fo=new V(0,1,0),Io=new V(0,0,1),Nf={type:"added"},Do={type:"removed"},Fe=class extends Ua{constructor(){super();Object.defineProperty(this,"id",{value:If++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DefaultUp.clone();let e=new V,a=new Ob,b=new pa,i=new V(1,1,1);function s(){b.setFromEuler(a,!1)}function o(){a.setFromQuaternion(b,void 0,!1)}a._onChange(s),b._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:b},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new da}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Fe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return nt.setFromAxisAngle(e,a),this.quaternion.multiply(nt),this}rotateOnWorldAxis(e,a){return nt.setFromAxisAngle(e,a),this.quaternion.premultiply(nt),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(Io,e)}translateOnAxis(e,a){return Ro.copy(e).applyQuaternion(this.quaternion),this.position.add(Ro.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(Io,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ib.copy(this.matrixWorld).invert())}lookAt(e,a,b){e.isVector3?es.copy(e):es.set(e,a,b);let i=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ib.lookAt(pi,es,this.up):ib.lookAt(es,pi,this.up),this.quaternion.setFromRotationMatrix(ib),i&&(ib.extractRotation(i.matrixWorld),nt.setFromRotationMatrix(ib),this.quaternion.premultiply(nt.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let b=0;b<arguments.length;b++)this.remove(arguments[b]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(Do)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let a=this.children[e];a.parent=null,a.dispatchEvent(Do)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ib.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ib.multiply(e.parent.matrixWorld)),e.applyMatrix4(ib),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let b=0,i=this.children.length;b<i;b++){let o=this.children[b].getObjectByProperty(e,a);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,Df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,Of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);let a=this.children;for(let b=0,i=a.length;b<i;b++)a[b].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let b=0,i=a.length;b<i;b++)a[b].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let b=0,i=a.length;b<i;b++)a[b].updateMatrixWorld(e)}updateWorldMatrix(e,a){let b=this.parent;if(e===!0&&b!==null&&b.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),a===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let a=e===void 0||typeof e=="string",b={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},b.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let d=c.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){let h=d[f];s(e.shapes,h)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(s(e.materials,this.material[d]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){let d=this.animations[c];i.animations.push(s(e.animations,d))}}if(a){let c=o(e.geometries),d=o(e.materials),f=o(e.textures),p=o(e.images),h=o(e.shapes),n=o(e.skeletons),g=o(e.animations);c.length>0&&(b.geometries=c),d.length>0&&(b.materials=d),f.length>0&&(b.textures=f),p.length>0&&(b.images=p),h.length>0&&(b.shapes=h),n.length>0&&(b.skeletons=n),g.length>0&&(b.animations=g)}return b.object=i,b;function o(c){let d=[];for(let f in c){let p=c[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let b=0;b<e.children.length;b++){let i=e.children[b];this.add(i.clone())}return this}};Fe.DefaultUp=new V(0,1,0);Fe.DefaultMatrixAutoUpdate=!0;Fe.prototype.isObject3D=!0;var Ra=new V,sb=new V,S0=new V,ob=new V,gt=new V,rt=new V,Oo=new V,w0=new V,M0=new V,E0=new V,ea=class{constructor(e=new V,a=new V,b=new V){this.a=e,this.b=a,this.c=b}static getNormal(e,a,b,i){i.subVectors(b,a),Ra.subVectors(e,a),i.cross(Ra);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,b,i,s){Ra.subVectors(i,a),sb.subVectors(b,a),S0.subVectors(e,a);let o=Ra.dot(Ra),c=Ra.dot(sb),d=Ra.dot(S0),f=sb.dot(sb),p=sb.dot(S0),h=o*f-c*c;if(h===0)return s.set(-2,-1,-1);let n=1/h,g=(f*d-c*p)*n,u=(o*p-c*d)*n;return s.set(1-g-u,u,g)}static containsPoint(e,a,b,i){return this.getBarycoord(e,a,b,i,ob),ob.x>=0&&ob.y>=0&&ob.x+ob.y<=1}static getUV(e,a,b,i,s,o,c,d){return this.getBarycoord(e,a,b,i,ob),d.set(0,0),d.addScaledVector(s,ob.x),d.addScaledVector(o,ob.y),d.addScaledVector(c,ob.z),d}static isFrontFacing(e,a,b,i){return Ra.subVectors(b,a),sb.subVectors(e,a),Ra.cross(sb).dot(i)<0}set(e,a,b){return this.a.copy(e),this.b.copy(a),this.c.copy(b),this}setFromPointsAndIndices(e,a,b,i){return this.a.copy(e[a]),this.b.copy(e[b]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,b,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,b),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ra.subVectors(this.c,this.b),sb.subVectors(this.a,this.b),Ra.cross(sb).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ea.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return ea.getBarycoord(e,this.a,this.b,this.c,a)}getUV(e,a,b,i,s){return ea.getUV(e,this.a,this.b,this.c,a,b,i,s)}containsPoint(e){return ea.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ea.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let b=this.a,i=this.b,s=this.c,o,c;gt.subVectors(i,b),rt.subVectors(s,b),w0.subVectors(e,b);let d=gt.dot(w0),f=rt.dot(w0);if(d<=0&&f<=0)return a.copy(b);M0.subVectors(e,i);let p=gt.dot(M0),h=rt.dot(M0);if(p>=0&&h<=p)return a.copy(i);let n=d*h-p*f;if(n<=0&&d>=0&&p<=0)return o=d/(d-p),a.copy(b).addScaledVector(gt,o);E0.subVectors(e,s);let g=gt.dot(E0),u=rt.dot(E0);if(u>=0&&g<=u)return a.copy(s);let m=g*f-d*u;if(m<=0&&f>=0&&u<=0)return c=f/(f-u),a.copy(b).addScaledVector(rt,c);let v=p*u-g*h;if(v<=0&&h-p>=0&&g-u>=0)return Oo.subVectors(s,i),c=(h-p)/(h-p+(g-u)),a.copy(i).addScaledVector(Oo,c);let r=1/(v+m+n);return o=m*r,c=n*r,a.copy(b).addScaledVector(gt,o).addScaledVector(rt,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bf=0,ua=class extends Ua{constructor(){super();Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Pa(),this.name="",this.type="Material",this.fog=!0,this.blending=ei,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.format=ba,this.transparent=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=Qb,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=s0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=l0,this.stencilZFail=l0,this.stencilZPass=l0,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let b=e[a];if(b===void 0){console.warn("THREE.Material: '"+a+"' parameter is undefined.");continue}if(a==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=b===to;continue}let i=this[a];if(i===void 0){console.warn("THREE."+this.type+": '"+a+"' is not a property of this material.");continue}i&&i.isColor?i.set(b):i&&i.isVector3&&b&&b.isVector3?i.copy(b):this[a]=b}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let b={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};b.uuid=this.uuid,b.type=this.type,this.name!==""&&(b.name=this.name),this.color&&this.color.isColor&&(b.color=this.color.getHex()),this.roughness!==void 0&&(b.roughness=this.roughness),this.metalness!==void 0&&(b.metalness=this.metalness),this.sheen!==void 0&&(b.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(b.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(b.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(b.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(b.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(b.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(b.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(b.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(b.shininess=this.shininess),this.clearcoat!==void 0&&(b.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(b.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(b.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(b.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(b.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,b.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(b.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(b.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(b.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(b.lightMap=this.lightMap.toJSON(e).uuid,b.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(b.aoMap=this.aoMap.toJSON(e).uuid,b.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(b.bumpMap=this.bumpMap.toJSON(e).uuid,b.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(b.normalMap=this.normalMap.toJSON(e).uuid,b.normalMapType=this.normalMapType,b.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(b.displacementMap=this.displacementMap.toJSON(e).uuid,b.displacementScale=this.displacementScale,b.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(b.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(b.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(b.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(b.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(b.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(b.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(b.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(b.combine=this.combine)),this.envMapIntensity!==void 0&&(b.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(b.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(b.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(b.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(b.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(b.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(b.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(b.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(b.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(b.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(b.size=this.size),this.shadowSide!==null&&(b.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(b.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(b.blending=this.blending),this.side!==Qt&&(b.side=this.side),this.vertexColors&&(b.vertexColors=!0),this.opacity<1&&(b.opacity=this.opacity),this.format!==ba&&(b.format=this.format),this.transparent===!0&&(b.transparent=this.transparent),b.depthFunc=this.depthFunc,b.depthTest=this.depthTest,b.depthWrite=this.depthWrite,b.colorWrite=this.colorWrite,b.stencilWrite=this.stencilWrite,b.stencilWriteMask=this.stencilWriteMask,b.stencilFunc=this.stencilFunc,b.stencilRef=this.stencilRef,b.stencilFuncMask=this.stencilFuncMask,b.stencilFail=this.stencilFail,b.stencilZFail=this.stencilZFail,b.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(b.rotation=this.rotation),this.polygonOffset===!0&&(b.polygonOffset=!0),this.polygonOffsetFactor!==0&&(b.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(b.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(b.linewidth=this.linewidth),this.dashSize!==void 0&&(b.dashSize=this.dashSize),this.gapSize!==void 0&&(b.gapSize=this.gapSize),this.scale!==void 0&&(b.scale=this.scale),this.dithering===!0&&(b.dithering=!0),this.alphaTest>0&&(b.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(b.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(b.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(b.wireframe=this.wireframe),this.wireframeLinewidth>1&&(b.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(b.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(b.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(b.flatShading=this.flatShading),this.visible===!1&&(b.visible=!1),this.toneMapped===!1&&(b.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(b.userData=this.userData);function i(s){let o=[];for(let c in s){let d=s[c];delete d.metadata,o.push(d)}return o}if(a){let s=i(e.textures),o=i(e.images);s.length>0&&(b.textures=s),o.length>0&&(b.images=o)}return b}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,b=null;if(a!==null){let i=a.length;b=new Array(i);for(let s=0;s!==i;++s)b[s]=a[s].clone()}return this.clippingPlanes=b,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};ua.prototype.isMaterial=!0;var No={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},as={h:0,s:0,l:0};function T0(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}function A0(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function L0(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ge=class{constructor(e,a,b){return a===void 0&&b===void 0?this.set(e):this.setRGB(e,a,b)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,a,b){return this.r=e,this.g=a,this.b=b,this}setHSL(e,a,b){if(e=Lf(e,1),a=Va(a,0,1),b=Va(b,0,1),a===0)this.r=this.g=this.b=b;else{let i=b<=.5?b*(1+a):b+a-b*a,s=2*b-i;this.r=T0(s,i,e+1/3),this.g=T0(s,i,e),this.b=T0(s,i,e-1/3)}return this}setStyle(e){function a(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let b;if(b=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,s=b[1],o=b[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,a(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,a(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(i[1])/360,d=parseInt(i[2],10)/100,f=parseInt(i[3],10)/100;return a(i[4]),this.setHSL(c,d,f)}break}}else if(b=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=b[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let a=No[e.toLowerCase()];return a!==void 0?this.setHex(a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,a=2){return this.r=Math.pow(e.r,a),this.g=Math.pow(e.g,a),this.b=Math.pow(e.b,a),this}copyLinearToGamma(e,a=2){let b=a>0?1/a:1;return this.r=Math.pow(e.r,b),this.g=Math.pow(e.g,b),this.b=Math.pow(e.b,b),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=A0(e.r),this.g=A0(e.g),this.b=A0(e.b),this}copyLinearToSRGB(e){return this.r=L0(e.r),this.g=L0(e.g),this.b=L0(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){let a=this.r,b=this.g,i=this.b,s=Math.max(a,b,i),o=Math.min(a,b,i),c,d,f=(o+s)/2;if(o===s)c=0,d=0;else{let p=s-o;switch(d=f<=.5?p/(s+o):p/(2-s-o),s){case a:c=(b-i)/p+(b<i?6:0);break;case b:c=(i-a)/p+2;break;case i:c=(a-b)/p+4;break}c/=6}return e.h=c,e.s=d,e.l=f,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,a,b){return this.getHSL(Ha),Ha.h+=e,Ha.s+=a,Ha.l+=b,this.setHSL(Ha.h,Ha.s,Ha.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,b){return this.r=e.r+(a.r-e.r)*b,this.g=e.g+(a.g-e.g)*b,this.b=e.b+(a.b-e.b)*b,this}lerpHSL(e,a){this.getHSL(Ha),e.getHSL(as);let b=v0(Ha.h,as.h,a),i=v0(Ha.s,as.s,a),s=v0(Ha.l,as.l,a);return this.setHSL(b,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ge.NAMES=No;ge.prototype.isColor=!0;ge.prototype.r=1;ge.prototype.g=1;ge.prototype.b=1;var bs=class extends ua{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fi,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};bs.prototype.isMeshBasicMaterial=!0;var Ue=new V,ts=new X,We=class{constructor(e,a,b){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=b===!0,this.usage=oi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,a,b){e*=this.itemSize,b*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[b+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let a=this.array,b=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ge),a[b++]=o.r,a[b++]=o.g,a[b++]=o.b}return this}copyVector2sArray(e){let a=this.array,b=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new X),a[b++]=o.x,a[b++]=o.y}return this}copyVector3sArray(e){let a=this.array,b=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new V),a[b++]=o.x,a[b++]=o.y,a[b++]=o.z}return this}copyVector4sArray(e){let a=this.array,b=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Oe),a[b++]=o.x,a[b++]=o.y,a[b++]=o.z,a[b++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,b=this.count;a<b;a++)ts.fromBufferAttribute(this,a),ts.applyMatrix3(e),this.setXY(a,ts.x,ts.y);else if(this.itemSize===3)for(let a=0,b=this.count;a<b;a++)Ue.fromBufferAttribute(this,a),Ue.applyMatrix3(e),this.setXYZ(a,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(e){for(let a=0,b=this.count;a<b;a++)Ue.x=this.getX(a),Ue.y=this.getY(a),Ue.z=this.getZ(a),Ue.applyMatrix4(e),this.setXYZ(a,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(e){for(let a=0,b=this.count;a<b;a++)Ue.x=this.getX(a),Ue.y=this.getY(a),Ue.z=this.getZ(a),Ue.applyNormalMatrix(e),this.setXYZ(a,Ue.x,Ue.y,Ue.z);return this}transformDirection(e){for(let a=0,b=this.count;a<b;a++)Ue.x=this.getX(a),Ue.y=this.getY(a),Ue.z=this.getZ(a),Ue.transformDirection(e),this.setXYZ(a,Ue.x,Ue.y,Ue.z);return this}set(e,a=0){return this.array.set(e,a),this}getX(e){return this.array[e*this.itemSize]}setX(e,a){return this.array[e*this.itemSize]=a,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,a){return this.array[e*this.itemSize+1]=a,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,a){return this.array[e*this.itemSize+2]=a,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,a){return this.array[e*this.itemSize+3]=a,this}setXY(e,a,b){return e*=this.itemSize,this.array[e+0]=a,this.array[e+1]=b,this}setXYZ(e,a,b,i){return e*=this.itemSize,this.array[e+0]=a,this.array[e+1]=b,this.array[e+2]=i,this}setXYZW(e,a,b,i,s){return e*=this.itemSize,this.array[e+0]=a,this.array[e+1]=b,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};We.prototype.isBufferAttribute=!0;var P0=class extends We{constructor(e,a,b){super(new Uint16Array(e),a,b)}};var C0=class extends We{constructor(e,a,b){super(new Uint32Array(e),a,b)}},Bo=class extends We{constructor(e,a,b){super(new Uint16Array(e),a,b)}};Bo.prototype.isFloat16BufferAttribute=!0;var ia=class extends We{constructor(e,a,b){super(new Float32Array(e),a,b)}};var Uf=0,Ea=new Ve,R0=new Fe,lt=new V,xa=new Ma,hi=new Ma,ha=new V,Be=class extends Ua{constructor(){super();Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wo(e)>65535?C0:P0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,b=0){this.groups.push({start:e,count:a,materialIndex:b})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let b=this.attributes.normal;if(b!==void 0){let s=new da().getNormalMatrix(e);b.applyNormalMatrix(s),b.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ea.makeRotationFromQuaternion(e),this.applyMatrix4(Ea),this}rotateX(e){return Ea.makeRotationX(e),this.applyMatrix4(Ea),this}rotateY(e){return Ea.makeRotationY(e),this.applyMatrix4(Ea),this}rotateZ(e){return Ea.makeRotationZ(e),this.applyMatrix4(Ea),this}translate(e,a,b){return Ea.makeTranslation(e,a,b),this.applyMatrix4(Ea),this}scale(e,a,b){return Ea.makeScale(e,a,b),this.applyMatrix4(Ea),this}lookAt(e){return R0.lookAt(e),R0.updateMatrix(),this.applyMatrix4(R0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lt).negate(),this.translate(lt.x,lt.y,lt.z),this}setFromPoints(e){let a=[];for(let b=0,i=e.length;b<i;b++){let s=e[b];a.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ia(a,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-Infinity,-Infinity,-Infinity),new V(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let b=0,i=a.length;b<i;b++){let s=a[b];xa.setFromBufferAttribute(s),this.morphTargetsRelative?(ha.addVectors(this.boundingBox.min,xa.min),this.boundingBox.expandByPoint(ha),ha.addVectors(this.boundingBox.max,xa.max),this.boundingBox.expandByPoint(ha)):(this.boundingBox.expandByPoint(xa.min),this.boundingBox.expandByPoint(xa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ib);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,Infinity);return}if(e){let b=this.boundingSphere.center;if(xa.setFromBufferAttribute(e),a)for(let s=0,o=a.length;s<o;s++){let c=a[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(ha.addVectors(xa.min,hi.min),xa.expandByPoint(ha),ha.addVectors(xa.max,hi.max),xa.expandByPoint(ha)):(xa.expandByPoint(hi.min),xa.expandByPoint(hi.max))}xa.getCenter(b);let i=0;for(let s=0,o=e.count;s<o;s++)ha.fromBufferAttribute(e,s),i=Math.max(i,b.distanceToSquared(ha));if(a)for(let s=0,o=a.length;s<o;s++){let c=a[s],d=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)ha.fromBufferAttribute(c,f),d&&(lt.fromBufferAttribute(e,f),ha.add(lt)),i=Math.max(i,b.distanceToSquared(ha))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let b=e.array,i=a.position.array,s=a.normal.array,o=a.uv.array,c=i.length/3;a.tangent===void 0&&this.setAttribute("tangent",new We(new Float32Array(4*c),4));let d=a.tangent.array,f=[],p=[];for(let F=0;F<c;F++)f[F]=new V,p[F]=new V;let h=new V,n=new V,g=new V,u=new X,m=new X,v=new X,r=new V,l=new V;function k(F,x,te){h.fromArray(i,F*3),n.fromArray(i,x*3),g.fromArray(i,te*3),u.fromArray(o,F*2),m.fromArray(o,x*2),v.fromArray(o,te*2),n.sub(h),g.sub(h),m.sub(u),v.sub(u);let A=1/(m.x*v.y-v.x*m.y);!isFinite(A)||(r.copy(n).multiplyScalar(v.y).addScaledVector(g,-m.y).multiplyScalar(A),l.copy(g).multiplyScalar(m.x).addScaledVector(n,-v.x).multiplyScalar(A),f[F].add(r),f[x].add(r),f[te].add(r),p[F].add(l),p[x].add(l),p[te].add(l))}let j=this.groups;j.length===0&&(j=[{start:0,count:b.length}]);for(let F=0,x=j.length;F<x;++F){let te=j[F],A=te.start,P=te.count;for(let I=A,C=A+P;I<C;I+=3)k(b[I+0],b[I+1],b[I+2])}let z=new V,w=new V,y=new V,L=new V;function J(F){y.fromArray(s,F*3),L.copy(y);let x=f[F];z.copy(x),z.sub(y.multiplyScalar(y.dot(x))).normalize(),w.crossVectors(L,x);let A=w.dot(p[F])<0?-1:1;d[F*4]=z.x,d[F*4+1]=z.y,d[F*4+2]=z.z,d[F*4+3]=A}for(let F=0,x=j.length;F<x;++F){let te=j[F],A=te.start,P=te.count;for(let I=A,C=A+P;I<C;I+=3)J(b[I+0]),J(b[I+1]),J(b[I+2])}}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let b=this.getAttribute("normal");if(b===void 0)b=new We(new Float32Array(a.count*3),3),this.setAttribute("normal",b);else for(let n=0,g=b.count;n<g;n++)b.setXYZ(n,0,0,0);let i=new V,s=new V,o=new V,c=new V,d=new V,f=new V,p=new V,h=new V;if(e)for(let n=0,g=e.count;n<g;n+=3){let u=e.getX(n+0),m=e.getX(n+1),v=e.getX(n+2);i.fromBufferAttribute(a,u),s.fromBufferAttribute(a,m),o.fromBufferAttribute(a,v),p.subVectors(o,s),h.subVectors(i,s),p.cross(h),c.fromBufferAttribute(b,u),d.fromBufferAttribute(b,m),f.fromBufferAttribute(b,v),c.add(p),d.add(p),f.add(p),b.setXYZ(u,c.x,c.y,c.z),b.setXYZ(m,d.x,d.y,d.z),b.setXYZ(v,f.x,f.y,f.z)}else for(let n=0,g=a.count;n<g;n+=3)i.fromBufferAttribute(a,n+0),s.fromBufferAttribute(a,n+1),o.fromBufferAttribute(a,n+2),p.subVectors(o,s),h.subVectors(i,s),p.cross(h),b.setXYZ(n+0,p.x,p.y,p.z),b.setXYZ(n+1,p.x,p.y,p.z),b.setXYZ(n+2,p.x,p.y,p.z);this.normalizeNormals(),b.needsUpdate=!0}}merge(e,a){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}a===void 0&&(a=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let b=this.attributes;for(let i in b){if(e.attributes[i]===void 0)continue;let o=b[i].array,c=e.attributes[i],d=c.array,f=c.itemSize*a,p=Math.min(d.length,o.length-f);for(let h=0,n=f;h<p;h++,n++)o[n]=d[h]}return this}normalizeNormals(){let e=this.attributes.normal;for(let a=0,b=e.count;a<b;a++)ha.fromBufferAttribute(e,a),ha.normalize(),e.setXYZ(a,ha.x,ha.y,ha.z)}toNonIndexed(){function e(c,d){let f=c.array,p=c.itemSize,h=c.normalized,n=new f.constructor(d.length*p),g=0,u=0;for(let m=0,v=d.length;m<v;m++){c.isInterleavedBufferAttribute?g=d[m]*c.data.stride+c.offset:g=d[m]*p;for(let r=0;r<p;r++)n[u++]=f[g++]}return new We(n,p,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new Be,b=this.index.array,i=this.attributes;for(let c in i){let d=i[c],f=e(d,b);a.setAttribute(c,f)}let s=this.morphAttributes;for(let c in s){let d=[],f=s[c];for(let p=0,h=f.length;p<h;p++){let n=f[p],g=e(n,b);d.push(g)}a.morphAttributes[c]=d}a.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,d=o.length;c<d;c++){let f=o[c];a.addGroup(f.start,f.count,f.materialIndex)}return a}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let d=this.parameters;for(let f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let b=this.attributes;for(let d in b){let f=b[d];e.data.attributes[d]=f.toJSON(e.data)}let i={},s=!1;for(let d in this.morphAttributes){let f=this.morphAttributes[d],p=[];for(let h=0,n=f.length;h<n;h++){let g=f[h];p.push(g.toJSON(e.data))}p.length>0&&(i[d]=p,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let b=e.index;b!==null&&this.setIndex(b.clone(a));let i=e.attributes;for(let f in i){let p=i[f];this.setAttribute(f,p.clone(a))}let s=e.morphAttributes;for(let f in s){let p=[],h=s[f];for(let n=0,g=h.length;n<g;n++)p.push(h[n].clone(a));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let f=0,p=o.length;f<p;f++){let h=o[f];this.addGroup(h.start,h.count,h.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.prototype.isBufferGeometry=!0;var Uo=new Ve,ut=new Db,H0=new Ib,vb=new V,jb=new V,yb=new V,F0=new V,I0=new V,D0=new V,is=new V,ss=new V,os=new V,cs=new X,ds=new X,fs=new X,O0=new V,ps=new V,ma=class extends Fe{constructor(e=new Be,a=new bs){super();this.type="Mesh",this.geometry=e,this.material=a,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let a=e.morphAttributes,b=Object.keys(a);if(b.length>0){let i=a[b[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}else{let a=e.morphTargets;a!==void 0&&a.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,a){let b=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(b.boundingSphere===null&&b.computeBoundingSphere(),H0.copy(b.boundingSphere),H0.applyMatrix4(s),e.ray.intersectsSphere(H0)===!1)||(Uo.copy(s).invert(),ut.copy(e.ray).applyMatrix4(Uo),b.boundingBox!==null&&ut.intersectsBox(b.boundingBox)===!1))return;let o;if(b.isBufferGeometry){let c=b.index,d=b.attributes.position,f=b.morphAttributes.position,p=b.morphTargetsRelative,h=b.attributes.uv,n=b.attributes.uv2,g=b.groups,u=b.drawRange;if(c!==null)if(Array.isArray(i))for(let m=0,v=g.length;m<v;m++){let r=g[m],l=i[r.materialIndex],k=Math.max(r.start,u.start),j=Math.min(c.count,Math.min(r.start+r.count,u.start+u.count));for(let z=k,w=j;z<w;z+=3){let y=c.getX(z),L=c.getX(z+1),J=c.getX(z+2);o=hs(this,l,e,ut,d,f,p,h,n,y,L,J),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=r.materialIndex,a.push(o))}}else{let m=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let r=m,l=v;r<l;r+=3){let k=c.getX(r),j=c.getX(r+1),z=c.getX(r+2);o=hs(this,i,e,ut,d,f,p,h,n,k,j,z),o&&(o.faceIndex=Math.floor(r/3),a.push(o))}}else if(d!==void 0)if(Array.isArray(i))for(let m=0,v=g.length;m<v;m++){let r=g[m],l=i[r.materialIndex],k=Math.max(r.start,u.start),j=Math.min(d.count,Math.min(r.start+r.count,u.start+u.count));for(let z=k,w=j;z<w;z+=3){let y=z,L=z+1,J=z+2;o=hs(this,l,e,ut,d,f,p,h,n,y,L,J),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=r.materialIndex,a.push(o))}}else{let m=Math.max(0,u.start),v=Math.min(d.count,u.start+u.count);for(let r=m,l=v;r<l;r+=3){let k=r,j=r+1,z=r+2;o=hs(this,i,e,ut,d,f,p,h,n,k,j,z),o&&(o.faceIndex=Math.floor(r/3),a.push(o))}}}else b.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};ma.prototype.isMesh=!0;function Wf(t,e,a,b,i,s,o,c){let d;if(e.side===ta?d=b.intersectTriangle(o,s,i,!0,c):d=b.intersectTriangle(i,s,o,e.side!==$b,c),d===null)return null;ps.copy(c),ps.applyMatrix4(t.matrixWorld);let f=a.ray.origin.distanceTo(ps);return f<a.near||f>a.far?null:{distance:f,point:ps.clone(),object:t}}function hs(t,e,a,b,i,s,o,c,d,f,p,h){vb.fromBufferAttribute(i,f),jb.fromBufferAttribute(i,p),yb.fromBufferAttribute(i,h);let n=t.morphTargetInfluences;if(s&&n){is.set(0,0,0),ss.set(0,0,0),os.set(0,0,0);for(let u=0,m=s.length;u<m;u++){let v=n[u],r=s[u];v!==0&&(F0.fromBufferAttribute(r,f),I0.fromBufferAttribute(r,p),D0.fromBufferAttribute(r,h),o?(is.addScaledVector(F0,v),ss.addScaledVector(I0,v),os.addScaledVector(D0,v)):(is.addScaledVector(F0.sub(vb),v),ss.addScaledVector(I0.sub(jb),v),os.addScaledVector(D0.sub(yb),v)))}vb.add(is),jb.add(ss),yb.add(os)}t.isSkinnedMesh&&(t.boneTransform(f,vb),t.boneTransform(p,jb),t.boneTransform(h,yb));let g=Wf(t,e,a,b,vb,jb,yb,O0);if(g){c&&(cs.fromBufferAttribute(c,f),ds.fromBufferAttribute(c,p),fs.fromBufferAttribute(c,h),g.uv=ea.getUV(O0,vb,jb,yb,cs,ds,fs,new X)),d&&(cs.fromBufferAttribute(d,f),ds.fromBufferAttribute(d,p),fs.fromBufferAttribute(d,h),g.uv2=ea.getUV(O0,vb,jb,yb,cs,ds,fs,new X));let u={a:f,b:p,c:h,normal:new V,materialIndex:0};ea.getNormal(vb,jb,yb,u.normal),g.face=u}return g}var mt=class extends Be{constructor(e=1,a=1,b=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:a,depth:b,widthSegments:i,heightSegments:s,depthSegments:o};let c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let d=[],f=[],p=[],h=[],n=0,g=0;u("z","y","x",-1,-1,b,a,e,o,s,0),u("z","y","x",1,-1,b,a,-e,o,s,1),u("x","z","y",1,1,e,b,a,i,o,2),u("x","z","y",1,-1,e,b,-a,i,o,3),u("x","y","z",1,-1,e,a,b,i,s,4),u("x","y","z",-1,-1,e,a,-b,i,s,5),this.setIndex(d),this.setAttribute("position",new ia(f,3)),this.setAttribute("normal",new ia(p,3)),this.setAttribute("uv",new ia(h,2));function u(m,v,r,l,k,j,z,w,y,L,J){let F=j/y,x=z/L,te=j/2,A=z/2,P=w/2,I=y+1,C=L+1,H=0,$=0,ce=new V;for(let he=0;he<C;he++){let ie=he*x-A;for(let Se=0;Se<I;Se++){let Y=Se*F-te;ce[m]=Y*l,ce[v]=ie*k,ce[r]=P,f.push(ce.x,ce.y,ce.z),ce[m]=0,ce[v]=0,ce[r]=w>0?1:-1,p.push(ce.x,ce.y,ce.z),h.push(Se/y),h.push(1-he/L),H+=1}}for(let he=0;he<L;he++)for(let ie=0;ie<y;ie++){let Se=n+ie+I*he,Y=n+ie+I*(he+1),ae=n+(ie+1)+I*(he+1),re=n+(ie+1)+I*he;d.push(Se,Y,re),d.push(Y,ae,re),$+=6}c.addGroup(g,$,J),g+=$,n+=H}}static fromJSON(e){return new mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vt(t){let e={};for(let a in t){e[a]={};for(let b in t[a]){let i=t[a][b];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[a][b]=i.clone():Array.isArray(i)?e[a][b]=i.slice():e[a][b]=i}}return e}function ya(t){let e={};for(let a=0;a<t.length;a++){let b=vt(t[a]);for(let i in b)e[i]=b[i]}return e}var qf={clone:vt,merge:ya},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kb=class extends ua{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Xf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vt(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?a.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?a.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?a.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?a.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?a.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?a.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?a.uniforms[i]={type:"m4",value:o.toArray()}:a.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader;let b={};for(let i in this.extensions)this.extensions[i]===!0&&(b[i]=!0);return Object.keys(b).length>0&&(a.extensions=b),a}};Kb.prototype.isShaderMaterial=!0;var ns=class extends Fe{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(-a[8],-a[9],-a[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};ns.prototype.isCamera=!0;var va=class extends ns{constructor(e=50,a=1,b=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=b,this.far=i,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=m0*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(u0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return m0*2*Math.atan(Math.tan(u0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,a,b,i,s,o){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=b,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(u0*.5*this.fov)/this.zoom,b=2*a,i=this.aspect*b,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let d=o.fullWidth,f=o.fullHeight;s+=o.offsetX*i/d,a-=o.offsetY*b/f,i*=o.width/d,b*=o.height/f}let c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,a,a-b,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};va.prototype.isPerspectiveCamera=!0;var jt=90,yt=1,gs=class extends Fe{constructor(e,a,b){super();if(this.type="CubeCamera",b.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=b;let i=new va(jt,yt,e,a);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new V(1,0,0)),this.add(i);let s=new va(jt,yt,e,a);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new V(-1,0,0)),this.add(s);let o=new va(jt,yt,e,a);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new V(0,1,0)),this.add(o);let c=new va(jt,yt,e,a);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new V(0,-1,0)),this.add(c);let d=new va(jt,yt,e,a);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new V(0,0,1)),this.add(d);let f=new va(jt,yt,e,a);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new V(0,0,-1)),this.add(f)}update(e,a){this.parent===null&&this.updateMatrixWorld();let b=this.renderTarget,[i,s,o,c,d,f]=this.children,p=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;let n=b.texture.generateMipmaps;b.texture.generateMipmaps=!1,e.setRenderTarget(b,0),e.render(a,i),e.setRenderTarget(b,1),e.render(a,s),e.setRenderTarget(b,2),e.render(a,o),e.setRenderTarget(b,3),e.render(a,c),e.setRenderTarget(b,4),e.render(a,d),b.texture.generateMipmaps=n,e.setRenderTarget(b,5),e.render(a,f),e.setRenderTarget(h),e.xr.enabled=p}},ni=class extends fa{constructor(e,a,b,i,s,o,c,d,f,p){e=e!==void 0?e:[],a=a!==void 0?a:bi,super(e,a,b,i,s,o,c,d,f,p),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};ni.prototype.isCubeTexture=!0;var N0=class extends ka{constructor(e,a,b){Number.isInteger(a)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),a=b),super(e,e,a),a=a||{},this.texture=new ni(void 0,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:ra,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.format=ba,this.texture.encoding=a.encoding,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let b={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new mt(5,5,5),s=new Kb({name:"CubemapFromEquirect",uniforms:vt(b.uniforms),vertexShader:b.vertexShader,fragmentShader:b.fragmentShader,side:ta,blending:gb});s.uniforms.tEquirect.value=a;let o=new ma(i,s),c=a.minFilter;return a.minFilter===Di&&(a.minFilter=ra),new gs(1,10,this).update(e,o),a.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,a,b,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(a,b,i);e.setRenderTarget(s)}};N0.prototype.isWebGLCubeRenderTarget=!0;var B0=new V,Jf=new V,Zf=new da,Wa=class{constructor(e=new V(1,0,0),a=0){this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,b,i){return this.normal.set(e,a,b),this.constant=i,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,b){let i=B0.subVectors(b,a).cross(Jf.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,a){let b=e.delta(B0),i=this.normal.dot(b);if(i===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:a.copy(b).multiplyScalar(s).add(e.start)}intersectsLine(e){let a=this.distanceToPoint(e.start),b=this.distanceToPoint(e.end);return a<0&&b>0||b<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let b=a||Zf.getNormalMatrix(e),i=this.coplanarPoint(B0).applyMatrix4(e),s=this.normal.applyMatrix3(b).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Wa.prototype.isPlane=!0;var Kt=new Ib,rs=new V,gi=class{constructor(e=new Wa,a=new Wa,b=new Wa,i=new Wa,s=new Wa,o=new Wa){this.planes=[e,a,b,i,s,o]}set(e,a,b,i,s,o){let c=this.planes;return c[0].copy(e),c[1].copy(a),c[2].copy(b),c[3].copy(i),c[4].copy(s),c[5].copy(o),this}copy(e){let a=this.planes;for(let b=0;b<6;b++)a[b].copy(e.planes[b]);return this}setFromProjectionMatrix(e){let a=this.planes,b=e.elements,i=b[0],s=b[1],o=b[2],c=b[3],d=b[4],f=b[5],p=b[6],h=b[7],n=b[8],g=b[9],u=b[10],m=b[11],v=b[12],r=b[13],l=b[14],k=b[15];return a[0].setComponents(c-i,h-d,m-n,k-v).normalize(),a[1].setComponents(c+i,h+d,m+n,k+v).normalize(),a[2].setComponents(c+s,h+f,m+g,k+r).normalize(),a[3].setComponents(c-s,h-f,m-g,k-r).normalize(),a[4].setComponents(c-o,h-p,m-u,k-l).normalize(),a[5].setComponents(c+o,h+p,m+u,k+l).normalize(),this}intersectsObject(e){let a=e.geometry;return a.boundingSphere===null&&a.computeBoundingSphere(),Kt.copy(a.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Kt)}intersectsSprite(e){return Kt.center.set(0,0,0),Kt.radius=.7071067811865476,Kt.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kt)}intersectsSphere(e){let a=this.planes,b=e.center,i=-e.radius;for(let s=0;s<6;s++)if(a[s].distanceToPoint(b)<i)return!1;return!0}intersectsBox(e){let a=this.planes;for(let b=0;b<6;b++){let i=a[b];if(rs.x=i.normal.x>0?e.max.x:e.min.x,rs.y=i.normal.y>0?e.max.y:e.min.y,rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let b=0;b<6;b++)if(a[b].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wo(){let t=null,e=!1,a=null,b=null;function i(s,o){a(s,o),b=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&a!==null&&(b=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(b),e=!1},setAnimationLoop:function(s){a=s},setContext:function(s){t=s}}}function $f(t,e){let a=e.isWebGL2,b=new WeakMap;function i(f,p){let h=f.array,n=f.usage,g=t.createBuffer();t.bindBuffer(p,g),t.bufferData(p,h,n),f.onUploadCallback();let u=5126;return h instanceof Float32Array?u=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?f.isFloat16BufferAttribute?a?u=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):u=5123:h instanceof Int16Array?u=5122:h instanceof Uint32Array?u=5125:h instanceof Int32Array?u=5124:h instanceof Int8Array?u=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(u=5121),{buffer:g,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version}}function s(f,p,h){let n=p.array,g=p.updateRange;t.bindBuffer(h,f),g.count===-1?t.bufferSubData(h,0,n):(a?t.bufferSubData(h,g.offset*n.BYTES_PER_ELEMENT,n,g.offset,g.count):t.bufferSubData(h,g.offset*n.BYTES_PER_ELEMENT,n.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),b.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);let p=b.get(f);p&&(t.deleteBuffer(p.buffer),b.delete(f))}function d(f,p){if(f.isGLBufferAttribute){let n=b.get(f);(!n||n.version<f.version)&&b.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);let h=b.get(f);h===void 0?b.set(f,i(f,p)):h.version<f.version&&(s(h.buffer,f,p),h.version=f.version)}return{get:o,remove:c,update:d}}var Vt=class extends Be{constructor(e=1,a=1,b=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:b,heightSegments:i};let s=e/2,o=a/2,c=Math.floor(b),d=Math.floor(i),f=c+1,p=d+1,h=e/c,n=a/d,g=[],u=[],m=[],v=[];for(let r=0;r<p;r++){let l=r*n-o;for(let k=0;k<f;k++){let j=k*h-s;u.push(j,-l,0),m.push(0,0,1),v.push(k/c),v.push(1-r/d)}}for(let r=0;r<d;r++)for(let l=0;l<c;l++){let k=l+f*r,j=l+f*(r+1),z=l+1+f*(r+1),w=l+1+f*r;g.push(k,j,w),g.push(j,z,w)}this.setIndex(g),this.setAttribute("position",new ia(u,3)),this.setAttribute("normal",new ia(m,3)),this.setAttribute("uv",new ia(v,2))}static fromJSON(e){return new Vt(e.width,e.height,e.widthSegments,e.heightSegments)}},Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp="vec3 transformed = vec3( position );",op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,dp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,_p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Cp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ip=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e5=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,a5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,c5=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,d5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,f5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,p5=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r5=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,l5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,u5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,m5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,v5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,y5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_5=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,x5=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S5=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,w5=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E5=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,T5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A5=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R5=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H5=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,F5=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,I5=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,D5=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,O5=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,N5=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,B5=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,U5=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,W5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,q5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X5=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Y5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J5=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z5=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s3=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d3=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,g3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K3=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,z3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:Qf,alphamap_pars_fragment:ep,alphatest_fragment:ap,alphatest_pars_fragment:bp,aomap_fragment:tp,aomap_pars_fragment:ip,begin_vertex:sp,beginnormal_vertex:op,bsdfs:cp,bumpmap_pars_fragment:dp,clipping_planes_fragment:fp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:np,color_fragment:gp,color_pars_fragment:rp,color_pars_vertex:lp,color_vertex:up,common:mp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:jp,displacementmap_pars_vertex:yp,displacementmap_vertex:Kp,emissivemap_fragment:Vp,emissivemap_pars_fragment:zp,encodings_fragment:Gp,encodings_pars_fragment:kp,envmap_fragment:_p,envmap_common_pars_fragment:xp,envmap_pars_fragment:Sp,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Ip,envmap_vertex:Mp,fog_vertex:Ep,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Lp,gradientmap_pars_fragment:Pp,lightmap_fragment:Cp,lightmap_pars_fragment:Rp,lights_lambert_vertex:Hp,lights_pars_begin:Fp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Op,lights_phong_fragment:Np,lights_phong_pars_fragment:Bp,lights_physical_fragment:Up,lights_physical_pars_fragment:Wp,lights_fragment_begin:qp,lights_fragment_maps:Xp,lights_fragment_end:Yp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Qp,map_fragment:e5,map_pars_fragment:a5,map_particle_fragment:b5,map_particle_pars_fragment:t5,metalnessmap_fragment:i5,metalnessmap_pars_fragment:s5,morphnormal_vertex:o5,morphtarget_pars_vertex:c5,morphtarget_vertex:d5,normal_fragment_begin:f5,normal_fragment_maps:p5,normal_pars_fragment:h5,normal_pars_vertex:n5,normal_vertex:g5,normalmap_pars_fragment:r5,clearcoat_normal_fragment_begin:l5,clearcoat_normal_fragment_maps:u5,clearcoat_pars_fragment:m5,output_fragment:v5,packing:j5,premultiplied_alpha_fragment:y5,project_vertex:K5,dithering_fragment:V5,dithering_pars_fragment:z5,roughnessmap_fragment:G5,roughnessmap_pars_fragment:k5,shadowmap_pars_fragment:_5,shadowmap_pars_vertex:x5,shadowmap_vertex:S5,shadowmask_pars_fragment:w5,skinbase_vertex:M5,skinning_pars_vertex:E5,skinning_vertex:T5,skinnormal_vertex:A5,specularmap_fragment:L5,specularmap_pars_fragment:P5,tonemapping_fragment:C5,tonemapping_pars_fragment:R5,transmission_fragment:H5,transmission_pars_fragment:F5,uv_pars_fragment:I5,uv_pars_vertex:D5,uv_vertex:O5,uv2_pars_fragment:N5,uv2_pars_vertex:B5,uv2_vertex:U5,worldpos_vertex:W5,background_vert:q5,background_frag:X5,cube_vert:Y5,cube_frag:J5,depth_vert:Z5,depth_frag:$5,distanceRGBA_vert:Q5,distanceRGBA_frag:e3,equirect_vert:a3,equirect_frag:b3,linedashed_vert:t3,linedashed_frag:i3,meshbasic_vert:s3,meshbasic_frag:o3,meshlambert_vert:c3,meshlambert_frag:d3,meshmatcap_vert:f3,meshmatcap_frag:p3,meshnormal_vert:h3,meshnormal_frag:n3,meshphong_vert:g3,meshphong_frag:r3,meshphysical_vert:l3,meshphysical_frag:u3,meshtoon_vert:m3,meshtoon_frag:v3,points_vert:j3,points_frag:y3,shadow_vert:K3,shadow_frag:V3,sprite_vert:z3,sprite_frag:G3},se={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new da},uv2Transform:{value:new da},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new da}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new da}}},qa={basic:{uniforms:ya([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ya([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new ge(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ya([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ya([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ya([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ge(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ya([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ya([se.points,se.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ya([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ya([se.common,se.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ya([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ya([se.sprite,se.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new da},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:ya([se.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ya([se.common,se.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ya([se.lights,se.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};qa.physical={uniforms:ya([qa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new X(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function k3(t,e,a,b,i){let s=new ge(0),o=0,c,d,f=null,p=0,h=null;function n(u,m){let v=!1,r=m.isScene===!0?m.background:null;r&&r.isTexture&&(r=e.get(r));let l=t.xr,k=l.getSession&&l.getSession();k&&k.environmentBlendMode==="additive"&&(r=null),r===null?g(s,o):r&&r.isColor&&(g(r,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),r&&(r.isCubeTexture||r.mapping===Ii)?(d===void 0&&(d=new ma(new mt(1,1,1),new Kb({name:"BackgroundCubeMaterial",uniforms:vt(qa.cube.uniforms),vertexShader:qa.cube.vertexShader,fragmentShader:qa.cube.fragmentShader,side:ta,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(j,z,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),b.update(d)),d.material.uniforms.envMap.value=r,d.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,(f!==r||p!==r.version||h!==t.toneMapping)&&(d.material.needsUpdate=!0,f=r,p=r.version,h=t.toneMapping),u.unshift(d,d.geometry,d.material,0,0,null)):r&&r.isTexture&&(c===void 0&&(c=new ma(new Vt(2,2),new Kb({name:"BackgroundMaterial",uniforms:vt(qa.background.uniforms),vertexShader:qa.background.vertexShader,fragmentShader:qa.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),b.update(c)),c.material.uniforms.t2D.value=r,r.matrixAutoUpdate===!0&&r.updateMatrix(),c.material.uniforms.uvTransform.value.copy(r.matrix),(f!==r||p!==r.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=r,p=r.version,h=t.toneMapping),u.unshift(c,c.geometry,c.material,0,0,null))}function g(u,m){a.buffers.color.setClear(u.r,u.g,u.b,m,i)}return{getClearColor:function(){return s},setClearColor:function(u,m=1){s.set(u),o=m,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(u){o=u,g(s,o)},render:n}}function _3(t,e,a,b){let i=t.getParameter(34921),s=b.isWebGL2?null:e.get("OES_vertex_array_object"),o=b.isWebGL2||s!==null,c={},d=m(null),f=d;function p(A,P,I,C,H){let $=!1;if(o){let ce=u(C,I,P);f!==ce&&(f=ce,n(f.object)),$=v(C,H),$&&r(C,H)}else{let ce=P.wireframe===!0;(f.geometry!==C.id||f.program!==I.id||f.wireframe!==ce)&&(f.geometry=C.id,f.program=I.id,f.wireframe=ce,$=!0)}A.isInstancedMesh===!0&&($=!0),H!==null&&a.update(H,34963),$&&(y(A,P,I,C),H!==null&&t.bindBuffer(34963,a.get(H).buffer))}function h(){return b.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function n(A){return b.isWebGL2?t.bindVertexArray(A):s.bindVertexArrayOES(A)}function g(A){return b.isWebGL2?t.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function u(A,P,I){let C=I.wireframe===!0,H=c[A.id];H===void 0&&(H={},c[A.id]=H);let $=H[P.id];$===void 0&&($={},H[P.id]=$);let ce=$[C];return ce===void 0&&(ce=m(h()),$[C]=ce),ce}function m(A){let P=[],I=[],C=[];for(let H=0;H<i;H++)P[H]=0,I[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:C,object:A,attributes:{},index:null}}function v(A,P){let I=f.attributes,C=A.attributes,H=0;for(let $ in C){let ce=I[$],he=C[$];if(ce===void 0||ce.attribute!==he||ce.data!==he.data)return!0;H++}return f.attributesNum!==H||f.index!==P}function r(A,P){let I={},C=A.attributes,H=0;for(let $ in C){let ce=C[$],he={};he.attribute=ce,ce.data&&(he.data=ce.data),I[$]=he,H++}f.attributes=I,f.attributesNum=H,f.index=P}function l(){let A=f.newAttributes;for(let P=0,I=A.length;P<I;P++)A[P]=0}function k(A){j(A,0)}function j(A,P){let I=f.newAttributes,C=f.enabledAttributes,H=f.attributeDivisors;I[A]=1,C[A]===0&&(t.enableVertexAttribArray(A),C[A]=1),H[A]!==P&&((b.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[b.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,P),H[A]=P)}function z(){let A=f.newAttributes,P=f.enabledAttributes;for(let I=0,C=P.length;I<C;I++)P[I]!==A[I]&&(t.disableVertexAttribArray(I),P[I]=0)}function w(A,P,I,C,H,$){b.isWebGL2===!0&&(I===5124||I===5125)?t.vertexAttribIPointer(A,P,I,H,$):t.vertexAttribPointer(A,P,I,C,H,$)}function y(A,P,I,C){if(b.isWebGL2===!1&&(A.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;l();let H=C.attributes,$=I.getAttributes(),ce=P.defaultAttributeValues;for(let he in $){let ie=$[he];if(ie.location>=0){let Se=H[he];if(Se===void 0&&(he==="instanceMatrix"&&A.instanceMatrix&&(Se=A.instanceMatrix),he==="instanceColor"&&A.instanceColor&&(Se=A.instanceColor)),Se!==void 0){let Y=Se.normalized,ae=Se.itemSize,re=a.get(Se);if(re===void 0)continue;let N=re.buffer,Ke=re.type,Ge=re.bytesPerElement;if(Se.isInterleavedBufferAttribute){let fe=Se.data,le=fe.stride,we=Se.offset;if(fe&&fe.isInstancedInterleavedBuffer){for(let B=0;B<ie.locationSize;B++)j(ie.location+B,fe.meshPerAttribute);A.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let B=0;B<ie.locationSize;B++)k(ie.location+B);t.bindBuffer(34962,N);for(let B=0;B<ie.locationSize;B++)w(ie.location+B,ae/ie.locationSize,Ke,Y,le*Ge,(we+ae/ie.locationSize*B)*Ge)}else{if(Se.isInstancedBufferAttribute){for(let fe=0;fe<ie.locationSize;fe++)j(ie.location+fe,Se.meshPerAttribute);A.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let fe=0;fe<ie.locationSize;fe++)k(ie.location+fe);t.bindBuffer(34962,N);for(let fe=0;fe<ie.locationSize;fe++)w(ie.location+fe,ae/ie.locationSize,Ke,Y,ae*Ge,ae/ie.locationSize*fe*Ge)}}else if(ce!==void 0){let Y=ce[he];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(ie.location,Y);break;case 3:t.vertexAttrib3fv(ie.location,Y);break;case 4:t.vertexAttrib4fv(ie.location,Y);break;default:t.vertexAttrib1fv(ie.location,Y)}}}}z()}function L(){x();for(let A in c){let P=c[A];for(let I in P){let C=P[I];for(let H in C)g(C[H].object),delete C[H];delete P[I]}delete c[A]}}function J(A){if(c[A.id]===void 0)return;let P=c[A.id];for(let I in P){let C=P[I];for(let H in C)g(C[H].object),delete C[H];delete P[I]}delete c[A.id]}function F(A){for(let P in c){let I=c[P];if(I[A.id]===void 0)continue;let C=I[A.id];for(let H in C)g(C[H].object),delete C[H];delete I[A.id]}}function x(){te(),f!==d&&(f=d,n(f.object))}function te(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:p,reset:x,resetDefaultState:te,dispose:L,releaseStatesOfGeometry:J,releaseStatesOfProgram:F,initAttributes:l,enableAttribute:k,disableUnusedAttributes:z}}function x3(t,e,a,b){let i=b.isWebGL2,s;function o(f){s=f}function c(f,p){t.drawArrays(s,f,p),a.update(p,s,1)}function d(f,p,h){if(h===0)return;let n,g;if(i)n=t,g="drawArraysInstanced";else if(n=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",n===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[g](s,f,p,h),a.update(p,s,h)}this.setMode=o,this.render=c,this.renderInstances=d}function S3(t,e,a){let b;function i(){if(b!==void 0)return b;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");b=t.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else b=0;return b}function s(y){if(y==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext,c=a.precision!==void 0?a.precision:"highp",d=s(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=o||e.has("WEBGL_draw_buffers"),p=a.logarithmicDepthBuffer===!0,h=t.getParameter(34930),n=t.getParameter(35660),g=t.getParameter(3379),u=t.getParameter(34076),m=t.getParameter(34921),v=t.getParameter(36347),r=t.getParameter(36348),l=t.getParameter(36349),k=n>0,j=o||e.has("OES_texture_float"),z=k&&j,w=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:f,getMaxAnisotropy:i,getMaxPrecision:s,precision:c,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:n,maxTextureSize:g,maxCubemapSize:u,maxAttributes:m,maxVertexUniforms:v,maxVaryings:r,maxFragmentUniforms:l,vertexTextures:k,floatFragmentTextures:j,floatVertexTextures:z,maxSamples:w}}function w3(t){let e=this,a=null,b=0,i=!1,s=!1,o=new Wa,c=new da,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(h,n,g){let u=h.length!==0||n||b!==0||i;return i=n,a=p(h,g,0),b=h.length,u},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1,f()},this.setState=function(h,n,g){let u=h.clippingPlanes,m=h.clipIntersection,v=h.clipShadows,r=t.get(h);if(!i||u===null||u.length===0||s&&!v)s?p(null):f();else{let l=s?0:b,k=l*4,j=r.clippingState||null;d.value=j,j=p(u,n,k,g);for(let z=0;z!==k;++z)j[z]=a[z];r.clippingState=j,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=l}};function f(){d.value!==a&&(d.value=a,d.needsUpdate=b>0),e.numPlanes=b,e.numIntersection=0}function p(h,n,g,u){let m=h!==null?h.length:0,v=null;if(m!==0){if(v=d.value,u!==!0||v===null){let r=g+m*4,l=n.matrixWorldInverse;c.getNormalMatrix(l),(v===null||v.length<r)&&(v=new Float32Array(r));for(let k=0,j=g;k!==m;++k,j+=4)o.copy(h[k]).applyMatrix4(l,c),o.normal.toArray(v,j),v[j+3]=o.constant}d.value=v,d.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}}function M3(t){let e=new WeakMap;function a(o,c){return c===o0?o.mapping=bi:c===c0&&(o.mapping=ti),o}function b(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let c=o.mapping;if(c===o0||c===c0)if(e.has(o)){let d=e.get(o).texture;return a(d,o.mapping)}else{let d=o.image;if(d&&d.height>0){let f=t.getRenderTarget(),p=new N0(d.height/2);return p.fromEquirectangularTexture(t,o),e.set(o,p),t.setRenderTarget(f),o.addEventListener("dispose",i),a(p.texture,o.mapping)}else return null}}return o}function i(o){let c=o.target;c.removeEventListener("dispose",i);let d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function s(){e=new WeakMap}return{get:b,dispose:s}}var zt=class extends ns{constructor(e=-1,a=1,b=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=b,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,b,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=b,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),b=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=b-e,o=b+e,c=i+a,d=i-a;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}};zt.prototype.isOrthographicCamera=!0;var cb=class extends Kb{constructor(e){super(e);this.type="RawShaderMaterial"}};cb.prototype.isRawShaderMaterial=!0;var Gt=4,Vb=8,Xa=Math.pow(2,Vb),qo=[.125,.215,.35,.446,.526,.582],Xo=Vb-Gt+1+qo.length,kt=20,zb={[ja]:0,[ab]:1,[r0]:2,[ko]:3,[_o]:4,[xo]:5,[g0]:6},U0=new zt,{_lodPlanes:ri,_sizeLods:Yo,_sigmas:ls}=E3(),Jo=new ge,W0=null,Nb=(1+Math.sqrt(5))/2,_t=1/Nb,Zo=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Nb,_t),new V(0,Nb,-_t),new V(_t,0,Nb),new V(-_t,0,Nb),new V(Nb,_t,0),new V(-Nb,_t,0)],$o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=A3(kt),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,b=.1,i=100){W0=this._renderer.getRenderTarget();let s=this._allocateTargets();return this._sceneToCubeUV(e,b,i,s),a>0&&this._blur(s,0,0,a),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=ac(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=ec(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<ri.length;e++)ri[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(W0),e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e){W0=this._renderer.getRenderTarget();let a=this._allocateTargets(e);return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(e){let a={magFilter:ca,minFilter:ca,generateMipmaps:!1,type:La,format:I6,encoding:T3(e)?e.encoding:r0,depthBuffer:!1},b=Qo(a);return b.depthBuffer=!e,this._pingPongRenderTarget=Qo(a),b}_compileMaterial(e){let a=new ma(ri[0],e);this._renderer.compile(a,U0)}_sceneToCubeUV(e,a,b,i){let s=90,o=1,c=new va(s,o,a,b),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,n=p.outputEncoding,g=p.toneMapping;p.getClearColor(Jo),p.toneMapping=Cb,p.outputEncoding=ja,p.autoClear=!1;let u=new bs({name:"PMREM.Background",side:ta,depthWrite:!1,depthTest:!1}),m=new ma(new mt,u),v=!1,r=e.background;r?r.isColor&&(u.color.copy(r),e.background=null,v=!0):(u.color.copy(Jo),v=!0);for(let l=0;l<6;l++){let k=l%3;k==0?(c.up.set(0,d[l],0),c.lookAt(f[l],0,0)):k==1?(c.up.set(0,0,d[l]),c.lookAt(0,f[l],0)):(c.up.set(0,d[l],0),c.lookAt(0,0,f[l])),us(i,k*Xa,l>2?Xa:0,Xa,Xa),p.setRenderTarget(i),v&&p.render(m,c),p.render(e,c)}m.geometry.dispose(),m.material.dispose(),p.toneMapping=g,p.outputEncoding=n,p.autoClear=h,e.background=r}_setEncoding(e,a){this._renderer.capabilities.isWebGL2===!0&&a.format===ba&&a.type===La&&a.encoding===ab?e.value=zb[ja]:e.value=zb[a.encoding]}_textureToCubeUV(e,a){let b=this._renderer,i=e.mapping===bi||e.mapping===ti;i?this._cubemapShader==null&&(this._cubemapShader=ac()):this._equirectShader==null&&(this._equirectShader=ec());let s=i?this._cubemapShader:this._equirectShader,o=new ma(ri[0],s),c=s.uniforms;c.envMap.value=e,i||c.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(c.inputEncoding,e),this._setEncoding(c.outputEncoding,a.texture),us(a,0,0,3*Xa,2*Xa),b.setRenderTarget(a),b.render(o,U0)}_applyPMREM(e){let a=this._renderer,b=a.autoClear;a.autoClear=!1;for(let i=1;i<Xo;i++){let s=Math.sqrt(ls[i]*ls[i]-ls[i-1]*ls[i-1]),o=Zo[(i-1)%Zo.length];this._blur(e,i-1,i,s,o)}a.autoClear=b}_blur(e,a,b,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,a,b,i,"latitudinal",s),this._halfBlur(o,e,b,b,i,"longitudinal",s)}_halfBlur(e,a,b,i,s,o,c){let d=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,h=new ma(ri[i],f),n=f.uniforms,g=Yo[b]-1,u=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*kt-1),m=s/u,v=isFinite(s)?1+Math.floor(p*m):kt;v>kt&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${kt}`);let r=[],l=0;for(let w=0;w<kt;++w){let y=w/m,L=Math.exp(-y*y/2);r.push(L),w==0?l+=L:w<v&&(l+=2*L)}for(let w=0;w<r.length;w++)r[w]=r[w]/l;n.envMap.value=e.texture,n.samples.value=v,n.weights.value=r,n.latitudinal.value=o==="latitudinal",c&&(n.poleAxis.value=c),n.dTheta.value=u,n.mipInt.value=Vb-b,this._setEncoding(n.inputEncoding,e.texture),this._setEncoding(n.outputEncoding,e.texture);let k=Yo[i],j=3*Math.max(0,Xa-2*k),z=(i===0?0:2*Xa)+2*k*(i>Vb-Gt?i-Vb+Gt:0);us(a,j,z,3*k,2*k),d.setRenderTarget(a),d.render(h,U0)}};function T3(t){return t===void 0||t.type!==La?!1:t.encoding===ja||t.encoding===ab||t.encoding===g0}function E3(){let t=[],e=[],a=[],b=Vb;for(let i=0;i<Xo;i++){let s=Math.pow(2,b);e.push(s);let o=1/s;i>Vb-Gt?o=qo[i-Vb+Gt-1]:i==0&&(o=0),a.push(o);let c=1/(s-1),d=-c/2,f=1+c/2,p=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,n=6,g=3,u=2,m=1,v=new Float32Array(g*n*h),r=new Float32Array(u*n*h),l=new Float32Array(m*n*h);for(let j=0;j<h;j++){let z=j%3*2/3-1,w=j>2?0:-1,y=[z,w,0,z+2/3,w,0,z+2/3,w+1,0,z,w,0,z+2/3,w+1,0,z,w+1,0];v.set(y,g*n*j),r.set(p,u*n*j);let L=[j,j,j,j,j,j];l.set(L,m*n*j)}let k=new Be;k.setAttribute("position",new We(v,g)),k.setAttribute("uv",new We(r,u)),k.setAttribute("faceIndex",new We(l,m)),t.push(k),b>Gt&&b--}return{_lodPlanes:t,_sizeLods:e,_sigmas:a}}function Qo(t){let e=new ka(3*Xa,3*Xa,t);return e.texture.mapping=Ii,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function us(t,e,a,b,i){t.viewport.set(e,a,b,i),t.scissor.set(e,a,b,i)}function A3(t){let e=new Float32Array(t),a=new V(0,1,0);return new cb({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a},inputEncoding:{value:zb[ja]},outputEncoding:{value:zb[ja]}},vertexShader:q0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${X0()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:gb,depthTest:!1,depthWrite:!1})}function ec(){let t=new X(1,1);return new cb({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:t},inputEncoding:{value:zb[ja]},outputEncoding:{value:zb[ja]}},vertexShader:q0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${X0()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:gb,depthTest:!1,depthWrite:!1})}function ac(){return new cb({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:zb[ja]},outputEncoding:{value:zb[ja]}},vertexShader:q0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${X0()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:gb,depthTest:!1,depthWrite:!1})}function q0(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X0(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function L3(t){let e=new WeakMap,a=null;function b(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){let d=c.mapping,f=d===o0||d===c0,p=d===bi||d===ti;if(f||p){if(e.has(c))return e.get(c).texture;{let h=c.image;if(f&&h&&h.height>0||p&&h&&i(h)){let n=t.getRenderTarget();a===null&&(a=new $o(t));let g=f?a.fromEquirectangular(c):a.fromCubemap(c);return e.set(c,g),t.setRenderTarget(n),c.addEventListener("dispose",s),g.texture}else return null}}}return c}function i(c){let d=0,f=6;for(let p=0;p<f;p++)c[p]!==void 0&&d++;return d===f}function s(c){let d=c.target;d.removeEventListener("dispose",s);let f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function o(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:b,dispose:o}}function P3(t){let e={};function a(b){if(e[b]!==void 0)return e[b];let i;switch(b){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(b)}return e[b]=i,i}return{has:function(b){return a(b)!==null},init:function(b){b.isWebGL2?a("EXT_color_buffer_float"):(a("WEBGL_depth_texture"),a("OES_texture_float"),a("OES_texture_half_float"),a("OES_texture_half_float_linear"),a("OES_standard_derivatives"),a("OES_element_index_uint"),a("OES_vertex_array_object"),a("ANGLE_instanced_arrays")),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float")},get:function(b){let i=a(b);return i===null&&console.warn("THREE.WebGLRenderer: "+b+" extension not supported."),i}}}function C3(t,e,a,b){let i={},s=new WeakMap;function o(h){let n=h.target;n.index!==null&&e.remove(n.index);for(let u in n.attributes)e.remove(n.attributes[u]);n.removeEventListener("dispose",o),delete i[n.id];let g=s.get(n);g&&(e.remove(g),s.delete(n)),b.releaseStatesOfGeometry(n),n.isInstancedBufferGeometry===!0&&delete n._maxInstanceCount,a.memory.geometries--}function c(h,n){return i[n.id]===!0||(n.addEventListener("dispose",o),i[n.id]=!0,a.memory.geometries++),n}function d(h){let n=h.attributes;for(let u in n)e.update(n[u],34962);let g=h.morphAttributes;for(let u in g){let m=g[u];for(let v=0,r=m.length;v<r;v++)e.update(m[v],34962)}}function f(h){let n=[],g=h.index,u=h.attributes.position,m=0;if(g!==null){let l=g.array;m=g.version;for(let k=0,j=l.length;k<j;k+=3){let z=l[k+0],w=l[k+1],y=l[k+2];n.push(z,w,w,y,y,z)}}else{let l=u.array;m=u.version;for(let k=0,j=l.length/3-1;k<j;k+=3){let z=k+0,w=k+1,y=k+2;n.push(z,w,w,y,y,z)}}let v=new(wo(n)>65535?C0:P0)(n,1);v.version=m;let r=s.get(h);r&&e.remove(r),s.set(h,v)}function p(h){let n=s.get(h);if(n){let g=h.index;g!==null&&n.version<g.version&&f(h)}else f(h);return s.get(h)}return{get:c,update:d,getWireframeAttribute:p}}function R3(t,e,a,b){let i=b.isWebGL2,s;function o(n){s=n}let c,d;function f(n){c=n.type,d=n.bytesPerElement}function p(n,g){t.drawElements(s,g,c,n*d),a.update(g,s,1)}function h(n,g,u){if(u===0)return;let m,v;if(i)m=t,v="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,g,c,n*d,u),a.update(g,s,u)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h}function H3(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function b(s,o,c){switch(a.calls++,o){case 4:a.triangles+=c*(s/3);break;case 1:a.lines+=c*(s/2);break;case 3:a.lines+=c*(s-1);break;case 2:a.lines+=c*s;break;case 0:a.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){a.frame++,a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:i,update:b}}var ms=class extends fa{constructor(e=null,a=1,b=1,i=1){super(null);this.image={data:e,width:a,height:b,depth:i},this.magFilter=ca,this.minFilter=ca,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};ms.prototype.isDataTexture2DArray=!0;function F3(t,e){return t[0]-e[0]}function I3(t,e){return Math.abs(e[1])-Math.abs(t[1])}function bc(t,e){let a=1,b=e.isInterleavedBufferAttribute?e.data.array:e.array;b instanceof Int8Array?a=127:b instanceof Int16Array?a=32767:b instanceof Int32Array?a=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",b),t.divideScalar(a)}function D3(t,e,a){let b={},i=new Float32Array(8),s=new WeakMap,o=new V,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function d(f,p,h,n){let g=f.morphTargetInfluences;if(e.isWebGL2===!0){let u=p.morphAttributes.position.length,m=s.get(p);if(m===void 0||m.count!==u){m!==void 0&&m.texture.dispose();let l=p.morphAttributes.normal!==void 0,k=p.morphAttributes.position,j=p.morphAttributes.normal||[],z=p.attributes.position.count,w=l===!0?2:1,y=z*w,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let J=new Float32Array(y*L*4*u),F=new ms(J,y,L,u);F.format=ba,F.type=Ba;let x=w*4;for(let te=0;te<u;te++){let A=k[te],P=j[te],I=y*L*4*te;for(let C=0;C<A.count;C++){o.fromBufferAttribute(A,C),A.normalized===!0&&bc(o,A);let H=C*x;J[I+H+0]=o.x,J[I+H+1]=o.y,J[I+H+2]=o.z,J[I+H+3]=0,l===!0&&(o.fromBufferAttribute(P,C),P.normalized===!0&&bc(o,P),J[I+H+4]=o.x,J[I+H+5]=o.y,J[I+H+6]=o.z,J[I+H+7]=0)}}m={count:u,texture:F,size:new X(y,L)},s.set(p,m)}let v=0;for(let l=0;l<g.length;l++)v+=g[l];let r=p.morphTargetsRelative?1:1-v;n.getUniforms().setValue(t,"morphTargetBaseInfluence",r),n.getUniforms().setValue(t,"morphTargetInfluences",g),n.getUniforms().setValue(t,"morphTargetsTexture",m.texture,a),n.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{let u=g===void 0?0:g.length,m=b[p.id];if(m===void 0||m.length!==u){m=[];for(let j=0;j<u;j++)m[j]=[j,0];b[p.id]=m}for(let j=0;j<u;j++){let z=m[j];z[0]=j,z[1]=g[j]}m.sort(I3);for(let j=0;j<8;j++)j<u&&m[j][1]?(c[j][0]=m[j][0],c[j][1]=m[j][1]):(c[j][0]=Number.MAX_SAFE_INTEGER,c[j][1]=0);c.sort(F3);let v=p.morphAttributes.position,r=p.morphAttributes.normal,l=0;for(let j=0;j<8;j++){let z=c[j],w=z[0],y=z[1];w!==Number.MAX_SAFE_INTEGER&&y?(v&&p.getAttribute("morphTarget"+j)!==v[w]&&p.setAttribute("morphTarget"+j,v[w]),r&&p.getAttribute("morphNormal"+j)!==r[w]&&p.setAttribute("morphNormal"+j,r[w]),i[j]=y,l+=y):(v&&p.hasAttribute("morphTarget"+j)===!0&&p.deleteAttribute("morphTarget"+j),r&&p.hasAttribute("morphNormal"+j)===!0&&p.deleteAttribute("morphNormal"+j),i[j]=0)}let k=p.morphTargetsRelative?1:1-l;n.getUniforms().setValue(t,"morphTargetBaseInfluence",k),n.getUniforms().setValue(t,"morphTargetInfluences",i)}}return{update:d}}function O3(t,e,a,b){let i=new WeakMap;function s(d){let f=b.render.frame,p=d.geometry,h=e.get(d,p);return i.get(h)!==f&&(e.update(h),i.set(h,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),a.update(d.instanceMatrix,34962),d.instanceColor!==null&&a.update(d.instanceColor,34962)),h}function o(){i=new WeakMap}function c(d){let f=d.target;f.removeEventListener("dispose",c),a.remove(f.instanceMatrix),f.instanceColor!==null&&a.remove(f.instanceColor)}return{update:s,dispose:o}}var Y0=class extends fa{constructor(e=null,a=1,b=1,i=1){super(null);this.image={data:e,width:a,height:b,depth:i},this.magFilter=ca,this.minFilter=ca,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Y0.prototype.isDataTexture3D=!0;var tc=new fa,N3=new ms,B3=new Y0,ic=new ni,sc=[],oc=[],cc=new Float32Array(16),dc=new Float32Array(9),fc=new Float32Array(4);function xt(t,e,a){let b=t[0];if(b<=0||b>0)return t;let i=e*a,s=sc[i];if(s===void 0&&(s=new Float32Array(i),sc[i]=s),e!==0){b.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=a,t[o].toArray(s,c)}return s}function za(t,e){if(t.length!==e.length)return!1;for(let a=0,b=t.length;a<b;a++)if(t[a]!==e[a])return!1;return!0}function Ka(t,e){for(let a=0,b=e.length;a<b;a++)t[a]=e[a]}function pc(t,e){let a=oc[e];a===void 0&&(a=new Int32Array(e),oc[e]=a);for(let b=0;b!==e;++b)a[b]=t.allocateTextureUnit();return a}function U3(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function W3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(za(a,e))return;t.uniform2fv(this.addr,e),Ka(a,e)}}function q3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(za(a,e))return;t.uniform3fv(this.addr,e),Ka(a,e)}}function X3(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(za(a,e))return;t.uniform4fv(this.addr,e),Ka(a,e)}}function Y3(t,e){let a=this.cache,b=e.elements;if(b===void 0){if(za(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ka(a,e)}else{if(za(a,b))return;fc.set(b),t.uniformMatrix2fv(this.addr,!1,fc),Ka(a,b)}}function J3(t,e){let a=this.cache,b=e.elements;if(b===void 0){if(za(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ka(a,e)}else{if(za(a,b))return;dc.set(b),t.uniformMatrix3fv(this.addr,!1,dc),Ka(a,b)}}function Z3(t,e){let a=this.cache,b=e.elements;if(b===void 0){if(za(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ka(a,e)}else{if(za(a,b))return;cc.set(b),t.uniformMatrix4fv(this.addr,!1,cc),Ka(a,b)}}function $3(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function Q3(t,e){let a=this.cache;za(a,e)||(t.uniform2iv(this.addr,e),Ka(a,e))}function eh(t,e){let a=this.cache;za(a,e)||(t.uniform3iv(this.addr,e),Ka(a,e))}function ah(t,e){let a=this.cache;za(a,e)||(t.uniform4iv(this.addr,e),Ka(a,e))}function bh(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function th(t,e){let a=this.cache;za(a,e)||(t.uniform2uiv(this.addr,e),Ka(a,e))}function ih(t,e){let a=this.cache;za(a,e)||(t.uniform3uiv(this.addr,e),Ka(a,e))}function sh(t,e){let a=this.cache;za(a,e)||(t.uniform4uiv(this.addr,e),Ka(a,e))}function oh(t,e,a){let b=this.cache,i=a.allocateTextureUnit();b[0]!==i&&(t.uniform1i(this.addr,i),b[0]=i),a.safeSetTexture2D(e||tc,i)}function ch(t,e,a){let b=this.cache,i=a.allocateTextureUnit();b[0]!==i&&(t.uniform1i(this.addr,i),b[0]=i),a.setTexture3D(e||B3,i)}function dh(t,e,a){let b=this.cache,i=a.allocateTextureUnit();b[0]!==i&&(t.uniform1i(this.addr,i),b[0]=i),a.safeSetTextureCube(e||ic,i)}function fh(t,e,a){let b=this.cache,i=a.allocateTextureUnit();b[0]!==i&&(t.uniform1i(this.addr,i),b[0]=i),a.setTexture2DArray(e||N3,i)}function ph(t){switch(t){case 5126:return U3;case 35664:return W3;case 35665:return q3;case 35666:return X3;case 35674:return Y3;case 35675:return J3;case 35676:return Z3;case 5124:case 35670:return $3;case 35667:case 35671:return Q3;case 35668:case 35672:return eh;case 35669:case 35673:return ah;case 5125:return bh;case 36294:return th;case 36295:return ih;case 36296:return sh;case 35678:case 36198:case 36298:case 36306:case 35682:return oh;case 35679:case 36299:case 36307:return ch;case 35680:case 36300:case 36308:case 36293:return dh;case 36289:case 36303:case 36311:case 36292:return fh}}function hh(t,e){t.uniform1fv(this.addr,e)}function nh(t,e){let a=xt(e,this.size,2);t.uniform2fv(this.addr,a)}function gh(t,e){let a=xt(e,this.size,3);t.uniform3fv(this.addr,a)}function rh(t,e){let a=xt(e,this.size,4);t.uniform4fv(this.addr,a)}function lh(t,e){let a=xt(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function uh(t,e){let a=xt(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function mh(t,e){let a=xt(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function vh(t,e){t.uniform1iv(this.addr,e)}function jh(t,e){t.uniform2iv(this.addr,e)}function yh(t,e){t.uniform3iv(this.addr,e)}function Kh(t,e){t.uniform4iv(this.addr,e)}function Vh(t,e){t.uniform1uiv(this.addr,e)}function zh(t,e){t.uniform2uiv(this.addr,e)}function Gh(t,e){t.uniform3uiv(this.addr,e)}function kh(t,e){t.uniform4uiv(this.addr,e)}function _h(t,e,a){let b=e.length,i=pc(a,b);t.uniform1iv(this.addr,i);for(let s=0;s!==b;++s)a.safeSetTexture2D(e[s]||tc,i[s])}function xh(t,e,a){let b=e.length,i=pc(a,b);t.uniform1iv(this.addr,i);for(let s=0;s!==b;++s)a.safeSetTextureCube(e[s]||ic,i[s])}function Sh(t){switch(t){case 5126:return hh;case 35664:return nh;case 35665:return gh;case 35666:return rh;case 35674:return lh;case 35675:return uh;case 35676:return mh;case 5124:case 35670:return vh;case 35667:case 35671:return jh;case 35668:case 35672:return yh;case 35669:case 35673:return Kh;case 5125:return Vh;case 36294:return zh;case 36295:return Gh;case 36296:return kh;case 35678:case 36198:case 36298:case 36306:case 35682:return _h;case 35680:case 36300:case 36308:case 36293:return xh}}function wh(t,e,a){this.id=t,this.addr=a,this.cache=[],this.setValue=ph(e.type)}function hc(t,e,a){this.id=t,this.addr=a,this.cache=[],this.size=e.size,this.setValue=Sh(e.type)}hc.prototype.updateCache=function(t){let e=this.cache;t instanceof Float32Array&&e.length!==t.length&&(this.cache=new Float32Array(t.length)),Ka(e,t)};function nc(t){this.id=t,this.seq=[],this.map={}}nc.prototype.setValue=function(t,e,a){let b=this.seq;for(let i=0,s=b.length;i!==s;++i){let o=b[i];o.setValue(t,e[o.id],a)}};var J0=/(\w+)(\])?(\[|\.)?/g;function gc(t,e){t.seq.push(e),t.map[e.id]=e}function Mh(t,e,a){let b=t.name,i=b.length;for(J0.lastIndex=0;;){let s=J0.exec(b),o=J0.lastIndex,c=s[1],d=s[2]==="]",f=s[3];if(d&&(c=c|0),f===void 0||f==="["&&o+2===i){gc(a,f===void 0?new wh(c,t,e):new hc(c,t,e));break}else{let h=a.map[c];h===void 0&&(h=new nc(c),gc(a,h)),a=h}}}function Gb(t,e){this.seq=[],this.map={};let a=t.getProgramParameter(e,35718);for(let b=0;b<a;++b){let i=t.getActiveUniform(e,b),s=t.getUniformLocation(e,i.name);Mh(i,s,this)}}Gb.prototype.setValue=function(t,e,a,b){let i=this.map[e];i!==void 0&&i.setValue(t,a,b)};Gb.prototype.setOptional=function(t,e,a){let b=e[a];b!==void 0&&this.setValue(t,a,b)};Gb.upload=function(t,e,a,b){for(let i=0,s=e.length;i!==s;++i){let o=e[i],c=a[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,b)}};Gb.seqWithValue=function(t,e){let a=[];for(let b=0,i=t.length;b!==i;++b){let s=t[b];s.id in e&&a.push(s)}return a};function rc(t,e,a){let b=t.createShader(e);return t.shaderSource(b,a),t.compileShader(b),b}var Eh=0;function Th(t){let e=t.split(`
`);for(let a=0;a<e.length;a++)e[a]=a+1+": "+e[a];return e.join(`
`)}function lc(t){switch(t){case ja:return["Linear","( value )"];case ab:return["sRGB","( value )"];case r0:return["RGBE","( value )"];case ko:return["RGBM","( value, 7.0 )"];case _o:return["RGBM","( value, 16.0 )"];case xo:return["RGBD","( value, 256.0 )"];case g0:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Sf:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function uc(t,e,a){let b=t.getShaderParameter(e,35713),i=t.getShaderInfoLog(e).trim();return b&&i===""?"":a.toUpperCase()+`

`+i+`

`+Th(t.getShaderSource(e))}function Bb(t,e){let a=lc(e);return"vec4 "+t+"( vec4 value ) { return "+a[0]+"ToLinear"+a[1]+"; }"}function Ah(t,e){let a=lc(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+a[0]+a[1]+"; }"}function Lh(t,e){let a;switch(e){case k6:a="Linear";break;case _6:a="Reinhard";break;case x6:a="OptimizedCineon";break;case S6:a="ACESFilmic";break;case w6:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}function Ph(t){return[t.extensionDerivatives||t.envMapCubeUV||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function Ch(t){let e=[];for(let a in t){let b=t[a];b!==!1&&e.push("#define "+a+" "+b)}return e.join(`
`)}function Rh(t,e){let a={},b=t.getProgramParameter(e,35721);for(let i=0;i<b;i++){let s=t.getActiveAttrib(e,i),o=s.name,c=1;s.type===35674&&(c=2),s.type===35675&&(c=3),s.type===35676&&(c=4),a[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:c}}return a}function li(t){return t!==""}function mc(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Z0(t){return t.replace(Hh,Fh)}function Fh(t,e){let a=Le[e];if(a===void 0)throw new Error("Can not resolve #include <"+e+">");return Z0(a)}var Ih=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Dh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(t){return t.replace(Dh,jc).replace(Ih,Oh)}function Oh(t,e,a,b){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),jc(t,e,a,b)}function jc(t,e,a,b){let i="";for(let s=parseInt(e);s<parseInt(a);s++)i+=b.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Kc(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nh(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bo?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===t6?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$t&&(e="SHADOWMAP_TYPE_VSM"),e}function Bh(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bi:case ti:e="ENVMAP_TYPE_CUBE";break;case Ii:case d0:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uh(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ti:case d0:e="ENVMAP_MODE_REFRACTION";break}return e}function Wh(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fi:e="ENVMAP_BLENDING_MULTIPLY";break;case z6:e="ENVMAP_BLENDING_MIX";break;case G6:e="ENVMAP_BLENDING_ADD";break}return e}function qh(t,e,a,b){let i=t.getContext(),s=a.defines,o=a.vertexShader,c=a.fragmentShader,d=Nh(a),f=Bh(a),p=Uh(a),h=Wh(a),n=t.gammaFactor>0?t.gammaFactor:1,g=a.isWebGL2?"":Ph(a),u=Ch(s),m=i.createProgram(),v,r,l=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(v=[u].filter(li).join(`
`),v.length>0&&(v+=`
`),r=[g,u].filter(li).join(`
`),r.length>0&&(r+=`
`)):(v=[Kc(a),"#define SHADER_NAME "+a.shaderName,u,a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+n,"#define MAX_BONES "+a.maxBones,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+p:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMap&&a.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",a.normalMap&&a.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.displacementMap&&a.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",a.specularColorMap?"#define USE_SPECULARCOLORMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEENCOLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",a.vertexTangents?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUvs?"#define USE_UV":"",a.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.useVertexTexture?"#define BONE_TEXTURE":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphTargets&&a.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",a.morphTargets&&a.isWebGL2?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+d:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.logarithmicDepthBuffer&&a.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),r=[g,Kc(a),"#define SHADER_NAME "+a.shaderName,u,"#define GAMMA_FACTOR "+n,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+f:"",a.envMap?"#define "+p:"",a.envMap?"#define "+h:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMap&&a.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",a.normalMap&&a.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",a.specularColorMap?"#define USE_SPECULARCOLORMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEENCOLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUvs?"#define USE_UV":"",a.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+d:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.logarithmicDepthBuffer&&a.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(a.extensionShaderTextureLOD||a.envMap)&&a.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==Cb?"#define TONE_MAPPING":"",a.toneMapping!==Cb?Le.tonemapping_pars_fragment:"",a.toneMapping!==Cb?Lh("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.format===at?"#define OPAQUE":"",Le.encodings_pars_fragment,a.map?Bb("mapTexelToLinear",a.mapEncoding):"",a.matcap?Bb("matcapTexelToLinear",a.matcapEncoding):"",a.envMap?Bb("envMapTexelToLinear",a.envMapEncoding):"",a.emissiveMap?Bb("emissiveMapTexelToLinear",a.emissiveMapEncoding):"",a.specularColorMap?Bb("specularColorMapTexelToLinear",a.specularColorMapEncoding):"",a.sheenColorMap?Bb("sheenColorMapTexelToLinear",a.sheenColorMapEncoding):"",a.lightMap?Bb("lightMapTexelToLinear",a.lightMapEncoding):"",Ah("linearToOutputTexel",a.outputEncoding),a.depthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(li).join(`
`)),o=Z0(o),o=mc(o,a),o=vc(o,a),c=Z0(c),c=mc(c,a),c=vc(c,a),o=yc(o),c=yc(c),a.isWebGL2&&a.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,r=["#define varying in",a.glslVersion===ot?"":"out highp vec4 pc_fragColor;",a.glslVersion===ot?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);let k=l+v+o,j=l+r+c,z=rc(i,35633,k),w=rc(i,35632,j);if(i.attachShader(m,z),i.attachShader(m,w),a.index0AttributeName!==void 0?i.bindAttribLocation(m,0,a.index0AttributeName):a.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),t.debug.checkShaderErrors){let J=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(z).trim(),x=i.getShaderInfoLog(w).trim(),te=!0,A=!0;if(i.getProgramParameter(m,35714)===!1){te=!1;let P=uc(i,z,"vertex"),I=uc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+J+`
`+P+`
`+I)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(F===""||x==="")&&(A=!1);A&&(this.diagnostics={runnable:te,programLog:J,vertexShader:{log:F,prefix:v},fragmentShader:{log:x,prefix:r}})}i.deleteShader(z),i.deleteShader(w);let y;this.getUniforms=function(){return y===void 0&&(y=new Gb(i,m)),y};let L;return this.getAttributes=function(){return L===void 0&&(L=Rh(i,m)),L},this.destroy=function(){b.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=a.shaderName,this.id=Eh++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=z,this.fragmentShader=w,this}function Xh(t,e,a,b,i,s,o){let c=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,p=i.floatVertexTextures,h=i.maxVertexUniforms,n=i.vertexTextures,g=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function v(y){let J=y.skeleton.bones;if(p)return 1024;{let x=Math.floor((h-20)/4),te=Math.min(x,J.length);return te<J.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+J.length+" bones. This GPU supports "+te+"."),0):te}}function r(y){let L;return y&&y.isTexture?L=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),L=y.texture.encoding):L=ja,d&&y&&y.isTexture&&y.format===ba&&y.type===La&&y.encoding===ab&&(L=ja),L}function l(y,L,J,F,x){let te=F.fog,A=y.isMeshStandardMaterial?F.environment:null,P=(y.isMeshStandardMaterial?a:e).get(y.envMap||A),I=u[y.type],C=x.isSkinnedMesh?v(x):0;y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let H,$;if(I){let Y=qa[I];H=Y.vertexShader,$=Y.fragmentShader}else H=y.vertexShader,$=y.fragmentShader;let ce=t.getRenderTarget(),he=y.alphaTest>0,ie=y.clearcoat>0;return{isWebGL2:d,shaderID:I,shaderName:y.type,vertexShader:H,fragmentShader:$,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:x.isInstancedMesh===!0,instancingColor:x.isInstancedMesh===!0&&x.instanceColor!==null,supportsVertexTextures:n,outputEncoding:ce!==null?r(ce.texture):t.outputEncoding,map:!!y.map,mapEncoding:r(y.map),matcap:!!y.matcap,matcapEncoding:r(y.matcap),envMap:!!P,envMapMode:P&&P.mapping,envMapEncoding:r(P),envMapCubeUV:!!P&&(P.mapping===Ii||P.mapping===d0),lightMap:!!y.lightMap,lightMapEncoding:r(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:r(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ef,tangentSpaceNormalMap:y.normalMapType===st,clearcoat:ie,clearcoatMap:ie&&!!y.clearcoatMap,clearcoatRoughnessMap:ie&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ie&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,specularColorMapEncoding:r(y.specularColorMap),alphaMap:!!y.alphaMap,alphaTest:he,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenColorMapEncoding:r(y.sheenColorMap),sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!x.geometry&&!!x.geometry.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!x.geometry&&!!x.geometry.attributes.color&&x.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!te,useFog:y.fog,fogExp2:te&&te.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:x.isSkinnedMesh===!0&&C>0,maxBones:C,useVertexTexture:p,morphTargets:!!x.geometry&&!!x.geometry.morphAttributes.position,morphNormals:!!x.geometry&&!!x.geometry.morphAttributes.normal,morphTargetsCount:!!x.geometry&&!!x.geometry.morphAttributes.position?x.geometry.morphAttributes.position.length:0,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:y.format,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&J.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Cb,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$b,flipSided:y.side===ta,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||b.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||b.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||b.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function k(y){let L=[];if(y.shaderID?L.push(y.shaderID):(L.push(Mo(y.fragmentShader)),L.push(Mo(y.vertexShader))),y.defines!==void 0)for(let J in y.defines)L.push(J),L.push(y.defines[J]);if(y.isRawShaderMaterial===!1){for(let J=0;J<m.length;J++)L.push(y[m[J]]);L.push(t.outputEncoding),L.push(t.gammaFactor)}return L.push(y.customProgramCacheKey),L.join()}function j(y){let L=u[y.type],J;if(L){let F=qa[L];J=qf.clone(F.uniforms)}else J=y.uniforms;return J}function z(y,L){let J;for(let F=0,x=c.length;F<x;F++){let te=c[F];if(te.cacheKey===L){J=te,++J.usedTimes;break}}return J===void 0&&(J=new qh(t,L,y,s),c.push(J)),J}function w(y){if(--y.usedTimes==0){let L=c.indexOf(y);c[L]=c[c.length-1],c.pop(),y.destroy()}}return{getParameters:l,getProgramCacheKey:k,getUniforms:j,acquireProgram:z,releaseProgram:w,programs:c}}function Yh(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function a(s){t.delete(s)}function b(s,o,c){t.get(s)[o]=c}function i(){t=new WeakMap}return{get:e,remove:a,update:b,dispose:i}}function Jh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program!==e.program?t.program.id-e.program.id:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vc(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zc(t){let e=[],a=0,b=[],i=[],s=[],o={id:-1};function c(){a=0,b.length=0,i.length=0,s.length=0}function d(g,u,m,v,r,l){let k=e[a],j=t.get(m);return k===void 0?(k={id:g.id,object:g,geometry:u,material:m,program:j.program||o,groupOrder:v,renderOrder:g.renderOrder,z:r,group:l},e[a]=k):(k.id=g.id,k.object=g,k.geometry=u,k.material=m,k.program=j.program||o,k.groupOrder=v,k.renderOrder=g.renderOrder,k.z=r,k.group=l),a++,k}function f(g,u,m,v,r,l){let k=d(g,u,m,v,r,l);m.transmission>0?i.push(k):m.transparent===!0?s.push(k):b.push(k)}function p(g,u,m,v,r,l){let k=d(g,u,m,v,r,l);m.transmission>0?i.unshift(k):m.transparent===!0?s.unshift(k):b.unshift(k)}function h(g,u){b.length>1&&b.sort(g||Jh),i.length>1&&i.sort(u||Vc),s.length>1&&s.sort(u||Vc)}function n(){for(let g=a,u=e.length;g<u;g++){let m=e[g];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:b,transmissive:i,transparent:s,init:c,push:f,unshift:p,finish:n,sort:h}}function Zh(t){let e=new WeakMap;function a(i,s){let o;return e.has(i)===!1?(o=new zc(t),e.set(i,[o])):s>=e.get(i).length?(o=new zc(t),e.get(i).push(o)):o=e.get(i)[s],o}function b(){e=new WeakMap}return{get:a,dispose:b}}function $h(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new V,color:new ge};break;case"SpotLight":a={position:new V,direction:new V,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new V,color:new ge,distance:0,decay:0};break;case"HemisphereLight":a={direction:new V,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":a={color:new ge,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=a,a}}}function Qh(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"SpotLight":a={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":a={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var e2=0;function a2(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function b2(t,e){let a=new $h,b=Qh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let p=0;p<9;p++)i.probe.push(new V);let s=new V,o=new Ve,c=new Ve;function d(p,h){let n=0,g=0,u=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let m=0,v=0,r=0,l=0,k=0,j=0,z=0,w=0;p.sort(a2);let y=h!==!0?Math.PI:1;for(let J=0,F=p.length;J<F;J++){let x=p[J],te=x.color,A=x.intensity,P=x.distance,I=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)n+=te.r*A*y,g+=te.g*A*y,u+=te.b*A*y;else if(x.isLightProbe)for(let C=0;C<9;C++)i.probe[C].addScaledVector(x.sh.coefficients[C],A);else if(x.isDirectionalLight){let C=a.get(x);if(C.color.copy(x.color).multiplyScalar(x.intensity*y),x.castShadow){let H=x.shadow,$=b.get(x);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=I,i.directionalShadowMatrix[m]=x.shadow.matrix,j++}i.directional[m]=C,m++}else if(x.isSpotLight){let C=a.get(x);if(C.position.setFromMatrixPosition(x.matrixWorld),C.color.copy(te).multiplyScalar(A*y),C.distance=P,C.coneCos=Math.cos(x.angle),C.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),C.decay=x.decay,x.castShadow){let H=x.shadow,$=b.get(x);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.spotShadow[r]=$,i.spotShadowMap[r]=I,i.spotShadowMatrix[r]=x.shadow.matrix,w++}i.spot[r]=C,r++}else if(x.isRectAreaLight){let C=a.get(x);C.color.copy(te).multiplyScalar(A),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),i.rectArea[l]=C,l++}else if(x.isPointLight){let C=a.get(x);if(C.color.copy(x.color).multiplyScalar(x.intensity*y),C.distance=x.distance,C.decay=x.decay,x.castShadow){let H=x.shadow,$=b.get(x);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=x.shadow.matrix,z++}i.point[v]=C,v++}else if(x.isHemisphereLight){let C=a.get(x);C.skyColor.copy(x.color).multiplyScalar(A*y),C.groundColor.copy(x.groundColor).multiplyScalar(A*y),i.hemi[k]=C,k++}}l>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=n,i.ambient[1]=g,i.ambient[2]=u;let L=i.hash;(L.directionalLength!==m||L.pointLength!==v||L.spotLength!==r||L.rectAreaLength!==l||L.hemiLength!==k||L.numDirectionalShadows!==j||L.numPointShadows!==z||L.numSpotShadows!==w)&&(i.directional.length=m,i.spot.length=r,i.rectArea.length=l,i.point.length=v,i.hemi.length=k,i.directionalShadow.length=j,i.directionalShadowMap.length=j,i.pointShadow.length=z,i.pointShadowMap.length=z,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=j,i.pointShadowMatrix.length=z,i.spotShadowMatrix.length=w,L.directionalLength=m,L.pointLength=v,L.spotLength=r,L.rectAreaLength=l,L.hemiLength=k,L.numDirectionalShadows=j,L.numPointShadows=z,L.numSpotShadows=w,i.version=e2++)}function f(p,h){let n=0,g=0,u=0,m=0,v=0,r=h.matrixWorldInverse;for(let l=0,k=p.length;l<k;l++){let j=p[l];if(j.isDirectionalLight){let z=i.directional[n];z.direction.setFromMatrixPosition(j.matrixWorld),s.setFromMatrixPosition(j.target.matrixWorld),z.direction.sub(s),z.direction.transformDirection(r),n++}else if(j.isSpotLight){let z=i.spot[u];z.position.setFromMatrixPosition(j.matrixWorld),z.position.applyMatrix4(r),z.direction.setFromMatrixPosition(j.matrixWorld),s.setFromMatrixPosition(j.target.matrixWorld),z.direction.sub(s),z.direction.transformDirection(r),u++}else if(j.isRectAreaLight){let z=i.rectArea[m];z.position.setFromMatrixPosition(j.matrixWorld),z.position.applyMatrix4(r),c.identity(),o.copy(j.matrixWorld),o.premultiply(r),c.extractRotation(o),z.halfWidth.set(j.width*.5,0,0),z.halfHeight.set(0,j.height*.5,0),z.halfWidth.applyMatrix4(c),z.halfHeight.applyMatrix4(c),m++}else if(j.isPointLight){let z=i.point[g];z.position.setFromMatrixPosition(j.matrixWorld),z.position.applyMatrix4(r),g++}else if(j.isHemisphereLight){let z=i.hemi[v];z.direction.setFromMatrixPosition(j.matrixWorld),z.direction.transformDirection(r),z.direction.normalize(),v++}}}return{setup:d,setupView:f,state:i}}function Gc(t,e){let a=new b2(t,e),b=[],i=[];function s(){b.length=0,i.length=0}function o(h){b.push(h)}function c(h){i.push(h)}function d(h){a.setup(b,h)}function f(h){a.setupView(b,h)}return{init:s,state:{lightsArray:b,shadowsArray:i,lights:a},setupLights:d,setupLightsView:f,pushLight:o,pushShadow:c}}function t2(t,e){let a=new WeakMap;function b(s,o=0){let c;return a.has(s)===!1?(c=new Gc(t,e),a.set(s,[c])):o>=a.get(s).length?(c=new Gc(t,e),a.get(s).push(c)):c=a.get(s)[o],c}function i(){a=new WeakMap}return{get:b,dispose:i}}var $0=class extends ua{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};$0.prototype.isMeshDepthMaterial=!0;var Q0=class extends ua{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Q0.prototype.isMeshDistanceMaterial=!0;var i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
float random(vec2 co, float time) {
  return fract(sin(dot(co, vec2(12.9898, 78.233)) * time) * 43758.5453) * 2.0 - 1.0;
}

#define PI 3.14159265359

vec3 randomSpherePoint(vec3 rand) {
  float ang1 = (rand.x + 1.0) * PI; // [-1..1) -> [0..2*PI)
  float u = rand.y; // [-1..1), cos and acos(2v-1) cancel each other out, so we arrive at [-1..1)
  float u2 = u * u;
  float sqrt1MinusU2 = sqrt(1.0 - u2);
  float x = sqrt1MinusU2 * cos(ang1);
  float y = sqrt1MinusU2 * sin(ang1);
  float z = u;
  return vec3(x, y, z);
}

vec2 randomCirclePoint(vec2 rand) {
  float r = sqrt(rand.x);
  float theta = rand.y * 2. * PI;
  float x = r * cos(theta);
  float y = r * sin(theta); 
  return vec2(x, y);
}

// https://www.shadertoy.com/view/4djSRW

vec4 hash44(vec4 p4) {
  p4 = fract(p4  * vec4(.1031, .1030, .0973, .1099));
    p4 += dot(p4, p4.wzxy+33.33);
    return fract((p4.xxyz+p4.yzzw)*p4.zywx);
}

vec3 calcDir(vec3 position) {
  vec4 rand = hash44(vec4(100.*position.xyz+vec3(seed),100.*time));
  //vec3 dir = normalize(randomSpherePoint(rand));
  vec2 dir = randomCirclePoint(rand.xy);
  float dist = -position.z;
  float d = abs(focalDistance-dist);
  float rd = random(position.xz,time);
  float r = (size / dist + dofRange * pow(d, dofStrength));
  r = max(size / dist,r);
  return vec3(dir.xy, r);
}
`,o9=`
precision highp float;

in vec3 position;
in float size;
in vec3 color;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float time;
uniform float seed;
uniform vec3 cameraPos;

uniform float focalDistance;
uniform float dofStrength;
uniform float dofRange;
uniform float iso;

out float vOpacity;
out vec3 vColor;

${g1}

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vec3 res = calcDir(mvPosition.xyz);
  vec2 dir = res.xy;
  float r = res.z;

  vOpacity = (2.-pow(length(dir.xy),r));
  vColor = color;
  vColor *= iso;
  vColor *= vOpacity;
  //vColor = 1.-vec3((mvPosition.w-.1)/(1000.-.1)) ;
  vColor = clamp(vColor, vec3(0.), vColor);

  mvPosition.xy += dir.xy * r;
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 1.;
 
}
`,c9=`
precision highp float;

in vec3 position;
in vec3 to;
in float size;
in vec3 color;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float time;
uniform float seed;
uniform vec3 cameraPos;
uniform float iso;

uniform float focalDistance;
uniform float dofStrength;
uniform float dofRange;

out float vOpacity;
out vec3 vColor;

${g1}

void main() {
  float rr = .5 + .5 * random(position.xy + seed, time);
  vec3 p = mix(position, to, rr);
  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  vec3 res = calcDir(mvPosition.xyz);
  vec2 dir = res.xy;
  float r = res.z;

  vOpacity = (2.-pow(length(dir.xy),r));
  vColor = color;
  vColor *= iso;
  vColor *= vOpacity;
  //vColor = 1.-vec3((mvPosition.w-.1)/(1000.-.1)) ;
  vColor = clamp(vColor, vec3(0.), vColor);

  mvPosition.xy += dir.xy * r ;
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 1.;
}`,r1=`
precision highp float;

in float vOpacity;
in vec3 vColor;

out vec4 color;

void main() {
  color = vec4(vColor,1.);
}
`,d9=`
precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );
}`,f9=`
precision highp float;

uniform sampler2D colorTexture;
uniform float samples;
uniform float exposure;
uniform bool invert;

in vec2 vUv;

out vec4 fragColor;

// https://www.shadertoy.com/view/ttyXzt

void main() {
  vec4 c = texture(colorTexture, vUv);
  /*float gamma = 2.2;
  vec3 hdrColor = exposure * c.rgb / c.a;
  vec3 mapped = hdrColor / (hdrColor + vec3(1.0));
  mapped = pow(mapped, vec3(1.0 / gamma));*/

  // vignette to darken the corners
  vec2 uv = vUv - .5;
  vec3 color =c.rgb / samples;//c.a;
  //color *= c.a/samples;
  
	//color *= 1.-dot(uv,uv)*.8;

  // exposure and tonemap
  color *= exposure;
  color = 1.-exp(color*-2.);

  // gamma correction
  color = pow(color, vec3(.45));

  // make it pop
  color = smoothstep(.02,.98,color);
  
  if(invert) {
    fragColor = vec4(1. - color, 1.);
  } else {
    fragColor = vec4(color, 1.);
  }
 // fragColor = vec4(c.a);
}
  `;var H4=class{constructor(e){this.acumSamples=0,this.maxSamples=1024,this.samples=5,this.renderer=e,this.renderer.setClearColor(0,0),this.scene=new Ya,this.colorFBO=Js(1,1,{format:ba,type:Ba}),this.finalShader=new cb({uniforms:{colorTexture:{value:this.colorFBO.texture},samples:{value:0},exposure:{value:0},invert:{value:!1}},vertexShader:d9,fragmentShader:f9,glslVersion:ot}),this.finalPass=new R4(this.finalShader,1,1),this.material=new cb({uniforms:{time:{value:0},focalDistance:{value:100},dofStrength:{value:1.5},dofRange:{value:.01},iso:{value:1}},depthTest:!1,depthWrite:!1,blending:ai,vertexShader:o9,fragmentShader:r1,transparent:!0,glslVersion:ot}),this.lineMaterial=new cb({uniforms:{time:{value:0},focalDistance:{value:100},dofStrength:{value:1.5},dofRange:{value:.01},iso:{value:1}},depthTest:!1,depthWrite:!1,blending:ai,vertexShader:c9,fragmentShader:r1,transparent:!0,glslVersion:ot}),this.setParams({exposure:1,iso:.1,focalDistance:9.6,dofRange:.01,dofStrength:1.5})}addPoints(e){let a=new yi(e,this.material);return this.scene.add(a),a}addLines(e){let a=new yi(e,this.lineMaterial);return this.scene.add(a),a}render(e){if(!(this.acumSamples>this.maxSamples))for(let a=0;a<this.samples;a++)this.material.uniforms.time.value=Math.random(),this.lineMaterial.uniforms.time.value=Math.random(),this.finalPass.shader.uniforms.samples.value=this.acumSamples,this.renderer.setRenderTarget(this.colorFBO),this.renderer.render(this.scene,e),this.renderer.setRenderTarget(null),this.finalPass.render(this.renderer,!0),this.acumSamples++}setParams(e){let a=Object.keys(e);for(let b of a){let i=e[b];b==="exposure"?this.finalShader.uniforms.exposure.value=e.exposure:(this.material.uniforms[b].value=i,this.lineMaterial.uniforms[b].value=i)}}setSize(e,a){this.colorFBO.setSize(e,a),this.finalPass.setSize(e,a)}reset(){this.acumSamples=0,this.renderer.setRenderTarget(this.colorFBO),this.renderer.clear(),this.renderer.setRenderTarget(null)}clear(){for(;this.scene.children.length;){let e=this.scene.children[0];this.scene.remove(e),e.geometry.dispose(),e=null}}};function p9(t){if(!!t&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e),t}}function Bt(t,e){var a=t.__state.conversionName.toString(),b=Math.round(t.r),i=Math.round(t.g),s=Math.round(t.b),o=t.a,c=Math.round(t.h),d=t.s.toFixed(1),f=t.v.toFixed(1);if(e||a==="THREE_CHAR_HEX"||a==="SIX_CHAR_HEX"){for(var p=t.hex.toString(16);p.length<6;)p="0"+p;return"#"+p}else{if(a==="CSS_RGB")return"rgb("+b+","+i+","+s+")";if(a==="CSS_RGBA")return"rgba("+b+","+i+","+s+","+o+")";if(a==="HEX")return"0x"+t.hex.toString(16);if(a==="RGB_ARRAY")return"["+b+","+i+","+s+"]";if(a==="RGBA_ARRAY")return"["+b+","+i+","+s+","+o+"]";if(a==="RGB_OBJ")return"{r:"+b+",g:"+i+",b:"+s+"}";if(a==="RGBA_OBJ")return"{r:"+b+",g:"+i+",b:"+s+",a:"+o+"}";if(a==="HSV_OBJ")return"{h:"+c+",s:"+d+",v:"+f+"}";if(a==="HSVA_OBJ")return"{h:"+c+",s:"+d+",v:"+f+",a:"+o+"}"}return"unknown format"}var l1=Array.prototype.forEach,Ei=Array.prototype.slice,U={BREAK:{},extend:function(e){return this.each(Ei.call(arguments,1),function(a){var b=this.isObject(a)?Object.keys(a):[];b.forEach(function(i){this.isUndefined(a[i])||(e[i]=a[i])}.bind(this))},this),e},defaults:function(e){return this.each(Ei.call(arguments,1),function(a){var b=this.isObject(a)?Object.keys(a):[];b.forEach(function(i){this.isUndefined(e[i])&&(e[i]=a[i])}.bind(this))},this),e},compose:function(){var e=Ei.call(arguments);return function(){for(var a=Ei.call(arguments),b=e.length-1;b>=0;b--)a=[e[b].apply(this,a)];return a[0]}},each:function(e,a,b){if(!!e){if(l1&&e.forEach&&e.forEach===l1)e.forEach(a,b);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&a.call(b,e[i],i)===this.BREAK)return}else for(var o in e)if(a.call(b,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,a,b){var i=void 0;return function(){var s=this,o=arguments;function c(){i=null,b||e.apply(s,o)}var d=b||!i;clearTimeout(i),i=setTimeout(c,a),d&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Ei.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(t){function e(a){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return isNaN(t)}),isArray:Array.isArray||function(t){return t.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return Object.prototype.toString.call(e)==="[object Function]"}},h9=[{litmus:U.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var a=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return a===null?!1:{space:"HEX",hex:parseInt("0x"+a[1].toString()+a[1].toString()+a[2].toString()+a[2].toString()+a[3].toString()+a[3].toString(),0)}},write:Bt},SIX_CHAR_HEX:{read:function(e){var a=e.match(/^#([A-F0-9]{6})$/i);return a===null?!1:{space:"HEX",hex:parseInt("0x"+a[1].toString(),0)}},write:Bt},CSS_RGB:{read:function(e){var a=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return a===null?!1:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3])}},write:Bt},CSS_RGBA:{read:function(e){var a=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return a===null?!1:{space:"RGB",r:parseFloat(a[1]),g:parseFloat(a[2]),b:parseFloat(a[3]),a:parseFloat(a[4])}},write:Bt}}},{litmus:U.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:U.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:U.isObject,conversions:{RGBA_OBJ:{read:function(e){return U.isNumber(e.r)&&U.isNumber(e.g)&&U.isNumber(e.b)&&U.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return U.isNumber(e.r)&&U.isNumber(e.g)&&U.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return U.isNumber(e.h)&&U.isNumber(e.s)&&U.isNumber(e.v)&&U.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return U.isNumber(e.h)&&U.isNumber(e.s)&&U.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ti=void 0,Zs=void 0,F4=function(){Zs=!1;var e=arguments.length>1?U.toArray(arguments):arguments[0];return U.each(h9,function(a){if(a.litmus(e))return U.each(a.conversions,function(b,i){if(Ti=b.read(e),Zs===!1&&Ti!==!1)return Zs=Ti,Ti.conversionName=i,Ti.conversion=b,U.BREAK}),U.BREAK}),Zs},u1=void 0,$s={hsv_to_rgb:function(e,a,b){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=b*(1-a),c=b*(1-s*a),d=b*(1-(1-s)*a),f=[[b,d,o],[c,b,o],[o,b,d],[o,c,b],[d,o,b],[b,o,c]][i];return{r:f[0]*255,g:f[1]*255,b:f[2]*255}},rgb_to_hsv:function(e,a,b){var i=Math.min(e,a,b),s=Math.max(e,a,b),o=s-i,c=void 0,d=void 0;if(s!==0)d=o/s;else return{h:NaN,s:0,v:0};return e===s?c=(a-b)/o:a===s?c=2+(b-e)/o:c=4+(e-a)/o,c/=6,c<0&&(c+=1),{h:c*360,s:d,v:s/255}},rgb_to_hex:function(e,a,b){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,a),i=this.hex_with_component(i,0,b),i},component_from_hex:function(e,a){return e>>a*8&255},hex_with_component:function(e,a,b){return b<<(u1=a*8)|e&~(255<<u1)}},n9=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Da=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Oa=function(){function t(e,a){for(var b=0;b<a.length;b++){var i=a[b];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,a,b){return a&&t(e.prototype,a),b&&t(e,b),e}}(),xb=function t(e,a,b){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,a);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:t(s,a,b)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(b)}},Sb=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},wb=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},na=function(){function t(){if(Da(this,t),this.__state=F4.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Oa(t,[{key:"toString",value:function(){return Bt(this)}},{key:"toHexString",value:function(){return Bt(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),t}();function I4(t,e,a){Object.defineProperty(t,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(na.recalculateRGB(this,e,a),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(na.recalculateRGB(this,e,a),this.__state.space="RGB"),this.__state[e]=i}})}function D4(t,e){Object.defineProperty(t,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(na.recalculateHSV(this),this.__state[e])},set:function(b){this.__state.space!=="HSV"&&(na.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=b}})}na.recalculateRGB=function(t,e,a){if(t.__state.space==="HEX")t.__state[e]=$s.component_from_hex(t.__state.hex,a);else if(t.__state.space==="HSV")U.extend(t.__state,$s.hsv_to_rgb(t.__state.h,t.__state.s,t.__state.v));else throw new Error("Corrupted color state")};na.recalculateHSV=function(t){var e=$s.rgb_to_hsv(t.r,t.g,t.b);U.extend(t.__state,{s:e.s,v:e.v}),U.isNaN(e.h)?U.isUndefined(t.__state.h)&&(t.__state.h=0):t.__state.h=e.h};na.COMPONENTS=["r","g","b","h","s","v","hex","a"];I4(na.prototype,"r",2);I4(na.prototype,"g",1);I4(na.prototype,"b",0);D4(na.prototype,"h");D4(na.prototype,"s");D4(na.prototype,"v");Object.defineProperty(na.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(na.prototype,"hex",{get:function(){return!this.__state.space!=="HEX"&&(this.__state.hex=$s.rgb_to_hex(this.r,this.g,this.b)),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Jb=function(){function t(e,a){Da(this,t),this.initialValue=e[a],this.domElement=document.createElement("div"),this.object=e,this.property=a,this.__onChange=void 0,this.__onFinishChange=void 0}return Oa(t,[{key:"onChange",value:function(a){return this.__onChange=a,this}},{key:"onFinishChange",value:function(a){return this.__onFinishChange=a,this}},{key:"setValue",value:function(a){return this.object[this.property]=a,this.__onChange&&this.__onChange.call(this,a),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),t}(),g9={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},m1={};U.each(g9,function(t,e){U.each(t,function(a){m1[a]=e})});var r9=/(\d+(\.\d+)?)px/;function Qa(t){if(t==="0"||U.isUndefined(t))return 0;var e=t.match(r9);return U.isNull(e)?0:parseFloat(e[1])}var E={makeSelectable:function(e,a){e===void 0||e.style===void 0||(e.onselectstart=a?function(){return!1}:function(){},e.style.MozUserSelect=a?"auto":"none",e.style.KhtmlUserSelect=a?"auto":"none",e.unselectable=a?"on":"off")},makeFullscreen:function(e,a,b){var i=b,s=a;U.isUndefined(s)&&(s=!0),U.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,a,b,i){var s=b||{},o=m1[a];if(!o)throw new Error("Event type "+a+" not supported.");var c=document.createEvent(o);switch(o){case"MouseEvents":{var d=s.x||s.clientX||0,f=s.y||s.clientY||0;c.initMouseEvent(a,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,d,f,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var p=c.initKeyboardEvent||c.initKeyEvent;U.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),p(a,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{c.initEvent(a,s.bubbles||!1,s.cancelable||!0);break}}U.defaults(c,i),e.dispatchEvent(c)},bind:function(e,a,b,i){var s=i||!1;return e.addEventListener?e.addEventListener(a,b,s):e.attachEvent&&e.attachEvent("on"+a,b),E},unbind:function(e,a,b,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(a,b,s):e.detachEvent&&e.detachEvent("on"+a,b),E},addClass:function(e,a){if(e.className===void 0)e.className=a;else if(e.className!==a){var b=e.className.split(/ +/);b.indexOf(a)===-1&&(b.push(a),e.className=b.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return E},removeClass:function(e,a){if(a)if(e.className===a)e.removeAttribute("class");else{var b=e.className.split(/ +/),i=b.indexOf(a);i!==-1&&(b.splice(i,1),e.className=b.join(" "))}else e.className=void 0;return E},hasClass:function(e,a){return new RegExp("(?:^|\\s+)"+a+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var a=getComputedStyle(e);return Qa(a["border-left-width"])+Qa(a["border-right-width"])+Qa(a["padding-left"])+Qa(a["padding-right"])+Qa(a.width)},getHeight:function(e){var a=getComputedStyle(e);return Qa(a["border-top-width"])+Qa(a["border-bottom-width"])+Qa(a["padding-top"])+Qa(a["padding-bottom"])+Qa(a.height)},getOffset:function(e){var a=e,b={left:0,top:0};if(a.offsetParent)do b.left+=a.offsetLeft,b.top+=a.offsetTop,a=a.offsetParent;while(a);return b},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},v1=function(t){Sb(e,t);function e(a,b){Da(this,e);var i=wb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,b)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return E.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Oa(e,[{key:"setValue",value:function(b){var i=xb(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,b);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),xb(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Jb),l9=function(t){Sb(e,t);function e(a,b,i){Da(this,e);var s=wb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,b)),o=i,c=s;if(s.__select=document.createElement("select"),U.isArray(o)){var d={};U.each(o,function(f){d[f]=f}),o=d}return U.each(o,function(f,p){var h=document.createElement("option");h.innerHTML=p,h.setAttribute("value",f),c.__select.appendChild(h)}),s.updateDisplay(),E.bind(s.__select,"change",function(){var f=this.options[this.selectedIndex].value;c.setValue(f)}),s.domElement.appendChild(s.__select),s}return Oa(e,[{key:"setValue",value:function(b){var i=xb(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,b);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return E.isActive(this.__select)?this:(this.__select.value=this.getValue(),xb(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Jb),u9=function(t){Sb(e,t);function e(a,b){Da(this,e);var i=wb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,b)),s=i;function o(){s.setValue(s.__input.value)}function c(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),E.bind(i.__input,"keyup",o),E.bind(i.__input,"change",o),E.bind(i.__input,"blur",c),E.bind(i.__input,"keydown",function(d){d.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Oa(e,[{key:"updateDisplay",value:function(){return E.isActive(this.__input)||(this.__input.value=this.getValue()),xb(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Jb);function j1(t){var e=t.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var y1=function(t){Sb(e,t);function e(a,b,i){Da(this,e);var s=wb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,b)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,U.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=j1(s.__impliedStep),s}return Oa(e,[{key:"setValue",value:function(b){var i=b;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!=0&&(i=Math.round(i/this.__step)*this.__step),xb(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(b){return this.__min=b,this}},{key:"max",value:function(b){return this.__max=b,this}},{key:"step",value:function(b){return this.__step=b,this.__impliedStep=b,this.__precision=j1(b),this}}]),e}(Jb);function m9(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a}var Qs=function(t){Sb(e,t);function e(a,b,i){Da(this,e);var s=wb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,b,i));s.__truncationSuspended=!1;var o=s,c=void 0;function d(){var u=parseFloat(o.__input.value);U.isNaN(u)||o.setValue(u)}function f(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function p(){f()}function h(u){var m=c-u.clientY;o.setValue(o.getValue()+m*o.__impliedStep),c=u.clientY}function n(){E.unbind(window,"mousemove",h),E.unbind(window,"mouseup",n),f()}function g(u){E.bind(window,"mousemove",h),E.bind(window,"mouseup",n),c=u.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),E.bind(s.__input,"change",d),E.bind(s.__input,"blur",p),E.bind(s.__input,"mousedown",g),E.bind(s.__input,"keydown",function(u){u.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,f())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Oa(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():m9(this.getValue(),this.__precision),xb(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(y1);function K1(t,e,a,b,i){return b+(i-b)*((t-e)/(a-e))}var O4=function(t){Sb(e,t);function e(a,b,i,s,o){Da(this,e);var c=wb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,b,{min:i,max:s,step:o})),d=c;c.__background=document.createElement("div"),c.__foreground=document.createElement("div"),E.bind(c.__background,"mousedown",f),E.bind(c.__background,"touchstart",n),E.addClass(c.__background,"slider"),E.addClass(c.__foreground,"slider-fg");function f(m){document.activeElement.blur(),E.bind(window,"mousemove",p),E.bind(window,"mouseup",h),p(m)}function p(m){m.preventDefault();var v=d.__background.getBoundingClientRect();return d.setValue(K1(m.clientX,v.left,v.right,d.__min,d.__max)),!1}function h(){E.unbind(window,"mousemove",p),E.unbind(window,"mouseup",h),d.__onFinishChange&&d.__onFinishChange.call(d,d.getValue())}function n(m){m.touches.length===1&&(E.bind(window,"touchmove",g),E.bind(window,"touchend",u),g(m))}function g(m){var v=m.touches[0].clientX,r=d.__background.getBoundingClientRect();d.setValue(K1(v,r.left,r.right,d.__min,d.__max))}function u(){E.unbind(window,"touchmove",g),E.unbind(window,"touchend",u),d.__onFinishChange&&d.__onFinishChange.call(d,d.getValue())}return c.updateDisplay(),c.__background.appendChild(c.__foreground),c.domElement.appendChild(c.__background),c}return Oa(e,[{key:"updateDisplay",value:function(){var b=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=b*100+"%",xb(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(y1),V1=function(t){Sb(e,t);function e(a,b,i){Da(this,e);var s=wb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,b)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,E.bind(s.__button,"click",function(c){return c.preventDefault(),o.fire(),!1}),E.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Oa(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Jb),N4=function(t){Sb(e,t);function e(a,b){Da(this,e);var i=wb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,a,b));i.__color=new na(i.getValue()),i.__temp=new na(0);var s=i;i.domElement=document.createElement("div"),E.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",E.bind(i.__input,"keydown",function(m){m.keyCode===13&&h.call(this)}),E.bind(i.__input,"blur",h),E.bind(i.__selector,"mousedown",function(){E.addClass(this,"drag").bind(window,"mouseup",function(){E.removeClass(s.__selector,"drag")})}),E.bind(i.__selector,"touchstart",function(){E.addClass(this,"drag").bind(window,"touchend",function(){E.removeClass(s.__selector,"drag")})});var o=document.createElement("div");U.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),U.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),U.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),U.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),U.extend(o.style,{width:"100%",height:"100%",background:"none"}),z1(o,"top","rgba(0,0,0,0)","#000"),U.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),v9(i.__hue_field),U.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),E.bind(i.__saturation_field,"mousedown",c),E.bind(i.__saturation_field,"touchstart",c),E.bind(i.__field_knob,"mousedown",c),E.bind(i.__field_knob,"touchstart",c),E.bind(i.__hue_field,"mousedown",d),E.bind(i.__hue_field,"touchstart",d);function c(m){g(m),E.bind(window,"mousemove",g),E.bind(window,"touchmove",g),E.bind(window,"mouseup",f),E.bind(window,"touchend",f)}function d(m){u(m),E.bind(window,"mousemove",u),E.bind(window,"touchmove",u),E.bind(window,"mouseup",p),E.bind(window,"touchend",p)}function f(){E.unbind(window,"mousemove",g),E.unbind(window,"touchmove",g),E.unbind(window,"mouseup",f),E.unbind(window,"touchend",f),n()}function p(){E.unbind(window,"mousemove",u),E.unbind(window,"touchmove",u),E.unbind(window,"mouseup",p),E.unbind(window,"touchend",p),n()}function h(){var m=F4(this.value);m!==!1?(s.__color.__state=m,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function n(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function g(m){m.type.indexOf("touch")===-1&&m.preventDefault();var v=s.__saturation_field.getBoundingClientRect(),r=m.touches&&m.touches[0]||m,l=r.clientX,k=r.clientY,j=(l-v.left)/(v.right-v.left),z=1-(k-v.top)/(v.bottom-v.top);return z>1?z=1:z<0&&(z=0),j>1?j=1:j<0&&(j=0),s.__color.v=z,s.__color.s=j,s.setValue(s.__color.toOriginal()),!1}function u(m){m.type.indexOf("touch")===-1&&m.preventDefault();var v=s.__hue_field.getBoundingClientRect(),r=m.touches&&m.touches[0]||m,l=r.clientY,k=1-(l-v.top)/(v.bottom-v.top);return k>1?k=1:k<0&&(k=0),s.__color.h=k*360,s.setValue(s.__color.toOriginal()),!1}return i}return Oa(e,[{key:"updateDisplay",value:function(){var b=F4(this.getValue());if(b!==!1){var i=!1;U.each(na.COMPONENTS,function(c){if(!U.isUndefined(b[c])&&!U.isUndefined(this.__color.__state[c])&&b[c]!==this.__color.__state[c])return i=!0,{}},this),i&&U.extend(this.__color.__state,b)}U.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;U.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,z1(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),U.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Jb),j9=["-moz-","-o-","-webkit-","-ms-",""];function z1(t,e,a,b){t.style.background="",U.each(j9,function(i){t.style.cssText+="background: "+i+"linear-gradient("+e+", "+a+" 0%, "+b+" 100%); "})}function v9(t){t.style.background="",t.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",t.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var y9={load:function(e,a){var b=a||document,i=b.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,b.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,a){var b=a||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=b.getElementsByTagName("head")[0];try{s.appendChild(i)}catch(o){}}},K9=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,V9=function(e,a){var b=e[a];return U.isArray(arguments[2])||U.isObject(arguments[2])?new l9(e,a,arguments[2]):U.isNumber(b)?U.isNumber(arguments[2])&&U.isNumber(arguments[3])?U.isNumber(arguments[4])?new O4(e,a,arguments[2],arguments[3],arguments[4]):new O4(e,a,arguments[2],arguments[3]):U.isNumber(arguments[4])?new Qs(e,a,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Qs(e,a,{min:arguments[2],max:arguments[3]}):U.isString(b)?new u9(e,a):U.isFunction(b)?new V1(e,a,""):U.isBoolean(b)?new v1(e,a):null};function z9(t){setTimeout(t,1e3/60)}var G9=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||z9,k9=function(){function t(){Da(this,t),this.backgroundElement=document.createElement("div"),U.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),E.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),U.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;E.bind(this.backgroundElement,"click",function(){e.hide()})}return Oa(t,[{key:"show",value:function(){var a=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),U.defer(function(){a.backgroundElement.style.opacity=1,a.domElement.style.opacity=1,a.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var a=this,b=function i(){a.domElement.style.display="none",a.backgroundElement.style.display="none",E.unbind(a.domElement,"webkitTransitionEnd",i),E.unbind(a.domElement,"transitionend",i),E.unbind(a.domElement,"oTransitionEnd",i)};E.bind(this.domElement,"webkitTransitionEnd",b),E.bind(this.domElement,"transitionend",b),E.bind(this.domElement,"oTransitionEnd",b),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-E.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-E.getHeight(this.domElement)/2+"px"}}]),t}(),_9=p9(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);y9.inject(_9);var G1="dg",k1=72,_1=20,Ai="Default",Li=function(){try{return!!window.localStorage}catch(t){return!1}}(),Pi=void 0,x1=!0,Ut=void 0,B4=!1,S1=[],qe=function t(e){var a=this,b=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),E.addClass(this.domElement,G1),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],b=U.defaults(b,{closeOnTop:!1,autoPlace:!0,width:t.DEFAULT_WIDTH}),b=U.defaults(b,{resizable:b.autoPlace,hideable:b.autoPlace}),U.isUndefined(b.load)?b.load={preset:Ai}:b.preset&&(b.load.preset=b.preset),U.isUndefined(b.parent)&&b.hideable&&S1.push(this),b.resizable=U.isUndefined(b.parent)&&b.resizable,b.autoPlace&&U.isUndefined(b.scrollable)&&(b.scrollable=!0);var i=Li&&localStorage.getItem(Wt(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return b.parent}},scrollable:{get:function(){return b.scrollable}},autoPlace:{get:function(){return b.autoPlace}},closeOnTop:{get:function(){return b.closeOnTop}},preset:{get:function(){return a.parent?a.getRoot().preset:b.load.preset},set:function(n){a.parent?a.getRoot().preset=n:b.load.preset=n,S9(this),a.revert()}},width:{get:function(){return b.width},set:function(n){b.width=n,W4(a,n)}},name:{get:function(){return b.name},set:function(n){b.name=n,o&&(o.innerHTML=b.name)}},closed:{get:function(){return b.closed},set:function(n){b.closed=n,b.closed?E.addClass(a.__ul,t.CLASS_CLOSED):E.removeClass(a.__ul,t.CLASS_CLOSED),this.onResize(),a.__closeButton&&(a.__closeButton.innerHTML=n?t.TEXT_OPEN:t.TEXT_CLOSED)}},load:{get:function(){return b.load}},useLocalStorage:{get:function(){return i},set:function(n){Li&&(i=n,n?E.bind(window,"unload",s):E.unbind(window,"unload",s),localStorage.setItem(Wt(a,"isLocal"),n))}}}),U.isUndefined(b.parent)){if(this.closed=b.closed||!1,E.addClass(this.domElement,t.CLASS_MAIN),E.makeSelectable(this.domElement,!1),Li&&i){a.useLocalStorage=!0;var c=localStorage.getItem(Wt(this,"gui"));c&&(b.load=JSON.parse(c))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=t.TEXT_CLOSED,E.addClass(this.__closeButton,t.CLASS_CLOSE_BUTTON),b.closeOnTop?(E.addClass(this.__closeButton,t.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(E.addClass(this.__closeButton,t.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),E.bind(this.__closeButton,"click",function(){a.closed=!a.closed})}else{b.closed===void 0&&(b.closed=!0);var d=document.createTextNode(b.name);E.addClass(d,"controller-name"),o=U4(a,d);var f=function(n){return n.preventDefault(),a.closed=!a.closed,!1};E.addClass(this.__ul,t.CLASS_CLOSED),E.addClass(o,"title"),E.bind(o,"click",f),b.closed||(this.closed=!1)}b.autoPlace&&(U.isUndefined(b.parent)&&(x1&&(Ut=document.createElement("div"),E.addClass(Ut,G1),E.addClass(Ut,t.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ut),x1=!1),Ut.appendChild(this.domElement),E.addClass(this.domElement,t.CLASS_AUTO_PLACE)),this.parent||W4(a,b.width)),this.__resizeHandler=function(){a.onResizeDebounced()},E.bind(window,"resize",this.__resizeHandler),E.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),E.bind(this.__ul,"transitionend",this.__resizeHandler),E.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),b.resizable&&x9(this),s=function(){Li&&localStorage.getItem(Wt(a,"isLocal"))==="true"&&localStorage.setItem(Wt(a,"gui"),JSON.stringify(a.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function p(){var h=a.getRoot();h.width+=1,U.defer(function(){h.width-=1})}b.parent||p()};qe.toggleHide=function(){B4=!B4,U.each(S1,function(t){t.domElement.style.display=B4?"none":""})};qe.CLASS_AUTO_PLACE="a";qe.CLASS_AUTO_PLACE_CONTAINER="ac";qe.CLASS_MAIN="main";qe.CLASS_CONTROLLER_ROW="cr";qe.CLASS_TOO_TALL="taller-than-window";qe.CLASS_CLOSED="closed";qe.CLASS_CLOSE_BUTTON="close-button";qe.CLASS_CLOSE_TOP="close-top";qe.CLASS_CLOSE_BOTTOM="close-bottom";qe.CLASS_DRAG="drag";qe.DEFAULT_WIDTH=245;qe.TEXT_CLOSED="Close Controls";qe.TEXT_OPEN="Open Controls";qe._keydownHandler=function(t){document.activeElement.type!=="text"&&(t.which===k1||t.keyCode===k1)&&qe.toggleHide()};E.bind(window,"keydown",qe._keydownHandler,!1);U.extend(qe.prototype,{add:function(e,a){return Ci(this,e,a,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,a){return Ci(this,e,a,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var a=this;U.defer(function(){a.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ut.removeChild(this.domElement);var e=this;U.each(this.__folders,function(a){e.removeFolder(a)}),E.unbind(window,"keydown",qe._keydownHandler,!1),w1(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var a={name:e,parent:this};a.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(a.closed=this.load.folders[e].closed,a.load=this.load.folders[e]);var b=new qe(a);this.__folders[e]=b;var i=U4(this,b.domElement);return E.addClass(i,"folder"),b},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],w1(e);var a=this;U.each(e.__folders,function(b){e.removeFolder(b)}),U.defer(function(){a.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var a=E.getOffset(e.__ul).top,b=0;U.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(b+=E.getHeight(i))}),window.innerHeight-a-_1<b?(E.addClass(e.domElement,qe.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-a-_1+"px"):(E.removeClass(e.domElement,qe.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&U.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:U.debounce(function(){this.onResize()},50),remember:function(){if(U.isUndefined(Pi)&&(Pi=new k9,Pi.domElement.innerHTML=K9),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;U.each(Array.prototype.slice.call(arguments),function(a){e.__rememberedObjects.length===0&&w9(e),e.__rememberedObjects.indexOf(a)===-1&&e.__rememberedObjects.push(a)}),this.autoPlace&&W4(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=e0(this)),e.folders={},U.each(this.__folders,function(a,b){e.folders[b]=a.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=e0(this),q4(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ai]=e0(this,!0)),this.load.remembered[e]=e0(this),this.preset=e,X4(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){U.each(this.__controllers,function(a){this.getRoot().load.remembered?M1(e||this.getRoot(),a):a.setValue(a.initialValue),a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())},this),U.each(this.__folders,function(a){a.revert(a)}),e||q4(this.getRoot(),!1)},listen:function(e){var a=this.__listening.length===0;this.__listening.push(e),a&&E1(this.__listening)},updateDisplay:function(){U.each(this.__controllers,function(e){e.updateDisplay()}),U.each(this.__folders,function(e){e.updateDisplay()})}});function U4(t,e,a){var b=document.createElement("li");return e&&b.appendChild(e),a?t.__ul.insertBefore(b,a):t.__ul.appendChild(b),t.onResize(),b}function w1(t){E.unbind(window,"resize",t.__resizeHandler),t.saveToLocalStorageIfPossible&&E.unbind(window,"unload",t.saveToLocalStorageIfPossible)}function q4(t,e){var a=t.__preset_select[t.__preset_select.selectedIndex];e?a.innerHTML=a.value+"*":a.innerHTML=a.value}function M9(t,e,a){if(a.__li=e,a.__gui=t,U.extend(a,{options:function(o){if(arguments.length>1){var c=a.__li.nextElementSibling;return a.remove(),Ci(t,a.object,a.property,{before:c,factoryArgs:[U.toArray(arguments)]})}if(U.isArray(o)||U.isObject(o)){var d=a.__li.nextElementSibling;return a.remove(),Ci(t,a.object,a.property,{before:d,factoryArgs:[o]})}},name:function(o){return a.__li.firstElementChild.firstElementChild.innerHTML=o,a},listen:function(){return a.__gui.listen(a),a},remove:function(){return a.__gui.remove(a),a}}),a instanceof O4){var b=new Qs(a.object,a.property,{min:a.__min,max:a.__max,step:a.__step});U.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=a[s],c=b[s];a[s]=b[s]=function(){var d=Array.prototype.slice.call(arguments);return c.apply(b,d),o.apply(a,d)}}),E.addClass(e,"has-slider"),a.domElement.insertBefore(b.domElement,a.domElement.firstElementChild)}else if(a instanceof Qs){var i=function(o){if(U.isNumber(a.__min)&&U.isNumber(a.__max)){var c=a.__li.firstElementChild.firstElementChild.innerHTML,d=a.__gui.__listening.indexOf(a)>-1;a.remove();var f=Ci(t,a.object,a.property,{before:a.__li.nextElementSibling,factoryArgs:[a.__min,a.__max,a.__step]});return f.name(c),d&&f.listen(),f}return o};a.min=U.compose(i,a.min),a.max=U.compose(i,a.max)}else a instanceof v1?(E.bind(e,"click",function(){E.fakeEvent(a.__checkbox,"click")}),E.bind(a.__checkbox,"click",function(s){s.stopPropagation()})):a instanceof V1?(E.bind(e,"click",function(){E.fakeEvent(a.__button,"click")}),E.bind(e,"mouseover",function(){E.addClass(a.__button,"hover")}),E.bind(e,"mouseout",function(){E.removeClass(a.__button,"hover")})):a instanceof N4&&(E.addClass(e,"color"),a.updateDisplay=U.compose(function(s){return e.style.borderLeftColor=a.__color.toString(),s},a.updateDisplay),a.updateDisplay());a.setValue=U.compose(function(s){return t.getRoot().__preset_select&&a.isModified()&&q4(t.getRoot(),!0),s},a.setValue)}function M1(t,e){var a=t.getRoot(),b=a.__rememberedObjects.indexOf(e.object);if(b!==-1){var i=a.__rememberedObjectIndecesToControllers[b];if(i===void 0&&(i={},a.__rememberedObjectIndecesToControllers[b]=i),i[e.property]=e,a.load&&a.load.remembered){var s=a.load.remembered,o=void 0;if(s[t.preset])o=s[t.preset];else if(s[Ai])o=s[Ai];else return;if(o[b]&&o[b][e.property]!==void 0){var c=o[b][e.property];e.initialValue=c,e.setValue(c)}}}}function Ci(t,e,a,b){if(e[a]===void 0)throw new Error('Object "'+e+'" has no property "'+a+'"');var i=void 0;if(b.color)i=new N4(e,a);else{var s=[e,a].concat(b.factoryArgs);i=V9.apply(t,s)}b.before instanceof Jb&&(b.before=b.before.__li),M1(t,i),E.addClass(i.domElement,"c");var o=document.createElement("span");E.addClass(o,"property-name"),o.innerHTML=i.property;var c=document.createElement("div");c.appendChild(o),c.appendChild(i.domElement);var d=U4(t,c,b.before);return E.addClass(d,qe.CLASS_CONTROLLER_ROW),i instanceof N4?E.addClass(d,"color"):E.addClass(d,n9(i.getValue())),M9(t,d,i),t.__controllers.push(i),i}function Wt(t,e){return document.location.href+"."+e}function X4(t,e,a){var b=document.createElement("option");b.innerHTML=e,b.value=e,t.__preset_select.appendChild(b),a&&(t.__preset_select.selectedIndex=t.__preset_select.length-1)}function T1(t,e){e.style.display=t.useLocalStorage?"block":"none"}function w9(t){var e=t.__save_row=document.createElement("li");E.addClass(t.domElement,"has-save"),t.__ul.insertBefore(e,t.__ul.firstChild),E.addClass(e,"save-row");var a=document.createElement("span");a.innerHTML="&nbsp;",E.addClass(a,"button gears");var b=document.createElement("span");b.innerHTML="Save",E.addClass(b,"button"),E.addClass(b,"save");var i=document.createElement("span");i.innerHTML="New",E.addClass(i,"button"),E.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",E.addClass(s,"button"),E.addClass(s,"revert");var o=t.__preset_select=document.createElement("select");if(t.load&&t.load.remembered?U.each(t.load.remembered,function(h,n){X4(t,n,n===t.preset)}):X4(t,Ai,!1),E.bind(o,"change",function(){for(var h=0;h<t.__preset_select.length;h++)t.__preset_select[h].innerHTML=t.__preset_select[h].value;t.preset=this.value}),e.appendChild(o),e.appendChild(a),e.appendChild(b),e.appendChild(i),e.appendChild(s),Li){var c=document.getElementById("dg-local-explain"),d=document.getElementById("dg-local-storage"),f=document.getElementById("dg-save-locally");f.style.display="block",localStorage.getItem(Wt(t,"isLocal"))==="true"&&d.setAttribute("checked","checked"),T1(t,c),E.bind(d,"change",function(){t.useLocalStorage=!t.useLocalStorage,T1(t,c)})}var p=document.getElementById("dg-new-constructor");E.bind(p,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Pi.hide()}),E.bind(a,"click",function(){p.innerHTML=JSON.stringify(t.getSaveObject(),void 0,2),Pi.show(),p.focus(),p.select()}),E.bind(b,"click",function(){t.save()}),E.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&t.saveAs(h)}),E.bind(s,"click",function(){t.revert()})}function x9(t){var e=void 0;t.__resize_handle=document.createElement("div"),U.extend(t.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function a(s){return s.preventDefault(),t.width+=e-s.clientX,t.onResize(),e=s.clientX,!1}function b(){E.removeClass(t.__closeButton,qe.CLASS_DRAG),E.unbind(window,"mousemove",a),E.unbind(window,"mouseup",b)}function i(s){return s.preventDefault(),e=s.clientX,E.addClass(t.__closeButton,qe.CLASS_DRAG),E.bind(window,"mousemove",a),E.bind(window,"mouseup",b),!1}E.bind(t.__resize_handle,"mousedown",i),E.bind(t.__closeButton,"mousedown",i),t.domElement.insertBefore(t.__resize_handle,t.domElement.firstElementChild)}function W4(t,e){t.domElement.style.width=e+"px",t.__save_row&&t.autoPlace&&(t.__save_row.style.width=e+"px"),t.__closeButton&&(t.__closeButton.style.width=e+"px")}function e0(t,e){var a={};return U.each(t.__rememberedObjects,function(b,i){var s={},o=t.__rememberedObjectIndecesToControllers[i];U.each(o,function(c,d){s[d]=e?c.initialValue:c.getValue()}),a[i]=s}),a}function S9(t){for(var e=0;e<t.__preset_select.length;e++)t.__preset_select[e].value===t.preset&&(t.__preset_select.selectedIndex=e)}function E1(t){t.length!==0&&G9.call(window,function(){E1(t)}),U.each(t,function(e){e.updateDisplay()})}var A1=qe;var Ri={Linear:function(t){return t},InQuad:function(t){return t*t},OutQuad:function(t){return t*(2-t)},InOutQuad:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},InCubic:function(t){return t*t*t},OutCubic:function(t){return--t*t*t+1},InOutCubic:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},InQuart:function(t){return t*t*t*t},OutQuart:function(t){return 1- --t*t*t*t},InOutQuart:function(t){return(t*=2)<1?.5*t*t*t*t:.5*((t-=2)*t*t*t-2)},InQuint:function(t){return t*t*t*t*t},OutQuint:function(t){return--t*t*t*t*t+1},InOutQuint:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},InSine:function(t){return 1-Math.cos(t*Math.PI/2)},OutSine:function(t){return Math.sin(t*Math.PI/2)},InOutSine:function(t){return .5*(1-Math.cos(Math.PI*t))},InBounce:function(t){return 1-E9(1-t)},OutBounce:function(t){return t<.36363636363636365?7.5625*t*t:t<.7272727272727273?(t=t-.5454545454545454,7.5625*t*t+.75):t<.9090909090909091?(t=t-.8181818181818182,7.5625*t*t+.9375):(t=t-.9545454545454546,7.5625*t*t+.984375)},InOutBounce:function(t){return t<.5?Ri.InBounce(t*2)*.5:Ri.OutBounce(t*2-1)*.5+1*.5},InElastic:function(t,e,a){typeof a=="undefined"&&(a=0),typeof e=="undefined"&&(e=1);var b=1.70158;return t==0?0:t==1?1:(a||(a=.3),e<1?(e=1,b=a/4):b=a/(2*Math.PI)*Math.asin(1/e),-(e*Math.pow(2,10*(t-=1))*Math.sin((t-b)*(Math.PI*2)/a)))},OutElastic:function(t,e,a){typeof a=="undefined"&&(a=0),typeof e=="undefined"&&(e=1);var b=1.70158;return t==0?0:t==1?1:(a||(a=.3),e<1?(e=1,b=a/4):b=a/(2*Math.PI)*Math.asin(1/e),e*Math.pow(2,-10*t)*Math.sin((t-b)*(Math.PI*2)/a)+1)},InOutElastic:function(t,e,a){var b;return t=t/2-1,t===0||t===1?t:(a||(a=.44999999999999996),e?b=a/(Math.PI*2)*Math.asin(1/e):(e=1,b=a/4),e*Math.pow(2,10*t)*Math.sin((t-b)*(Math.PI*2)/a)/-2)},InExpo:function(t){return Math.pow(2,10*(t-1))},OutExpo:function(t){return-Math.pow(2,-10*t)+1},InOutExpo:function(t){return t==0?0:t==1?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},InCirc:function(t){return-1*(Math.sqrt(1-t*t)-1)},OutCirc:function(t){return t=t-1,Math.sqrt(1-t*t)},InOutCirc:function(t){var e=1;return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},InBack:function(t,e){return!e&&e!==0&&(e=1.70158),1*t*t*((e+1)*t-e)},OutBack:function(t,e){return!e&&e!==0&&(e=1.70158),t=t-1,t*t*((e+1)*t+e)+1},InOutBack:function(t,e){return e==null&&(e=1.70158),(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)}},E9=Ri.OutBounce;var a0=class{constructor(e){this.colors=e.map(a=>new ge(a))}getAt(e){e=L4(e,0,1);let a=Math.floor(e*this.colors.length*.9999),b=L4(a+1,0,this.colors.length-1),i=this.colors[a],s=this.colors[b],o=(e-a/this.colors.length)/(1/this.colors.length),c=new ge;return c.r=Ot(i.r,s.r,o),c.g=Ot(i.g,s.g,o),c.b=Ot(i.b,s.b,o),c}};var L1=["#FF2000","#FF5900","#FE9100","#FEFDFC","#FEC194","#FE9F5B"],P1=["#FF6D00","#FBF8EB","#008B99","#F8E1A6","#FDA81F","#B80A01","#480D07"],C1=["#EF2006","#350000","#A11104","#ED5910","#F1B52E","#7B5614","#F7F1AC"],R1=["#F62D62","#FFFFFF","#FDB600","#F42D2D","#544C98","#ECACBC"],H1=["#FEB019","#F46002","#E1E7F1","#0A1D69","#138FE2","#0652C4","#D23401","#B0A12F"],F1=["#FFFEFE","#0D0211","#FBCEA0","#FFAD5D","#530E1D","#FE9232","#B93810","#907996"],I1=["#EDEBE7","#13595A","#DE1408","#161814","#E1610A","#B7BDB3","#9F9772"],D1=["#F62D62","#FFFFFF","#FDB600","#F42D2D","#544C98","#ECACBC"],O1=["#F2E9D9","#101010","#EA4B04","#B6AC9E","#5A5754","#837F7A","#E78E36","#552509"];var N1=s1.tree.map(t=>t.path),B1=class{constructor(){this.exposure=.3,this.iso=1,this.focalDistance=17,this.dofStrength=2,this.dofRange=.04}},eb=new B1,qt=new A1;qt.add(eb,"exposure",.01,1,.01).listen();qt.add(eb,"focalDistance",0,100,.01).listen();qt.add(eb,"dofStrength",.01,3,.01).listen();qt.add(eb,"dofRange",0,1,.01).listen();qt.closed=!0;function Y4(){Na.setParams({focalDistance:eb.focalDistance,dofRange:eb.dofRange,dofStrength:eb.dofStrength,iso:eb.iso,exposure:eb.exposure})}for(let t of qt.__controllers)t.onChange(e=>{Na.reset(),Y4()});var Na=new H4(Ta),T9=10,U1=P4(),Xt=!1,W1=new V,A9=new V(.5,.5,1.5);function L9(t){for(let e=0;e<T9;e++){W1.copy(t).multiplyScalar(.01);let a=h1(W1,U1);a.normalize().multiply(A9),t.add(a)}}var q1=[R1,L1,F1,I1,P1,C1,D1,H1,O1];function P9(){let t=q1[Math.floor(Math.random()*q1.length)],e=new a0(t),a=[];for(let b=0;b<2;b++)a.push(e.getAt(Math.random()));return new a0(a)}function C9(t){let e=P9(),a=t.reduce((p,h)=>p+h.points.length-1,0),b=new Be,i=new Float32Array(a*3),s=new Float32Array(a*3),o=new Float32Array(a),c=new Float32Array(a),d=new Float32Array(a*3),f=0;for(let p=0;p<t.length;p++){let h=t[p];for(let n=0;n<h.points.length-1;n++){let g=h.points[n],u=h.points[n+1];i[f]=g.x,i[f+1]=-g.y,i[f+2]=g.z,s[f]=u.x,s[f+1]=-u.y,s[f+2]=u.z,o[f/3]=2*h.sizes[n],c[f/3]=Math.random()*1e6;let{r:m,g:v,b:r}=e.getAt(f/3/a);d[f]=(1-m)*10,d[f+1]=(1-v)*10,d[f+2]=(1-r)*10,f+=3}}b.setAttribute("position",new We(i,3)),b.setAttribute("to",new We(s,3)),b.setAttribute("size",new We(o,1)),b.setAttribute("seed",new We(c,1)),b.setAttribute("color",new We(d,3)),Na.addLines(b),J4=!1}var J4=!1;async function X1(){if(J4)return;J4=!0;let t=await n1(N1[Math.floor(Math.random()*N1.length)]),e=[],a={x:Infinity,y:Infinity},b={x:-Infinity,y:-Infinity};for(let s of t){let o=0,c=[];for(let d of s.points){Xt&&L9(d),d.multiplyScalar(.1),a.x=Math.min(a.x,d.x),a.y=Math.min(a.y,d.y),b.x=Math.max(b.x,d.x),b.y=Math.max(b.y,d.y);let f=Ot(0,1,Ri.OutQuint(o/s.points.length));c.push(f),o++}s.sizes=c}let i={x:a.x+(b.x-a.x)/2,y:a.y+(b.y-a.y)/2};for(let s of t)for(let o of s.points)o.x-=i.x,o.y-=i.y;C9(t),Na.reset()}X1();function b0(){Xt&&(U1=P4()),Na.clear(),X1()}var R9=i1();R9.addEventListener("change",t=>Na.reset());function Z4(){eb.focalDistance=Ja.position.length(),Na.reset(),Y4()}window.addEventListener("keydown",t=>{t.code==="KeyR"&&b0(),t.code==="Space"&&Z4(),t.code==="KeyT"&&(Xt=!Xt,b0())});document.querySelector("#randomizeBtn").addEventListener("click",t=>{b0()});document.querySelector("#focusBtn").addEventListener("click",t=>{Z4()});document.querySelector("#twistBtn").addEventListener("click",t=>{Xt=!Xt,b0()});Ja.position.set(.5,-.5,1).normalize().multiplyScalar(17);Ja.lookAt(A4.position);Z4();Ta.setClearColor(1052688,1);Na.finalShader.uniforms.invert.value=!0;function Y1(){Na.render(Ja),Ta.setAnimationLoop(Y1)}Ta.autoClear=!1;function H9(t,e){Na.setSize(t,e),Na.reset()}t1(H9);Y4();qs();Y1();})();
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */