import { clickLabelEvent, observerElements } from "./utils.js";

const labels = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("article");
console.log("hello");
labels.forEach(clickLabelEvent);
observerElements(sectionElements);
