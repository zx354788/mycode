// var lis = document.getElementsByTagName('li');
			// console.log(lis);
			// console.log(lis[0]);
			// for (var i= 0; i < lis.length; i++) {
			// 	console.log(lis);
			// }
			// var professor = document.getElementById('teacher');
			// var professorLis = professor.getElementsByTagName('li');
			// console.log(professorLis);
// var box = document.getElementsByClassName('box');//1、根据类名获得某些元素集合
// console.log(box);
// var firstBox = document.querySelector('.box'); //2、返回指定选择器的第一个元素对象，//ie9以下要考虑兼容性
// console.log(firstBox);
// var nav = document.querySelector('#nav');
// console.log(nav);
// var li = document.querySelector('li');
// console.log(li);

//修改元素属性src  1.获取元素
var cgx = document.getElementById('cgx');
var zym = document.getElementById('zym');
var img = document.querySelector('img');
// 2.注册事件  处理程序
zym.onclick = function() {
	img.src = 'images/zym.jpg';
	img.title = '仔仔';
}
cgx.onclick = function() {
	img.src = 'images/cgx.png';
	img.title = '陈老师';
}