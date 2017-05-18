/*******************************************************************************
 *函数名称：CheckSingleAddr()
 *函数功能：单个邮件地址合法性检验
 *输入参数：sipAddr:SIP号
 *输出参数：无;
 *调用模块：无;
 *函数作者：
 *创建时间：;
 *修 改 者：
 *修改时间：
*******************************************************************************/
function CheckSingleSip(sipAddr)
{
    var indexPlace = sipAddr.indexOf("@");
    var flag = true;
    if( indexPlace==-1 || indexPlace==0 ||indexPlace==(sipAddr.length-1))
    {
        alert("您输入的SIP号格式错误，请重新输入！");
        return false;
    }
    for (i=0; i < sipAddr.length; i++){
      var c = sipAddr.charAt(i);
      if((c!='@')&&(c!='.')){
        if(!(IsE(c))){
          alert("您输入的SIP号错误，请重新输入！");
          return false;
        }
      }
    }
    return flag;
}
/*******************************************************************************
 *函数名称：CheckSingleAddr()
 *函数功能：单个邮件地址合法性检验 *输入参数：mailAddr:邮件地址;type:邮件地址类型
 *输出参数：无;
 *调用模块：无;
 *函数作者：
 *创建时间：;
 *修 改 者：
 *修改时间：
*******************************************************************************/
function CheckSingleAddr(strEmail)
{
	if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
		return true;
	else
		return false;
}
/*******************************************************************************
*函数名称：IsAllSpace();
*函数功能：判断是否全是空格;
*输入参数：var input;
*输出参数：;
*调用模块：无;
*函数作者：
*创建时间：;
*修 改 者：
*修改时间：
*******************************************************************************/
function IsAllSpace(input)
{
    var flag = true;
    var i = 0;
    for(i=0;i<input.length;i++)
    {
        if(input.charAt(i)==" ")
        {
            continue;
        }
        else
        {
            flag = false;
            break;
        }
    }
    return flag;
}
/*******************************************************************************
*函数名称：IsDigit();
*函数功能：判断输入得字符是否是数字;
*输入参数：var cCheck;
*输出参数：;
*调用模块：无;
*函数作者：
*创建时间：;
*修 改 者：
*修改时间：
*******************************************************************************/
function IsDigit(cCheck)
{
    return ((('0'<=cCheck) && (cCheck<='9')) || (cCheck == ".") );
}

function IsDigitData(cCheck)
{
    return (('0'<=cCheck) && (cCheck<='9'));
}
/*******************************************************************************
*函数名称：IsAllDigit();
*函数功能：判断输入得字符是否是数字;
*输入参数：var input;
*输出参数：;
*调用模块：IsDigit;
*函数作者：
*创建时间：;
*修 改 者：
*修改时间：
*******************************************************************************/
function IsAllDigit(input)
{
    var flag = true;
    var i = 0;
    for(i=0;i<input.length;i++){
    	if(!IsDigit(input.charAt(i))){
    		flag = false;
            break;
    	}
    }
    return flag;
}
function IsAllDigitData(input)
{
    var flag = true;
    var i = 0;
    for(i=0;i<input.length;i++){
    	if(!IsDigitData(input.charAt(i))){
    		flag = false;
            break;
    	}
    }
    return flag;
}
/*******************************************************************************
*函数名称：UnlawfulInput();
*函数功能：判断输入的字符是否是非法字符单引号;
*输入参数：var input;
*输出参数：;
*调用模块：;
*函数作者：
*创建时间：;
*修 改 者：
*修改时间：
*******************************************************************************/
function UnlawfulInput(input){
    var i = 0;
    var flag = false;
    for(i=0;i<input.length;i++)
    {
        if(input.charAt(i)=="'")
        {

            flag = true;
            break;
        }
    }
    return flag;
}
function CheckSipNumber(sip)
{
    if(sip.charAt(0)==".")
    	return false;
    if(sip.charAt(0)=="@")
    	return false;
    if(sip.indexOf('@', 0) == -1)
    	return false;
    if(sip.indexOf('.', 0) == -1)
    	return false;
    if(sip.lastIndexOf(".")== (sip.length-1))
    	return false;
    if(sip.lastIndexOf("@")== (sip.length-1))
    	return false;
    return true;
}
/*******************************************************************************
*函数名称：getRealValue();
*函数功能：出去数字前面的0;
*输入参数：var num：原来的数字;
*输出参数：var ret：转换后的数字;
*调用模块：无;
*函数作者：胡凯;
*创建时间：2003.3.13;
*修 改 者：
*修改时间：
*******************************************************************************/
function getRealValue(num)
{
    var Temp = 'A';
    var ret = "";
    var falg = false;
    for(var i=0 ; i < num.length ;i++)
    {
        Temp = num.charAt(i);
        if(Temp=='0')
        {
            flag = false;
            continue;
        }
        else
        {
            flag = true;
            ret = num.substring(i,num.length);
            break;
        }
    }
    if(!flag)
    {
        ret = "0";
    }
    return ret;
}

