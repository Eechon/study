/**
 * 
 * @param {element} element 点击的元素
 * @param {Function} callback 回调函数
 * @param {number} span 允许的按下时间偏差
 * @param {number} offset 允许的按下位置偏差
 */
function tap(element, callback, span, offset) {
    span = span || 200;
    offset = span || 50;
    // 记录开始时间
    let startTime = 0;
    // 记录开始位置
    let startX = 0;
    let startY = 0;
    // 注册触摸开始事件
    element.addEventListener("touchstart", function(e) {
        // 判断是否是单单指操作
        if (e.touches.length !== 1) {
            console.log("不是单指操作");
            return;
            // 判断出不是单指操作，就退出函数，返回了。以后判断出不是单指操作，可以指向双指操作
        }
        // 记录开始的时间
        startTime = Date.now();
        // 记录开始的数据
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    });

    element.addEventListener("touchend",function(e){
        // 结束也要判断是否是单指操作
        if (e.changedTouches.length !== 1){
            console.log("不是单指操作")
            return;
        }
        // 记录结束时间
        let endTime = Date.now();
        // 计算出时间间隔，判断
        if (endTime-startTime > span){
            console.log("按的时间太长了");
            return;
            // 和上面一样，可以跳到长按操作的函数去
        }
        // 记录结束位置
        let endX = e.changedTouches[0].pageX;
        let endY = e.changedTouches[0].pageY;
        // 计算出位置偏差
        if(Math.abs(startX-endX)>offset || Math.abs(startY- endY)>offset){
            console.log("位置偏差太大了");
            return;
        }
        // 此时就能确定是单机操作
        console.log("这是一个单机操作");
        // 同时确定是单击操作之后，需要做什么就是指向回调函数
        callback && callback();
    });
}
