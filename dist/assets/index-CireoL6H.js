(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sr="160",Na=0,Er=1,Oa=2,Ko=1,$o=2,ri=3,Si=0,Ie=1,oi=2,gi=0,nn=1,br=2,wr=3,Tr=4,Fa=5,Li=100,ka=101,Ba=102,Ar=103,Cr=104,Ga=200,za=201,Ha=202,Va=203,js=204,Ks=205,Wa=206,Xa=207,qa=208,Ya=209,ja=210,Ka=211,$a=212,Za=213,Ja=214,Qa=0,tl=1,el=2,Qn=3,il=4,nl=5,sl=6,rl=7,Zo=0,ol=1,al=2,_i=0,ll=1,cl=2,hl=3,Jo=4,dl=5,ul=6,Qo=300,on=301,an=302,$s=303,Zs=304,os=306,be=1e3,ze=1001,Js=1002,Pe=1003,Lr=1004,_s=1005,ke=1006,fl=1007,ln=1008,xi=1009,pl=1010,ml=1011,rr=1012,ta=1013,pi=1014,mi=1015,bn=1016,ea=1017,ia=1018,Pi=1020,gl=1021,je=1023,_l=1024,xl=1025,Ii=1026,cn=1027,vl=1028,na=1029,Sl=1030,sa=1031,ra=1033,xs=33776,vs=33777,Ss=33778,Ms=33779,Rr=35840,Pr=35841,Ir=35842,Dr=35843,oa=36196,Ur=37492,Nr=37496,Or=37808,Fr=37809,kr=37810,Br=37811,Gr=37812,zr=37813,Hr=37814,Vr=37815,Wr=37816,Xr=37817,qr=37818,Yr=37819,jr=37820,Kr=37821,ys=36492,$r=36494,Zr=36495,Ml=36283,Jr=36284,Qr=36285,to=36286,aa=3e3,Di=3001,yl=3200,El=3201,la=0,bl=1,He="",pe="srgb",li="srgb-linear",or="display-p3",as="display-p3-linear",ts="linear",ne="srgb",es="rec709",is="p3",Fi=7680,eo=519,wl=512,Tl=513,Al=514,ca=515,Cl=516,Ll=517,Rl=518,Pl=519,io=35044,no="300 es",Qs=1035,ai=2e3,ns=2001;class un{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let so=1234567;const Mn=Math.PI/180,hn=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function ar(s,t){return(s%t+t)%t}function Il(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Dl(s,t,e){return s!==t?(e-s)/(t-s):0}function yn(s,t,e){return(1-e)*s+e*t}function Ul(s,t,e,i){return yn(s,t,1-Math.exp(-e*i))}function Nl(s,t=1){return t-Math.abs(ar(s,t*2)-t)}function Ol(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Fl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function kl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Bl(s,t){return s+Math.random()*(t-s)}function Gl(s){return s*(.5-Math.random())}function zl(s){s!==void 0&&(so=s);let t=so+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hl(s){return s*Mn}function Vl(s){return s*hn}function tr(s){return(s&s-1)===0&&s!==0}function Wl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ss(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xl(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),f=a((t-i)/2),m=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Qi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ql={DEG2RAD:Mn,RAD2DEG:hn,generateUUID:fn,clamp:we,euclideanModulo:ar,mapLinear:Il,inverseLerp:Dl,lerp:yn,damp:Ul,pingpong:Nl,smoothstep:Ol,smootherstep:Fl,randInt:kl,randFloat:Bl,randFloatSpread:Gl,seededRandom:zl,degToRad:Hl,radToDeg:Vl,isPowerOfTwo:tr,ceilPowerOfTwo:Wl,floorPowerOfTwo:ss,setQuaternionFromProperEuler:Xl,normalize:Le,denormalize:Qi};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,n,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=n[0],p=n[3],u=n[6],b=n[1],S=n[4],w=n[7],R=n[2],A=n[5],C=n[8];return r[0]=a*_+o*b+l*R,r[3]=a*p+o*S+l*A,r[6]=a*u+o*w+l*C,r[1]=c*_+h*b+d*R,r[4]=c*p+h*S+d*A,r[7]=c*u+h*w+d*C,r[2]=f*_+m*b+g*R,r[5]=f*p+m*S+g*A,r[8]=f*u+m*w+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*d+i*f+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(n*c-h*i)*_,t[2]=(o*i-n*a)*_,t[3]=f*_,t[4]=(h*e-n*l)*_,t[5]=(n*r-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Es.makeScale(t,e)),this}rotate(t){return this.premultiply(Es.makeRotation(-t)),this}translate(t,e){return this.premultiply(Es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Xt;function ha(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yl(){const s=rs("canvas");return s.style.display="block",s}const ro={};function En(s){s in ro||(ro[s]=!0,console.warn(s))}const oo=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ao=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rn={[li]:{transfer:ts,primaries:es,toReference:s=>s,fromReference:s=>s},[pe]:{transfer:ne,primaries:es,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[as]:{transfer:ts,primaries:is,toReference:s=>s.applyMatrix3(ao),fromReference:s=>s.applyMatrix3(oo)},[or]:{transfer:ne,primaries:is,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ao),fromReference:s=>s.applyMatrix3(oo).convertLinearToSRGB()}},jl=new Set([li,as]),Jt={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!jl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Rn[t].toReference,n=Rn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Rn[s].primaries},getTransfer:function(s){return s===He?ts:Rn[s].transfer}};function sn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ki;class da{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=rs("canvas")),ki.width=t.width,ki.height=t.height;const i=ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=sn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(sn(e[i]/255)*255):e[i]=sn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kl=0;class ua{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=fn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(ws(n[a].image)):r.push(ws(n[a]))}else r=ws(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function ws(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?da.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $l=0;class Ue extends un{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=ze,n=ze,r=ke,a=ln,o=je,l=xi,c=Ue.DEFAULT_ANISOTROPY,h=He){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=fn(),this.name="",this.source=new ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Di?pe:He),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case be:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case Js:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case be:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case Js:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Di:aa}set encoding(t){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Di?pe:He}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Qo;Ue.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,i=0,n=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,w=(m+1)/2,R=(u+1)/2,A=(h+f)/4,C=(d+_)/4,z=(g+p)/4;return S>w&&S>R?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=A/i,r=C/i):w>R?w<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(w),i=A/n,r=z/n):R<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(R),i=C/r,n=z/r),this.set(i,n,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zl extends un{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Di?pe:He),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ue(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ua(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Zl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fa extends Ue{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jl extends Ue{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-o;const u=l*f+c*m+h*g+d*_,b=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const R=Math.sqrt(S),A=Math.atan2(R,u*b);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const w=o*b;if(l=l*p+f*w,c=c*p+m*w,h=h*p+g*w,d=d*p+_*w,p===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-o*m,t[e+2]=c*g+h*m+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),f=l(i/2),m=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-n)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-n)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=n*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ts.copy(this).projectOnVector(t),this.sub(Ts)}reflect(t){return this.sub(Ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new D,lo=new wn;class vi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(r,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pn.copy(i.boundingBox)),Pn.applyMatrix4(t.matrixWorld),this.union(Pn)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gn),In.subVectors(this.max,gn),Bi.subVectors(t.a,gn),Gi.subVectors(t.b,gn),zi.subVectors(t.c,gn),ci.subVectors(Gi,Bi),hi.subVectors(zi,Gi),Ei.subVectors(Bi,zi);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ei.z,Ei.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ei.z,0,-Ei.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ei.y,Ei.x,0];return!As(e,Bi,Gi,zi,In)||(e=[1,0,0,0,1,0,0,0,1],!As(e,Bi,Gi,zi,In))?!1:(Dn.crossVectors(ci,hi),e=[Dn.x,Dn.y,Dn.z],As(e,Bi,Gi,zi,In))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new D,new D,new D,new D,new D,new D,new D,new D],Ve=new D,Pn=new vi,Bi=new D,Gi=new D,zi=new D,ci=new D,hi=new D,Ei=new D,gn=new D,In=new D,Dn=new D,bi=new D;function As(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){bi.fromArray(s,r);const o=n.x*Math.abs(bi.x)+n.y*Math.abs(bi.y)+n.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=i.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ql=new vi,_n=new D,Cs=new D;class lr{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ql.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_n.subVectors(t,this.center);const e=_n.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(_n,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_n.copy(t.center).add(Cs)),this.expandByPoint(_n.copy(t.center).sub(Cs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new D,Ls=new D,Un=new D,di=new D,Rs=new D,Nn=new D,Ps=new D;class pa{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ls.copy(t).add(e).multiplyScalar(.5),Un.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Ls);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Un),o=di.dot(this.direction),l=-di.dot(Un),c=di.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ls).addScaledVector(Un,f),m}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),n=ei.dot(ei)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,n,r){Rs.subVectors(e,t),Nn.subVectors(i,t),Ps.crossVectors(Rs,Nn);let a=this.direction.dot(Ps),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(Nn.crossVectors(di,Nn));if(l<0)return null;const c=o*this.direction.dot(Rs.cross(di));if(c<0||l+c>a)return null;const h=-o*di.dot(Ps);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,n,r,a,o,l,c,h,d,f,m,g,_,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,f,m,g,_,p)}set(t,e,i,n,r,a,o,l,c,h,d,f,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=n,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tc,t,ec)}lookAt(t,e,i){const n=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),ui.crossVectors(i,Oe),ui.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),ui.crossVectors(i,Oe)),ui.normalize(),On.crossVectors(Oe,ui),n[0]=ui.x,n[4]=On.x,n[8]=Oe.x,n[1]=ui.y,n[5]=On.y,n[9]=Oe.y,n[2]=ui.z,n[6]=On.z,n[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],b=i[3],S=i[7],w=i[11],R=i[15],A=n[0],C=n[4],z=n[8],v=n[12],E=n[1],k=n[5],B=n[9],J=n[13],P=n[2],N=n[6],W=n[10],Y=n[14],j=n[3],$=n[7],q=n[11],it=n[15];return r[0]=a*A+o*E+l*P+c*j,r[4]=a*C+o*k+l*N+c*$,r[8]=a*z+o*B+l*W+c*q,r[12]=a*v+o*J+l*Y+c*it,r[1]=h*A+d*E+f*P+m*j,r[5]=h*C+d*k+f*N+m*$,r[9]=h*z+d*B+f*W+m*q,r[13]=h*v+d*J+f*Y+m*it,r[2]=g*A+_*E+p*P+u*j,r[6]=g*C+_*k+p*N+u*$,r[10]=g*z+_*B+p*W+u*q,r[14]=g*v+_*J+p*Y+u*it,r[3]=b*A+S*E+w*P+R*j,r[7]=b*C+S*k+w*N+R*$,r[11]=b*z+S*B+w*W+R*q,r[15]=b*v+S*J+w*Y+R*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*d-n*c*d-r*o*f+i*c*f+n*o*m-i*l*m)+_*(+e*l*m-e*c*f+r*a*f-n*a*m+n*c*h-r*l*h)+p*(+e*c*d-e*o*m-r*a*d+i*a*m+r*o*h-i*c*h)+u*(-n*o*h-e*l*d+e*o*f+n*a*d-i*a*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],b=d*p*c-_*f*c+_*l*m-o*p*m-d*l*u+o*f*u,S=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,w=h*_*c-g*d*c+g*o*m-a*_*m-h*o*u+a*d*u,R=g*d*l-h*_*l-g*o*f+a*_*f+h*o*p-a*d*p,A=e*b+i*S+n*w+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=b*C,t[1]=(_*f*r-d*p*r-_*n*m+i*p*m+d*n*u-i*f*u)*C,t[2]=(o*p*r-_*l*r+_*n*c-i*p*c-o*n*u+i*l*u)*C,t[3]=(d*l*r-o*f*r-d*n*c+i*f*c+o*n*m-i*l*m)*C,t[4]=S*C,t[5]=(h*p*r-g*f*r+g*n*m-e*p*m-h*n*u+e*f*u)*C,t[6]=(g*l*r-a*p*r-g*n*c+e*p*c+a*n*u-e*l*u)*C,t[7]=(a*f*r-h*l*r+h*n*c-e*f*c-a*n*m+e*l*m)*C,t[8]=w*C,t[9]=(g*d*r-h*_*r-g*i*m+e*_*m+h*i*u-e*d*u)*C,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*u+e*o*u)*C,t[11]=(h*o*r-a*d*r-h*i*c+e*d*c+a*i*m-e*o*m)*C,t[12]=R*C,t[13]=(h*_*n-g*d*n+g*i*f-e*_*f-h*i*p+e*d*p)*C,t[14]=(g*o*n-a*_*n-g*i*l+e*_*l+a*i*p-e*o*p)*C,t[15]=(a*d*n-h*o*n+h*i*l-e*d*l-a*i*f+e*o*f)*C,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,g=r*d,_=a*h,p=a*d,u=o*d,b=l*c,S=l*h,w=l*d,R=i.x,A=i.y,C=i.z;return n[0]=(1-(_+u))*R,n[1]=(m+w)*R,n[2]=(g-S)*R,n[3]=0,n[4]=(m-w)*A,n[5]=(1-(f+u))*A,n[6]=(p+b)*A,n[7]=0,n[8]=(g+S)*C,n[9]=(p-b)*C,n[10]=(1-(f+_))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Hi.set(n[0],n[1],n[2]).length();const a=Hi.set(n[4],n[5],n[6]).length(),o=Hi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],We.copy(this);const c=1/r,h=1/a,d=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=h,We.elements[5]*=h,We.elements[6]*=h,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=ai){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let m,g;if(o===ai)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ns)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=ai){const l=this.elements,c=1/(e-t),h=1/(i-n),d=1/(a-r),f=(e+t)*c,m=(i+n)*h;let g,_;if(o===ai)g=(a+r)*d,_=-2*d;else if(o===ns)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Hi=new D,We=new ue,tc=new D(0,0,0),ec=new D(1,1,1),ui=new D,On=new D,Oe=new D,co=new ue,ho=new wn;class ls{constructor(t=0,e=0,i=0,n=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return co.makeRotationFromQuaternion(t),this.setFromRotationMatrix(co,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ho.setFromEuler(this),this.setFromQuaternion(ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class cr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ic=0;const uo=new D,Vi=new wn,ii=new ue,Fn=new D,xn=new D,nc=new D,sc=new wn,fo=new D(1,0,0),po=new D(0,1,0),mo=new D(0,0,1),rc={type:"added"},oc={type:"removed"};class me extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new D,e=new ls,i=new wn,n=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new Xt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(fo,t)}rotateY(t){return this.rotateOnAxis(po,t)}rotateZ(t){return this.rotateOnAxis(mo,t)}translateOnAxis(t,e){return uo.copy(t).applyQuaternion(this.quaternion),this.position.add(uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fo,t)}translateY(t){return this.translateOnAxis(po,t)}translateZ(t){return this.translateOnAxis(mo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fn.copy(t):Fn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(xn,Fn,this.up):ii.lookAt(Fn,xn,this.up),this.quaternion.setFromRotationMatrix(ii),n&&(ii.extractRotation(n.matrixWorld),Vi.setFromRotationMatrix(ii),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(rc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,t,nc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,sc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}me.DEFAULT_UP=new D(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new D,ni=new D,Is=new D,si=new D,Wi=new D,Xi=new D,go=new D,Ds=new D,Us=new D,Ns=new D;let kn=!1;class Ye{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Xe.subVectors(t,e),n.cross(Xe);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Xe.subVectors(n,e),ni.subVectors(i,e),Is.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(ni),l=Xe.dot(Is),c=ni.dot(ni),h=ni.dot(Is),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(t,e,i,n,r,a,o,l){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),this.getInterpolation(t,e,i,n,r,a,o,l)}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static isFrontFacing(t,e,i,n){return Xe.subVectors(i,e),ni.subVectors(t,e),Xe.cross(ni).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Xe.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),Ye.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}getInterpolation(t,e,i,n,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Wi.subVectors(n,i),Xi.subVectors(r,i),Ds.subVectors(t,i);const l=Wi.dot(Ds),c=Xi.dot(Ds);if(l<=0&&c<=0)return e.copy(i);Us.subVectors(t,n);const h=Wi.dot(Us),d=Xi.dot(Us);if(h>=0&&d<=h)return e.copy(n);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Wi,a);Ns.subVectors(t,r);const m=Wi.dot(Ns),g=Xi.dot(Ns);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Xi,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return go.subVectors(r,n),o=(d-h)/(d-h+(m-g)),e.copy(n).addScaledVector(go,o);const u=1/(p+_+f);return a=_*u,o=f*u,e.copy(i).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ma={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function Os(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Et{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Jt.workingColorSpace){if(t=ar(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Os(a,r,t+1/3),this.g=Os(a,r,t),this.b=Os(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,n),this}setStyle(t,e=pe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){const i=ma[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sn(t.r),this.g=sn(t.g),this.b=sn(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return Jt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(we(Ee.r*255,0,255))*65536+Math.round(we(Ee.g*255,0,255))*256+Math.round(we(Ee.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Ee.copy(this),e);const i=Ee.r,n=Ee.g,r=Ee.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=pe){Jt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,n=Ee.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Bn);const i=yn(fi.h,Bn.h,e),n=yn(fi.s,Bn.s,e),r=yn(fi.l,Bn.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Et;Et.NAMES=ma;let ac=0;class Tn extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=nn,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Ks,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nn&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==js&&(i.blendSrc=this.blendSrc),this.blendDst!==Ks&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class le extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new D,Gn=new Yt;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gn.fromBufferAttribute(this,e),Gn.applyMatrix3(t),this.setXY(e,Gn.x,Gn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),n=Le(n,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==io&&(t.usage=this.usage),t}}class ga extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _a extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Te extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let lc=0;const Ge=new ue,Fs=new me,qi=new D,Fe=new vi,vn=new vi,Se=new D;class Je extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ha(t)?_a:ga)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,i){return Ge.makeTranslation(t,e,i),this.applyMatrix4(Ge),this}scale(t,e,i){return Ge.makeScale(t,e,i),this.applyMatrix4(Ge),this}lookAt(t){return Fs.lookAt(t),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];vn.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Fe.min,vn.min),Fe.expandByPoint(Se),Se.addVectors(Fe.max,vn.max),Fe.expandByPoint(Se)):(Fe.expandByPoint(vn.min),Fe.expandByPoint(vn.max))}Fe.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Se.add(qi)),n=Math.max(n,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,r=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new D,h[E]=new D;const d=new D,f=new D,m=new D,g=new Yt,_=new Yt,p=new Yt,u=new D,b=new D;function S(E,k,B){d.fromArray(n,E*3),f.fromArray(n,k*3),m.fromArray(n,B*3),g.fromArray(a,E*2),_.fromArray(a,k*2),p.fromArray(a,B*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const J=1/(_.x*p.y-p.x*_.y);isFinite(J)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(J),b.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(J),c[E].add(u),c[k].add(u),c[B].add(u),h[E].add(b),h[k].add(b),h[B].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let E=0,k=w.length;E<k;++E){const B=w[E],J=B.start,P=B.count;for(let N=J,W=J+P;N<W;N+=3)S(i[N+0],i[N+1],i[N+2])}const R=new D,A=new D,C=new D,z=new D;function v(E){C.fromArray(r,E*3),z.copy(C);const k=c[E];R.copy(k),R.sub(C.multiplyScalar(C.dot(k))).normalize(),A.crossVectors(z,k);const J=A.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=J}for(let E=0,k=w.length;E<k;++E){const B=w[E],J=B.start,P=B.count;for(let N=J,W=J+P;N<W;N+=3)v(i[N+0]),v(i[N+1]),v(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Ze(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _o=new ue,wi=new pa,zn=new lr,xo=new D,Yi=new D,ji=new D,Ki=new D,ks=new D,Hn=new D,Vn=new Yt,Wn=new Yt,Xn=new Yt,vo=new D,So=new D,Mo=new D,qn=new D,Yn=new D;class L extends me{constructor(t=new Je,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Hn.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ks.fromBufferAttribute(d,t),a?Hn.addScaledVector(ks,h):Hn.addScaledVector(ks.sub(e),h))}e.add(Hn)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zn.copy(i.boundingSphere),zn.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(zn.containsPoint(wi.origin)===!1&&(wi.intersectSphere(zn,xo)===null||wi.origin.distanceToSquared(xo)>(t.far-t.near)**2))&&(_o.copy(r).invert(),wi.copy(t.ray).applyMatrix4(_o),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,R=S;w<R;w+=3){const A=o.getX(w),C=o.getX(w+1),z=o.getX(w+2);n=jn(this,u,t,i,c,h,d,A,C,z),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=o.getX(p),S=o.getX(p+1),w=o.getX(p+2);n=jn(this,a,t,i,c,h,d,b,S,w),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,R=S;w<R;w+=3){const A=w,C=w+1,z=w+2;n=jn(this,u,t,i,c,h,d,A,C,z),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=p,S=p+1,w=p+2;n=jn(this,a,t,i,c,h,d,b,S,w),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function cc(s,t,e,i,n,r,a,o){let l;if(t.side===Ie?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Si,o),l===null)return null;Yn.copy(o),Yn.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Yn);return c<e.near||c>e.far?null:{distance:c,point:Yn.clone(),object:s}}function jn(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Yi),s.getVertexPosition(l,ji),s.getVertexPosition(c,Ki);const h=cc(s,t,e,i,Yi,ji,Ki,qn);if(h){n&&(Vn.fromBufferAttribute(n,o),Wn.fromBufferAttribute(n,l),Xn.fromBufferAttribute(n,c),h.uv=Ye.getInterpolation(qn,Yi,ji,Ki,Vn,Wn,Xn,new Yt)),r&&(Vn.fromBufferAttribute(r,o),Wn.fromBufferAttribute(r,l),Xn.fromBufferAttribute(r,c),h.uv1=Ye.getInterpolation(qn,Yi,ji,Ki,Vn,Wn,Xn,new Yt),h.uv2=h.uv1),a&&(vo.fromBufferAttribute(a,o),So.fromBufferAttribute(a,l),Mo.fromBufferAttribute(a,c),h.normal=Ye.getInterpolation(qn,Yi,ji,Ki,vo,So,Mo,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};Ye.getNormal(Yi,ji,Ki,d.normal),h.face=d}return h}class lt extends Je{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function g(_,p,u,b,S,w,R,A,C,z,v){const E=w/C,k=R/z,B=w/2,J=R/2,P=A/2,N=C+1,W=z+1;let Y=0,j=0;const $=new D;for(let q=0;q<W;q++){const it=q*k-J;for(let rt=0;rt<N;rt++){const T=rt*E-B;$[_]=T*b,$[p]=it*S,$[u]=P,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[u]=A>0?1:-1,h.push($.x,$.y,$.z),d.push(rt/C),d.push(1-q/z),Y+=1}}for(let q=0;q<z;q++)for(let it=0;it<C;it++){const rt=f+it+N*q,T=f+it+N*(q+1),U=f+(it+1)+N*(q+1),Z=f+(it+1)+N*q;l.push(rt,T,Z),l.push(T,U,Z),j+=6}o.addGroup(m,j,v),m+=j,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const i=dn(s[e]);for(const n in i)t[n]=i[n]}return t}function hc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xa(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}const dc={clone:dn,merge:Re};var uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uc,this.fragmentShader=fc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dn(t.uniforms),this.uniformsGroups=hc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class va extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class De extends va{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hn*2*Math.atan(Math.tan(Mn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mn*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,Zi=1;class pc extends me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new De($i,Zi,t,e);n.layers=this.layers,this.add(n);const r=new De($i,Zi,t,e);r.layers=this.layers,this.add(r);const a=new De($i,Zi,t,e);a.layers=this.layers,this.add(a);const o=new De($i,Zi,t,e);o.layers=this.layers,this.add(o);const l=new De($i,Zi,t,e);l.layers=this.layers,this.add(l);const c=new De($i,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sa extends Ue{constructor(t,e,i,n,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:on,super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mc extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Di?pe:He),this.texture=new Sa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new lt(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:dn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:gi});r.uniforms.tEquirect.value=e;const a=new L(n,r),o=e.minFilter;return e.minFilter===ln&&(e.minFilter=ke),new pc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Bs=new D,gc=new D,_c=new Xt;class Ai{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Bs.subVectors(i,e).cross(gc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Bs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_c.getNormalMatrix(t),n=this.coplanarPoint(Bs).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new lr,Kn=new D;class hr{constructor(t=new Ai,e=new Ai,i=new Ai,n=new Ai,r=new Ai,a=new Ai){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],f=n[7],m=n[8],g=n[9],_=n[10],p=n[11],u=n[12],b=n[13],S=n[14],w=n[15];if(i[0].setComponents(l-r,f-c,p-m,w-u).normalize(),i[1].setComponents(l+r,f+c,p+m,w+u).normalize(),i[2].setComponents(l+a,f+h,p+g,w+b).normalize(),i[3].setComponents(l-a,f-h,p-g,w-b).normalize(),i[4].setComponents(l-o,f-d,p-_,w-S).normalize(),e===ai)i[5].setComponents(l+o,f+d,p+_,w+S).normalize();else if(e===ns)i[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Kn.x=n.normal.x>0?t.max.x:t.min.x,Kn.y=n.normal.y>0?t.max.y:t.min.y,Kn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Kn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ma(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function xc(s,t){const e=t.isWebGL2,i=new WeakMap;function n(c,h){const d=c.array,f=c.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),m.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];e?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,n(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}class Qt extends Je{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,f=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const b=u*f-a;for(let S=0;S<c;S++){const w=S*d-r;g.push(w,-b,0),_.push(0,0,1),p.push(S/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const S=b+c*u,w=b+c*(u+1),R=b+1+c*(u+1),A=b+1+c*u;m.push(S,w,A),m.push(w,R,A)}this.setIndex(m),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.width,t.height,t.widthSegments,t.heightSegments)}}var vc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ec=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ac=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ic=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hc=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Wc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kc="gl_FragColor = linearToOutputTexel( gl_FragColor );",$c=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zc=`#ifdef USE_ENVMAP
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
#endif`,Jc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,th=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eh=`#ifdef USE_ENVMAP
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
#endif`,ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ah=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ch=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,uh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ph=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xh=`struct PhysicalMaterial {
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
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,vh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Th=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ah=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ph=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ih=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Uh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
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
#endif`,Oh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$h=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,id=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nd=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ad=`#ifdef USE_SKINNING
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
#endif`,ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ud=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fd=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Td=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Ad=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Nd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Od=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fd=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zd=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Vd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
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
	#include <alphahash_fragment>
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
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Xd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$d=`uniform float rotation;
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
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:vc,alphahash_pars_fragment:Sc,alphamap_fragment:Mc,alphamap_pars_fragment:yc,alphatest_fragment:Ec,alphatest_pars_fragment:bc,aomap_fragment:wc,aomap_pars_fragment:Tc,batching_pars_vertex:Ac,batching_vertex:Cc,begin_vertex:Lc,beginnormal_vertex:Rc,bsdfs:Pc,iridescence_fragment:Ic,bumpmap_pars_fragment:Dc,clipping_planes_fragment:Uc,clipping_planes_pars_fragment:Nc,clipping_planes_pars_vertex:Oc,clipping_planes_vertex:Fc,color_fragment:kc,color_pars_fragment:Bc,color_pars_vertex:Gc,color_vertex:zc,common:Hc,cube_uv_reflection_fragment:Vc,defaultnormal_vertex:Wc,displacementmap_pars_vertex:Xc,displacementmap_vertex:qc,emissivemap_fragment:Yc,emissivemap_pars_fragment:jc,colorspace_fragment:Kc,colorspace_pars_fragment:$c,envmap_fragment:Zc,envmap_common_pars_fragment:Jc,envmap_pars_fragment:Qc,envmap_pars_vertex:th,envmap_physical_pars_fragment:uh,envmap_vertex:eh,fog_vertex:ih,fog_pars_vertex:nh,fog_fragment:sh,fog_pars_fragment:rh,gradientmap_pars_fragment:oh,lightmap_fragment:ah,lightmap_pars_fragment:lh,lights_lambert_fragment:ch,lights_lambert_pars_fragment:hh,lights_pars_begin:dh,lights_toon_fragment:fh,lights_toon_pars_fragment:ph,lights_phong_fragment:mh,lights_phong_pars_fragment:gh,lights_physical_fragment:_h,lights_physical_pars_fragment:xh,lights_fragment_begin:vh,lights_fragment_maps:Sh,lights_fragment_end:Mh,logdepthbuf_fragment:yh,logdepthbuf_pars_fragment:Eh,logdepthbuf_pars_vertex:bh,logdepthbuf_vertex:wh,map_fragment:Th,map_pars_fragment:Ah,map_particle_fragment:Ch,map_particle_pars_fragment:Lh,metalnessmap_fragment:Rh,metalnessmap_pars_fragment:Ph,morphcolor_vertex:Ih,morphnormal_vertex:Dh,morphtarget_pars_vertex:Uh,morphtarget_vertex:Nh,normal_fragment_begin:Oh,normal_fragment_maps:Fh,normal_pars_fragment:kh,normal_pars_vertex:Bh,normal_vertex:Gh,normalmap_pars_fragment:zh,clearcoat_normal_fragment_begin:Hh,clearcoat_normal_fragment_maps:Vh,clearcoat_pars_fragment:Wh,iridescence_pars_fragment:Xh,opaque_fragment:qh,packing:Yh,premultiplied_alpha_fragment:jh,project_vertex:Kh,dithering_fragment:$h,dithering_pars_fragment:Zh,roughnessmap_fragment:Jh,roughnessmap_pars_fragment:Qh,shadowmap_pars_fragment:td,shadowmap_pars_vertex:ed,shadowmap_vertex:id,shadowmask_pars_fragment:nd,skinbase_vertex:sd,skinning_pars_vertex:rd,skinning_vertex:od,skinnormal_vertex:ad,specularmap_fragment:ld,specularmap_pars_fragment:cd,tonemapping_fragment:hd,tonemapping_pars_fragment:dd,transmission_fragment:ud,transmission_pars_fragment:fd,uv_pars_fragment:pd,uv_pars_vertex:md,uv_vertex:gd,worldpos_vertex:_d,background_vert:xd,background_frag:vd,backgroundCube_vert:Sd,backgroundCube_frag:Md,cube_vert:yd,cube_frag:Ed,depth_vert:bd,depth_frag:wd,distanceRGBA_vert:Td,distanceRGBA_frag:Ad,equirect_vert:Cd,equirect_frag:Ld,linedashed_vert:Rd,linedashed_frag:Pd,meshbasic_vert:Id,meshbasic_frag:Dd,meshlambert_vert:Ud,meshlambert_frag:Nd,meshmatcap_vert:Od,meshmatcap_frag:Fd,meshnormal_vert:kd,meshnormal_frag:Bd,meshphong_vert:Gd,meshphong_frag:zd,meshphysical_vert:Hd,meshphysical_frag:Vd,meshtoon_vert:Wd,meshtoon_frag:Xd,points_vert:qd,points_frag:Yd,shadow_vert:jd,shadow_frag:Kd,sprite_vert:$d,sprite_frag:Zd},dt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},$e={basic:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Re([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Re([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Re([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Re([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Re([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Re([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Re([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Re([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Re([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Re([dt.common,dt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Re([dt.lights,dt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};$e.physical={uniforms:Re([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const $n={r:0,b:0,g:0};function Jd(s,t,e,i,n,r,a){const o=new Et(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let b=!1,S=u.isScene===!0?u.background:null;S&&S.isTexture&&(S=(u.backgroundBlurriness>0?e:t).get(S)),S===null?_(o,l):S&&S.isColor&&(_(S,1),b=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===os)?(h===void 0&&(h=new L(new lt(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:dn($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(S.colorSpace)!==ne,(d!==S||f!==S.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new L(new Qt(2,2),new Oi({name:"BackgroundMaterial",uniforms:dn($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB($n,xa(s)),i.buffers.color.setClear($n.r,$n.g,$n.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Qd(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null);let c=l,h=!1;function d(P,N,W,Y,j){let $=!1;if(a){const q=_(Y,W,N);c!==q&&(c=q,m(c.object)),$=u(P,Y,W,j),$&&b(P,Y,W,j)}else{const q=N.wireframe===!0;(c.geometry!==Y.id||c.program!==W.id||c.wireframe!==q)&&(c.geometry=Y.id,c.program=W.id,c.wireframe=q,$=!0)}j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,z(P,N,W,Y),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return i.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,N,W){const Y=W.wireframe===!0;let j=o[P.id];j===void 0&&(j={},o[P.id]=j);let $=j[N.id];$===void 0&&($={},j[N.id]=$);let q=$[Y];return q===void 0&&(q=p(f()),$[Y]=q),q}function p(P){const N=[],W=[],Y=[];for(let j=0;j<n;j++)N[j]=0,W[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function u(P,N,W,Y){const j=c.attributes,$=N.attributes;let q=0;const it=W.getAttributes();for(const rt in it)if(it[rt].location>=0){const U=j[rt];let Z=$[rt];if(Z===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;q++}return c.attributesNum!==q||c.index!==Y}function b(P,N,W,Y){const j={},$=N.attributes;let q=0;const it=W.getAttributes();for(const rt in it)if(it[rt].location>=0){let U=$[rt];U===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(U=P.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),j[rt]=Z,q++}c.attributes=j,c.attributesNum=q,c.index=Y}function S(){const P=c.newAttributes;for(let N=0,W=P.length;N<W;N++)P[N]=0}function w(P){R(P,0)}function R(P,N){const W=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;W[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),j[P]!==N&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),j[P]=N)}function A(){const P=c.newAttributes,N=c.enabledAttributes;for(let W=0,Y=N.length;W<Y;W++)N[W]!==P[W]&&(s.disableVertexAttribArray(W),N[W]=0)}function C(P,N,W,Y,j,$,q){q===!0?s.vertexAttribIPointer(P,N,W,j,$):s.vertexAttribPointer(P,N,W,Y,j,$)}function z(P,N,W,Y){if(i.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const j=Y.attributes,$=W.getAttributes(),q=N.defaultAttributeValues;for(const it in $){const rt=$[it];if(rt.location>=0){let T=j[it];if(T===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(T=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(T=P.instanceColor)),T!==void 0){const U=T.normalized,Z=T.itemSize,ht=e.get(T);if(ht===void 0)continue;const _t=ht.buffer,Lt=ht.type,Ut=ht.bytesPerElement,At=i.isWebGL2===!0&&(Lt===s.INT||Lt===s.UNSIGNED_INT||T.gpuType===ta);if(T.isInterleavedBufferAttribute){const qt=T.data,G=qt.stride,ce=T.offset;if(qt.isInstancedInterleavedBuffer){for(let wt=0;wt<rt.locationSize;wt++)R(rt.location+wt,qt.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=qt.meshPerAttribute*qt.count)}else for(let wt=0;wt<rt.locationSize;wt++)w(rt.location+wt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let wt=0;wt<rt.locationSize;wt++)C(rt.location+wt,Z/rt.locationSize,Lt,U,G*Ut,(ce+Z/rt.locationSize*wt)*Ut,At)}else{if(T.isInstancedBufferAttribute){for(let qt=0;qt<rt.locationSize;qt++)R(rt.location+qt,T.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let qt=0;qt<rt.locationSize;qt++)w(rt.location+qt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let qt=0;qt<rt.locationSize;qt++)C(rt.location+qt,Z/rt.locationSize,Lt,U,Z*Ut,Z/rt.locationSize*qt*Ut,At)}}else if(q!==void 0){const U=q[it];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(rt.location,U);break;case 3:s.vertexAttrib3fv(rt.location,U);break;case 4:s.vertexAttrib4fv(rt.location,U);break;default:s.vertexAttrib1fv(rt.location,U)}}}}A()}function v(){B();for(const P in o){const N=o[P];for(const W in N){const Y=N[W];for(const j in Y)g(Y[j].object),delete Y[j];delete N[W]}delete o[P]}}function E(P){if(o[P.id]===void 0)return;const N=o[P.id];for(const W in N){const Y=N[W];for(const j in Y)g(Y[j].object),delete Y[j];delete N[W]}delete o[P.id]}function k(P){for(const N in o){const W=o[N];if(W[P.id]===void 0)continue;const Y=W[P.id];for(const j in Y)g(Y[j].object),delete Y[j];delete W[P.id]}}function B(){J(),h=!0,c!==l&&(c=l,m(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:J,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:k,initAttributes:S,enableAttribute:w,disableUnusedAttributes:A}}function tu(s,t,e,i){const n=i.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(n)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function eu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,w=a||t.has("OES_texture_float"),R=S&&w,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:R,maxSamples:A}}function iu(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Ai,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||n;return n=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,S=b*4;let w=u.clippingState||null;l.value=w,w=h(g,f,S,m);for(let R=0;R!==S;++R)w[R]=e[R];u.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,w=m;S!==_;++S,w+=4)a.copy(d[S]).applyMatrix4(b,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function nu(s){let t=new WeakMap;function e(a,o){return o===$s?a.mapping=on:o===Zs&&(a.mapping=an),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$s||o===Zs)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mc(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class ya extends va{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const tn=4,yo=[.125,.215,.35,.446,.526,.582],Ri=20,Gs=new ya,Eo=new Et;let zs=null,Hs=0,Vs=0;const Ci=(1+Math.sqrt(5))/2,Ji=1/Ci,bo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ci,Ji),new D(0,Ci,-Ji),new D(Ji,0,Ci),new D(-Ji,0,Ci),new D(Ci,Ji,0),new D(-Ci,Ji,0)];class wo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){zs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zs,Hs,Vs),t.scissorTest=!1,Zn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===on||t.mapping===an?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:bn,format:je,colorSpace:li,depthBuffer:!1},n=To(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=su(r)),this._blurMaterial=ru(r,t,e)}return n}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,Gs)}_sceneToCubeUV(t,e,i,n){const o=new De(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Eo),h.toneMapping=_i,h.autoClear=!1;const m=new le({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new L(new lt,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Eo),_=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const S=this._cubeSize;Zn(n,b*S,u>2?S:0,S,S),h.setRenderTarget(n),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===on||t.mapping===an;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new L(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Zn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Gs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=bo[(n-1)%bo.length];this._blur(t,n-1,n,r,a)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new L(this._lodPlanes[n],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ri-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Ri;p>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const u=[];let b=0;for(let C=0;C<Ri;++C){const z=C/_,v=Math.exp(-z*z/2);u.push(v),C===0?b+=v:C<p&&(b+=2*v)}for(let C=0;C<u.length;C++)u[C]=u[C]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const w=this._sizeLods[n],R=3*w*(n>S-tn?n-S+tn:0),A=4*(this._cubeSize-w);Zn(e,R,A,3*w,2*w),l.setRenderTarget(e),l.render(d,Gs)}}function su(s){const t=[],e=[],i=[];let n=s;const r=s-tn+1+yo.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-tn?l=yo[a-s+tn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,b=new Float32Array(_*g*m),S=new Float32Array(p*g*m),w=new Float32Array(u*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,z=A>2?0:-1,v=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];b.set(v,_*g*A),S.set(f,p*g*A);const E=[A,A,A,A,A,A];w.set(E,u*g*A)}const R=new Je;R.setAttribute("position",new Ze(b,_)),R.setAttribute("uv",new Ze(S,p)),R.setAttribute("faceIndex",new Ze(w,u)),t.push(R),n>tn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function To(s,t,e){const i=new Ni(s,t,e);return i.texture.mapping=os,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zn(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function ru(s,t,e){const i=new Float32Array(Ri),n=new D(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:dr(),fragmentShader:`

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

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ao(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Co(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function dr(){return`

		precision mediump float;
		precision mediump int;

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
	`}function ou(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===$s||l===Zs,h=l===on||l===an;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new wo(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&n(d)){e===null&&(e=new wo(s));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function au(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function lu(s,t,e,i){const n={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete n[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,w=b.length;S<w;S+=3){const R=b[S+0],A=b[S+1],C=b[S+2];f.push(R,A,A,C,C,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,w=b.length/3-1;S<w;S+=3){const R=S+0,A=S+1,C=S+2;f.push(R,A,A,C,C,R)}}else return;const p=new(ha(f)?_a:ga)(f,1);p.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function cu(s,t,e,i){const n=i.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*l),e.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(n)p=s,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,o,m*l,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let u=0;for(let b=0;b<_;b++)u+=g[b];e.update(u,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function hu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function du(s,t){return s[0]-t[0]}function uu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function fu(s,t,e){const i={},n=new Float32Array(8),r=new WeakMap,a=new se,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let N=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const S=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let v=0;S===!0&&(v=1),w===!0&&(v=2),R===!0&&(v=3);let E=h.attributes.position.count*v,k=1;E>t.maxTextureSize&&(k=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const B=new Float32Array(E*k*4*_),J=new fa(B,E,k,_);J.type=mi,J.needsUpdate=!0;const P=v*4;for(let W=0;W<_;W++){const Y=A[W],j=C[W],$=z[W],q=E*k*4*W;for(let it=0;it<Y.count;it++){const rt=it*P;S===!0&&(a.fromBufferAttribute(Y,it),B[q+rt+0]=a.x,B[q+rt+1]=a.y,B[q+rt+2]=a.z,B[q+rt+3]=0),w===!0&&(a.fromBufferAttribute(j,it),B[q+rt+4]=a.x,B[q+rt+5]=a.y,B[q+rt+6]=a.z,B[q+rt+7]=0),R===!0&&(a.fromBufferAttribute($,it),B[q+rt+8]=a.x,B[q+rt+9]=a.y,B[q+rt+10]=a.z,B[q+rt+11]=$.itemSize===4?a.w:1)}}p={count:_,texture:J,size:new Yt(E,k)},r.set(h,p),h.addEventListener("dispose",N)}let u=0;for(let S=0;S<f.length;S++)u+=f[S];const b=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",b),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];i[h.id]=_}for(let w=0;w<g;w++){const R=_[w];R[0]=w,R[1]=f[w]}_.sort(uu);for(let w=0;w<8;w++)w<g&&_[w][1]?(o[w][0]=_[w][0],o[w][1]=_[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(du);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let b=0;for(let w=0;w<8;w++){const R=o[w],A=R[0],C=R[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+w)!==p[A]&&h.setAttribute("morphTarget"+w,p[A]),u&&h.getAttribute("morphNormal"+w)!==u[A]&&h.setAttribute("morphNormal"+w,u[A]),n[w]=C,b+=C):(p&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),u&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),n[w]=0)}const S=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",S),d.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function pu(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(n.get(d)!==c&&(t.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return d}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ea extends Ue{constructor(t,e,i,n,r,a,o,l,c,h){if(h=h!==void 0?h:Ii,h!==Ii&&h!==cn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ii&&(i=pi),i===void 0&&h===cn&&(i=Pi),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ba=new Ue,wa=new Ea(1,1);wa.compareFunction=ca;const Ta=new fa,Aa=new Jl,Ca=new Sa,Lo=[],Ro=[],Po=new Float32Array(16),Io=new Float32Array(9),Do=new Float32Array(4);function pn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Lo[n];if(r===void 0&&(r=new Float32Array(n),Lo[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function cs(s,t){let e=Ro[t];e===void 0&&(e=new Int32Array(t),Ro[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function mu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function gu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function _u(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function xu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function vu(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Do.set(i),s.uniformMatrix2fv(this.addr,!1,Do),_e(e,i)}}function Su(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Io.set(i),s.uniformMatrix3fv(this.addr,!1,Io),_e(e,i)}}function Mu(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Po.set(i),s.uniformMatrix4fv(this.addr,!1,Po),_e(e,i)}}function yu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Eu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function bu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function wu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function Tu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Au(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function Cu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Lu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function Ru(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const r=this.type===s.SAMPLER_2D_SHADOW?wa:ba;e.setTexture2D(t||r,n)}function Pu(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Aa,n)}function Iu(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ca,n)}function Du(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ta,n)}function Uu(s){switch(s){case 5126:return mu;case 35664:return gu;case 35665:return _u;case 35666:return xu;case 35674:return vu;case 35675:return Su;case 35676:return Mu;case 5124:case 35670:return yu;case 35667:case 35671:return Eu;case 35668:case 35672:return bu;case 35669:case 35673:return wu;case 5125:return Tu;case 36294:return Au;case 36295:return Cu;case 36296:return Lu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ru;case 35679:case 36299:case 36307:return Pu;case 35680:case 36300:case 36308:case 36293:return Iu;case 36289:case 36303:case 36311:case 36292:return Du}}function Nu(s,t){s.uniform1fv(this.addr,t)}function Ou(s,t){const e=pn(t,this.size,2);s.uniform2fv(this.addr,e)}function Fu(s,t){const e=pn(t,this.size,3);s.uniform3fv(this.addr,e)}function ku(s,t){const e=pn(t,this.size,4);s.uniform4fv(this.addr,e)}function Bu(s,t){const e=pn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Gu(s,t){const e=pn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function zu(s,t){const e=pn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Hu(s,t){s.uniform1iv(this.addr,t)}function Vu(s,t){s.uniform2iv(this.addr,t)}function Wu(s,t){s.uniform3iv(this.addr,t)}function Xu(s,t){s.uniform4iv(this.addr,t)}function qu(s,t){s.uniform1uiv(this.addr,t)}function Yu(s,t){s.uniform2uiv(this.addr,t)}function ju(s,t){s.uniform3uiv(this.addr,t)}function Ku(s,t){s.uniform4uiv(this.addr,t)}function $u(s,t,e){const i=this.cache,n=t.length,r=cs(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||ba,r[a])}function Zu(s,t,e){const i=this.cache,n=t.length,r=cs(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Aa,r[a])}function Ju(s,t,e){const i=this.cache,n=t.length,r=cs(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Ca,r[a])}function Qu(s,t,e){const i=this.cache,n=t.length,r=cs(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Ta,r[a])}function tf(s){switch(s){case 5126:return Nu;case 35664:return Ou;case 35665:return Fu;case 35666:return ku;case 35674:return Bu;case 35675:return Gu;case 35676:return zu;case 5124:case 35670:return Hu;case 35667:case 35671:return Vu;case 35668:case 35672:return Wu;case 35669:case 35673:return Xu;case 5125:return qu;case 36294:return Yu;case 36295:return ju;case 36296:return Ku;case 35678:case 36198:case 36298:case 36306:case 35682:return $u;case 35679:case 36299:case 36307:return Zu;case 35680:case 36300:case 36308:case 36293:return Ju;case 36289:case 36303:case 36311:case 36292:return Qu}}class ef{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Uu(e.type)}}class nf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tf(e.type)}}class sf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Ws=/(\w+)(\])?(\[|\.)?/g;function Uo(s,t){s.seq.push(t),s.map[t.id]=t}function rf(s,t,e){const i=s.name,n=i.length;for(Ws.lastIndex=0;;){const r=Ws.exec(i),a=Ws.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Uo(e,c===void 0?new ef(o,s,t):new nf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new sf(o),Uo(e,d)),e=d}}}class Jn{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);rf(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function No(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const of=37297;let af=0;function lf(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function cf(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let i;switch(t===e?i="":t===is&&e===es?i="LinearDisplayP3ToLinearSRGB":t===es&&e===is&&(i="LinearSRGBToLinearDisplayP3"),s){case li:case as:return[i,"LinearTransferOETF"];case pe:case or:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Oo(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+lf(s.getShaderSource(t),a)}else return n}function hf(s,t){const e=cf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function df(s,t){let e;switch(t){case ll:e="Linear";break;case cl:e="Reinhard";break;case hl:e="OptimizedCineon";break;case Jo:e="ACESFilmic";break;case ul:e="AgX";break;case dl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function uf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(en).join(`
`)}function ff(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(en).join(`
`)}function pf(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function mf(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function en(s){return s!==""}function Fo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ko(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function er(s){return s.replace(gf,xf)}const _f=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xf(s,t){let e=Ht[t];if(e===void 0){const i=_f.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return er(e)}const vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(s){return s.replace(vf,Sf)}function Sf(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Go(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ko?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function yf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case on:case an:t="ENVMAP_TYPE_CUBE";break;case os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ef(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case an:t="ENVMAP_MODE_REFRACTION";break}return t}function bf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zo:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case al:t="ENVMAP_BLENDING_ADD";break}return t}function wf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Tf(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Mf(e),c=yf(e),h=Ef(e),d=bf(e),f=wf(e),m=e.isWebGL2?"":uf(e),g=ff(e),_=pf(r),p=n.createProgram();let u,b,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(en).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(en).join(`
`),b.length>0&&(b+=`
`)):(u=[Go(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(en).join(`
`),b=[m,Go(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Ht.tonemapping_pars_fragment:"",e.toneMapping!==_i?df("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,hf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(en).join(`
`)),a=er(a),a=Fo(a,e),a=ko(a,e),o=er(o),o=Fo(o,e),o=ko(o,e),a=Bo(a),o=Bo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const w=S+u+a,R=S+b+o,A=No(n,n.VERTEX_SHADER,w),C=No(n,n.FRAGMENT_SHADER,R);n.attachShader(p,A),n.attachShader(p,C),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function z(B){if(s.debug.checkShaderErrors){const J=n.getProgramInfoLog(p).trim(),P=n.getShaderInfoLog(A).trim(),N=n.getShaderInfoLog(C).trim();let W=!0,Y=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,A,C);else{const j=Oo(n,A,"vertex"),$=Oo(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+j+`
`+$)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||N==="")&&(Y=!1);Y&&(B.diagnostics={runnable:W,programLog:J,vertexShader:{log:P,prefix:u},fragmentShader:{log:N,prefix:b}})}n.deleteShader(A),n.deleteShader(C),v=new Jn(n,p),E=mf(n,p)}let v;this.getUniforms=function(){return v===void 0&&z(this),v};let E;this.getAttributes=function(){return E===void 0&&z(this),E};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=n.getProgramParameter(p,of)),k},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=af++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=C,this}let Af=0;class Cf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Lf(t),e.set(t,i)),i}}class Lf{constructor(t){this.id=Af++,this.code=t,this.usedTimes=0}}function Rf(s,t,e,i,n,r,a){const o=new cr,l=new Cf,c=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,f=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,E,k,B,J){const P=B.fog,N=J.geometry,W=v.isMeshStandardMaterial?B.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),j=Y&&Y.mapping===os?Y.image.height:null,$=g[v.type];v.precision!==null&&(m=n.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,it=q!==void 0?q.length:0;let rt=0;N.morphAttributes.position!==void 0&&(rt=1),N.morphAttributes.normal!==void 0&&(rt=2),N.morphAttributes.color!==void 0&&(rt=3);let T,U,Z,ht;if($){const Ae=$e[$];T=Ae.vertexShader,U=Ae.fragmentShader}else T=v.vertexShader,U=v.fragmentShader,l.update(v),Z=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);const _t=s.getRenderTarget(),Lt=J.isInstancedMesh===!0,Ut=J.isBatchedMesh===!0,At=!!v.map,qt=!!v.matcap,G=!!Y,ce=!!v.aoMap,wt=!!v.lightMap,It=!!v.bumpMap,at=!!v.normalMap,St=!!v.displacementMap,xt=!!v.emissiveMap,M=!!v.metalnessMap,x=!!v.roughnessMap,F=v.anisotropy>0,st=v.clearcoat>0,et=v.iridescence>0,K=v.sheen>0,nt=v.transmission>0,ot=F&&!!v.anisotropyMap,ut=st&&!!v.clearcoatMap,bt=st&&!!v.clearcoatNormalMap,Tt=st&&!!v.clearcoatRoughnessMap,tt=et&&!!v.iridescenceMap,jt=et&&!!v.iridescenceThicknessMap,kt=K&&!!v.sheenColorMap,Rt=K&&!!v.sheenRoughnessMap,vt=!!v.specularMap,gt=!!v.specularColorMap,Dt=!!v.specularIntensityMap,Kt=nt&&!!v.transmissionMap,Zt=nt&&!!v.thicknessMap,Gt=!!v.gradientMap,ct=!!v.alphaMap,I=v.alphaTest>0,ft=!!v.alphaHash,pt=!!v.extensions,Nt=!!N.attributes.uv1,Ct=!!N.attributes.uv2,te=!!N.attributes.uv3;let ee=_i;return v.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ee=s.toneMapping),{isWebGL2:h,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:T,fragmentShader:U,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Ut,instancing:Lt,instancingColor:Lt&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:li,map:At,matcap:qt,envMap:G,envMapMode:G&&Y.mapping,envMapCubeUVHeight:j,aoMap:ce,lightMap:wt,bumpMap:It,normalMap:at,displacementMap:f&&St,emissiveMap:xt,normalMapObjectSpace:at&&v.normalMapType===bl,normalMapTangentSpace:at&&v.normalMapType===la,metalnessMap:M,roughnessMap:x,anisotropy:F,anisotropyMap:ot,clearcoat:st,clearcoatMap:ut,clearcoatNormalMap:bt,clearcoatRoughnessMap:Tt,iridescence:et,iridescenceMap:tt,iridescenceThicknessMap:jt,sheen:K,sheenColorMap:kt,sheenRoughnessMap:Rt,specularMap:vt,specularColorMap:gt,specularIntensityMap:Dt,transmission:nt,transmissionMap:Kt,thicknessMap:Zt,gradientMap:Gt,opaque:v.transparent===!1&&v.blending===nn,alphaMap:ct,alphaTest:I,alphaHash:ft,combine:v.combine,mapUv:At&&_(v.map.channel),aoMapUv:ce&&_(v.aoMap.channel),lightMapUv:wt&&_(v.lightMap.channel),bumpMapUv:It&&_(v.bumpMap.channel),normalMapUv:at&&_(v.normalMap.channel),displacementMapUv:St&&_(v.displacementMap.channel),emissiveMapUv:xt&&_(v.emissiveMap.channel),metalnessMapUv:M&&_(v.metalnessMap.channel),roughnessMapUv:x&&_(v.roughnessMap.channel),anisotropyMapUv:ot&&_(v.anisotropyMap.channel),clearcoatMapUv:ut&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(v.sheenRoughnessMap.channel),specularMapUv:vt&&_(v.specularMap.channel),specularColorMapUv:gt&&_(v.specularColorMap.channel),specularIntensityMapUv:Dt&&_(v.specularIntensityMap.channel),transmissionMapUv:Kt&&_(v.transmissionMap.channel),thicknessMapUv:Zt&&_(v.thicknessMap.channel),alphaMapUv:ct&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(at||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:Ct,vertexUv3s:te,pointsUvs:J.isPoints===!0&&!!N.attributes.uv&&(At||ct),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:At&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===oi,flipSided:v.side===Ie,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:pt&&v.extensions.derivatives===!0,extensionFragDepth:pt&&v.extensions.fragDepth===!0,extensionDrawBuffers:pt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function u(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)E.push(k),E.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(b(E,v),S(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function b(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function w(v){const E=g[v.type];let k;if(E){const B=$e[E];k=dc.clone(B.uniforms)}else k=v.uniforms;return k}function R(v,E){let k;for(let B=0,J=c.length;B<J;B++){const P=c[B];if(P.cacheKey===E){k=P,++k.usedTimes;break}}return k===void 0&&(k=new Tf(s,E,v,r),c.push(k)),k}function A(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:z}}function Pf(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function If(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ho(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d,f,m,g,_,p){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function o(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?n.push(u):e.push(u)}function l(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?n.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||If),i.length>1&&i.sort(f||zo),n.length>1&&n.sort(f||zo)}function h(){for(let d=t,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Df(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Ho,s.set(i,[a])):n>=r.length?(a=new Ho,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Uf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Et};break;case"SpotLight":e={position:new D,direction:new D,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Nf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Of=0;function Ff(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function kf(s,t){const e=new Uf,i=Nf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new D);const r=new D,a=new ue,o=new ue;function l(h,d){let f=0,m=0,g=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let _=0,p=0,u=0,b=0,S=0,w=0,R=0,A=0,C=0,z=0,v=0;h.sort(Ff);const E=d===!0?Math.PI:1;for(let B=0,J=h.length;B<J;B++){const P=h[B],N=P.color,W=P.intensity,Y=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=N.r*W*E,m+=N.g*W*E,g+=N.b*W*E;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],W);v++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const q=P.shadow,it=i.get(P);it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,n.directionalShadow[_]=it,n.directionalShadowMap[_]=j,n.directionalShadowMatrix[_]=P.shadow.matrix,w++}n.directional[_]=$,_++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(N).multiplyScalar(W*E),$.distance=Y,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[u]=$;const q=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,q.updateMatrices(P),P.castShadow&&z++),n.spotLightMatrix[u]=q.matrix,P.castShadow){const it=i.get(P);it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,n.spotShadow[u]=it,n.spotShadowMap[u]=j,A++}u++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(N).multiplyScalar(W),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=$,b++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*E),$.distance=P.distance,$.decay=P.decay,P.castShadow){const q=P.shadow,it=i.get(P);it.shadowBias=q.bias,it.shadowNormalBias=q.normalBias,it.shadowRadius=q.radius,it.shadowMapSize=q.mapSize,it.shadowCameraNear=q.camera.near,it.shadowCameraFar=q.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=P.shadow.matrix,R++}n.point[p]=$,p++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(W*E),$.groundColor.copy(P.groundColor).multiplyScalar(W*E),n.hemi[S]=$,S++}}b>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=g;const k=n.hash;(k.directionalLength!==_||k.pointLength!==p||k.spotLength!==u||k.rectAreaLength!==b||k.hemiLength!==S||k.numDirectionalShadows!==w||k.numPointShadows!==R||k.numSpotShadows!==A||k.numSpotMaps!==C||k.numLightProbes!==v)&&(n.directional.length=_,n.spot.length=u,n.rectArea.length=b,n.point.length=p,n.hemi.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=A+C-z,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=v,k.directionalLength=_,k.pointLength=p,k.spotLength=u,k.rectAreaLength=b,k.hemiLength=S,k.numDirectionalShadows=w,k.numPointShadows=R,k.numSpotShadows=A,k.numSpotMaps=C,k.numLightProbes=v,n.version=Of++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let b=0,S=h.length;b<S;b++){const w=h[b];if(w.isDirectionalLight){const R=n.directional[f];R.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),f++}else if(w.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),g++}else if(w.isRectAreaLight){const R=n.rectArea[_];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(u),o.identity(),a.copy(w.matrixWorld),a.premultiply(u),o.extractRotation(a),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const R=n.point[m];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){const R=n.hemi[p];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:n}}function Vo(s,t){const e=new kf(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function a(d){i.push(d)}function o(d){n.push(d)}function l(d){e.setup(i,d)}function c(d){e.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Bf(s,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Vo(s,t),e.set(r,[l])):a>=o.length?(l=new Vo(s,t),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class Gf extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zf extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vf=`uniform sampler2D shadow_pass;
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
}`;function Wf(s,t,e){let i=new hr;const n=new Yt,r=new Yt,a=new se,o=new Gf({depthPacking:El}),l=new zf,c={},h=e.maxTextureSize,d={[Si]:Ie,[Ie]:Si,[oi]:oi},f=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Hf,fragmentShader:Vf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new L(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let u=this.type;this.render=function(A,C,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const v=s.getRenderTarget(),E=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),B=s.state;B.setBlending(gi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const J=u!==ri&&this.type===ri,P=u===ri&&this.type!==ri;for(let N=0,W=A.length;N<W;N++){const Y=A[N],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;n.copy(j.mapSize);const $=j.getFrameExtents();if(n.multiply($),r.copy(j.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/$.x),n.x=r.x*$.x,j.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/$.y),n.y=r.y*$.y,j.mapSize.y=r.y)),j.map===null||J===!0||P===!0){const it=this.type!==ri?{minFilter:Pe,magFilter:Pe}:{};j.map!==null&&j.map.dispose(),j.map=new Ni(n.x,n.y,it),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const q=j.getViewportCount();for(let it=0;it<q;it++){const rt=j.getViewport(it);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),B.viewport(a),j.updateMatrices(Y,it),i=j.getFrustum(),w(C,z,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===ri&&b(j,z),j.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(v,E,k)};function b(A,C){const z=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ni(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,z,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,z,m,_,null)}function S(A,C,z,v){let E=null;const k=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)E=k;else if(E=z.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=E.uuid,J=C.uuid;let P=c[B];P===void 0&&(P={},c[B]=P);let N=P[J];N===void 0&&(N=E.clone(),P[J]=N,C.addEventListener("dispose",R)),E=N}if(E.visible=C.visible,E.wireframe=C.wireframe,v===ri?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=s.properties.get(E);B.light=z}return E}function w(A,C,z,v,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);const J=t.update(A),P=A.material;if(Array.isArray(P)){const N=J.groups;for(let W=0,Y=N.length;W<Y;W++){const j=N[W],$=P[j.materialIndex];if($&&$.visible){const q=S(A,$,v,E);A.onBeforeShadow(s,A,C,z,J,q,j),s.renderBufferDirect(z,null,J,q,A,j),A.onAfterShadow(s,A,C,z,J,q,j)}}}else if(P.visible){const N=S(A,P,v,E);A.onBeforeShadow(s,A,C,z,J,N,null),s.renderBufferDirect(z,null,J,N,A,null),A.onAfterShadow(s,A,C,z,J,N,null)}}const B=A.children;for(let J=0,P=B.length;J<P;J++)w(B[J],C,z,v,E)}function R(A){A.target.removeEventListener("dispose",R);for(const z in c){const v=c[z],E=A.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function Xf(s,t,e){const i=e.isWebGL2;function n(){let I=!1;const ft=new se;let pt=null;const Nt=new se(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!I&&(s.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){I=Ct},setClear:function(Ct,te,ee,xe,Ae){Ae===!0&&(Ct*=xe,te*=xe,ee*=xe),ft.set(Ct,te,ee,xe),Nt.equals(ft)===!1&&(s.clearColor(Ct,te,ee,xe),Nt.copy(ft))},reset:function(){I=!1,pt=null,Nt.set(-1,0,0,0)}}}function r(){let I=!1,ft=null,pt=null,Nt=null;return{setTest:function(Ct){Ct?Ut(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(Ct){ft!==Ct&&!I&&(s.depthMask(Ct),ft=Ct)},setFunc:function(Ct){if(pt!==Ct){switch(Ct){case Qa:s.depthFunc(s.NEVER);break;case tl:s.depthFunc(s.ALWAYS);break;case el:s.depthFunc(s.LESS);break;case Qn:s.depthFunc(s.LEQUAL);break;case il:s.depthFunc(s.EQUAL);break;case nl:s.depthFunc(s.GEQUAL);break;case sl:s.depthFunc(s.GREATER);break;case rl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=Ct}},setLocked:function(Ct){I=Ct},setClear:function(Ct){Nt!==Ct&&(s.clearDepth(Ct),Nt=Ct)},reset:function(){I=!1,ft=null,pt=null,Nt=null}}}function a(){let I=!1,ft=null,pt=null,Nt=null,Ct=null,te=null,ee=null,xe=null,Ae=null;return{setTest:function(ie){I||(ie?Ut(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!I&&(s.stencilMask(ie),ft=ie)},setFunc:function(ie,Ce,Ke){(pt!==ie||Nt!==Ce||Ct!==Ke)&&(s.stencilFunc(ie,Ce,Ke),pt=ie,Nt=Ce,Ct=Ke)},setOp:function(ie,Ce,Ke){(te!==ie||ee!==Ce||xe!==Ke)&&(s.stencilOp(ie,Ce,Ke),te=ie,ee=Ce,xe=Ke)},setLocked:function(ie){I=ie},setClear:function(ie){Ae!==ie&&(s.clearStencil(ie),Ae=ie)},reset:function(){I=!1,ft=null,pt=null,Nt=null,Ct=null,te=null,ee=null,xe=null,Ae=null}}}const o=new n,l=new r,c=new a,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,S=null,w=null,R=null,A=null,C=null,z=null,v=new Et(0,0,0),E=0,k=!1,B=null,J=null,P=null,N=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=$>=2);let it=null,rt={};const T=s.getParameter(s.SCISSOR_BOX),U=s.getParameter(s.VIEWPORT),Z=new se().fromArray(T),ht=new se().fromArray(U);function _t(I,ft,pt,Nt){const Ct=new Uint8Array(4),te=s.createTexture();s.bindTexture(I,te),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<pt;ee++)i&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(ft,0,s.RGBA,1,1,Nt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(ft+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return te}const Lt={};Lt[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Lt[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Lt[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Lt[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ut(s.DEPTH_TEST),l.setFunc(Qn),xt(!1),M(Er),Ut(s.CULL_FACE),at(gi);function Ut(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function At(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function qt(I,ft){return m[I]!==ft?(s.bindFramebuffer(I,ft),m[I]=ft,i&&(I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ft),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ft)),!0):!1}function G(I,ft){let pt=_,Nt=!1;if(I)if(pt=g.get(ft),pt===void 0&&(pt=[],g.set(ft,pt)),I.isWebGLMultipleRenderTargets){const Ct=I.texture;if(pt.length!==Ct.length||pt[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ee=Ct.length;te<ee;te++)pt[te]=s.COLOR_ATTACHMENT0+te;pt.length=Ct.length,Nt=!0}}else pt[0]!==s.COLOR_ATTACHMENT0&&(pt[0]=s.COLOR_ATTACHMENT0,Nt=!0);else pt[0]!==s.BACK&&(pt[0]=s.BACK,Nt=!0);Nt&&(e.isWebGL2?s.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function ce(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const wt={[Li]:s.FUNC_ADD,[ka]:s.FUNC_SUBTRACT,[Ba]:s.FUNC_REVERSE_SUBTRACT};if(i)wt[Ar]=s.MIN,wt[Cr]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(wt[Ar]=I.MIN_EXT,wt[Cr]=I.MAX_EXT)}const It={[Ga]:s.ZERO,[za]:s.ONE,[Ha]:s.SRC_COLOR,[js]:s.SRC_ALPHA,[ja]:s.SRC_ALPHA_SATURATE,[qa]:s.DST_COLOR,[Wa]:s.DST_ALPHA,[Va]:s.ONE_MINUS_SRC_COLOR,[Ks]:s.ONE_MINUS_SRC_ALPHA,[Ya]:s.ONE_MINUS_DST_COLOR,[Xa]:s.ONE_MINUS_DST_ALPHA,[Ka]:s.CONSTANT_COLOR,[$a]:s.ONE_MINUS_CONSTANT_COLOR,[Za]:s.CONSTANT_ALPHA,[Ja]:s.ONE_MINUS_CONSTANT_ALPHA};function at(I,ft,pt,Nt,Ct,te,ee,xe,Ae,ie){if(I===gi){u===!0&&(At(s.BLEND),u=!1);return}if(u===!1&&(Ut(s.BLEND),u=!0),I!==Fa){if(I!==b||ie!==k){if((S!==Li||A!==Li)&&(s.blendEquation(s.FUNC_ADD),S=Li,A=Li),ie)switch(I){case nn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case br:s.blendFunc(s.ONE,s.ONE);break;case wr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case nn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case br:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,R=null,C=null,z=null,v.set(0,0,0),E=0,b=I,k=ie}return}Ct=Ct||ft,te=te||pt,ee=ee||Nt,(ft!==S||Ct!==A)&&(s.blendEquationSeparate(wt[ft],wt[Ct]),S=ft,A=Ct),(pt!==w||Nt!==R||te!==C||ee!==z)&&(s.blendFuncSeparate(It[pt],It[Nt],It[te],It[ee]),w=pt,R=Nt,C=te,z=ee),(xe.equals(v)===!1||Ae!==E)&&(s.blendColor(xe.r,xe.g,xe.b,Ae),v.copy(xe),E=Ae),b=I,k=!1}function St(I,ft){I.side===oi?At(s.CULL_FACE):Ut(s.CULL_FACE);let pt=I.side===Ie;ft&&(pt=!pt),xt(pt),I.blending===nn&&I.transparent===!1?at(gi):at(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Nt=I.stencilWrite;c.setTest(Nt),Nt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ut(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(I){B!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),B=I)}function M(I){I!==Na?(Ut(s.CULL_FACE),I!==J&&(I===Er?s.cullFace(s.BACK):I===Oa?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),J=I}function x(I){I!==P&&(j&&s.lineWidth(I),P=I)}function F(I,ft,pt){I?(Ut(s.POLYGON_OFFSET_FILL),(N!==ft||W!==pt)&&(s.polygonOffset(ft,pt),N=ft,W=pt)):At(s.POLYGON_OFFSET_FILL)}function st(I){I?Ut(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function et(I){I===void 0&&(I=s.TEXTURE0+Y-1),it!==I&&(s.activeTexture(I),it=I)}function K(I,ft,pt){pt===void 0&&(it===null?pt=s.TEXTURE0+Y-1:pt=it);let Nt=rt[pt];Nt===void 0&&(Nt={type:void 0,texture:void 0},rt[pt]=Nt),(Nt.type!==I||Nt.texture!==ft)&&(it!==pt&&(s.activeTexture(pt),it=pt),s.bindTexture(I,ft||Lt[I]),Nt.type=I,Nt.texture=ft)}function nt(){const I=rt[it];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ot(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){Z.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function Kt(I){ht.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ht.copy(I))}function Zt(I,ft){let pt=d.get(ft);pt===void 0&&(pt=new WeakMap,d.set(ft,pt));let Nt=pt.get(I);Nt===void 0&&(Nt=s.getUniformBlockIndex(ft,I.name),pt.set(I,Nt))}function Gt(I,ft){const Nt=d.get(ft).get(I);h.get(ft)!==Nt&&(s.uniformBlockBinding(ft,Nt,I.__bindingPointIndex),h.set(ft,Nt))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},it=null,rt={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,S=null,w=null,R=null,A=null,C=null,z=null,v=new Et(0,0,0),E=0,k=!1,B=null,J=null,P=null,N=null,W=null,Z.set(0,0,s.canvas.width,s.canvas.height),ht.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ut,disable:At,bindFramebuffer:qt,drawBuffers:G,useProgram:ce,setBlending:at,setMaterial:St,setFlipSided:xt,setCullFace:M,setLineWidth:x,setPolygonOffset:F,setScissorTest:st,activeTexture:et,bindTexture:K,unbindTexture:nt,compressedTexImage2D:ot,compressedTexImage3D:ut,texImage2D:vt,texImage3D:gt,updateUBOMapping:Zt,uniformBlockBinding:Gt,texStorage2D:kt,texStorage3D:Rt,texSubImage2D:bt,texSubImage3D:Tt,compressedTexSubImage2D:tt,compressedTexSubImage3D:jt,scissor:Dt,viewport:Kt,reset:ct}}function qf(s,t,e,i,n,r,a){const o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return m?new OffscreenCanvas(M,x):rs("canvas")}function _(M,x,F,st){let et=1;if((M.width>st||M.height>st)&&(et=st/Math.max(M.width,M.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const K=x?ss:Math.floor,nt=K(et*M.width),ot=K(et*M.height);d===void 0&&(d=g(nt,ot));const ut=F?g(nt,ot):d;return ut.width=nt,ut.height=ot,ut.getContext("2d").drawImage(M,0,0,nt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+nt+"x"+ot+")."),ut}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return tr(M.width)&&tr(M.height)}function u(M){return o?!1:M.wrapS!==ze||M.wrapT!==ze||M.minFilter!==Pe&&M.minFilter!==ke}function b(M,x){return M.generateMipmaps&&x&&M.minFilter!==Pe&&M.minFilter!==ke}function S(M){s.generateMipmap(M)}function w(M,x,F,st,et=!1){if(o===!1)return x;if(M!==null){if(s[M]!==void 0)return s[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=x;if(x===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),x===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8)),x===s.RGBA){const nt=et?ts:Jt.getTransfer(st);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=nt===ne?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function R(M,x,F){return b(M,F)===!0||M.isFramebufferTexture&&M.minFilter!==Pe&&M.minFilter!==ke?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){return M===Pe||M===Lr||M===_s?s.NEAREST:s.LINEAR}function C(M){const x=M.target;x.removeEventListener("dispose",C),v(x),x.isVideoTexture&&h.delete(x)}function z(M){const x=M.target;x.removeEventListener("dispose",z),k(x)}function v(M){const x=i.get(M);if(x.__webglInit===void 0)return;const F=M.source,st=f.get(F);if(st){const et=st[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(M),Object.keys(st).length===0&&f.delete(F)}i.remove(M)}function E(M){const x=i.get(M);s.deleteTexture(x.__webglTexture);const F=M.source,st=f.get(F);delete st[x.__cacheKey],a.memory.textures--}function k(M){const x=M.texture,F=i.get(M),st=i.get(x);if(st.__webglTexture!==void 0&&(s.deleteTexture(st.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(F.__webglFramebuffer[et]))for(let K=0;K<F.__webglFramebuffer[et].length;K++)s.deleteFramebuffer(F.__webglFramebuffer[et][K]);else s.deleteFramebuffer(F.__webglFramebuffer[et]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[et])}else{if(Array.isArray(F.__webglFramebuffer))for(let et=0;et<F.__webglFramebuffer.length;et++)s.deleteFramebuffer(F.__webglFramebuffer[et]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let et=0;et<F.__webglColorRenderbuffer.length;et++)F.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[et]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let et=0,K=x.length;et<K;et++){const nt=i.get(x[et]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),a.memory.textures--),i.remove(x[et])}i.remove(x),i.remove(M)}let B=0;function J(){B=0}function P(){const M=B;return M>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+n.maxTextures),B+=1,M}function N(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function W(M,x){const F=i.get(M);if(M.isVideoTexture&&St(M),M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){const st=M.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,M,x);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function Y(M,x){const F=i.get(M);if(M.version>0&&F.__version!==M.version){Z(F,M,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function j(M,x){const F=i.get(M);if(M.version>0&&F.__version!==M.version){Z(F,M,x);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function $(M,x){const F=i.get(M);if(M.version>0&&F.__version!==M.version){ht(F,M,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const q={[be]:s.REPEAT,[ze]:s.CLAMP_TO_EDGE,[Js]:s.MIRRORED_REPEAT},it={[Pe]:s.NEAREST,[Lr]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[fl]:s.LINEAR_MIPMAP_NEAREST,[ln]:s.LINEAR_MIPMAP_LINEAR},rt={[wl]:s.NEVER,[Pl]:s.ALWAYS,[Tl]:s.LESS,[ca]:s.LEQUAL,[Al]:s.EQUAL,[Rl]:s.GEQUAL,[Cl]:s.GREATER,[Ll]:s.NOTEQUAL};function T(M,x,F){if(F?(s.texParameteri(M,s.TEXTURE_WRAP_S,q[x.wrapS]),s.texParameteri(M,s.TEXTURE_WRAP_T,q[x.wrapT]),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,q[x.wrapR]),s.texParameteri(M,s.TEXTURE_MAG_FILTER,it[x.magFilter]),s.texParameteri(M,s.TEXTURE_MIN_FILTER,it[x.minFilter])):(s.texParameteri(M,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(M,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY)&&s.texParameteri(M,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==ze||x.wrapT!==ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(M,s.TEXTURE_MAG_FILTER,A(x.magFilter)),s.texParameteri(M,s.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Pe&&x.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(M,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(M,s.TEXTURE_COMPARE_FUNC,rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Pe||x.minFilter!==_s&&x.minFilter!==ln||x.type===mi&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===bn&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(s.texParameterf(M,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function U(M,x){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",C));const st=x.source;let et=f.get(st);et===void 0&&(et={},f.set(st,et));const K=N(x);if(K!==M.__cacheKey){et[K]===void 0&&(et[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),et[K].usedTimes++;const nt=et[M.__cacheKey];nt!==void 0&&(et[M.__cacheKey].usedTimes--,nt.usedTimes===0&&E(x)),M.__cacheKey=K,M.__webglTexture=et[K].texture}return F}function Z(M,x,F){let st=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(st=s.TEXTURE_3D);const et=U(M,x),K=x.source;e.bindTexture(st,M.__webglTexture,s.TEXTURE0+F);const nt=i.get(K);if(K.version!==nt.__version||et===!0){e.activeTexture(s.TEXTURE0+F);const ot=Jt.getPrimaries(Jt.workingColorSpace),ut=x.colorSpace===He?null:Jt.getPrimaries(x.colorSpace),bt=x.colorSpace===He||ot===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Tt=u(x)&&p(x.image)===!1;let tt=_(x.image,Tt,!1,n.maxTextureSize);tt=xt(x,tt);const jt=p(tt)||o,kt=r.convert(x.format,x.colorSpace);let Rt=r.convert(x.type),vt=w(x.internalFormat,kt,Rt,x.colorSpace,x.isVideoTexture);T(st,x,jt);let gt;const Dt=x.mipmaps,Kt=o&&x.isVideoTexture!==!0&&vt!==oa,Zt=nt.__version===void 0||et===!0,Gt=R(x,tt,jt);if(x.isDepthTexture)vt=s.DEPTH_COMPONENT,o?x.type===mi?vt=s.DEPTH_COMPONENT32F:x.type===pi?vt=s.DEPTH_COMPONENT24:x.type===Pi?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:x.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ii&&vt===s.DEPTH_COMPONENT&&x.type!==rr&&x.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=pi,Rt=r.convert(x.type)),x.format===cn&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,x.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Pi,Rt=r.convert(x.type))),Zt&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,vt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,vt,tt.width,tt.height,0,kt,Rt,null));else if(x.isDataTexture)if(Dt.length>0&&jt){Kt&&Zt&&e.texStorage2D(s.TEXTURE_2D,Gt,vt,Dt[0].width,Dt[0].height);for(let ct=0,I=Dt.length;ct<I;ct++)gt=Dt[ct],Kt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,gt.width,gt.height,kt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,ct,vt,gt.width,gt.height,0,kt,Rt,gt.data);x.generateMipmaps=!1}else Kt?(Zt&&e.texStorage2D(s.TEXTURE_2D,Gt,vt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,kt,Rt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,vt,tt.width,tt.height,0,kt,Rt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,vt,Dt[0].width,Dt[0].height,tt.depth);for(let ct=0,I=Dt.length;ct<I;ct++)gt=Dt[ct],x.format!==je?kt!==null?Kt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,gt.width,gt.height,tt.depth,kt,gt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,vt,gt.width,gt.height,tt.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,gt.width,gt.height,tt.depth,kt,Rt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,vt,gt.width,gt.height,tt.depth,0,kt,Rt,gt.data)}else{Kt&&Zt&&e.texStorage2D(s.TEXTURE_2D,Gt,vt,Dt[0].width,Dt[0].height);for(let ct=0,I=Dt.length;ct<I;ct++)gt=Dt[ct],x.format!==je?kt!==null?Kt?e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,gt.width,gt.height,kt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,vt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,gt.width,gt.height,kt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,ct,vt,gt.width,gt.height,0,kt,Rt,gt.data)}else if(x.isDataArrayTexture)Kt?(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,vt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,kt,Rt,tt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,tt.width,tt.height,tt.depth,0,kt,Rt,tt.data);else if(x.isData3DTexture)Kt?(Zt&&e.texStorage3D(s.TEXTURE_3D,Gt,vt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,kt,Rt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,vt,tt.width,tt.height,tt.depth,0,kt,Rt,tt.data);else if(x.isFramebufferTexture){if(Zt)if(Kt)e.texStorage2D(s.TEXTURE_2D,Gt,vt,tt.width,tt.height);else{let ct=tt.width,I=tt.height;for(let ft=0;ft<Gt;ft++)e.texImage2D(s.TEXTURE_2D,ft,vt,ct,I,0,kt,Rt,null),ct>>=1,I>>=1}}else if(Dt.length>0&&jt){Kt&&Zt&&e.texStorage2D(s.TEXTURE_2D,Gt,vt,Dt[0].width,Dt[0].height);for(let ct=0,I=Dt.length;ct<I;ct++)gt=Dt[ct],Kt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,kt,Rt,gt):e.texImage2D(s.TEXTURE_2D,ct,vt,kt,Rt,gt);x.generateMipmaps=!1}else Kt?(Zt&&e.texStorage2D(s.TEXTURE_2D,Gt,vt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,kt,Rt,tt)):e.texImage2D(s.TEXTURE_2D,0,vt,kt,Rt,tt);b(x,jt)&&S(st),nt.__version=K.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ht(M,x,F){if(x.image.length!==6)return;const st=U(M,x),et=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,M.__webglTexture,s.TEXTURE0+F);const K=i.get(et);if(et.version!==K.__version||st===!0){e.activeTexture(s.TEXTURE0+F);const nt=Jt.getPrimaries(Jt.workingColorSpace),ot=x.colorSpace===He?null:Jt.getPrimaries(x.colorSpace),ut=x.colorSpace===He||nt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const bt=x.isCompressedTexture||x.image[0].isCompressedTexture,Tt=x.image[0]&&x.image[0].isDataTexture,tt=[];for(let ct=0;ct<6;ct++)!bt&&!Tt?tt[ct]=_(x.image[ct],!1,!0,n.maxCubemapSize):tt[ct]=Tt?x.image[ct].image:x.image[ct],tt[ct]=xt(x,tt[ct]);const jt=tt[0],kt=p(jt)||o,Rt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),gt=w(x.internalFormat,Rt,vt,x.colorSpace),Dt=o&&x.isVideoTexture!==!0,Kt=K.__version===void 0||st===!0;let Zt=R(x,jt,kt);T(s.TEXTURE_CUBE_MAP,x,kt);let Gt;if(bt){Dt&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Zt,gt,jt.width,jt.height);for(let ct=0;ct<6;ct++){Gt=tt[ct].mipmaps;for(let I=0;I<Gt.length;I++){const ft=Gt[I];x.format!==je?Rt!==null?Dt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,0,0,ft.width,ft.height,Rt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,gt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,0,0,ft.width,ft.height,Rt,vt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I,gt,ft.width,ft.height,0,Rt,vt,ft.data)}}}else{Gt=x.mipmaps,Dt&&Kt&&(Gt.length>0&&Zt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Zt,gt,tt[0].width,tt[0].height));for(let ct=0;ct<6;ct++)if(Tt){Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,tt[ct].width,tt[ct].height,Rt,vt,tt[ct].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,gt,tt[ct].width,tt[ct].height,0,Rt,vt,tt[ct].data);for(let I=0;I<Gt.length;I++){const pt=Gt[I].image[ct].image;Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,0,0,pt.width,pt.height,Rt,vt,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,gt,pt.width,pt.height,0,Rt,vt,pt.data)}}else{Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Rt,vt,tt[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,gt,Rt,vt,tt[ct]);for(let I=0;I<Gt.length;I++){const ft=Gt[I];Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,0,0,Rt,vt,ft.image[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,I+1,gt,Rt,vt,ft.image[ct])}}}b(x,kt)&&S(s.TEXTURE_CUBE_MAP),K.__version=et.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _t(M,x,F,st,et,K){const nt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),ut=w(F.internalFormat,nt,ot,F.colorSpace);if(!i.get(x).__hasExternalTextures){const Tt=Math.max(1,x.width>>K),tt=Math.max(1,x.height>>K);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,K,ut,Tt,tt,x.depth,0,nt,ot,null):e.texImage2D(et,K,ut,Tt,tt,0,nt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,M),at(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,et,i.get(F).__webglTexture,0,It(x)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,et,i.get(F).__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(M,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let st=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||at(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===mi?st=s.DEPTH_COMPONENT32F:et.type===pi&&(st=s.DEPTH_COMPONENT24));const K=It(x);at(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,st,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,K,st,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,st,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const st=It(x);F&&at(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,s.DEPTH24_STENCIL8,x.width,x.height):at(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,M)}else{const st=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<st.length;et++){const K=st[et],nt=r.convert(K.format,K.colorSpace),ot=r.convert(K.type),ut=w(K.internalFormat,nt,ot,K.colorSpace),bt=It(x);F&&at(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,ut,x.width,x.height):at(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt,ut,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ut,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const st=i.get(x.depthTexture).__webglTexture,et=It(x);if(x.depthTexture.format===Ii)at(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(x.depthTexture.format===cn)at(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function At(M){const x=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,M)}else if(F){x.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[st]),x.__webglDepthbuffer[st]=s.createRenderbuffer(),Lt(x.__webglDepthbuffer[st],M,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Lt(x.__webglDepthbuffer,M,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(M,x,F){const st=i.get(M);x!==void 0&&_t(st.__webglFramebuffer,M,M.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&At(M)}function G(M){const x=M.texture,F=i.get(M),st=i.get(x);M.addEventListener("dispose",z),M.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=x.version,a.memory.textures++);const et=M.isWebGLCubeRenderTarget===!0,K=M.isWebGLMultipleRenderTargets===!0,nt=p(M)||o;if(et){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[ot][ut]=s.createFramebuffer()}else F.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(K)if(n.drawBuffers){const ot=M.texture;for(let ut=0,bt=ot.length;ut<bt;ut++){const Tt=i.get(ot[ut]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&at(M)===!1){const ot=K?x:[x];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<ot.length;ut++){const bt=ot[ut];F.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const Tt=r.convert(bt.format,bt.colorSpace),tt=r.convert(bt.type),jt=w(bt.internalFormat,Tt,tt,bt.colorSpace,M.isXRRenderTarget===!0),kt=It(M);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,jt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(F.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),T(s.TEXTURE_CUBE_MAP,x,nt);for(let ot=0;ot<6;ot++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[ot][ut],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else _t(F.__webglFramebuffer[ot],M,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);b(x,nt)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(K){const ot=M.texture;for(let ut=0,bt=ot.length;ut<bt;ut++){const Tt=ot[ut],tt=i.get(Tt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),T(s.TEXTURE_2D,Tt,nt),_t(F.__webglFramebuffer,M,Tt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),b(Tt,nt)&&S(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ot=M.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,st.__webglTexture),T(ot,x,nt),o&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(F.__webglFramebuffer[ut],M,x,s.COLOR_ATTACHMENT0,ot,ut);else _t(F.__webglFramebuffer,M,x,s.COLOR_ATTACHMENT0,ot,0);b(x,nt)&&S(ot),e.unbindTexture()}M.depthBuffer&&At(M)}function ce(M){const x=p(M)||o,F=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let st=0,et=F.length;st<et;st++){const K=F[st];if(b(K,x)){const nt=M.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ot=i.get(K).__webglTexture;e.bindTexture(nt,ot),S(nt),e.unbindTexture()}}}function wt(M){if(o&&M.samples>0&&at(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],F=M.width,st=M.height;let et=s.COLOR_BUFFER_BIT;const K=[],nt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=i.get(M),ut=M.isWebGLMultipleRenderTargets===!0;if(ut)for(let bt=0;bt<x.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let bt=0;bt<x.length;bt++){K.push(s.COLOR_ATTACHMENT0+bt),M.depthBuffer&&K.push(nt);const Tt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(Tt===!1&&(M.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),M.stencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ut&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ot.__webglColorRenderbuffer[bt]),Tt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[nt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[nt])),ut){const tt=i.get(x[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,F,st,0,0,F,st,et,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let bt=0;bt<x.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,ot.__webglColorRenderbuffer[bt]);const Tt=i.get(x[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function It(M){return Math.min(n.maxSamples,M.samples)}function at(M){const x=i.get(M);return o&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(M){const x=a.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function xt(M,x){const F=M.colorSpace,st=M.format,et=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Qs||F!==li&&F!==He&&(Jt.getTransfer(F)===ne?o===!1?t.has("EXT_sRGB")===!0&&st===je?(M.format=Qs,M.minFilter=ke,M.generateMipmaps=!1):x=da.sRGBToLinear(x):(st!==je||et!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=qt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=at}function Yf(s,t,e){const i=e.isWebGL2;function n(r,a=He){let o;const l=Jt.getTransfer(a);if(r===xi)return s.UNSIGNED_BYTE;if(r===ea)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ia)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pl)return s.BYTE;if(r===ml)return s.SHORT;if(r===rr)return s.UNSIGNED_SHORT;if(r===ta)return s.INT;if(r===pi)return s.UNSIGNED_INT;if(r===mi)return s.FLOAT;if(r===bn)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===gl)return s.ALPHA;if(r===je)return s.RGBA;if(r===_l)return s.LUMINANCE;if(r===xl)return s.LUMINANCE_ALPHA;if(r===Ii)return s.DEPTH_COMPONENT;if(r===cn)return s.DEPTH_STENCIL;if(r===Qs)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===vl)return s.RED;if(r===na)return s.RED_INTEGER;if(r===Sl)return s.RG;if(r===sa)return s.RG_INTEGER;if(r===ra)return s.RGBA_INTEGER;if(r===xs||r===vs||r===Ss||r===Ms)if(l===ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===xs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===xs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ss)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ms)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rr||r===Pr||r===Ir||r===Dr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Rr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ir)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oa)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ur||r===Nr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ur)return l===ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Nr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Or||r===Fr||r===kr||r===Br||r===Gr||r===zr||r===Hr||r===Vr||r===Wr||r===Xr||r===qr||r===Yr||r===jr||r===Kr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Or)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Br)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kr)return l===ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ys||r===$r||r===Zr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ys)return l===ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$r)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ml||r===Jr||r===Qr||r===to)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ys)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Jr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===to)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pi?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class jf extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ft extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kf={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class $f extends un{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,u=null;const b=[],S=[],w=new Yt;let R=null;const A=new De;A.layers.enable(1),A.viewport=new se;const C=new De;C.layers.enable(2),C.viewport=new se;const z=[A,C],v=new jf;v.layers.enable(1),v.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let U=b[T];return U===void 0&&(U=new Xs,b[T]=U),U.getTargetRaySpace()},this.getControllerGrip=function(T){let U=b[T];return U===void 0&&(U=new Xs,b[T]=U),U.getGripSpace()},this.getHand=function(T){let U=b[T];return U===void 0&&(U=new Xs,b[T]=U),U.getHandSpace()};function B(T){const U=S.indexOf(T.inputSource);if(U===-1)return;const Z=b[U];Z!==void 0&&(Z.update(T.inputSource,T.frame,c||a),Z.dispatchEvent({type:T.type,data:T.inputSource}))}function J(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",P);for(let T=0;T<b.length;T++){const U=S[T];U!==null&&(S[T]=null,b[T].disconnect(U))}E=null,k=null,t.setRenderTarget(p),m=null,f=null,d=null,n=null,u=null,rt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(T){c=T},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(T){if(n=T,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",J),n.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(n,e,U),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Ni(m.framebufferWidth,m.framebufferHeight,{format:je,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let U=null,Z=null,ht=null;_.depth&&(ht=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=_.stencil?cn:Ii,Z=_.stencil?Pi:pi);const _t={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(n,e),f=d.createProjectionLayer(_t),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new Ni(f.textureWidth,f.textureHeight,{format:je,type:xi,depthTexture:new Ea(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Lt=t.properties.get(u);Lt.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),rt.setContext(n),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function P(T){for(let U=0;U<T.removed.length;U++){const Z=T.removed[U],ht=S.indexOf(Z);ht>=0&&(S[ht]=null,b[ht].disconnect(Z))}for(let U=0;U<T.added.length;U++){const Z=T.added[U];let ht=S.indexOf(Z);if(ht===-1){for(let Lt=0;Lt<b.length;Lt++)if(Lt>=S.length){S.push(Z),ht=Lt;break}else if(S[Lt]===null){S[Lt]=Z,ht=Lt;break}if(ht===-1)break}const _t=b[ht];_t&&_t.connect(Z)}}const N=new D,W=new D;function Y(T,U,Z){N.setFromMatrixPosition(U.matrixWorld),W.setFromMatrixPosition(Z.matrixWorld);const ht=N.distanceTo(W),_t=U.projectionMatrix.elements,Lt=Z.projectionMatrix.elements,Ut=_t[14]/(_t[10]-1),At=_t[14]/(_t[10]+1),qt=(_t[9]+1)/_t[5],G=(_t[9]-1)/_t[5],ce=(_t[8]-1)/_t[0],wt=(Lt[8]+1)/Lt[0],It=Ut*ce,at=Ut*wt,St=ht/(-ce+wt),xt=St*-ce;U.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(xt),T.translateZ(St),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const M=Ut+St,x=At+St,F=It-xt,st=at+(ht-xt),et=qt*At/x*M,K=G*At/x*M;T.projectionMatrix.makePerspective(F,st,et,K,M,x),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function j(T,U){U===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(U.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(n===null)return;v.near=C.near=A.near=T.near,v.far=C.far=A.far=T.far,(E!==v.near||k!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,k=v.far);const U=T.parent,Z=v.cameras;j(v,U);for(let ht=0;ht<Z.length;ht++)j(Z[ht],U);Z.length===2?Y(v,A,C):v.projectionMatrix.copy(A.projectionMatrix),$(T,v,U)};function $(T,U,Z){Z===null?T.matrix.copy(U.matrixWorld):(T.matrix.copy(Z.matrixWorld),T.matrix.invert(),T.matrix.multiply(U.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(U.projectionMatrix),T.projectionMatrixInverse.copy(U.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=hn*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(T){l=T,f!==null&&(f.fixedFoveation=T),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=T)};let q=null;function it(T,U){if(h=U.getViewerPose(c||a),g=U,h!==null){const Z=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let ht=!1;Z.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let _t=0;_t<Z.length;_t++){const Lt=Z[_t];let Ut=null;if(m!==null)Ut=m.getViewport(Lt);else{const qt=d.getViewSubImage(f,Lt);Ut=qt.viewport,_t===0&&(t.setRenderTargetTextures(u,qt.colorTexture,f.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(u))}let At=z[_t];At===void 0&&(At=new De,At.layers.enable(_t),At.viewport=new se,z[_t]=At),At.matrix.fromArray(Lt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Lt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),_t===0&&(v.matrix.copy(At.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(At)}}for(let Z=0;Z<b.length;Z++){const ht=S[Z],_t=b[Z];ht!==null&&_t!==void 0&&_t.update(ht,U,c||a)}q&&q(T,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}const rt=new Ma;rt.setAnimationLoop(it),this.setAnimationLoop=function(T){q=T},this.dispose=function(){}}}function Zf(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,xa(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,b,S,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,S):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ie&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ie&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const S=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*S,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=S*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ie&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Jf(s,t,e,i){let n={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const w=S.program;i.uniformBlockBinding(b,w)}function c(b,S){let w=n[b.id];w===void 0&&(g(b),w=h(b),n[b.id]=w,b.addEventListener("dispose",p));const R=S.program;i.updateUBOMapping(b,R);const A=t.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){const S=d();b.__bindingPointIndex=S;const w=s.createBuffer(),R=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=n[b.id],w=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,C=w.length;A<C;A++){const z=Array.isArray(w[A])?w[A]:[w[A]];for(let v=0,E=z.length;v<E;v++){const k=z[v];if(m(k,A,v,R)===!0){const B=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let P=0;for(let N=0;N<J.length;N++){const W=J[N],Y=_(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,B+P,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(b,S,w,R){const A=b.value,C=S+"_"+w;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const z=R[C];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return R[C]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function g(b){const S=b.uniforms;let w=0;const R=16;for(let C=0,z=S.length;C<z;C++){const v=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,k=v.length;E<k;E++){const B=v[E],J=Array.isArray(B.value)?B.value:[B.value];for(let P=0,N=J.length;P<N;P++){const W=J[P],Y=_(W),j=w%R;j!==0&&R-j<Y.boundary&&(w+=R-j),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=Y.storage}}}const A=w%R;return A>0&&(w+=R-A),b.__size=w,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function u(){for(const b in n)s.deleteBuffer(n[b]);a=[],n={},r={}}return{bind:l,update:c,dispose:u}}class La{constructor(t={}){const{canvas:e=Yl(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const S=this;let w=!1,R=0,A=0,C=null,z=-1,v=null;const E=new se,k=new se;let B=null;const J=new Et(0);let P=0,N=e.width,W=e.height,Y=1,j=null,$=null;const q=new se(0,0,N,W),it=new se(0,0,N,W);let rt=!1;const T=new hr;let U=!1,Z=!1,ht=null;const _t=new ue,Lt=new Yt,Ut=new D,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qt(){return C===null?Y:1}let G=i;function ce(y,O){for(let V=0;V<y.length;V++){const X=y[V],H=e.getContext(X,O);if(H!==null)return H}return null}try{const y={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sr}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ft,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&O.shift(),G=ce(O,y),G===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let wt,It,at,St,xt,M,x,F,st,et,K,nt,ot,ut,bt,Tt,tt,jt,kt,Rt,vt,gt,Dt,Kt;function Zt(){wt=new au(G),It=new eu(G,wt,t),wt.init(It),gt=new Yf(G,wt,It),at=new Xf(G,wt,It),St=new hu(G),xt=new Pf,M=new qf(G,wt,at,xt,It,gt,St),x=new nu(S),F=new ou(S),st=new xc(G,It),Dt=new Qd(G,wt,st,It),et=new lu(G,st,St,Dt),K=new pu(G,et,st,St),kt=new fu(G,It,M),Tt=new iu(xt),nt=new Rf(S,x,F,wt,It,Dt,Tt),ot=new Zf(S,xt),ut=new Df,bt=new Bf(wt,It),jt=new Jd(S,x,F,at,K,f,l),tt=new Wf(S,K,It),Kt=new Jf(G,St,It,at),Rt=new tu(G,wt,St,It),vt=new cu(G,wt,St,It),St.programs=nt.programs,S.capabilities=It,S.extensions=wt,S.properties=xt,S.renderLists=ut,S.shadowMap=tt,S.state=at,S.info=St}Zt();const Gt=new $f(S,G);this.xr=Gt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const y=wt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=wt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(N,W,!1))},this.getSize=function(y){return y.set(N,W)},this.setSize=function(y,O,V=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=y,W=O,e.width=Math.floor(y*Y),e.height=Math.floor(O*Y),V===!0&&(e.style.width=y+"px",e.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(N*Y,W*Y).floor()},this.setDrawingBufferSize=function(y,O,V){N=y,W=O,Y=V,e.width=Math.floor(y*V),e.height=Math.floor(O*V),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(q)},this.setViewport=function(y,O,V,X){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,O,V,X),at.viewport(E.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(y){return y.copy(it)},this.setScissor=function(y,O,V,X){y.isVector4?it.set(y.x,y.y,y.z,y.w):it.set(y,O,V,X),at.scissor(k.copy(it).multiplyScalar(Y).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(y){at.setScissorTest(rt=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(y=!0,O=!0,V=!0){let X=0;if(y){let H=!1;if(C!==null){const mt=C.texture.format;H=mt===ra||mt===sa||mt===na}if(H){const mt=C.texture.type,Mt=mt===xi||mt===pi||mt===rr||mt===Pi||mt===ea||mt===ia,Pt=jt.getClearColor(),Ot=jt.getClearAlpha(),Vt=Pt.r,Bt=Pt.g,zt=Pt.b;Mt?(m[0]=Vt,m[1]=Bt,m[2]=zt,m[3]=Ot,G.clearBufferuiv(G.COLOR,0,m)):(g[0]=Vt,g[1]=Bt,g[2]=zt,g[3]=Ot,G.clearBufferiv(G.COLOR,0,g))}else X|=G.COLOR_BUFFER_BIT}O&&(X|=G.DEPTH_BUFFER_BIT),V&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),ut.dispose(),bt.dispose(),xt.dispose(),x.dispose(),F.dispose(),K.dispose(),Dt.dispose(),Kt.dispose(),nt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Ae),Gt.removeEventListener("sessionend",ie),ht&&(ht.dispose(),ht=null),Ce.stop()};function ct(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=St.autoReset,O=tt.enabled,V=tt.autoUpdate,X=tt.needsUpdate,H=tt.type;Zt(),St.autoReset=y,tt.enabled=O,tt.autoUpdate=V,tt.needsUpdate=X,tt.type=H}function ft(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pt(y){const O=y.target;O.removeEventListener("dispose",pt),Nt(O)}function Nt(y){Ct(y),xt.remove(y)}function Ct(y){const O=xt.get(y).programs;O!==void 0&&(O.forEach(function(V){nt.releaseProgram(V)}),y.isShaderMaterial&&nt.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,V,X,H,mt){O===null&&(O=At);const Mt=H.isMesh&&H.matrixWorld.determinant()<0,Pt=Pa(y,O,V,X,H);at.setMaterial(X,Mt);let Ot=V.index,Vt=1;if(X.wireframe===!0){if(Ot=et.getWireframeAttribute(V),Ot===void 0)return;Vt=2}const Bt=V.drawRange,zt=V.attributes.position;let ae=Bt.start*Vt,Ne=(Bt.start+Bt.count)*Vt;mt!==null&&(ae=Math.max(ae,mt.start*Vt),Ne=Math.min(Ne,(mt.start+mt.count)*Vt)),Ot!==null?(ae=Math.max(ae,0),Ne=Math.min(Ne,Ot.count)):zt!=null&&(ae=Math.max(ae,0),Ne=Math.min(Ne,zt.count));const ve=Ne-ae;if(ve<0||ve===1/0)return;Dt.setup(H,X,Pt,V,Ot);let Qe,re=Rt;if(Ot!==null&&(Qe=st.get(Ot),re=vt,re.setIndex(Qe)),H.isMesh)X.wireframe===!0?(at.setLineWidth(X.wireframeLinewidth*qt()),re.setMode(G.LINES)):re.setMode(G.TRIANGLES);else if(H.isLine){let Wt=X.linewidth;Wt===void 0&&(Wt=1),at.setLineWidth(Wt*qt()),H.isLineSegments?re.setMode(G.LINES):H.isLineLoop?re.setMode(G.LINE_LOOP):re.setMode(G.LINE_STRIP)}else H.isPoints?re.setMode(G.POINTS):H.isSprite&&re.setMode(G.TRIANGLES);if(H.isBatchedMesh)re.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)re.renderInstances(ae,ve,H.count);else if(V.isInstancedBufferGeometry){const Wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,fs=Math.min(V.instanceCount,Wt);re.renderInstances(ae,ve,fs)}else re.render(ae,ve)};function te(y,O,V){y.transparent===!0&&y.side===oi&&y.forceSinglePass===!1?(y.side=Ie,y.needsUpdate=!0,Ln(y,O,V),y.side=Si,y.needsUpdate=!0,Ln(y,O,V),y.side=oi):Ln(y,O,V)}this.compile=function(y,O,V=null){V===null&&(V=y),p=bt.get(V),p.init(),b.push(p),V.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),y!==V&&y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(S._useLegacyLights);const X=new Set;return y.traverse(function(H){const mt=H.material;if(mt)if(Array.isArray(mt))for(let Mt=0;Mt<mt.length;Mt++){const Pt=mt[Mt];te(Pt,V,H),X.add(Pt)}else te(mt,V,H),X.add(mt)}),b.pop(),p=null,X},this.compileAsync=function(y,O,V=null){const X=this.compile(y,O,V);return new Promise(H=>{function mt(){if(X.forEach(function(Mt){xt.get(Mt).currentProgram.isReady()&&X.delete(Mt)}),X.size===0){H(y);return}setTimeout(mt,10)}wt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ee=null;function xe(y){ee&&ee(y)}function Ae(){Ce.stop()}function ie(){Ce.start()}const Ce=new Ma;Ce.setAnimationLoop(xe),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(y){ee=y,Gt.setAnimationLoop(y),y===null?Ce.stop():Ce.start()},Gt.addEventListener("sessionstart",Ae),Gt.addEventListener("sessionend",ie),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(O),O=Gt.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,O,C),p=bt.get(y,b.length),p.init(),b.push(p),_t.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),T.setFromProjectionMatrix(_t),Z=this.localClippingEnabled,U=Tt.init(this.clippingPlanes,Z),_=ut.get(y,u.length),_.init(),u.push(_),Ke(y,O,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(j,$),this.info.render.frame++,U===!0&&Tt.beginShadows();const V=p.state.shadowsArray;if(tt.render(V,y,O),U===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(_,y),p.setupLights(S._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let H=0,mt=X.length;H<mt;H++){const Mt=X[H];_r(_,y,Mt,Mt.viewport)}}else _r(_,y,O);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(S,y,O),Dt.resetDefaultState(),z=-1,v=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Ke(y,O,V,X){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||T.intersectsSprite(y)){X&&Ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_t);const Mt=K.update(y),Pt=y.material;Pt.visible&&_.push(y,Mt,Pt,V,Ut.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||T.intersectsObject(y))){const Mt=K.update(y),Pt=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ut.copy(y.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ut.copy(Mt.boundingSphere.center)),Ut.applyMatrix4(y.matrixWorld).applyMatrix4(_t)),Array.isArray(Pt)){const Ot=Mt.groups;for(let Vt=0,Bt=Ot.length;Vt<Bt;Vt++){const zt=Ot[Vt],ae=Pt[zt.materialIndex];ae&&ae.visible&&_.push(y,Mt,ae,V,Ut.z,zt)}}else Pt.visible&&_.push(y,Mt,Pt,V,Ut.z,null)}}const mt=y.children;for(let Mt=0,Pt=mt.length;Mt<Pt;Mt++)Ke(mt[Mt],O,V,X)}function _r(y,O,V,X){const H=y.opaque,mt=y.transmissive,Mt=y.transparent;p.setupLightsView(V),U===!0&&Tt.setGlobalState(S.clippingPlanes,V),mt.length>0&&Ra(H,mt,O,V),X&&at.viewport(E.copy(X)),H.length>0&&Cn(H,O,V),mt.length>0&&Cn(mt,O,V),Mt.length>0&&Cn(Mt,O,V),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Ra(y,O,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const mt=It.isWebGL2;ht===null&&(ht=new Ni(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?bn:xi,minFilter:ln,samples:mt?4:0})),S.getDrawingBufferSize(Lt),mt?ht.setSize(Lt.x,Lt.y):ht.setSize(ss(Lt.x),ss(Lt.y));const Mt=S.getRenderTarget();S.setRenderTarget(ht),S.getClearColor(J),P=S.getClearAlpha(),P<1&&S.setClearColor(16777215,.5),S.clear();const Pt=S.toneMapping;S.toneMapping=_i,Cn(y,V,X),M.updateMultisampleRenderTarget(ht),M.updateRenderTargetMipmap(ht);let Ot=!1;for(let Vt=0,Bt=O.length;Vt<Bt;Vt++){const zt=O[Vt],ae=zt.object,Ne=zt.geometry,ve=zt.material,Qe=zt.group;if(ve.side===oi&&ae.layers.test(X.layers)){const re=ve.side;ve.side=Ie,ve.needsUpdate=!0,xr(ae,V,X,Ne,ve,Qe),ve.side=re,ve.needsUpdate=!0,Ot=!0}}Ot===!0&&(M.updateMultisampleRenderTarget(ht),M.updateRenderTargetMipmap(ht)),S.setRenderTarget(Mt),S.setClearColor(J,P),S.toneMapping=Pt}function Cn(y,O,V){const X=O.isScene===!0?O.overrideMaterial:null;for(let H=0,mt=y.length;H<mt;H++){const Mt=y[H],Pt=Mt.object,Ot=Mt.geometry,Vt=X===null?Mt.material:X,Bt=Mt.group;Pt.layers.test(V.layers)&&xr(Pt,O,V,Ot,Vt,Bt)}}function xr(y,O,V,X,H,mt){y.onBeforeRender(S,O,V,X,H,mt),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(S,O,V,X,y,mt),H.transparent===!0&&H.side===oi&&H.forceSinglePass===!1?(H.side=Ie,H.needsUpdate=!0,S.renderBufferDirect(V,O,X,H,y,mt),H.side=Si,H.needsUpdate=!0,S.renderBufferDirect(V,O,X,H,y,mt),H.side=oi):S.renderBufferDirect(V,O,X,H,y,mt),y.onAfterRender(S,O,V,X,H,mt)}function Ln(y,O,V){O.isScene!==!0&&(O=At);const X=xt.get(y),H=p.state.lights,mt=p.state.shadowsArray,Mt=H.state.version,Pt=nt.getParameters(y,H.state,mt,O,V),Ot=nt.getProgramCacheKey(Pt);let Vt=X.programs;X.environment=y.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||X.environment),Vt===void 0&&(y.addEventListener("dispose",pt),Vt=new Map,X.programs=Vt);let Bt=Vt.get(Ot);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===Mt)return Sr(y,Pt),Bt}else Pt.uniforms=nt.getUniforms(y),y.onBuild(V,Pt,S),y.onBeforeCompile(Pt,S),Bt=nt.acquireProgram(Pt,Ot),Vt.set(Ot,Bt),X.uniforms=Pt.uniforms;const zt=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(zt.clippingPlanes=Tt.uniform),Sr(y,Pt),X.needsLights=Da(y),X.lightsStateVersion=Mt,X.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMap.value=H.state.directionalShadowMap,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotShadowMap.value=H.state.spotShadowMap,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMap.value=H.state.pointShadowMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function vr(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Jn.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Sr(y,O){const V=xt.get(y);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Pa(y,O,V,X,H){O.isScene!==!0&&(O=At),M.resetTextureUnits();const mt=O.fog,Mt=X.isMeshStandardMaterial?O.environment:null,Pt=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:li,Ot=(X.isMeshStandardMaterial?F:x).get(X.envMap||Mt),Vt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),zt=!!V.morphAttributes.position,ae=!!V.morphAttributes.normal,Ne=!!V.morphAttributes.color;let ve=_i;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=S.toneMapping);const Qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=Qe!==void 0?Qe.length:0,Wt=xt.get(X),fs=p.state.lights;if(U===!0&&(Z===!0||y!==v)){const Be=y===v&&X.id===z;Tt.setState(X,y,Be)}let oe=!1;X.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==fs.state.version||Wt.outputColorSpace!==Pt||H.isBatchedMesh&&Wt.batching===!1||!H.isBatchedMesh&&Wt.batching===!0||H.isInstancedMesh&&Wt.instancing===!1||!H.isInstancedMesh&&Wt.instancing===!0||H.isSkinnedMesh&&Wt.skinning===!1||!H.isSkinnedMesh&&Wt.skinning===!0||H.isInstancedMesh&&Wt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Wt.instancingColor===!1&&H.instanceColor!==null||Wt.envMap!==Ot||X.fog===!0&&Wt.fog!==mt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Tt.numPlanes||Wt.numIntersection!==Tt.numIntersection)||Wt.vertexAlphas!==Vt||Wt.vertexTangents!==Bt||Wt.morphTargets!==zt||Wt.morphNormals!==ae||Wt.morphColors!==Ne||Wt.toneMapping!==ve||It.isWebGL2===!0&&Wt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Wt.__version=X.version);let Mi=Wt.currentProgram;oe===!0&&(Mi=Ln(X,O,H));let Mr=!1,mn=!1,ps=!1;const Me=Mi.getUniforms(),yi=Wt.uniforms;if(at.useProgram(Mi.program)&&(Mr=!0,mn=!0,ps=!0),X.id!==z&&(z=X.id,mn=!0),Mr||v!==y){Me.setValue(G,"projectionMatrix",y.projectionMatrix),Me.setValue(G,"viewMatrix",y.matrixWorldInverse);const Be=Me.map.cameraPosition;Be!==void 0&&Be.setValue(G,Ut.setFromMatrixPosition(y.matrixWorld)),It.logarithmicDepthBuffer&&Me.setValue(G,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Me.setValue(G,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,mn=!0,ps=!0)}if(H.isSkinnedMesh){Me.setOptional(G,H,"bindMatrix"),Me.setOptional(G,H,"bindMatrixInverse");const Be=H.skeleton;Be&&(It.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),Me.setValue(G,"boneTexture",Be.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Me.setOptional(G,H,"batchingTexture"),Me.setValue(G,"batchingTexture",H._matricesTexture,M));const ms=V.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&It.isWebGL2===!0)&&kt.update(H,V,Mi),(mn||Wt.receiveShadow!==H.receiveShadow)&&(Wt.receiveShadow=H.receiveShadow,Me.setValue(G,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(yi.envMap.value=Ot,yi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),mn&&(Me.setValue(G,"toneMappingExposure",S.toneMappingExposure),Wt.needsLights&&Ia(yi,ps),mt&&X.fog===!0&&ot.refreshFogUniforms(yi,mt),ot.refreshMaterialUniforms(yi,X,Y,W,ht),Jn.upload(G,vr(Wt),yi,M)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Jn.upload(G,vr(Wt),yi,M),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Me.setValue(G,"center",H.center),Me.setValue(G,"modelViewMatrix",H.modelViewMatrix),Me.setValue(G,"normalMatrix",H.normalMatrix),Me.setValue(G,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Be=X.uniformsGroups;for(let gs=0,Ua=Be.length;gs<Ua;gs++)if(It.isWebGL2){const yr=Be[gs];Kt.update(yr,Mi),Kt.bind(yr,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi}function Ia(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Da(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,O,V){xt.get(y.texture).__webglTexture=O,xt.get(y.depthTexture).__webglTexture=V;const X=xt.get(y);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,O){const V=xt.get(y);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,V=0){C=y,R=O,A=V;let X=!0,H=null,mt=!1,Mt=!1;if(y){const Ot=xt.get(y);Ot.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(G.FRAMEBUFFER,null),X=!1):Ot.__webglFramebuffer===void 0?M.setupRenderTarget(y):Ot.__hasExternalTextures&&M.rebindTextures(y,xt.get(y.texture).__webglTexture,xt.get(y.depthTexture).__webglTexture);const Vt=y.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);const Bt=xt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?H=Bt[O][V]:H=Bt[O],mt=!0):It.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?H=xt.get(y).__webglMultisampledFramebuffer:Array.isArray(Bt)?H=Bt[V]:H=Bt,E.copy(y.viewport),k.copy(y.scissor),B=y.scissorTest}else E.copy(q).multiplyScalar(Y).floor(),k.copy(it).multiplyScalar(Y).floor(),B=rt;if(at.bindFramebuffer(G.FRAMEBUFFER,H)&&It.drawBuffers&&X&&at.drawBuffers(y,H),at.viewport(E),at.scissor(k),at.setScissorTest(B),mt){const Ot=xt.get(y.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ot.__webglTexture,V)}else if(Mt){const Ot=xt.get(y.texture),Vt=O||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ot.__webglTexture,V||0,Vt)}z=-1},this.readRenderTargetPixels=function(y,O,V,X,H,mt,Mt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=xt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(Pt=Pt[Mt]),Pt){at.bindFramebuffer(G.FRAMEBUFFER,Pt);try{const Ot=y.texture,Vt=Ot.format,Bt=Ot.type;if(Vt!==je&&gt.convert(Vt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Bt===bn&&(wt.has("EXT_color_buffer_half_float")||It.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Bt!==xi&&gt.convert(Bt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===mi&&(It.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-X&&V>=0&&V<=y.height-H&&G.readPixels(O,V,X,H,gt.convert(Vt),gt.convert(Bt),mt)}finally{const Ot=C!==null?xt.get(C).__webglFramebuffer:null;at.bindFramebuffer(G.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(y,O,V=0){const X=Math.pow(2,-V),H=Math.floor(O.image.width*X),mt=Math.floor(O.image.height*X);M.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,V,0,0,y.x,y.y,H,mt),at.unbindTexture()},this.copyTextureToTexture=function(y,O,V,X=0){const H=O.image.width,mt=O.image.height,Mt=gt.convert(V.format),Pt=gt.convert(V.type);M.setTexture2D(V,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,y.x,y.y,H,mt,Mt,Pt,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Mt,O.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,X,y.x,y.y,Mt,Pt,O.image),X===0&&V.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(y,O,V,X,H=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=y.max.x-y.min.x+1,Mt=y.max.y-y.min.y+1,Pt=y.max.z-y.min.z+1,Ot=gt.convert(X.format),Vt=gt.convert(X.type);let Bt;if(X.isData3DTexture)M.setTexture3D(X,0),Bt=G.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)M.setTexture2DArray(X,0),Bt=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const zt=G.getParameter(G.UNPACK_ROW_LENGTH),ae=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ne=G.getParameter(G.UNPACK_SKIP_PIXELS),ve=G.getParameter(G.UNPACK_SKIP_ROWS),Qe=G.getParameter(G.UNPACK_SKIP_IMAGES),re=V.isCompressedTexture?V.mipmaps[H]:V.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,re.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,re.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,y.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,y.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,y.min.z),V.isDataTexture||V.isData3DTexture?G.texSubImage3D(Bt,H,O.x,O.y,O.z,mt,Mt,Pt,Ot,Vt,re.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Bt,H,O.x,O.y,O.z,mt,Mt,Pt,Ot,re.data)):G.texSubImage3D(Bt,H,O.x,O.y,O.z,mt,Mt,Pt,Ot,Vt,re),G.pixelStorei(G.UNPACK_ROW_LENGTH,zt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ae),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ne),G.pixelStorei(G.UNPACK_SKIP_ROWS,ve),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qe),H===0&&X.generateMipmaps&&G.generateMipmap(Bt),at.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),at.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,at.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===or?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===as?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Di:aa}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Di?pe:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Qf extends La{}Qf.prototype.isWebGL1Renderer=!0;class hs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new hs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tp extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fe extends Ue{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yt extends Je{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=i/2;let u=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(m,2));function b(){const w=new D,R=new D;let A=0;const C=(e-t)/i;for(let z=0;z<=r;z++){const v=[],E=z/r,k=E*(e-t)+t;for(let B=0;B<=n;B++){const J=B/n,P=J*l+o,N=Math.sin(P),W=Math.cos(P);R.x=k*N,R.y=-E*i+p,R.z=k*W,d.push(R.x,R.y,R.z),w.set(N,C,W).normalize(),f.push(w.x,w.y,w.z),m.push(J,1-E),v.push(g++)}_.push(v)}for(let z=0;z<n;z++)for(let v=0;v<r;v++){const E=_[v][z],k=_[v+1][z],B=_[v+1][z+1],J=_[v][z+1];h.push(E,k,J),h.push(k,B,J),A+=6}c.addGroup(u,A,0),u+=A}function S(w){const R=g,A=new Yt,C=new D;let z=0;const v=w===!0?t:e,E=w===!0?1:-1;for(let B=1;B<=n;B++)d.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),g++;const k=g;for(let B=0;B<=n;B++){const P=B/n*l+o,N=Math.cos(P),W=Math.sin(P);C.x=v*W,C.y=p*E,C.z=v*N,d.push(C.x,C.y,C.z),f.push(0,E,0),A.x=N*.5+.5,A.y=W*.5*E+.5,m.push(A.x,A.y),g++}for(let B=0;B<n;B++){const J=R+B,P=k+B;w===!0?h.push(P,P+1,J):h.push(P+1,P,J),z+=3}c.addGroup(u,z,w===!0?1:2),u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends yt{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $t extends Je{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,f=new D,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){const b=[],S=u/i;let w=0;u===0&&a===0?w=.5/e:u===i&&l===Math.PI&&(w=-.5/e);for(let R=0;R<=e;R++){const A=R/e;d.x=-t*Math.cos(n+A*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(n+A*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+w,1-S),b.push(c++)}h.push(b)}for(let u=0;u<i;u++)for(let b=0;b<e;b++){const S=h[u][b+1],w=h[u][b],R=h[u+1][b],A=h[u+1][b+1];(u!==0||a>0)&&m.push(S,w,A),(u!==i-1||l<Math.PI)&&m.push(w,R,A)}this.setIndex(m),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class us extends Je{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new D,d=new D,f=new D;for(let m=0;m<=i;m++)for(let g=0;g<=n;g++){const _=g/n*r,p=m/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=n;g++){const _=(n+1)*m+g-1,p=(n+1)*(m-1)+g-1,u=(n+1)*(m-1)+g,b=(n+1)*m+g;a.push(_,p,b),a.push(p,u,b)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Q extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ir extends Q{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class An extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class ur extends An{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qs=new ue,Wo=new D,Xo=new D;class fr{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Wo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wo),Xo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xo),e.updateMatrixWorld(),qs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ep extends fr{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=hn*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ui extends An{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ep}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const qo=new ue,Sn=new D,Ys=new D;class ip extends fr{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Sn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Sn),Ys.copy(i.position),Ys.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ys),i.updateMatrixWorld(),n.makeTranslation(-Sn.x,-Sn.y,-Sn.z),qo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo)}}class rn extends An{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ip}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class np extends fr{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pr extends An{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new np}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mr extends An{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yo(){return(typeof performance>"u"?Date:performance).now()}class rp{constructor(t,e,i=0,n=1/0){this.ray=new pa(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return nr(t,this,i,e),i.sort(jo),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)nr(t[n],this,i,e);return i.sort(jo),i}}function jo(s,t){return s.distance-t.distance}function nr(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let r=0,a=n.length;r<a;r++)nr(n[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sr);class op{constructor(){this.colliders=[],this.boundaries={minX:-4.5,maxX:4.5,minZ:-4.5,maxZ:4.5},this.friction=.82,this.acceleration=32,this.maxSpeed=3.6,this.velocity=new D,this.accelerationVector=new D,this._tempBox=new vi,this._playerBox=new vi,this._normal=new D,this._slideVec=new D}setBoundaries(t,e,i,n){this.boundaries={minX:t,maxX:e,minZ:i,maxZ:n}}addStaticCollider(t){if(t.isMesh){t.geometry.computeBoundingBox();const e=new vi;e.copy(t.geometry.boundingBox).applyMatrix4(t.matrixWorld),this.colliders.push(e)}else t.isBox3&&this.colliders.push(t)}clear(){this.colliders=[],this.velocity.set(0,0,0)}updateKinematics(t,e,i,n=.35){e.lengthSq()>.01&&(this.accelerationVector.set(e.x,0,e.y).normalize().multiplyScalar(this.acceleration),this.velocity.addScaledVector(this.accelerationVector,i));const r=Math.pow(this.friction,i*60);this.velocity.x*=r,this.velocity.z*=r,Math.abs(this.velocity.x)<.001&&(this.velocity.x=0),Math.abs(this.velocity.z)<.001&&(this.velocity.z=0);const a=Math.hypot(this.velocity.x,this.velocity.z);a>this.maxSpeed&&(this.velocity.x=this.velocity.x/a*this.maxSpeed,this.velocity.z=this.velocity.z/a*this.maxSpeed);const o=t.clone().addScaledVector(this.velocity,i);o.x<this.boundaries.minX+n?(o.x=this.boundaries.minX+n,this.velocity.x=0):o.x>this.boundaries.maxX-n&&(o.x=this.boundaries.maxX-n,this.velocity.x=0),o.z<this.boundaries.minZ+n?(o.z=this.boundaries.minZ+n,this.velocity.z=0):o.z>this.boundaries.maxZ-n&&(o.z=this.boundaries.maxZ-n,this.velocity.z=0),this._playerBox.min.set(o.x-n,o.y,o.z-n),this._playerBox.max.set(o.x+n,o.y+1.8,o.z+n);for(let l=0;l<this.colliders.length;l++){const c=this.colliders[l];if(this._playerBox.intersectsBox(c)){const h=c.max.x-(o.x-n),d=o.x+n-c.min.x,f=c.max.z-(o.z-n),m=o.z+n-c.min.z,g=Math.min(h,d),_=Math.min(f,m);g<_?(o.x=t.x,this.velocity.x=0):(o.z=t.z,this.velocity.z=0);break}}return t.copy(o),{position:t,isMoving:a>.08,speed:a}}resolvePlayerMovement(t,e,i=.35){return this.velocity.set(0,0,0),e.x=Math.max(this.boundaries.minX+i,Math.min(this.boundaries.maxX-i,e.x)),e.z=Math.max(this.boundaries.minZ+i,Math.min(this.boundaries.maxZ-i,e.z)),e}}class de{static _prepareTexture(t){return t&&(t.anisotropy=16,t.generateMipmaps=!0,t.minFilter=ln,t.magFilter=ke,t.colorSpace=pe),t}static createWoodFloorTexture(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#261c16",e.fillRect(0,0,1024,1024);const i=128,n=256;for(let a=0;a<1024;a+=i){const o=Math.floor(a/i)%2*(n/2);for(let l=-n;l<1024+n;l+=n){const c=l+o,h=Math.sin(c*.05+a*.1)*12+(Math.random()*8-4),d=Math.min(255,Math.max(0,42+h)),f=Math.min(255,Math.max(0,30+h*.8)),m=Math.min(255,Math.max(0,22+h*.6));e.fillStyle=`rgb(${Math.round(d)},${Math.round(f)},${Math.round(m)})`,e.fillRect(c,a,n-2,i-2),e.fillStyle="rgba(0,0,0,0.07)";for(let g=0;g<6;g++){const _=a+Math.random()*i;e.fillRect(c,_,n-2,2+Math.random()*3)}e.fillStyle="rgba(10, 7, 5, 0.9)",e.fillRect(c,a+i-2,n,2),e.fillRect(c+n-2,a,2,i)}}const r=new fe(t);return r.wrapS=be,r.wrapT=be,r.repeat.set(4,4),this._prepareTexture(r)}static createWindowViewTexture(){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#38bdf8"),i.addColorStop(.5,"#bae6fd"),i.addColorStop(.85,"#e0f2fe"),i.addColorStop(1,"#f8fafc"),e.fillStyle=i,e.fillRect(0,0,1024,512),e.fillStyle="rgba(255, 255, 255, 0.55)",e.beginPath(),e.arc(200,120,90,0,Math.PI*2),e.arc(290,100,110,0,Math.PI*2),e.arc(380,130,80,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(700,140,85,0,Math.PI*2),e.arc(790,110,120,0,Math.PI*2),e.arc(880,135,75,0,Math.PI*2),e.fill(),e.fillStyle="#93c5fd",[[50,180,80,332],[150,140,100,372],[280,160,90,352],[420,110,120,402],[580,150,85,362],[710,130,110,382],[860,170,95,342]].forEach(([o,l,c,h])=>e.fillRect(o,l,c,h)),[{x:100,y:190,w:90,h:322,col:"#1e3a5f"},{x:220,y:150,w:110,h:362,col:"#0f172a"},{x:360,y:175,w:95,h:337,col:"#1e293b"},{x:500,y:130,w:130,h:382,col:"#0f172a"},{x:670,y:165,w:105,h:347,col:"#1e3a5f"},{x:810,y:185,w:100,h:327,col:"#334155"}].forEach(({x:o,y:l,w:c,h,col:d})=>{e.fillStyle=d,e.fillRect(o,l,c,h),e.fillStyle="rgba(56, 189, 248, 0.25)";for(let f=l+10;f<l+h-10;f+=14)for(let m=o+8;m<o+c-8;m+=16)Math.random()>.15&&e.fillRect(m,f,10,8)});const a=new fe(t);return this._prepareTexture(a)}static createLaptopScreenTexture(){const t=document.createElement("canvas");t.width=512,t.height=320;const e=t.getContext("2d");e.fillStyle="#1e1e1e",e.fillRect(0,0,512,320),e.fillStyle="#2d2d2d",e.fillRect(0,0,512,28),e.fillStyle="#1e1e1e",e.fillRect(0,0,160,28),e.fillStyle="#ffffff",e.font="12px Consolas, monospace",e.fillText("interview_solution.ts",18,19),e.fillStyle="#252526",e.fillRect(0,28,44,292);const i=[{num:"1",col:"#569cd6",text:"export async function solveProblem(input: Data) {"},{num:"2",col:"#9cdcfe",text:"    const result = await processPipeline(input);"},{num:"3",col:"#c586c0",text:"    if (!result.isValid) {"},{num:"4",col:"#ce9178",text:'        throw new ValidationError("Invalid payload");'},{num:"5",col:"#c586c0",text:"    }"},{num:"6",col:"#4ec9b0",text:"    return optimizePerformance(result.data);"},{num:"7",col:"#569cd6",text:"}"},{num:"8",col:"#6a9955",text:"    // STAR Method: Structured, verified, benchmarked"}];e.font="13px Consolas, monospace",i.forEach(({num:r,col:a,text:o},l)=>{const c=56+l*22;e.fillStyle="#858585",e.fillText(r,54,c),e.fillStyle=a,e.fillText(o,80,c)}),e.fillStyle="#181818",e.fillRect(44,240,468,80),e.fillStyle="#4ec9b0",e.font="11px Consolas, monospace",e.fillText("bash - elivet-candidate@workstation: ~/project",54,258),e.fillStyle="#4ade80",e.fillText("✔ Tests passing: 18/18 suites (100%) [Runtime: 42ms]",54,280),e.fillStyle="#94a3b8",e.fillText("$ git push origin feature/production-ready",54,300);const n=new fe(t);return this._prepareTexture(n)}static createWallArtTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#0f172a",e.fillRect(0,0,512,512),e.strokeStyle="#0ea5e9",e.lineWidth=14,e.beginPath(),e.arc(256,256,170,0,Math.PI*1.5),e.stroke(),e.strokeStyle="#f59e0b",e.lineWidth=10,e.beginPath(),e.arc(280,280,110,Math.PI*.5,Math.PI*2),e.stroke(),e.fillStyle="#14b8a6",e.beginPath(),e.arc(256,256,28,0,Math.PI*2),e.fill(),e.fillStyle="#f8fafc",e.font="bold 24px sans-serif",e.letterSpacing="4px",e.fillText("EXCELLENCE",160,460);const i=new fe(t);return this._prepareTexture(i)}static createOfficeCarpetTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#334155",e.fillRect(0,0,512,512);const i=128;for(let r=0;r<512;r+=i)for(let a=0;a<512;a+=i){const o=(a/i+r/i)%2===0;e.fillStyle=o?"#475569":"#3b4c64",e.fillRect(a+2,r+2,i-4,i-4),e.fillStyle="rgba(255, 255, 255, 0.05)";for(let l=0;l<60;l++){const c=a+Math.random()*(i-6)+3,h=r+Math.random()*(i-6)+3;e.fillRect(c,h,2,2)}e.strokeStyle="rgba(15, 23, 42, 0.6)",e.lineWidth=2,e.strokeRect(a,r,i,i)}const n=new fe(t);return n.wrapS=be,n.wrapT=be,n.repeat.set(6,6),this._prepareTexture(n)}static createSkyline360Texture(){const t=document.createElement("canvas");t.width=2048,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#38bdf8"),i.addColorStop(.35,"#7dd3fc"),i.addColorStop(.65,"#bae6fd"),i.addColorStop(.88,"#e0f2fe"),i.addColorStop(1,"#fef08a"),e.fillStyle=i,e.fillRect(0,0,2048,512);const n=e.createRadialGradient(1024,220,20,1024,220,220);n.addColorStop(0,"rgba(255, 255, 255, 0.95)"),n.addColorStop(.3,"rgba(254, 240, 138, 0.6)"),n.addColorStop(1,"rgba(254, 240, 138, 0)"),e.fillStyle=n,e.beginPath(),e.arc(1024,220,220,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.65)",[[200,140,80],[320,120,110],[440,145,90],[1300,150,95],[1440,125,120],[1580,150,85],[1850,130,100]].forEach(([l,c,h])=>{e.beginPath(),e.arc(l,c,h,0,Math.PI*2),e.fill()}),e.fillStyle="#93c5fd";for(let l=0;l<2048;l+=60){const c=140+Math.sin(l*.04)*80+Math.sin(l*.12)*40,h=45+l%30;e.fillRect(l,512-c,h,c)}[{x:80,w:90,h:260,c:"#1e3a5f"},{x:230,w:120,h:320,c:"#0f172a"},{x:410,w:85,h:240,c:"#1e293b"},{x:550,w:140,h:350,c:"#0f172a"},{x:740,w:110,h:290,c:"#1e3a5f"},{x:900,w:95,h:270,c:"#334155"},{x:1150,w:130,h:340,c:"#0f172a"},{x:1340,w:100,h:280,c:"#1e3a5f"},{x:1500,w:125,h:310,c:"#1e293b"},{x:1680,w:90,h:250,c:"#0f172a"},{x:1820,w:140,h:330,c:"#1e3a5f"}].forEach(({x:l,w:c,h,c:d})=>{e.fillStyle=d,e.fillRect(l,512-h,c,h),e.fillStyle="rgba(56, 189, 248, 0.35)";for(let f=512-h+15;f<500;f+=16)for(let m=l+8;m<l+c-8;m+=16)Math.random()>.2&&e.fillRect(m,f,9,9)});const o=new fe(t);return o.wrapS=be,o.wrapT=ze,this._prepareTexture(o)}static createKanbanBoardTexture(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,512,256),e.fillStyle="#0f172a",e.font="bold 16px system-ui, sans-serif",e.fillText("🚀 SPRINT 24 · ENGINEERING ROADMAP & PLACEMENT",16,28),e.strokeStyle="#0284c7",e.lineWidth=3,e.beginPath(),e.moveTo(16,38),e.lineTo(496,38),e.stroke(),[{name:"BACKLOG",x:20},{name:"IN PROGRESS",x:180},{name:"VERIFIED / DONE",x:340}].forEach(({name:a,x:o})=>{e.fillStyle="#64748b",e.font="bold 12px system-ui, sans-serif",e.fillText(a,o,62),e.strokeStyle="#e2e8f0",e.lineWidth=1,e.strokeRect(o-6,70,140,172)}),[{col:"#fef08a",text:"STAR Framework Practice",x:22,y:76},{col:"#fef08a",text:"Resume ATS Benchmark",x:22,y:126},{col:"#bae6fd",text:"System Design Mock",x:182,y:76},{col:"#bae6fd",text:"Live Coding Challenge",x:182,y:126},{col:"#a7f3d0",text:"HR Etiquette Cleared",x:342,y:76},{col:"#a7f3d0",text:"Portfolio Deployed",x:342,y:126}].forEach(({col:a,text:o,x:l,y:c})=>{e.fillStyle=a,e.fillRect(l,c,126,42),e.strokeStyle="rgba(0,0,0,0.12)",e.strokeRect(l,c,126,42),e.fillStyle="#1e293b",e.font="bold 10px system-ui, sans-serif",e.fillText(o,l+8,c+24)});const r=new fe(t);return this._prepareTexture(r)}static createCompanyHubSignTexture(){const t=document.createElement("canvas");t.width=512,t.height=160;const e=t.getContext("2d");e.fillStyle="#0f172a",e.fillRect(0,0,512,160),e.strokeStyle="#38bdf8",e.lineWidth=4,e.strokeRect(6,6,500,148),e.fillStyle="#38bdf8",e.font="bold 28px system-ui, sans-serif",e.fillText("🎓 ELiVET INNOVATION LAB",28,55),e.fillStyle="#f8fafc",e.font="bold 15px system-ui, sans-serif",e.fillText("ADVANCED ENGINEERING & EMPLOYABILITY CENTER",28,92),e.fillStyle="#10b981",e.font="bold 13px monospace",e.fillText("● SYSTEM STATUS: ONLINE · ALL PODS ACTIVE",28,126);const i=new fe(t);return this._prepareTexture(i)}static createMetricsDashboardTexture(){const t=document.createElement("canvas");t.width=512,t.height=320;const e=t.getContext("2d");e.fillStyle="#090d16",e.fillRect(0,0,512,320),e.fillStyle="#1e293b",e.fillRect(0,0,512,34),e.fillStyle="#38bdf8",e.font="bold 13px system-ui, sans-serif",e.fillText("📊 ELiVET Cloud Telemetry · Workstation Cluster",16,22),[{label:"PLACEMENT SCORE",val:"94.2%",col:"#4ade80",x:16},{label:"ALGO LATENCY",val:"18ms",col:"#38bdf8",x:180},{label:"CODE REVIEW",val:"PASS A+",col:"#fbbf24",x:344}].forEach(({label:r,val:a,col:o,x:l})=>{e.fillStyle="#111827",e.fillRect(l,46,150,60),e.strokeStyle="rgba(255,255,255,0.08)",e.strokeRect(l,46,150,60),e.fillStyle="#94a3b8",e.font="10px system-ui, sans-serif",e.fillText(r,l+10,64),e.fillStyle=o,e.font="bold 20px monospace",e.fillText(a,l+10,94)}),e.fillStyle="#111827",e.fillRect(16,120,480,185),e.strokeStyle="rgba(255,255,255,0.08)",e.strokeRect(16,120,480,185),e.strokeStyle="rgba(255,255,255,0.05)",e.lineWidth=1;for(let r=145;r<300;r+=35)e.beginPath(),e.moveTo(25,r),e.lineTo(485,r),e.stroke();e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(30,240),e.lineTo(90,210),e.lineTo(160,230),e.lineTo(240,160),e.lineTo(320,180),e.lineTo(400,145),e.lineTo(475,150),e.stroke(),e.strokeStyle="#10b981",e.lineWidth=2,e.beginPath(),e.moveTo(30,260),e.lineTo(120,245),e.lineTo(220,195),e.lineTo(340,210),e.lineTo(475,175),e.stroke();const n=new fe(t);return this._prepareTexture(n)}static createSuitWoolTexture(t="#172b46"){const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,512,512);const n=8;for(let a=0;a<512;a+=n)for(let o=0;o<512;o+=n){const l=(o+a)/n%2===0;i.fillStyle=l?"rgba(255, 255, 255, 0.045)":"rgba(0, 0, 0, 0.08)",i.fillRect(o,a,n,n),(o*17+a*23)%7===0&&(i.fillStyle="rgba(255, 255, 255, 0.07)",i.fillRect(o+2,a+2,2,2))}const r=new fe(e);return r.wrapS=be,r.wrapT=be,r.repeat.set(16,16),this._prepareTexture(r)}static createShirtCottonTexture(t="#f8fafc"){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256);const n=4;for(let a=0;a<256;a+=n)i.fillStyle=a%(n*2)===0?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.03)",i.fillRect(0,a,256,1);for(let a=0;a<256;a+=n)i.fillStyle=a%(n*2)===0?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.025)",i.fillRect(a,0,1,256);const r=new fe(e);return r.wrapS=be,r.wrapT=be,r.repeat.set(24,24),this._prepareTexture(r)}static createSilkTieTexture(t="#1e3a5f"){const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,256,256);const n=6;for(let a=-256;a<512;a+=n*2)i.strokeStyle="rgba(255, 255, 255, 0.09)",i.lineWidth=2,i.beginPath(),i.moveTo(a,0),i.lineTo(a+256,256),i.stroke(),i.strokeStyle="rgba(0, 0, 0, 0.12)",i.lineWidth=2,i.beginPath(),i.moveTo(a+n,0),i.lineTo(a+n+256,256),i.stroke();const r=new fe(e);return r.wrapS=be,r.wrapT=be,r.repeat.set(8,8),this._prepareTexture(r)}static createLeatherTexture(t="#09090b"){const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,512,512);const n=i.createLinearGradient(0,0,512,512);n.addColorStop(0,"rgba(255, 255, 255, 0.07)"),n.addColorStop(.5,"rgba(0, 0, 0, 0.03)"),n.addColorStop(1,"rgba(255, 255, 255, 0.05)"),i.fillStyle=n,i.fillRect(0,0,512,512),i.fillStyle="rgba(0, 0, 0, 0.1)";for(let a=0;a<600;a++){const o=Math.random()*512,l=Math.random()*512,c=Math.random()*2+1;i.fillRect(o,l,c,c)}const r=new fe(e);return r.wrapS=be,r.wrapT=be,r.repeat.set(6,6),this._prepareTexture(r)}static createSkinTexture(t="#c68642"){const e=document.createElement("canvas");e.width=512,e.height=512;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,512,512);const n=i.createRadialGradient(256,256,40,256,256,250);n.addColorStop(0,"rgba(255, 180, 160, 0.08)"),n.addColorStop(.7,"rgba(230, 120, 100, 0.04)"),n.addColorStop(1,"rgba(0, 0, 0, 0.05)"),i.fillStyle=n,i.fillRect(0,0,512,512),i.fillStyle="rgba(255, 255, 255, 0.03)";for(let a=0;a<400;a++){const o=Math.random()*512,l=Math.random()*512;i.fillRect(o,l,1.5,1.5)}const r=new fe(e);return this._prepareTexture(r)}}class ap{constructor(t,e,i){this.scene=t,this.camera=e,this.physics=i,this.root=new Ft,this.root.name="PlayerAvatar",this.scene.add(this.root),this.moveSpeed=3.8,this.rotationSpeed=8,this.cameraMode="interview",this.customization={gender:"male",skinTone:"#c68642",hairStyle:"executive",hairColor:"#18181b",attireStyle:"formal",jacketColor:"#172b46",shirtColor:"#f8fafc",pantsColor:"#1e293b",tieColor:"#1e3a5f",hasTie:!0,shoesColor:"#09090b",glasses:"none",glassesColor:"#0f172a",watch:"steel"},this.wardrobeFocus="full",this.parts={},this.animTime=0,this.isWalking=!1,this.interviewCamPos=new D(.55,1.45,-.1),this.interviewLookTarget=new D(0,1.45,-2.65),this.firstPersonPos=new D(0,1.55,-.75),this.thirdPersonOffset=new D(0,1.9,-2.8),this._buildAnatomicalAvatar(),this._setupInputListeners()}_buildAnatomicalAvatar(){const t=de.createSuitWoolTexture(this.customization.jacketColor),e=de.createShirtCottonTexture(this.customization.shirtColor),i=de.createSilkTieTexture(this.customization.tieColor),n=de.createLeatherTexture(this.customization.shoesColor),r=de.createSkinTexture(this.customization.skinTone);this.materials={skin:new Q({color:new Et(this.customization.skinTone),map:r,roughness:.52,metalness:.03}),hair:new Q({color:new Et(this.customization.hairColor),roughness:.76,metalness:.08}),shirt:new Q({color:new Et(this.customization.shirtColor),map:e,roughness:.36,metalness:.02}),jacket:new Q({color:new Et(this.customization.jacketColor),map:t,roughness:.52,metalness:.08}),lapel:new Q({color:new Et(this.customization.jacketColor),map:t,roughness:.46,metalness:.09}),button:new Q({color:1579035,metalness:.6,roughness:.25}),tie:new Q({color:new Et(this.customization.tieColor),map:i,roughness:.28,metalness:.24}),pants:new Q({color:new Et(this.customization.pantsColor),map:t,roughness:.62,metalness:.04}),shoes:new Q({color:new Et(this.customization.shoesColor),map:n,roughness:.22,metalness:.64}),shoeSole:new Q({color:1579035,roughness:.85}),glasses:new Q({color:988970,roughness:.2,metalness:.85}),watchBand:new Q({color:9741240,metalness:.92,roughness:.18}),watchFace:new Q({color:988970,roughness:.12,metalness:.7}),cufflink:new Q({color:14870768,metalness:.96,roughness:.12}),belt:new Q({color:new Et(this.customization.shoesColor),map:n,roughness:.32,metalness:.3}),buckle:new Q({color:15857145,metalness:.96,roughness:.12}),pocketSquare:new Q({color:16777215,roughness:.3}),tieBar:new Q({color:14251782,metalness:.96,roughness:.14}),lapelPin:new Q({color:1096065,metalness:.9,roughness:.2})},this.parts.headGroup=new Ft,this.parts.headGroup.position.set(0,1.48,0);const a=new $t(.148,24,20);a.scale(.92,1.06,.98),this.parts.head=new L(a,this.materials.skin),this.parts.head.castShadow=!0,this.parts.headGroup.add(this.parts.head);const o=new $t(.04,12,10);o.scale(1.15,.85,1);const l=new L(o,this.materials.skin);l.position.set(0,-.076,.118),this.parts.headGroup.add(l);const c=new yt(.008,.014,.044,8),h=new L(c,this.materials.skin);h.position.set(0,.006,.148),h.rotation.x=-.22,this.parts.headGroup.add(h);const d=new $t(.012,10,8);d.scale(1.1,.85,1);const f=new L(d,this.materials.skin);f.position.set(0,-.016,.154),this.parts.headGroup.add(f);const m=new Q({color:11817811,roughness:.45,metalness:.05}),g=new lt(.038,.008,.014),_=new L(g,m);_.position.set(0,-.042,.14),this.parts.headGroup.add(_);const p=new yt(.007,.007,.032,10);p.rotateZ(Math.PI/2);const u=new L(p,m);u.position.set(0,-.052,.138),this.parts.headGroup.add(u);const b=new yt(.024,.018,.048,10);b.scale(.4,1,.8),[-.138,.138].forEach(K=>{const nt=new L(b,this.materials.skin);nt.position.set(K,.005,-.015),nt.rotation.z=K>0?-.15:.15,this.parts.headGroup.add(nt)}),this._buildHairStyles(),this._buildGlasses();const S=new $t(.016,12,10);S.scale(1.25,.75,.8);const w=new le({color:16448250}),R=new $t(.011,10,8),A=new le({color:2036750}),C=new $t(.0035,6,6),z=new le({color:16777215}),v=new yt(.018,.018,.024,8,1,!1,0,Math.PI);v.rotateZ(Math.PI/2),[-.05,.05].forEach((K,nt)=>{const ot=new L(S,w);ot.position.set(K,.014,.135),this.parts.headGroup.add(ot);const ut=new L(R,A);ut.position.set(K,.014,.143),this.parts.headGroup.add(ut);const bt=new L(C,z);bt.position.set(K+(nt===0?.003:-.003),.017,.149),this.parts.headGroup.add(bt);const Tt=new L(v,this.materials.skin);Tt.position.set(K,.022,.138),Tt.rotation.x=-.35,this.parts.headGroup.add(Tt)});const E=new lt(.038,.007,.012);[-.05,.05].forEach((K,nt)=>{const ot=new L(E,this.materials.hair);ot.position.set(K,.038,.138),ot.rotation.z=nt===0?.08:-.08,this.parts.headGroup.add(ot)});const k=new yt(.064,.076,.13,16),B=new L(k,this.materials.skin);B.position.y=-.11,this.parts.headGroup.add(B),this.root.add(this.parts.headGroup),this.parts.torso=new Ft,this.parts.torso.position.set(0,.96,0);const J=new lt(.42,.5,.24);this.parts.chest=new L(J,this.materials.shirt),this.parts.chest.castShadow=!0,this.parts.torso.add(this.parts.chest);const P=new lt(.46,.28,.26),N=new L(P,this.materials.jacket);N.position.set(0,.11,0),N.castShadow=!0,this.parts.torso.add(N);const W=new lt(.4,.18,.24),Y=new L(W,this.materials.jacket);Y.position.set(0,-.11,0),this.parts.torso.add(Y);const j=new lt(.43,.14,.25),$=new L(j,this.materials.jacket);$.position.set(0,-.24,0),this.parts.torso.add($),this.parts.jacketPanels=[N,Y,$];const q=new $t(.082,16,12);q.scale(1.15,.9,1.05),[-.23,.23].forEach(K=>{const nt=new L(q,this.materials.jacket);nt.position.set(K,.22,0),nt.castShadow=!0,this.parts.torso.add(nt)});const it=new yt(.076,.082,.038,16,1,!0),rt=new L(it,this.materials.shirt);rt.position.set(0,.24,0),this.parts.torso.add(rt);const T=new lt(.072,.044,.016);this.parts.collarWings=[-.056,.056].map((K,nt)=>{const ot=new L(T,this.materials.shirt);return ot.position.set(K,.22,.138),ot.rotation.z=nt===0?-.28:.28,ot.rotation.y=nt===0?.12:-.12,this.parts.torso.add(ot),ot});const U=new lt(.082,.28,.022);this.parts.lapels=[-.098,.098].map(K=>{const nt=new L(U,this.materials.lapel);return nt.position.set(K,.09,.144),nt.rotation.z=K>0?-.18:.18,nt.rotation.y=K>0?-.06:.06,this.parts.torso.add(nt),nt});const Z=new yt(.016,.016,.008,10);Z.rotateX(Math.PI/2),this.parts.jacketButtons=[-.04,-.14].map(K=>{const nt=new L(Z,this.materials.button);return nt.position.set(.06,K,.146),this.parts.torso.add(nt),nt});const ht=new yt(.038,.026,.045,6);ht.scale(1,1,.7);const _t=new L(ht,this.materials.tie);_t.position.set(0,.2,.144),this.parts.torso.add(_t);const Lt=new lt(.054,.28,.014);this.parts.tie=new L(Lt,this.materials.tie),this.parts.tie.position.set(0,.04,.142),this.parts.torso.add(this.parts.tie);const Ut=new ds(.027,.042,4);Ut.rotateZ(Math.PI);const At=new L(Ut,this.materials.tie);At.position.set(0,-.12,.142),this.parts.torso.add(At);const qt=new lt(.044,.008,.012);this.parts.tieBar=new L(qt,this.materials.tieBar),this.parts.tieBar.position.set(0,.03,.152),this.parts.torso.add(this.parts.tieBar);const G=new lt(.062,.014,.014),ce=new L(G,this.materials.jacket);ce.position.set(-.13,.135,.142),this.parts.torso.add(ce);const wt=new lt(.052,.014,.008);this.parts.pocketSquare=new L(wt,this.materials.pocketSquare),this.parts.pocketSquare.position.set(-.13,.146,.145),this.parts.torso.add(this.parts.pocketSquare);const It=new yt(.011,.011,.006,10);It.rotateX(Math.PI/2),this.parts.lapelPin=new L(It,this.materials.lapelPin),this.parts.lapelPin.position.set(-.125,.185,.158),this.parts.torso.add(this.parts.lapelPin);const at=new lt(.406,.042,.246);this.parts.belt=new L(at,this.materials.belt),this.parts.belt.position.set(0,-.19,0),this.parts.torso.add(this.parts.belt);const St=new lt(.062,.05,.016);this.parts.buckle=new L(St,this.materials.buckle),this.parts.buckle.position.set(0,-.19,.135),this.parts.torso.add(this.parts.buckle),this.root.add(this.parts.torso);const xt=K=>{const nt=new Ft;nt.position.set(K?-.24:.24,1.18,0);const ot=new yt(.068,.058,.24,14),ut=new L(ot,this.materials.jacket);ut.position.set(0,-.12,0),ut.castShadow=!0,nt.add(ut);const bt=new yt(.058,.05,.22,14),Tt=new L(bt,this.materials.jacket);Tt.position.set(0,-.33,0),Tt.castShadow=!0,nt.add(Tt);const tt=new yt(.053,.048,.038,14),jt=new L(tt,this.materials.shirt);jt.position.set(0,-.45,0),nt.add(jt);const kt=new yt(.007,.007,.008,8);kt.rotateZ(Math.PI/2);const Rt=new L(kt,this.materials.cufflink);Rt.position.set(K?-.052:.052,-.45,0),nt.add(Rt);const vt=new Ft;vt.position.set(0,-.51,0);const gt=new lt(.042,.056,.024),Dt=new L(gt,this.materials.skin);Dt.castShadow=!0,vt.add(Dt);const Kt=new lt(.038,.046,.018),Zt=new L(Kt,this.materials.skin);Zt.position.set(0,-.042,.002),vt.add(Zt);const Gt=new yt(.01,.008,.036,8);Gt.rotateZ(K?.45:-.45);const ct=new L(Gt,this.materials.skin);return ct.position.set(K?.024:-.024,-.012,.012),vt.add(ct),nt.add(vt),{armGroup:nt,upperSleeve:ut,foreSleeve:Tt,cuff:jt}},M=xt(!0);this.parts.leftArm=M.armGroup,this.parts.leftUpperSleeve=M.upperSleeve,this.parts.leftForeSleeve=M.foreSleeve,this.parts.leftCuff=M.cuff,this.root.add(this.parts.leftArm);const x=xt(!1);this.parts.rightArm=x.armGroup,this.parts.rightUpperSleeve=x.upperSleeve,this.parts.rightForeSleeve=x.foreSleeve,this.parts.rightCuff=x.cuff,this.root.add(this.parts.rightArm),this._buildWatch();const F=K=>{const nt=new Ft;nt.position.set(K?-.115:.115,.72,0);const ot=new yt(.086,.076,.36,14),ut=new L(ot,this.materials.pants);ut.position.set(0,-.18,0),ut.castShadow=!0,nt.add(ut);const bt=new yt(.076,.065,.34,14),Tt=new L(bt,this.materials.pants);Tt.position.set(0,-.5,0),Tt.castShadow=!0,nt.add(Tt);const tt=new Ft;tt.position.set(0,-.68,.03);const jt=new lt(.122,.018,.244),kt=new L(jt,this.materials.shoeSole);kt.position.set(0,.009,0),tt.add(kt);const Rt=new lt(.114,.024,.074),vt=new L(Rt,this.materials.shoeSole);vt.position.set(0,.024,-.078),tt.add(vt);const gt=new lt(.116,.068,.22),Dt=new L(gt,this.materials.shoes);Dt.position.set(0,.046,-.006),Dt.castShadow=!0,tt.add(Dt);const Kt=new lt(.118,.048,.078),Zt=new L(Kt,this.materials.shoes);return Zt.position.set(0,.036,.082),tt.add(Zt),nt.add(tt),{legGroup:nt,thigh:ut,shin:Tt,shoeGroup:tt}},st=F(!0);this.parts.leftLeg=st.legGroup,this.parts.leftThigh=st.thigh,this.parts.leftShin=st.shin,this.root.add(this.parts.leftLeg);const et=F(!1);this.parts.rightLeg=et.legGroup,this.parts.rightThigh=et.thigh,this.parts.rightShin=et.shin,this.root.add(this.parts.rightLeg),this.setAttire(this.customization.attireStyle)}_buildHairStyles(){const t=new Ft;t.name="HairRoot",this.parts.headGroup.add(t);const e=new $t(.162,14,12);e.scale(.95,.72,1);const i=new L(e,this.materials.hair);i.position.set(0,.07,-.015),t.add(i);const n=new $t(.158,14,12);n.scale(.92,.78,.98);const r=new L(n,this.materials.hair);r.position.set(0,.08,-.01),r.visible=!1,t.add(r);const a=new Ft;a.visible=!1;const o=new $t(.165,14,12);o.scale(.96,.76,1.02);const l=new L(o,this.materials.hair);l.position.set(0,.07,-.01),a.add(l);const c=new yt(.024,.035,.16,8);[-.13,.13].forEach(_=>{const p=new L(c,this.materials.hair);p.position.set(_,-.01,.02),a.add(p)}),t.add(a);const h=new Ft;h.visible=!1;const d=new $t(.16,14,12);d.scale(.94,.72,.98);const f=new L(d,this.materials.hair);f.position.set(0,.07,-.015),h.add(f);const m=new $t(.065,10,8),g=new L(m,this.materials.hair);g.position.set(0,.06,-.16),h.add(g),t.add(h),this.parts.hairStyles={executive:i,taper:r,bob:a,bun:h}}_buildGlasses(){const t=new Ft;t.name="GlassesGroup",t.position.set(0,.005,.14);const e=new Ft;e.name="Glasses_Rectangular";const i=new lt(.046,.03,.008),n=new L(i,this.materials.glasses);n.position.set(-.052,0,0),e.add(n);const r=new L(i,this.materials.glasses);r.position.set(.052,0,0),e.add(r);const a=new lt(.024,.006,.006),o=new L(a,this.materials.glasses);o.position.set(0,.005,0),e.add(o);const l=new lt(.006,.006,.12),c=new L(l,this.materials.glasses);c.position.set(-.076,.005,-.06),e.add(c);const h=new L(l,this.materials.glasses);h.position.set(.076,.005,-.06),e.add(h),t.add(e);const d=new Ft;d.name="Glasses_Round",d.visible=!1;const f=new us(.02,.004,8,16),m=new L(f,this.materials.glasses);m.position.set(-.052,0,0),d.add(m);const g=new L(f,this.materials.glasses);g.position.set(.052,0,0),d.add(g);const _=new L(a,this.materials.glasses);_.position.set(0,.005,0),d.add(_);const p=new L(l,this.materials.glasses);p.position.set(-.074,.005,-.06),d.add(p);const u=new L(l,this.materials.glasses);u.position.set(.074,.005,-.06),d.add(u),t.add(d),t.visible=!1,this.parts.glassesGroup=t,this.parts.glassesRect=e,this.parts.glassesRound=d,this.parts.headGroup.add(t)}_buildWatch(){const t=new Ft;t.name="WatchGroup",t.position.set(0,-.16,0);const e=new yt(.057,.057,.035,12),i=new L(e,this.materials.watchBand);t.add(i);const n=new yt(.022,.022,.012,12);n.rotateX(Math.PI/2);const r=new L(n,this.materials.watchFace);r.position.set(0,0,.058),t.add(r),this.parts.watchGroup=t,this.parts.leftArm.add(t)}setAttire(t){this.customization.attireStyle=t,t==="formal"?(this.materials.shirt.color.set(this.customization.shirtColor||"#f8fafc"),this.materials.jacket.color.set(this.customization.jacketColor||"#172b46"),this.materials.lapel&&this.materials.lapel.color.set(this.customization.jacketColor||"#172b46"),this.materials.pants.color.set(this.customization.pantsColor||"#1e293b"),this.materials.tie.color.set(this.customization.tieColor||"#1e3a5f"),this.parts.tie&&(this.parts.tie.visible=this.customization.hasTie!==!1),this.parts.jacketPanels&&this.parts.jacketPanels.forEach(e=>{e.visible=!0}),this.parts.lapels&&this.parts.lapels.forEach(e=>{e.visible=!0}),this.parts.jacketButtons&&this.parts.jacketButtons.forEach(e=>{e.visible=!0}),this.parts.leftUpperSleeve&&(this.parts.leftUpperSleeve.material=this.materials.jacket),this.parts.leftForeSleeve&&(this.parts.leftForeSleeve.material=this.materials.jacket),this.parts.rightUpperSleeve&&(this.parts.rightUpperSleeve.material=this.materials.jacket),this.parts.rightForeSleeve&&(this.parts.rightForeSleeve.material=this.materials.jacket),this.parts.leftCuff&&(this.parts.leftCuff.visible=!0),this.parts.rightCuff&&(this.parts.rightCuff.visible=!0),this.parts.belt&&(this.parts.belt.visible=!0),this.parts.buckle&&(this.parts.buckle.visible=!0),this.parts.pocketSquare&&(this.parts.pocketSquare.visible=!0),this.parts.tieBar&&(this.parts.tieBar.visible=this.customization.hasTie!==!1),this.parts.lapelPin&&(this.parts.lapelPin.visible=!0)):t==="smart_casual"?(this.materials.shirt.color.set(this.customization.shirtColor||"#0284c7"),this.materials.pants.color.set(this.customization.pantsColor||"#d4a373"),this.parts.tie&&(this.parts.tie.visible=!1),this.parts.jacketPanels&&this.parts.jacketPanels.forEach(e=>{e.visible=!1}),this.parts.lapels&&this.parts.lapels.forEach(e=>{e.visible=!1}),this.parts.jacketButtons&&this.parts.jacketButtons.forEach(e=>{e.visible=!1}),this.parts.leftUpperSleeve&&(this.parts.leftUpperSleeve.material=this.materials.shirt),this.parts.leftForeSleeve&&(this.parts.leftForeSleeve.material=this.materials.shirt),this.parts.rightUpperSleeve&&(this.parts.rightUpperSleeve.material=this.materials.shirt),this.parts.rightForeSleeve&&(this.parts.rightForeSleeve.material=this.materials.shirt),this.parts.leftCuff&&(this.parts.leftCuff.visible=!1),this.parts.rightCuff&&(this.parts.rightCuff.visible=!1),this.parts.belt&&(this.parts.belt.visible=!0),this.parts.buckle&&(this.parts.buckle.visible=!0),this.parts.pocketSquare&&(this.parts.pocketSquare.visible=!1),this.parts.tieBar&&(this.parts.tieBar.visible=!1),this.parts.lapelPin&&(this.parts.lapelPin.visible=!1)):t==="casual"&&(this.materials.shirt.color.set(this.customization.shirtColor||"#334155"),this.materials.pants.color.set(this.customization.pantsColor||"#2563eb"),this.parts.tie&&(this.parts.tie.visible=!1),this.parts.jacketPanels&&this.parts.jacketPanels.forEach(e=>{e.visible=!1}),this.parts.lapels&&this.parts.lapels.forEach(e=>{e.visible=!1}),this.parts.jacketButtons&&this.parts.jacketButtons.forEach(e=>{e.visible=!1}),this.parts.leftUpperSleeve&&(this.parts.leftUpperSleeve.material=this.materials.shirt),this.parts.leftForeSleeve&&(this.parts.leftForeSleeve.material=this.materials.shirt),this.parts.rightUpperSleeve&&(this.parts.rightUpperSleeve.material=this.materials.shirt),this.parts.rightForeSleeve&&(this.parts.rightForeSleeve.material=this.materials.shirt),this.parts.leftCuff&&(this.parts.leftCuff.visible=!1),this.parts.rightCuff&&(this.parts.rightCuff.visible=!1),this.parts.belt&&(this.parts.belt.visible=!1),this.parts.buckle&&(this.parts.buckle.visible=!1),this.parts.pocketSquare&&(this.parts.pocketSquare.visible=!1),this.parts.tieBar&&(this.parts.tieBar.visible=!1),this.parts.lapelPin&&(this.parts.lapelPin.visible=!1))}setSkinTone(t){this.customization.skinTone=t,this.materials.skin.color.set(t)}setHairColor(t){this.customization.hairColor=t,this.materials.hair.color.set(t)}setHairStyle(t){this.customization.hairStyle=t,this.parts.hairStyles&&Object.keys(this.parts.hairStyles).forEach(e=>{this.parts.hairStyles[e].visible=e===t})}setJacketColor(t){this.customization.jacketColor=t,this.materials.jacket.color.set(t),this.materials.lapel&&this.materials.lapel.color.set(t)}setShirtColor(t){this.customization.shirtColor=t,this.materials.shirt.color.set(t)}setPantsColor(t){this.customization.pantsColor=t,this.materials.pants.color.set(t)}setTieColor(t){this.customization.tieColor=t,this.materials.tie.color.set(t)}setTieVisibility(t){this.customization.hasTie=t,this.parts.tie&&(this.parts.tie.visible=t&&this.customization.attireStyle==="formal"),this.parts.tieBar&&(this.parts.tieBar.visible=t&&this.customization.attireStyle==="formal")}setShoesColor(t){this.customization.shoesColor=t,this.materials.shoes.color.set(t),this.materials.belt&&this.materials.belt.color.set(t)}setGlasses(t,e="#0f172a"){this.customization.glasses=t,this.customization.glassesColor=e,this.parts.glassesGroup&&(t==="none"?this.parts.glassesGroup.visible=!1:t==="rectangular"?(this.parts.glassesGroup.visible=!0,this.parts.glassesRect.visible=!0,this.parts.glassesRound.visible=!1,this.materials.glasses.color.set(e),this.materials.glasses.metalness=.5):t==="round"?(this.parts.glassesGroup.visible=!0,this.parts.glassesRect.visible=!1,this.parts.glassesRound.visible=!0,this.materials.glasses.color.set(e),this.materials.glasses.metalness=.7):t==="gold_rim"&&(this.parts.glassesGroup.visible=!0,this.parts.glassesRect.visible=!1,this.parts.glassesRound.visible=!0,this.materials.glasses.color.setHex(14251782),this.materials.glasses.metalness=.95,this.materials.glasses.roughness=.15))}setWatch(t){this.customization.watch=t,this.parts.watchGroup&&(t==="none"?this.parts.watchGroup.visible=!1:t==="steel"?(this.parts.watchGroup.visible=!0,this.materials.watchBand.color.setHex(9741240),this.materials.watchBand.metalness=.9,this.materials.watchBand.roughness=.2):t==="gold"?(this.parts.watchGroup.visible=!0,this.materials.watchBand.color.setHex(15381256),this.materials.watchBand.metalness=.95,this.materials.watchBand.roughness=.15):t==="leather"&&(this.parts.watchGroup.visible=!0,this.materials.watchBand.color.setHex(7877903),this.materials.watchBand.metalness=.1,this.materials.watchBand.roughness=.7))}setGender(t){this.customization.gender=t,t==="female"?(this.parts.torso&&this.parts.torso.scale.set(.92,1,.92),this.parts.leftArm&&(this.parts.leftArm.position.x=-.22),this.parts.rightArm&&(this.parts.rightArm.position.x=.22),this.customization.hairStyle==="executive"&&this.setHairStyle("bob")):(this.parts.torso&&this.parts.torso.scale.set(1,1,1),this.parts.leftArm&&(this.parts.leftArm.position.x=-.24),this.parts.rightArm&&(this.parts.rightArm.position.x=.24),this.customization.hairStyle==="bob"&&this.setHairStyle("executive"))}applyPreset(t){const i={investment_banking:{attireStyle:"formal",jacketColor:"#172b46",shirtColor:"#ffffff",pantsColor:"#172b46",tieColor:"#881337",hasTie:!0,shoesColor:"#09090b",watch:"steel",glasses:"none",score:100,label:"Investment Banking & BFSI Tier-1",ruleSummary:"Full navy two-piece suit, crisp white broadcloth, power burgundy tie, cap-toe black oxfords."},tech_mnc:{attireStyle:"formal",jacketColor:"#334155",shirtColor:"#e0f2fe",pantsColor:"#1e293b",tieColor:"#1e3a5f",hasTie:!0,shoesColor:"#09090b",watch:"steel",glasses:"rectangular",score:98,label:"Big Tech MNC Technical Mock",ruleSummary:"Slate charcoal tailored jacket, French sky blue shirt, sapphire silk tie, titanium executive frames."},startup_smart:{attireStyle:"smart_casual",jacketColor:"#172b46",shirtColor:"#0284c7",pantsColor:"#d4a373",tieColor:"#1e3a5f",hasTie:!1,shoesColor:"#451a03",watch:"leather",glasses:"round",score:92,label:"Product Startup Culture Round",ruleSummary:"Cerulean knit polo, tailored beige chinos, antique walnut derby leather shoes, smart watch band."},campus_day1:{attireStyle:"formal",jacketColor:"#18181b",shirtColor:"#ffffff",pantsColor:"#18181b",tieColor:"#1e3a8a",hasTie:!0,shoesColor:"#09090b",watch:"steel",glasses:"none",score:96,label:"Day-1 Campus Placement Drive",ruleSummary:"Classic obsidian formal suit, high-contrast white shirt, corporate royal blue tie, mirror-shined shoes."}}[t];return i?(this.setAttire(i.attireStyle),this.setJacketColor(i.jacketColor),this.setShirtColor(i.shirtColor),this.setPantsColor(i.pantsColor),this.setTieColor(i.tieColor),this.setTieVisibility(i.hasTie),this.setShoesColor(i.shoesColor),this.setWatch(i.watch),this.setGlasses(i.glasses),i):null}rotateTurntable(t){this.root.rotation.y+=t}resetTurntable(){this.root.rotation.y=0}getAttireAudit(){const t=this.customization.attireStyle==="formal",e=this.customization.hasTie&&t,i=["#172b46","#18181b","#334155","#1e293b"].includes(this.customization.jacketColor),n=["#ffffff","#f8fafc","#e0f2fe","#f3e8ff","#fef3c7"].includes(this.customization.shirtColor);let r=t?90:80;t&&e&&(r+=6),i&&n&&(r+=4);const a=[{name:"Contrast Ratio",passed:i&&n,desc:"High-contrast dark jacket & white/light shirt ensures optimal corporate visibility."},{name:"Tie & Collar Alignment",passed:e||!t,desc:e?"Silk tie anchored cleanly at collar tip.":"Open collar smart casual styling."},{name:"Leather Tone Harmony",passed:!0,desc:"Belt and footwear leather finishes harmonized."},{name:"The Sleeve Ratio Rule",passed:!0,desc:'1/4" shirt cuff exposed beyond blazer sleeve.'}];return{score:Math.min(r,100),readiness:r>=95?"OPTIMAL CORPORATE READY":r>=85?"WORKPLACE ACCEPTABLE":"CASUAL STYLING",checks:a}}setCameraMode(t){if(this.cameraMode=t,this.root.visible=t!=="first_person",t==="wardrobe")this.camera.position.set(0,1.35,2.7),this.camera.lookAt(0,1.05,0);else if(t==="interview")this.camera.position.set(.65,1.42,.2),this.camera.lookAt(0,1.42,-2.65);else if(t==="third_person"){const e=this.thirdPersonOffset.clone().applyAxisAngle(new D(0,1,0),this.root.rotation.y);this.camera.position.copy(this.root.position).add(e),this.camera.lookAt(this.root.position.clone().add(new D(0,1.35,0)))}}toggleCameraMode(){return this.cameraMode==="interview"?(this.cameraMode="first_person",this.root.visible=!1):this.cameraMode==="first_person"?(this.cameraMode="third_person",this.root.visible=!0):this.cameraMode==="third_person"?(this.cameraMode="wardrobe",this.root.visible=!0):(this.cameraMode="interview",this.root.visible=!0),this.cameraMode}_setupInputListeners(){this._keys={},this.inputVector=new Yt,window.addEventListener("keydown",e=>{this._keys[e.code]=!0}),window.addEventListener("keyup",e=>{this._keys[e.code]=!1});const t=(e,i,n)=>{const r=document.getElementById(e);if(!r)return;const a=()=>this.inputVector.set(i,n),o=()=>this.inputVector.set(0,0);r.addEventListener("touchstart",l=>{l.preventDefault(),a()}),r.addEventListener("touchend",l=>{l.preventDefault(),o()}),r.addEventListener("mousedown",a),r.addEventListener("mouseup",o),r.addEventListener("mouseleave",o)};t("dpad-up",0,-1),t("dpad-down",0,1),t("dpad-left",-1,0),t("dpad-right",1,0)}teleport(t,e,i,n=0){this.root.position.set(t,e,i),this.root.rotation.y=n,this.physics.velocity.set(0,0,0),this.cameraMode==="wardrobe"?(this.root.visible=!0,this.camera.position.set(0,1.35,2.7),this.camera.lookAt(0,1.05,0)):this.cameraMode==="interview"?(this.root.visible=!0,this.camera.position.set(.65,1.42,.2),this.camera.lookAt(0,1.42,-2.65)):this.cameraMode==="first_person"?this.root.visible=!1:this.root.visible=!0}update(t){if(this.cameraMode==="wardrobe"){let a=0;(this._keys.KeyA||this._keys.ArrowLeft)&&(a-=1),(this._keys.KeyD||this._keys.ArrowRight)&&(a+=1),this.inputVector.x!==0&&(a+=this.inputVector.x),a!==0&&(this.root.rotation.y+=a*t*2.5),this._updateCamera(t);return}let e=0,i=0;(this._keys.KeyW||this._keys.ArrowUp)&&(i-=1),(this._keys.KeyS||this._keys.ArrowDown)&&(i+=1),(this._keys.KeyA||this._keys.ArrowLeft)&&(e-=1),(this._keys.KeyD||this._keys.ArrowRight)&&(e+=1),this.inputVector.lengthSq()>0&&(e=this.inputVector.x,i=this.inputVector.y);const n=new Yt(e,i);n.lengthSq()>0&&(n.normalize(),this.cameraMode==="interview"&&(this.cameraMode="third_person"));const r=this.physics.updateKinematics(this.root.position,n,t);if(this.isWalking=r.isMoving,this.isWalking&&(Math.abs(this.physics.velocity.x)>.05||Math.abs(this.physics.velocity.z)>.05)){const a=Math.atan2(this.physics.velocity.x,this.physics.velocity.z);this.root.rotation.y=ql.lerp(this.root.rotation.y,a,t*this.rotationSpeed),this.animTime+=t*10*(r.speed/3);const o=Math.sin(this.animTime)*.42;this.parts.leftLeg.rotation.x=o,this.parts.rightLeg.rotation.x=-o,this.parts.leftArm.rotation.x=-o*.6,this.parts.rightArm.rotation.x=o*.6}else{this.parts.leftLeg.rotation.x*=.85,this.parts.rightLeg.rotation.x*=.85,this.parts.leftArm.rotation.x*=.85,this.parts.rightArm.rotation.x*=.85,this.animTime+=t;const a=Math.sin(this.animTime*2.2)*.0035;this.parts.torso&&(this.parts.torso.position.y=.96+a),this.parts.headGroup&&(this.parts.headGroup.position.y=1.5+a*.7)}this._updateCamera(t)}setWardrobeFocus(t){this.wardrobeFocus=t}_updateCamera(t){if(this.cameraMode==="wardrobe"){let e=new D(0,1.35,2.7),i=new D(0,1.05,0);this.wardrobeFocus==="face"?(e.set(0,1.54,.95),i.set(0,1.52,0)):this.wardrobeFocus==="torso"?(e.set(0,1.15,1.45),i.set(0,1.02,0)):this.wardrobeFocus==="shoes"&&(e.set(0,.42,1.35),i.set(0,.16,0)),this.camera.position.lerp(e,t*6),this.camera.lookAt(i)}else if(this.cameraMode==="interview"){const e=new D(.55,1.45,.15);this.camera.position.lerp(e,t*4);const i=new D(0,1.45,-2.65);this.camera.lookAt(i)}else if(this.cameraMode==="first_person"){const e=this.root.position.clone().add(new D(0,1.55,.05));this.camera.position.copy(e);const i=new D(0,0,-4).applyAxisAngle(new D(0,1,0),this.root.rotation.y);this.camera.lookAt(e.clone().add(i))}else{const e=this.thirdPersonOffset.clone().applyAxisAngle(new D(0,1,0),this.root.rotation.y),i=this.root.position.clone().add(e);this.camera.position.lerp(i,t*5);const n=this.root.position.clone().add(new D(0,1.35,0));this.camera.lookAt(n)}}destroy(){this.scene.remove(this.root)}}const lp=[{id:"INT_001",scene:"interview_room",situation:"The lead interviewer looks up from your resume and asks: 'Tell me about a time you faced a difficult bug in your final-year project.'",choiceA:"I usually ask my batchmates or senior to fix hard bugs for me so I don't waste project time.",choiceB:"I isolate the module with unit tests, reproduce the error in debug mode, and systematically inspect the call stack before patching.",choiceC:"Bugs happen all the time, honestly I just rewrite the whole code block until it works.",scores:{A:3,B:9,C:4},feedbacks:{A:"Shows lack of individual problem-solving ownership.",B:"Demonstrates structured engineering methodology and technical maturity.",C:"Trial-and-error without root cause analysis is seen as inefficient."},tips:{A:"Highlight how you debug independently before asking for guidance.",B:"Maintain this STAR structure (Situation, Task, Action, Result) in your answers.",C:"Explain your systematic debugging steps rather than rewriting blindly."},weak_tag:"technical_communication",next_scenario:"INT_002"},{id:"INT_002",scene:"interview_room",situation:"The interviewer remarks: 'Your academic score in 3rd semester dipped a bit. What happened there?'",choiceA:"The university professors were setting very unfair question papers that semester.",choiceB:"I was balancing a robotics competition and time management slipped, but I rebuilt my study schedule and brought my GPA back to 8.4.",choiceC:"I didn't really like the subjects in that semester, so I didn't study much.",scores:{A:2,B:9,C:3},feedbacks:{A:"Blaming external factors leaves a very poor impression.",B:"Owns the mistake, shows resilience and a verified turnaround.",C:"Suggests low discipline when working on uninteresting assignments."},tips:{A:"Never blame teachers or college; take accountability.",B:"Great job pivoting from a setback to a positive recovery story.",C:"Show willingness to deliver excellence even on tough or dry topics."},weak_tag:"accountability",next_scenario:"INT_003"},{id:"INT_003",scene:"interview_room",situation:"Do you have any questions for us before we wrap up?",choiceA:"No sir, nothing from my side, I just want to know my package and salary.",choiceB:"Could you share what technologies the team is adopting this quarter and what mentorship a fresher receives?",choiceC:"When will I get the offer letter?",scores:{A:2,B:10,C:3},feedbacks:{A:"Focusing solely on compensation at round 1 sounds transactional.",B:"Demonstrates genuine curiosity about team culture and growth.",C:"Presumptuous and skips learning about the actual role."},tips:{A:"Save salary queries for HR round; ask role-specific questions here.",B:"Asking about team roadmap leaves a strong lasting impression.",C:"Inquire about onboarding and tech stack instead."},weak_tag:"professional_curiosity",next_scenario:null}],cp=[{id:"OFF_001",scene:"office_floor",situation:"You notice your pull request has 12 review comments from a senior engineer pointing out naming convention flaws.",choiceA:"Reply 'looks fine to me' and merge the branch anyway.",choiceB:"Acknowledge the feedback, comment on each thread with your fixes, and ask for a 5-minute sync if any point is unclear.",choiceC:"Complain to the team lead that the senior engineer is nitpicking.",scores:{A:1,B:10,C:2},feedbacks:{A:"Merging unapproved code breaks team trust and CI/CD policy.",B:"Professional, constructive, and respects code quality standards.",C:"Creates workplace friction over standard engineering guidelines."},tips:{A:"Never bypass branch protection or peer reviews.",B:"Clear communication in PR comments saves hours of debugging.",C:"Treat code reviews as learning opportunities, not attacks."},weak_tag:"collaboration",next_scenario:"OFF_002"},{id:"OFF_002",scene:"office_floor",situation:"You finish your assigned ticket 2 days ahead of the sprint deadline.",choiceA:"Browse social media quietly until sprint review.",choiceB:"Notify your scrum master, document your work, and offer to pick up a backlog bug or assist a teammate.",choiceC:"Leave office early without telling anyone.",scores:{A:3,B:10,C:1},feedbacks:{A:"Demonstrates low initiative and disengagement.",B:"High initiative, teamwork, and proactive communication.",C:"Serious attendance violation on an internship or job."},tips:{A:"Use extra sprint time to write tests or learn new tooling.",B:"Proactivity is the #1 trait leads look for in junior hires.",C:"Always communicate your status with your manager."},weak_tag:"workplace_initiative",next_scenario:null}],hp=[{id:"WAR_001",scene:"wardrobe",situation:"You are preparing for a virtual technical interview with an enterprise bank.",choiceA:"A wrinkle-free button-down shirt/formal kurta, neutral background, and proper lighting.",choiceB:"A bright hooded sweatshirt with loud graphics.",choiceC:"Formal shirt on top, pajama bottoms, sitting in a dimly lit bedroom with bed visible.",scores:{A:10,B:2,C:5},feedbacks:{A:"Crisp professional appearance and camera framing.",B:"Too casual for a banking/finance enterprise culture.",C:"Messy background and poor lighting distract from your technical answers."},tips:{A:"Solid colors and natural face lighting convey high professionalism.",B:"Research company culture beforehand; banking expects business formal.",C:"Clean your camera background and sit upright in proper attire."},weak_tag:"visual_presence",next_scenario:null}],dp={interview_room:lp,office_floor:cp,wardrobe:hp};class up{constructor(t="/api/checkpoint"){this.apiEndpoint=t,this.scenarios=dp}async evaluateChoice(t){return this.evaluateCheckpoint(t)}async evaluateCheckpoint(t){try{const e=new AbortController,i=setTimeout(()=>e.abort(),2500),n=await fetch(this.apiEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:e.signal});if(clearTimeout(i),n.ok)return await n.json()}catch{}return this._localEvaluate(t)}_localEvaluate(t){const{scene:e,scenario_id:i,player_choice:n}=t,r=this.scenarios[e]||[],a=r.find(d=>d.id===i)||r[0];if(!a)return{feedback:"Response acknowledged.",npc_reaction:"IDLE",tip:"Stay composed and articulate your thoughts clearly.",next_scenario:null,score_delta:0};const o=a.scores[n]??5,l=a.feedbacks[n]??"Neutral response.",c=a.tips[n]??"Focus on clear communication.";let h="IDLE";return o>=7?h="REACT_POSITIVE":o<4&&(h="REACT_NEGATIVE"),{feedback:l,npc_reaction:h,tip:c,next_scenario:a.next_scenario||null,score_delta:o}}getScenario(t,e=null){const i=this.scenarios[t]||[];return e?i.find(n=>n.id===e)||i[0]||null:i[0]||null}}const qe={IDLE:"IDLE",REACT_POSITIVE:"REACT_POSITIVE",REACT_NEGATIVE:"REACT_NEGATIVE"};class gr{constructor(t,e,i={}){this.scene=t,this.camera=e,this.name=i.name||"Vikram Malhotra",this.role=i.role||"Senior Technical Director",this.state=qe.IDLE,this.stateTimer=0,this.root=new Ft,this.root.name=`NPC_${this.name}`,this.scene.add(this.root),this.parts={},this.speechBubbleEl=document.getElementById("npc-speech-bubble"),this.speechTextEl=document.getElementById("npc-speech-text"),this._screenPos=new D,this._buildRealisticNPCMesh()}_buildRealisticNPCMesh(){const t=this.name.toLowerCase().includes("priya")||this.name.toLowerCase().includes("aditi"),e=de.createSuitWoolTexture(t?"#18181b":"#1e3a5f"),i=de.createShirtCottonTexture(t?"#f8fafc":"#ffffff"),n=de.createSilkTieTexture("#991b1b"),r=de.createSkinTexture(t?"#d49b6a":"#c68642"),a=new Q({color:t?13933418:13010498,map:r,roughness:.58,metalness:.04}),o=new Q({color:t?1579035:1981023,map:e,roughness:.52,metalness:.07}),l=new Q({color:t?16317180:16777215,map:i,roughness:.38}),c=new Q({color:10033947,map:n,roughness:.32,metalness:.22}),h=new Q({color:1579035,roughness:.82});this.parts.headGroup=new Ft,this.parts.headGroup.position.set(0,1.48,-.05);const d=new $t(t?.145:.158,20,16);d.scale(.9,1.06,.96),this.parts.head=new L(d,a),this.parts.head.castShadow=!0,this.parts.headGroup.add(this.parts.head);const f=new $t(t?.035:.042,12,10);f.scale(1.1,.85,1);const m=new L(f,a);m.position.set(0,t?-.072:-.078,.12),this.parts.headGroup.add(m);const g=new yt(.008,.013,.042,8),_=new L(g,a);_.position.set(0,.008,.148),_.rotation.x=-.22,this.parts.headGroup.add(_);const p=new $t(.012,10,8);p.scale(1.1,.85,1);const u=new L(p,a);u.position.set(0,-.014,.155),this.parts.headGroup.add(u);const b=new Q({color:t?12737386:11161423,roughness:.44,metalness:.05}),S=new lt(t?.036:.04,.008,.014),w=new L(S,b);w.position.set(0,-.04,.142),this.parts.headGroup.add(w);const R=new yt(.007,.007,t?.03:.034,10);R.rotateZ(Math.PI/2);const A=new L(R,b);A.position.set(0,-.05,.14),this.parts.headGroup.add(A);const C=new $t(.015,12,10);C.scale(1.22,.74,.8);const z=new le({color:16448250}),v=new $t(.01,10,8),E=new le({color:1708556}),k=new $t(.0032,6,6),B=new le({color:16777215}),J=t?.048:.052;[-J,J].forEach(at=>{const St=new L(C,z);St.position.set(at,.015,.136),this.parts.headGroup.add(St);const xt=new L(v,E);xt.position.set(at,.015,.146),this.parts.headGroup.add(xt);const M=new L(k,B);M.position.set(at+.003,.018,.154),this.parts.headGroup.add(M);const x=new lt(.042,.007,.012),F=new L(x,h);F.position.set(at,.038,.143),F.rotation.z=at>0?-.12:.12,this.parts.headGroup.add(F)});const P=new yt(.022,.016,.044,8);P.scale(.4,1,.8),[-.134,.134].forEach(at=>{const St=new L(P,a);St.position.set(at,.005,-.015),this.parts.headGroup.add(St)});const N=new yt(t?.058:.068,t?.068:.078,.13,14),W=new L(N,a);if(W.position.y=-.11,this.parts.headGroup.add(W),t){const at=new $t(.156,18,14);at.scale(.96,.78,1.02);const St=new L(at,h);St.position.set(0,.065,-.01),this.parts.headGroup.add(St);const xt=new yt(.028,.038,.18,8);[-.125,.125].forEach(M=>{const x=new L(xt,h);x.position.set(M,-.015,.01),this.parts.headGroup.add(x)})}else{const at=new $t(.165,18,14);at.scale(.94,.75,1);const St=new L(at,h);St.position.set(0,.07,-.02),this.parts.headGroup.add(St);const xt=new Ft,M=new Q({color:592139,metalness:.9,roughness:.1}),x=new lt(.08,.046,.008),F=new Q({color:3718648,roughness:.1,metalness:.8,transparent:!0,opacity:.45});[-.052,.052].forEach(K=>{const nt=new L(x,F);nt.position.set(K,.02,.142),xt.add(nt)});const st=new lt(.034,.008,.008),et=new L(st,M);et.position.set(0,.024,.143),xt.add(et),this.parts.headGroup.add(xt)}this.root.add(this.parts.headGroup),this.parts.torso=new Ft,this.parts.torso.position.set(0,.92,-.05);const Y=new lt(t?.42:.48,.52,.28),j=new L(Y,o);j.castShadow=!0,this.parts.torso.add(j);const $=new $t(.082,14,12);$.scale(1.15,.9,1.05);const q=t?.22:.25;[-q,q].forEach(at=>{const St=new L($,o);St.position.set(at,.21,0),St.castShadow=!0,this.parts.torso.add(St)});const it=new lt(.18,.32,.02),rt=new L(it,l);if(rt.position.set(0,.08,.141),this.parts.torso.add(rt),t){const at=new Q({color:16096779,metalness:.95,roughness:.15}),St=new yt(.012,.012,.008,12);St.rotateX(Math.PI/2);const xt=new L(St,at);xt.position.set(0,.12,.146),this.parts.torso.add(xt)}else{const at=new lt(.062,.3,.016),St=new L(at,c);St.position.set(0,.05,.148),this.parts.torso.add(St);const xt=new yt(.036,.024,.042,6);xt.scale(1,1,.7);const M=new L(xt,c);M.position.set(0,.18,.15),this.parts.torso.add(M)}const T=new lt(.078,.34,.022);[-.1,.1].forEach(at=>{const St=new L(T,o);St.position.set(at,.08,.146),St.rotation.z=at>0?-.16:.16,this.parts.torso.add(St)}),this.root.add(this.parts.torso);const U=t?.24:.27,Z=new yt(.062,.055,.36,12);this.parts.leftArm=new L(Z,o),this.parts.leftArm.position.set(-U,1.05,.02),this.parts.leftArm.rotation.x=.55,this.parts.leftArm.rotation.z=.08,this.root.add(this.parts.leftArm),this.parts.rightArm=new L(Z,o),this.parts.rightArm.position.set(U,1.05,.02),this.parts.rightArm.rotation.x=.55,this.parts.rightArm.rotation.z=-.08,this.root.add(this.parts.rightArm);const ht=new yt(.052,.046,.32,12),_t=new L(ht,o);_t.position.set(-U*.85,.88,.28),_t.rotation.x=1.35,_t.rotation.y=.22,this.root.add(_t);const Lt=new L(ht,o);Lt.position.set(U*.85,.88,.28),Lt.rotation.x=1.35,Lt.rotation.y=-.22,this.root.add(Lt);const Ut=at=>{const St=new Ft;St.position.set(at?-U*.82:U*.82,.84,.44);const xt=new lt(.075,.038,.09),M=new L(xt,a);St.add(M);const x=new lt(.068,.028,.04),F=new L(x,a);return F.position.set(0,-.004,.055),St.add(F),St},At=Ut(!0);this.root.add(At);const qt=Ut(!1);this.root.add(qt);const G=new lt(.18,.16,.44),ce=new lt(.16,.46,.16),wt=new lt(.14,.09,.24),It=new Q({color:592139,roughness:.3,metalness:.6});[-.14,.14].forEach(at=>{const St=new L(G,o);St.position.set(at,.55,.18),this.root.add(St);const xt=new L(ce,o);xt.position.set(at,.28,.38),this.root.add(xt);const M=new L(wt,It);M.position.set(at,.05,.42),this.root.add(M)})}setPosition(t,e,i,n=0){this.root.position.set(t,e,i),this.root.rotation.y=n}setState(t,e=null){this.state=t,this.stateTimer=0,e&&this.say(e)}say(t,e=5e3){!this.speechBubbleEl||!this.speechTextEl||(this.speechTextEl.textContent=t,this.speechBubbleEl.classList.add("visible"),this._bubbleTimeout&&clearTimeout(this._bubbleTimeout),this._bubbleTimeout=setTimeout(()=>{this.speechBubbleEl.classList.remove("visible")},e))}react(t,e){t==="REACT_POSITIVE"?this.setState(qe.REACT_POSITIVE,e||"Strong response."):t==="REACT_NEGATIVE"?this.setState(qe.REACT_NEGATIVE,e||"Needs improvement."):this.setState(qe.IDLE,e||"Understood.")}reactToScore(t,e){t>=7?this.setState(qe.REACT_POSITIVE,`Strong answer. ${e}`):t<4?this.setState(qe.REACT_NEGATIVE,`Note this point: ${e}`):this.setState(qe.IDLE,e)}update(t){if(this.stateTimer+=t,this.state===qe.REACT_POSITIVE){const e=Math.sin(this.stateTimer*5.5)*.12;this.parts.headGroup.rotation.x=e,this.parts.headGroup.rotation.y=0,this.parts.torso.rotation.x=-.04,this.stateTimer>3&&this.setState(qe.IDLE)}else if(this.state===qe.REACT_NEGATIVE){const e=Math.sin(this.stateTimer*4.5)*.16;this.parts.headGroup.rotation.y=e,this.parts.headGroup.rotation.x=.05,this.parts.torso.rotation.x=.03,this.stateTimer>3&&this.setState(qe.IDLE)}else{const e=Math.sin(this.stateTimer*1.6)*.02;this.parts.headGroup.rotation.x=e,this.parts.headGroup.rotation.y=Math.sin(this.stateTimer*.4)*.03,this.parts.torso.rotation.x=0}if(this.speechBubbleEl&&this.speechBubbleEl.classList.contains("visible"))if(this.parts.headGroup.getWorldPosition(this._screenPos),this._screenPos.y+=.44,this._screenPos.project(this.camera),this._screenPos.z>1)this.speechBubbleEl.style.display="none";else{this.speechBubbleEl.style.display="block";const e=(this._screenPos.x*.5+.5)*window.innerWidth,i=(-(this._screenPos.y*.5)+.5)*window.innerHeight;this.speechBubbleEl.style.left=`${Math.round(e)}px`,this.speechBubbleEl.style.top=`${Math.round(i)}px`}}destroy(){this.speechBubbleEl&&this.speechBubbleEl.classList.remove("visible"),this.scene.remove(this.root)}}class fp{constructor(t,e,i){this.scene=t,this.camera=e,this.physics=i,this.group=new Ft,this.group.name="Scene_InterviewRoom",this.scene.add(this.group),this.npc=null,this.lights=[],this.disposables=[],this.ceilingLightsOn=!0,this.deskLampOn=!0,this.sunlightOn=!0,this.nightModeOn=!1,this.clickableObjects=[],this.originalBg=this.scene.background,this.originalFog=this.scene.fog,this.scene.background=new Et(11000060),this.scene.fog=new hs(13230066,.002),this._buildEnclosedArchitecture(),this._buildFurniture(),this._buildExecutiveDecorations(),this._buildWallSconces(),this._buildArchitecturalDeskLamp(),this._buildPhysicalLightSwitch(),this._setupCinematicLighting(),this._spawnNPC()}_buildEnclosedArchitecture(){const n=new Qt(10,10),r=de.createWoodFloorTexture(),a=new Q({map:r,roughness:.35,metalness:.1}),o=new L(n,a);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.group.add(o),this.disposables.push(n,r,a),this.physics.setBoundaries(-10/2+.4,10/2-.4,-10/2+.4,10/2-.4);const l=new Qt(10,10),c=new Q({color:16317180,roughness:.95}),h=new L(l,c);h.rotation.x=Math.PI/2,h.position.y=4.2,this.group.add(h),this.disposables.push(l,c),this.ceilingDiffusers=[],this.ceilingDiffuserMat=new Q({color:16777215,emissive:16775149,emissiveIntensity:1.25,roughness:.2}),this.disposables.push(this.ceilingDiffuserMat);const d=new Q({color:3359061,metalness:.8,roughness:.2});this.disposables.push(d);const f=[[-2.2,4.2-.02,-2],[2.2,4.2-.02,-2],[-2.2,4.2-.02,1.8],[2.2,4.2-.02,1.8]],m=new Qt(1.5,.75),g=new lt(1.65,.04,.9);this.disposables.push(m,g),f.forEach(([q,it,rt])=>{const T=new L(g,d);T.position.set(q,it+.015,rt),this.group.add(T);const U=new L(m,this.ceilingDiffuserMat);U.rotation.x=Math.PI/2,U.position.set(q,it,rt),this.group.add(U),this.ceilingDiffusers.push(U)});const _=new Q({color:15591934,roughness:.85}),p=new Q({color:1976635,roughness:.6});this.disposables.push(_,p);const u=new Qt(10,4.2),b=new L(u,p);b.position.set(0,4.2/2,-10/2),b.receiveShadow=!0,this.group.add(b),this.disposables.push(u);const S=new lt(.06,4.2,.04),w=new Q({color:9584654,roughness:.5});for(let q=-4.5;q<=-2.5;q+=.22){const it=new L(S,w);it.position.set(q,4.2/2,-10/2+.02),this.group.add(it)}this.disposables.push(S,w);const R=new L(u,_);R.rotation.y=Math.PI,R.position.set(0,4.2/2,10/2),this.group.add(R);const A=new Qt(10,4.2),C=new L(A,_);C.rotation.y=Math.PI/2,C.position.set(-10/2,4.2/2,0),this.group.add(C);const z=new L(A,_);z.rotation.y=-Math.PI/2,z.position.set(10/2,4.2/2,0),this.group.add(z),this.disposables.push(A);const v=new lt(.12,3,6.4),E=new Q({color:988970,metalness:.9,roughness:.2}),k=new L(v,E);k.position.set(10/2-.05,2.1,0),this.group.add(k);const B=new Qt(6.2,2.8),J=de.createWindowViewTexture();this.winMat=new le({map:J});const P=new L(B,this.winMat);P.rotation.y=-Math.PI/2,P.position.set(10/2-.08,2.1,0),this.group.add(P),this.disposables.push(v,E,B,J,this.winMat);const N=new lt(.04,.02,6.2),W=new Q({color:16777215,roughness:.4});for(let q=.9;q<=3.4;q+=.28){const it=new L(N,W);it.position.set(10/2-.12,q,0),it.rotation.z=.2,this.group.add(it)}this.disposables.push(N,W);const Y=new lt(10,.14,.04),j=new Q({color:1976635,roughness:.5}),$=new L(Y,j);$.position.set(0,.07,-10/2+.02),this.group.add($),this.disposables.push(Y,j)}_buildWallSconces(){this.sconceGlowMat=new Q({color:16777215,emissive:16639626,emissiveIntensity:1.4,roughness:.1}),this.disposables.push(this.sconceGlowMat);const t=new Q({color:592139,metalness:.9,roughness:.25});this.disposables.push(t);const e=[[-3.4,2.35,-4.94],[3.4,2.35,-4.94]],i=new yt(.05,.05,.32,16),n=new yt(.045,.045,.02,16);this.disposables.push(i,n),this.sconceLights=[],e.forEach(([r,a,o])=>{const l=new Ft;l.position.set(r,a,o);const c=new L(i,t);l.add(c);const h=new L(n,this.sconceGlowMat);h.position.y=.16,l.add(h);const d=new L(n,this.sconceGlowMat);d.position.y=-.16,l.add(d);const f=new rn(16639626,.65,3.5,2);f.position.set(0,0,.08),l.add(f),this.sconceLights.push(f),this.group.add(l)})}_buildArchitecturalDeskLamp(){this.deskLampGroup=new Ft,this.deskLampGroup.name="Interactive_DeskLamp",this.deskLampGroup.position.set(.95,.86,-1.65);const t=new Q({color:14251782,metalness:.85,roughness:.2}),e=new Q({color:1579035,metalness:.9,roughness:.25});this.disposables.push(t,e);const i=new yt(.12,.13,.025,24),n=new L(i,e);n.castShadow=!0,n.receiveShadow=!0,this.deskLampGroup.add(n),this.disposables.push(i);const r=new yt(.022,.022,.016,16);this.lampSwitchBtnMat=new Q({color:1096065,emissive:366185,emissiveIntensity:.8,metalness:.5,roughness:.2}),this.deskLampSwitchBtn=new L(r,this.lampSwitchBtnMat),this.deskLampSwitchBtn.position.set(0,.02,.06),this.deskLampGroup.add(this.deskLampSwitchBtn),this.disposables.push(r,this.lampSwitchBtnMat);const a=new yt(.01,.01,.38,12),o=new L(a,t);o.position.set(-.06,.19,-.04),o.rotation.z=.28,o.castShadow=!0,this.deskLampGroup.add(o);const l=new $t(.024,12,12),c=new L(l,t);c.position.set(-.11,.37,-.04),this.deskLampGroup.add(c);const h=new yt(.01,.01,.32,12),d=new L(h,t);d.position.set(-.21,.44,.02),d.rotation.z=-.55,d.castShadow=!0,this.deskLampGroup.add(d),this.disposables.push(a,l,h);const f=new ds(.12,.16,24,1,!0);this.deskLampShade=new L(f,e),this.deskLampShade.position.set(-.31,.52,.08),this.deskLampShade.rotation.z=Math.PI*.72,this.deskLampShade.rotation.y=-.3,this.deskLampShade.castShadow=!0,this.deskLampGroup.add(this.deskLampShade),this.disposables.push(f);const m=new $t(.042,16,16);this.deskLampBulbMat=new Q({color:16777215,emissive:16707722,emissiveIntensity:1.8,roughness:.1}),this.deskLampBulb=new L(m,this.deskLampBulbMat),this.deskLampBulb.position.set(-.32,.49,.09),this.deskLampGroup.add(this.deskLampBulb),this.disposables.push(m,this.deskLampBulbMat),this.deskLampSpot=new Ui(16707722,1.8,4.8,Math.PI/4,.65,2),this.deskLampSpot.position.set(.63,1.35,-1.56),this.deskLampSpot.target.position.set(-.15,.85,-1.55),this.deskLampSpot.castShadow=!0,this.deskLampSpot.shadow.mapSize.width=1024,this.deskLampSpot.shadow.mapSize.height=1024,this.deskLampSpot.shadow.bias=-1e-4,this.deskLampSpot.shadow.normalBias=.02,this.group.add(this.deskLampSpot),this.group.add(this.deskLampSpot.target),this.lights.push(this.deskLampSpot),this.group.add(this.deskLampGroup);const g=()=>{this.toggleDeskLamp()};this.clickableObjects.push({mesh:this.deskLampSwitchBtn,name:"Desk Lamp Button",hint:"Click to Toggle Desk Lamp [J]",onClick:g}),this.clickableObjects.push({mesh:this.deskLampShade,name:"Desk Lamp",hint:"Click to Toggle Desk Lamp [J]",onClick:g})}_buildPhysicalLightSwitch(){this.wallSwitchGroup=new Ft,this.wallSwitchGroup.name="Interactive_WallSwitch",this.wallSwitchGroup.position.set(-4.95,1.5,-.3);const t=new Q({color:15857145,metalness:.1,roughness:.4}),e=new Q({color:988970,roughness:.3});this.disposables.push(t,e);const i=new lt(.025,.36,.26);this.wallSwitchPlate=new L(i,t),this.wallSwitchGroup.add(this.wallSwitchPlate),this.disposables.push(i);const n=new yt(.007,.007,.006,10),r=new Q({color:9741240,metalness:.9,roughness:.2});[-.14,.14].forEach(p=>{const u=new L(n,r);u.rotation.z=Math.PI/2,u.position.set(.013,p,0),this.wallSwitchGroup.add(u)}),this.disposables.push(n,r);const a=new lt(.024,.11,.065);this.rockerCeiling=new L(a,e),this.rockerCeiling.position.set(.014,.04,-.05),this.rockerCeiling.rotation.z=.22,this.wallSwitchGroup.add(this.rockerCeiling),this.rockerDesk=new L(a,e),this.rockerDesk.position.set(.014,.04,.05),this.rockerDesk.rotation.z=.22,this.wallSwitchGroup.add(this.rockerDesk),this.disposables.push(a);const o=new $t(.01,10,10);this.ledCeilingMat=new Q({color:1096065,emissive:1096065,emissiveIntensity:1.5}),this.ledDeskMat=new Q({color:1096065,emissive:1096065,emissiveIntensity:1.5});const l=new L(o,this.ledCeilingMat);l.position.set(.015,-.06,-.05),this.wallSwitchGroup.add(l);const c=new L(o,this.ledDeskMat);c.position.set(.015,-.06,.05),this.wallSwitchGroup.add(c),this.disposables.push(o,this.ledCeilingMat,this.ledDeskMat);const h=document.createElement("canvas");h.width=256,h.height=80;const d=h.getContext("2d");d.fillStyle="#0f172a",d.fillRect(0,0,256,80),d.strokeStyle="#38bdf8",d.lineWidth=4,d.strokeRect(4,4,248,72),d.fillStyle="#38bdf8",d.font="bold 22px system-ui, sans-serif",d.textAlign="center",d.fillText("💡 LIGHT SWITCH",128,36),d.fillStyle="#94a3b8",d.font="14px monospace",d.fillText("CLICK TO TOGGLE",128,60);const f=new fe(h),m=new le({map:f}),g=new Qt(.32,.1),_=new L(g,m);_.rotation.y=Math.PI/2,_.position.set(.015,.26,0),this.wallSwitchGroup.add(_),this.disposables.push(f,m,g),this.group.add(this.wallSwitchGroup),this.clickableObjects.push({mesh:this.rockerCeiling,name:"Ceiling Lights Switch",hint:"Click to Toggle Ceiling Lights [L]",onClick:()=>this.toggleCeilingLights()}),this.clickableObjects.push({mesh:this.rockerDesk,name:"Desk Lamp Switch",hint:"Click to Toggle Desk Lamp [J]",onClick:()=>this.toggleDeskLamp()}),this.clickableObjects.push({mesh:this.wallSwitchPlate,name:"Room Light Switch Panel",hint:"Click to Toggle Ceiling Lights [L]",onClick:()=>this.toggleCeilingLights()})}_buildFurniture(){const t=new lt(2.6,.08,1.3),e=new Q({color:5779214,roughness:.35,metalness:.05}),i=new L(t,e);i.position.set(0,.82,-1.8),i.castShadow=!0,i.receiveShadow=!0,this.group.add(i),this.physics.addStaticCollider(i),this.disposables.push(t,e);const n=new lt(.06,.82,1.25),r=new Q({color:1579035,metalness:.9,roughness:.2});[-1.2,1.2].forEach(l=>{const c=new L(n,r);c.position.set(l,.41,-1.8),c.castShadow=!0,this.group.add(c)}),this.disposables.push(n,r);const a=new lt(2.3,.45,.04),o=new L(a,r);o.position.set(0,.55,-1.35),this.group.add(o),this.disposables.push(a),this._createOfficeChair(0,0,-2.65,0),this._createOfficeChair(0,0,-.85,Math.PI)}_createOfficeChair(t,e,i,n){const r=new Ft;r.position.set(t,e,i),r.rotation.y=n;const a=new Q({color:2565930,metalness:.8,roughness:.3}),o=new Q({color:988970,roughness:.8}),l=new Q({color:1981023,roughness:.5}),c=new lt(.55,.08,.52),h=new L(c,o);h.position.y=.52,h.castShadow=!0,r.add(h);const d=new lt(.5,.65,.06),f=new L(d,l);f.position.set(0,.85,-.24),f.rotation.x=-.08,f.castShadow=!0,r.add(f);const m=new lt(.3,.14,.06),g=new L(m,o);g.position.set(0,1.24,-.26),r.add(g);const _=new lt(.08,.22,.32);[-.3,.3].forEach(w=>{const R=new L(_,a);R.position.set(w,.65,-.05),r.add(R)});const p=new yt(.04,.04,.45,12),u=new L(p,a);u.position.y=.26,r.add(u);const b=new yt(.32,.36,.06,5),S=new L(b,a);S.position.y=.05,r.add(S),this.group.add(r)}_buildExecutiveDecorations(){const t=new Ft;t.position.set(.15,.86,-1.8),t.rotation.y=-.15;const e=new Q({color:9741240,metalness:.9,roughness:.2}),i=new lt(.42,.015,.28),n=new L(i,e);n.castShadow=!0,t.add(n);const r=new lt(.42,.28,.012),a=new L(r,e);a.position.set(0,.13,-.13),a.rotation.x=-.35,t.add(a);const o=new Qt(.39,.25),l=de.createLaptopScreenTexture(),c=new le({map:l}),h=new L(o,c);h.position.set(0,.13,-.12),h.rotation.x=-.35,t.add(h),this.disposables.push(l,c,i,r,e),this.screenLight=new rn(3718648,.65,2.2),this.screenLight.position.set(.15,1.05,-1.7),this.group.add(this.screenLight),this.lights.push(this.screenLight),this.group.add(t);const d=new yt(.045,.04,.1,16),f=new Q({color:889992,roughness:.2}),m=new L(d,f);m.position.set(-.65,.91,-1.65),m.castShadow=!0,this.group.add(m),this.disposables.push(d,f);const g=new lt(.35,.015,.26),_=new Q({color:1841431,roughness:.6}),p=new L(g,_);p.position.set(-.25,.87,-1.45),p.rotation.y=.1,this.group.add(p),this.disposables.push(g,_);const u=new lt(.08,1.6,2.8),b=new Q({color:6583435,metalness:.8}),S=new L(u,b);S.position.set(-4.95,2.2,-1.5),this.group.add(S);const w=new Qt(2.7,1.5),R=document.createElement("canvas");R.width=512,R.height=284;const A=R.getContext("2d");A.fillStyle="#ffffff",A.fillRect(0,0,512,284),A.fillStyle="#0f172a",A.font="bold 22px system-ui, sans-serif",A.fillText("ELiVET Technical Competency Matrix",24,40),A.strokeStyle="#0ea5e9",A.lineWidth=3,A.beginPath(),A.moveTo(24,52),A.lineTo(488,52),A.stroke(),A.fillStyle="#1e3a5f",A.font="16px system-ui, sans-serif",A.fillText("1. STAR Framework (Situation, Task, Action, Result)",24,88),A.fillText("2. Problem Ownership & Independent Debugging",24,126),A.fillText("3. Collaborative Tone & Constructive Reviews",24,164),A.fillText("4. Professional Presence & Attire Standards",24,202),A.fillStyle="#059669",A.font="bold 15px monospace",A.fillText("Status: CANDIDATE INTERVIEW IN PROGRESS",24,248);const C=new fe(R),z=new le({map:C}),v=new L(w,z);v.rotation.y=Math.PI/2,v.position.set(-4.9,2.2,-1.5),this.group.add(v),this.disposables.push(u,b,w,C,z);const E=new Qt(1.6,1.6),k=de.createWallArtTexture(),B=new le({map:k}),J=new L(E,B);J.rotation.y=Math.PI/2,J.position.set(-4.94,2.3,1.8),this.group.add(J),this.disposables.push(E,k,B);const P=new yt(.35,.28,.65,16),N=new Q({color:10105874,roughness:.9}),W=new L(P,N);W.position.set(-3.8,.32,-4),this.group.add(W);const Y=new Ft;Y.position.set(-3.8,.65,-4);const j=new Q({color:1467700,roughness:.4}),$=new $t(.38,8,8);[[0,.4,0,1],[-.2,.7,.1,.85],[.2,.8,-.1,.8],[0,1.05,0,.75]].forEach(([q,it,rt,T])=>{const U=new L($,j);U.position.set(q,it,rt),U.scale.set(T,T*1.3,T),Y.add(U)}),this.group.add(Y),this.disposables.push(P,N,$,j),this._addContactAODecals()}_addContactAODecals(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(64,64,10,64,64,62);i.addColorStop(0,"rgba(0, 0, 0, 0.72)"),i.addColorStop(.5,"rgba(0, 0, 0, 0.35)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=i,e.fillRect(0,0,128,128);const n=new fe(t),r=new le({map:n,transparent:!0,depthWrite:!1});this.disposables.push(n,r);const a=(o,l,c,h)=>{const d=new Qt(1,1),f=new L(d,r);f.rotation.x=-Math.PI/2,f.position.set(o,.006,l),f.scale.set(c,h,1),this.group.add(f),this.disposables.push(d)};a(0,-1.8,3.2,1.8),a(0,-2.65,1.2,1.2),a(0,-.85,1.2,1.2),a(-3.8,-4,1.1,1.1)}_setupCinematicLighting(){this.hemiLight=new ur(16777215,6583435,1.25),this.group.add(this.hemiLight),this.lights.push(this.hemiLight),this.ambientFill=new mr(16775149,.55),this.group.add(this.ambientFill),this.lights.push(this.ambientFill),this.sunLight=new pr(16772565,1.95),this.sunLight.position.set(5.5,4.2,0),this.sunLight.target.position.set(0,.85,-1.8),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=14,this.sunLight.shadow.camera.left=-4,this.sunLight.shadow.camera.right=4,this.sunLight.shadow.camera.top=4,this.sunLight.shadow.camera.bottom=-4,this.sunLight.shadow.bias=-15e-5,this.sunLight.shadow.normalBias=.04,this.sunLight.shadow.radius=2.5,this.group.add(this.sunLight),this.group.add(this.sunLight.target),this.lights.push(this.sunLight),this.ceilingSpot1=new Ui(16775149,2.2,11,Math.PI/3.6,.7,2),this.ceilingSpot1.position.set(0,4.1,-1.8),this.ceilingSpot1.target.position.set(0,.82,-1.8),this.ceilingSpot1.castShadow=!0,this.ceilingSpot1.shadow.mapSize.width=1024,this.ceilingSpot1.shadow.mapSize.height=1024,this.ceilingSpot1.shadow.bias=-1e-4,this.ceilingSpot1.shadow.normalBias=.03,this.group.add(this.ceilingSpot1),this.group.add(this.ceilingSpot1.target),this.lights.push(this.ceilingSpot1),this.ceilingSpot2=new Ui(16772565,1.75,11,Math.PI/3.6,.7,2),this.ceilingSpot2.position.set(0,4.1,1),this.ceilingSpot2.target.position.set(0,.85,.5),this.ceilingSpot2.castShadow=!1,this.group.add(this.ceilingSpot2),this.group.add(this.ceilingSpot2.target),this.lights.push(this.ceilingSpot2),this.rimLight=new rn(3718648,.85,8,2),this.rimLight.position.set(-2.5,3,-4.2),this.group.add(this.rimLight),this.lights.push(this.rimLight)}toggleCeilingLights(t){this.ceilingLightsOn=typeof t=="boolean"?t:!this.ceilingLightsOn;const e=this.ceilingLightsOn?2.2:0,i=this.ceilingLightsOn?1.75:0;if(this.ceilingSpot1&&(this.ceilingSpot1.intensity=e),this.ceilingSpot2&&(this.ceilingSpot2.intensity=i),this.ceilingDiffuserMat&&(this.ceilingDiffuserMat.emissiveIntensity=this.ceilingLightsOn?1.6:.05,this.ceilingDiffuserMat.color.setHex(this.ceilingLightsOn?16777215:3359061)),this.rockerCeiling&&(this.rockerCeiling.rotation.z=this.ceilingLightsOn?.22:-.22),this.ledCeilingMat){const n=this.ceilingLightsOn?1096065:15680580;this.ledCeilingMat.color.setHex(n),this.ledCeilingMat.emissive.setHex(n)}return this.ceilingLightsOn}toggleDeskLamp(t){this.deskLampOn=typeof t=="boolean"?t:!this.deskLampOn;const e=this.deskLampOn?2.4:0;if(this.deskLampSpot&&(this.deskLampSpot.intensity=e),this.deskLampBulbMat&&(this.deskLampBulbMat.emissiveIntensity=this.deskLampOn?2.2:0,this.deskLampBulbMat.color.setHex(this.deskLampOn?16777215:2565930)),this.lampSwitchBtnMat){const i=this.deskLampOn?1096065:15680580;this.lampSwitchBtnMat.color.setHex(i),this.lampSwitchBtnMat.emissive.setHex(i)}if(this.rockerDesk&&(this.rockerDesk.rotation.z=this.deskLampOn?.22:-.22),this.ledDeskMat){const i=this.deskLampOn?1096065:15680580;this.ledDeskMat.color.setHex(i),this.ledDeskMat.emissive.setHex(i)}return this.deskLampOn}toggleSunlight(t){return this.sunlightOn=typeof t=="boolean"?t:!this.sunlightOn,this.sunLight&&(this.sunLight.intensity=this.sunlightOn?1.95:0),this.hemiLight&&(this.hemiLight.intensity=this.sunlightOn?1.25:.55),this.ambientFill&&(this.ambientFill.intensity=this.sunlightOn?.55:.35),this.sunlightOn}toggleNightMode(t){return this.nightModeOn=typeof t=="boolean"?t:!this.nightModeOn,this.nightModeOn?(this.scene.background=new Et(330776),this.toggleSunlight(!1),this.toggleCeilingLights(!1),this.toggleDeskLamp(!0),this.hemiLight&&(this.hemiLight.color.setHex(1976635),this.hemiLight.groundColor.setHex(132631),this.hemiLight.intensity=.45),this.ambientFill&&(this.ambientFill.intensity=.2),this.rimLight&&(this.rimLight.color.setHex(6333946),this.rimLight.intensity=1.2)):(this.scene.background=new Et(11000060),this.toggleSunlight(!0),this.toggleCeilingLights(!0),this.toggleDeskLamp(!0),this.hemiLight&&(this.hemiLight.color.setHex(16777215),this.hemiLight.groundColor.setHex(6583435),this.hemiLight.intensity=1.25),this.ambientFill&&(this.ambientFill.intensity=.55),this.rimLight&&(this.rimLight.color.setHex(3718648),this.rimLight.intensity=.85)),this.nightModeOn}getLightingState(){return{ceilingLightsOn:this.ceilingLightsOn,deskLampOn:this.deskLampOn,sunlightOn:this.sunlightOn,nightModeOn:this.nightModeOn}}setLightingPreset(t){!this.sunLight||!this.hemiLight||!this.ceilingSpot1||(t==="warm_evening"?(this.sunLight.color.setHex(16486972),this.sunLight.intensity=2,this.hemiLight.color.setHex(16708551),this.hemiLight.groundColor.setHex(7877903),this.hemiLight.intensity=1.35,this.ambientFill&&(this.ambientFill.color.setHex(16708551),this.ambientFill.intensity=.6),this.ceilingSpot1.color.setHex(16707722),this.ceilingSpot1.intensity=2,this.ceilingSpot2&&(this.ceilingSpot2.color.setHex(16707722),this.ceilingSpot2.intensity=1.6)):t==="focus_studio"?(this.sunLight.color.setHex(16777215),this.sunLight.intensity=1.2,this.hemiLight.color.setHex(14742270),this.hemiLight.groundColor.setHex(3359061),this.hemiLight.intensity=1.1,this.ambientFill&&(this.ambientFill.color.setHex(16777215),this.ambientFill.intensity=.5),this.ceilingSpot1.intensity=2.8,this.ceilingSpot1.color.setHex(16777215),this.ceilingSpot2&&(this.ceilingSpot2.intensity=2.2,this.ceilingSpot2.color.setHex(16777215))):(this.sunLight.color.setHex(16772565),this.sunLight.intensity=1.95,this.hemiLight.color.setHex(16777215),this.hemiLight.groundColor.setHex(6583435),this.hemiLight.intensity=1.25,this.ambientFill&&(this.ambientFill.color.setHex(16775149),this.ambientFill.intensity=.55),this.ceilingSpot1.color.setHex(16775149),this.ceilingSpot1.intensity=2.2,this.ceilingSpot2&&(this.ceilingSpot2.color.setHex(16772565),this.ceilingSpot2.intensity=1.75)))}getClickableObjects(){return this.clickableObjects}_spawnNPC(){this.npc=new gr(this.scene,this.camera,{name:"Vikram Malhotra",role:"Senior Technical Director"}),this.npc.setPosition(0,0,-2.65,0)}getPlayerSpawn(){return{x:0,y:0,z:-.85,rotationY:Math.PI}}update(t){this.npc&&this.npc.update(t)}destroy(){this.scene.background=this.originalBg,this.scene.fog=this.originalFog,this.npc&&this.npc.destroy(),this.lights.forEach(t=>this.group.remove(t)),this.disposables.forEach(t=>{t&&t.dispose&&t.dispose()}),this.scene.remove(this.group)}}class pp{constructor(t,e,i){this.scene=t,this.camera=e,this.physics=i,this.group=new Ft,this.group.name="Scene_OfficeFloor",this.scene.add(this.group),this.npc=null,this.lights=[],this.disposables=[],this.ceilingLightsOn=!0,this.deskLampOn=!0,this.sunlightOn=!0,this.nightModeOn=!1,this.clickableObjects=[],this.originalBg=this.scene.background,this.scene.background=new Et(11000060),this.originalFog=this.scene.fog,this.scene.fog=new hs(14412542,.007),this._buildAtmosphericSkyline(),this._buildArchitecture(),this._buildWorkstationPods(),this._buildReceptionAndBranding(),this._buildCollaborationLounge(),this._buildPhysicalLightSwitch(),this._setupLighting(),this._spawnNPC()}_buildAtmosphericSkyline(){const t=new yt(36,36,26,32,1,!0),e=de.createSkyline360Texture(),i=new le({map:e,side:Ie}),n=new L(t,i);n.position.y=8,this.group.add(n),this.disposables.push(t,e,i)}_buildArchitecture(){const n=new Qt(26,26),r=de.createOfficeCarpetTexture(),a=new Q({map:r,roughness:.45,metalness:.08}),o=new L(n,a);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.group.add(o),this.disposables.push(n,r,a),this.physics.setBoundaries(-26/2+.6,26/2-.6,-26/2+.6,26/2-.6);const l=new Qt(26,26),c=new Q({color:16317180,roughness:.9}),h=new L(l,c);h.rotation.x=Math.PI/2,h.position.y=4.4,this.group.add(h),this.disposables.push(l,c),this.ceilingDiffuserMat=new Q({color:16777215,emissive:16775149,emissiveIntensity:1.3,roughness:.15}),this.disposables.push(this.ceilingDiffuserMat);const d=new Q({color:3359061,metalness:.8});this.disposables.push(d);const f=new lt(.18,.06,18),m=new Qt(.14,18);this.disposables.push(f,m),[-6.5,-2.2,2.2,6.5].forEach(C=>{const z=new L(f,d);z.position.set(C,4.4-.02,0),this.group.add(z);const v=new L(m,this.ceilingDiffuserMat);v.rotation.x=Math.PI/2,v.position.set(C,4.4-.05,0),this.group.add(v)});const g=new Q({color:1976635,metalness:.85,roughness:.2}),_=new Q({color:15857145,roughness:.85}),p=new Q({color:9584654,roughness:.5});this.disposables.push(g,_,p),this._buildGlassCurtainWall(0,4.4/2,-26/2,26,4.4,0),this._buildGlassCurtainWall(-26/2,4.4/2,0,26,4.4,Math.PI/2);const u=new Qt(26,4.4),b=new L(u,_);b.rotation.y=-Math.PI/2,b.position.set(26/2,4.4/2,0),this.group.add(b),this.disposables.push(u);const S=new lt(.06,4.4,.05);this.disposables.push(S);for(let C=-10;C<=10;C+=.35){const z=new L(S,p);z.position.set(26/2-.03,4.4/2,C),this.group.add(z)}const w=new L(u,_);w.rotation.y=Math.PI,w.position.set(0,4.4/2,26/2),this.group.add(w);const R=new lt(.8,4.4,.8),A=new Q({color:16777215,roughness:.3});this.disposables.push(R,A),this.pillarSwitchPos=new D(-2.2,1.4,-2),[[-2.2,-2],[2.2,-2]].forEach(([C,z])=>{const v=new L(R,A);v.position.set(C,4.4/2,z),v.castShadow=!0,v.receiveShadow=!0,this.group.add(v),this.physics.addStaticCollider(v)})}_buildGlassCurtainWall(t,e,i,n,r,a){const o=new Ft;o.position.set(t,e,i),o.rotation.y=a;const l=new Qt(n,r),c=new ir({color:16777215,transmission:.88,opacity:.95,transparent:!0,roughness:.05,metalness:.1,ior:1.5}),h=new L(l,c);o.add(h),this.disposables.push(l,c);const d=new Q({color:1579035,metalness:.85,roughness:.25});this.disposables.push(d);const f=new lt(n,.12,.12);[-r/2+.06,r/2-.06].forEach(g=>{const _=new L(f,d);_.position.y=g,o.add(_)}),this.disposables.push(f);const m=new lt(.1,r,.12);this.disposables.push(m);for(let g=-n/2;g<=n/2;g+=3.25){const _=new L(m,d);_.position.x=g,o.add(_)}this.group.add(o)}_buildWorkstationPods(){const t=new Q({color:15591632,roughness:.35,metalness:.05}),e=new Q({color:15857145,metalness:.9,roughness:.2}),i=new Q({color:592139,metalness:.8,roughness:.3}),n=new Q({color:165063,roughness:.7});this.disposables.push(t,e,i,n);const r=new lt(2.4,.05,1.1),a=new lt(.06,.74,1),o=new lt(2.4,.42,.04),l=new lt(.56,.34,.02),c=new yt(.015,.015,.22,10),h=new Qt(.54,.32);this.disposables.push(r,a,o,l,c,h);const d=de.createLaptopScreenTexture(),f=de.createMetricsDashboardTexture();this.screenCodeMat=new le({map:d}),this.screenMetricsMat=new le({map:f}),this.disposables.push(d,f,this.screenCodeMat,this.screenMetricsMat),[[-6.5,-5],[-6.5,0],[-6.5,5],[6.5,-5],[6.5,0],[6.5,5]].forEach(([g,_])=>{const p=new Ft;p.position.set(g,0,_);const u=new L(r,t);u.position.set(0,.75,0),u.castShadow=!0,u.receiveShadow=!0,p.add(u),this.physics.addStaticCollider(u),[-1.1,1.1].forEach(W=>{const Y=new L(a,e);Y.position.set(W,.37,0),Y.castShadow=!0,p.add(Y)});const b=new L(o,n);b.position.set(0,.98,-.52),b.castShadow=!0,p.add(b);const S=new Ft;S.position.set(-.35,.77,-.32),S.rotation.y=.12;const w=new L(c,e);w.position.y=.11,S.add(w);const R=new L(l,i);R.position.set(0,.28,0),R.castShadow=!0,S.add(R);const A=new L(h,this.screenCodeMat);A.position.set(0,.28,.012),S.add(A),p.add(S);const C=new Ft;C.position.set(.35,.77,-.32),C.rotation.y=-.12;const z=new L(c,e);z.position.y=.11,C.add(z);const v=new L(l,i);v.position.set(0,.28,0),v.castShadow=!0,C.add(v);const E=new L(h,this.screenMetricsMat);E.position.set(0,.28,.012),C.add(E),p.add(C);const k=new lt(.42,.012,.14),B=new Q({color:1976635,roughness:.4}),J=new L(k,B);J.position.set(0,.78,.08),p.add(J);const P=new lt(.06,.018,.09),N=new L(P,B);N.position.set(.32,.78,.08),p.add(N),this.disposables.push(k,B,P),this._buildTaskChair(p,0,0,.65,Math.PI),this.group.add(p)})}_buildTaskChair(t,e,i,n,r){const a=new Ft;a.position.set(e,i,n),a.rotation.y=r;const o=new Q({color:988970,roughness:.8}),l=new Q({color:9741240,metalness:.9,roughness:.2}),c=new lt(.48,.07,.46),h=new L(c,o);h.position.y=.48,h.castShadow=!0,a.add(h);const d=new lt(.44,.52,.04),f=new L(d,o);f.position.set(0,.76,-.21),f.castShadow=!0,a.add(f);const m=new yt(.03,.03,.42,10),g=new L(m,l);g.position.y=.24,a.add(g);const _=new yt(.28,.32,.05,5),p=new L(_,l);p.position.y=.05,a.add(p),t.add(a)}_buildReceptionAndBranding(){const t=new lt(4.4,1.15,1.2),e=new Q({color:16317180,roughness:.2,metalness:.15}),i=new L(t,e);i.position.set(0,.58,-8.2),i.castShadow=!0,i.receiveShadow=!0,this.group.add(i),this.physics.addStaticCollider(i),this.disposables.push(t,e);const n=new rn(3718648,1.2,4);n.position.set(0,.12,-7.4),this.group.add(n),this.lights.push(n);const r=new Qt(4.2,1.3),a=de.createCompanyHubSignTexture(),o=new le({map:a,transparent:!0}),l=new L(r,o);l.position.set(0,2.7,-12.4),this.group.add(l),this.disposables.push(r,a,o);const c=new yt(.012,.012,1.2,8),h=new Q({color:9741240,metalness:.9});[-1.8,1.8].forEach(d=>{const f=new L(c,h);f.position.set(d,3.8,-12.4),this.group.add(f)}),this.disposables.push(c,h)}_buildCollaborationLounge(){const t=new Ft;t.position.set(0,0,8.5);const e=new lt(3.6,2,.06),i=new Q({color:6583435,metalness:.8}),n=new L(e,i);n.position.y=1.8,t.add(n);const r=new Qt(3.5,1.9),a=de.createKanbanBoardTexture(),o=new le({map:a}),l=new L(r,o);l.position.set(0,1.8,.035),t.add(l);const c=new yt(.03,.03,1.9,10);[-1.7,1.7].forEach(w=>{const R=new L(c,i);R.position.set(w,.95,0),t.add(R)}),this.group.add(t),this.disposables.push(e,i,r,a,o,c);const h=new lt(2.2,.06,.9),d=new Q({color:5779214,roughness:.4}),f=new L(h,d);f.position.set(-1.8,1.05,3.8),f.castShadow=!0,this.group.add(f),this.physics.addStaticCollider(f);const m=new yt(.03,.03,1.05,10),g=new Q({color:1579035,metalness:.85});[-.95,.95].forEach(w=>{[-.35,.35].forEach(R=>{const A=new L(m,g);A.position.set(-1.8+w,.52,3.8+R),this.group.add(A)})}),this.disposables.push(h,d,m,g);const _=new yt(.35,.28,.65,16),p=new Q({color:16777215,roughness:.3}),u=new Q({color:1409085,roughness:.5}),b=new $t(.35,8,8);this.disposables.push(_,p,u,b),[[-11.5,-11.5],[11.5,-11.5],[-11.5,11.5],[11.5,11.5],[-2.8,-8.2],[2.8,-8.2]].forEach(([w,R])=>{const A=new L(_,p);A.position.set(w,.32,R),A.castShadow=!0,this.group.add(A);const C=new Ft;C.position.set(w,.65,R),[[0,.4,0,1],[-.15,.68,.08,.85],[.18,.72,-.08,.8],[0,.98,0,.7]].forEach(([z,v,E,k])=>{const B=new L(b,u);B.position.set(z,v,E),B.scale.set(k,k*1.3,k),C.add(B)}),this.group.add(C)})}_buildPhysicalLightSwitch(){this.wallSwitchGroup=new Ft,this.wallSwitchGroup.name="Interactive_OfficeSwitch",this.wallSwitchGroup.position.set(-2.2,1.45,-1.58);const t=new Q({color:16317180,roughness:.35,metalness:.1}),e=new Q({color:988970,roughness:.3});this.disposables.push(t,e);const i=new lt(.24,.32,.024),n=new L(i,t);this.wallSwitchGroup.add(n),this.disposables.push(i);const r=new lt(.065,.1,.025);this.rockerCeiling=new L(r,e),this.rockerCeiling.position.set(-.05,.03,.015),this.rockerCeiling.rotation.x=-.22,this.wallSwitchGroup.add(this.rockerCeiling),this.rockerDesk=new L(r,e),this.rockerDesk.position.set(.05,.03,.015),this.rockerDesk.rotation.x=-.22,this.wallSwitchGroup.add(this.rockerDesk),this.disposables.push(r);const a=new $t(.009,8,8);this.ledCeilingMat=new Q({color:1096065,emissive:1096065,emissiveIntensity:1.5}),this.ledDeskMat=new Q({color:1096065,emissive:1096065,emissiveIntensity:1.5});const o=new L(a,this.ledCeilingMat);o.position.set(-.05,-.06,.015),this.wallSwitchGroup.add(o);const l=new L(a,this.ledDeskMat);l.position.set(.05,-.06,.015),this.wallSwitchGroup.add(l),this.disposables.push(a,this.ledCeilingMat,this.ledDeskMat);const c=document.createElement("canvas");c.width=256,c.height=70;const h=c.getContext("2d");h.fillStyle="#0f172a",h.fillRect(0,0,256,70),h.strokeStyle="#38bdf8",h.lineWidth=4,h.strokeRect(4,4,248,62),h.fillStyle="#38bdf8",h.font="bold 22px system-ui, sans-serif",h.textAlign="center",h.fillText("💡 FLOOR LIGHTS",128,34),h.fillStyle="#94a3b8",h.font="13px monospace",h.fillText("CLICK TO TOGGLE",128,55);const d=new fe(c),f=new le({map:d}),m=new Qt(.28,.08),g=new L(m,f);g.position.set(0,.22,.015),this.wallSwitchGroup.add(g),this.disposables.push(d,f,m),this.group.add(this.wallSwitchGroup),this.clickableObjects.push({mesh:this.rockerCeiling,name:"Ceiling Lights Switch",hint:"Click to Toggle Floor Lights [L]",onClick:()=>this.toggleCeilingLights()}),this.clickableObjects.push({mesh:this.rockerDesk,name:"Workstation Display Lights",hint:"Click to Toggle Screens & Task Lights [J]",onClick:()=>this.toggleDeskLamp()}),this.clickableObjects.push({mesh:n,name:"Office Light Panel",hint:"Click to Toggle Floor Lights [L]",onClick:()=>this.toggleCeilingLights()})}_setupLighting(){this.hemiLight=new ur(16777215,9741240,1.35),this.group.add(this.hemiLight),this.lights.push(this.hemiLight),this.ambientFill=new mr(16317180,.65),this.group.add(this.ambientFill),this.lights.push(this.ambientFill),this.sunLight=new pr(16772565,2.1),this.sunLight.position.set(10,12,-12),this.sunLight.target.position.set(0,1,0),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.left=-16,this.sunLight.shadow.camera.right=16,this.sunLight.shadow.camera.top=16,this.sunLight.shadow.camera.bottom=-16,this.sunLight.shadow.bias=-15e-5,this.sunLight.shadow.normalBias=.04,this.sunLight.shadow.radius=2,this.group.add(this.sunLight),this.group.add(this.sunLight.target),this.lights.push(this.sunLight),this.spotLeft=new Ui(16776171,1.75,14,Math.PI/3.5,.6,2),this.spotLeft.position.set(-6.5,4.2,0),this.spotLeft.target.position.set(-6.5,.75,0),this.group.add(this.spotLeft),this.group.add(this.spotLeft.target),this.lights.push(this.spotLeft),this.spotRight=new Ui(16776171,1.75,14,Math.PI/3.5,.6,2),this.spotRight.position.set(6.5,4.2,0),this.spotRight.target.position.set(6.5,.75,0),this.group.add(this.spotRight),this.group.add(this.spotRight.target),this.lights.push(this.spotRight),this.spotCenter=new Ui(16776171,1.9,14,Math.PI/3.2,.6,2),this.spotCenter.position.set(0,4.2,-3.5),this.spotCenter.target.position.set(0,.8,-4.5),this.group.add(this.spotCenter),this.group.add(this.spotCenter.target),this.lights.push(this.spotCenter)}toggleCeilingLights(t){this.ceilingLightsOn=typeof t=="boolean"?t:!this.ceilingLightsOn;const e=this.ceilingLightsOn?1.75:0;if(this.spotLeft&&(this.spotLeft.intensity=e),this.spotRight&&(this.spotRight.intensity=e),this.spotCenter&&(this.spotCenter.intensity=this.ceilingLightsOn?1.9:0),this.ceilingDiffuserMat&&(this.ceilingDiffuserMat.emissiveIntensity=this.ceilingLightsOn?1.5:.05,this.ceilingDiffuserMat.color.setHex(this.ceilingLightsOn?16777215:4674921)),this.rockerCeiling&&(this.rockerCeiling.rotation.x=this.ceilingLightsOn?-.22:.22),this.ledCeilingMat){const i=this.ceilingLightsOn?1096065:15680580;this.ledCeilingMat.color.setHex(i),this.ledCeilingMat.emissive.setHex(i)}return this.ceilingLightsOn}toggleDeskLamp(t){if(this.deskLampOn=typeof t=="boolean"?t:!this.deskLampOn,this.screenCodeMat&&this.screenMetricsMat&&(this.screenCodeMat.opacity=this.deskLampOn?1:.2,this.screenMetricsMat.opacity=this.deskLampOn?1:.2),this.rockerDesk&&(this.rockerDesk.rotation.x=this.deskLampOn?-.22:.22),this.ledDeskMat){const e=this.deskLampOn?1096065:15680580;this.ledDeskMat.color.setHex(e),this.ledDeskMat.emissive.setHex(e)}return this.deskLampOn}toggleSunlight(t){return this.sunlightOn=typeof t=="boolean"?t:!this.sunlightOn,this.sunLight&&(this.sunLight.intensity=this.sunlightOn?2.1:0),this.hemiLight&&(this.hemiLight.intensity=this.sunlightOn?1.35:.65),this.ambientFill&&(this.ambientFill.intensity=this.sunlightOn?.65:.35),this.sunlightOn}toggleNightMode(t){return this.nightModeOn=typeof t=="boolean"?t:!this.nightModeOn,this.nightModeOn?(this.toggleSunlight(!1),this.toggleCeilingLights(!1),this.scene.background=new Et(330776),this.hemiLight&&(this.hemiLight.color.setHex(1976635),this.hemiLight.groundColor.setHex(593174),this.hemiLight.intensity=.45),this.ambientFill&&(this.ambientFill.intensity=.25)):(this.toggleSunlight(!0),this.toggleCeilingLights(!0),this.scene.background=new Et(11000060),this.hemiLight&&(this.hemiLight.color.setHex(16777215),this.hemiLight.groundColor.setHex(9741240),this.hemiLight.intensity=1.35),this.ambientFill&&(this.ambientFill.intensity=.65)),this.nightModeOn}setLightingPreset(t){!this.sunLight||!this.hemiLight||(t==="warm_evening"?(this.sunLight.color.setHex(16486972),this.sunLight.intensity=2.1,this.hemiLight.color.setHex(16708551),this.hemiLight.groundColor.setHex(7877903),this.hemiLight.intensity=1.4,this.ambientFill&&(this.ambientFill.color.setHex(16708551),this.ambientFill.intensity=.65),this.spotLeft&&this.spotLeft.color.setHex(16707722),this.spotRight&&this.spotRight.color.setHex(16707722),this.spotCenter&&this.spotCenter.color.setHex(16707722)):t==="focus_studio"?(this.sunLight.color.setHex(16777215),this.sunLight.intensity=1.3,this.hemiLight.color.setHex(14742270),this.hemiLight.groundColor.setHex(3359061),this.hemiLight.intensity=1.2,this.ambientFill&&(this.ambientFill.color.setHex(16777215),this.ambientFill.intensity=.55),this.spotLeft&&(this.spotLeft.intensity=2.4),this.spotRight&&(this.spotRight.intensity=2.4),this.spotCenter&&(this.spotCenter.intensity=2.6)):(this.sunLight.color.setHex(16772565),this.sunLight.intensity=2.1,this.hemiLight.color.setHex(16777215),this.hemiLight.groundColor.setHex(9741240),this.hemiLight.intensity=1.35,this.ambientFill&&(this.ambientFill.color.setHex(16317180),this.ambientFill.intensity=.65),this.spotLeft&&(this.spotLeft.color.setHex(16776171),this.spotLeft.intensity=1.75),this.spotRight&&(this.spotRight.color.setHex(16776171),this.spotRight.intensity=1.75),this.spotCenter&&(this.spotCenter.color.setHex(16776171),this.spotCenter.intensity=1.9)))}getLightingState(){return{ceilingLightsOn:this.ceilingLightsOn,deskLampOn:this.deskLampOn,sunlightOn:this.sunlightOn,nightModeOn:this.nightModeOn}}getClickableObjects(){return this.clickableObjects}_spawnNPC(){this.npc=new gr(this.scene,this.camera,{name:"Aditi Sharma",role:"Staff Solutions Architect"}),this.npc.setPosition(0,0,-6.8,0)}getPlayerSpawn(){return{x:0,y:0,z:-1.8,rotationY:Math.PI}}update(t){this.npc&&this.npc.update(t)}destroy(){this.scene.fog=this.originalFog,this.scene.background=this.originalBg,this.npc&&this.npc.destroy(),this.lights.forEach(t=>this.group.remove(t)),this.disposables.forEach(t=>{t&&t.dispose&&t.dispose()}),this.scene.remove(this.group)}}class mp{constructor(t,e,i,n=null){this.scene=t,this.camera=e,this.physics=i,this.player=n,this.group=new Ft,this.group.name="Scene_VirtualWardrobe",this.scene.add(this.group),this.npc=null,this.lights=[],this.disposables=[],this.ceilingLightsOn=!0,this.vanityLightsOn=!0,this.sunlightOn=!0,this.nightModeOn=!1,this.clickableObjects=[],this.originalBg=this.scene.background,this.scene.background=new Et(1976635),this.originalFog=this.scene.fog,this.scene.fog=null,this._buildArchitecture(),this._buildHollywoodVanityMirror(),this._buildClothingRacks(),this._buildAccessoryShelves(),this._buildPhysicalLightSwitch(),this._setupStudioLighting(),this._spawnConsultantNPC()}_buildArchitecture(){const n=new Qt(12,12),r=de.createWoodFloorTexture(),a=new Q({map:r,roughness:.28,metalness:.15}),o=new L(n,a);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.group.add(o),this.disposables.push(n,r,a),this.physics.setBoundaries(-12/2+.5,12/2-.5,-12/2+.5,12/2-.5);const l=new Ft;l.position.set(0,0,0);const c=new yt(1.5,1.65,.14,36),h=new Q({color:16317180,roughness:.2,metalness:.2}),d=new L(c,h);d.position.y=.07,d.receiveShadow=!0,l.add(d),this.disposables.push(c,h);const f=new Q({color:14251782,metalness:.9,roughness:.2}),m=new yt(1.52,1.52,.04,36),g=new L(m,f);g.position.y=.14,l.add(g),this.disposables.push(f,m);const _=new us(1.55,.025,16,64);this.haloMat=new Q({color:3718648,emissive:165063,emissiveIntensity:1.8});const p=new L(_,this.haloMat);p.rotation.x=Math.PI/2,p.position.y=.03,l.add(p),this.disposables.push(_,this.haloMat),this.group.add(l);const u=new Q({color:16448249,roughness:.85}),b=new Qt(12,4.5);this.disposables.push(u,b);const S=new L(b,u);S.position.set(0,4.5/2,-12/2),S.receiveShadow=!0,this.group.add(S);const w=new L(b,u);w.rotation.y=Math.PI,w.position.set(0,4.5/2,12/2),this.group.add(w);const R=new L(b,u);R.rotation.y=Math.PI/2,R.position.set(-12/2,4.5/2,0),this.group.add(R);const A=new L(b,u);A.rotation.y=-Math.PI/2,A.position.set(12/2,4.5/2,0),this.group.add(A);const C=new lt(.04,4.5,.02);this.disposables.push(C),[-4,-2,2,4].forEach(k=>{const B=new L(C,f);B.position.set(k,4.5/2,-12/2+.01),this.group.add(B)});const z=new Qt(12,12),v=new Q({color:15857145,roughness:.9}),E=new L(z,v);E.rotation.x=Math.PI/2,E.position.y=4.5,this.group.add(E),this.disposables.push(z,v)}_buildHollywoodVanityMirror(){const t=new Ft;t.position.set(0,1.9,-2.4);const e=new Q({color:14251782,metalness:.95,roughness:.15}),i=new lt(3.2,3,.1),n=new L(i,e);n.castShadow=!0,t.add(n),this.disposables.push(i,e);const r=new Qt(2.88,2.68),a=new ir({color:9741240,roughness:.05,metalness:.98,reflectivity:1,clearcoat:1,clearcoatRoughness:.05}),o=new L(r,a);o.position.z=.052,t.add(o),this.disposables.push(r,a),this.vanityBulbMat=new Q({color:16777215,emissive:16707722,emissiveIntensity:2.2,roughness:.1}),this.disposables.push(this.vanityBulbMat);const l=new $t(.045,12,12);this.disposables.push(l);for(let c=-1.35;c<=1.35;c+=.45){const h=new L(l,this.vanityBulbMat);h.position.set(c,1.35,.06),t.add(h)}[-1.45,1.45].forEach(c=>{for(let h=-1.1;h<=1.1;h+=.45){const d=new L(l,this.vanityBulbMat);d.position.set(c,h,.06),t.add(d)}}),this.mirrorBacklight=new rn(16707722,1.8,6,2),this.mirrorBacklight.position.set(0,0,.2),t.add(this.mirrorBacklight),this.lights.push(this.mirrorBacklight),this.group.add(t)}_buildClothingRacks(){const t=new Ft;t.position.set(-3.6,0,0);const e=new Q({color:14251782,metalness:.9,roughness:.2}),i=new yt(.025,.025,2,12),n=new yt(.02,.02,3.2,12),r=new lt(.45,.04,.12);this.disposables.push(i,n,r),[-1.5,1.5].forEach(c=>{const h=new L(i,e);h.position.set(0,1,c),h.castShadow=!0,t.add(h);const d=new L(r,e);d.position.set(0,.02,c),t.add(d)});const a=new L(n,e);a.rotation.x=Math.PI/2,a.position.set(0,1.95,0),t.add(a);const o=[{style:"formal",name:"Business Formal Suit",color:1981023,tieColor:10033947,z:-1},{style:"formal",name:"Charcoal Executive Suit",color:2042167,tieColor:165063,z:-.35},{style:"smart_casual",name:"Smart Casual Blazer & Chinos",color:165063,tieColor:null,z:.35},{style:"casual",name:"Tech Startup Polo",color:889992,tieColor:null,z:1}],l=new lt(.12,.78,.44);this.disposables.push(l),o.forEach(({style:c,name:h,color:d,z:f})=>{const m=new Q({color:d,roughness:.6}),g=new L(l,m);g.position.set(0,1.48,f),g.castShadow=!0,t.add(g),this.disposables.push(m),this.clickableObjects.push({mesh:g,name:`Wardrobe: ${h}`,hint:`Click to Wear [${c.toUpperCase()}]`,onClick:()=>{if(this.player&&this.player.setAttire){this.player.setAttire(c);const _=document.getElementById("attire-style-select");_&&(_.value=c,_.dispatchEvent(new Event("change")))}return!0}})}),this.group.add(t)}_buildAccessoryShelves(){const t=new Ft;t.position.set(3.8,0,0);const e=new Q({color:4528643,roughness:.4}),i=new ir({color:16777215,transmission:.9,roughness:.1});this.disposables.push(e,i);const n=new lt(.65,.03,3);this.disposables.push(n),[.7,1.25,1.8].forEach(h=>{const d=new L(n,i);d.position.set(0,h,0),d.receiveShadow=!0,t.add(d)});const r=new lt(.12,.08,.26),a=new Q({color:1579035,roughness:.25,metalness:.2});this.disposables.push(r,a),[-.6,.6].forEach(h=>{const d=new L(r,a);d.position.set(-.08,.75,h),t.add(d);const f=new L(r,a);f.position.set(.08,.75,h),t.add(f)});const o=new yt(.45,.45,.45,24),l=new Q({color:292951,roughness:.7}),c=new L(o,l);c.position.set(-1.2,.22,2.2),c.castShadow=!0,t.add(c),this.disposables.push(o,l),this.group.add(t)}_buildPhysicalLightSwitch(){this.wallSwitchGroup=new Ft,this.wallSwitchGroup.name="Interactive_WardrobeSwitch",this.wallSwitchGroup.position.set(-5.95,1.5,1.8);const t=new Q({color:16317180,roughness:.35}),e=new Q({color:988970,roughness:.3});this.disposables.push(t,e);const i=new lt(.025,.32,.24),n=new L(i,t);this.wallSwitchGroup.add(n),this.disposables.push(i);const r=new lt(.025,.1,.06);this.rockerCeiling=new L(r,e),this.rockerCeiling.position.set(.015,.03,-.05),this.rockerCeiling.rotation.z=.22,this.wallSwitchGroup.add(this.rockerCeiling),this.rockerDesk=new L(r,e),this.rockerDesk.position.set(.015,.03,.05),this.rockerDesk.rotation.z=.22,this.wallSwitchGroup.add(this.rockerDesk),this.disposables.push(r);const a=new $t(.009,8,8);this.ledCeilingMat=new Q({color:1096065,emissive:1096065,emissiveIntensity:1.5}),this.ledDeskMat=new Q({color:1096065,emissive:1096065,emissiveIntensity:1.5});const o=new L(a,this.ledCeilingMat);o.position.set(.016,-.06,-.05),this.wallSwitchGroup.add(o);const l=new L(a,this.ledDeskMat);l.position.set(.016,-.06,.05),this.wallSwitchGroup.add(l),this.disposables.push(a,this.ledCeilingMat,this.ledDeskMat);const c=document.createElement("canvas");c.width=256,c.height=70;const h=c.getContext("2d");h.fillStyle="#0f172a",h.fillRect(0,0,256,70),h.strokeStyle="#f59e0b",h.lineWidth=4,h.strokeRect(4,4,248,62),h.fillStyle="#f59e0b",h.font="bold 22px system-ui, sans-serif",h.textAlign="center",h.fillText("💡 STUDIO LIGHTS",128,34),h.fillStyle="#cbd5e1",h.font="13px monospace",h.fillText("CLICK TO TOGGLE",128,55);const d=new fe(c),f=new le({map:d}),m=new Qt(.3,.08),g=new L(m,f);g.rotation.y=Math.PI/2,g.position.set(.016,.22,0),this.wallSwitchGroup.add(g),this.disposables.push(d,f,m),this.group.add(this.wallSwitchGroup),this.clickableObjects.push({mesh:this.rockerCeiling,name:"Studio Key Light Switch",hint:"Click to Toggle Studio Lights [L]",onClick:()=>this.toggleCeilingLights()}),this.clickableObjects.push({mesh:this.rockerDesk,name:"Vanity Mirror Bulbs Switch",hint:"Click to Toggle Vanity Mirror [J]",onClick:()=>this.toggleDeskLamp()})}_setupStudioLighting(){this.hemiLight=new ur(16777215,6583435,1.4),this.group.add(this.hemiLight),this.lights.push(this.hemiLight),this.ambientFill=new mr(16775149,.7),this.group.add(this.ambientFill),this.lights.push(this.ambientFill),this.keySpot=new Ui(16772565,3.2,14,Math.PI/3.8,.5,2),this.keySpot.position.set(0,4.2,3.2),this.keySpot.target.position.set(0,1.1,0),this.keySpot.castShadow=!0,this.keySpot.shadow.mapSize.width=2048,this.keySpot.shadow.mapSize.height=2048,this.keySpot.shadow.bias=-15e-5,this.keySpot.shadow.normalBias=.04,this.group.add(this.keySpot),this.group.add(this.keySpot.target),this.lights.push(this.keySpot),this.fillLight=new pr(16777215,1.85),this.fillLight.position.set(2.5,2.8,3.5),this.fillLight.target.position.set(0,1,0),this.group.add(this.fillLight),this.group.add(this.fillLight.target),this.lights.push(this.fillLight),this.rimLight=new rn(3718648,1.8,8,2),this.rimLight.position.set(0,3.4,-2),this.group.add(this.rimLight),this.lights.push(this.rimLight)}toggleCeilingLights(t){this.ceilingLightsOn=typeof t=="boolean"?t:!this.ceilingLightsOn;const e=this.ceilingLightsOn?3.2:0;if(this.keySpot&&(this.keySpot.intensity=e),this.rockerCeiling&&(this.rockerCeiling.rotation.z=this.ceilingLightsOn?.22:-.22),this.ledCeilingMat){const i=this.ceilingLightsOn?1096065:15680580;this.ledCeilingMat.color.setHex(i),this.ledCeilingMat.emissive.setHex(i)}return this.ceilingLightsOn}toggleDeskLamp(t){if(this.vanityLightsOn=typeof t=="boolean"?t:!this.vanityLightsOn,this.vanityBulbMat&&(this.vanityBulbMat.emissiveIntensity=this.vanityLightsOn?2.5:.05,this.vanityBulbMat.color.setHex(this.vanityLightsOn?16777215:4674921)),this.mirrorBacklight&&(this.mirrorBacklight.intensity=this.vanityLightsOn?2.2:0),this.rockerDesk&&(this.rockerDesk.rotation.z=this.vanityLightsOn?.22:-.22),this.ledDeskMat){const e=this.vanityLightsOn?1096065:15680580;this.ledDeskMat.color.setHex(e),this.ledDeskMat.emissive.setHex(e)}return this.vanityLightsOn}toggleSunlight(t){return this.sunlightOn=typeof t=="boolean"?t:!this.sunlightOn,this.fillLight&&(this.fillLight.intensity=this.sunlightOn?1.85:.4),this.hemiLight&&(this.hemiLight.intensity=this.sunlightOn?1.4:.6),this.ambientFill&&(this.ambientFill.intensity=this.sunlightOn?.7:.35),this.sunlightOn}toggleNightMode(t){return this.nightModeOn=typeof t=="boolean"?t:!this.nightModeOn,this.nightModeOn?(this.toggleSunlight(!1),this.toggleCeilingLights(!1),this.toggleDeskLamp(!0),this.scene.background=new Et(659229),this.hemiLight&&(this.hemiLight.color.setHex(1976635),this.hemiLight.groundColor.setHex(132631),this.hemiLight.intensity=.45),this.ambientFill&&(this.ambientFill.intensity=.25),this.rimLight&&(this.rimLight.color.setHex(6333946),this.rimLight.intensity=2.4)):(this.toggleSunlight(!0),this.toggleCeilingLights(!0),this.toggleDeskLamp(!0),this.scene.background=new Et(1976635),this.hemiLight&&(this.hemiLight.color.setHex(16777215),this.hemiLight.groundColor.setHex(6583435),this.hemiLight.intensity=1.4),this.ambientFill&&(this.ambientFill.intensity=.7),this.rimLight&&(this.rimLight.color.setHex(3718648),this.rimLight.intensity=1.8)),this.nightModeOn}setLightingPreset(t){!this.keySpot||!this.hemiLight||!this.fillLight||(t==="warm_evening"?(this.keySpot.color.setHex(16707722),this.keySpot.intensity=3.2,this.fillLight.color.setHex(16486972),this.fillLight.intensity=1.8,this.hemiLight.color.setHex(16708551),this.hemiLight.groundColor.setHex(7877903),this.hemiLight.intensity=1.4,this.ambientFill&&(this.ambientFill.color.setHex(16708551),this.ambientFill.intensity=.75),this.rimLight&&(this.rimLight.color.setHex(16096779),this.rimLight.intensity=2)):t==="focus_studio"?(this.keySpot.color.setHex(16777215),this.keySpot.intensity=3.8,this.fillLight.color.setHex(14742270),this.fillLight.intensity=1.6,this.hemiLight.color.setHex(16777215),this.hemiLight.groundColor.setHex(3359061),this.hemiLight.intensity=1.25,this.ambientFill&&(this.ambientFill.color.setHex(16777215),this.ambientFill.intensity=.6),this.rimLight&&(this.rimLight.color.setHex(3718648),this.rimLight.intensity=2.4)):(this.keySpot.color.setHex(16772565),this.keySpot.intensity=3.2,this.fillLight.color.setHex(16777215),this.fillLight.intensity=1.85,this.hemiLight.color.setHex(16777215),this.hemiLight.groundColor.setHex(6583435),this.hemiLight.intensity=1.4,this.ambientFill&&(this.ambientFill.color.setHex(16775149),this.ambientFill.intensity=.7),this.rimLight&&(this.rimLight.color.setHex(3718648),this.rimLight.intensity=1.8)))}getLightingState(){return{ceilingLightsOn:this.ceilingLightsOn,deskLampOn:this.vanityLightsOn,sunlightOn:this.sunlightOn,nightModeOn:this.nightModeOn}}getClickableObjects(){return this.clickableObjects}_spawnConsultantNPC(){this.npc=new gr(this.scene,this.camera,{name:"Priya Sen",role:"Executive Image & Attire Coach"}),this.npc.setPosition(-2.2,0,-.6,.4)}getPlayerSpawn(){return{x:0,y:.16,z:0,rotationY:0}}update(t){this.npc&&this.npc.update(t)}destroy(){this.scene.fog=this.originalFog,this.scene.background=this.originalBg,this.npc&&this.npc.destroy(),this.lights.forEach(t=>this.group.remove(t)),this.disposables.forEach(t=>{t&&t.dispose&&t.dispose()}),this.scene.remove(this.group)}}class gp{constructor(){this.ctx=null,this.muted=!1}_ensureContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){if(this.muted||(this._ensureContext(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(800,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.05),e.gain.setValueAtTime(.12,this.ctx.currentTime),e.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.05),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.05)}playSwitchClick(t=!0){if(this.muted||(this._ensureContext(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),n=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(t?1200:850,e),i.frequency.exponentialRampToValueAtTime(140,e+.035),n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.001,e+.04),i.connect(n),n.connect(this.ctx.destination),i.start(e),i.stop(e+.04);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t?240:180,e+.006),r.frequency.exponentialRampToValueAtTime(65,e+.055),a.gain.setValueAtTime(.15,e+.006),a.gain.exponentialRampToValueAtTime(.001,e+.06),r.connect(a),a.connect(this.ctx.destination),r.start(e+.006),r.stop(e+.06)}playScoreSound(t){if(!this.muted&&(this._ensureContext(),!!this.ctx))if(t>=7)[523.25,659.25,783.99,1046.5].forEach((i,n)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain(),o=this.ctx.currentTime+n*.08;r.type="triangle",r.frequency.setValueAtTime(i,o),a.gain.setValueAtTime(.18,o),a.gain.exponentialRampToValueAtTime(.001,o+.28),r.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+.3)});else if(t>=4){const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(554.37,this.ctx.currentTime+.15),i.gain.setValueAtTime(.15,this.ctx.currentTime),i.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.2),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.2)}else{const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(180,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(120,this.ctx.currentTime+.22),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.22),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.22)}}}class _p{constructor(){this.canvas=document.getElementById("game-canvas"),this.totalScore=0,this.streakCount=0,this.currentScenario=null,this.weakTags=[],this.scenarioStep=1,this.isEvaluating=!1,this.audio=new gp,this._initThree(),this.physics=new op,this.aiBridge=new up,this.player=new ap(this.scene,this.camera,this.physics),this.activeScene=null,this.sceneName="interview_room",this.fpsCounter={frames:0,lastTime:performance.now(),fps:60},this._initRaycasting(),this._initUI(),this._initKeyboardHotkeys(),this.loadScene(this.sceneName),this.clock=new sp,this._animate=this._animate.bind(this),requestAnimationFrame(this._animate)}_initThree(){const t=window.innerWidth/window.innerHeight;this.camera=new De(75,t,.1,1e3),this.renderer=new La({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$o,this.renderer.outputColorSpace=pe,this.renderer.toneMapping=Jo,this.renderer.toneMappingExposure=1.32,this.scene=new tp,this.scene.background=new Et(11000060),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}_initRaycasting(){this.raycaster=new rp,this.mouse=new Yt,this.hoveredClickable=null,this.tooltipEl=document.getElementById("click-hover-tooltip"),this.tooltipTitleEl=document.getElementById("tooltip-title"),this.tooltipHintEl=document.getElementById("tooltip-hint"),window.addEventListener("pointermove",n=>{if(n.target&&n.target.closest&&n.target.closest(".interactive")){this._hideTooltip();return}if(!this.activeScene||!this.activeScene.getClickableObjects)return;const r=this.activeScene.getClickableObjects();if(!r||r.length===0){this._hideTooltip();return}const a=this.canvas.getBoundingClientRect();this.mouse.x=(n.clientX-a.left)/a.width*2-1,this.mouse.y=-((n.clientY-a.top)/a.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const o=r.map(c=>c.mesh).filter(Boolean),l=this.raycaster.intersectObjects(o,!0);if(l.length>0){const c=l[0],h=r.find(d=>{if(d.mesh===c.object)return!0;let f=c.object.parent;for(;f;){if(f===d.mesh)return!0;f=f.parent}return!1});if(h){this.hoveredClickable=h,this.canvas.style.cursor="pointer",this._showTooltip(n.clientX,n.clientY,h.name,h.hint);return}}this._hideTooltip()});let t=!1,e=0,i=!1;this.canvas.addEventListener("pointerdown",n=>{n.target&&n.target.closest&&n.target.closest(".interactive")||(t=!0,e=n.clientX,i=!1,this.canvas.style.cursor="grabbing")}),window.addEventListener("pointermove",n=>{if(t&&this.player){const r=n.clientX-e;e=n.clientX,Math.abs(r)>.4&&(i=!0,this.player.rotateTurntable(r*.012))}}),window.addEventListener("pointerup",n=>{if(t&&(t=!1,this.canvas.style.cursor="default"),!i&&this.hoveredClickable&&this.hoveredClickable.onClick){if(n.target&&n.target.closest&&n.target.closest(".interactive"))return;const r=this.hoveredClickable.onClick();this.audio.playSwitchClick(r!==!1),this._syncLightingHUD()}})}_showTooltip(t,e,i,n){this.tooltipEl&&(this.tooltipTitleEl&&(this.tooltipTitleEl.textContent=i||"Interactive Switch"),this.tooltipHintEl&&(this.tooltipHintEl.textContent=n||"Click to toggle"),this.tooltipEl.style.left=`${t}px`,this.tooltipEl.style.top=`${e}px`,this.tooltipEl.classList.add("visible"))}_hideTooltip(){this.hoveredClickable=null,this.canvas.style.cursor="default",this.tooltipEl&&this.tooltipEl.classList.remove("visible")}loadScene(t){this.activeScene&&(this.activeScene.destroy(),this.physics.clear(),this.activeScene=null),this.sceneName=t,this.scenarioStep=1,document.querySelectorAll(".map-travel-btn").forEach(a=>{a.classList.toggle("active",a.dataset.scene===t)});const e=document.getElementById("scene-select");e&&(e.value=t);const i=document.getElementById("office-minimap-hud");i&&i.classList.toggle("hidden",t!=="office_floor");const n=document.getElementById("npc-speaker-name");if(n&&(t==="interview_room"?n.textContent="Vikram Malhotra":t==="office_floor"?n.textContent="Aditi Sharma":n.textContent="Priya Sen"),t==="interview_room"){this.activeScene=new fp(this.scene,this.camera,this.physics),this.player.setCameraMode("interview");const a=document.getElementById("cam-mode-text");a&&(a.textContent="Cinematic"),document.body.classList.remove("studio-open")}else if(t==="office_floor"){this.activeScene=new pp(this.scene,this.camera,this.physics),this.player.setCameraMode("third_person");const a=document.getElementById("cam-mode-text");a&&(a.textContent="3rd Person"),document.body.classList.remove("studio-open")}else if(t==="wardrobe"){this.activeScene=new mp(this.scene,this.camera,this.physics,this.player),this.player.setCameraMode("wardrobe");const a=document.getElementById("cam-mode-text");a&&(a.textContent="Showcase");const o=document.getElementById("wardrobe-panel");o&&(o.classList.add("open"),document.body.classList.add("studio-open"));const l=document.getElementById("scenario-panel"),c=document.getElementById("dock-btn-text");l&&l.classList.add("compact-hud"),c&&(c.textContent="⏶ Expand")}const r=this.activeScene.getPlayerSpawn();this.player.teleport(r.x,r.y,r.z,r.rotationY),this._syncLightingHUD(),this._updateMapAmbientHeader(t),this.startScenario(this.aiBridge.getScenario(t))}_updateMapAmbientHeader(t){const e=document.getElementById("ambient-map-icon"),i=document.getElementById("ambient-map-title"),n=document.getElementById("ambient-map-subtitle"),r=document.getElementById("ambient-round-text"),a=document.getElementById("ambient-objective-text"),o=document.getElementById("ambient-telemetry-icon"),l=document.getElementById("ambient-telemetry-val"),c=document.getElementById("ambient-telemetry-lbl"),h=document.getElementById("npc-persona-avatar"),d=document.getElementById("npc-persona-name"),f=document.getElementById("npc-persona-role"),m=document.getElementById("npc-sentiment-dot");t==="interview_room"?(e&&(e.textContent="LOC"),i&&(i.textContent="EXECUTIVE BOARDROOM"),n&&(n.textContent="Technical & HR Mock Round 1"),r&&(r.textContent=`ROUND ${this.scenarioStep} / 3 • ARCHITECTURE`),a&&(a.textContent="Demonstrate technical problem ownership and structured STAR methodology."),o&&(o.textContent=""),l&&(l.textContent="72 BPM"),c&&(c.textContent="Composure: Calm"),h&&(h.textContent="VM"),d&&(d.textContent="Mr. Vikram Malhotra"),f&&(f.textContent="Senior Tech Director"),m&&(m.style.background="#38bdf8",m.title="Live Interlocutor Sentiment: Neutral / Evaluating")):t==="office_floor"?(e&&(e.textContent="LOC"),i&&(i.textContent="CORPORATE OPEN FLOOR"),n&&(n.textContent="Sprint 14 Standup & Alignment"),r&&(r.textContent="SPRINT 14 • COLLABORATION"),a&&(a.textContent="Walk to Colleague Aditi Sharma (Near Whiteboard) to review pull requests."),o&&(o.textContent=""),l&&(l.textContent="88% Synergy"),c&&(c.textContent="Team Rapport"),h&&(h.textContent="AS"),d&&(d.textContent="Aditi Sharma"),f&&(f.textContent="Staff Solutions Architect"),m&&(m.style.background="#10b981",m.title="Live Interlocutor Sentiment: Collaborative / Attentive")):t==="wardrobe"&&(e&&(e.textContent="LOC"),i&&(i.textContent="CANDIDATE STYLING STUDIO"),n&&(n.textContent="Tier-1 Placement Dress Code Audit"),r&&(r.textContent="THE 4 GOLDEN RULES OF ATTIRE"),a&&(a.textContent="Harmonize suit lapels, tie ratio, and leather footwear for campus day-1."),o&&(o.textContent=""),l&&(l.textContent="98% Fit"),c&&(c.textContent="Placement Ready"),h&&(h.textContent="PS"),d&&(d.textContent="Priya Sen"),f&&(f.textContent="Wardrobe Consultant"),m&&(m.style.background="#f59e0b",m.title="Live Interlocutor Sentiment: Stylistic Advisory"))}_renderOfficeMinimap(){if(this.sceneName!=="office_floor")return;const t=document.getElementById("minimap-canvas");if(!t)return;const e=t.getContext("2d");if(!e)return;const i=t.width,n=t.height,r=i/2,a=n/2,o=58;e.clearRect(0,0,i,n),e.strokeStyle="rgba(16, 185, 129, 0.22)",e.lineWidth=1,[18,38,o].forEach(E=>{e.beginPath(),e.arc(r,a,E,0,Math.PI*2),e.stroke()}),e.strokeStyle="rgba(16, 185, 129, 0.16)",e.beginPath(),e.moveTo(r-o,a),e.lineTo(r+o,a),e.moveTo(r,a-o),e.lineTo(r,a+o),e.stroke(),this._radarSweepAngle=(this._radarSweepAngle||0)+.045;const l=this._radarSweepAngle,c=l-.5,h=e.createRadialGradient(r,a,0,r,a,o);h.addColorStop(0,"rgba(16, 185, 129, 0.3)"),h.addColorStop(1,"rgba(16, 185, 129, 0.02)"),e.fillStyle=h,e.beginPath(),e.moveTo(r,a),e.arc(r,a,o,c,l),e.closePath(),e.fill(),e.strokeStyle="rgba(52, 211, 153, 0.85)",e.lineWidth=1.5,e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(l)*o,a+Math.sin(l)*o),e.stroke();const d=this.player?this.player.root.position.x:0,f=this.player?this.player.root.position.z:0,m=this.player?this.player.root.rotation.y:0,g=0,_=-6.8,p=g-d,u=_-f,b=Math.hypot(p,u),S=document.getElementById("minimap-target-text");S&&(S.textContent=`Aditi: ${b.toFixed(1)}m`);const w=7,R=p*w,A=u*w,C=Math.hypot(R,A);let z=r+R,v=a+A;if(C>o-5){const E=Math.atan2(A,R);z=r+Math.cos(E)*(o-5),v=a+Math.sin(E)*(o-5)}e.fillStyle="rgba(245, 158, 11, 0.35)",e.beginPath(),e.arc(z,v,7,0,Math.PI*2),e.fill(),e.fillStyle="#f59e0b",e.beginPath(),e.arc(z,v,3.5,0,Math.PI*2),e.fill(),e.save(),e.translate(r,a),e.rotate(-m+Math.PI),e.fillStyle="#38bdf8",e.beginPath(),e.moveTo(0,-6.5),e.lineTo(5,5),e.lineTo(0,2),e.lineTo(-5,5),e.closePath(),e.fill(),e.restore()}_syncLightingHUD(){if(!this.activeScene||!this.activeScene.getLightingState)return;const t=this.activeScene.getLightingState(),e=document.getElementById("btn-toggle-ceiling"),i=document.getElementById("pill-ceiling");e&&i&&(e.classList.toggle("active",t.ceilingLightsOn),e.classList.toggle("inactive",!t.ceilingLightsOn),i.className=t.ceilingLightsOn?"switch-pill on":"switch-pill off",i.textContent=t.ceilingLightsOn?"ON":"OFF");const n=document.getElementById("btn-toggle-desklamp"),r=document.getElementById("pill-desklamp");n&&r&&(n.classList.toggle("active",t.deskLampOn),n.classList.toggle("inactive",!t.deskLampOn),r.className=t.deskLampOn?"switch-pill on":"switch-pill off",r.textContent=t.deskLampOn?"ON":"OFF");const a=document.getElementById("btn-toggle-sunlight"),o=document.getElementById("pill-sunlight");a&&o&&(a.classList.toggle("active",t.sunlightOn),a.classList.toggle("inactive",!t.sunlightOn),o.className=t.sunlightOn?"switch-pill on":"switch-pill off",o.textContent=t.sunlightOn?"ON":"OFF");const l=document.getElementById("btn-toggle-nightmode"),c=document.getElementById("pill-nightmode");l&&c&&(l.classList.toggle("active",t.nightModeOn),l.classList.toggle("inactive",!t.nightModeOn),c.className=t.nightModeOn?"switch-pill on":"switch-pill off",c.textContent=t.nightModeOn?"ON":"OFF")}_updateAttireAuditUI(){if(!this.player||!this.player.getAttireAudit)return;const t=this.player.getAttireAudit(),e=document.getElementById("avatar-readiness-chip");e&&(e.textContent=`${t.score}% READY`,e.className=`readiness-chip ${t.score>=95?"optimal":""}`);const i=document.getElementById("hud-attire-val");i&&(i.textContent=`${t.score}% Ready`);const n=document.getElementById("attire-audit-list");n&&t.checks&&(n.innerHTML=t.checks.map(r=>`
        <li class="audit-item ${r.passed?"pass":"warn"}">
          <span class="audit-icon">${r.passed?"✓":"⚠️"}</span>
          <div>
            <strong>${r.name}:</strong>
            <span>${r.desc}</span>
          </div>
        </li>
      `).join(""))}setConsultantTip(t){const e=document.getElementById("consultant-tip-text");e&&(e.style.opacity="0",setTimeout(()=>{e.textContent=t,e.style.opacity="1"},120))}_populateDossierModal(){if(!this.player)return;const t=this.player.getAttireAudit?this.player.getAttireAudit():{score:98},e=this.player.customization||{},i=document.getElementById("dossier-score-num");i&&(i.textContent=`${t.score}%`);const n=document.getElementById("dossier-suit-val");if(n){const l=document.getElementById("jacket-val-chip");n.textContent=l?l.textContent:"Executive Navy"}const r=document.getElementById("dossier-shirt-val");if(r){const l=document.getElementById("shirt-val-chip");r.textContent=l?l.textContent:"Crisp White"}const a=document.getElementById("dossier-tie-val");a&&(a.textContent=e.hasTie?"Corporate Silk Tie (Harmonized)":"Smart Casual Open Collar");const o=document.getElementById("dossier-leather-val");if(o){const l=document.getElementById("shoes-val-chip");o.textContent=`${l?l.textContent:"Black Oxford"} & Matched Belt`}}_initUI(){document.querySelectorAll(".map-travel-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick();const U=T.dataset.scene;U&&U!==this.sceneName&&this.loadScene(U)})});const t=document.getElementById("scene-select");t&&(t.value=this.sceneName,t.addEventListener("change",T=>{this.audio.playClick(),this.loadScene(T.target.value)}));const e=document.getElementById("help-modal"),i=document.getElementById("help-toggle-btn"),n=document.getElementById("help-close-btn"),r=document.getElementById("help-gotit-btn"),a=()=>{this.audio.playClick(),e&&e.classList.toggle("active")};i&&i.addEventListener("click",a),n&&n.addEventListener("click",a),r&&r.addEventListener("click",a);const o=document.getElementById("lighting-select");o&&o.addEventListener("change",T=>{this.audio.playClick(),document.querySelectorAll(".tuner-btn").forEach(U=>{U.classList.toggle("active",U.dataset.light===T.target.value)}),this.activeScene&&this.activeScene.setLightingPreset&&this.activeScene.setLightingPreset(T.target.value)}),document.querySelectorAll(".tuner-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".tuner-btn").forEach(Z=>Z.classList.remove("active")),T.classList.add("active");const U=T.dataset.light;o&&(o.value=U),this.activeScene&&this.activeScene.setLightingPreset&&this.activeScene.setLightingPreset(U)})});const l=document.getElementById("scenario-dock-btn"),c=document.getElementById("dock-btn-text"),h=document.getElementById("scenario-panel");l&&h&&l.addEventListener("click",()=>{this.audio.playClick(),h.classList.toggle("compact-hud");const T=h.classList.contains("compact-hud");c&&(c.textContent=T?"⏶ Expand":"⏷ Dock")});const d=document.getElementById("cam-toggle-btn"),f=document.getElementById("cam-mode-text");d&&(f&&(f.textContent="Cinematic"),d.addEventListener("click",()=>{this.audio.playClick();const T=this.player.toggleCameraMode();f&&(T==="interview"?f.textContent="Cinematic":T==="first_person"?f.textContent="1st Person":T==="wardrobe"?f.textContent="Showcase":f.textContent="3rd Person"),d.classList.toggle("glass-btn-active",T==="interview")}));const m=document.getElementById("wardrobe-toggle-btn"),g=document.getElementById("wardrobe-panel"),_=document.getElementById("wardrobe-close-btn");m&&g&&m.addEventListener("click",()=>{this.audio.playClick(),g.classList.toggle("open"),document.body.classList.toggle("studio-open",g.classList.contains("open")),this._updateAttireAuditUI()}),_&&g&&_.addEventListener("click",()=>{this.audio.playClick(),g.classList.remove("open"),document.body.classList.remove("studio-open")});const p=T=>{document.querySelectorAll(".framing-btn").forEach(U=>{U.classList.toggle("active",U.dataset.focus===T)}),this.player&&this.player.setWardrobeFocus&&this.player.setWardrobeFocus(T)};document.querySelectorAll(".framing-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),p(T.dataset.focus)})});const u=document.getElementById("btn-save-outfit");u&&u.addEventListener("click",()=>{this.audio.playClick(),this.player&&this.player.customization&&(localStorage.setItem("elivet_candidate_attire",JSON.stringify(this.player.customization)),u.textContent="✓",setTimeout(()=>{u.textContent="💾"},1500),this.setConsultantTip("Tailored ensemble saved to your Student Placement Profile!"))});const b=document.getElementById("attire-dossier-modal"),S=document.getElementById("btn-open-dossier"),w=document.getElementById("dossier-close-btn"),R=document.getElementById("dossier-confirm-btn"),A=document.getElementById("dossier-print-btn");S&&b&&S.addEventListener("click",()=>{this.audio.playClick(),this._populateDossierModal(),b.classList.add("open")});const C=()=>{this.audio.playClick(),b&&b.classList.remove("open")};w&&w.addEventListener("click",C),R&&R.addEventListener("click",C),A&&A.addEventListener("click",()=>window.print()),document.querySelectorAll(".studio-tab-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".studio-tab-btn").forEach(Z=>Z.classList.remove("active")),document.querySelectorAll(".studio-tab-pane").forEach(Z=>Z.classList.remove("active")),T.classList.add("active");const U=document.getElementById(T.dataset.tab);U&&U.classList.add("active"),T.dataset.tab==="tab-face"?p("face"):T.dataset.tab==="tab-outfit"?p("torso"):T.dataset.tab==="tab-accessories"?p("shoes"):T.dataset.tab==="tab-presets"&&p("full")})}),document.querySelectorAll(".gender-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".gender-btn").forEach(U=>U.classList.remove("active")),T.classList.add("active"),this.player.setGender(T.dataset.gender),this.setConsultantTip(`${T.dataset.gender==="female"?"Female Executive":"Male Candidate"} silhouette tailored.`),this._updateAttireAuditUI()})});const z=document.getElementById("attire-style-select");document.querySelectorAll(".attire-card-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".attire-card-btn").forEach(Z=>Z.classList.remove("active")),T.classList.add("active");const U=T.dataset.style;this.player.setAttire(U),z&&(z.value=U),this.setConsultantTip(U==="formal"?"Business Formal suit provides the highest authority for panel and client interviews.":U==="smart_casual"?"Smart Casual polo & chinos is ideal for startup culture and product rounds.":"Tech Interview casual styling applied."),this._updateAttireAuditUI()})}),z&&z.addEventListener("change",T=>{const U=T.target.value;this.player.setAttire(U),document.querySelectorAll(".attire-card-btn").forEach(Z=>{Z.classList.toggle("active",Z.dataset.style===U)}),this._updateAttireAuditUI()}),document.querySelectorAll("#jacket-swatches .swatch-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll("#jacket-swatches .swatch-btn").forEach(Z=>Z.classList.remove("active")),T.classList.add("active"),this.player.setJacketColor(T.dataset.color);const U=document.getElementById("jacket-val-chip");U&&(U.textContent=T.dataset.name||T.dataset.color),this.setConsultantTip(`${T.dataset.name||"Jacket"} tailored blazer selected. Contrast pairing with lighter shirt recommended.`),this._updateAttireAuditUI()})}),document.querySelectorAll("#shirt-swatches .swatch-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll("#shirt-swatches .swatch-btn").forEach(Z=>Z.classList.remove("active")),T.classList.add("active"),this.player.setShirtColor(T.dataset.color);const U=document.getElementById("shirt-val-chip");U&&(U.textContent=T.dataset.name||T.dataset.color),this.setConsultantTip(`${T.dataset.name||"Shirt"} provides high contrast framing your face clearly on video calls.`),this._updateAttireAuditUI()})});const v=document.getElementById("tie-toggle-btn");v&&v.addEventListener("click",()=>{this.audio.playClick(),v.classList.toggle("active");const T=v.classList.contains("active");v.innerHTML=`<span class="toggle-indicator"></span> Tie ${T?"ON":"OFF"}`,this.player.setTieVisibility(T),this.setConsultantTip(T?"Tie anchored cleanly at collar tip with metallic tie bar.":"Open collar smart casual styling applied."),this._updateAttireAuditUI()}),document.querySelectorAll("#tie-swatches .swatch-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll("#tie-swatches .swatch-btn").forEach(U=>U.classList.remove("active")),T.classList.add("active"),this.player.setTieColor(T.dataset.color),this.player.setTieVisibility(!0),v&&(v.classList.add("active"),v.innerHTML='<span class="toggle-indicator"></span> Tie ON'),this.setConsultantTip(`${T.dataset.name||"Tie"} selected. Tip aligns precisely at the belt buckle center.`),this._updateAttireAuditUI()})}),document.querySelectorAll("#pants-swatches .swatch-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll("#pants-swatches .swatch-btn").forEach(Z=>Z.classList.remove("active")),T.classList.add("active"),this.player.setPantsColor(T.dataset.color);const U=document.getElementById("pants-val-chip");U&&(U.textContent=T.dataset.name||T.dataset.color),this.setConsultantTip(`Trousers set to ${T.dataset.name||T.dataset.color}. Clean drape with no break.`),this._updateAttireAuditUI()})}),document.querySelectorAll(".palette-swatches .swatch-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".palette-swatches .swatch-btn").forEach(Z=>Z.classList.remove("active")),T.classList.add("active"),this.player.setSkinTone(T.dataset.skin);const U=document.getElementById("skin-val-chip");U&&(U.textContent=T.dataset.name||T.dataset.skin)})}),document.querySelectorAll(".hair-style-grid .pill-option-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".hair-style-grid .pill-option-btn").forEach(U=>U.classList.remove("active")),T.classList.add("active"),this.player.setHairStyle(T.dataset.hairstyle),this.setConsultantTip(`${T.textContent.trim()} grooming applied. Clean facial silhouette framed.`)})}),document.querySelectorAll("#hair-swatches .swatch-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll("#hair-swatches .swatch-btn").forEach(Z=>Z.classList.remove("active")),T.classList.add("active"),this.player.setHairColor(T.dataset.color);const U=document.getElementById("haircolor-val-chip");U&&(U.textContent=T.dataset.name||T.dataset.color)})}),document.querySelectorAll(".shoes-card-grid .shoe-card-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".shoes-card-grid .shoe-card-btn").forEach(Z=>Z.classList.remove("active")),T.classList.add("active"),this.player.setShoesColor(T.dataset.color);const U=document.getElementById("shoes-val-chip");U&&(U.textContent=T.dataset.name),this.setConsultantTip(`${T.dataset.name} finish selected. Belt leather tone automatically synchronized (Belt & Shoe Rule).`),this._updateAttireAuditUI()})}),document.querySelectorAll(".eyewear-grid .pill-option-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".eyewear-grid .pill-option-btn").forEach(U=>U.classList.remove("active")),T.classList.add("active"),this.player.setGlasses(T.dataset.glasses),this.setConsultantTip(`Eyewear updated to ${T.textContent.trim()}. Anti-reflective executive frames project analytical depth.`)})}),document.querySelectorAll(".watch-grid .pill-option-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick(),document.querySelectorAll(".watch-grid .pill-option-btn").forEach(U=>U.classList.remove("active")),T.classList.add("active"),this.player.setWatch(T.dataset.watch),this.setConsultantTip(`Wristwatch set to ${T.textContent.trim()}. Subtly conveys punctuality and executive presence.`)})}),document.querySelectorAll(".preset-card-btn").forEach(T=>{T.addEventListener("click",()=>{this.audio.playClick();const U=T.dataset.preset,Z=this.player.applyPreset(U);Z&&(document.querySelectorAll(".attire-card-btn").forEach(ht=>{ht.classList.toggle("active",ht.dataset.style===Z.attireStyle)}),document.querySelectorAll("#jacket-swatches .swatch-btn").forEach(ht=>{ht.classList.toggle("active",ht.dataset.color.toLowerCase()===Z.jacketColor.toLowerCase())}),document.querySelectorAll("#shirt-swatches .swatch-btn").forEach(ht=>{ht.classList.toggle("active",ht.dataset.color.toLowerCase()===Z.shirtColor.toLowerCase())}),document.querySelectorAll("#tie-swatches .swatch-btn").forEach(ht=>{ht.classList.toggle("active",ht.dataset.color.toLowerCase()===Z.tieColor.toLowerCase())}),document.querySelectorAll(".shoes-card-grid .shoe-card-btn").forEach(ht=>{ht.classList.toggle("active",ht.dataset.color.toLowerCase()===Z.shoesColor.toLowerCase())}),document.querySelectorAll(".watch-grid .pill-option-btn").forEach(ht=>{ht.classList.toggle("active",ht.dataset.watch===Z.watch)}),document.querySelectorAll(".eyewear-grid .pill-option-btn").forEach(ht=>{ht.classList.toggle("active",ht.dataset.glasses===Z.glasses)}),this.setConsultantTip(`Preset applied: ${Z.label}. ${Z.ruleSummary}`),this._updateAttireAuditUI())})});const E=document.getElementById("turntable-left-btn"),k=document.getElementById("turntable-reset-btn"),B=document.getElementById("turntable-right-btn");E&&E.addEventListener("click",()=>{this.audio.playClick(),this.player.rotateTurntable(-Math.PI/4)}),k&&k.addEventListener("click",()=>{this.audio.playClick(),this.player.resetTurntable()}),B&&B.addEventListener("click",()=>{this.audio.playClick(),this.player.rotateTurntable(Math.PI/4)});const J=document.getElementById("audio-toggle-btn");J&&J.addEventListener("click",()=>{this.audio.muted=!this.audio.muted,J.textContent=this.audio.muted?"🔇 Muted":"🔊 SFX",J.classList.toggle("glass-btn-active",!this.audio.muted)});const P=document.getElementById("lighting-toggle-btn"),N=document.getElementById("lighting-switches"),W=document.getElementById("lighting-close-btn");P&&N&&P.addEventListener("click",T=>{T.stopPropagation(),this.audio.playClick();const U=N.classList.contains("hidden");N.classList.toggle("hidden",!U),P.classList.toggle("glass-btn-active",U)}),W&&N&&W.addEventListener("click",T=>{T.stopPropagation(),this.audio.playClick(),N.classList.add("hidden"),P&&P.classList.remove("glass-btn-active")}),document.addEventListener("click",T=>{N&&!N.classList.contains("hidden")&&!N.contains(T.target)&&(!P||!P.contains(T.target))&&(N.classList.add("hidden"),P&&P.classList.remove("glass-btn-active"))});const Y=document.getElementById("btn-toggle-ceiling");Y&&Y.addEventListener("click",()=>{if(this.activeScene&&this.activeScene.toggleCeilingLights){const T=this.activeScene.toggleCeilingLights();this.audio.playSwitchClick(T),this._syncLightingHUD()}});const j=document.getElementById("btn-toggle-desklamp");j&&j.addEventListener("click",()=>{if(this.activeScene&&this.activeScene.toggleDeskLamp){const T=this.activeScene.toggleDeskLamp();this.audio.playSwitchClick(T),this._syncLightingHUD()}});const $=document.getElementById("btn-toggle-sunlight");$&&$.addEventListener("click",()=>{if(this.activeScene&&this.activeScene.toggleSunlight){const T=this.activeScene.toggleSunlight();this.audio.playSwitchClick(T),this._syncLightingHUD()}});const q=document.getElementById("btn-toggle-nightmode");q&&q.addEventListener("click",()=>{if(this.activeScene&&this.activeScene.toggleNightMode){const T=this.activeScene.toggleNightMode();this.audio.playSwitchClick(T),this._syncLightingHUD()}}),document.querySelectorAll(".choice-btn").forEach(T=>{T.addEventListener("click",U=>{const Z=T.dataset.choice;Z&&!this.isEvaluating&&(this.audio.playClick(),this.handlePlayerChoice(Z))})});const rt=document.getElementById("modal-next-btn");rt&&rt.addEventListener("click",()=>{this.audio.playClick(),this.advanceToNextScenario()}),this._updateAttireAuditUI()}_initKeyboardHotkeys(){window.addEventListener("keydown",t=>{if(t.target.tagName==="INPUT"||t.target.tagName==="SELECT")return;const e=document.getElementById("checkpoint-modal");if(e&&e.classList.contains("active")){(t.code==="Space"||t.code==="Enter")&&(t.preventDefault(),this.audio.playClick(),this.advanceToNextScenario());return}if(t.code==="KeyC"){const n=document.getElementById("cam-toggle-btn");n&&n.click();return}if(t.code==="KeyT"){const n=document.getElementById("wardrobe-toggle-btn");n&&n.click();return}if(t.code==="Escape"){const n=document.getElementById("lighting-switches"),r=document.getElementById("lighting-toggle-btn");if(n&&!n.classList.contains("hidden")){n.classList.add("hidden"),r&&r.classList.remove("glass-btn-active");return}const a=document.getElementById("wardrobe-panel");a&&a.classList.remove("open");const o=document.getElementById("help-modal");o&&o.classList.remove("active");const l=document.getElementById("attire-dossier-modal");l&&l.classList.remove("open");return}if(t.code==="KeyH"){const n=document.getElementById("help-modal");n&&n.classList.toggle("active");return}if(t.code==="KeyL"){const n=document.getElementById("btn-toggle-ceiling");n&&n.click();return}if(t.code==="KeyJ"){const n=document.getElementById("btn-toggle-desklamp");n&&n.click();return}if(t.code==="KeyK"){const n=document.getElementById("btn-toggle-sunlight");n&&n.click();return}if(t.code==="KeyN"){const n=document.getElementById("btn-toggle-nightmode");n&&n.click();return}this.isEvaluating||(t.code==="Digit1"||t.code==="KeyA"?(this.audio.playClick(),this.handlePlayerChoice("A")):t.code==="Digit2"||t.code==="KeyB"?(this.audio.playClick(),this.handlePlayerChoice("B")):t.code==="Digit3"&&(this.audio.playClick(),this.handlePlayerChoice("C")))})}startScenario(t){if(!t)return;this.currentScenario=t,this.isEvaluating=!1;const e=document.getElementById("scenario-id-label"),i=document.getElementById("scenario-step-indicator"),n=document.getElementById("situation-text"),r=document.getElementById("choice-a-label"),a=document.getElementById("choice-b-label"),o=document.getElementById("choice-c-label");e&&(e.textContent=t.id),i&&(i.textContent=`Scenario ${this.scenarioStep}`),n&&(n.textContent=t.situation),r&&(r.textContent=t.choiceA),a&&(a.textContent=t.choiceB),o&&(o.textContent=t.choiceC);const l=document.getElementById("scenario-avatar-emoji"),c=document.getElementById("scenario-speaker-name"),h=document.getElementById("scenario-speaker-role"),d=document.getElementById("scenario-tone-badge");this.sceneName==="interview_room"?(l&&(l.textContent="👔"),c&&(c.textContent="Vikram Malhotra"),h&&(h.textContent="Senior Technical Director"),d&&(d.textContent="STAR Inquiring")):this.sceneName==="office_floor"?(l&&(l.textContent="👩‍💻"),c&&(c.textContent="Aditi Sharma"),h&&(h.textContent="Staff Solutions Architect"),d&&(d.textContent="Sprint Standup")):(l&&(l.textContent="🪞"),c&&(c.textContent="Priya Sen"),h&&(h.textContent="Placement Style Consultant"),d&&(d.textContent="Dress Code Audit")),["choice-a-badge","choice-b-badge","choice-c-badge"].forEach(f=>{const m=document.getElementById(f);m&&(m.textContent="",m.style.display="none",m.className="choice-category-badge")}),this.activeScene&&this.activeScene.npc&&this.activeScene.npc.say("Review the scenario and choose your best response.")}async handlePlayerChoice(t){if(this.isEvaluating||!this.currentScenario)return;if(this.isEvaluating=!0,this.currentScenario&&this.currentScenario.scores){const a=(o,l)=>{const c=document.getElementById(o);c&&(c.style.display="inline-block",l>=8?(c.textContent="STAR Recommended",c.className="choice-category-badge star"):l<=3?(c.textContent="Avoidable Pitfall",c.className="choice-category-badge avoidable"):(c.textContent="Suboptimal Choice",c.className="choice-category-badge shortcut"))};a("choice-a-badge",this.currentScenario.scores.A||5),a("choice-b-badge",this.currentScenario.scores.B||5),a("choice-c-badge",this.currentScenario.scores.C||5)}document.querySelectorAll(".choice-btn").forEach(a=>{a.classList.remove("selected"),a.dataset.choice===t&&a.classList.add("selected")});const i={scene:this.sceneName,scenario_id:this.currentScenario.id,player_choice:t,score_so_far:this.totalScore,weak_tags:this.weakTags},n=await this.aiBridge.evaluateChoice(i);this.activeScene&&this.activeScene.npc&&this.activeScene.npc.react(n.npc_reaction,n.feedback);const r=n.score_delta||0;this.audio.playScoreSound(r),this.totalScore+=r,r>=7?this.streakCount++:this.streakCount=0,this._updateScoreHUD(),this._showCheckpointModal(n),this._pendingNextScenario=n.next_scenario}_updateScoreHUD(){const t=document.getElementById("hud-score"),e=document.getElementById("hud-streak-val");t&&(t.textContent=this.totalScore),e&&(e.textContent=this.streakCount)}_showCheckpointModal(t){const e=document.getElementById("checkpoint-modal");if(!e)return;const i=document.getElementById("modal-score-circle"),n=document.getElementById("modal-feedback-title"),r=document.getElementById("modal-feedback-text"),a=document.getElementById("modal-tip-text"),o=document.getElementById("modal-grade-ribbon"),l=document.getElementById("modal-xp-val"),c=document.getElementById("modal-streak-val"),h=t.score_delta||0;if(i&&(i.textContent=h>0?`+${h}`:`${h}`,i.className=`score-circle ${h>=7?"positive":h>=4?"neutral":"negative"}`),o&&(h>=8?(o.textContent="🏆 GRADE A+ • OUTSTANDING STAR",o.className="modal-grade-ribbon grade-a"):h>=4?(o.textContent="⚡ GRADE B • DEVELOPING",o.className="modal-grade-ribbon grade-b"):(o.textContent="⚠️ REVISE • AVOIDABLE BLUNDER",o.className="modal-grade-ribbon grade-c")),l){const d=this.currentScenario&&this.currentScenario.weak_tag?this.currentScenario.weak_tag.replace(/_/g," "):"Placement";l.textContent=`+${Math.max(6,h*2)} XP ${d.toUpperCase()}`}c&&(c.textContent=`🔥 ${Math.max(1,this.streakCount)}x Multiplier Active`),n&&(n.textContent=h>=7?"Outstanding Response!":h>=4?"Good Foundation":"Room for Growth"),r&&(r.textContent=t.feedback),a&&(a.textContent=t.tip),e.classList.add("active")}_hideCheckpointModal(){const t=document.getElementById("checkpoint-modal");t&&t.classList.remove("active")}advanceToNextScenario(){if(this._hideCheckpointModal(),this.scenarioStep++,this._pendingNextScenario){const t=this.aiBridge.getScenario(this.sceneName,this._pendingNextScenario);this.startScenario(t)}else this.scenarioStep=1,this.startScenario(this.aiBridge.getScenario(this.sceneName))}_animate(){requestAnimationFrame(this._animate);const t=Math.min(this.clock.getDelta(),.1);this.player.update(t),this.activeScene&&this.activeScene.update(t),this.renderer.render(this.scene,this.camera),this._updatePerfCounter(),this._renderOfficeMinimap()}_updatePerfCounter(){this.fpsCounter.frames++;const t=performance.now();if(t-this.fpsCounter.lastTime>=1e3){this.fpsCounter.fps=this.fpsCounter.frames,this.fpsCounter.frames=0,this.fpsCounter.lastTime=t;const e=this.renderer.info.render.calls,i=this.renderer.info.render.triangles,n=document.getElementById("perf-display");n&&(n.textContent=`${this.fpsCounter.fps} FPS | ${e} DC | ${i} Tris`)}}}window.addEventListener("DOMContentLoaded",()=>{new _p});
