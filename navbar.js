document.querySelector("#downMenu").addEventListener("click", function(){
var showSite = document.getElementById("menu");
if(showSite.style.display == "none"){
    showSite.style.display = "flex";
    document.getElementById("down").style.transform = 'rotate(180deg)';
} else{
    showSite.style.display = "none";
    document.getElementById("down").style.transform = 'rotate(360deg)';
}
});


document.getElementById


