'use strict'

updateElement('tr#global_context td.strict', this);
console.log('Global Context: ' + this);

function functionStrict() {
  console.log('functionStrict: ' + this);
  updateElement('tr#function td.strict', this);
}

