function postToWeibo(myTitle, myUrl){
  var _w = 106 , _h = 24;
  var param = {
    url:location.href,
    type:'5',
    count:'', /**是否显示分享数，1显示(可选)*/
    appkey:'', /**您申请的应用appkey,显示分享来源(可选)*/
    title:myTitle, /**分享的文字内容(可选，默认为所在页面的title)*/
    pic:'', /**分享图片的路径(可选)*/
    ralateUid:'2354256172', /**关联用户的UID，分享微博会@该用户(可选)*/
	language:'zh_cn', /**设置语言，zh_cn|zh_tw(可选)*/
    rnd:new Date().valueOf()
  }
  var temp = [];
  for( var p in param ){
    temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
  }
  document.write('<iframe allowTransparency="true" frameborder="0" scrolling="no" src="http://hits.sinajs.cn/A1/weiboshare.html?' + temp.join('&') + '" width="'+ _w+'" height="'+_h+'"></iframe>')
}

function postToSinaWb(myTitle, myUrl){
  var _w = 16 , _h = 16;
  var param = {
    url:myUrl,
    type:'3',
    count:'', 
    appkey:'', 
    title:myTitle, 
    pic:'', 
    ralateUid:'', 
    rnd:new Date().valueOf()
  }
  var temp = [];
  for( var p in param ){
    temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
  }
  document.write('<iframe allowTransparency="true" frameborder="0" scrolling="no" src="http://hits.sinajs.cn/A1/weiboshare.html?' + temp.join('&') + '" width="'+ _w+'" height="'+_h+'"></iframe>')
}

function postToTxWb(myTitle, myUrl){
	var _t = encodeURI(myTitle);
	var _url = encodeURIComponent(myUrl);
	var _appkey = encodeURI('');
	var _pic = encodeURI('');
	var _site = '';
	var _u = 'http://v.t.qq.com/share/share.php?url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic+'&title='+_t;
	window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function postToBaiduWb(myTitle, myUrl){
	var u = myUrl;
	var t = myTitle;
	var c = '' + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
	var url='http://cang.baidu.com/do/add?it='+encodeURIComponent(t)+'&iu='+encodeURIComponent(u)+'&dc='+encodeURIComponent(c)+'&fr=ien#nw=1';
	window.open(url,'_blank','scrollbars=no,width=440,height=440,left=80,top=80,status=no,resizable=yes');
}

function postToKaiXinWb(myTitle, myUrl){
	var u = myUrl;
	var t = myTitle;
	window.open('http://www.kaixin001.com/~repaste/repaste.php?rurl='+escape(u)+'&rtitle='+escape(t)+'&rcontent='+escape(t),'_blank');
}

function postToRenRenWb(myTitle, myUrl){
	var u = myUrl;
	var t = myTitle;
	window.open('http://share.renren.com/share/buttonshare/post/2001?url='+encodeURIComponent(u)+'&title='+encodeURIComponent(t)+'&content='+encodeURIComponent(t),'_blank');
}

function postToQQWb(myTitle, myUrl){
	var u = myUrl;
	var t = myTitle;
	window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+encodeURIComponent(u)+'&title='+encodeURIComponent(t)+'&summary=&desc=&site=','_blank');
}

function wbToHtml(myTitle, myUrl){
	
	var toHtml = "";
	
	toHtml  = "<div style='position:relative;width:100%;overflow:hidden;margin-top:10px;height:20px;'>";
	toHtml += "<div class='weibo-jia' style='width:55px;right:130px;'>分享到:";
	toHtml += 	"<script type='text/javascript' charset='utf-8'>postToSinaWb('"+myTitle+"','"+myUrl+"')</script>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToTxWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='http://v.t.qq.com/share/images/s/weiboicon16.png' align='absmiddle' border='0' alt='转播到腾讯微博' style='position:absolute;top:3px;right:-110px;' /></a>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToBaiduWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='/images/wblogo/baidu.gif' align='absmiddle' border='0' alt='转播到百度空间' style='position:absolute;top:3px;right:-90px;' /></a>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToKaiXinWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='/images/wblogo/kaixin.gif' align='absmiddle' border='0' alt='转播到开心网' style='position:absolute;top:3px;right:-70px;' /></a>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToRenRenWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='/images/wblogo/renren.gif' align='absmiddle' border='0' alt='转播到人人网' style='position:absolute;top:3px;right:-50px;' /></a>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToQQWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='/images/wblogo/qq.gif' align='absmiddle' border='0' alt='转播到QQ空间' style='position:absolute;top:3px;right:-30px;' /></a>";
	toHtml += "</div>";
	toHtml += "</div>";
	
	document.write(toHtml);
}

function wbToHtmlHead(myTitle, myUrl){
	
	var toHtml = "";
	
	toHtml += "<div class='weibo-jia' style='width:70px;right:120px;'>分享到:";
	toHtml += 	"<script type='text/javascript' charset='utf-8'>postToSinaWb('"+myTitle+"','"+myUrl+"')</script>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToTxWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='http://v.t.qq.com/share/images/s/weiboicon16.png' align='absmiddle' border='0' alt='转播到腾讯微博' style='position:absolute;top:3px;right:-110px;' /></a>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToBaiduWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='/images/wblogo/baidu.gif' align='absmiddle' border='0' alt='转播到百度空间' style='position:absolute;top:3px;right:-90px;' /></a>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToKaiXinWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='/images/wblogo/kaixin.gif' align='absmiddle' border='0' alt='转播到开心网' style='position:absolute;top:3px;right:-70px;' /></a>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToRenRenWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='/images/wblogo/renren.gif' align='absmiddle' border='0' alt='转播到人人网' style='position:absolute;top:3px;right:-50px;' /></a>";
	toHtml += 	"<a href='javascript:void(0)' onclick=\"postToQQWb('"+myTitle+"','"+myUrl+"');return false;\" style='height:16px;font-size:12px;line-height:16px;'><img src='/images/wblogo/qq.gif' align='absmiddle' border='0' alt='转播到QQ空间' style='position:absolute;top:3px;right:-30px;' /></a>";
	toHtml += "</div>";
	
	document.write(toHtml);
}