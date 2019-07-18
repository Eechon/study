$(() => {
  let id = location.search.substring(4);
  // console.log(id);
  let obj = phoneData.find(function(e, i) {
    return e.pID == id;
    // 这里有点不明白。返回id呢还是，返回id相同的内容呢，
    // id相同，true就返回？
  });
  $(".sku-name").text(obj.name);
  $(".summary-price em").text("￥" + obj.price);
  $(".preview-img>img").attr("src", obj.imgSrc);

  // 实现商品数量的加减
  /* 
    需求：获取按钮，注册点击事件
    点击+，让数字变大
    点击-，让数字变小，但是最小为1
   */
  let chooseNumber = $(".choose-number");
  let addBtn = $(".add");
  let reduceBtn = $(".reduce");

  // +按钮
  addBtn.on("click", function() {
    let old = parseInt(chooseNumber.val());
    old++;
    if (old > 1) {
      reduceBtn.removeClass("disabled");
    }
    // 需要把old赋值回去
    chooseNumber.val(old);
  });

  // -按钮
  reduceBtn.on("click", function() {
    let old = parseInt(chooseNumber.val());
    if (old === 1) {
      return;
    }
    old--;
    // 这里的处理需要注意
    if (old === 1) {
      reduceBtn.addClass("disabled");
    }
    chooseNumber.val(old);
  });

  /* 
    购物车
  */
  $(".addshopcar").on("click", function() {
    let number = parseInt($(".choose-number").val());
    // 获取购买数量
    let jsonStr = localStorage.getItem("shopCartData");
    // 判断是否已经存在
    let arr;
    if (jsonStr === null) {
      // 如果服务器上没有数据，那么创建一个空数组
      arr = [];
    } else {
      // 如果服务器上有数据，解析数据赋值给arr
      arr = JSON.parse(jsonStr);
    }

    // 重复加入购物车的商品，不会格外出现的新的商品，而是添加到之前加的同一商品中去
    // 处理办法：判断当前产品的ID，是否出现在了localStorage里面，如果出现了，就只叠加数量
    // find方法。当是ture的时候就就返回这个值，当没有满足条件的值得时候，就返回undefined
    let isExit = arr.find(e => {
      return e.pID === id;
    });
    // 通过find()的返回值就可以判断是否是重复添加的商品了
    if (isExit !== undefined) {
      // 就是重复添加，把数量加起来，把找到的这个值的number加起来；
      isExit.number += number;
    } else {
      // 如果没有才是新建一个
      // 创建对象存储数据，注意对象不是一定用构造函数创建的，通常使用字面量的形式创建的
      let good = {
        pID: obj.pID,
        name: obj.name,
        price: obj.price,
        imgSrc: obj.imgSrc,
        number: number
      };
      arr.push(good);
    }

    let jsonStr = JSON.stringify(arr);
    localStorage.setItem();

    // 点击购物车之后，跳转购物车界面进行结算；
    location.href = "cart.html";
  });
});
