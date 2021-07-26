


/* Show top bar */
document.getElementById("nav-bttn").addEventListener("click", function() {
    var drop = document.getElementById("drop-down");
    if (drop.classList.contains("show")){
        drop.classList.remove("show");
    }
    else {
    document.getElementById("drop-down").classList.toggle("show");
    
}
})


/*
window.onclick = function(event) {
    if (!event.target.matches("nav-button")) {       
        var drop = document.getElementById("drop-down");
        if (drop.classList.contains("show")) {
            drop.classList.remove("show");
        }
    }
}
*/