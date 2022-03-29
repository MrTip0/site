let time = new Date().getTime();
const analogico = document.getElementById("orologio-analogico");
const digitale = document.getElementById("orologio-digitale");
const selector = document.getElementById("selector")
var ctxanalogico = analogico.getContext("2d");
var radius = analogico.height / 2;

//
//  Update time function and interval
//
    function gettime() {
        fetch("hour.php")
            .then(res => res.text())
            .then(res => {time = parseInt(res) * 1000})
    }

    gettime()
    setInterval(() => {
        gettime()
    }, 10000);
    setInterval(()=> {
        time+=1000
    }, 1000)
//
//  End clock
//

//
//  Switch for the clock
//
    function setVisible() {
        if (selector.checked) {
            analogico.hidden = false
            digitale.hidden = true
        } else {
            analogico.hidden = true
            digitale.hidden = false
        }
    }
    selector.addEventListener('input', setVisible)
    setVisible()
//
//  End switch
//


//
//  Orologio analogico
//
    ctxanalogico.translate(radius, radius);
    radius = radius * 0.90

    function drawClock() {
        drawFace(ctxanalogico, radius);
        drawNumbers(ctxanalogico, radius);
        drawTime(ctxanalogico, radius);
    }

    function drawFace(ctx, radius) {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2*Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = radius*0.1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();
    }

    function drawNumbers(ctx, radius) {
        var ang;
        var num;
        ctx.font = radius*0.15 + "px arial";
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        for (num = 1; num < 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius*0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
        }
    }

    function drawTime(ctx, radius){
        var now = new Date(time);
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour=hour%12;
        hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60));
        drawHand(ctx, hour, radius*0.5, radius*0.07);
        //minute
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        drawHand(ctx, minute, radius*0.8, radius*0.07);
        // second
        second=(second*Math.PI/30);
        drawHand(ctx, second, radius*0.9, radius*0.02);
    }

    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
    drawClock()
    setInterval(drawClock, 1000);
//
//  End orologio analogico
//

//
//  Orologio Digitale
//

    function drawDigital() {
        let now = new Date(time)
        digitale.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    }
    setInterval(drawDigital, 1000)
    drawDigital()
//
//  End Orologio Digitale
//