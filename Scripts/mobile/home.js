//首页事件
function onHomePage() {
	// myApp.router.navigate("/welcomeWords/")
	$('html').removeClass('with-statusbar-overlay').addClass("with-statusbar");
	authorizationName();

	// 首页菜单
	$(".firstHomeMenu").unbind();
	$(".firstHomeMenu").bind("click", function() {
		$(this).addClass("displayNone").siblings().removeClass("displayNone");
		$(this).parent().find('p').css({
			color: "#3E7CFB"
		})
		//发送命令
		//get_no(this, "", "", "");
	});

	toolbarActive('homeTool');
	var bodyHieght = document.body.clientHeight;
	var elemHieght = document.documentElement.clientHeight;
//	myApp.dialog.alert(bodyHieght,elemHieght)
	if(bodyHieght != elemHieght) {
		elemHieght -= 45;
	}
//	$(".view").height(elemHieght + "px");

	$$('#voiceBtn').on('click', function () {
//	  myApp.popup('.popup-services');
	});

}
//界面尺寸变化事件
function onResizeCustomized() {
	if($(".view-main").attr("data-page") == "Voice") {
		var heightWindow = $(".page-content").height();
		if(heightWindow < 500) {
			$(".voiceDivs").css("height", "100%");
			$(".voiceDivs").css("bottom", "40px");
			$(".voiceDivs").css("position", "relative");
		} else {
			$(".voiceDivs").css("height", "300px");
			$(".voiceDivs").css("bottom", "60px");
			$(".voiceDivs").css("position", "absolute");
		}
	}
}

//授权名称
function authorizationName() {
	var ajaxVar = $.ajax({
		type: "POST",
		url: "/GWService.asmx/GetName2SFService",
		timeout: 5000,
		data: {
			userName: "admin",
		},
		success: function(data) {
			var dt = $(data).find('string').text();
			if(dt) {
				$(".auth_name_get").text(dt);
				window.localStorage.auth_name_title = dt;
			} else {
				tipsInformtion("获取授权名失败,是否退出登陆界面?", exitLogin);
			}
		},
		error: function(e) {
			tipsInformtion("获取授权名失败,是否退出登陆界面?", exitLogin);
		}
	});

}

//提示窗口
function tipsInformtion(tipsStr, tipsEvent) {
	myApp.dialog.create({
		title: "信息提示",
		text: tipsStr,
		buttons: [{
			text: '取消'
		}, {
			text: '确定',
			onClick: function() {
				tipsEvent();
			}
		}]
	}).open();
}