
function feeder() {
  // feederAjaxData(30003);

	var mySwiper = new Swiper('#swiperContainerId3', {
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
	
  /*setInterval(function(){
    // $(".feeder_com").html(Math.round(100*Math.random()));
    $(".feeder_td").html(Math.round(10*Math.random()));
    // $(".feeder_in").html(Math.round(100*Math.random())+" deg");

        $(".feeder_x").html(Math.round(10000*Math.random()));
    $(".feeder_y").html(Math.round(-10000*Math.random()));
    $(".feeder_z").html(Math.round(100*Math.random())+" deg");

        $(".feeder_rx").html(Math.round(100*Math.random()));
    $(".feeder_ry").html(Math.round(100*Math.random()));
    $(".feeder_rz").html(Math.round(100*Math.random())+" deg");

        $(".feeder_Joint2").html(Math.round(1000*Math.random())+"A");
    $(".feeder_Joint3").html(Math.round(100*Math.random()));
    $(".feeder_Joint4").html(Math.round(50*Math.random())+" deg");
  },2000);

  if($(".feederDataCoordinate>div").height()< $(".feederLeftCoordinate").height())
    $(".feederLeftCoordinate").removeClass("feederLeftCoordinate");*/

}


function feederAjaxData(equip_no_0){

	var jsonData = {
	    "url": "/api/real/equip_item_state",
	    "data":{ equip_no: equip_no_0},
	    "success": _success,
	    "error": _error,
	    "complete": _complete
	};
	jQuery.axpost(jsonData);
    function _success(dt) {
        var result = dt.HttpData.data.YCItemDict;
        for (var ycp in result) {
           handleString(result[ycp].m_iYCNo,result[ycp].m_YCValue); //console.log(result[ycp]);//输出所有测点号的模拟量数据
        }
	}
	function _error(e) {
       console.log(e);
	}
	function _complete(XMLHttpRequest, status) {

	}
	function handleString(ycp_no,value){
       switch(ycp_no.toString()){//console.log(value+","+ycp_no);
       	 case "2": $(".foxbot_RunState").html(value);break;
       	 case "3": $(".foxbot_Speed").html(value);break;
       	 case "4": $(".foxbot_PauseState").html(value);break;
       	 case "5": $(".foxbot_StatusState").html(value);break;
       	 case "6": $(".foxbot_Joint1").html(value);break;
       	 case "7": $(".foxbot_Joint2").html(value);break;
       	 case "8": $(".foxbot_Joint3").html(value);break;
       	 case "9": $(".foxbot_Joint4").html(value);break;
       	 case "10": $(".foxbot_Joint5").html(value);break;
       	 case "11": $(".foxbot_x").html(value);break;
       	 case "12": $(".foxbot_y").html(value);break;
       	 case "13": $(".foxbot_z").html(value);break;
       	 case "14": $(".foxbot_rx").html(value);break;
       	 case "15": $(".foxbot_ry").html(value);break;
       	 case "16": $(".foxbot_rz").html(value);break;
       	 case "17": $(".foxbot_fig").html(value);break;
       	 case "18": $(".foxbot_work").html(value);break;
       	 case "19": $(".foxbot_tool").html(value);break;
       }
	}
}