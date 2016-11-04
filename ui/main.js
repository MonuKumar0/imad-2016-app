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
    di.style.border="thick solid aqua";

    di.style.backgroundColor="AliceBlue";
};
vid.onclick=function(){
bar.style.top="278px";
     di.innerHTML="";
    di.style.border="thick solid aqua";

    di.style.backgroundColor="AliceBlue";
};

pr.onclick=function(){
    di.innerHTML="<div style="+"position:absolute;border-radius:5px;top:10px;right:10px;background-image:url(/img.jpg);height:250px;width:188px;></div><div style=position:absolute;color:black;text-align:left;top:10px;left:10px;height:300px;width:300px;>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monu Kumar<br>Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19 Yrs<br>Hometown:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amroha<br>Current City:Ghaziabad<br>Skills:Java, C, SQL,Android Basics etc.<br>Contact:8077601517 kumarmonu0522@gmail.com</div>";
    di.style.border="thick solid aqua";
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






