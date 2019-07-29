/**
 * 先封装一个JQuery的serialize方法
 *
 * 1.获取form表单
 * 2.得到所有带name的元素
 * 3.遍历得到所有带name的后代元素
 */

function serialize(formSelector) {
  // 准备一个数组负责存储key=value的形式，最后使用join方法拼接
  let arr = [];
  let form = document.querySelector(formSelector);
  let eles = form.querySelectorAll("[name]");

  eles.forEach(e => {
    if (e.type === "radio" && e.checked) {
      // 获取name属性
      let key = e.name;
      // 获取value属性
      let value = e.value;
      // 变成键=值的形式
      arr.push(key + "=" + value);
    }

    // 处理那些不是radio的
    if (e.type !== "radio") {
      // 获取name属性
      let key = e.name;
      // 获取value属性
      let value = e.value;
      // 变成键=值的形式
      arr.push(key + "=" + value);
    }
  });

  return arr.join("&");
}

// let res = serialize("#myform");
// console.log(res);

// 点击新增加的时候，把数据收集起来，发送给服务器
let btn = document.querySelector("#sub");
btn.onclick = function() {
  // 使用上面封装的函数对form数据进行采集
  let data = serialize("#myform");
  let xhr = new XMLHttpRequest();
  xhr.open("get", "http://127.0.0.1:8080/addHero?" + data);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status === 200) {
      let res = JSON.parese(xhr.responseText);
      if (res.code === 200) {
        alert(res.msg);
      }
    }
  };
};
