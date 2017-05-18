// JavaScript Document
//m选项卡数目
//n当前选项卡编号
function setTab(m,n){
	var menu=document.getElementById("tab"+m).getElementsByTagName("li");   //获取ID为tab+m标签下的li标签
	var showdiv=document.getElementById("tablist"+m).getElementsByTagName("div");   //获取ID为tablist+m标签下的div标签
	for(i=0;i<menu.length;i++)
	{
		menu[i].className=i==n?"current":"";   //如果i=n;那么menu[i].classname为current
		showdiv[i].style.display=i==n?"block":"none";   //如果如果i=n;那么showdiv[i].style.display为block"
	}
}

function setTab1(){
	var menu=document.getElementById("tab21").getElementsByTagName("li");   //获取ID为tab+m标签下的li标签
	var showdiv=document.getElementById("tablist21").getElementsByClassName("divtab21");   //获取ID为tablist+m标签下的div标签
	for(i=0;i<menu.length;i++)
	{
		menu[i].className=i==n?"now":"";   //如果i=n;那么menu[i].classname为now
		showdiv[i].style.display=i==n?"block":"none";   //如果如果i=n;那么showdiv[i].style.display为block"
	}
}

function changeInfo(m){
	var menu=document.getElementById("infoUL").getElementsByTagName("li");   //获取ID为tab+m标签下的li标签
	var showdiv=document.getElementById("tab_"+m).style.display="block";   //获取ID为tablist+m标签下的div标签
	
	for(i=0;i<menu.length;i++)
	{
		if((menu[i].className=="now") && (i!=m)){
			menu[i].className = "";
			document.getElementById("tab_"+i).style.display="none";
		}
		else if(i==m){
			menu[i].className = "now";
		}
	}
}