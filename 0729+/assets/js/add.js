$(() => {
  // 点击新增到服务器
  $("#sub").on("click", function() {
    // 非空判断

    // 收集数据
    let data = $("#myform").serialize();
    console.log(data);
    // ajax请求
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:8080/addNewHero",
      data,
      dataType: "json",
      success: function(res) {
        console.log(res);
        if (res.code === 200) {
          alert(res.msg);
        }
      }
    }); /* end ajax */
  });
});
