function video() {
	toolbarActive('videoTool');
	
	//获取设备列表（设备数据）
//	treeConfList();
	
	$(".left_video_menu  li a").unbind();
	$(".left_video_menu  li a").bind("click", function() {
		$(this).parent().addClass("select_video_menu").siblings().removeClass("select_video_menu");
		$('div[con_id="' + $(this).parent().attr("data_id") + '"]').removeClass("displayNone").siblings("div.col-70").addClass("displayNone");
	});
	
	
    /*setTimeout(function() {
        new Image().src = "/Image/Fsk_white/ATM.gif";
        new Image().src = "/Image/Fsk_white/AGV.gif";
        new Image().src = "/Image/Fsk_white/FANUC.gif";
        new Image().src = "/Image/Fsk_white/FOXBOT.gif";
        new Image().src = "/Image/Fsk_white/FOXBOT_DJ.gif";
        new Image().src = "/Image/Fsk_white/FOXNUM.gif";
        new Image().src = "/Image/Fsk_white/Super-TG.gif";
    }, 1000);*/
   /*JQajaxoNoCancel("get", "/Image/Fsk_white/ATM.gif", true, null, null);
   JQajaxoNoCancel("get", "/Image/Fsk_white/AGV.gif", true, null, null);
   JQajaxoNoCancel("get", "/Image/Fsk_white/FANUC.gif", true, null, null);
   JQajaxoNoCancel("get", "/Image/Fsk_white/FOXBOT.gif", true, null, null);
   JQajaxoNoCancel("get", "/Image/Fsk_white/FOXBOT_DJ.gif", true, null, null);
   JQajaxoNoCancel("get", "/Image/Fsk_white/FOXNUM.gif", true, null, null);
   JQajaxoNoCancel("get", "/Image/Fsk_white/Super-TG.gif", true, null, null);*/
}

//封装ajax
function JQajaxoNoCancel(_type, _url, _asycn, _data, _success) {
	var ajaxs = $.ajax({
		type: _type,
		url: _url,
		async: _asycn,
		data: _data,
		success: _success,
		complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
			if(status == 'timeout') { //超时,status还有success,error等值的情况
				ajaxs.abort();
				myApp.dialog.create({
					title: "系统提示",
					text: '请求超时，请查看网络是否已连接！',
					buttons: [{
						text: '确定'
					}]
				}).open();
			}
			XMLHttpRequest = null;
		},
		error: function() {
			myApp.dialog.create({
				title: "系统提示",
				text: '请求错误，请查看网络是否已连接！',
				buttons: [{
					text: '确定'
				}]
			}).open();
		}
	});
}

//获取设备列表（设备数据）
function treeConfList() {
	var _url = service + "/GWEquipTree";
	JQajaxo("post", _url, true, "", _successf);

	function _successf(e) {
		var str = $(e).children('string').text();
		if(str != 'false') {
			$(str).children('GWEquipTreeItem').each(function(i) {
				var len = $(this).children('GWEquipTreeItem').length;
				var name = $(this).attr('name');
				var equip_no = $(this).attr('EquipNo');
				var strMiddleData="";
				var strCutToolData="";
				if(len>0){
					if(name.indexOf("中框")>-1){
						$(this).children('GWEquipTreeItem').each(function() {
							var len = $(this).children('GWEquipTreeItem').length;
							var name = $(this).attr('name');
							var equip_no = $(this).attr('EquipNo');
							strMiddleData+='<li class="accordion-item bottomLine">'+
							'	<a href="/agv/" class="item-content item-link">'+
							'		<div class="item-inner">'+
							'			<div class="item-title">'+name+'</div>'+
							'		</div>'+
							'	</a>'+
							'</li>'	
						});
//						$("#middleFrameId").html(strMiddleData);
					}
					if(name.indexOf("刀具")>-1){
						$(this).children('GWEquipTreeItem').each(function() {
							var len = $(this).children('GWEquipTreeItem').length;
							var name = $(this).attr('name');
							var equip_no = $(this).attr('EquipNo');
							strCutToolData+='<li class="accordion-item bottomLine">'+
							'	<a href="/feeder/" class="item-content item-link">'+
							'		<div class="item-inner">'+
							'			<div class="item-title">'+name+'</div>'+
							'		</div>'+
							'	</a>'+
							'</li>'	
						});
//						$("#cutToolId").html(strCutToolData);
					}
					
				}
			});
		}
	}
}

//添加节点到html
function setEquipTreeHTML(len, name, equip_no) {
    var newRow = "";
    if (len > 0) {
       
    }
}

