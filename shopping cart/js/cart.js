/* cart页面js */
$(() => {
  // 先将数据从本地存储中读取出来
  let jsonStr = localStorage.getItem("shopCartData");
  let arr;
  if (jsonStr !== null) {
    arr = JSON.parse(jsonStr);
    let html = "";
    arr.forEach(e => {
      html += `<div class="item" data-id="${e.pID}">
      <div class="row">
        <div class="cell col-1 row">
          <div class="cell col-1">
            <input type="checkbox" class="item-ck" checked="">
          </div>
          <div class="cell col-4">
            <img src="${e.imgSrc}" alt="">
          </div>
        </div>
        <div class="cell col-4 row">
          <div class="item-name">${e.name}</div>
        </div>
        <div class="cell col-1 tc lh70">
          <span>￥</span>
          <em class="price">${e.price}</em>
        </div>
        <div class="cell col-1 tc lh70">
          <div class="item-count">
            <a href="javascript:void(0);" class="reduce fl">-</a>
            <input autocomplete="off" type="text" class="number fl" value="${
              e.number
            }">
            <a href="javascript:void(0);" class="add fl">+</a>
          </div>
        </div>
        <div class="cell col-1 tc lh70">
          <span>￥</span>
          <em class="computed">${e.price * e.number}</em>
        </div>
        <div class="cell col-1">
          <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
        </div>
      </div>
    </div>`;
    });
    // 把html添加到div里面
    $(".item-list").html(html);
    // 隐藏购物车是空的
    $(".empty-tip").hide();
    // 显示表头和总计
    $(".cart-header").removeClass("hidden");
    $(".total-of").removeClass("hidden");
  }

  // 计算总和和总价
  function computedCountAndMoney() {
    let totalCount = 0;
    let totalMoney = 0;
    $(".item-list input[type=checkbox]:checked").each((i, e) => {
      // 根据选中的框的属性，得到对应id，通过其数量和价格算出对应的总件数和总价格
      let id = parseInt(
        $(e)
          .parents(".item")
          .attr("data-id")
      );
      arr.forEach(e => {
        if (id === e.pID) {
          totalCount += e.number;
          totalMoney += e.number * e.price;
        }
      });
    });
    // 最后修改数量和总价
    $(".selected").text(totalCount);
    $(".total-money").text(totalMoney);
  } /* end computedCountAndMoney */
  computedCountAndMoney(); //这个计算总价并不是传入哪里需要计算，然后计算给你，而是直接计算哪里需要计算

  // 全选和全不选
  $(".pick-all").on("click", function() {
    // 获取全选的状态
    let status = $(this).prop("checked");
    // 把商品都设置和全选一样的状态
    $(".item-ck").prop("checked", status);
    // 这里有两个全选
    $(".pacK-all").prop("checked", status);
    // 弄完之后还要计算总数和总价
    computedCountAndMoney();
  });

  // 单选判断全选
  $(".item-ck").on("click", function() {
    let isAll = $(".item-ck").length === $(".item-ck:checked").length;
    $(".pack-all").prop("checked", isAll);
    computedCountAndMoney();
  });

  // 实现加减，这里需要用委托的方式
  $(".item-list").on("click", ".add", function() {
    // 这里得this通过jq的处理是指向.add。然后获取加减中间显示用的input的val
    let oldVal = parseInt(
      $(this)
        .siblings("input")
        .val()
    );
    oldVal++;
    if (oldVal > 1) {
      // 判断如果数值大于1，就把减号的不可选取状态去掉
      $(this)
        .siblings(".reduce")
        .removeClass("disabled");
    }
    // 加完之后这只会去
    $(this)
      .siblings("input")
      .val(oldVal);

    // 改变了之后还要把本地存储的也修改了
    // 改的话需要根据id挑出相关的数据，然后下载修改数据，再上传
    let id = parseInt(
      $(this)
        .parents(".item")
        .attr("data-id")
    );
    let obj = arr.find(e => {
      return e.pID === id;
    });

    obj.number = oldVal;
    let jsonStr = JSON.stringify(arr);
    localStorage.setItem("shopCartData".jsonStr);
    computedCountAndMoney();

    // 最后对应的商品的钱也需要计算
    $(this)
      .parents(".item")
      .find(".computed")
      .text(obj.price * obj.number);
  });

  //减少按键
  $(".item-list").on("click", ".reduce", function() {
    let oldVal = parseInt(
      $(this)
        .siblings("input")
        .val()
    );
    if (oldVal === 1) {
      // 如果是1就返回
      return;
    }
    oldVal--;
    if (oldVal === 1) {
      // 如果减完是1，那么就设置不能点击
      $(this).addClass("disabled");
    }
    $(this)
      .siblings("input")
      .val(oldVal);
    let id = parseInt(
      $(this)
        .parents(".item")
        .attr("data-id")
    );
    let obj = arr.find(e => {
      return e.pID === id;
    });
    obj.number= oldVal;
    let jsonStr = JSON.stringify(arr);
    localStorage.setItem("shopCartData",jsonStr);
    computedCountAndMoney();
    $(this).parents(".item").find(".computed").text(obj.price*obj.number);
  });

  // 删除
  $(".item-list").on("click",".item-del",function(){
    let _this = this;//可以作为一个习惯，因为有时候this对象会改变
    // 不用在文件导入其他js，在html中先于引用就行了
    // 这里引用了JQuery-UI
    $("#dialog-confirm").dialog({
      resizable:false,
      height: 140,
      modal:true,
      buttons:{

      }/* end buttons */
    });

/*     {
      name:橙红嘤,
      age：unknow,
      sex：unkonw,
      identity: blockhold

      function 解药(){
        if(橙红嘤被刀){
          使用解药;
        }else{
          不使用解药;
        }
      }

      function 毒药(){
        if(橙红嘤没死){
          毒死预言家;
        }
      }
    }; */

  });
});
