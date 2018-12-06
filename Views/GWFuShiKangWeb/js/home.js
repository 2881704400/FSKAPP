var currentNum = 1;
var isFlagNum = 0;
var isFlag = true;
var echartsArr = [];
$(function() {
	var typeResult = GetRequest('type') == null ? 0 : GetRequest('type');
	if(typeResult==1){
		$(".main").addClass("main_bg");
		$(".left-pannel").css({
			width:"12%"
		});
		$(".right-pannel").css({
			width:"88%"
		});
		$(".col-container-title span").css({
			background: "transparent",
			fontFamily: "站酷高端黑"
		});
		$(".long-panel-box").css({
			background: "transparent"
		});
		$(".normal-panel-box").css({
			background: "transparent"
		});
		$(".short-panel-box").css({
			background: "transparent"
		});
		$(".six_short-panel-box").css({
			background: "transparent"
		});
		$(".small-panel-box").css({
			background: "transparent"
		});
		$("#zheChartsId22").css({
			width: "90%"
		});
		$(".panel-box-btn").show();
	}
	initData();
	setInterval(function() {
		initData();
		currentNum++;
		if(currentNum == 100) {
			currentNum = 1;
		}
	}, 1000);
	
	$("#panel-box-btn-list img").unbind('click').bind('click',function(){
		GetSetParmItem(1005, 1401);
//		GetSetParmItem(1005, 27);
//		GetSetParmItem(1005, 6011);
	})
});

//获取结果集合
function GetSetParmItem(equip_no, set_no) {
	$.ajax({
		type: "POST",
		url: "/GWService.asmx/GetDataTableFromSQL",
		timeout: 20000,
		data: {
			sql: "select * from SetParm where equip_no=" + equip_no + " and set_no=" + set_no + " order by set_no",
			userName: "大屏",
		},
		success: function(data) {
			var dt = $(data).find('DataTable'); //返回XML格式的DataTable
			console.log(dt);
			var main_instruction = $(data).find('shen').children("main_instruction").text();
			var minor_instruction = $(data).find('shen').children("minor_instruction").text();
			var value = $(data).find('shen').children("value").text();
			onSetCommand(equip_no, main_instruction, minor_instruction, value);
		},
		complete: function (XMLHttpRequest, status) {
			console.log(status)
            if (status == 'timeout'||status == 'error') {
            	if(timeFlag<3){
            		GetSetParmItem(equip_no, set_no);
            		timeFlag++;
            	}
            }
        },
	});
}

//设置命令-确定
function onSetCommand(str_1, str_2, str_3, str_4) { //equip_no,main_instruction,minor_instruction,value,set_nm
	var vals = str_4;
	var userName = "大屏";
	if(userName == null || userName == "") {
		userName = window.sessionStorage.userName;
	}
	var _url = "/GWService.asmx/SetupsCommand";
	var _dataSet = "equip_no=" + encodeURIComponent(str_1) + "&&main_instruction=" + encodeURIComponent(str_2) + "&&minor_instruction=" + encodeURIComponent(str_3) + "&&value=" + encodeURIComponent(vals) + "&&user_name=" + encodeURIComponent(userName);
	JQajaxo("post", _url, true, _dataSet, _successfSet);

	function _successfSet(data) {
		var resultJs = $(data).children("string").text();
		if(resultJs != "false") {
		}
	}
}

function JQajaxo(_type, _url, _asycn, _data, _success) {
	var ajaxs = $.ajax({
		type: _type,
		url: _url,
		timeout: 5000,
		async: _asycn,
		data: _data,
		success: _success,
		complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
			if(status == 'timeout' || status == 'error') { //超时,status还有success,error等值的情况
				ajaxs.abort();
				alertMsgError.open();
			}
			XMLHttpRequest = null;
		},
		error: function() {}
	});
}

