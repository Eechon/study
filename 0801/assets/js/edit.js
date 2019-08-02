$(() => {
  let id = location.search.substring(4);
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:8080/getHeroById",
    data: { id },
    // dataType:"dataType",
    success: function(res) {
      // console.log(res);
      if (res.code === 200) {
        $("#name").val(res.data.name);
        let selector = res.data.gender === "男" ? "#man" : "#nv";
        $(selector).prop("checked", true);
        $("#headSrc").val(res.data.img);
        $("#id").val(res.data.id);
      }
    }
  }); /* end ajax */
  $("#sub").on("click", function() {
    let data = $("#form").serialize();
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:8080/editHeroById",
      data,
      success: function(res) {
        if (res.code == 200) {
          alert(res.msg);
          location.href = "/index";
        }
      }
    }); /* end ajax */
  }); /* end click */
});
