var multiple_var = "multiple_var_default";
const multiple_const = "multiple_const_multiple.js"

function updateAtMultiple(single_value, multiple_value) {
  let local_var = "updateAtMultiple";
  multiple_var = `multiple_${multiple_value}`;
  displayMultiple(local_var);
}

function updateAtMultiple2(single_value, multiple_value) {
  let local_var = "updateAtMultiple2";
  multiple_var = `multiple2_${multiple_value}`;
  displayMultiple(local_var);
}

function displayMultiple(local_val) {
  let tableElement = document.querySelector("table#namespace tbody");
  let line = `<tr><td>multiple</td><td>${multiple_var}</td><td>${single_var}</td><td>${local_val}</td><td>${multiple_const}</td></tr>`;
  tableElement.insertAdjacentHTML("beforeend", line);
}