function initData() {
	getWordData1();
	getWordData2();
	getWordData3();
	getWordData4();
	getWordData5();
	getWordData6();
	getWordData7();
	getWordData8();
	getWordData9();
	getWordData10();
	getWordData11();
	getWordData12();
	getWordData13();
	getWordData14();
	getWordData15();
	getWordData16();
	getWordData17();
	getWordData18();
	getWordData19();
	getWordData20();
	getWordData21();
	if(isFlag) {
		var timer = setInterval(function() {
			if(isFlag) {
				if(isFlagNum >= 21) {
					getWordData22();
					test("testId");
					isFlag = false;
					clearInterval(timer);
				}
			} else {
				if(isFlagNum >= 21) {
					getWordData22();
					isFlag = false;
					clearInterval(timer);
				}
			}
		}, 100);
	} else {
		if(isFlagNum >= 21) {
			getWordData22();
			isFlag = false;
		}
	}

}

function getWordData1() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_1.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId1", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId1", "23,203,224", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData2() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_2_1.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId2", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId2", "224,103,23", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData3() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_2_2.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId3", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId3", "224,103,23", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData4() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_2_3.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId4", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId4", "224,103,23", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData5() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_2_4.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId5", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId5", "224,103,23", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData6() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_3_1.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId6", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId6", "237,181,46", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData7() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_3_2.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId7", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId7", "237,181,46", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData8() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_3_3.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId8", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId8", "237,181,46", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData9() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_3_4.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId9", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId9", "237,181,46", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData10() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_3_5.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId10", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId10", "237,181,46", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData11() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_3_6.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId11", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId11", "237,181,46", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData12() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_4_1.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId12", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId12", "23,224,184", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData13() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_4_2.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId13", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId13", "23,224,184", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData14() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_4_3.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId14", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId14", "23,224,184", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData15() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_4_4.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId15", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId15", "23,224,184", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData16() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_4_5.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId16", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId16", "23,224,184", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData17() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_4_6.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId17", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId17", "23,224,184", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData18() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_4_7.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId18", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId18", "23,224,184", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData19() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_4_8.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId19", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId19", "23,224,184", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData20() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_5_1.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId20", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId20", "0,146,255", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData21() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_5_2.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			if(isFlagNum > 20) {
				refreshChartData("zheChartsId21", data, currentNum)
			} else {
				MultipleLinesChart("zheChartsId21", "0,146,255", xData, data);
				isFlagNum++;
			}
		}
	});
}

function getWordData22() {
	$.ajax({
		type: 'get',
		url: '../../../Data/DownloadData/spindle/f' + currentNum + '_6.txt',
		data: null,
		success: function(dt) {
			var result = dt.substring(1, dt.length - 1);
			var data = result.split(",");
			var xData = [];
			for(var i = 0; i < data.length - 1; i++) {
				xData.push(i);
			}
			zhuCharts("zheChartsId22", "0,146,255", xData, data)
		}
	});
}

