//打印5行5列的*
for (i=0;i<5;i++){
for (j=0,str='';j<5;j++)
{str+='※';
}console.log(str);
}
//打印直角三角形
for (i=0,str='';i<5;i++)
{   str+='★';
	console.log(str);
}
//方法2
for (i=1,str='';i<=5 ;i++ )
{
for (j=1,str='';j<=i ;j++ )
{str+='★';}
console.log(str);
}
//打印99乘法表
for (i=1,str='';i<10 ;i++ ){
for (j=1; j<=i;j++ ){
	str+=j+'*'+i+'='+i*j+' ';
}console.log(str);str='';
}

//倒印99乘法表
for (i=9,str='';i>0 ;i-- ){
for (j=1; j<=i;j++ ){
	str+=j+'*'+i+'='+i*j+' ';
}console.log(str);str='';
}