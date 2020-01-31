/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  const suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
  const cardNumber = [
    "A",
    "1",
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
    "K",
    "Q"
  ];

  const suitElementNum = Math.floor(Math.random() * suit.length);
  const cardNumberElementNum = Math.floor(Math.random() * cardNumber.length);
  const suitElement = suit[suitElementNum];
  const cardNumberElement = cardNumber[cardNumberElementNum];

  this.document.getElementById("cardContent").innerHTML = cardNumberElement;
  this.document.getElementById("theCard").add = suitElement;
};

function getSuitClass(suit) {
  switch (suit) {
    case "Diamonds":
      return "suit-diamonds";
    case "Spades":
      return "suit-spades";
    case "Hearts":
      return "suit-hearts";
    case "Clubs":
      return "suit-clubs";
  }
}
