import {
  formatDate,
  getCSSVariable,
  getAllCSSVariableNames,
  getRandomIndex,
} from "./utils.js";
import { getUIElements } from "./element-retrival.js";
import {
  applyBackgroundColor,
  updateImageWithDogImage,
} from "./dom-manipulation.js";
import { getAllTodos } from "./data-retrival.js";

const colorPallete = getAllCSSVariableNames().filter((varName) =>
  getCSSVariable(varName).startsWith("#")
);

const uiElements = getUIElements();

const changeMeButton = uiElements.clickMeButton;

updateImageWithDogImage(uiElements.dogoImagaTag, {
  altText: "Cute dog!",
  style: {
    width: "400px",
    height: "auto",
    border: `2px solid ${getCSSVariable("--nav-or-card-border")}`,
  },
});

changeMeButton.addEventListener("click", () => {
  applyBackgroundColor(
    changeMeButton,
    colorPallete[getRandomIndex(colorPallete)]
  );
  updateImageWithDogImage(uiElements.dogoImagaTag, {
    altText: "Cute dog!",
    style: {
      width: "400px",
      height: "auto",
      border: `2px solid ${getCSSVariable("--nav-or-card-border")}`,
    },
  });
});

console.log("hello ZenTasks ", formatDate(new Date(), "monthname"));
console.log("Primary color hex is:", getCSSVariable("--primary-color"));

console.log("all todos from server: ", await getAllTodos());

// this approach can be used to define event handlers functions in other places or files
/*
    Important note:
    When you use .bind(), it fixes the arguments at the time that the event handler is defined.
    colorPallete[getRandomIndex(colorPallete)] is evaluated once during binding, so every click uses the same value.
*/
// changeMeButton.addEventListener(
//   "click",
//   applyBackgroundColor.bind(null, changeMeButton, colorPallete[getRandomIndex(colorPallete)])
// );
