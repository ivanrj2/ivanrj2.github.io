const dropdownClickHandler = () => {
    hamburgerOn = !hamburgerOn;
    if (hamburgerOn){
        hamburger.src = "assets/cross.svg";
        dropdownMenu.style.display = "grid";
        dropdownMenu.classList.add("fade-in")
    }else{
        hamburger.src = "assets/hamburger.svg";
        dropdownMenu.style.display = "none";
        dropdownMenu.classList.remove("fade-in")
    }
};