//从右往左去空格
function rtrim(stringObj)
{
	while (stringObj.charCodeAt(stringObj.length - 1) == 32)
	{
		stringObj = stringObj.substring(0,stringObj.length - 1);
	}
	return stringObj;
}
//从左往右去空格
function ltrim(stringObj)
{
	while (stringObj.charCodeAt(0) == 32)
	{
		stringObj = stringObj.substring(1,stringObj.length);
	}
	return stringObj;
}

//去掉字符串左右两边的空格
function trim(stringObj)
{
	return(ltrim(rtrim(stringObj)));
}

//身份证检验

function checkIdcard(idcard){ 
	var Errors=new Array( 
		"验证通过!", 
		"身份证号码位数不对!", 
		"身份证号码出生日期超出范围或含有非法字符!", 
		"身份证号码校验错误!", 
		"身份证地区非法!" 
	); 
	var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}  
	var idcard,Y,JYM; 
	var S,M; 
	var idcard_array = new Array(); 
	idcard_array = idcard.split(""); 
//地区检验 
	if(area[parseInt(idcard.substr(0,2))]==null) return false; 
//身份号码位数及格式检验 
	switch(idcard.length){ 
		case 15: 
			if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){ 
				ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性 
			} else { 
				ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性 
			} 
			if(ereg.test(idcard)) return true; 
			else return false; 
			break; 
		case 18: 
//18位身份号码检测 
//出生日期的合法性检查  
//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9])) 
//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8])) 
			if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){ 
				ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式 
			} else { 
				ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式 
			} 
			if(ereg.test(idcard)){//测试出生日期的合法性 
//计算校验位 
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 
				+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 
				+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 
				+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 
				+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 
				+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 
				+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 
				+ parseInt(idcard_array[7]) * 1  
				+ parseInt(idcard_array[8]) * 6 
				+ parseInt(idcard_array[9]) * 3 ; 
				Y = S % 11; 
				M = "F"; 
				JYM = "10X98765432"; 
				M = JYM.substr(Y,1);//判断校验位 
				if(M == idcard_array[17]) return true; //检测ID的校验位 
				else return false; 
			} 
			else return false; 
			break; 
		default: 
			return false;
			break;
	}
}

//验证是否电子邮箱
function CheckMail(mail) {
 	var filter  = /^([a-za-z0-9_.-])+@(([a-za-z0-9-])+.)+([a-za-z0-9]{2,4})+$/;
 	if (filter.test(mail)) return true;
 	else {
 		alert('您的电子邮件格式不正确');
 		return false;
 	}
}

function isMail(mail) {
 	var filter  = /^([a-za-z0-9_.-])+@(([a-za-z0-9-])+.)+([a-za-z0-9]{2,4})+$/;
 	if (filter.test(mail)) 
 		return true;
 	
 	return false;
}

/* 
中文判断函数，允许生僻字用英文“*”代替 
返回true表示是符合条件，返回false表示不符合 
*/ 
function IsChinese(str){
	var obj = str;
	if(/.*[\u4e00-\u9fa5]+.*$/.test(obj))
	{
		return false;
	}
	return true;
}

//判断手机号码
function IsMobile(v){  
	var a = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|15[89]\d{8}$/ ;  
	if( v.length!=11||!IsAllDigitData(v) ){
		return false;
	}
	else{
		return true;
	}
}

//判断是否邮编
function checkpost(str){

	if(str.length!=6)
	{
	    return false;
	}
	else
	{
	    var rexTel=/^[0-9]+$/;
	    if(!rexTel.test(str))
	    {
	    	return false;
	    }
	}
	return true;
}

//判断字符串是否为空
function isNull( str )
{
	if(str == null || str == "" )
	{
		return true;
	}

	return false;
}
//onkeypress事件只能输入数字，空格、"." "-"
function EnterOnlyNumber1()
{
   if ( !(((window.event.keyCode >= 48) && (window.event.keyCode <= 57))
           || (window.event.keyCode == 13) || (window.event.keyCode == 46)
           || (window.event.keyCode == 45))
	   )
  {
     window.event.keyCode = 0 ;
  }
}
//onkeypress事件只能输入数字
function EnterOnlyNumber()
{
   if ( !(((window.event.keyCode >= 48) && (window.event.keyCode <= 57))))
  {
     window.event.keyCode = 0 ;
  }
}

//onkeypress事件只能输入数字、"."
function EnterOnlyNumber2()
{
   if ( !(((window.event.keyCode >= 48) && (window.event.keyCode <= 57)) || (window.event.keyCode == 46)))
  {
     window.event.keyCode = 0 ;
  }
}
//判断是否为ip格式
function IsIP(sIPAddress){
    var exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    var reg = sIPAddress.value.match(exp);
    var ErrMsg="你输入的是一个非法的IP地址段！\nIP段为：:xxx.xxx.xxx.xxx（xxx为0-255)！";
    var Msg="你输入的是一个合法的IP地址段！";
    if(reg==null){
       alert(ErrMsg);
        sIPAddress.value = "";
        sIPAddress.onfocus;
        return false;
    }
    return true;
}

