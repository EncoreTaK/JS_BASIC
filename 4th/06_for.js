//打印0-9
for(i=0;i<10;i++)
{console.log(i);}

//打印02468
for (i=0;i<10 ;i+=2)
{console.log(i);
}

//计算1-100的和
for (i=0,sum=0;i<101 ;i++ )
{ sum+=i;
}
console.log(sum);

//计算1-100所有奇数的和
for (i=1,sum=0;i<101;i+=2)
{ sum+=i;
}
console.log(sum);

for (i=1,sum=0;i<101;i++)
{if (i%2==1)
{sum+=i;}
}console.log(sum);

//计算1-20偶数的乘积
for (i=4,num=2;i<21 ;i+=2 )
{ num*=i;
}
console.log(num);

for (i=4,num=2;i<21 ;i++ )
{if (i%2==0)
{   num*=i
}
}console.log(num);

//打印本世纪所有的闰年
for (i=2000;i<=2100;i++)
{if((i%4==0)&&(i%100!=0)||(i%400==0))
console.log(i);
}

//打印五个星成一行
for (i=0,str='';i<5;i++)
{   str+='*';
	
}console.log(str);

//打印99乘法表第五行的结果得数
for (i=1,str='';i<6 ;i++)
{    str+=i*5+' ';
}console.log(str);

//打印99乘法表第五行
for (i=1,str='';i<6 ;i++)
{    str+=i+'*5='+i*5+' ';
}console.log(str);

//打印99乘法表第九行
for (i=1,str='';i<10 ;i++ )
{ str+=i+'*9='+i*5+' ';
}console.log(str);

//打印99乘法表
for (i=1,str='';i<10 ;i++ ){
for (j=1; j<=i;j++ ){
	str+=j+'*'+i+'='+i*j+' ';
}console.log(str);str='';
}