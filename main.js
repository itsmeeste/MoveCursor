var size;
function Setup()
{

    var text = document.getElementById("home");
    text.innerHTML = document.getElementById("tbox").value;

}

function HideEnter()
{
    console.log("sdfsdf");
    document.getElementById("home").style.display = "none";
}
function HideExit()
{

    document.getElementById("home").style.display = "block";
}

function followMouse(event)
{
    //console.log("ss");
    var text = document.getElementById("home");

    var x = event.clientX;
    var y = event.clientY;
    text.style.left = x;
    text.style.top = y;
    var r = y;
    var g = y;
    var b = x;
    if(r > 230)
        r = Math.random() * 255;
    if(g > 230)
        g = Math.random() * 255;
    if(b > 230)
        b = Math.random() * 255;
    
    
    var s = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("home").style.backgroundColor = s;
    document.getElementById("para").innerText = "sfsdfsd";
    //console.log("X: " +x + ", Y: " + y);
}

function ChangeText()
{
    var text = document.getElementById("home");
    text.innerHTML = document.getElementById("tbox").value;
}
addEventListener("keydown",function(e)
{
    if(e.keyCode == 65)
    {
        var text = document.getElementById("home");
        var style = window.getComputedStyle(text, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        text.style.fontSize =  (fontSize + 1) + 'px';

    }
    if(e.keyCode == 68)
    {
        var text = document.getElementById("home");
        var style = window.getComputedStyle(text, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        text.style.fontSize =  (fontSize - 1) + 'px';

    }
    if(e.keyCode == 87)
    {
            var r = Math.random() * 255;
            var g = Math.random() * 255;
            var b = Math.random() * 255;
            var s = "rgb(" + r + "," + g + "," + b + ")";
            document.getElementById("home").style.color = s;
    }
},false);
