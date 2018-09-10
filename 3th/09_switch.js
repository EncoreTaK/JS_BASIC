var day=8989;
switch(day){
 case 1:
  console.log('吃面条');
  break;
  case 2:
  console.log('吃饭');
  break;
  case 3:
  console.log('吃火锅');
  break;
  default:
	  console.log('错误')
}
//练习:学子商城中保存订单的状态
//10-待派送 20-备货中 30-运输中
//40-派送中 50-已完成 其他-不可识别
//声明一个保存订单的状态码，根据状态打印出汉字的提示
var z=60;
switch(day){
 case 10:
  console.log('待派送');
  break;
  case 20:
  console.log('备货中');
  break;
  case 30:
  console.log('运输中');
  break;
  case 40:
  console.log('派送中');
  break;
  case 50:
  console.log('已完成');
  break;
  default:
	  console.log('不可识别')
}

//成绩除以10，然后取整
var score=35;
score=parseInt(score/10);
switch(score){
  case 6:
  console.log('及格');
  break;
  case 7:
  console.log('中等');
  break;
  case 8:
  console.log('良好');
  break;
  case 8:
  console.log('优秀');
  break;
  case 10:
  console.log('棒');
  break;
  default:
	  console.log('不及格')
}
//1-查话费 2-查流量 3-缴费充值 4-办理宽带 5-转人工 其他-重输
var v=8;
switch(v){
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
	  console.log('重输')
}