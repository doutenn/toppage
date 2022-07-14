const main = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
  
    const yzou = document.getElementById("yzou");
    const xzou = document.getElementById("xzou");
    const sextupen = document.getElementById("sextupen");
    const heniki1 = document.getElementById("heniki1");
    const heniki2 = document.getElementById("heniki2");
  
    var hyoujiButton;
        // スタートボタンが押されたかを判定
        hyoujiButton = document.getElementById('hyouji');
        //スタートボタンが押された時の処理
        hyoujiButton.onclick = function() {
            hyouji();
        };
  
    function hyouji() {
        ctx.clearRect(0, 0, 2000, 3000);
        ctx.beginPath();

        for(var i=0; i<400; i+=20){
            ctx.lineWidth = 1;
            ctx.fillStyle = "rgb(192, 192, 192)";  
            ctx.moveTo(0, i);
            ctx.lineTo(400, i);
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 400);
        }
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 3;
        //x軸
        ctx.moveTo(0, 200);
        ctx.lineTo(400, 200);
        //y軸
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 400);
        //原点指定
        ctx.moveTo(200,-sextupen.value * 20 + 200);
        ctx.lineTo(heniki2.value*20+200,-(yzou.value / xzou.value) * -(200-(heniki2.value*20+200)) + (-sextupen.value * 20 + 200));
        ctx.moveTo(200,-sextupen.value * 20 + 200);
        ctx.lineTo(heniki1.value*20+200, (yzou.value / xzou.value) * (200-(heniki1.value*20+200)) + (-sextupen.value * 20 + 200));
        ctx.stroke();
    }; 
  };
  
  document.addEventListener("DOMContentLoaded", main);
