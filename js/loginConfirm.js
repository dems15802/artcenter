$(function () {
    var $frm = $("#loginForm");
    $frm.on("submit", function (e) {
        e.preventDefault();
        var myData = $frm.serialize();
        $.ajax({
            type: "POST",
            url: $frm.attr("action"),
            data: myData,
            success: function (res) {
                if (res) {
                    var jsonData = JSON.parse(res);
                    var message = jsonData.user_name+"( "+ jsonData.user_id +" )님 반갑습니다.";
                    $(".tnb").prepend("<li>"+message+"</li>");
                    $(".cont__login").html("<p>"+message+"</p>");
                    $('.logIn').text("로그아웃")
                }
            }
        });
    });
});
