//练习:查看签名，若为空，则打印这家伙很懒，有签名就打印签名
var sign='不为空的签名';
if(sign==''){
  console.log('这家伙很懒');
}
else{
	console.log(sign);
}

//练习:判断年龄，成年人和未成年人
var age=18;
if(age<18){
 console.log('未成年人');
}else{
	console.log('成年人');
}
//练习:收银系统，输入商品总价，若满500打八折，付款时候若银行卡余额不足，打印余额不足，否则打印支付成功
var price=600;
if(price>=500){
 price*=0.8;
}
var cash=3000;
if(cash>=price){
console.log('支付成功');
}
else{
	console.log('余额不住');
}

//练习:声明两个变量来保存用户名root和密码123456，输入正确，打印登录成功，否则打印用户名或密码错误
var user='root',password='123456';
if((user=='root')&& (password=='123456')){
	console.log('登录成功');
}
else{
	console.log('用户名或密码错误');
	}