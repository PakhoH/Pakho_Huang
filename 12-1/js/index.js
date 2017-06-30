$(document).ready(function() {
    //页面中所有鼠标滑动事件
    var hover = {
        init: function() { //初始化
            this.username();
            this.usersetting();
            this.moreproducts();
        },
        username: function() { //用户名下拉效果
            $("#username").hover(function() {
                $(".username-menu").show();
            }, function() {
                $(".username-menu").hide();
            });
            $(".username-menu div a").hover(function() {
                $(this).css("background-color", " #38f");
            }, function() {
                $(this).css("background-color", " #fff");
            });
        },
        usersetting: function() { //设置下拉效果
            $("#usersetting").hover(function() {
                $(".usersetting-menu").show();
            }, function() {
                $(".usersetting-menu").hide();
            });

            $(".usersetting-menu div a").hover(function() {
                $(this).css("background-color", " #38f");
            }, function() {
                $(this).css("background-color", " #fff");
            });
        },
        moreproducts: function() { //更多产品下拉效果
            $("#moreproducts").hover(function() {
                $(".moreproducts-menu").show();
                $(".moreproducts-menu").hover(function() {
                    $(this).show();
                }, function() {
                    $(".moreproducts-menu").hide();
                });
            }, function() {
                $(".moreproducts-menu").hide();
            });
            $(".moreproducts-menu a").hover(function() {
                $(this).css("text-decoration", "underline");
            });
        },
    };

    //页面中所有鼠标点击事件
    var click = {
        init: function() { //初始化
            this.theme();
            this.skin();
            this.it_li();
        },
        theme: function() { //弹出换肤图片
            $(".ch-theme").click(function() {
                $(".bg-theme").toggle();
            });
        },
        skin: function() { //换肤功能和localStorage效果
            var cur_skin = parseInt(localStorage.skin);
            if (!cur_skin) {
                $("#myTheme").removeClass().addClass("btn-theme" + 1);
            } else {
                $("#myTheme").removeClass().addClass("btn-theme" + (cur_skin + 1));
            }
            $(".bg-theme li").each(function(index) {
                $(this).click(function() {
                    $("#myTheme").removeClass().addClass("btn-theme" + (index + 1));
                    $(".bg-theme").hide();
                    localStorage.skin = index;
                });
            });
        },
        it_li: function() { //切换标签、css内容
            $(".it-li").each(function(index) {
                $(this).hover(function() {
                    $(".it-li").eq(index).addClass("li-second");
                }, function() {
                    $(".it-li").eq(index).removeClass("li-second");
                });
                $(this).click(function() {
                    $(".info-first").removeClass("info-first");
                    $(".li-first").removeClass("li-first");
                    $(".it-info").eq(index).addClass("info-first");
                    $(".it-li").eq(index).addClass("li-first");
                });
            });
        },
    };

    //执行方法
    hover.init();
    click.init();
});
