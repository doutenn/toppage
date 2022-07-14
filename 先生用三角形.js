const main = () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    //縦の長さ
    var tateElement = document.getElementById('tate');

    //横の長さ
    var yokoElement = document.getElementById('yoko');

    //速さ
    var hayasaElement = document.getElementById('hayasa');

    //塗りつぶす色の指定
    ctx.fillStyle = "rgb(0, 155, 0)";

    let x = 150;
    let y = tateElement.value*100+100;
  
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
          start();
        };
        //リセットボタンが押された時の処理  
        resetButton.onclick = function() {
          reset();
        };
      };
   
    function draw(){
    if(x <= yokoElement.value*100+150){
        // canvas 内をまっさらにする
        ctx.clearRect(0, 0, 2000, 3000);
        //描画開始
        ctx.beginPath();
        //円
        ctx.arc(x,tateElement.value*100+100, 7, 0, Math.PI*2, false)
        ctx.fill();
    
        //三角形
        ctx.moveTo(x, tateElement.value*100+100);
        ctx.lineTo(150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, 100);
        ctx.closePath();
        ctx.fill();
   
        // x を 1 増加
        x += 1 * hayasaElement.value;
        // 10 ミリ秒(0.01 秒)後に draw を再度呼び出し
        setTimeout(draw, 10);
   
        //元の三角形
        ctx.moveTo(yokoElement.value*100+150, 100);
        ctx.lineTo(150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, tateElement.value*100+100);
    
        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
        //点の名前
        ctx.font = "32px serif";
        ctx.fillText("A",yokoElement.value*100+160,110)
        ctx.fillText("B",120,tateElement.value*100+110)
        ctx.fillText("C",yokoElement.value*100+160,tateElement.value*100+110)
        ctx.fillText("P",x-10,tateElement.value*100+150);
      }else if(x >= yokoElement.value*100+150 && y >= 100){
        // canvas 内をまっさらにする
        ctx.clearRect(0, 0, 2000, 3000);
        //描画開始
        ctx.beginPath();
        //円
        ctx.arc(yokoElement.value*100+150, y , 7, 0, Math.PI*2, false)
        ctx.fill();
    
        //三角形
        ctx.moveTo(yokoElement.value*100+150, y);
        ctx.lineTo(150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, 100);
        ctx.closePath();
        ctx.fill();
   
        // x を 1 増加
        y -= 1 * hayasaElement.value;
        // 10 ミリ秒(0.01 秒)後に draw を再度呼び出し
        setTimeout(draw, 10);
   
        //元の三角形
        ctx.moveTo(yokoElement.value*100+150, 100);
        ctx.lineTo(150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, tateElement.value*100+100);
    
        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
        //点の名前
        ctx.font = "32px serif";
        ctx.fillText("A",yokoElement.value*100+160,110)
        ctx.fillText("B",120,tateElement.value*100+110)
        ctx.fillText("C",yokoElement.value*100+160,tateElement.value*100+110)
        ctx.fillText("P",yokoElement.value*100+190,y+10);
       }
    };

    function start() {
        y = tateElement.value*100+100;
        draw(); 
    }

    function reset() {
        x = 150;
        y = tateElement.value*100+100;
        draw();
    }
  };

   
  document.addEventListener("DOMContentLoaded", main);
