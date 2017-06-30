$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation();
        var dataImg = {
            "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" },
                { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }
            ]
        };
        window.onscroll = function() { //通过window监听鼠标滚动的对象
            if (scrollside()) { //如果允许滚动将重新加载新的图片
                $.each(dataImg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    //                    console.log("./images/"+$(value).attr("src"));
                    $("<img>").attr("src", "./images/" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };
        window.onresize = function() { //响应式布局
            imgLocation();
        };
    });


//判断是否允许滚动的方法
function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2); //最下面图片的高度
    var documentHeight = $(window).width(); //当前容器的高度
    var scrollHeight = $(window).scrollTop(); //滚动到最顶端的高度
    return (lastboxHeight < scrollHeight + documentHeight); //允许滚动的判断
}

//图片位置摆放的方法
function imgLocation() {
    var box = $(".box"); //获取盒子的对象
    var boxWidth = box.eq(0).width(); //获取第一张图片的宽度，在这里图片都是等宽的
    var num = Math.floor($(window).width() / boxWidth); //获取一排中图片能放置的张数
    var boxArr = []; //定义一个数组，用来承载储存列中所有box的高度 
    $('#container').css({ //使图片居中
        'margin': '0 auto',
        'width': boxWidth * num + 'px'
    });
    box.each(function(index, value) { //index确定位置，value确定哪个元素
        value.style.cssText = "";
        //        console.log(index+"--"+value);
        var boxHeight = box.eq(index).height();
        if (index < num) { //确定盒子内各box的高度
            boxArr[index] = boxHeight;
            //            console.log(boxHeight);
        } else {
            var minboxHeight = Math.min.apply(null, boxArr); //获取图片最小高度
            //            console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight, boxArr); //获取图片最小高度的位置
            //            console.log(minboxIndex);
            //            console.log(value);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height(); //重新计算其高度
        }
    });
}
