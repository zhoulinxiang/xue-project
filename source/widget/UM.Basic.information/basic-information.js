var xue =xue || {};
    xue.formCheck = xue.formCheck || {};
var fCheck = xue.formCheck;

/* 提示信息的css样式 */
fCheck.setTips = function(select, tips){
  $(select).css({
    'display': 'block',
  }).html(tips);
};

/* 输入正确时，清除提醒 */
fCheck.clearTips = function(select){
  $(select).css({
    'display':'none'
  }).html(null);
};

/* 边框样式 */
fCheck.bordercss = function(argument) {
   if($(argument).val() !== ''){
     $(argument).css('border','1px solid #68c04a');
   }else{$(argument).css('border','1px solid #d2d2d2');}
}

/* 验证昵称 */
$(function(){
    var nickname = $('.nickname');
    $(nickname).on('focus',function(){
        nickname.data('lastVal', $.trim(nickname.val()));
        $('.prompt-empty').html('请输入不超过6个汉字、18个字母或18个数字').css({
            color: '#999',
            display: 'block'
        });
        $(".nickname-warning").css({
            display: 'none',
        });
    });
    $(nickname).on('blur',function(){
        fCheck.clearTips(".prompt-empty");
        if (nickname.val() == '') {            
            $(".nickname-warning").html('请输入昵称').css({
                display: 'block',
            });
        }else{
            if(nickname.data('lastVal') != $.trim(nickname.val())) {
                $(".nickname").css('border','1px solid #d2d2d2');
                fCheck.clearTips(".nickname-warning");
                $.fn.nickname();
            }else{
                $(".nickname-warning").css({
                    display: 'block',
                });
            }
        }
    });
});

var boxs = {
    nickname: '.nickname',
    school:'.school'
}

$.fn.nickname = function(){
    var box = $(boxs.nickname),
    val = box.val();
    if (val == '') {
        fCheck.setTips(".nickname-warning",'请输入昵称');
    }else {
        var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{1,18}$/;
        if(reg.test(val)){
            $.fn.nicknameajax();
        }else{
            fCheck.setTips(".nickname-warning",'只能输入数字、汉字和字母');
        }
    }
};

$.fn.nicknameajax = function(){
    var box = $(boxs.nickname),
        val = box.val(),
        d_val = $.trim(box.data('lastVal'));
    if($.trim(val) != d_val){
        $.ajax({
            url : '/MyInfos/getNicknameUseful',
            type : 'GET',
            dataType : 'json',
            data : 'nickname=' + $('.nickname').val(),
            timeout: 7000,
            async: true,
            success  : function(result){
                if(result.sign == false){
                    fCheck.setTips(".nickname-warning",result.msg);
                    return false;
                } else {
                    fCheck.clearTips(".nickname-warning");
                    fCheck.bordercss('.nickname');
                    $(box).data('lastVal',val);
                    return true;
                }
                if(result.sign === 2){
                    window.location.href = result.msg;
                } 
            }
        });
    }
}

/* 学校格式验证 */
$.fn.school = function(){
    var box = $(boxs.school),
    val = box.val();
    var text = box.next('.school-warning'),
    block = text.addClass('success');
    if (val == '') {
        fCheck.clearTips(".school-warning");
    }else {
        var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{1,50}$/;
        if(reg.test(val)){
            fCheck.clearTips(".school-warning");
            fCheck.bordercss('.school');
        }else{
            fCheck.setTips(".school-warning",'只能输入数字、汉字和字母');
            $('.school').css('border','1px solid #d2d2d2');
            return false;
        }
    }
};
$('.school').on('blur',function(){
    $.fn.school();
});
/* 点击提交按钮验证 */
function inforCheckform () {
    if ($(".nickname").val() == $(".nickname").data("nickname") && $(".school").val() == $(".school").data("school") && $("#year").find("option:selected").text() == $("#year").attr("rel") && $("#month").find("option:selected").text() == $("#month").attr("rel") && $("#day").find("option:selected").text() == $("#day").attr("rel")) {
        alert('您没有修改或新增任何资料');
        return false;
    }else{
        setTimeout($.fn.nickname(),200);
        $.fn.school();
    }
    if ($('.nickname-warning').is(":empty") && $('.school-warning').is(":empty") && $('.date-warning').is(":empty")) {
    }else{
        return false;
    };
}

var messageError = $(".message-error span").is(":empty");
if (messageError == '0') {
    $('.message-error').css({
        display: 'block'
    });
    setTimeout("$('.message-error').css({display: 'none'});",6000);
}