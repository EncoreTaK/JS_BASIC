//判断一个人的政治面貌
var a='团员';
if(a=='党员'){
      console.log('这个人是党员');
}else if(a=='团员'){
      console.log('这个人是团员');
}else{console.log('这个人是群众');}

//练习:学子商城中保存订单的状态
//10-待派送 20-备货中 30-运输中
//40-派送中 50-已完成 其他-不可识别
//声明一个保存订单的状态码，根据状态打印出汉字的提示

var z=60;
if(z==10){
      console.log('订单待派送');
}else if(z==20){
      console.log('订单备货中');
}else if(z==30){
      console.log('订单运输中');
}else if(z==40){
      console.log('订单派送中');
}else if(z==50){
      console.log('订单已完成');
}else{
      console.log('订单不可识别');
}

//90~优秀 80~90良好 70~80中等 60~70 及格 60以下不及格
var score=85;
if(score>=90){
      console.log('优秀');
}else if(score>=80){
      console.log('良好');
}else if(score>=70){
      console.log('中等');
}else if(score>=60){
      console.log('及格');
}else{
      console.log('不及格');
}
//练习:从60分开始判断，直到90分以上
var s1=90;
if (s1<60)
{console.log('不及格');
}else if(score<70){
      console.log('及格');
}else if(score<80){
      console.log('中等');
}else if(score<90){
      console.log('良好');
}else {
      console.log('优秀');
}
//银行大于1000万是砖石用户;大于100万是贵宾用户，大于10万是优质，否则是普通用户
var money=10000;
if(money>=1e7){
      console.log('砖石用户');
}else if(money>=1e6){
      console.log('贵宾用户');
}else if(money>=1e5){
      console.log('优质用户');
}else{
      console.log('普通用户');
}