function MultipleLinesChart(id, strColor, xData, resultData) {
	var myCostChart = echarts.init(document.getElementById(id));
	var option = {
		grid: {
			top: '10%',
			left: '15',
			right: '0.5%',
			bottom: '12%',
			containLabel: false
		},
		xAxis: {
			type: 'category',
			axisLabel: {
				show: false,
				color: 'rgba(220,220,220,0.8)',
				fontSize: 20,
				fontFamily: "DIN Alternate",
				rotate: -45,
				margin: 30,
			},
			axisTick: {
				show: false,
				inside: true, // 控制小标记是否在grid里 
				length: 16, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'rgba(220,220,220,.2)',
					width: 4
				}
			},
			axisLine: {
				show: true,
				onZero: false,
				lineStyle: {
					color: 'rgba(220,220,220,.15)',
					width: 5
				}
			},
			position: 'bottom',
			boundaryGap: false,
			data: xData
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				show: false,
				color: 'rgba(220,220,220,0.8)',
				fontSize: 20,
				margin: 15,
				fontFamily: "DIN Alternate",
				formatter: function(value) {
					return value;
				}
			},
			axisTick: {
				show: false,
				inside: true, // 控制小标记是否在grid里 
				length: 5, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: 'rgba(220,220,220,.3)',
					width: 2
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: 'rgba(220,220,220,.3)',
					width: 2
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(220,220,220,0.05)',
					width: 2,
				}
			},
		},
		series: [{
			type: 'line',
			symbolSize: 8,
			symbol: 'circle',
			showSymbol: false,
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(' + strColor + ',1)'
					}, {
						offset: 1,
						color: 'rgba(' + strColor + ',0)'
					}], false),
					opacity: 0.3,
					origin: 'start'
				}
			},
			lineStyle: {
				color: 'rgba(' + strColor + ',.9)',
				width: 2,
			},
			animationDuration: 2000,
			animationDurationUpdate: 1000,
			data: resultData,
		}]
	};
	myCostChart.setOption(option); /*窗口自适应，关键代码*/
	$(window).resize(function() {
		myCostChart.resize();
	});
	echartsArr.push({
		name: id,
		value: myCostChart
	});
}

function refreshChartData(id, resultData, num) {
	if(echartsArr) {//&&id=="zheChartsId19"
		for(var i = 0; i < echartsArr.length; i++) {
			if(echartsArr[i].name == id) {
				var meterOption = echartsArr[i].value.getOption();
				var oldData = meterOption.series[0].data;
				var last_num=Math.ceil(oldData.length / 100 * num);
				var slice_num=Math.ceil(oldData.length / 100);
				oldData = oldData.slice(slice_num);
				for(var j = last_num-slice_num; j < last_num; j++) {
					oldData.push(resultData[j])
				}
				meterOption.series[0].data = oldData;
				echartsArr[i].value.setOption(meterOption);
			}
		}
	}
}

function zhuCharts(id, strColor, xData, resultData) {
	var myCostChart = echarts.init(document.getElementById(id));
	var option = {
		grid: {
			top: '20%',
			left: '15',
			right: '0.5%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			axisLabel: {
				show: true,
				color: 'rgba(255,255,255,.6)',
				fontSize: 20,
				margin: 15,
				interval: 0,
			},
			axisTick: {
				show: false,
				inside: true,
				length: 5,
				lineStyle: {
					color: 'rgba(255,255,255,.3)',
					width: 3
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: 'rgba(220,220,220,.15)',
					width: 5
				}
			},
			data: ['正常', '轴承故障', '不平衡', '轴承故障+不平衡']
		},
		yAxis: {
			type: 'value',
			splitNumber: 4,
			axisLabel: {
				show: false,
				color: 'rgba(255,255,255,.6)',
				fontSize: 12,
			},
			axisTick: {
				show: false,
				inside: true,
				length: 5,
				lineStyle: {
					color: 'rgba(255,255,255,.3)',
					width: 3
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: 'rgba(255,255,255,.3)',
					width: 3
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: 'rgba(255,255,255,.05)',
					width: 3
				}
			},
		},
		series: [{
			type: 'bar',
			symbolSize: 8,
			symbol: 'circle',
			showSymbol: false,
			step: 'start',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: "rgba(77,70,206,1)"
					}, {
						offset: 1,
						color: 'rgba(77,70,206,0)'
					}], false),
				}
			},
			barWidth: '40%',
			data: resultData,
		}]
	};
	myCostChart.setOption(option); /*窗口自适应，关键代码*/
	$(window).resize(function() {
		myCostChart.resize();
	});
}

