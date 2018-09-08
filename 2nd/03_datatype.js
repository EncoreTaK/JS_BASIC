//数值型
var num1=10;//10进制
var num2=010;//8进制
var num3=0xf;//16进制
var pi=3.14;
var area=9.6e6;
console.log(typeof(area));//number
//字符串型
var bookName='三国演义';
var empName="tom";
var age='20'
console.log(typeof(empName));//string
console.log(typeof(age));//string
//查看一个字符的Unicode编码
console.log('去'.charCodeAt());
//布尔型
var isOnsale=true;
var isLogin=false;
console.log(typeof(isOnsale));
var result=1>2;
console.log(result);
console.log(typeof(result));
//未定义型
var total;//undefined
console.log(typeof(total));
//NULL型
total=null;//释放内存空间
//无法演示