"use strict";this.default_panel=this.default_panel||{};(function(_){var window=this;
try{
var aa,ba,ca,da;for(_.h,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global?window.global:this,ca=["String","prototype","repeat"],da=0;da<ca.length-1;da++){var ea=ca[da];ea in ba||(ba[ea]={});ba=ba[ea]}
var fa=ca[ca.length-1],ga=ba[fa],ha=ga?ga:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new window.RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};ha!=ga&&null!=ha&&aa(ba,fa,{configurable:!0,writable:!0,value:ha});_.ia=_.ia||{};_.l=this;_.ja="closure_uid_"+(1E9*Math.random()>>>0);_.m=Date.now||function(){return+new Date};

}catch(e){_._DumpException(e)}
try{
window.addEventListener("load",function(){window.chrome.runtime.getBackgroundPage(function(a){a.__onPanelLoad(window)})},!1);
}catch(e){_._DumpException(e)}
}).call(this,this.default_panel);
// Google Inc.
