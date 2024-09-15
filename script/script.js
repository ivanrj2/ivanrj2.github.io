let hamburgerOn = false;
hamburger.addEventListener('click', dropdownClickHandler);

const heroSectionContents = [
    {
        title1: "Lessons and insights",
        title2: "from 8 years",
        text: "Where to grow your business as a photographer: site or social media?",
        btnText: "Register",
        btnLink: "/",
        image: "assets/person.svg",
        imageWidth: "80%"
    },
    {
        title1: "Hello world!",
        title2: "69,420++",
        text: "Join 69,420 students who completed our coding course and thrive in their careers.",
        btnText: "Register",
        btnLink: "/",
        image: "assets/person.svg",
        imageWidth: "80%"
    },
    {
        title1: "",
        title2: "Rock Solid Jobs",
        text: "40% of our students now work at FAANG companies after completing our course.",
        btnText: "Register",
        btnLink: "/",
        image: "assets/person.svg",
        imageWidth: "80%"
    }
];

heroNavBubbles.forEach(button => {
    button.addEventListener("click", () => {
        bubbleclickEvent(button.id, heroSectionContents);
    });
});

heroContent.addEventListener("animationend", ()=>{
    if(heroContent.classList.contains("fade-in-right")){
        heroContent.classList.remove("fade-in-right");
    }
});