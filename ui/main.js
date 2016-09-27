console.log('Loaded!');
var k=document.getElementById("main");
k.innerHTML="Hi,This is Monu Kumar";
var img=document.getElementById("im");
var margin=100;
img.style.marginLeft=margin+"px";
function move(){
    margin=margin+10;
    img.style.marginLeft=margin+"px";
    }
img.onClick=function(){
var interval=setInterval(move,50);
};