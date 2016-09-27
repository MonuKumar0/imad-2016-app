console.log('Loaded!');
var k=document.getElementById("main");
k.innerHTML="Hi,This is Monu Kumar";
var img=document.getElementById('im');
var margin=100;
function  move(){
    img.style.marginLeft=margin+"px";
}
img.onclick=function (){
var interval=setInterval(move,50);


};