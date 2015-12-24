/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */

// 头像切换封装函数
var courses = courses || {};

courses.avatar = courses.avatar || {};

(function(a){
    a.box = {
        pic : null,
        list: null,
        btn : null
    };

    a.step = $(".avatar-items li").width();
    a.size = 0;
    a.max = 0;

    a.len = 0;

    a.toggle = function( expr ){
        var btn = $(expr);
        if(btn.length == 0){ return; }
        var wrap = btn.parent();
        var pic = wrap.hasClass('avatar-roll') ? wrap.siblings('.avatar-items') : wrap.find('.avatar-items');
        if(pic.length == 0){ return; }


        this.box.pic = pic;
        this.box.list = pic.find('li');
        this.box.btn = btn;
        this.box.prev = btn.hasClass('prev') ? btn : btn.siblings('.prev');
        this.box.next = btn.hasClass('next') ? btn : btn.siblings('.next');
        this.size = this.box.list.length;
        this.max = this.size - 1;
        this.step = pic.find('li').width();
        var list = pic.find('li');
        var left = pic.css('margin-left');

        this.left = Number(left.replace('px',''));

        if(btn.hasClass('prev')){
            a.prev();
        }else{
            a.next();
        }
    }

    a.prev = function(){

        if(a.left < 0){
            a.box.pic.animate({
                marginLeft : '+='+a.step+'px'
            }, 500, function(){
                a.left += a.step;
                a.setCls();
                if(a.left >= 0){
                    $(this).clearQueue();
                }
            });
        }else{
            a.box.pic.clearQueue();
        }
    };

    a.next = function(){
        var box = a.box.pic,
        left = Number(box.css('margin-left').replace('px',''));

        if(a.left > -(a.max * a.step)){
            a.box.pic.animate({
                marginLeft : '-='+a.step+'px'
            }, 500, function(){
                a.left -= a.step;
                a.setCls();
                if(a.left <= -(a.max * a.step)){
                    $(this).clearQueue();
                }
            });
        }else{
            a.box.pic.clearQueue();
        }
    };

    a.setCls = function(){
        var hasNext = Math.abs(a.left) < ((a.box.list.length - 1) * a.step);
        var hasPrev = a.left < 0;

        if(hasNext){
            a.box.next.removeClass('none');
        }else{
            a.box.next.addClass('none');
        }

        if(hasPrev){
            a.box.prev.removeClass('none');
        }else{
            a.box.prev.addClass('none');
        }
    };

})(courses.avatar);

// 绑定老师头像切换事件
$('body').off('click', '.avatar-roll a, .majar-items .prev, .majar-items .next').on('click', '.avatar-roll a, .majar-items .prev, .majar-items .next', function() {
    var that = $(this);
    if (that.hasClass('none')) {
        return false;
    } else {
       courses.avatar.toggle(that)     
   }
});
/**
 * 
 * 关注相关业务
 * @param {Object} fc courses.attention
 * 
 */
 courses.attention = courses.attention || {};

 (function(fa){

    /**
     * 关注和取消新鲜事方法
     * @param  {string} dom 任意子节点
     */
     fa.addCancel = function(dom){
        var _type = $(dom).data().type;
        var _params = $(dom).data().params + '&type=' + _type;
        $.ajax({
            //url: fresh.path.url + 'ajaxFollow.json',
            //type: "get",
            url: fresh.path.url + 'ajaxFollow',
            type: "post",
            timeout: 7000,
            dataType: 'json',
            data: _params,
            success: function(data) {
                if (data.sign == 2) {
                   window.location.href = data.msg;
                }else if(data.sign == 1) {
                    switch(_type){
                        case 1:
                        $(e).html('<em>已关注</em>');
                        break;
                        case 2:
                        $(dom).html('<a href="javascript:void(0)" class="free-attention-btn free-add-attention-btn"><span class="free-add left">+</span><span class="left">关注</span></a>');
                        $(dom).data({type:3});
                        break;
                        case 3:
                        $(dom).html('<em>已关注</em>');
                        $(dom).data({type:2});
                        break;
                    }
                }else{
                    alert(data.msg);
                    return false;
                }
            },
            error: function() {
                alert('数据读取错误..');
            }
        });
}

})(courses.attention)

/* ================= 关注相关 ============= */

    //点击添加关注按钮
    $('.course-list').off('click', '.free-course-attention .free-add-attention-btn').on('click', '.free-course-attention .free-add-attention-btn', function(){
        var that = $(this).closest('.free-course-attention');
        courses.attention.addCancel(that);
    })

    // //点击添加取消关注按钮
    // $('.course-list').off('click', '.fresh-course-attention .fresh-add-cancel-btn').on('click', '.fresh-course-attention .fresh-add-cancel-btn', function(){
    //     var that = $(this).closest('.fresh-course-attention');
    //     courses.attention.addCancel(that);
    // });

//热门专题课区域增加链接
var a = $('.course-list.hot-course-list');
var bLink = $('.course-list.hot-course-link');
a.on('mouseover', function(){
    $(this).addClass('hover-feed');
});
a.on('mouseout', function(){
    $(this).removeClass('hover-feed');
});

bLink.find('.course-detail').off('click').on('click', function(event){
    var t = $(event.target);
    if(t.attr('href')){
        return;
    }else{
        var b = $(this).find('.course-title a');
        window.open(b.attr('href'));
    }
})


/**
 * XESUI 
 * Copyright 2013 xueersi.com All rights reserved.
 *
 * @description 
 *
 * @author Marco (marco@xesui.com)
 * @modify 2013-07-08 16:57:28
 * @version $Id$
 * 
 * @links http://xesui.com
 */


/**
 * @name ui.userinfo.js
 * @description 弹出的用户信息窗口
 * 
 * @module 
 * @submodule 
 * @main 
 * @class 
 * @constructor 
 * @static 
 */

