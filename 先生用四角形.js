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
    let y1 = tateElement.value*100+100;
    let y2 = 100;
  
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
      if(y1 >= 100){
       // canvas 内をまっさらにする
       ctx.clearRect(0, 0, 2000, 3000);
       //描画開始
       ctx.beginPath();
      
       //円
       ctx.arc(150, y1, 7, 0, Math.PI*2, false)
       ctx.fill();
   
       //三角形
       ctx.moveTo(150, y1);
       ctx.lineTo(150, tateElement.value*100+100);
       ctx.lineTo(yokoElement.value*100+150, tateElement.value*100+100);
       ctx.closePath();
       ctx.fill();
       
       // y1 を 1 増加
       y1 -= 1 * hayasaElement.value;
       // 10 ミリ秒(0.1 秒)後に draw を再度呼び出し
       setTimeout(draw, 10);

       //四角形
       ctx.moveTo(150, 100);
       ctx.lineTo(150, tateElement.value*100+100);
       ctx.lineTo(yokoElement.value*100+150, tateElement.value*100+100);
       ctx.lineTo(yokoElement.value*100+150, 100);
   
       // 開始地点に戻って線を閉じる
       ctx.closePath();
       // 塗りつぶしを実行
       ctx.stroke();
       //点の名前
       ctx.font = "32px serif";
       ctx.fillText("A",120,tateElement.value*100+110)
       ctx.fillText("B",120,110)
       ctx.fillText("C",yokoElement.value*100+160,110)
       ctx.fillText("D",yokoElement.value*100+160,tateElement.value*100+110)
       ctx.fillText("P",90,y1+10);
    
      }else if(y1 <= 100 && x <= yokoElement.value*100+150){
        // canvas 内をまっさらにする
        ctx.clearRect(0, 0, 2000, 3000);
        //描画開始
        ctx.beginPath();
        //円
        ctx.arc(x, 100, 7, 0, Math.PI*2, false)
        ctx.fill();
    
        //三角形
        ctx.moveTo(x, 100);
        ctx.lineTo(150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, tateElement.value*100+100);
        ctx.closePath();
        ctx.fill();
   
        // x を 1 増加
        x += 1 * hayasaElement.value;
        // 10 ミリ秒(0.01 秒)後に draw を再度呼び出し
        setTimeout(draw, 10);
   
        //四角形
        ctx.moveTo(150, 100);
        ctx.lineTo(150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, 100);
    
        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
        //点の名前
        ctx.font = "32px serif";
        ctx.fillText("A",120,tateElement.value*100+110)
        ctx.fillText("B",120,110)
        ctx.fillText("C",yokoElement.value*100+160,110)
        ctx.fillText("D",yokoElement.value*100+160,tateElement.value*100+110)
        ctx.fillText("P",x-10,70);
      }else if(y1 <= 100 && x >= yokoElement.value*100+150 && y2 <= tateElement.value*100+100){
        // canvas 内をまっさらにする
        ctx.clearRect(0, 0, 2000, 3000);
        //描画開始
        ctx.beginPath();
        //円
        ctx.arc(yokoElement.value*100+150, y2, 7, 0, Math.PI*2, false)
        ctx.fill();
    
        //三角形
        ctx.moveTo(yokoElement.value*100+150, y2);
        ctx.lineTo(150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, tateElement.value*100+100);
        ctx.closePath();
        ctx.fill();
        
        // y2 を 1 増加
        y2 += 1 * hayasaElement.value;
        // 10 ミリ秒(0.1 秒)後に draw を再度呼び出し
        setTimeout(draw, 10);
 
   
        //四角形
        ctx.moveTo(150, 100);
        ctx.lineTo(150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, tateElement.value*100+100);
        ctx.lineTo(yokoElement.value*100+150, 100);
    
        // 開始地点に戻って線を閉じる
        ctx.closePath();
        // 塗りつぶしを実行
        ctx.stroke();
        //点の名前
        ctx.font = "32px serif";
        ctx.fillText("A",120,tateElement.value*100+110)
        ctx.fillText("B",120,110)
        ctx.fillText("C",yokoElement.value*100+160,110)
        ctx.fillText("D",yokoElement.value*100+160,tateElement.value*100+110)
        ctx.fillText("P",x+40,y2+8);
       }
    };

    function start() {
        y1 = tateElement.value*100+100;
        draw(); 
    }

    function reset() {
        x = 150;
        y1 = tateElement.value*100+100;
        y2 = 100;
        draw();
    }
  };

   
  document.addEventListener("DOMContentLoaded", main);
