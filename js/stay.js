$(function() {
    //topimageスライドショー
        $('.top-image_stay').slick({
            autoplay: true, //自動再生
            dots: true, //ドットのナビゲーションを表示
            infinite: true, //スライドのループ有効化
            speed: 800, //切り替えのスピード（小さくすると速くなる）
            fade: true, //フェードの有効化
          });
    //ここまで
    
    //（レストランページ）
        $('.recommend-plan').slick({
            autoplay: true, //自動再生
            autoplaySpeed: 1500, //自動再生速度
            dots: true, // ドットインジケーターの表示
            infinite: true, // スライドのループを有効にするか
            slidesToShow: 3, // 表示するスライド数を設定
            slidesToScroll: 1 // スクロールするスライド数を設定 
        });
    //ここまで
    
    //こだわりスクロール
        $('a[href^="#"]').click(function() {
            // スクロールの速度
            var speed = 500; // ミリ秒で記述
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
      //ここまで
    });