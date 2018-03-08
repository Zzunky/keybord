function mOver(obj)
{
   obj.innerHTML="(～￣▽￣)～ ";
   obj.style.backgroundColor="#265A88";
}

function mOut(obj)
{
   obj.innerHTML="指一下这里";
   obj.style.backgroundColor="#337AB7";
}

function mClick(obj)
{
   obj.innerHTML="还可以双击哦(〃'▽'〃)";
   obj.style.backgroundColor="#265A88";
}

function mDblClick(obj)
{
   obj.innerHTML="٩(๑>◡<๑)۶ ";
   obj.style.backgroundColor="#ff6666";
}

function mDown(obj)
{
   obj.style.backgroundColor="#265A88";
   obj.innerHTML="松开鼠标";
}

function mUp(obj)
{
   obj.style.backgroundColor="#337AB7";
   obj.innerHTML="再按下鼠标";
}


function keydownFun(){
	document.getElementById("state").innerHTML="你正在瞎按键盘...";
}
function keyupFun(){
	document.getElementById("state").innerHTML="";
}

function keyupFun2(obj){
	obj.value=obj.value.toUpperCase();
}


function focusFun1(){
	var x=document.getElementById("user");
	var y=document.getElementById("user_s");
	x.style.backgroundColor="#ccffcc";
	y.innerHTML="只能为英文字母和数字";
	
}
function blurFun1(){
	var x=document.getElementById("user");
	var y=document.getElementById("user_s");
	x.style.backgroundColor="#ffffff";
	y.innerHTML="";
}
function focusFun2(){
	var x=document.getElementById("pwd");
	var y=document.getElementById("pwd_s");
	x.style.backgroundColor="#ccffcc";
	y.innerHTML="密码长度必须大于8位";
	
}
function blurFun2(){
	var x=document.getElementById("pwd");
	var y=document.getElementById("pwd_s");
	x.style.backgroundColor="#ffffff";
	y.innerHTML="";
}

function submitFun(){
	alert("注册成功");

}
function resetFun(){
	alert("重新填写用户名及密码");

}
