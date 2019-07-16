/**
 * @author Eechon
 * @param {element} element 点击的元素
 * @param {function} callback 回调函数
 * @param {number} span 允许的按下时间差
 * @param {number} offset 允许的按下位置差
 */

/* 
    函数作用是，判断是不是一个移动端的单击操作
 */
// function tap(element, callback, span, offset) {
// es6给变量设置默认值
function tap(element, callback, span=200, offset=50) {
    // 给非必要变量设置默认属性，短路运算设置默认值
    // 这里设置默认属性的，前面我在数据结构的书上看过，待会看看
    // span = span || 200;
    // offset = offset || 50;
    // 记录开始时间变量,不在事件内声明是因为，多个事件会用到
    let startTime = 0;
    // 记录开始位置变量
    let startX = 0;
    let startY = 0;
    // 注册触摸开始事件
    element.addEventListener("touchstart", function(e) {
        // 先判断是否单指操作
        if (e.touches.length !== 1) {
            console.log("开始时不是单指操作");
            return;
        }
        startTime = Date.now();
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    });
    element.addEventListener("touchend", function(e) {
        // 还是先判断是否是单指操作
        if (e.changedTouches.length !== 1) {
            console.log("离开时不是单指操作");
            return;
        }
        let endTime = Date.now();
        if (endTime - startTime > span) {
            console.log("按下的时间太长了");
            return;
        }
        let endX = e.changedTouches[0].pageX;
        let endY = e.changedTouches[0].pageY;
        // 刚刚的时间相间不会出负数，但是这里的位置相减是会出负数的啊
        if (
            Math.abs(endX - startX) > offset ||
            Math.abs(endY - startY) > offset
        ) {
            console.log("位置偏差太大了");
            return;
        }
        console.log("这是一个单击操作");
        callback && callback();
    });
}
