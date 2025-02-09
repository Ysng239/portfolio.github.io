$(window).on('load',function(){

  (function($) {
    var $spnav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $spnav.hasClass( open ) ) {
        $spnav.addClass( open );
      } else {
        $spnav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $spnav.removeClass( open );
    });
  } )(jQuery);




  particlesJS("particles-js",{
    "particles":{
      "number":{
        "value":38,//この数値を変更すると幾何学模様の数が増減できる
        "density":{
          "enable":true,
          "value_area":800
        }
      },
      "color":{
        "value":"#39b97f"//色
      },
      "shape":{
        "type":"polygon",//形状はpolygonを指定
        "stroke":{
          "width":0,
        },
    "polygon":{
      "nb_sides":3//多角形の角の数
    },
    "image":{
      "width":190,
      "height":100
    }
    },
      "opacity":{
      "value":0.664994832269074,
      "random":false,
      "anim":{
        "enable":true,
        "speed":2.2722661797524872,
        "opacity_min":0.08115236356258881,
        "sync":false
      }
      },
      "size":{
        "value":3,
        "random":true,
        "anim":{
          "enable":false,
          "speed":40,
          "size_min":0.1,
          "sync":false
        }
      },
      "line_linked":{
        "enable":true,
        "distance":150,
        "color":"#39b97f",
        "opacity":0.6,
        "width":1
      },
      "move":{
        "enable":true,
        "speed":6,//この数値を小さくするとゆっくりな動きになる
        "direction":"none",//方向指定なし
        "random":false,//動きはランダムにしない
        "straight":false,//動きをとどめない
        "out_mode":"out",//画面の外に出るように描写
        "bounce":false,//跳ね返りなし
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":961.4383117143238
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
          "mode":"repulse"
        },
    "onclick":{
      "enable":false
    },
    "resize":true
      }
    },
    "retina_detect":true
  });
  

  $("#particle").particleText({
    text: "Portfolio YR", // 表示させたいテキスト。改行の場合は<br>追加
    colors:["#222","#222", "#222"], // パーティクルの色を複数指定可能
    speed: "high", // slow, middle, high の3つから粒子が集まる速さを選択
    });
  

   

      lightbox.option({
        'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
        'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
      })




});



