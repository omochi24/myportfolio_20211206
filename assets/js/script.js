$(function () {
    // ハンバーガーメニュー
    $('.js-hum-btn').on('click', function() {
        $('.nav-list, .hum-btn-line').toggleClass('open');
        $('body').toggleClass('noscroll');
    });

    // スティッキーヘッダー
    $('.header').each(function() {
        var $win = $(window), //ウィンドウオブジェクト
            $header = $(this), // ヘッダーオブジェクト
            // fvHeight = $('.fv').outerHeight(); // ヘッダーのbottom位置
            fvHeight = $(window).height(); // 画面の高さ

            $win.on('scroll', function() {
            if($win.scrollTop() > fvHeight) {
                $header.addClass('sticky');
            }
            else {
                $header.removeClass('sticky');
            }
        });
    });
});