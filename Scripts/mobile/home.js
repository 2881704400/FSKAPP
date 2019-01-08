//首页事件
function onHomePage() {
	// myApp.router.navigate("/welcomeWords/")
	$('html').removeClass('with-statusbar-overlay').addClass("with-statusbar");
	authorizationName();

	// Vertical Buttons
	/*$$('.homeMenuList .open-vertical').on('click', function() {
		var index = $(this).index();
		var buttonDialog;
		if(index == 0) {
			buttonDialog = [{
					text: '开始巡航',
				},
				{
					text: '结束巡航',
				}
			]
		} else if(index == 1) {
			buttonDialog = [{
				text: '参观模式',
			}]
		} else if(index == 2) {

		} else if(index == 3) {
			buttonDialog = [{
					text: '查看-Foxnum1',
				},
				{
					text: '查看-Foxbot1',
				},
				{
					text: '查看-Foxnum2',
				},
				{
					text: '查看-Foxbot2',
				},
				{
					text: '查看-Fanuc',
				},
				{
					text: '查看-固高1',
				},
				{
					text: '查看-缺陷检测',
				},
				{
					text: '查看-固高2',
				},
			]
		} else if(index == 4) {

		}
		if(buttonDialog) {
			myApp.dialog.create({
				text: '操作按钮',
				buttons: buttonDialog,
				verticalButtons: true,
				onClick: function(dialog, e) {
					if(index == 0) {
						if(e == 0) {
							get_no(this, 300, 1, "");
						} else {
							get_no(this, 300, 2, "");
						}
					} else if(index == 1) {
						get_no(this, 300, 11, "");
					} else if(index == 2) {
						get_no(this, 300, e + 3, "");
					}
					$(".homeMenuList li").each(function() {
						$(this).find('a').eq(0).removeClass("displayNone");
						$(this).find('a').eq(1).removeClass("displayNone").addClass("displayNone");
						$(this).find('a p').css({
							color: "#333333"
						});
					});
				}
			}).open();
		}

	});*/

	//巡逻模式选择
	var pickerModel = myApp.picker.create({
		inputEl: '#xunLuoModelId',
		rotateEffect: true,
		renderToolbar: function() {
			return '<div class="toolbar">' +
				'<div class="toolbar-inner">' +
				'<div class="center">' +
				'<a href="#" class="link toolbar-randomize-link">选择操作命令</a>' +
				'</div>' +
				'<div class="right">' +
				'<a href="#" class="link sheet-close popover-close">确定</a>' +
				'</div>' +
				'</div>' +
				'</div>';
		},
		cols: [{
			textAlign: 'center',
			values: ['开始巡航', '结束巡航']
		}],
		on: {
			close: function(e) {
				var value = e.value.toString();
				if(value == "开始巡航") {
					get_no(this, 300, 1, "");
				} else {
					get_no(this, 300, 2, "");
				}
				$(".homeMenuList li").each(function() {
					$(this).find('a').eq(0).removeClass("displayNone");
					$(this).find('a').eq(1).removeClass("displayNone").addClass("displayNone");
					$(this).find('a p').css({
						color: "#333333"
					});
				});
			},
		}
	});

	//参观模式选择
	var pickerModel = myApp.picker.create({
		inputEl: '#canguanModelId',
		rotateEffect: true,
		renderToolbar: function() {
			return '<div class="toolbar">' +
				'<div class="toolbar-inner">' +
				'<div class="center">' +
				'<a href="#" class="link toolbar-randomize-link">选择操作命令</a>' +
				'</div>' +
				'<div class="right">' +
				'<a href="#" class="link sheet-close popover-close">确定</a>' +
				'</div>' +
				'</div>' +
				'</div>';
		},
		cols: [{
			textAlign: 'center',
			values: ['参观模式']
		}],
		on: {
			close: function(e) {
				var value = e.value.toString();
				if(value == "参观模式") {
					get_no(this, 300, 11, "");
				}
				$(".homeMenuList li").each(function() {
					$(this).find('a').eq(0).removeClass("displayNone");
					$(this).find('a').eq(1).removeClass("displayNone").addClass("displayNone");
					$(this).find('a p').css({
						color: "#333333"
					});
				});
			},
		}
	});

	//孤岛模式选择
	var pickerModel = myApp.picker.create({
		inputEl: '#gudaoModelId',
		rotateEffect: true,
		renderToolbar: function() {
			return '<div class="toolbar">' +
				'<div class="toolbar-inner">' +
				'<div class="center">' +
				'<a href="#" class="link toolbar-randomize-link">选择操作命令</a>' +
				'</div>' +
				'<div class="right">' +
				'<a href="#" class="link sheet-close popover-close">确定</a>' +
				'</div>' +
				'</div>' +
				'</div>';
		},
		cols: [{
			textAlign: 'center',
			values: ['查看-Foxnum1', '查看-Foxbot1', '查看-Foxnum2', '查看-Foxbot2', '查看-Fanuc', '查看-固高1', '查看-缺陷检测', '查看-固高2']
		}],
		on: {
			close: function(e) {
				var value = e.value.toString();
				if(value == "查看-Foxnum1") {
					get_no(this, 300, 3, "");
				} else if(value == "查看-Foxbot1") {
					get_no(this, 300, 4, "");
				} else if(value == "查看-Foxnum2") {
					get_no(this, 300, 5, "");
				} else if(value == "查看-Foxbot2") {
					get_no(this, 300, 6, "");
				} else if(value == "查看-Fanuc") {
					get_no(this, 300, 7, "");
				} else if(value == "查看-固高1") {
					get_no(this, 300, 8, "");
				} else if(value == "查看-缺陷检测") {
					get_no(this, 300, 9, "");
				} else if(value == "查看-固高2") {
					get_no(this, 300, 10, "");
				}
				$(".homeMenuList li").each(function() {
					$(this).find('a').eq(0).removeClass("displayNone");
					$(this).find('a').eq(1).removeClass("displayNone").addClass("displayNone");
					$(this).find('a p').css({
						color: "#333333"
					});
				});
			},
		}
	});

	// 首页菜单
	$(".homeMenuList li a").unbind('click').bind("click", function() {
		var index = $(this).parent().index();
		$(".homeMenuList li").each(function(i) {
			if(index != i) {
				$(this).find('a').eq(0).removeClass("displayNone");
				$(this).find('a').eq(1).removeClass("displayNone").addClass("displayNone");
				$(this).find('a p').css({
					color: "#333333"
				});
			}
		});
		if($(this).parent().find('a').eq(0).hasClass("displayNone")) {
			$(this).addClass("displayNone").siblings().removeClass("displayNone");
			$(this).parent().find('p').css({
				color: "#333333"
			});
		} else {
			$(this).addClass("displayNone").siblings().removeClass("displayNone");
			$(this).parent().find('p').css({
				color: "#3E7CFB"
			});
		}

	});

	toolbarActive('homeTool');
	var bodyHieght = document.body.clientHeight;
	var elemHieght = document.documentElement.clientHeight;
	//	myApp.dialog.alert(bodyHieght,elemHieght)
	if(bodyHieght != elemHieght) {
		elemHieght -= 45;
	}
	//	$(".view").height(elemHieght + "px");
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