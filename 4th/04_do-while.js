//循环打印0到9
var i=0;
do
{ console.log(i);
  i++
}
while (i<10);

//打印02468
var i=0;
do
{ console.log(i);
  i+=2
}
while (i<10);
//计算1-100的和
var i=1,sum=0;
do
{ sum+=i;
  i++;
}
while (i<101)
console.log(sum);
//打印100 95 一直到50
var i=100;
do
{ console.log(i);
  i-=5;
}
while (i>49);
//计算1-10之间的乘积
var i=1,sum=1;
do
{ sum*=i;
  i++;
}
while (i<11)
console.log(sum);

//打印1~100能被3整除的数字
var i=1;
do
{
	if(i%3==0)
{ console.log(i);}
 i++
}

while (i<101);


//打印1~100能被7整除的数字的和
var i=1,sum=0;
do
{
	if(i%7==0)
{ sum+=i;}
 i++
}
while (i<101);
console.log(sum);