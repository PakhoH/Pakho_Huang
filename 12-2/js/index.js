$(document).ready(function() {
    $("h3").each(function(index) {
        $(this).click(function() {
            $(".article_info").eq(index).toggle();
            $(".jiantou").eq(index).toggle();
        });
    });
});
