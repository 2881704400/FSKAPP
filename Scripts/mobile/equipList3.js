function equipList() {
	toolbarActive('equipListTool');
	$(".equipListContent-list li,.accelerateArgs,.highSpeedArgs,.lowSpeedArgs").unbind();
	$(".equipListContent-list li").bind("click", function() {
		$(".equipListContent-list li").each(function() {
			$(this).find('img').eq(0).show();
			$(this).find('img').eq(1).hide();
		});
		$(this).find('img').eq(0).hide();
		$(this).find('img').eq(1).show();
		$(this).addClass("active").siblings().removeClass("active");
		$(".equipListContent").find("section").addClass("displayNone");
		$(".equipListContent").find("section[content-id='" + $(this).attr("menu-id") + "']").removeClass("displayNone");
	});
	$(".accelerateArgs,.highSpeedArgs,.lowSpeedArgs,.lowSpeedPattern,.highSpeedPattern").bind("click", function() {
		if($(this).hasClass("accelerateArgs")) {
			equipAlert(this, 5640, 14, "加速参数设置(建议填写3-5)");
		} else if($(this).hasClass("highSpeedArgs")) {
			equipAlert(this, 5640, 15, "高速参数设置(建议填写320)");
		} else if($(this).hasClass("lowSpeedArgs")) {
			equipAlert(this, 5640, 16, "低速参数设置(建议填写250)");
		} else if($(this).hasClass("lowSpeedArgs")) {
			get_no(this, 5640, 10, "");
		} else if($(this).hasClass("lowSpeedArgs")) {
			get_no(this, 5640, 11, "");
		}
	});
	//监听
	eventListener("multipleIncrease", 20003, 10, 20003, 11);
	eventListener("multipleReduce", 20003, 12, 20003, 13);
	eventListener("focusZoomIn", 20003, 14, 20003, 15);
	eventListener("focusPullFar", 20003, 16, 20003, 17);
	eventListener("apertureOpen", 20003, 18, 20003, 19);
	eventListener("apertureClose", 20003, 20, 20003, 21);
	eventListener("controlDirection_Top", 20003, 5, 20003, 6);
	eventListener("controlDirection_Left", 20003, 1, 20003, 2);
	// eventListener("controlDirection_Stop",20003,setNo);
	eventListener("controlDirection_Right", 20003, 3, 20003, 4);
	eventListener("controlDirection_Bottom", 20003, 7, 20003, 8);
}

//弹窗输入
function equipAlert(dt, equipNo, setNo, txt) {
	myApp.dialog.prompt('', txt, function(equipName) {
		if(!equipName || !/^\+?[1-9][0-9]*$/.test(equipName))
			myApp.toast.create({
				text: '该参数不能为空且必须为数字',
				position: 'center',
				closeTimeout: 2000,
			}).open();
		else
			get_no(dt, equipNo, setNo, equipName);
	});
}
//监听事件
function eventListener(id, equipNo, setNo, equipNo1, setNo1) {
	document.getElementById(id).addEventListener('touchstart', function() {
		get_no("#" + id, equipNo, setNo, "");
	});
	document.getElementById(id).addEventListener('touchend', function() {
		get_no("#" + id, equipNo1, setNo1, "");
	});
}