//Xử lí khi page load
+function($){
	$("#thucdon").hide();
	$("#formdatmon").hide();
	$("#servicemaps").hide();
}(jQuery);


//Xử lí ServiveTabs -  Hiển thị hình ảnh trong mục Thực đơn
+function($){
	$("#thucdon-com-tam-suon-ong-gia-galaxy").click(function(){	
		$("#servicetabs-title").children("h2").remove();
		$("#servicetabs-title").append('<h2 class="page-header">Thực đơn</h2>')
		$("#thucdon").hide();
		$("#thucdon").slideDown("slow");		
		var menu_1 = '<a href="../../public/img/services_pictures/services_pic_15.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_15.jpg" width="190px" height="190px"></a>';
		var menu_2 = '<a href="../../public/img/services_pictures/services_pic_16.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_16.jpg" width="190px" height="190px"></a>';
		var menu_3 = '<a href="../../public/img/services_pictures/services_pic_17.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_17.jpg" width="190px" height="190px"></a>';
		var menu_4 = '<a href="../../public/img/services_pictures/services_pic_18.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_18.jpg" width="190px" height="190px"></a>';
		var menu_5 = '<a href="../../public/img/services_pictures/services_pic_19.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_19.jpg" width="190px" height="190px"></a>';
		var menu_6 = '<a href="../../public/img/services_pictures/services_pic_20.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_20.jpg" width="190px" height="190px"></a>';
		var menu_7 = '<a href="../../public/img/services_pictures/services_pic_21.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_21.jpg" width="190px" height="190px"></a>';
		var menu_8 = '<a href="../../public/img/services_pictures/services_pic_22.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_22.jpg" width="190px" height="190px"></a>';
		var menu_9 = '<a href="../../public/img/services_pictures/services_pic_23.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_23.jpg" width="190px" height="190px"></a>';		
		$("#service-one").children("a").remove();
		/*$("#service-two").children("a").remove();
		$("#service-three").children("a").remove();*/
		$("#service-one").append(menu_1, menu_2, menu_3, menu_4, menu_5, menu_6, menu_7, menu_8, menu_9);
		/*$("#service-two").append(drink_1, drink_2, drink_3);
		$("#service-three").append(orther_1, orther_2, orther_3);*/
	});		
	$("#tra-sua-ngo-duc-ke").click(function(){
		$("#servicetabs-title").children("h2").remove();
		$("#servicetabs-title").append('<h2 class="page-header">Thực đơn</h2>')
		$("#thucdon").hide();
		$("#thucdon").slideDown("slow");
		var menu_1 = '<a href="../../public/img/services_pictures/services_pic_24.jpg " target="_blank"><img src="../../public/img/services_pictures/services_pic_24.jpg" width="190px" height="190px"></a>';
		var menu_2 = '<a href="../../public/img/services_pictures/services_pic_25.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_25.jpg" width="190px" height="190px"></a>';
		var menu_3 = '<a href="../../public/img/services_pictures/services_pic_26.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_26.jpg" width="190px" height="190px"></a>';
		var menu_4 = '<a href="../../public/img/services_pictures/services_pic_27.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_27.jpg" width="190px" height="190px"></a>';
		var menu_5 = '<a href="../../public/img/services_pictures/services_pic_28.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_28.jpg" width="190px" height="190px"></a>';
		var menu_6 = '<a href="../../public/img/services_pictures/services_pic_29.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_29.jpg" width="190px" height="190px"></a>';
		var menu_7 = '<a href="../../public/img/services_pictures/services_pic_30.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_30.jpg" width="190px" height="190px"></a>';
		var menu_8 = '<a href="../../public/img/services_pictures/services_pic_31.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_31.jpg" width="190px" height="190px"></a>';
		var menu_9 = '<a href="../../public/img/services_pictures/services_pic_32.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_32.jpg" width="190px" height="190px"></a>';
		$("#service-one").children("a").remove();
		/*$("#service-two").children("a").remove();
		$("#service-three").children("a").remove();*/
		$("#service-one").append(menu_1, menu_2, menu_3, menu_4, menu_5, menu_6, menu_7, menu_8, menu_9);
		/*$("#service-two").append(drink_1, drink_2, drink_3);
		$("#service-three").append(orther_1, orther_2, orther_3);*/
	});
	$("#buddy-chicken").click(function(){
		$("#servicetabs-title").children("h2").remove();
		$("#servicetabs-title").append('<h2 class="page-header">Thực đơn</h2>')
		$("#thucdon").hide();
		$("#thucdon").slideDown("slow");
		var menu_1 = '<a href="../../public/img/services_pictures/services_pic_33.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_33.jpg" width="190px" height="190px"></a>';
		var menu_2 = '<a href="../../public/img/services_pictures/services_pic_34.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_34.jpg" width="190px" height="190px"></a>';
		var menu_3 = '<a href="../../public/img/services_pictures/services_pic_35.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_35.jpg" width="190px" height="190px"></a>';
		var menu_4 = '<a href="../../public/img/services_pictures/services_pic_36.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_36.jpg" width="190px" height="190px"></a>';
		var menu_5 = '<a href="../../public/img/services_pictures/services_pic_37.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_37.jpg" width="190px" height="190px"></a>';
		var menu_6 = '<a href="../../public/img/services_pictures/services_pic_38.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_38.jpg" width="190px" height="190px"></a>';
		var menu_7 = '<a href="../../public/img/services_pictures/services_pic_39.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_39.jpg" width="190px" height="190px"></a>';
		var menu_8 = '<a href="../../public/img/services_pictures/services_pic_40.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_40.jpg" width="190px" height="190px"></a>';
		var menu_9 = '<a href="../../public/img/services_pictures/services_pic_41.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_41.jpg" width="190px" height="190px"></a>';
		$("#service-one").children("a").remove();
		/*$("#service-two").children("a").remove();
		$("#service-three").children("a").remove();*/
		$("#service-one").append(menu_1, menu_2, menu_3, menu_4, menu_5, menu_6, menu_7, menu_8, menu_9);
		/*$("#service-two").append(drink_1, drink_2, drink_3);
		$("#service-three").append(orther_1, orther_2, orther_3);*/
	});
	$("#pha-lau-thailand").click(function(){
		$("#servicetabs-title").children("h2").remove();
		$("#servicetabs-title").append('<h2 class="page-header">Thực đơn</h2>')
		$("#thucdon").hide();
		$("#thucdon").slideDown("slow");
		var menu_1 = '<a href="../../public/img/services_pictures/services_pic_42.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_42.jpg" width="190px" height="190px"></a>';
		var menu_2 = '<a href="../../public/img/services_pictures/services_pic_43.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_43.jpg" width="190px" height="190px"></a>';
		var menu_3 = '<a href="../../public/img/services_pictures/services_pic_44.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_44.jpg" width="190px" height="190px"></a>';
		var menu_4 = '<a href="../../public/img/services_pictures/services_pic_45.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_45.jpg" width="190px" height="190px"></a>';
		var menu_5 = '<a href="../../public/img/services_pictures/services_pic_46.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_46.jpg" width="190px" height="190px"></a>';
		var menu_6 = '<a href="../../public/img/services_pictures/services_pic_47.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_47.jpg" width="190px" height="190px"></a>';
		var menu_7 = '<a href="../../public/img/services_pictures/services_pic_48.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_48.jpg" width="190px" height="190px"></a>';
		var menu_8 = '<a href="../../public/img/services_pictures/services_pic_49.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_49.jpg" width="190px" height="190px"></a>';
		var menu_9 = '<a href="../../public/img/services_pictures/services_pic_50.jpg" target="_blank"><img src="../../public/img/services_pictures/services_pic_50.jpg" width="190px" height="190px"></a>';
		$("#service-one").children("a").remove();
		/*$("#service-two").children("a").remove();
		$("#service-three").children("a").remove();*/
		$("#service-one").append(menu_1, menu_2, menu_3, menu_4, menu_5, menu_6, menu_7, menu_8, menu_9);
		/*$("#service-two").append(drink_1, drink_2, drink_3);
		$("#service-three").append(orther_1, orther_2, orther_3);*/
	});	
}(jQuery);
//Xử lí ServiceTabs - Hiển thị iframe google khi nhấp vào địa chỉ
+function($){
	$("#dia-chi-thucdon-com-tam-suon-ong-gia-galaxy").click(function(){
		$("#servicemaps").show();	
		$("#servicemaps_iframe").children("iframe").remove();
		$("#servicemaps_iframe").append('<iframe width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:Ek8yMzYgTmd1eeG7hW4gSOG7k25nIMSQw6BvLCBwaMaw4budbmcgMTQsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt&key=AIzaSyB7o4nDiGfqDsEuMrg2iJEPH9F8RqWXYf4" allowfullscreen></iframe>');
	});		
	$("#dia-chi-tra-sua-ngo-duc-ke").click(function(){
		$("#servicemaps").show();	
		$("#servicemaps_iframe").children("iframe").remove();
		$("#servicemaps_iframe").append('<iframe width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-e6_NkEvdTERo0WnGrmzA5I&key=AIzaSyB7o4nDiGfqDsEuMrg2iJEPH9F8RqWXYf4" allowfullscreen></iframe>');
	});	
	$("#dia-chi-buddy-chicken").click(function(){
		$("#servicemaps").show();	
		$("#servicemaps_iframe").children("iframe").remove();
		$("#servicemaps_iframe").append('<iframe width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ05-S2kAvdTERWrMf60MjLZw&key=AIzaSyB7o4nDiGfqDsEuMrg2iJEPH9F8RqWXYf4" allowfullscreen></iframe>');
	});	
	$("#dia-chi-pha-lau-thailand").click(function(){
		$("#servicemaps").show();	
		$("#servicemaps_iframe").children("iframe").remove();
		$("#servicemaps_iframe").append('<iframe width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?q=place_id:Ekk1MTUgQW4gRMawxqFuZyBWxrDGoW5nLCBwaMaw4budbmcgMywgUXXhuq1uIDUsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt&key=AIzaSyB7o4nDiGfqDsEuMrg2iJEPH9F8RqWXYf4" allowfullscreen></iframe>');
	});	
	$("#close_servicemaps").click(function(){
		$("#servicemaps").hide();
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
  		var	menu = '<option value="0">Menu Cơm Tấm Sườn - Ông Già Galaxy</option>';
  		var mon_1 = '<option value="1">Cơm sườn nướng - 28000đ</option>';
  		var mon_2 = '<option value="2">Cơm sườn non nướng - 35000đ</option>';
  		var mon_3 = '<option value="3">Cơm đùi gà nướng - 32000đ</option>';
  		var mon_4 = '<option value="4">Cơm sườn non rim - 35000đ</option>';
  		var mon_5 = '<option value="5">Cơm thịt khi trứng - 30000đ</option>';
  		var mon_6 = '<option value="6">Cơm cá hú kho tộ - 30000đ</option>';
  		var mon_7 = '<option value="7">Cơm lóc non nướng - 35000đ</option>';
  		var mon_8 = '<option value="8">Cơm sườn non nướng - 35000đ</option>';
  		var mon_9 = '<option value="9">Cơm sườn non nướng - 35000đ</option>';
  		var mon_10 = '<option value="10">Cơm sườn + bì + chả - 38000đ</option>';
    	$("#formdatmon").show();    	
    	$("#list-menu").children("option").remove();	
    	$("#list-menu").append(menu, mon_1, mon_2, mon_3, mon_4, mon_5, mon_6, mon_7, mon_8, mon_9, mon_10);
		/*$("#list-menu").append(menu, mon_1, mon_2, mon_3, mon_4, mon_5, mon_6, mon_7, mon_8, mon_9, mon_10, mon_11, mon_12, mon_13, mon_14, mon_15, mon_16, mon_17, mon_18, mon_19, mon_20, mon_1, mon_2, mon_3, mon_4, mon_5, mon_26, mon_27, mon_28, mon_29, mon_30);		*/
  	});
  	$("#btn_datmon_2").click(function() {
    	var	menu = '<option value="0">Menu Trà Sữa R&B Tea - Ngô Đức Kế</option>';
  		var mon_1 = '<option value="1">Trà sữa tươi trân châu - 53000đ</option>';
  		var mon_2 = '<option value="2">Trà sữa oreo chocolate cream - 55000đ</option>';
  		var mon_3 = '<option value="3">Hồng trà cream - 50000đ</option>';
  		var mon_4 = '<option value="4">Trà sữa tươi trân châu dragon - 65000đ</option>';
  		var mon_5 = '<option value="5">Trà sữa trân châu dragon - 55000đ</option>';
  		var mon_6 = '<option value="6">Trà oolong cream - 55000đ</option>';
  		var mon_7 = '<option value="7">Trà sữa ngũ cốc cream - 55000đ</option>';
  		var mon_8 = '<option value="8">Trà sữa trân châu - 45000đ</option>';
  		var mon_9 = '<option value="9">Trà oolong hoa hồng cream - 55000đ</option>';
  		var mon_10 = '<option value="10">Trà xanh đào - 46000đ</option>';
    	$("#formdatmon").show();    	
    	$("#list-menu").children("option").remove();	
		$("#list-menu").append(menu, mon_1, mon_2, mon_3, mon_4, mon_5, mon_6, mon_7, mon_8, mon_9, mon_10);
  	});
  	$("#btn_datmon_3").click(function() {
    	var	menu = '<option value="0">Menu Buddy Chicken - Chicken, Drinks & Hot Foods</option>';
  		var mon_1 = '<option value="1">Gà rán trái tim - 50000đ</option>';
  		var mon_2 = '<option value="2">Mực viên - 35000đ</option>';
  		var mon_3 = '<option value="3">Chả mực - 38000đ</option>';
  		var mon_4 = '<option value="4">Củ hành khoanh - 30000đ</option>';
  		var mon_5 = '<option value="5">Bánh khoai tây - 28000đ</option>';
  		var mon_6 = '<option value="6">Gà viên - 42000đ</option>';
  		var mon_7 = '<option value="7">Gà trái tim + trà bí đao - 59000đ</option>';
  		var mon_8 = '<option value="8">Khoai tây chiên - 22000đ</option>';
  		var mon_9 = '<option value="9">Chân gà - 15000đ</option>';
  		var mon_10 = '<option value="10">Trà bí đao - 25000đ</option>';
    	$("#formdatmon").show();    	
    	$("#list-menu").children("option").remove();	
		$("#list-menu").append(menu, mon_1, mon_2, mon_3, mon_4, mon_5, mon_6, mon_7, mon_8, mon_9, mon_10);	
  	});
  	$("#btn_datmon_4").click(function() {
    	var	menu = '<option value="0">Menu Phá Lấu Thailand</option>';
  		var mon_1 = '<option value="1">Phá lấu Thái Lan - 33000đ</option>';
  		var mon_2 = '<option value="2">Phá lấu truyền thống - 33000đ</option>';
  		var mon_3 = '<option value="3">Mì phá lấu Thái Lan - 43000đ</option>';
  		var mon_4 = '<option value="4">Mì phá lấu truyền thống - 38000đ</option>';
  		var mon_5 = '<option value="5">Trà tắc - 15000đ</option>';
  		var mon_6 = '<option value="6">Mì trộn phá lấu Thái Lan - 43000đ</option>';
  		var mon_7 = '<option value="7">Bánh mì - 3000đ</option>';
  		var mon_8 = '<option value="8">Khô bò chén - 20000đ</option>';
  		var mon_9 = '<option value="9">Gỏi khô bò - 25000đ</option>';
  		var mon_10 = '<option value="10">Lẩu phá lấu Thái Lan - 145000đ</option>';
    	$("#formdatmon").show();    	
    	$("#list-menu").children("option").remove();	
		$("#list-menu").append(menu, mon_1, mon_2, mon_3, mon_4, mon_5, mon_6, mon_7, mon_8, mon_9, mon_10);	
  	});  
}(jQuery);

//Xử lí các event trên form đặt món
+function($){
	$("#btn_datmonngay").click(function(){
		if(validateEmail($("input[name='email']").val()) == true){
			if(($("input[name='name']").val() != "") && ($("input[name='phone']").val() != "")){
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

