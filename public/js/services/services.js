//Xử lí khi page load
+function($){
	$("#thucdon").hide();
	$("#formdatmon").hide();
}(jQuery);


//Xử lí ServiveTabs -  Hiển thị hình ảnh trong mục Thực đơn
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

//Xử lí ServiceList - Hiển thị cảnh báo khi chọn các phần tử trong List
+function($){
	var x = "Tính năng này đang được phát triển";
	$("#btn-bun-bo-o-gai").click(function(){
		alert(x);
	});
	$("#btn-vi-thai-am-thuc-thai-lan").click(function(){
		alert(x);
	});
	$("#btn-ABMA-nem-nuong-nha-trang").click(function(){
		alert(x);
	});
	$("#btn-rang-rua-he-com-ga").click(function(){
		alert(x);
	});
	$("#btn-quan-ga-co-bap").click(function(){
		alert(x);
	});
	$("#btn-lau-ga-tiem-ot-hiem").click(function(){
		alert(x);
	});
	$("#btn-ga-nuong-o-o-o-le-van-sy").click(function(){
		alert(x);
	});
	$("#btn-uncle-tea-tra-dai-loan-dinh-tien-hoang").click(function(){
		alert(x);
	});
	$("#btn-kimbong-toast-drink").click(function(){
		alert(x);
	});
}(jQuery);

//Xử lí ServicePanels - Hiển thị form đặt món khi nhấn nút đặt ngay
+function($){ 
  	$("#btn_datmon_1").click(function() {
    	$("#formdatmon").show();    	
  	});
  	$("#btn_datmon_2").click(function() {
    	$("#formdatmon").show();
  	});
  	$("#btn_datmon_3").click(function() {
    	$("#formdatmon").show();
  	});
  	$("#btn_datmon_4").click(function() {
    	$("#formdatmon").show();
  	});  
}(jQuery);

//Xử lí các event trên form đặt món
+function($){
	$("#btn_datmonngay").click(function(){
		if(validateEmail($("input[name='email']").val()) == true){
			if(($("input[name='name']").val() != "") && ($("input[name='phone']").val() != "") && ($("textarea[name='comment']").val() != "")){
				$("input[name='name']").val("");
				$("input[name='email']").val("");
				$("input[name='phone']").val("");
				$("textarea[name='comment']").val("");
				$("#formdatmon").hide();
	  			alert("Bạn đã đặt món thành công.");
			}  	
			else{
				alert("Thông tin còn trống vui lòng kiểm tra lại.");
			}
		}
		else{
			alert("Email chưa chính xác vui lòng kiểm tra lại");
		}			
  	});   		
  	function validateEmail(email) {
	    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return pattern.test(email);
	}
	$("#btn_huydatmonngay").click(function(){
		$("#formdatmon").hide();
  	});    	
}(jQuery);

