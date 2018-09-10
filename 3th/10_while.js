//console.log('hello')
//打印十次hello
var i=0;
while (i<10)
{ console.log('hello'+i);
   i++;
}
//练习:打印02468
var i=0;
while (i<10)
{ console.log(+i);
   i+=2;
}
//练习:打印56789
var i=5;
while (i<10)
{ console.log(+i);
   i+=1;
}
//练习:打印30到20
var i=30;
while (i>19)
{ console.log(i);
   i-=1;
}

//练习:打印1到10的和
var i=1;
var sum=0;
while(i<11)
	{ 
	sum=sum+i;
	i=++i;
	}
console.log(sum);
//练习:打印1到10的和
var i=2;
var sum=1;
while(i<11)
	{ 
	sum=sum*i;
	i=++i;
	}
console.log(sum);