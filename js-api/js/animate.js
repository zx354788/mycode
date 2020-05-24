function animate(obj, target, callback) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		//Math.ceil()  往上取整
		//Math.floor()  往下取整
		// var step = Math.ceil((target - obj.offsetLeft) / 10);
		var step = (target - obj.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		if (obj.offsetLeft == target) {
			clearInterval(obj.timer);
			callback && callback();
			//上面代码 callback && callback(); 等同于以下
			// if (callback) {  
			// 	callback();
			// }
		}
		//公式：（目标值 - 现在的位置） / 10 作为每次移动的距离步长
		obj.style.left = obj.offsetLeft + step + 'px';
	}, 20)
}
