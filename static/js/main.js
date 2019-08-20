window.onload = function() {



    var slideMenu = document.querySelector('.offcanvas-slide-menu');
    var overlay = document.querySelector('.offcanvas-overlay');
    var openButton = document.querySelector('.target-burger');

	/*var placeholder = document.querySelectorAll('.rjrv-placeholder');
    placeholder.forEach(function(element){
        var small = element.querySelector('.img-small');

        // 1: load small image and show it
        var img = new Image();
        img.src = small.src;
        img.onload = function () {
         small.classList.add('loaded');
        };

        // 2: load large image
        var imgLarge = new Image();
        imgLarge.src = element.dataset.large;
        imgLarge.onload = function () {
          imgLarge.classList.add('loaded');
        };

        element.appendChild(imgLarge);

    });*/

    // Mobile Menu
    document.onclick = function(e){
        if(e.target.id == 'backgroundOverlay'){
            toggleMobileMenu();
        }
    };


    // Mobile Menu Accordion
    var acc = document.getElementsByClassName("mobile-parent-sub-menu");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

}

/*document.querySelector('#mobileTriggerOpen').onclick = function () {
	toggleMobileMenu();
};
document.querySelector('#mobileTriggerClose').onclick = function () {
	toggleMobileMenu();
};

document.querySelector('#mobileTriggerOpen').addEventListener('click', function () {
	toggleMobileMenu();
});*/

function toggleMobileMenu(){
    var btn = document.querySelectorAll('.target-burger');
    var menu = document.querySelector('.offcanvas-slide-menu');
    var offCanvas = document.querySelector('.offcanvas-overlay');

    btn.forEach(function(element){
        element.classList.toggle('toggled');
    });
    
    offCanvas.classList.toggle('offcanvas-active');
    menu.classList.toggle('active');
}


var scrollpos = window.scrollY;
var header = document.getElementsByClassName("rjrv-l-header")[0];


function add_class_on_scroll() {
    header.classList.add("bg-large-white");
}

function remove_class_on_scroll() {
    header.classList.remove("bg-large-white");
}

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 90){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});