function test(id) {
	var myCostChart = echarts.init(document.getElementById(id));
	var option = {
		grid: {
			top: 10,
			left: 10,
			right: 10,
			bottom: 10
		},
		xAxis: {
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			max: 1000,
			min: 0
		},
		yAxis: {
			silent: true,
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			max: 1080,
			min: 0
		},
		series: [{
			coordinateSystem: 'cartesian2d',
			type: 'lines',
			polyline: true,
			zlevel: 1,
			effect: {
				show: true,
				constantSpeed: 50,
				trailLength: 0.05,
				symbolSize: 2,
				symbol: 'circle',
				loop: true
			},
			lineStyle: {
				normal: {
					color: '#ff00ff',
					opacity: 0.02,
					curveness: 0.3,
					width: 2,
				}
			},
			data: [{
				coords: [
					[250, 180],
					[500, 135],
				]
			}, {
				coords: [
					[750, 180],
					[500, 135],
				]
			}, {
				coords: [
					[50, 370],
					[250, 315],
				]
			}, {
				coords: [
					[50, 370],
					[750, 315],
				]
			}, {
				coords: [
					[180, 370],
					[250, 315],
				]
			}, {
				coords: [
					[180, 370],
					[750, 315],
				]
			}, {
				coords: [
					[310, 370],
					[250, 315],
				]
			}, {
				coords: [
					[310, 370],
					[750, 315],
				]
			}, {
				coords: [
					[440, 370],
					[250, 315],
				]
			}, {
				coords: [
					[440, 370],
					[750, 315],
				]
			}, {
				coords: [
					[570, 370],
					[250, 315],
				]
			}, {
				coords: [
					[570, 370],
					[750, 315],
				]
			}, {
				coords: [
					[700, 370],
					[250, 315],
				]
			}, {
				coords: [
					[700, 370],
					[750, 315],
				]
			}, {
				coords: [
					[830, 370],
					[250, 315],
				]
			}, {
				coords: [
					[830, 370],
					[750, 315],
				]
			}, {
				coords: [
					[960, 370],
					[250, 315],
				]
			}, {
				coords: [
					[960, 370],
					[750, 315],
				]
			}, {
				coords: [
					[70, 555],
					[50, 500],
				]
			}, {
				coords: [
					[70, 555],
					[180, 500],
				]
			}, {
				coords: [
					[70, 555],
					[310, 500],
				]
			}, {
				coords: [
					[70, 555],
					[440, 500],
				]
			}, {
				coords: [
					[70, 555],
					[570, 500],
				]
			}, {
				coords: [
					[70, 555],
					[700, 500],
				]
			}, {
				coords: [
					[70, 555],
					[830, 500],
				]
			}, {
				coords: [
					[70, 555],
					[960, 500],
				]
			}, {
				coords: [
					[245, 555],
					[50, 500],
				]
			}, {
				coords: [
					[245, 555],
					[180, 500],
				]
			}, {
				coords: [
					[245, 555],
					[310, 500],
				]
			}, {
				coords: [
					[245, 555],
					[440, 500],
				]
			}, {
				coords: [
					[245, 555],
					[570, 500],
				]
			}, {
				coords: [
					[245, 555],
					[700, 500],
				]
			}, {
				coords: [
					[245, 555],
					[830, 500],
				]
			}, {
				coords: [
					[245, 555],
					[960, 500],
				]
			}, {
				coords: [
					[415, 555],
					[50, 500],
				]
			}, {
				coords: [
					[415, 555],
					[180, 500],
				]
			}, {
				coords: [
					[415, 555],
					[310, 500],
				]
			}, {
				coords: [
					[415, 555],
					[440, 500],
				]
			}, {
				coords: [
					[415, 555],
					[570, 500],
				]
			}, {
				coords: [
					[415, 555],
					[700, 500],
				]
			}, {
				coords: [
					[415, 555],
					[830, 500],
				]
			}, {
				coords: [
					[415, 555],
					[960, 500],
				]
			}, {
				coords: [
					[590, 555],
					[50, 500],
				]
			}, {
				coords: [
					[590, 555],
					[180, 500],
				]
			}, {
				coords: [
					[590, 555],
					[310, 500],
				]
			}, {
				coords: [
					[590, 555],
					[440, 500],
				]
			}, {
				coords: [
					[590, 555],
					[570, 500],
				]
			}, {
				coords: [
					[590, 555],
					[700, 500],
				]
			}, {
				coords: [
					[590, 555],
					[830, 500],
				]
			}, {
				coords: [
					[590, 555],
					[960, 500],
				]
			}, {
				coords: [
					[760, 555],
					[50, 500],
				]
			}, {
				coords: [
					[760, 555],
					[180, 500],
				]
			}, {
				coords: [
					[760, 555],
					[310, 500],
				]
			}, {
				coords: [
					[760, 555],
					[440, 500],
				]
			}, {
				coords: [
					[760, 555],
					[570, 500],
				]
			}, {
				coords: [
					[760, 555],
					[700, 500],
				]
			}, {
				coords: [
					[760, 555],
					[830, 500],
				]
			}, {
				coords: [
					[760, 555],
					[960, 500],
				]
			}, {
				coords: [
					[930, 555],
					[50, 500],
				]
			}, {
				coords: [
					[930, 555],
					[180, 500],
				]
			}, {
				coords: [
					[930, 555],
					[310, 500],
				]
			}, {
				coords: [
					[930, 555],
					[440, 500],
				]
			}, {
				coords: [
					[930, 555],
					[570, 500],
				]
			}, {
				coords: [
					[930, 555],
					[700, 500],
				]
			}, {
				coords: [
					[930, 555],
					[830, 500],
				]
			}, {
				coords: [
					[930, 555],
					[960, 500],
				]
			}, {
				coords: [
					[110, 740],
					[70, 690],
				]
			}, {
				coords: [
					[110, 740],
					[240, 690],
				]
			}, {
				coords: [
					[110, 740],
					[415, 690],
				]
			}, {
				coords: [
					[110, 740],
					[590, 690],
				]
			}, {
				coords: [
					[110, 740],
					[760, 690],
				]
			}, {
				coords: [
					[110, 740],
					[950, 690],
				]
			}, {
				coords: [
					[370, 740],
					[70, 690],
				]
			}, {
				coords: [
					[370, 740],
					[240, 690],
				]
			}, {
				coords: [
					[370, 740],
					[415, 690],
				]
			}, {
				coords: [
					[370, 740],
					[590, 690],
				]
			}, {
				coords: [
					[370, 740],
					[760, 690],
				]
			}, {
				coords: [
					[370, 740],
					[950, 690],
				]
			}, {
				coords: [
					[640, 740],
					[70, 690],
				]
			}, {
				coords: [
					[640, 740],
					[240, 690],
				]
			}, {
				coords: [
					[640, 740],
					[415, 690],
				]
			}, {
				coords: [
					[640, 740],
					[590, 690],
				]
			}, {
				coords: [
					[640, 740],
					[760, 690],
				]
			}, {
				coords: [
					[640, 740],
					[950, 690],
				]
			}, {
				coords: [
					[890, 740],
					[70, 690],
				]
			}, {
				coords: [
					[890, 740],
					[240, 690],
				]
			}, {
				coords: [
					[890, 740],
					[415, 690],
				]
			}, {
				coords: [
					[890, 740],
					[590, 690],
				]
			}, {
				coords: [
					[890, 740],
					[760, 690],
				]
			}, {
				coords: [
					[890, 740],
					[950, 690],
				]
			}, {
				coords: [
					[500, 930],
					[110, 875],
				]
			}, {
				coords: [
					[500, 930],
					[370, 875],
				]
			}, {
				coords: [
					[500, 930],
					[640, 875],
				]
			}, {
				coords: [
					[500, 930],
					[890, 875],
				]
			}]
		}]
	};

	myCostChart.setOption(option); /*窗口自适应，关键代码*/
	$(window).resize(function() {
		myCostChart.resize();
	});
}

function GetRequest(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}