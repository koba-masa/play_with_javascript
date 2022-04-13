function updateElement(cssSelector, newValue) {
  let targetElement = document.querySelector(cssSelector);
  targetElement.textContent = newValue;
}