!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.dropins_sdk_v2=o():e.dropins_sdk_v2=o()}("undefined"!=typeof self?self:this,function(){return function(e){function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n={};return o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=5)}([function(e,o,n){"use strict";function r(e,o){return"width="+e+",height="+o+",left="+(window.screenX+((window.outerWidth||document.documentElement.offsetWidth)-e)/2)+",top="+(window.screenY+((window.outerHeight||document.documentElement.offsetHeight)-o)/2)}function t(e,o,n){return e+(-1===e.indexOf("?")?"?":"&")+o+"="+n}function i(e){return t(e,"version",encodeURIComponent(Dropbox.VERSION))}function s(e,o){var n=encodeURIComponent(window.location.protocol+"//"+window.location.host),r=encodeURIComponent(Dropbox.appKey),s=encodeURIComponent(e.linkType||""),a=encodeURIComponent(e._trigger||"js"),l=Boolean(e.multiselect),c=encodeURIComponent(b(e.extensions,"join",function(e){return e.join(" ")})||""),u=Boolean(e.folderselect);o=Boolean(o);var d=Dropbox.baseUrl+"/chooser?origin="+n+"&app_key="+r+"&link_type="+s+"&trigger="+a+"&multiselect="+l+"&extensions="+c+"&folderselect="+u+"&iframe="+o;return null!=e.initialNavigation&&(null!=e.initialNavigation.mode&&(d=t(d,"initial_navigation_mode",encodeURIComponent(e.initialNavigation.mode))),null!=e.initialNavigation.role&&(d=t(d,"initial_navigation_role",encodeURIComponent(e.initialNavigation.role))),e.initialNavigation.cursor&&(d=t(d,"initial_navigation_cursor",encodeURIComponent(e.initialNavigation.cursor)))),null!=e.fields&&(d=t(d,"fields",encodeURIComponent("function"==typeof e.fields.join?e.fields.join(" "):void 0))),!1===e.showSignOut&&(d=t(d,"show_sign_out","false")),i(d)}function a(){/\bTrident\b/.test(navigator.userAgent)&&null!=document.body&&null==o.ieframe&&(o.ieframe=document.createElement("iframe"),o.ieframe.setAttribute("id","dropbox_xcomm"),o.ieframe.setAttribute("src",Dropbox.baseUrl+"/static/api/1/xcomm.html"),o.ieframe.style.display="none",document.body.appendChild(o.ieframe))}function l(e){var n={options:x({},e,{success:function(r,t){"function"==typeof e.success&&e.success(r,t),o.currentChooserSession===n&&(o.currentChooserSession=null)},cancel:function(r){"function"==typeof e.cancel&&e.cancel(r),o.currentChooserSession===n&&(o.currentChooserSession=null)}})};return o.currentChooserSession=n,n}function c(e){var o=document.createElement("iframe");return o.src="about:blank",o._postAction=e,o.name="dropbox-dropins",o.style.display="block",o.style.backgroundColor="white",o.style.border="none",o}function u(e,o,n){if(e._fetch_url_on_save){var r=e.fetch_urls_fn;"function"!=typeof r&&"function"==typeof e.error&&e.error("Something went wrong, file url callback not provided."),r(n,o)}}function d(e,o){var n,r=encodeURIComponent(Dropbox.appKey),t=Dropbox.baseUrl+"/dropins/job_status?job="+o+"&app_key="+r;t=i(t);var s=function(o){"COMPLETE"===o.status?("function"==typeof e.progress&&e.progress(1),"function"==typeof e.success&&e.success()):"PENDING"===o.status||"DOWNLOADING"===o.status?(null!=o.progress&&"function"==typeof e.progress&&e.progress(o.progress/100),setTimeout(n,1500)):"FAILED"===o.status&&"function"==typeof e.error&&e.error(o.error)};if("withCredentials"in new XMLHttpRequest)n=function(){var o=new XMLHttpRequest;return o.onload=function(){return s(JSON.parse(o.responseText))},o.onerror=function(){return"function"==typeof e.error?e.error():void 0},o.open("GET",t,!0),o.send()};else if(Dropbox.disableJSONP){if("undefined"==typeof XDomainRequest||null===XDomainRequest||"https:"!==document.location.protocol)throw new Error("Unable to find suitable means of cross domain communication");n=function(){var o=new XDomainRequest;return o.onload=function(){return s(JSON.parse(o.responseText))},o.onerror=function(){return"function"==typeof e.error?e.error():void 0},o.open("get",t),o.send()}}else n=function(){var o="DropboxJsonpCallback"+h++,n=!1;window[o]=function(e){return n=!0,s(e)};var r=document.createElement("script");return r.src=t+"&callback="+o,r.onreadystatechange=function(){if("loaded"===r.readyState)return n||"function"==typeof e.error&&e.error(),null!=r.parentNode?r.parentNode.removeChild(r):void 0},document.getElementsByTagName("head")[0].appendChild(r)};return"function"==typeof e.progress&&e.progress(0),n()}function p(e,n,r){var t,i=JSON.parse(e.data);switch(t=null!=o.ieframe&&r._popup?o.ieframe.contentWindow:e.source,i.method){case"origin_request":e.source.postMessage(JSON.stringify({method:"origin"}),Dropbox.baseUrl);break;case"ready":if(null!=r.files){var s=void 0;if(r._fetch_url_on_save){for(var a=[],l=0;l<r.files.length;l++){var c=r.files[l];a.push({filename:c.filename})}s=JSON.stringify({method:"files_with_callback",params:a})}else s=JSON.stringify({method:"files",params:r.files});if(t.postMessage(s,Dropbox.baseUrl),null!=r._ews_auth_token){var p=JSON.stringify({method:"ews_auth_token",params:{ews_auth_token:r._ews_auth_token}});t.postMessage(p,Dropbox.baseUrl)}}"function"==typeof r.ready&&r.ready();break;case"files_selected":case"files_saved":"function"==typeof n&&n(),"function"==typeof r.success&&r.success(i.params,o.last_navigation);break;case"cursor_changed":o.last_navigation={cursor:i.params};break;case"progress":"function"==typeof r.progress&&r.progress(i.params);break;case"close_dialog":"function"==typeof n&&n(),"function"==typeof r.cancel&&r.cancel(o.last_navigation);break;case"web_session_error":"function"==typeof n&&n(),"function"==typeof r.webSessionFailure&&r.webSessionFailure();break;case"web_session_unlinked":"function"==typeof n&&n(),"function"==typeof r.webSessionUnlinked&&r.webSessionUnlinked();break;case"resize":"function"==typeof r.resize&&r.resize(i.params);break;case"error":"function"==typeof n&&n(),"function"==typeof r.error&&r.error(i.params);break;case"job_id":"function"==typeof n&&n(),d(r,i.params);break;case"save_callback":var f=function(e){if(null==e)throw new Error("Please supply {urls: [...]} to success callback");if(null!=e.url&&null!=e.urls)throw new Error("Do not pass both url and urls to the save callback");if(null!=e.url&&(e.urls=[e.url]),null==e.urls)throw new Error("Please supply {urls: [...]} to success callback");return i={method:"continue_saving",params:{download_urls:e.urls}},void t.postMessage(JSON.stringify(i),Dropbox.baseUrl)};u(r,i.params,f);break;case"_debug_log":"undefined"!=typeof console&&null!==console&&console.log(i.params.msg)}}function f(){var e=encodeURIComponent(window.location.protocol+"//"+window.location.host),o=encodeURIComponent(Dropbox.appKey);return i(Dropbox.baseUrl+"/saver?origin="+e+"&app_key="+o)}function b(e,o,n){return void 0!==e&&null!==e&&"function"==typeof e[o]?n(e,o):void 0}function m(e,o){return void 0!==e&&null!==e?o(e):void 0}function g(){o.last_navigation={},o.ieframe=null,o.currentChooserSession=null,h=1,null==Dropbox.baseUrl&&(Dropbox.baseUrl="https://www.dropbox.com"),null==Dropbox.blockBaseUrl&&(Dropbox.blockBaseUrl="https://dl-web.dropbox.com"),Dropbox.addListener=function(e,o,n){e.addEventListener?e.addEventListener(o,n,!1):e.attachEvent("on"+o,function(e){return e.preventDefault=function(){return!1},n(e)})},Dropbox.removeListener=function(e,o,n){e.removeEventListener?e.removeEventListener(o,n,!1):e.detachEvent("on"+o,n)},Dropbox.createChooserWidget=function(e){var o=l(e),n=c(s(o.options,!0));return n._handler=function(e){e.source===n.contentWindow&&e.origin===Dropbox.baseUrl&&p(e,null,o.options)},Dropbox.addListener(window,"message",n._handler),n},Dropbox.cleanupWidget=function(e){if(!e._handler)throw new Error("Invalid widget!");Dropbox.removeListener(window,"message",e._handler),delete e._handler}}var x=this&&this.__assign||Object.assign||function(e){for(var o,n=1,r=arguments.length;n<r;n++){o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e};Object.defineProperty(o,"__esModule",{value:!0}),null==window.Dropbox&&(window.Dropbox={});var h;o.popupDimensionsString=r,o.chooserUrl=s,o.createIEFrame=a,o.createChooserSession=l,o.createWidgetElement=c,o.handleJobId=d,o.handleMessageEvent=p,o.saverUrl=f,o.__guardMethod__=b,o.__guard__=m,o.initModule=g},function(e,o,n){"use strict";function r(e,o){null!=o?o.innerHTML="":(o=document.createElement("a"),o.href="#"),o.className+=" dropbox-dropin-btn",Dropbox.isBrowserSupported()?o.className+=" dropbox-dropin-default":o.className+=" dropbox-dropin-disabled";var n=document.createElement("span");return n.className="dropin-btn-status",o.appendChild(n),e=document.createTextNode(e),o.appendChild(e),o}function t(e){e.replace(/\/+$/g,"").split("/").pop()}function i(e){var o=document.createElement("a");return o.href=e,t(o.pathname)}function s(){a.initModule(),null==Dropbox.appKey&&(Dropbox.appKey=a.__guard__(document.getElementById("dropboxjs"),function(e){return e.getAttribute("data-app-key")})),Dropbox.init=function(e){null!=e.translation_function&&(d=e.translation_function),null!=e.appKey&&(Dropbox.appKey=e.appKey)};var e=function(e){var o,n,r;if("string"==typeof e[0])r=e.shift(),o="string"==typeof e[0]?e.shift():i(r),n=e.shift()||{},n.files=[{url:r,filename:o}];else{if(null==(n=e.shift()))throw new Error("Missing arguments. See documentation.");if((null==n.files||!n.files.length)&&"function"!=typeof n.files)throw new Error("Missing files. See documentation.");if(null!=n.fetch_urls_fn){if("function"!=typeof n.fetch_urls_fn)throw new Error("fetch_urls_fn must be a function if supplied.  See documentation.");n._fetch_url_on_save=!0}for(var t=0;t<n.files.length;t++){var s=n.files[t];if("function"==typeof s.url&&(n._fetch_url_on_save=!0,n.fetch_urls_fn=s.url,s.url=null,t>0))throw new Error("Old style url as callback is only supported for single files.");s.filename||(s.filename=i(s.url))}}return n};Dropbox.save=function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];var t=e(o);if(!Dropbox.isBrowserSupported())return void alert(d("Your browser does not support the Dropbox Saver"));if(t._popup=!0,"object"!=typeof t.files||!t.files.length)throw new Error("The object passed in must have a 'files' property that contains a list of objects. See documentation.");if(t.iframe&&!t.windowName)throw new Error("Dropbox.save does not yet support creating its own iframe.                       windowName must be provided when the iframe option is present.");for(var i=0,s=t.files;i<s.length;i++){var l=s[i];if(t._fetch_url_on_save){if(t.fetch_urls_fn){if(null!=l.url)throw new Error("You passed in a 'fetch_urls_fn' option to specify the file URLs.  Don't include individual URLs in each file objects.")}else if("function"!=typeof l.url)throw new Error("File urls should be all urls, or a single file with function. See documentation.")}else if("string"!=typeof l.url)throw new Error("File urls to download incorrectly configured. Each file must have a url. See documentation.")}var c=a.popupDimensionsString(735,670);return n(a.saverUrl(),c,t).window};var n=function(e,o,n){var r=function(){l.closed||(l.close(),l.postMessage(JSON.stringify({method:"close"}),Dropbox.baseUrl)),Dropbox.removeListener(window,"message",t),clearInterval(c)},t=function(e){e.source!==l&&e.source!==(void 0!==a.ieframe&&null!==a.ieframe?a.ieframe.contentWindow:void 0)||a.handleMessageEvent(e,r,n)},i=function(){(function(){try{return l.closed}catch(e){}})()&&(r(),"function"==typeof n.cancel&&n.cancel(a.last_navigation))},s=n.iframe?"":o+",resizable,scrollbars",l=window.open(e,n.windowName||"dropbox",s);if(!l)throw new Error("Failed to open/load the window. Dropbox.choose and Dropbox.save should only be called from within a user-triggered event handler such as a tap or click event.");l.focus();var c=setInterval(i,100);return Dropbox.addListener(window,"message",t),{window:l,onClose:r}},t=function(e){null==e.success&&a.__guardMethod__(console,"warn",function(e){return e.warn("You must provide a success callback to the Chooser to see the files that the user selects")});var o=function(){return a.__guardMethod__(console,"warn",function(e){return e.warn("The provided list of extensions or file types is not valid. See Chooser documentation: "+c)}),a.__guardMethod__(console,"warn",function(e){return e.warn("Available file types are: "+u.join(", "))}),delete e.extensions};if(null!=e.extensions&&null!=Array.isArray)if(Array.isArray(e.extensions))for(var n=0,r=e.extensions;n<r.length;n++){var t=r[n];t.match(/^\.[\.\w$#&+@!()\-'`_~]+$/)||-1!==u.indexOf(t)||o()}else o();return e},s=function(e){if(!Dropbox.isBrowserSupported())return void alert(d("Your browser does not support the Dropbox Chooser"));var o=a.createChooserSession(e);if(e.iframe&&!e.windowName){var r=a.createWidgetElement(a.chooserUrl(e,!0));r.style.width="735px",r.style.height="552px",r.style.margin="125px auto 0 auto",r.style.border="1px solid #ACACAC",r.style.boxShadow="rgba(0, 0, 0, .2) 0px 4px 16px";var t=document.createElement("div");t.style.position="fixed",t.style.left=t.style.right=t.style.top=t.style.bottom="0",t.style.zIndex="1000",t.style.backgroundColor="rgba(160, 160, 160, 0.2)",t.appendChild(r),document.body.appendChild(t);var i=function(e){e.source===r.contentWindow&&(o.onClose=function(){document.body.removeChild(t),Dropbox.removeListener(window,"message",i)},a.handleMessageEvent(e,o.onClose,o.options))};Dropbox.addListener(window,"message",i)}else{var s=a.popupDimensionsString(735,552);o.onClose=n(a.chooserUrl(o.options,o.options.iframe),s,o.options).onClose}};Dropbox.choose=function(e){null==e&&(e={}),e=t(e),s(e)},Dropbox.cancelChooser=function(){a.currentChooserSession&&(a.currentChooserSession.onClose&&a.currentChooserSession.onClose(),a.currentChooserSession.options.cancel&&a.currentChooserSession.options.cancel(a.last_navigation))};var l=function(){for(var e=0,o=[/IEMobile\/(7|8|9|10)\./,/BB10;/,/CriOS/];e<o.length;e++)if(o[e].test(navigator.userAgent))return!1;return"undefined"!=typeof JSON&&null!==JSON&&null!=window.postMessage&&null!=window.addEventListener&&!/MSIE [7-9]/.test(navigator.userAgent)};Dropbox.isBrowserSupported=function(){var e=l();return Dropbox.isBrowserSupported=function(){return e},e},Dropbox.createChooseButton=function(e){null==e&&(e={}),e=t(e);var o=r(d("Choose from Dropbox"));return Dropbox.addListener(o,"click",function(n){n.preventDefault(),s({success:function(n,r){o.className="dropbox-dropin-btn dropbox-dropin-success","function"==typeof e.success&&e.success(n,r)},cancel:e.cancel,linkType:e.linkType,multiselect:e.multiselect,folderselect:e.folderselect,extensions:e.extensions,iframe:e.iframe,_trigger:"button"})}),o},Dropbox.createSaveButton=function(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];var t=e(o),i=o.shift();return i=r(d("Save to Dropbox"),i),Dropbox.addListener(i,"click",function(e){if(e.preventDefault(),i.className.indexOf("dropbox-dropin-error")>=0||i.className.indexOf("dropbox-dropin-default")>=0||i.className.indexOf("dropbox-dropin-disabled")>=0){var o=("function"==typeof t.files?t.files():void 0)||t.files;if(!(null!=o?o.length:void 0))return i.className="dropbox-dropin-btn dropbox-dropin-error",void("function"==typeof t.error&&t.error("Missing files"));Dropbox.save({files:o,success:function(){i.className="dropbox-dropin-btn dropbox-dropin-success","function"==typeof t.success&&t.success()},progress:function(e){i.className="dropbox-dropin-btn dropbox-dropin-progress","function"==typeof t.progress&&t.progress(e)},cancel:function(){"function"==typeof t.cancel&&t.cancel()},error:function(e){i.className="dropbox-dropin-btn dropbox-dropin-error","function"==typeof t.error&&t.error(e)}})}}),i};var p=function(e,o){return"  background: "+e+";\n  background: -moz-linear-gradient(top, "+e+" 0%, "+o+" 100%);\n  background: -webkit-linear-gradient(top, "+e+" 0%, "+o+" 100%);\n  background: linear-gradient(to bottom, "+e+" 0%, "+o+" 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='"+e+"', endColorstr='"+o+"',GradientType=0);  "},f=document.createElement("style");f.type="text/css";var b='  @-webkit-keyframes rotate {\n    from  { -webkit-transform: rotate(0deg); }\n    to   { -webkit-transform: rotate(360deg); }\n  }\n\n  @keyframes rotate {\n    from  { transform: rotate(0deg); }\n    to   { transform: rotate(360deg); }\n  }\n\n    .dropbox-dropin-btn, .dropbox-dropin-btn:link, .dropbox-dropin-btn:hover {\n      display: inline-block;\n      height: 14px;\n      font-family: "Lucida Grande", "Segoe UI", "Tahoma", "Helvetica Neue", "Helvetica", sans-serif;\n      font-size: 11px;\n      font-weight: 600;\n      color: #636363;\n      text-decoration: none;\n      padding: 1px 7px 5px 3px;\n      border: 1px solid #ebebeb;\n      border-radius: 2px;\n      border-bottom-color: #d4d4d4;\n      '+p("#fcfcfc","#f5f5f5")+"\n    }\n\n    .dropbox-dropin-default:hover, .dropbox-dropin-error:hover {\n      border-color: #dedede;\n      border-bottom-color: #cacaca;\n      "+p("#fdfdfd","#f5f5f5")+"\n    }\n\n    .dropbox-dropin-default:active, .dropbox-dropin-error:active {\n      border-color: #d1d1d1;\n      box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n    }\n\n    .dropbox-dropin-btn .dropin-btn-status {\n      display: inline-block;\n      width: 15px;\n      height: 14px;\n      vertical-align: bottom;\n      margin: 0 5px 0 2px;\n      background: transparent url('"+Dropbox.baseUrl+"/static/images/widgets/dbx-saver-status.png') no-repeat;\n      position: relative;\n      top: 2px;\n    }\n\n    .dropbox-dropin-default .dropin-btn-status {\n      background-position: 0px 0px;\n    }\n\n    .dropbox-dropin-progress .dropin-btn-status {\n      width: 18px;\n      margin: 0 4px 0 0;\n      background: url('"+Dropbox.baseUrl+"/static/images/widgets/dbx-progress.png') no-repeat center center;\n        -webkit-animation-name: rotate;\n        -webkit-animation-duration: 1.7s;\n        -webkit-animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n      animation-name: rotate;\n      animation-duration: 1.7s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n\n    .dropbox-dropin-success .dropin-btn-status {\n      background-position: -15px 0px;\n    }\n\n    .dropbox-dropin-disabled {\n      background: #e0e0e0;\n      border: 1px #dadada solid;\n      border-bottom: 1px solid #ccc;\n      box-shadow: none;\n    }\n\n    .dropbox-dropin-disabled .dropin-btn-status {\n      background-position: -30px 0px;\n    }\n\n    .dropbox-dropin-error .dropin-btn-status {\n      background-position: -45px 0px;\n    }\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.4) {\n      .dropbox-dropin-btn .dropin-btn-status {\n        background-image: url('"+Dropbox.baseUrl+"/static/images/widgets/dbx-saver-status-2x.png');\n        background-size: 60px 14px;\n          -webkit-background-size: 60px 14px;\n      }\n\n      .dropbox-dropin-progress .dropin-btn-status {\n        background: url('"+Dropbox.baseUrl+"/static/images/widgets/dbx-progress-2x.png') no-repeat center center;\n        background-size: 20px 20px;\n          -webkit-background-size: 20px 20px;\n      }\n  }\n\n    .dropbox-saver:hover, .dropbox-chooser:hover {\n      text-decoration: none;\n      cursor: pointer;\n    }\n\n    .dropbox-chooser, .dropbox-dropin-btn {\n      line-height: 11px !important;\n      text-decoration: none !important;\n      box-sizing: content-box !important;\n        -webkit-box-sizing: content-box !important;\n        -moz-box-sizing: content-box !important;\n    }\n    ";f.styleSheet?f.styleSheet.cssText=b:f.textContent=b,document.getElementsByTagName("head")[0].appendChild(f),setTimeout(a.createIEFrame,0);var m=function(){document.removeEventListener?document.removeEventListener("DOMContentLoaded",m,!1):document.detachEvent&&document.detachEvent("onreadystatechange",m),a.createIEFrame(),o.genericDropins.init()};"interactive"===document.readyState||"complete"===document.readyState?setTimeout(m,0):document.addEventListener?document.addEventListener("DOMContentLoaded",m,!1):document.attachEvent("onreadystatechange",m)}Object.defineProperty(o,"__esModule",{value:!0});var a=n(0),l=n(2);Dropbox.FileViewer=l.FileViewer;var c="https://www.dropbox.com/developers/dropins/chooser/js",u=["text","documents","images","video","audio"];o.genericDropins={init:function(){}};var d=function(e){return e};o.createDropinButton=r,o.filenameFromPath=t,o.initModule=s},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function e(){this.embedUrl="https://www.dropbox.com/dropins/file_viewer"}return e.prototype.embed=function(e,o,n){var r=document.createElement("div");r.setAttribute("class","dropbox-file-viewer-wrapper");var t=document.createElement("iframe");t.setAttribute("src",this.iframeUrl(n,e,this.embedUrl)),t.setAttribute("class","dropbox-file-viewer-iframe"),r.appendChild(t),o.appendChild(r)},e.prototype.iframeUrl=function(e,o,n){return n+"?app_key="+o+"&link="+encodeURI(e)},e}();o.FileViewer=r},,,function(e,o,n){"use strict";n(6).initModule(),e.exports=window.Dropbox},function(e,o,n){"use strict";function r(){t.initModule(),Dropbox.VERSION="2",t.genericDropins.init=function(){for(var e=document.getElementsByTagName("a"),o=0;o<e.length;o++){var n=e[o];(n.getAttribute("class")||"").split(" ").indexOf("dropbox-saver")>=0&&function(e){Dropbox.createSaveButton({files:function(){return[{url:e.getAttribute("data-url")||e.href,filename:e.getAttribute("data-filename")||t.filenameFromPath(e.pathname)}]}},e)}(n)}}}Object.defineProperty(o,"__esModule",{value:!0});var t=n(1);o.initModule=r}])});