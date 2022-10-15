//Allows to modify the dynamically menu
//
const menuMobile = document.getElementById("menu-mobile-icon");
const menuAppear = document.querySelector(".appear-when-click-menu");


menuMobile.addEventListener("click",(event)=>{
    //Hide the menu
    if(menuAppear.classList.contains("hide-menu-drop")){
       menuAppear.classList.remove("hide-menu-drop")
    }
    else{
        //makes the menu appear
        menuAppear.classList.add("hide-menu-drop")
    }
})