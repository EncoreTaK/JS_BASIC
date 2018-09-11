//练习:声明变量，保存密码123456，循环do-while弹出提示框，如果输入的值是正确的，弹出login success，结束循环
var pwd=123456;
do
{var str=prompt('请你输入你的密码');
if (str==pwd)
{ alert('登录成功');break;}
}
while(true)
