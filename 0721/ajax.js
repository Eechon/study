/**
 *
 * @param {object || null} options
 *
 */
function ajax(options) {
  options = options || {};
  options.type = options.type || "get";
  options.url = options.url || "";
  options.data = options.data || "";
  options.callback =
    options.callback ||
    function(res) {
      console.log("没有设置回调函数，不建议这样做");
      console.log(res);
    };

  let xhr = new XMLHttpRequest();
  // 如果是get请求，则数据要拼接到url的后面
  if (options.type === "get") {
    options.url += "?" + options.data;
  }
  xhr.open(options.type, options.url);
  // 如果是post请求，把数据放在send里面，同时前面还需要设置请求头
  if (options.type === "post") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(options.data);
  } else {
    xhr.send();
  }

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        options.callback(xhr.responseText);
      }
    }
  };
} /* end ajax */
