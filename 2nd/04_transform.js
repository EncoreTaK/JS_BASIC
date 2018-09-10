/*
//数据类型转换
console.log(1+'a');
console.log(1+2);
console.log('hello'+'world');
console.log(1+true);
console.log(1+false);
console.log('hello'+true);
console.log(false+true);

//练习
console.log(2-'1');
console.log('3'*'5');
console.log('10'/2);
console.log(3*true);
console.log(2-'1a');//NaN:NOT A NUMBER

//练习
var num1=3,num2=true,num3='hello';
      console.log(num1+num2+num3);//4hellow
      console.log(num2+num3+num1);//truehellow3
      console.log(num3+num1+num2);//hello3true
	 
*/
//强制转换
//1.转化为整数
var num1='1';
num1=parseInt(num1);
console.log(typeof(num1));
console.log(num1+5);
console.log(parseInt('1.5'));
console.log(parseInt('3a'));
console.log(parseInt('a8'));//NaN
console.log(parseInt('true'));//NaN
console.log(parseInt('undefined'));//NaN

console.log(parseFloat('1.5a'));//1.5
console.log(parseFloat('a1.5'));//NaN
console.log(parseFloat('3.14c2121'));//3.14

console.log(Number(数据));//1
console.log(Number('1.5a'));//NaN
console.log(Number('a8'));//NaN
console.log(Number('3a'));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(undefined));//NaN



var num=1;
num=num.toString();
console.log(num);
console.log(typeof(num));
var num2=12;
num2=num2.toString(8);
console.log(num2);
var c='达';
c=c.charCodeAt();
c=c.toString(16);
console.log(c);

console.log('达'.charCodeAt().toString(16));
var d=true;
console.log(d.toString());
d=d.toString();
console.log(typeof(d));