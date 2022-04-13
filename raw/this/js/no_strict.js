updateElement('tr#global_context td.no_strict', this);
console.log('Global Context: ' + this);

function functionNoStrict() {
  updateElement('tr#function td.no_strict', this);
}
