function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//随机获取验证码函数 6位
function checkNum() {
	//保存验证码数组
	var arr = [];
	//循环6次获取验证码
	for (var i = 0; i < 6; i++) {
		//每次循环创建一个随机字符 askII码
		//数字大小写字母askII码在48-122区间
		var code = rand(48, 122);
		//将不是数字字母的askII码排除
		if ((code >= 58 && code <= 64) || (code >= 91 && code <= 96)) {
		//防止随机到非数字字母而减少循环次数
			i--;
		} else {
		//获取到字母数字将askII码转换为字符，存入数组
			arr[i] = string.fromCharCode(code);
		}
	}
}
