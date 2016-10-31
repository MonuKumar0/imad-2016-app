console.log('Loaded!');
var k=document.getElementById("main");
k.innerHTML="Hi,This is Monu Kumar";
var img=document.getElementById("s2");
var div=getElementById("k");
img.onclick=function()
{
    div.innerHTML="hohohohoho";
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


};



