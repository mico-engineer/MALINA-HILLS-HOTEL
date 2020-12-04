$(document).ready(function() {
//topimageスライドショー
    $('.top-image_main').slick({
        autoplay: true, //自動再生
        dots: true, //ドットのナビゲーションを表示
        infinite: true, //スライドのループ有効化
        speed: 800, //切り替えのスピード（小さくすると速くなる）
        fade: true, //フェードの有効化
      });

      $('.top-image_common').slick({
        autoplay: true, //自動再生
        dots: true, //ドットのナビゲーションを表示
        infinite: true, //スライドのループ有効化
        speed: 800, //切り替えのスピード（小さくすると速くなる）
        fade: true, //フェードの有効化
      });
//ここまで

//予約タブ切り替え
    $(function () {
        let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
        $(".tab").on("click", function () { // tabをクリックしたらイベント発火
            $(".active").removeClass("active"); // activeクラスを消す
            $(this).addClass("active"); // クリックした箇所にactiveクラスを追加
            const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
            $(".panel").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
        })
    })
//ここまで

//カレンダー表示
    $.datepicker.setDefaults($.datepicker.regional["ja"]);//日本語
    $('.checkin').datepicker({
        numberOfMonths:2 //表示される月の数
//ここまで
    });

//おすすめ情報スライドショー（topページ）
    $('.pickup-contents').slick({
        autoplay: true, //自動再生
        autoplaySpeed: 1500, //自動再生速度
        dots: true, // ドットインジケーターの表示
        infinite: true, // スライドのループを有効にするか
        slidesToShow: 3, // 表示するスライド数を設定
        slidesToScroll: 1 // スクロールするスライド数を設定 
    });
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

});