// ;和匿名函数的作用是：形成一个局部作用域，防止其他代码的影响
;(function() {
  // 实现基本选择器
  // 实现css函数
  function jQuery(selector) {
    // 使用的时候只需要$就行了，不用new。函数里面是一个对象
    return new Init(selector);
  }
  // 上面那个还是函数，下面这个就是对象了，对象的自定义构造函数
  function Init(selector) {
    let dom = document.querySelectorAll(selector);
    for (let i = 0; i < dom.length; i++) {
      this[i] = dom[i];
    }
    this.length = dom.length;
  }

  // 伪数组遍历方法
  Init.prototype.each =function(callback){
    for(let i = 0;i<this.length;i++){
      callback(i,this[i]);
    }
  }

  Init.prototype.css = function(property, value) {
    //如果没有第二个参数就是获取元素属性
    if (value == undefined) {
      return window.getComputedStyle(this[0][property]);
    } else {
      // 建立一个存储了所有单位的属性名，以此判断需不需要帮忙带上单位
      // 示例数组，需要带单位的属性
      let pxArr = ["width", "height", "top", "left", "right"];
      for (let i = 0; i < this.length; i++) {
        if (pxArr.indexOf(property) !== -1) {
          //没有满足要求的值时，indexof会返回-1
          //满足条件，是要带单位的属性,接下来判断有咩有写单位
          if (value.toString().indexOf("px") === -1) {
            // 没有写单位，需要补上单位
            this[i].style[property] = value + "px";
          } else {
            // 写了单位，直接加上就行
            this[i].style[property] = value;
          }
        } else {
          // 不满足条件，不在其中,不用带单位的属性
          this[i].style[property] = value;
        }
      }
      // 最后返回this,用于链式编程
      return this;
    }
  };

  /* 实现addclass功能 */
  Init.prototype.addClass =function(className){
    for(let i = 0;i<this.length;i++){
      this[i].classList.add(className);
    }
    // 返回对象，用于链式编程
    return this;
  }

  /**
   * 封装移除类名的方法
   */
  Init.prototype.removeClass=function(){
    this
  }

  //第一步，把封装的JQuery函数变成window的一个属性，让匿名函数外面也可以使用
  // 把window.$赋值JQuery；
  window.$ = window.jQuery = jQuery;
})();
