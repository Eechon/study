$(() => {
  //
  $("#sub").on("click", function() {
    let data = $("#myform").serialize();
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:8080/addNewHero",
      data,
      success: function(res) {
        console.log(res);
      }
    });
  });
});
