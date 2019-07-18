$(()=>{
  let id = location.search.substring(4);
  let obj = phoneData.find(function(e,i){
    return e.pId == id;
  });
  $(".sku-name").text(obj.name);
  $(".summary-price em").text("￥"+obj.price);
  $(".preview-img>img").attr("src",obj.imgSrc);

  let chooseNumber = $(".choose-number");
  let addBtn = $(".add");
  let reduceBtn = $(".reduce");

  // +按钮
  addBtn.on("click",function(){
    let old = 
  });
});