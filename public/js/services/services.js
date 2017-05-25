+function($){
	$("#thucdon").hide();
}(jQuery);

$( function() {
    $( "#dialog-form" ).dialog({
    autoOpen: false,
    modal: true,
    height: 400,
    width: 350,
 	
  });
  
  $("#btnsetting").click(function() {
    $("#dialog-form").dialog('open');
  });

});

+function($){
	$("#thucdon-com-tam-suon-ong-gia-galaxy").click(function(){	
		$("#thucdon").hide();
		$("#thucdon").slideDown("slow");
		var menu_1 = '<a href="../../public/img/services_pictures/services_pic_15.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_15.jpg" width="300px" height="300px"></a>';
		var menu_2 = '<a href="../../public/img/services_pictures/services_pic_16.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_16.jpg" width="300px" height="300px"></a>';
		var menu_3 = '<a href="../../public/img/services_pictures/services_pic_17.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_17.jpg" width="300px" height="300px"></a>';
		var drink_1 = '<a href="../../public/img/services_pictures/services_pic_18.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_18.jpg" width="300px" height="300px"></a>';
		var drink_2 = '<a href="../../public/img/services_pictures/services_pic_19.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_19.jpg" width="300px" height="300px"></a>';
		var drink_3 = '<a href="../../public/img/services_pictures/services_pic_20.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_20.jpg" width="300px" height="300px"></a>';
		var orther_1 = '<a href="../../public/img/services_pictures/services_pic_21.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_21.jpg" width="300px" height="300px"></a>';
		var orther_2 = '<a href="../../public/img/services_pictures/services_pic_22.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_22.jpg" width="300px" height="300px"></a>';
		var orther_3 = '<a href="../../public/img/services_pictures/services_pic_23.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_23.jpg" width="300px" height="300px"></a>';		
		$("#service-one").children("a").remove();
		$("#service-two").children("a").remove();
		$("#service-three").children("a").remove();
		$("#service-one").append(menu_1, menu_2, menu_3);
		$("#service-two").append(drink_1, drink_2, drink_3);
		$("#service-three").append(orther_1, orther_2, orther_3);
	});		
	$("#tra-sua-ngo-duc-ke").click(function(){
		$("#thucdon").hide();
		$("#thucdon").slideDown("slow");
		var menu_1 = '<a href="../../public/img/services_pictures/services_pic_24.jpg " target="_blank"><img src="../../public/img/services_pictures/services_pic_24.jpg" width="300px" height="300px"></a>';
		var menu_2 = '<a href="../../public/img/services_pictures/services_pic_25.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_25.jpg" width="300px" height="300px"></a>';
		var menu_3 = '<a href="../../public/img/services_pictures/services_pic_26.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_26.jpg" width="300px" height="300px"></a>';
		var drink_1 = '<a href="../../public/img/services_pictures/services_pic_27.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_27.jpg" width="300px" height="300px"></a>';
		var drink_2 = '<a href="../../public/img/services_pictures/services_pic_28.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_28.jpg" width="300px" height="300px"></a>';
		var drink_3 = '<a href="../../public/img/services_pictures/services_pic_29.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_29.jpg" width="300px" height="300px"></a>';
		var orther_1 = '<a href="../../public/img/services_pictures/services_pic_30.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_30.jpg" width="300px" height="300px"></a>';
		var orther_2 = '<a href="../../public/img/services_pictures/services_pic_31.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_31.jpg" width="300px" height="300px"></a>';
		var orther_3 = '<a href="../../public/img/services_pictures/services_pic_32.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_32.jpg" width="300px" height="300px"></a>';
		$("#service-one").children("a").remove();
		$("#service-two").children("a").remove();
		$("#service-three").children("a").remove();
		$("#service-one").append(menu_1, menu_2, menu_3);
		$("#service-two").append(drink_1, drink_2, drink_3);
		$("#service-three").append(orther_1, orther_2, orther_3);
	});
	$("#buddy-chicken").click(function(){
		$("#thucdon").hide();
		$("#thucdon").slideDown("slow");
		var menu_1 = '<a href="../../public/img/services_pictures/services_pic_33.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_33.jpg" width="300px" height="300px"></a>';
		var menu_2 = '<a href="../../public/img/services_pictures/services_pic_34.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_34.jpg" width="300px" height="300px"></a>';
		var menu_3 = '<a href="../../public/img/services_pictures/services_pic_35.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_35.jpg" width="300px" height="300px"></a>';
		var drink_1 = '<a href="../../public/img/services_pictures/services_pic_36.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_36.jpg" width="300px" height="300px"></a>';
		var drink_2 = '<a href="../../public/img/services_pictures/services_pic_37.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_37.jpg" width="300px" height="300px"></a>';
		var drink_3 = '<a href="../../public/img/services_pictures/services_pic_38.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_38.jpg" width="300px" height="300px"></a>';
		var orther_1 = '<a href="../../public/img/services_pictures/services_pic_39.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_39.jpg" width="300px" height="300px"></a>';
		var orther_2 = '<a href="../../public/img/services_pictures/services_pic_40.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_40.jpg" width="300px" height="300px"></a>';
		var orther_3 = '<a href="../../public/img/services_pictures/services_pic_41.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_41.jpg" width="300px" height="300px"></a>';
		$("#service-one").children("a").remove();
		$("#service-two").children("a").remove();
		$("#service-three").children("a").remove();
		$("#service-one").append(menu_1, menu_2, menu_3);
		$("#service-two").append(drink_1, drink_2, drink_3);
		$("#service-three").append(orther_1, orther_2, orther_3);
	});
	$("#pha-lau-thailand").click(function(){
		$("#thucdon").hide();
		$("#thucdon").slideDown("slow");
		var menu_1 = '<a href="../../public/img/services_pictures/services_pic_42.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_42.jpg" width="300px" height="300px"></a>';
		var menu_2 = '<a href="../../public/img/services_pictures/services_pic_43.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_43.jpg" width="300px" height="300px"></a>';
		var menu_3 = '<a href="../../public/img/services_pictures/services_pic_44.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_44.jpg" width="300px" height="300px"></a>';
		var drink_1 = '<a href="../../public/img/services_pictures/services_pic_45.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_45.jpg" width="300px" height="300px"></a>';
		var drink_2 = '<a href="../../public/img/services_pictures/services_pic_46.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_46.jpg" width="300px" height="300px"></a>';
		var drink_3 = '<a href="../../public/img/services_pictures/services_pic_47.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_47.jpg" width="300px" height="300px"></a>';
		var orther_1 = '<a href="../../public/img/services_pictures/services_pic_48.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_48.jpg" width="300px" height="300px"></a>';
		var orther_2 = '<a href="../../public/img/services_pictures/services_pic_49.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_49.jpg" width="300px" height="300px"></a>';
		var orther_3 = '<a href="../../public/img/services_pictures/services_pic_50.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_50.jpg" width="300px" height="300px"></a>';
		$("#service-one").children("a").remove();
		$("#service-two").children("a").remove();
		$("#service-three").children("a").remove();
		$("#service-one").append(menu_1, menu_2, menu_3);
		$("#service-two").append(drink_1, drink_2, drink_3);
		$("#service-three").append(orther_1, orther_2, orther_3);
	});	
}(jQuery);

/*+function($){
	$("#btn_datmon_1").click(function(){
		$("#dialog").showModal();
	});
	$("#btn_datmon_2").click(function(){

	});
	$("#btn_datmon_3").click(function(){

	});
	$("#btn_datmon_4").click(function(){

	});	
}(jQuery);*/