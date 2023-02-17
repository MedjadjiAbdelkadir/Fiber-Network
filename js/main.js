
let btn_scroll = document.getElementById("btn-scroll");


window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {

        // display button
        btn_scroll.style.display = "block";
    } else {
        //  Hide button 
        btn_scroll.style.display = "none";
    }
};

// Go To Top 
btn_scroll.onclick = function() {
  document.documentElement.scrollTop = 0;
}