/*<GWEquipTreeItem Name="智慧城市综合集成平台" IsExpanded="True" Image="系统结构.png" EquipNo="" EquipStateYcNo="" CeDianConfig="" ClickShowPage="">
	<GWEquipTreeItem Name="场景控制" IsExpanded="False" Image="/Images/Music.png" EquipNo="300" EquipStateYcNo="" CeDianConfig="300" ClickShowPage="" />
	<GWEquipTreeItem Name="界面控制" IsExpanded="False" Image="/Images/Music.png" EquipNo="1005" EquipStateYcNo="" CeDianConfig="1005" ClickShowPage="" />
	<GWEquipTreeItem Name="手机中框产线" IsExpanded="True" Image="/Images/Music.png" EquipNo="" EquipStateYcNo="" CeDianConfig="" ClickShowPage="">
		<GWEquipTreeItem Name="中框-Foxnum2" IsExpanded="True" Image="/Images/Music.png" EquipNo="20009" EquipStateYcNo="" CeDianConfig="20009" ClickShowPage="" />
		<GWEquipTreeItem Name="中框-A1200Foxbot1" IsExpanded="False" Image="/Images/Music.png" EquipNo="20019" EquipStateYcNo="" CeDianConfig="20019" ClickShowPage="" />
		<GWEquipTreeItem Name="中框-Foxnum1" IsExpanded="True" Image="/Images/Music.png" EquipNo="20008" EquipStateYcNo="" CeDianConfig="20008" ClickShowPage="" />
		<GWEquipTreeItem Name="中框-A1200Foxbot2" IsExpanded="True" Image="/Images/Music.png" EquipNo="20020" EquipStateYcNo="" CeDianConfig="20020" ClickShowPage="" />
		<GWEquipTreeItem Name="中框-Fanuc" IsExpanded="False" Image="/Images/Music.png" EquipNo="20015" EquipStateYcNo="" CeDianConfig="20015" ClickShowPage="" />
		<GWEquipTreeItem Name="中框-A1200ROBOT1" IsExpanded="False" Image="/Images/Music.png" EquipNo="20016" EquipStateYcNo="" CeDianConfig="20016" ClickShowPage="" />
		<GWEquipTreeItem Name="中框-A1200ROBOT2" IsExpanded="True" Image="/Images/Music.png" EquipNo="20017" EquipStateYcNo="" CeDianConfig="20017" ClickShowPage="" />
		<GWEquipTreeItem Name="中框-AGV2" IsExpanded="True" Image="/Images/Music.png" EquipNo="20006" EquipStateYcNo="" CeDianConfig="20006" ClickShowPage="" />
	</GWEquipTreeItem>
	<GWEquipTreeItem Name="刀具生产线" IsExpanded="True" Image="/Images/Music.png" EquipNo="" EquipStateYcNo="" CeDianConfig="" ClickShowPage="">
		<GWEquipTreeItem Name="刀具-华中数控" IsExpanded="False" Image="/Images/Music.png" EquipNo="20007" EquipStateYcNo="" CeDianConfig="20007" ClickShowPage="" />
		<GWEquipTreeItem Name="刀具-A1200Foxbot3" IsExpanded="True" Image="/Images/Music.png" EquipNo="20021" EquipStateYcNo="" CeDianConfig="20021" ClickShowPage="" />
		<GWEquipTreeItem Name="刀具-ATM检测设备" IsExpanded="True" Image="/Images/Music.png" EquipNo="20010" EquipStateYcNo="" CeDianConfig="20010" ClickShowPage="" />
		<GWEquipTreeItem Name="刀具-A1200ROBOT3" IsExpanded="False" Image="/Images/Music.png" EquipNo="20018" EquipStateYcNo="" CeDianConfig="20018" ClickShowPage="" />
		<GWEquipTreeItem Name="刀具-AGV1" IsExpanded="False" Image="/Images/Music.png" EquipNo="20005" EquipStateYcNo="" CeDianConfig="20005" ClickShowPage="" />
	</GWEquipTreeItem>
	<GWEquipTreeItem Name="导轨控制器" IsExpanded="True" Image="/Images/Music.png" EquipNo="5640" EquipStateYcNo="" CeDianConfig="5640" ClickShowPage="" />
	<GWEquipTreeItem Name="轨道摄像机" IsExpanded="False" Image="/Images/Music.png" EquipNo="20003" EquipStateYcNo="" CeDianConfig="20003" ClickShowPage="" />
</GWEquipTreeItem>*/