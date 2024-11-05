
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  
// for (let i=0; i<menuLinks.length; i++){
//     const a = document.createElement("a")
//     a.setAttribute("href", menuLinks[i].href)
//     a.textContent = menuLinks[i].text
//    topMenuEl.append(a)
// }
// the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML= "<h1>Dom Manipulation</h1>";
mainEl.classList.add("flex-ctr");


const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor="var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement("a")//this is how to create a element
    a.setAttribute("href",menuLinks[i].href)//for each a element, set an attribute of href and it is equal to href value of menuLinks
    a.textContent=menuLinks[i].text //for each menuLink object, taking the text key value and setting to text content of the a tag
    topMenuEl.append(a)
  }//adding the tag to the top menu element, adds to parent's child list