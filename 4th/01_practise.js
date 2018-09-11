var age=18;
if(age>=18){
console.log('成年人');
}
console.log('程序结束');
//1到10的乘积
var i=1,sum=1;
while(i<=10){
      sum*=i;
	  i++;
}
console.log(sum);

//电话客服
var code=1;
switch(code){
       case 1:
	   console.log('查话费');
	   break;
	   case 2:
	   console.log('查流量');
	   break;
	   case 3:
	   console.log('缴费充值');
	   break;
	   case 4:
	   console.log('办理宽带');
	   break;
	   case 5:
	   console.log('转人工');
	   break;
       default:
	   console.log('重新输入');
}