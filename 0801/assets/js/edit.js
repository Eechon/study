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
        let selector = res.data;
      }
    }
  });
});
