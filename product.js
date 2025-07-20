// Selecting side nav bar, Menu icon

var sidenav = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener(("click"),function(){
    sidenav.style.right = 0;
})

closenav.addEventListener("click",function(){
    sidenav.style.right = "-50%";
})

// Search results showing

var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")
var divlist = productcontainer.querySelectorAll("div");

console.log(divlist)
search.addEventListener("keyup",function(){
   var val = event.target.value.toUpperCase();

   for(i=0;i<divlist.length; i++){

    var productname = divlist[i].querySelector("p").textContent;

    if(productname.toUpperCase().indexOf(val)<0){
        divlist[i].style.display = "none"
    }else{
 divlist[i].style.display = "block"
    }
   }
})