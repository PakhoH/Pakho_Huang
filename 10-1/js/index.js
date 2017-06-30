$(document).ready(function() {
    //鼠标滑动时显示二级菜单
    $("#username").hover(function() {
        $(".username-menu").show();
    }, function() {
        $(".username-menu").hide();
    });

    $("#usersetting").hover(function() {
        $(".usersetting-menu").show();
    }, function() {
        $(".usersetting-menu").hide();
    });

    //鼠标滑动到二级菜单时背景颜色
    $(".username-menu div a").hover(function() {
        $(this).css("background-color", " #38f")
    }, function() {
        $(this).css("background-color", " #fff")
    });
    $(".usersetting-menu div a").hover(function() {
        $(this).css("background-color", " #38f")
    }, function() {
        $(this).css("background-color", " #fff")
    });


    //更多产品的下拉效果
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

    $(".moreproducts-menu a").hover(function() { //鼠标滑动时显示下划线
        $(this).css("text-decoration", "underline");
    });

    $(".ch-theme").click(function() { //点击换肤时，跳出背景主题来提供选择
        $(".bg-theme").toggle();
    })

    //点击图片更换背景

    $(".btn-theme1").click(function() {
        $("#myTheme").removeClass("btn-theme1 btn-theme2 btn-theme3 btn-theme4 btn-theme5 btn-theme6");
        $("#myTheme").addClass("btn-theme1");
    });
    $(".btn-theme2").click(function() {
        $("#myTheme").removeClass("btn-theme1 btn-theme2 btn-theme3 btn-theme4 btn-theme5 btn-theme6");
        $("#myTheme").addClass("btn-theme2");
    });
    $(".btn-theme3").click(function() {
        $("#myTheme").removeClass("btn-theme1 btn-theme2 btn-theme3 btn-theme4 btn-theme5 btn-theme6");
        $("#myTheme").addClass("btn-theme3");
    });
    $(".btn-theme4").click(function() {
        $("#myTheme").removeClass("btn-theme1 btn-theme2 btn-theme3 btn-theme4 btn-theme5 btn-theme6");
        $("#myTheme").addClass("btn-theme4");
    });
    $(".btn-theme5").click(function() {
        $("#myTheme").removeClass("btn-theme1 btn-theme2 btn-theme3 btn-theme4 btn-theme5 btn-theme6");
        $("#myTheme").addClass("btn-theme5");
    });
    $(".btn-theme6").click(function() {
        $("#myTheme").removeClass("btn-theme1 btn-theme2 btn-theme3 btn-theme4 btn-theme5 btn-theme6");
        $("#myTheme").addClass("btn-theme6");
    });

 
    $(".it-li").each(function(index) { //切换标签、css内容
        $(this).hover(function() { //当鼠标移动到该元素时，样式改变
            $(".it-li").eq(index).addClass("li-second");
        }, function() {
            $(".it-li").eq(index).removeClass("li-second");
        });
        $(this).click(function() { //当点击鼠标时，该元素的样式改变
            $(".info-first").removeClass("info-first");
            $(".li-first").removeClass("li-first");
            $(".it-info").eq(index).addClass("info-first");
            $(".it-li").eq(index).addClass("li-first");
        });
    });

   
})