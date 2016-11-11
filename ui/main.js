console.log('Loaded!');

var im=document.getElementById('s2');
var pr=document.getElementById('s1');
var imad=document.getElementById('s4');
var di=document.getElementById('m');
var bar=document.getElementById('s5');
var vid=document.getElementById('s3');
im.onclick=function(){
bar.style.top="237px";
     di.innerHTML="<div style=width:750px;height:400px;overflow:scroll;><img src=rsz_hm.jpg></img><br><img src=rsz_bd.jpg></img><br><img src=rsz_bd1.jpg></img></div>";
    di.style.border="thick solid aqua";

    di.style.backgroundColor="AliceBlue";
};
vid.onclick=function(){
bar.style.top="278px";
     di.innerHTML="<div style=width:225px;height:150px;position:absolute;top:20px;left:265px;><iframe width=225px height=150px src='https://www.youtube.com/embed/zmEG-5zEmPw'/iframe></div>";
    di.style.border="thick solid aqua";

    di.style.backgroundColor="AliceBlue";
};

pr.onclick=function(){
    di.innerHTML="<div style="+"position:absolute;border-radius:5px;top:10px;right:10px;background-image:url(/img.jpg);height:250px;width:188px;></div><div style=position:absolute;color:black;text-align:left;top:10px;left:10px;height:300px;width:500px;>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monu Kumar<br>DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24/05/1997<br>Hometown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amroha<br>Current City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ghaziabad<br>Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java, C, SQL,Android Basics etc.<br>Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8077601517<br>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kumarmonu0522@gmail.com<br>Current Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student B.Tech(IT) at ABES <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Engineering College<br><br><b><u>View more on:</u></b></div><a href=https://www.linkedin.com/profile/view?id=AAIAACAjD48BYNf6VPfdzOjuhXopgIC1XwQfQz0&trk=nav_responsive_tab_profile><div style=position:absolute;top:270px;left:10px;height:50px;width:50px;background:url(/linkedin.png);></div></a><a href=https://www.facebook.com/monu.kumar.33886305><div style=position:absolute;top:270px;left:70px;height:50px;width:50px;background:url(/facebook.png);></div></a>";
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






