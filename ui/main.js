console.log('Loaded!');
var k=document.getElementById("main");
k.innerHTML="Hi,This is Monu Kumar";
var img=document.getElementById('im');
var margin=100;
function  move(){
    img.style.marginLeft=margin+"px";
    margin=margin+10;
}
img.onclick=function (){
var interval=setInterval(move,50);

    
};
var counter=0;
var button=document.getElementById("b");
b.onclick=function(){
    counter=counter+1;
    var s=document.getElementById("s");
    s.innerHTML=counter.toString();
};

