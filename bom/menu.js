var str = "";
var strdaochujieguo = "";
var forTree = function(o,n,m,c){
	if(document.getElementById("menuTree").innerHTML=="开始菜单"){str = "";
	document.getElementById("menuTree").innerHTML="";}
 for(var i=0;i<o.length;i++){
 var urlstr = "";
 var daochujieguo = "";
 try{
 if( o[i].pid== "" || o[i].pid  == null || o[i].pid  == undefined){
	 num=1;
	 c=i+1;
	 k=c;
 urlstr = "<li><span>"+ o[i]["name"] +"</span><b>**用量："+ o[i]["num"] +"</b><ul>";
 daochujieguo =c+','+o[i].id+','+num+','+num+',+,';
 }else{
	   if(o[i]["pid"].length>1){
	  j=o[i]["pid"].indexOf(n);
	  num1=o[i]["num"][j]*1;
	  num=o[i]["num"][j]*m;
  }else{num1=o[i]["num"]*1;
  num=o[i]["num"]*m;}
  pri=o[i]["pri"]*num;
       
 if(o[i]["list"] != null){
 urlstr = "<li><span>"+ o[i]["name"] +"</span><b>**BOM用量："+num1+"**。相对用量："+ num +"**加工成本："+pri+"元。</b><ul>"; 
 }else{
 urlstr = "<li>"+ o[i]["name"] +"<b>**BOM用量："+num1+"**。相对用量："+ num +"**材料成本："+pri+"元。</b></li>"; 
 }
 daochujieguo =c+'.'+(i+1)+','+o[i].id+','+num1+','+num+','+pri+',';
 k=c+'.'+(i+1);
 }

 str += urlstr;
 strdaochujieguo += daochujieguo;

 if(o[i]["list"] != null){
 forTree(o[i]["list"],o[i]["id"],num,k);
 }
 if(o[i]["list"] != null){
 str += "</ul></li>";
 }
 }catch(e){}
 }
 return str;
}
/*树形菜单*/
var menuTree = function(){
 //给有子对象的元素加[+-]
 $("#menuTree ul").each(function(index, element) {
 var ulContent = $(element).html();
 var spanContent = $(element).siblings("span").html();
 if(ulContent){
 $(element).siblings("span").html("[+] " + spanContent); 
 }
 });
 $("#menuTree").find("li span").click(function(){
 var ul = $(this).siblings("ul");
 var spanStr = $(this).html();
 var spanContent = spanStr.substr(3,spanStr.length);
 if(ul.find("li").html() != null){
 if(ul.css("display") == "none"){
 //ul.show(300);
 $(this).html("[-] " + spanContent);
 }else{
 //ul.hide(300);
 $(this).html("[+] " + spanContent);
 }
 }
 })
}()
/*展开*/
$("#btn_open").click(function(){
 $("#menuTree ul").show(300);
 curzt("-");
})
/*收缩*/
$("#btn_close").click(function(){
 $("#menuTree>ul ul").hide(300);
 curzt("+");
})
function curzt(v){
 $("#menuTree span").each(function(index, element) {
 var ul = $(this).siblings("ul");
 var spanStr = $(this).html();
 var spanContent = spanStr.substr(3,spanStr.length);
 if(ul.find("li").html() != null){
 $(this).html("["+ v +"] " + spanContent);
 }
 }); 
}