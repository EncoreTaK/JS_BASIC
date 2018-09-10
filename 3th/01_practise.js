//闰年:四年一闰 百年不闰 四百年再闰
var year=1608;
console.log((year%4==0 && year%100!=0)||(year%400==0 ));
console.log((year%4==0 && year%400==0)||(year%100!=0))


//利用逻辑短路 判断成年人
var age=17;
age>=18 && console.log('成年人');
age<18  || console.log('成年人');


var num1=9.6e1,num2=9.6E-1,num3=null;
console.log(num1);
console.log(num2);
console.log(typeof(num1));
console.log(num3);
