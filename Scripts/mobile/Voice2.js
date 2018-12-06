//点击事件
$("#voiceContainer,.voicePanel,.voicePanel>a").unbind();
$("#voiceContainer,.voicePanel>a").bind("click",function(){
   $("#voiceContainer").addClass("voiceContainer");
   return false;
});

$(".voicePanel").bind("click",function(){
   return false;
});



    //监听
    document.getElementById("voiceBtn").addEventListener('touchstart', onTouchStart);
//  document.getElementById("voiceBtn").addEventListener('touchend', onTouchEnd);
    toolbarActive('VoiceTool');
    //记录选择
    if (!window.localStorage.voiceList) {
        window.localStorage.voiceList = "1";
    }

    try {
        myJavaFun.VoiceOpen();
    }
    catch (ex) {

    }


function onVoiceList() {
    window.localStorage.voiceList = $("#voiceList").find("option:selected").attr("value");
}

var isVoices = false;

//按住开始说话
function onTouchStart() {
    $("#voiceContainer").removeClass("voiceContainer");
    $("#voiceBtn p img").attr("src","/Image/fsk/voiceIcon.png");
    $(this).addClass("voiceActive");
    $("#voiceMessage").hide();
    $("#waveAnim").show();
    //$(".voicetest").html("已按下");
    try {
        isVoices = true;
        if (window.localStorage.voiceList == "0") {
            myJavaFun.StartVice();
        }
        else {
            myJavaFun.StartVoice(window.localStorage.voiceList);
        }
    } catch (ex) {
        $("#voiceMessage").html("无法使用此功能，请下载最新app！");
    }
}

//释放手指并识别语音
function onTouchEnd() {
    // $("#voiceContainer").addClass("voiceContainer");
    $("#voiceBtn p img").attr("src","/Image/fsk/voiceIcon.png");
    if (!isVoices) {
        return;
    }
    if ($(this).hasClass("voiceActive")) {
        $(this).removeClass("voiceActive");
        $("#voiceMessage").show();
        $("#voiceMessage").html("正在识别…");
        $("#waveAnim").hide();
    }

    document.getElementById("voiceBtn").removeEventListener('touchstart', onTouchStart);
    document.getElementById("voiceBtn").removeEventListener('touchend', onTouchEnd);
    setTimeout(function () {
        try {
            if (window.localStorage.voiceList == "0") {
                myJavaFun.StopVice();
            }
            else {
                myJavaFun.StopVoice();
            }
        } catch (ex) {
            isVoices = false;
            $("#voiceMessage").html("无法使用此功能，请下载最新app！");
            document.getElementById("voiceBtn").addEventListener('touchstart', onTouchStart);
            document.getElementById("voiceBtn").addEventListener('touchend', onTouchEnd);
            setTimeout(function () {
                if (isVoices == false) {
                    $("#voiceMessage").html("按住说话");
                    document.getElementById("voiceBtn").addEventListener('touchstart', onTouchStart);
                    document.getElementById("voiceBtn").addEventListener('touchend', onTouchEnd);
                }
            }, 3000);
        }
    }, 50);
}

//接收回调数据并上传至服务器
function callbackVoiceBuffer(dt) {
    var _url = service + "/VoiceControlByte";
    var _data = "audioData=" + dt + "&&userName=" + window.localStorage.userName;
    ajaxService("post", _url, true, _data, _successf, _error);
    function _successf(data) {
        var rets = $(data).children("string").text();
        if (rets == "") {
            $("#voiceMessage").html("未识别！");
        }
        else {
            $("#voiceMessage").html(rets);
        }
        isVoices = false;
        document.getElementById("voiceBtn").addEventListener('touchstart', onTouchStart);
        document.getElementById("voiceBtn").addEventListener('touchend', onTouchEnd);
    }
    function _error(qXHR, textStatus, errorThrown) {
        $("#voiceMessage").html("服务器出错！");
        isVoices = false;
        document.getElementById("voiceBtn").addEventListener('touchstart', onTouchStart);
        document.getElementById("voiceBtn").addEventListener('touchend', onTouchEnd);
        setTimeout(function () {
            if (isVoices == false) {
                $("#voiceMessage").html("按住说话");
            }
        }, 3000);
    }
}

function StartVoiceXF() {
    try {
        $("#voiceBtn_xf").unbind();
        $("#voiceBtn_xf").addClass("disabled");
        $("#waveAnim_xf").show();
        $("#voiceMessage_xf1").hide();
        $("#voiceMessage_xf2").hide();
        myJavaFun.StartViceXF(parseInt(window.localStorage.XFOffline));
    }
    catch (ex) {
        $("#waveAnim_xf").hide();
        $("#voiceMessage_xf1").html("无法使用此功能！");
        $("#voiceBtn_xf").removeClass("disabled");
        $("#voiceMessage_xf1").show();
        $("#voiceMessage_xf2").html("");
        $("#voiceMessage_xf2").show();
    }
}
function callbackVoiceXFMessage(dt) {
    $("#voiceMessage").html(dt);
    $("#voiceMessage").show();
    $("#waveAnim").hide();
    isVoices = false;
    document.getElementById("voiceBtn").addEventListener('touchstart', onTouchStart);
    document.getElementById("voiceBtn").addEventListener('touchend', onTouchEnd);
}
function callbackVoiceXFData(dt) {
    // myApp.dialog.alert(dt);
    var _url = service + "/VoiceControlString";
    var _data = "audioData=" + dt + "&&userName=" + window.localStorage.userName;
    ajaxService("post", _url, true, _data, _successf, _error);
    function _successf(data) {
        var rets = $(data).children("string").text();
        if (rets == "") {
            $("#voiceMessage").html("处理：未识别！");
        }
        else {
            $("#voiceMessage").html("处理：" + rets);
        }
        isVoices = false;
        document.getElementById("voiceBtn").addEventListener('touchstart', onTouchStart);
        document.getElementById("voiceBtn").addEventListener('touchend', onTouchEnd);
    }
    function _error(qXHR, textStatus, errorThrown) {
        $("#voiceMessage").html("服务器出错！");
        isVoices = false;
        document.getElementById("voiceBtn").addEventListener('touchstart', onTouchStart);
        document.getElementById("voiceBtn").addEventListener('touchend', onTouchEnd);
        setTimeout(function () {
            if (isVoices == false) {
                $("#voiceMessage").html("按住说话");
            }
        }, 3000);
    }
}