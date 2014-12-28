;(function (){
var css = '.iedie-wrapper div{border:0 none;margin:0;padding:0;}'+
    'html,body,#iedie-bg{height:100%!important;width:100%!important;overflow:hidden!important;}'+
    '#iedie-bg{height:150%!important;}'+
    '#iedie-bg{position:absolute;top:0;left:0;z-index:10;background-color:#666;-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";filter: alpha(opacity=90);}'+
    '#iedie-modal-wrapper{position:absolute;top:60px;left:50%;z-index:20;}'+
    '#iedie-modal{position:absolute;top:0px;left:-320px;width:600px;padding:20px;z-index:30;background-color:#F4F4F4;font-size:14px;line-height:1.2;color:#555;}'+
    '.iedie-line,.iedie-clear{clear:both;height:0px;overflow:hidden;}'+
    '.iedie-title-wrapper .iedie-clear{clear:both;height:10px;overflow:hidden;}'+
    '.iedie-line{background:black;height:1px;}'+
    '.iedie-close{font-size:12px;color:#999;float:right;display:inline;background:#eee;text-decoration:none;padding:3px 5px;}'+
    '.iedie-title{float:left;padding-bottom:14px;font-size:18px;color:#333;}'+
    'a.iedie-browser .iedie-browser-name{padding-top:3px;}'+
    'a{text-decoration:none;color:#666;font-weight:bold;}'+
    '.iedie-body a:hover{text-decoration:underline;}'+
    'a .iedie-browser-desc{text-decoration:none;font-weight:normal;}'+
    'a.iedie-browser .iedie-browser-desc{padding-top:2px;color:#999;}'+
    'a.iedie-close{font-weight:normal;}'+
    '.iedie-browser-img{width:60px;height:45px;float:left;background-image:url(//wuyongzhiyong.b0.upaiyun.com/iedie/v1/recommended-browsers.png);background-repeat:no-repeat;cursor:pointer;}'+
    '.iedie-browser-liebao .iedie-browser-img{background-position:0 -50px}'+
    '.iedie-browser-sogou .iedie-browser-img{background-position:0 -100px}'+
    '';

var hint = '<p>您正在使用的浏览器版本过低，不被本站支持，继续使用此浏览器访问本站，您可能会遇到页面样式错乱及某些功能无法正常使用的情况。低版本的浏览器也很可能存在安全漏洞，因此为了您在网上浏览及进行资金操作时的信息安全，请您尽快更换最新的浏览器。</p><p>建议使用：</p>';
if (typeof IEDIE_HINT === 'string') {
    hint = IEDIE_HINT;
    delete IEDIE_HINT;
}
var isXP = /Windows NT 5/.test(navigator.userAgent);
var showIELink = !isXP;
if (window.IEDIE_IE_LINK_IN_XP) {
    showIELink = true;
    delete IEDIE_IE_LINK_IN_XP;
}
document.write('<div id="iedie-wrapper" class="iedie-wrapper"><div id="iedie-bg"></div><div id="iedie-modal-wrapper"><div id="iedie-modal"><div class="iedie-title-wrapper"><a class="iedie-close" onclick="__iedie_close()" href="javascript:;">&times;&nbsp;关闭</a><div class="iedie-title">温馨提示：您正在使用的浏览器版本过低</div><div class="iedie-clear"></div></div><div class="iedie-line"></div><div class="iedie-body">'+
    hint+
    '<a class="iedie-browser iedie-browser-chrome" href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name">Google Chrome</div><div class="iedie-browser-desc">Google出品的一款快速、简单且安全的网络浏览器。</div><div class="iedie-clear"></div></p></a>'+
    '<a class="iedie-browser iedie-browser-ff" href="https://www.mozilla.org/zh-CN/firefox/new/" target="_blank"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name">Mozilla Firefox</div><div class="iedie-browser-desc">选择独立。 选择 Firefox。</div><div class="iedie-clear"></div></p></a>'+
    '<a class="iedie-browser iedie-browser-opera" href="http://www.opera.com/zh-cn" target="_blank"><p><div class="iedie-browser-img"></div><div class="iedie-browser-name">Opera</div><div class="iedie-browser-desc">上网，我“行”我“速”。</div><div class="iedie-clear"></div></p></a>'+
    (showIELink?'或<a href="'+(isXP?'http://dl.pconline.com.cn/html_2/1/104/id=49581&pn=0.html':'http://windows.microsoft.com/zh-cn/internet-explorer/download-ie-MCM')+'" target="_blank">升级您的 IE 至最新版本</a><br/>':'')+
    '</p><a class="iedie-close" onclick="__iedie_close()" href="javascript:;">我已了解，继续访问 &gt;&gt;</a><div class="iedie-clear"></div></div></div></div></div>'+
    '');

var styleElem = document.createElement('style');
styleElem.type = 'text/css' ;
styleElem.styleSheet.cssText = css;
var wrapper = document.getElementById('iedie-wrapper');
wrapper.insertBefore(styleElem, document.getElementById('iedie-bg'));

(function r(f){/in/.test(document.readyState)?setTimeout(function(){r(f);},9):f()}(function(){
  setTimeout(function(){
    window.scrollTo(0,0);
  }, 1);
}));

__iedie_close = function() {
  setTimeout(function () {
    __iedie_close = void 0;
    delete __iedie_close;
  }, 1);
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
    if (wrapper.parentNode) {
      var tmp = 0;
      tmp = wrapper.parentNode.offsetTop  +  'px';
    }
  }
  if (wrapper.parentNode) {
    wrapper.parentNode.removeChild(wrapper);
  }
};

}());
