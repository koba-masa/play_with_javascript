var single_var = "single_var_default";
// const multiple_const = "multiple_const_single.js"

function updateAtSingle(single_value, multiple_value) {
  let local_var = "updateAtSingle";
  single_var = `single_${single_value}`;
  multiple_var = `single_${multiple_value}`;
  displaySingle(local_var);
}

function updateAtSingle2(single_value, multiple_value) {
  let local_var = "updateAtSingle2";
  single_var = `single2_${single_value}`;
  multiple_var = `single2_${multiple_value}`;
  displaySingle(local_var);
}

function displaySingle(local_val) {
  let tableElement = document.querySelector("table#namespace tbody");
  let line = `<tr><td>single</td><td>${multiple_var}</td><td>${single_var}</td><td>${local_val}</td><td>${multiple_const}</td></tr>`;
  tableElement.insertAdjacentHTML("beforeend", line);
}
