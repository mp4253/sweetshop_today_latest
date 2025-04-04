function toggleMenu() {
    var menu = document.getElementById("menu_list");
    var content = document.getElementById("content");
    
    menu.classList.toggle("show");
    
    if (menu.classList.contains("show")) {
        content.classList.add("shifted");
    } 
    
    else {
        
        content.classList.remove("shifted");
    }
}
