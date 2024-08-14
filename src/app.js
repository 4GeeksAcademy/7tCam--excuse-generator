/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const $EXCUSA = document.getElementById("excuse");
  // funcion generar excusas
  function excuseGenerator() {
    // almacenar las excusas en un arreglo
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    // indices randoms
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
    // let pintar = document.getElementById("excuse");
    // pintar.textContent = excuseGenerator();
    // retorna la iterpolacion de indices
    // alamecena pero no lo muestra en doc html
    // return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  }
  $EXCUSA.textContent = excuseGenerator();
  // excuseGenerator();

  // llamar a la funcion
  // excuseGenerator(); no es necesario porque se llamara con un boton
  // selecionar al nodo elemento
  // const elemento = document.querySelector("#excuse");
  // acceder al contenido y darle como valor la funcion que nos retorna las excusas aleatorias
  // elemento.textContent = excuseGenerator();

  // accediendo al boton
  let boton = document.getElementById("btn");
  // agregando evento
  // todo lo que queremos ejectuart en el boton debee ir dentro del mismo

  boton.addEventListener("click", () => {
    $EXCUSA.textContent = excuseGenerator();
  });
};
