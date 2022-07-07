const main = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    //塗りつぶす色の指定
    ctx.fillStyle = "rgb(0, 155, 0)";
   
    let x = 150;
  
    // スタートボタンの変数定義
    var startButton;

    // リセットボタンの変数定義
    var resetButton;
      window.onload = function() {
        // スタートボタンが押されたかを判定
        startButton = document.getElementById('start');
        
        // リセットボタンが押されたかを判定
        resetButton = document.getElementById('reset');
    
        //スタートボタンが押された時の処理
        startButton.onclick = function() {
          draw();
        };
        //リセットボタンが押された時の処理  
        resetButton.onclick = function() {
          reset();
        };
        //描画開始
        ctx.beginPath();
        //円
        ctx.arc(150, 400, 7, 0, Math.PI*2, false)
        ctx.fill();
 
        //三角形
        ctx.moveTo(x, 400);
        ctx.lineTo(650, 100);
        ctx.lineTo(650, 400);

        ctx.font = "32px serif";
        ctx.fillText("B",120,410);
        ctx.fillText("A",660,110);
        ctx.fillText("C",660,410);
        ctx.fillText("P",x-10,440);
        ctx.fillText("6cm",660,260);
        ctx.fillText("10cm",380,440);

        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
    };
   
    function draw(){
      if(x <= 650){
        
       // canvas 内をまっさらにする
       ctx.clearRect(0, 0, 800, 480);
       //描画開始
       ctx.beginPath();
       //円
       ctx.arc(x, 400, 7, 0, Math.PI*2, false)
       ctx.fill();
       ctx.font = "32px serif";
        ctx.fillText("P",x-10,440);
       
   
       //三角形
       ctx.moveTo(x, 400);
       ctx.lineTo(650, 100);
       ctx.lineTo(650, 400);
       
       // y を 1 増加
       x += 1;
       // 10 ミリ秒(0.1 秒)後に draw を再度呼び出し
       setTimeout(draw, 10, x + 1);

  
       //三角形
       ctx.moveTo(150, 400);
       ctx.lineTo(650, 400);
       ctx.lineTo(650, 100);
       ctx.fill();

       ctx.font = "32px serif";
       ctx.fillText("B",120,410);
       ctx.fillText("A",660,110);
       ctx.fillText("C",660,410);
       ctx.fillText("6cm",660,260);
        ctx.fillText("10cm",380,440);
   
       // 開始地点に戻って線を閉じる
       ctx.closePath();
       // 塗りつぶしを実行
       ctx.stroke();
      }else{
        y = 100;
      }
    };


    function reset() {
      x = 150;
       // canvas 内をまっさらにする
       ctx.clearRect(0, 0, 800, 480);
       //描画開始
       ctx.beginPath();
       //円
       ctx.arc(150, 400, 7, 0, Math.PI*2, false)
       ctx.fill();
 
       //三角形
       ctx.moveTo(x, 400);
       ctx.lineTo(650, 100);
       ctx.lineTo(650, 400);

       ctx.font = "32px serif";
       ctx.fillText("B",120,410);
       ctx.fillText("A",660,110);
       ctx.fillText("C",660,410);
       ctx.fillText("P",x-10,440);
       ctx.fillText("6cm",660,260);
        ctx.fillText("10cm",380,440);

       // 開始地点に戻って線を閉じる
       ctx.closePath();
       // 塗りつぶしを実行
       ctx.stroke();
    };
  };

   
  document.addEventListener("DOMContentLoaded", main);
