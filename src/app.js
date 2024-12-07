/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palos = [
    { palo: "♠︎", color: "black" },
    { palo: "♣︎", color: "black" },
    { palo: "♥︎", color: "red" },
    { palo: "♦︎", color: "red" }
  ];

  let random1 = Math.floor(Math.random() * number.length);
  let random2 = Math.floor(Math.random() * palos.length);

  document.getElementById("carta").innerHTML = number[random1];

  document.getElementById("icono").innerHTML = palos[random2].palo;
  document.getElementById("icono2").innerHTML = palos[random2].palo;

  document.getElementById("icono").style.color = palos[random2].color;
  document.getElementById("icono2").style.color = palos[random2].color;
  document.getElementById("carta").style.color = palos[random2].color;
};
