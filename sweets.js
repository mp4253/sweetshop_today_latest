function toggleMenu() {
    var menu = document.getElementById("menu_list");

    if (menu) {
        menu.classList.toggle("show");
    } else {
        console.error("Element with ID 'menu_list' not found.");
    }
}
