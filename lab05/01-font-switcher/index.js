h1Size = 1.1;
pSize = 1.1;

const makeBigger = () => {
   h1Size += 0.2;
   document.querySelector("h1").style.fontSize = `${h1Size}em`
   pSize += 0.2;
   document.querySelector("p").style.fontSize = `${pSize}em`
};

const makeSmaller = () => {
   h1Size -= 0.2;
   document.querySelector("h1").style.fontSize = `${h1Size}em`
   pSize -= 0.2;
   document.querySelector("p").style.fontSize = `${pSize}em`
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
