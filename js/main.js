//#region Declaration
const menuIcon = document.querySelector(".menu img");
const closeIcon = document.querySelector(".close img");
const sideMenu = document.querySelector(".links-content");
const subMenus = document.querySelectorAll(".sub");
const overlay = document.querySelector(".overlay");
let subMenu;
//#endregion

//#region Functions
// function to oepn side menuIcon
function toggleSideMenu() {
    menuIcon.addEventListener("click", (e) => {
        sideMenu.classList.add("open");
        overlay.classList.add("show");
    });
}
// function to open subMenus
function toggleSubMenus() {
    subMenus.forEach((menu) => {
        menu.addEventListener("click", (e) => {
            subMenu = menu.nextElementSibling;
            subMenu.classList.toggle("expand");
            let arrow = menu.childNodes[3];
            subMenu.classList.contains("expand")
                ? arrow.src = "/images/icon-arrow-down.svg"
                : arrow.src = "/images/icon-arrow-up.svg";
        });
    })
}
// function to close menus
function closeMenus() {
    document.addEventListener("click", (e) => {
        if (e.target === closeIcon || e.target === overlay) {
            sideMenu.classList.remove("open");
            overlay.classList.remove("show");
        }
    });
}
//#endregion

//#region  Calling
toggleSideMenu();
toggleSubMenus();
closeMenus();
//#endregion