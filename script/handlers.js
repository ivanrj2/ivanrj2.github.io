const dropdownClickHandler = () => {
    hamburgerOn = !hamburgerOn;
    if (hamburgerOn){
        hamburger.src = "assets/cross.svg";
        dropdownMenu.style.display = "grid";
        dropdownMenu.classList.add("fade-in");
        document.body.style.overflow = "hidden";
    }else{
        hamburger.src = "assets/hamburger.svg";
        dropdownMenu.style.display = "none";
        dropdownMenu.classList.remove("fade-in");
        document.body.style.overflow = "visible";
    }
};

const bubbleclickEvent = (id, data) => {
    heroNavBubbles[id].classList.add("active-hero-nav-bubble");
    for (let i = 0; i < heroNavBubbles.length; i++) {
        if(i == id){
            continue;
        }
        if(heroNavBubbles[i].classList.contains("active-hero-nav-bubble")){
            heroNavBubbles[i].classList.remove("active-hero-nav-bubble");
        }
    }

    heroTitleText1.innerText = data[id].title1;
    heroTitleText2.innerText = data[id].title2;
    heroText.innerText = data[id].text;
    heroBtn.innerText = data[id].btnText;
    heroBtn.href = data[id].btnLink;
    heroImage.src = data[id].image;
    heroImage.style.width = data[id].imageWidth;
    heroContent.classList.add("fade-in-right");
};