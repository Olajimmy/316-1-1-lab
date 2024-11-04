console.log("hello")




let mainEL = document.querySelector("main");

mainEL.style.backgroundColor = "var(--main-bg)";
mainEL.innerHTML= "<h1>Dom Manipulation</h1>";
mainEL.classList.add("flex-ctr");

let topMenuEL = document.querySelector("#topMenu");
topMenuEL.style.height = "100%";
topMenuEL.style.backgroundColor = "(--top-menu-bg)";