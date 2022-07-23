
var first2=document.getElementById("first2");
var second2=document.getElementById("second2");
/**/
var w=first2.offsetWidth-2;

window.onscroll=()=>{
 
  var s=document.documentElement.scrollTop/5;
  console.log(s) ;
    first2.style.width =w+s+"px" ;
    second2.style.width =w+s+"px" ;
   
    first2.style.backgroundColor="rgb( "+(s/2)+", "+(s*1.5)+","+(s/4)+")";
    second2.style.backgroundColor="rgb( "+(s/3*2)+", "+(s/3.5)+","+(s/6+12)+")";
    
}


