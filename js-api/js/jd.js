window.addEventListener('load',function(){
	var img = document.querySelector('.preview_img');
	var mask = document.querySelector('.mask');
	var big = document.querySelector('.big');
	var bigImg = document.querySelector('.bigImg');
	img.addEventListener('mouseover',function(){
		mask.style.display = 'block';
		big.style.display = 'block';
	})
	img.addEventListener('mouseout',function(){
		mask.style.display = 'none';
		big.style.display = 'none';
	})
	img.addEventListener('mousemove',function(e){
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		maskX = x - mask.offsetWidth/2;
		maskY = y - mask.offsetHeight/2;
		var maskMax = this.offsetWidth - mask.offsetWidth;
		maskX <= 0 ? maskX = 0 : maskX;
		maskX >= maskMax ? maskX = maskMax : maskX;
		maskY <= 0 ? maskY = 0 : maskY;
		maskY >= maskMax ? maskY = maskMax : maskY;
		mask.style.left = maskX + 'px';
		mask.style.top = maskY + 'px';
		var bigMax = bigImg.offsetWidth - big.offsetWidth;
		bigImgX = bigMax*maskX / maskMax;
		bigImgY = bigMax*maskY / maskMax;
		bigImg.style.left = -bigImgX + 'px';
		bigImg.style.top = -bigImgY + 'px';
	})
})