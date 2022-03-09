const values = [8,12,16,24,36];
const button = document.getElementById('button')

let input = document.getElementById('myRange');
  let output = document.getElementById('output');
input.oninput = function(){
    output.innerHTML = values[this.value];
};
input.oninput();

button.addEventListener('click',function(){
 for(let i=0;i<values.length;i++){
  values[i]*=12
  let sub = values[i]*0.25
   values[i] = values[i]-sub
   
 }
  input.oninput();
})
