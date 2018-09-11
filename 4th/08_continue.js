//打印02468
//自增只能加一
//遇到奇数跳过
for (i=0;i<10 ;i++)
{ if (i%2==1)
{continue;}
//跳过本次循环，继续下一次循环
console.log(i);
}

//打印1-100之间不能被三整除的数字
for (i=0;i<101 ;i++ )
{if (i%3==0)
{continue;}
console.log(i);
}

//打印本世纪前十个闰年
for (i=2000,sum=0;i<=2100 ;i++ )
{if((i%4==0)&&(i%100!=0)||(i%400==0))
{console.log(i);sum+=1;
if (sum==10)
{break;} }
}

//计算1-100的和，和达4000时输出当前和并退出循环
for (i=1,sum=0;i<=100;i++ )
{sum+=i;
if (sum>4000)
{console.log(sum);console.log(i);break;}
}
//本金10000，每年利率3%，计算五年后连本带利多少钱
for (i=1,money=10000;i<6 ;i++)
{ money*=1.03;
}console.log(money);

// 5/3+6/5->9/11
for (i=5,j=3,p=0,sum=0;i<10,j<12 ;i++,j+=2)
{ p=i/j,sum+=p;
}console.log(sum);

// 5/3+6/5->9/11
for (i=5,j=3,p=0,sum=0,str='';i<10,j<12 ;i++,j+=2)
{ p=i/j,sum+=p;
  str+=i+'/'+j;
  console.log(str);
}