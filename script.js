// BOBU Website Script

console.log("👾 BOBU Loaded");


// Button hover effect

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
        "0 0 25px #00ffff";

    });


    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});



// Reveal animation on scroll

const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});


},
{
threshold:0.2
}
);



cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=
"all 0.8s ease";

observer.observe(card);

});



// BOBU secret click

const character =
document.querySelector(".character img");


let clicks=0;


if(character){

character.addEventListener("click",()=>{

clicks++;


if(clicks===5){

alert(
"👾 Secret BOBU unlocked! 🌈"
);

clicks=0;

}


});

}
