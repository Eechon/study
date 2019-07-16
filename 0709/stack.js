/**
 * 学习数据结构栈
 */
function Stack() {
  // 书中讲的是"我们将创建一个类来表示栈.但是在我现在的认识中这是一个创建对象的构造函数
  let items = []; //用数组来保存栈内元素
  this.push = function(element) {
    items.push(element);
  };
  this.pop = function() {
    return items.pop();
  };
  this.peek = function() {
    return items[items.length - 1];
  };
  this.isEmpty = function() {
    return items.length == 0;
  };
  this.size = function() {
    return items.length;
  };
  this.size = function() {
    items = [];
  };
  this.print = function() {
    console.log(items.toString());
  };
}
