//练习:声明一个变量存储数字;循环弹出提示框 ，输入数字，如果输入的数字大于存储的数字，警示框提示猜大了，如果输入的数字小于存储的数字，警示框提示猜小了，否则提示猜对了，结束循环
var num=8;
while(true){
	var str=prompt('请你猜一个数字，输入你猜的数字');
	str=parseInt(str);
 if(str>num){
	 alert('猜大了');
 }else if(str<num){
	 alert('猜小了');
 }else if(str==num){
     alert('猜对了');
	 break;
 }else {
 alert('错误输入，请重输')}
}