//逻辑运算符
//判断一个分数是否优秀 90~100
var score=91;
console.log(score>=90&&score<=100);
//年龄大于65，或者小于12都可以打折
var age=150;
console.log(age<=12 || age>=65);

console.log(!(2>1));
//练习:实现登录,声明变量保存用户名和密码
//只有用户名是root,密码是123456才返回true
var userName='root',password=122456;
console.log(userName=='root' && password==123456);
//逻辑短路
var num=0;
num > 1 && console.log('大于1');

var num2=2;
num2>3||console.log('hello');

var a=3;
//并且后的代码没有执行到
a>5 && console.log(num10);
//因为a<1是false，会执行或者后的代码
a<1||console.log(num10);
