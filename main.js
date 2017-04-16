var curIndex = 0, //当前index
    imgLen = $(".imglist li").length; //图片总数
// 定时器自动变换2.5秒每次
var autoChange = setInterval(function () {
    if (curIndex < imgLen - 1) {
        curIndex++;
    } else {
        curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex);
}, 2500);
//对按钮进行事件绑定处理等
$(".indexlist").find("li").each(function (item) {
    $(this).hover(function () {
        clearInterval(autoChange);
        changeTo(item);
        curIndex = item;
    }, function () {
        autoChangeAgain();
    });
});
//清除定时器时候的重置定时器--封装
function autoChangeAgain() {
    autoChange = setInterval(function () {
        if (curIndex < imgLen - 1) {
            curIndex++;
        } else {
            curIndex = 0;
        }
        //调用变换处理函数
        changeTo(curIndex);

    }, 2500);
}
function changeTo(num) {
    var goLeft = num * 600;
    $(".imglist").animate({ left: "-" + goLeft + "px" }, 1000);
    $(".indexlist").find("li").removeClass("indexOne").eq(num).addClass("indexOne");
}
