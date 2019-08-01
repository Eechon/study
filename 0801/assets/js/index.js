$(() => {
  $("#tbody").on("click", "a:last-child", function() {
    if (!confirm("你确定要删除吗？")) {
      // 如果选择的是取消————false ，就是执行return
      return;
    }
    let id = $(this).attr("data-id");
    let _this = this;
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:8080/deleteHeroById",
      data: { id },
      success: function(res) {
        if (res.code === 200) {
          alert(res.msg);
          $(_this)
            .parents("tr")
            .remove();
        }
      }
    });
  });
});
