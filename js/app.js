/**
 * Lawnchair sample code !!
 * --- 
 * caution !! this code is not enough for actual use.
 *
 */
$(function(){

    // define data group as "words".
    var store = new Lawnchair({name:'words'},function(store){
       // fetch all data.
       store.all(function(obj) {
      	 obj.forEach(function(d) {
    		 $("#words-list").append("<li id='" + d.key + "'><span class='words-delete'>x</span><input type='text' class='words-edit' value='" + d.words + "' disabled='disabled'></li>");
    	 });
       });
    });
   
  $("#words-btn").click(function () {
    // save data.
    store.save({words:$("#words").val()});
    $("#words-list").load();
  });  	

  $("#words-list").load(function () {

       $("#words-list").empty();
       store.all(function(obj) {
      	 obj.forEach(function(d) {
    		 $("#words-list").append("<li id='" + d.key + "'><span class='words-delete'>x</span><input type='text' class='words-edit' value='" + d.words + "' disabled='disabled'></li>");
    	 });
       });

  });  	

  $("#words-list li").dblclick(function () {
    $(this).children("input").removeAttr("disabled").focus();
  });  	

  $("input.words-edit").keypress(function (keycode) {
  	if (keycode.which == 13) {
      var id = $(this).parent("li").attr("id");
      store.save({key:id,words:$(this).val()});
  	}

  });  	

  $(".words-delete").click(function () {
  	var id = $(this).parent("li").attr("id");
  	
  	// delete data from store not "destroy" method.
    store.remove(id,function(){
    	$(this).parent("li").remove();
        $("#words-list").load();
    });
  });  	
         	
});    	
