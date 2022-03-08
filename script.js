const values = [8.00,12.00,16.00,24.00,36.00];

let input = document.getElementById('myRange');
  let output = document.getElementById('output');
input.oninput = function(){
    output.innerHTML = values[this.value];
};
input.oninput();