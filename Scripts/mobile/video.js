function video() {
	toolbarActive('videoTool');
    $(".left_video_menu  li a").unbind();
    $(".left_video_menu  li a").bind("click",function(){
    	$(this).parent().addClass("select_video_menu").siblings().removeClass("select_video_menu");
    	$('div[con_id="'+$(this).parent().attr("data_id")+'"]').removeClass("displayNone").siblings("div.col-70").addClass("displayNone");
    });
}