const pianoKeys = document.querySelectorAll(".teclas-piano .t");
const slideVolumen = document.querySelector(".slider-volumen input");
const showTeclado = document.querySelector(".show-teclado input");

let allKey = [],
  audio = new Audio("tunes/a.wav");

// Funcion que usa un audio segun la tecla que se toque.
const playTune = (t) => {
  audio.src = `tunes/${t}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${t}"]`);
  // Agregamos una clase al elemento cuando se hace click.
  clickedKey.classList.add("active");
  // Quitamosla clase activa despues de 150ms del click.
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((t) => {
  allKey.push(t.dataset.key);
  t.addEventListener("click", () => playTune(t.dataset.key));
});

// Convierte el input type="range" en un volumen123123.
const handleVolumen = (e) => {
  audio.volume = e.target.value;
};

const showHideteclado = () => {
  pianoKeys.forEach((t) => t.classList.toggle("hide"));
};

const pressedKey = (e) => {
  if (allKey.includes(e.key)) playTune(e.key);
};

showTeclado.addEventListener("click", showHideteclado);
slideVolumen.addEventListener("input", handleVolumen);
document.addEventListener("keydown", pressedKey);