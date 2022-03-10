let values = [8,12,16,24,36];
const button = document.getElementById('button')
let view = document.getElementById('views')
let viewsArray =['10k PAGEVIEWS','50k PAGEVIEWS','100k PAGEVIEWS','500k PAGEVIEWS','1M PAGEVIEWS']
let subDate = document.getElementById('subdate')

let input = document.getElementById('myRange');
  let output = document.getElementById('output');
input.oninput = function(){
    output.innerHTML = values[this.value].toFixed(2);
    view.innerHTML = viewsArray[this.value]
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
 subDate.innerHTML='/ year'
} else if(button.checked ===false){
  subDate.innerHTML='/ month'
}
  input.oninput();
})
