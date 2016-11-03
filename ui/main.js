console.log('Loaded!');

var im=document.getElementById('s2');
var pr=document.getElementById('s1');
var imad=document.getElementById('s4');
var di=document.getElementById('m');
var bar=document.getElementById('s5');
var vid=document.getElementById('s3');
im.onclick=function(){
bar.style.top="237px";
     di.innerHTML="";
    di.style.border="thick solid blue";

    di.style.backgroundColor="AliceBlue";
};
vid.onclick=function(){
bar.style.top="278px";
     di.innerHTML="";
    di.style.border="thick solid blue";

    di.style.backgroundColor="AliceBlue";
};

pr.onclick=function(){
    di.innerHTML="<div style="+"position:absolute;top:20px;right:10px;background:url(/IMG_20160419_163015.jpg);height:100px;width:100p;x></div>";
    di.style.border="thick solid blue";
    bar.style.top="190px";

    di.style.backgroundColor="AliceBlue";
};
imad.onclick=function(){
    bar.style.top="137px";
    di.style.border="";
  di.innerHTML="<iframe width=750px height=400px src='https://www.youtube.com/embed/YC__12iAJGc'></iframe>" ;
};
var margin=100;
    
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
    if(request.readyState===XMLHttpRequest.DONE){
        if(request.status===200){

            var names=request.responseText;
            names=JSON.parse(names);
            var list="";
            for(var i=0;i<name.length;i++){
                list+="<li>"+names[i]+"</li>";
            }
            var ul=document.getElementById("namelist");
            ul.innerHTML=list;
            
        }
    }
};

            request.open("GET","http://monukumar0.imad.hasura-app.io/submit-name?name="+name,true);
request.send(null);






