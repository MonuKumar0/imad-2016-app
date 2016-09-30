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
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.DONE){
        if(request.status===200){
            var names=["name1","name2","name3"];
            var list='';
            for(var i=0;i<name.length;i++){
                list+="<li>"+names[i]+"</li>";
            }
            var ul=document.getElementById("namelist");
            ul.innerHTML=list;
            
        }
    }
}
};



