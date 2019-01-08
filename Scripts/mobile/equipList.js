function equipList() {
	toolbarActive('equipListTool');
	
	//导轨控制台-紧急暂停
	$("#guideControlId .guide-control-step i").unbind('click').bind('click', function() {
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
		var that = this;
		setTimeout(function() {
			$(that).css({
				color: '#333333'
			});
			$(that).parent().css({
				borderColor: 'rgba(51,51,51,0.10)'
			});
			$(that).parent().parent().find('.guide-control-stop i').css({
				color: '#333333'
			});
			$(that).parent().parent().find('.guide-control-stop').css({
				borderColor: 'rgba(51,51,51,0.10)'
			});
		}, 500);
		get_no("", 5640, 9, "");
	});
	
	//导轨模式选择
	var pickerModel = myApp.picker.create({
		inputEl: '#guideControlModelId',
		rotateEffect: true,
		renderToolbar: function() {
			return '<div class="toolbar">' +
				'<div class="toolbar-inner">' +
				'<div class="left">' +
				'<a href="#" class="link sheet-close popover-close">取消</a>' +
				'</div>' +
				'<div class="center">' +
				'<a href="#" class="link toolbar-randomize-link">选择导轨模式</a>' +
				'</div>' +
				'<div class="right">' +
				'<a href="#" class="link sheet-close popover-close">确定</a>' +
				'</div>' +
				'</div>' +
				'</div>';
		},
		cols: [{
			textAlign: 'center',
			values: ['高速模式', '低速模式']
		}],
		on: {
			change: function(picker, values, displayValues) {
				if(values == "高速模式") {
					$("#guideControlValueId .guide-box-desc").html("高速参数设置");
					$("#guideControlValueId .guide-box-value span").html("320");
					get_no("", 5640, 11, "");
				} else {
					$("#guideControlValueId .guide-box-desc").html("低速参数设置");
					$("#guideControlValueId .guide-box-value span").html("250");
					get_no("", 5640, 10, "");
				}
				$("#guideControlModelId .guide-box-value span").html(values);
			},
		}
	});

	//加速参数设置
	$("#guideControlSpeedId").unbind('click').bind('click', function() {
		myApp.dialog.prompt('', '加速参数设置', function(value) {
			if(!value || !/^\+?[1-9][0-9]*$/.test(value)) {
				myApp.toast.create({
					text: '该参数不能为空且必须为数字',
					position: 'center',
					closeTimeout: 2000,
				}).open();
			} else {
				get_no("", 5640, 14, value);
				$("#guideControlSpeedId .guide-box-value span").html(value);
			}
		});
	});

	//高速参数设置
	$("#guideControlValueId").unbind('click').bind('click', function() {
		var promptTitle = $("#guideControlValueId .guide-box-desc").html();
		myApp.dialog.prompt('', promptTitle, function(value) {
			if(promptTitle == "高速参数设置") {
				if(!value || !/^\+?[1-9][0-9]*$/.test(value)) {
					myApp.toast.create({
						text: '该参数不能为空且必须为数字',
						position: 'center',
						closeTimeout: 2000,
					}).open();
				} else {
					get_no("", 5640, 15, value);
					$("#guideControlValueId .guide-box-value span").html(value);
				}
			} else {
				if(!value || !/^\+?[1-9][0-9]*$/.test(value)) {
					myApp.toast.create({
						text: '该参数不能为空且必须为数字',
						position: 'center',
						closeTimeout: 2000,
					}).open();
				} else {
					get_no("", 5640, 16, value);
					$("#guideControlValueId .guide-box-value span").html(value);
				}
			}
		});
	});

	
	//导轨控制台轮盘
	$("#guideControlStepId1").unbind('click').bind('click', function() {
		$("#guideControlId .guide-control-stop i").each(function(){
			$(this).css({
				color: '#333333'
			});
		});
		get_no("", 5640, 1, "");
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	/*$("#guideControlStepId1").unbind('touchend').bind('touchend', function() {
		get_no("#guideControlStepId1", 5640, 5, "");
		$(this).css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});*/
	$("#guideControlStepId2").unbind('click').bind('click', function() {
		$("#guideControlId .guide-control-stop i").each(function(){
			$(this).css({
				color: '#333333'
			});
		});
		get_no("", 5640, 3, "");
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	/*$("#guideControlStepId2").unbind('touchend').bind('touchend', function() {
		get_no("#guideControlStepId2", 5640, 7, "");
		$(this).css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});*/
	$("#guideControlStepId3").unbind('click').bind('click', function() {
		$("#guideControlId .guide-control-stop i").each(function(){
			$(this).css({
				color: '#333333'
			});
		});
		get_no("#guideControlStepId3", 5640, 4, "");
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	/*$("#guideControlStepId3").unbind('touchend').bind('touchend', function() {
		get_no("#guideControlStepId3", 5640, 8, "");
		$(this).css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});*/
	$("#guideControlStepId4").unbind('click').bind('click', function() {
		$("#guideControlId .guide-control-stop i").each(function(){
			$(this).css({
				color: '#333333'
			});
		});
		get_no("", 5640, 2, "");
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	/*$("#guideControlStepId4").unbind('touchend').bind('touchend', function() {
		get_no("#guideControlStepId4", 5640, 6, "");
		$(this).css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});*/
	
	//监控控制台轮盘
	$("#monitorControlStepId1").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlStepId1", 20003, 5, "");
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	$("#monitorControlStepId1").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlStepId1", 20003, 6, "");
		$(this).css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});
	$("#monitorControlStepId2").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlStepId2", 20003, 1, "");
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	$("#monitorControlStepId2").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlStepId2", 20003, 2, "");
		$(this).css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});
	$("#monitorControlStepId3").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlStepId3", 20003, 3, "");
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	$("#monitorControlStepId3").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlStepId3", 20003, 4, "");
		$(this).css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});
	$("#monitorControlStepId4").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlStepId4", 20003, 7, "");
		$(this).css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	$("#monitorControlStepId4").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlStepId4", 20003, 8, "");
		$(this).css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});
	
	//倍速调整
	$("#monitorControlSpeedTopId").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlSpeedTopId", 20003, 10, "");
		$(this).find('i').css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	$("#monitorControlSpeedTopId").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlSpeedTopId", 20003, 11, "");
		$(this).find('i').css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});

	$("#monitorControlSpeedBottomId").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlSpeedBottomId", 20003, 12, "");
		$(this).find('i').css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	$("#monitorControlSpeedBottomId").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlSpeedBottomId", 20003, 13, "");
		$(this).find('i').css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});
	
	//光圈状态
	$("#monitorControlApertureTopId").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlApertureTopId", 20003, 18, "");
		$(this).find('span').css({
			opacity: '0.9',
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
		$("#monitorControlApertureId .guide-control-center-box span").html("打开");
		$("#monitorControlApertureId .guide-control-center-box span").css({
			color: '#3E7CFB'
		});
		$("#monitorControlApertureId .guide-control-bottom-box span").css({
			opacity: '0.4',
			color: '#333333'
		});
	});
	$("#monitorControlApertureTopId").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlApertureTopId", 20003, 19, "");
		$(this).find('span').css({
			opacity: '0.9',
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
		$("#monitorControlApertureId .guide-control-center-box span").css({
			color: '#333333'
		});
	});

	$("#monitorControlApertureBottomId").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlApertureBottomId", 20003, 20, "");
		$(this).find('span').css({
			opacity: '0.9',
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
		$("#monitorControlApertureId .guide-control-center-box span").html("关闭");
		$("#monitorControlApertureId .guide-control-center-box span").css({
			color: '#3E7CFB'
		});
		$("#monitorControlApertureId .guide-control-top-box span").css({
			opacity: '0.4',
			color: '#333333'
		});
	});
	$("#monitorControlApertureBottomId").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlApertureBottomId", 20003, 21, "");
		$(this).find('span').css({
			opacity: '0.9',
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
		$("#monitorControlApertureId .guide-control-center-box span").css({
			color: '#333333'
		});
	});
	
	//焦点调整
	$("#monitorControlFocusTopId").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlFocusTopId", 20003, 14, "");
		$(this).find('i').css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	$("#monitorControlFocusTopId").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlFocusTopId", 20003, 15, "");
		$(this).find('i').css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});

	$("#monitorControlFocusBottomId").unbind('touchstart').bind('touchstart', function() {
		get_no("#monitorControlFocusBottomId", 20003, 16, "");
		$(this).find('i').css({
			color: '#3E7CFB'
		});
		$(this).parent().css({
			borderColor: '#3E7CFB'
		});
	});
	$("#monitorControlFocusBottomId").unbind('touchend').bind('touchend', function() {
		get_no("#monitorControlFocusBottomId", 20003, 17, "");
		$(this).find('i').css({
			color: '#333333'
		});
		$(this).parent().css({
			borderColor: 'rgba(51,51,51,0.10)'
		});
	});

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
	var btn = document.getElementById(id);
	var handler = function() {
		get_no("#" + id, equipNo, setNo, "");
		btn.removeEventListener("touchstart", handler, true);
	};
	var handler2 = function() {
		get_no("#" + id, equipNo1, setNo1, "");
		btn.removeEventListener("touchend", handler2, true);
	};
	btn.addEventListener("touchstart", handler, true);
	btn.addEventListener("touchend", handler2, true);
}