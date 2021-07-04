// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const menuContainer = document.querySelector(".header-container");


function Header() {
    const menuHeader = document.createElement("div")
    const menuDate = document.createElement("span")
    const menuTitle = document.createElement("h1")
    const menuTemp = document.createElement("span")

    menuHeader.appendChild(menuDate);
    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(menuTemp);

    menuDate.textContent = 'SMARCH 28, 2019';
    menuTitle.textContent = 'Lambda Times';
    menuTemp.textContent = '98°';

    menuHeader.classList.add('header');
    menuDate.classList.add('date');
    menuTemp.classList.add('temp');

    return menuHeader;
}

const menuDisplay = Header();
menuContainer.appendChild(menuDisplay);