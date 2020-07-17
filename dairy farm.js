var icon = document.getElementById("icon")
var menu = document.getElementById("menu")

icon.addEventListener('click', function(){
   if(menu.style.display === 'none'){
       menu.style.display = 'block';
   } else{
       menu.style.display = 'none';
   }
})
setInterval(function(){
    var i = document.getElementById("change").innerHTML
    if(i == "HAHA !"){
        document.getElementById("change").innerHTML = "LICIOUS"
    }else if(i == "LICIOUS"){
        document.getElementById("change").innerHTML = "SOME..."
    }else{
        document.getElementById("change").innerHTML = "HAHA !"
    }
}, 3000)