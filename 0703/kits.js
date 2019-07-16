let kits = {};
// 固定格式输出日期
kits.formateDate = function() {
    let date = new Date();
    let y = date.getFullYear();
    let M = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    M = M < 10 ? "0" + M : M;
    d = d < 10 ? "0" + d : d;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
}

// 生成随机整数
kits.randomInt = function(n, m) {
    return Math.floor(Math.random() * (m - n + 1) - n);
}

// 生成随机id
kits.primaryKey = function() {
    let now = Date.now(); //得到从1970到现在总的毫秒数
    // 生成一个6位的随机数
	let r = kits.randomInt(100000, 999999);
	// 拼接成字符串
    return now + "" + r;
}
