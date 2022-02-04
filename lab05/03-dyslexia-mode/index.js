dyslexia = false

const makeDyslexia = () => {
  if (dyslexia) {
    document.querySelector("body").className = "";
    dyslexia = false
  } else {
    document.querySelector("body").className = "dyslexia-mode";
    dyslexia = true
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', makeDyslexia);