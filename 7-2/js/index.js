$(document).ready(function() {
	//导航栏的滑动下拉效果
	$(" .li-first").hover(function() {
		$(".submenu1").fadeIn(); //滑动时出现
		$(".s-list").css("color", "#35b558"); //字体颜色改变
	}, function() {
		$(".submenu1").fadeOut();
		$(".s-list").css("color", "#333");
	});

	$(" .li-second").hover(function() {
		$(".submenu2").fadeIn(); //滑动时出现
	}, function() {
		$(".submenu2").fadeOut();
	});

	$(" .li-third").hover(function() {
		$(".submenu3").fadeIn(); //滑动时出现
		$(".jksq").css("color", "#35b558"); //字体颜色改变
	}, function() {
		$(".submenu3").fadeOut();
		$(".jksq").css("color", "#333");
	});

	$(".school-list>a").hover(function() {
		$(this).css("color", "#35b558"); //滑动至子元素时，子元素字体颜色改变
	}, function() {
		$(this).css("color", "#333");
	})
	$(".vip-lesson>a").hover(function() {
		$(this).css("color", "#35b558"); //滑动至子元素时，子元素字体颜色改变
	}, function() {
		$(this).css("color", "#666");
	})

	//左侧列表的滑动右拉效果
	$(".l-show").hover(function() {
		$(this).find(".list-show").show(); //滑动时出现
		$(this).find(".a1").css({ //字体大小和颜色改变
			"font-size": "14px",
			'color': '#35b558'
		});

	}, function() {
		$(this).find(".list-show").hide();
		$(this).find(".a1").css({
			"font-size": "12px",
			'color': '#333'
		});
	});

	$(".list-show a").hover(function() {
		$(this).css('color', '#35b558'); //滑动至子元素时，子元素字体颜色改变
	}, function() {
		$(this).css('color', '#333');
	});

	//搜索框的效果
	$(".search-icon").click(function() {
		$(".searchbox").slideDown()
	});
	$(".close-icon").click(function() {
		$(".searchbox").slideUp()
	});



	//课程库列表页面板浮动特效
	$(".lesson-list1 .lesson-li").hover(function() {
		$(this).find(".lesson-info").stop().animate({ //背景延伸60px，和增加的内容保持一致
			height: "148px"
		}, "slow");
		$(this).find("p").stop().animate({ // 显示p标签的内容
			height: "60px",
			opacity: '1'
		});
	}, function() {
		$(this).find(".lesson-info").stop().animate({
			height: "88px"
		}, "slow");
		$(this).find("p").stop().animate({
			height: "0",
			opacity: '0',
		});
	});

	$(".lesson-li1").hover(function() {
		$(this).find(".lessonplay").stop().animate({ //滑动时图片的效果
			opacity: '1'
		});
	}, function() {
		$(this).find(".lessonplay").stop().animate({
			opacity: '0'
		});
	});
	$(".lesson-li2").hover(function() {
		$(this).find(".lessonplay2").stop().animate({ //滑动时图片的效果
			opacity: '1'
		});
	}, function() {
		$(this).find(".lessonplay2").stop().animate({
			opacity: '0'
		});
	});

	//不同风格列表展示特效
	$(".horizontal-style").click(function() {
		$(".lesson-list1").css("display", "block");
		$(".lesson-list2").css("display", "none");
		$(".main").removeClass("main2");
	});
	$(".vertical-style").click(function() {
		$(".lesson-list1").css("display", "none");
		$(".lesson-list2").css("display", "block");
		$(".main").addClass("main2");
	});


})