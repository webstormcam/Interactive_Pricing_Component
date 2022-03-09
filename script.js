let values = [8,12,16,24,36];
const button = document.getElementById('button')

let input = document.getElementById('myRange');
  let output = document.getElementById('output');
input.oninput = function(){
    output.innerHTML = values[this.value].toFixed(2);
};
input.oninput();

button.addEventListener('click',function(){
  values = [8,12,16,24,36]
  if(button.checked=== true){
 for(let i=0;i<values.length;i++){
  values[i]*=12
  let sub = values[i]*0.25
   values[i] = values[i]-sub
   
 }
} else if(button.checked ===false){
 
}
  input.oninput();
})
