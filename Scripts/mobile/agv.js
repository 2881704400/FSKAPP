function agv() {
	// agvAjaxData(2001);

	var mySwiper = new Swiper('#swiperContainerId', {
		autoplay: false, //可选选项，自动滑动
		slidesPerView: 5,
		//			loop:true,
		on: {
			click: function(dom) {
				var id = mySwiper.clickedIndex;
				$(".swiper-slide").eq(id).addClass("swiperSlideBackImg").siblings().removeClass("swiperSlideBackImg");
//				getFloorData(mySwiper.clickedSlide.id)
			}
		}
	});
	
	$(".navbar").addClass("noShadow");

	/*setInterval(function() {
		$(".agv_CoordX").html(Math.round(1000 * Math.random()));
		$(".agv_CoordY").html(Math.round(1000 * Math.random()));
		$(".agv_angle").html(Math.round(100 * Math.random()) + " deg");
	}, 3000);*/
}

function agvAjaxData(equip_no_0) {

	var jsonData = {
		"url": "/api/real/equip_item_state",
		"data": {
			equip_no: equip_no_0
		},
		"success": _success,
		"error": _error,
		"complete": _complete
	};
	jQuery.axpost(jsonData);

	function _success(dt) {
		var result = dt.HttpData.data.YCItemDict;
		for(var ycp in result) {
			handleString(result[ycp].m_iYCNo, result[ycp].m_YCValue);
		}
		handleString(4, 76);
	}

	function _error(e) {
		console.log(e);
	}

	function _complete(XMLHttpRequest, status) {

	}

	function handleString(ycp_no, value) {
		switch(ycp_no.toString()) { //console.log(value+","+ycp_no);
			case "1":
				$(".agv_ConnectState").html(value);
				break;
			case "2":
				$(".agv_AGVNo").html(value);
				break;
			case "3":
				$(".agv_MoveState").html(value);
				break;
			case "4":
				$(".agv_ElectricQuantityValue").html(value);
				$(".foxbotRight>div>span i").width(parseInt(value) + "%");
				break;
			case "5":
				$(".agv_TaskState").html(value);
				break;
			case "6":
				$(".agv_CoordX").html(value);
				break;
			case "7":
				$(".agv_CoordY").html(value);
				break;
			case "8":
				$(".agv_ExceptionState").html(value);
				break;
		}
	}
}