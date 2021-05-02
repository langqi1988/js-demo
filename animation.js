/*
封装函数 animate（）动画函数
功能 传入元素，对象（键名为要修改的样式，键值为要修改的数值，不带PX）
*/

//获取元素 样式的函数 已做兼容处理（IE以及非IE）
function getStyle(el, property) {
	if (getComputedStyle) {
		return getComputedStyle(el)[property];
	} else {
		return el.currentStyle[property];
	}
}

//封装动画函数
function animate(el, properties) {
	clearInterval(el.timerId);
	el.timerId = setInterval(function() {
		for (var property in properties) {
			//去掉PX 取数值
			var current;
			//property去的是键名  properties[property]是键值
			var target = properties[property];
			//opacity样式无PX 分开计算当前元素样式数值
			if (property === 'opacity') {
				//*100为了计算速度方便
				current = Math.round(parseFloat(getStyle(el, 'opacity')) * 100);
			} else {
				current = parseInt(getStyle(el, property));
			}
			//定义速度
			var speed = (target - current) / 30;
			//如果速度是特别小的小数可能会导致速度为0，所以如下
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			//因为opacity样式没有PX 所以判断改样式
			if (property === 'opacity') {
				el.style.opacity = (current + speed) / 100;
			} else {
				el.style[property] = current + speed + 'px';
			}
		}
	}, 20);
}