//校验某个字符是否为英文 或 数字 或'_'
function IsE(c)
{
  var Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
   c = c.toUpperCase();
   if((('0'<=c) && (c<='9')) || Letters.indexOf(c) >= 0){
     return true;
   }
   return false;
} 
//校验交验密码输入
function CheckPasswd(input){
    var flag = true;
    var i = 0;
    for(i=0;i<input.length;i++){
    	if(!IsE(input.charAt(i))){
    		flag = false;
            break;
    	}
    }
    return flag;  
}
/**
 * 判断这个el控件的值是否是空值,如果是空值反返回true
 */
function ElementNullCheck(el,elName)
{
	var returnValue = false;
	if(!el.value)returnValue = true;
	if(trim(el.value).length==0)
		returnValue= true;
	if(returnValue)
	{
		el.focus();
		alert(elName+"不能为空，请重新填写!\n(*号为必填项)");
	}
	return returnValue;
}

/**
 * 检查select控件的索引是不是等于0，如果是返回false
 */		
function checkSelectedIndex(el,elName)
{
	if(el.selectedIndex==0)
	{
		alert(elName+"必需选择一个值!");
		return false;
	}
	return true;
}
/**
 *多选框全选/全不选 
 */
function doCheckBoxSel(objName,check){
	var i;
	var checkBoxObj = document.getElementsByName(objName);
	for(i=0;i<checkBoxObj.length;i++){
		var e = checkBoxObj[i];
		e.checked = check;
	}
}
/**
 *单选影响checkAll框 
 */
function doCheckBoxOneSel(objName,objCkAll){
	var i;
	var flag = true;
	var objAll=eval("document.forms[0]."+objCkAll);
	var checkBoxObj = document.getElementsByName(objName);
	for(i=0;i<checkBoxObj.length;i++){
		var e = checkBoxObj[i];
		if(e.checked){
		}else{
		   flag = false;
		   break;		
		}
	}
    if(flag)
	  objAll.checked = true;
	else
	  objAll.checked = false; 
}	
/**
 将数组转换成'a','b'模式的字符串
**/ 	
function convArrayToString(arr){
	var ret="";
	for(var i=0;i<arr.length;i++){
	  if(ret.length==0){
	  	ret+="'"+arr[i]+"'";
	  }else{
	    ret+=",'"+arr[i]+"'";  
	  }
	}
	return ret;
} 
/**
  将EntSortType数组转换成交集查询SQL语句
**/
function convEntSortAnd(arr){
	var sql ="select "+arr[0]+".EntName from ";
	var tabstr ="";
	var sWhere ="";

	for(var i=0;i<arr.length;i++){
	    //表名字符串拼接
		if(tabstr.length==0){
		   tabstr +="EntInduSort "+arr[i];
		}else{
		   tabstr +=","+"EntInduSort "+arr[i];
		}
		//查询条件字符串拼接
		if(sWhere.length==0){
			sWhere +=" "+arr[i]+".EntType='"+arr[i]+"'";
		}else{
			sWhere +=" and "+arr[i]+".EntType='"+arr[i]+"'";
		}
		
		//组合条件拼接
		if(arr.length>=2){
			for(var j=i+1;j<arr.length;j++){
				sWhere +=" and "+arr[i]+".EntName="+arr[j]+".EntName";
			}
		}
	}
	return sql+tabstr+" where"+sWhere;
}
function ShowSortTypeWindow(page){
	window.open(page,"popwindow12",
	 	"SCROLLBARS=1,STATUS=0,MENUBAR=0,RESIZABLE=0,TOP=300,LEFT=500,width=290,height=270");
} 
function ShowIndustryCoWindow(page){
	window.open(page,"popwindow13",
	 	"SCROLLBARS=1,STATUS=0,MENUBAR=0,RESIZABLE=0,TOP=100,LEFT=200,width=728,height=600");
}  
function ShowEntTypeWindow(page){
	window.open(page,"popwindow14",
	 	"SCROLLBARS=1,STATUS=0,MENUBAR=0,RESIZABLE=0,TOP=100,LEFT=200,width=728,height=600");
}
//动态生成年度选择列表
function CreateYearList(yobj,nowyear,len){
    var inow = nowyear*1;
    len =len*1;
    nowyear = nowyear*1;
	var objYear=eval("document.forms[0]."+yobj);
	for(var i=0;i<len;i++){
		objYear.options.add(new Option(inow-i,inow-i));
	}
}
function CreateJSYearList(yobj,len){
	var myDate = new Date();
	var nowyear=myDate.getFullYear();
    var inow = nowyear*1;
    len =len*1;
    nowyear = nowyear*1;
	var objYear=eval("document.forms[0]."+yobj);
	for(var i=0;i<len;i++){
		objYear.options.add(new Option(inow-i,inow-i));
	}
}
//判断输入项是否为字母和数字
function JNumcodeText(obj)
{
	var flag = true;
	var re=/^[A-Za-z0-9]*$/;
	if(re.test(obj.value)==false){
		flag = false;
     }
	 return flag;
}
//TextArea 最大长度控制，实现maxlength功能
function checkMaxLen(obj,maxlength)
{
   if(obj.value.length>maxlength){
       obj.value = obj.value.substr(0,maxlength);
   }
}