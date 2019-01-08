var chatList;
function feeder() {
	//获取父页面参数
	var chatObject = myApp.views.main.history,
		urlLength = chatObject.length - 1;
	var chatValue = chatObject[urlLength].split("?")[1].split("&");
	var chatTitleName = chatValue[0];
	chatList = chatValue[1];
	$("#feederDgCenterTitleID").html(chatTitleName);
	initConnectService();
}

//连接服务器
function initConnectService() {
	var checkConnectNum = 0;
	$.ajax({
		type: "POST",
		url: "/GWService.asmx/ConnectService",
		timeout: 5000,
		data: {
			user_name: 'admin',
		},
		success: function(data) {
			var datas = $(data).find("string").text();
			if(datas != null && datas != "" && datas != "false") {
				getRealTimeDataByID_feeder();
				//setInterval(getRealTimeDataByID_feeder, 3000);
			}
		},
		complete: function(XMLHttpRequest, status) {
			if(status == 'timeout') {
				if(checkConnectNum < 3) {
					checkConnectNum++;
					initConnectService();
				} else {
					myApp.dialog.alert("数据服务暂未启动，请稍后再试...");
				}
			}
		}
	});
}

function getRealTimeDataByID_feeder() {
	$.ajax({
		type: "POST",
		url: "/GWService.asmx/GetRealTimeData",
		timeout: 5000,
		data: {
			equip_no: chatList,
			table_name: "ycp"
		},
		success: function(data) {
			$(data).find('string').each(function() {
				var result = JSON.parse($(this).text());
				if(result&&result[0].m_YCValue != "***") {
					for(var i = 0; i < result.length; i++) {
						if(result[i].m_iYCNo == 1) {
							$(".jiluTime_feeder").html("记录时间:"+result[i].m_YCValue);
						}
						if(result[i].m_iYCNo == 2) {
							$(".feeder_TaskState").parent().find('span').html(result[i].m_YCValue);
						}
						if(result[i].m_iYCNo == 7) {
							$(".feeder_MoveState").parent().find('span').html(result[i].m_YCValue);
						}
						if(result[i].m_iYCNo == 8) {
							$(".feeder_ConnectState").parent().find('span').html(result[i].m_YCValue);
						}
						if(result[i].m_iYCNo == 9) {
							$(".feeder_ExceptionState").parent().find('span').html(result[i].m_YCValue);
						}
					}
				}
			});

		}
	});
}