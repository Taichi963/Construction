$(function () {
    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

    //==================== inview START ===========================
    $('.right-fade, .left-fade').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('fade-in');
        } else {
            $(this).removeClass('fade-in');
        }
    });
});
//======================== inview END =============================
