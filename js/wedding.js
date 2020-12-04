$(function() {
    //topimageスライドショー
        $('.top-image_common').slick({
            autoplay: true, //自動再生
            dots: true, //ドットのナビゲーションを表示
            infinite: true, //スライドのループ有効化
            speed: 800, //切り替えのスピード（小さくすると速くなる）
            fade: true, //フェードの有効化
          });
    //ここまで
});