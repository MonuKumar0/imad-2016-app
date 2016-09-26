console.log('Loaded!');
var k=document.getElementById("main");
k.innerHTML="Hi,This is Monu Kumar";
var img=document.getElementById("img");
var margin=0;
function move(){
    
    img.style.marginLeft=margin+"px";
    margin=margin+10;
}
img.onClick=function(){
var interval=setInterval(move,50);
}