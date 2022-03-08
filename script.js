var values = [8.00,12.00,16.00,24.00,36.00];

var input = document.getElementById('myRange'),
   output = document.getElementById('output');
input.oninput = function(){
    output.innerHTML = values[this.value];
};
input.oninput();