let values = [8,12,16,24,36];
const button = document.getElementById('button')
let view = document.getElementById('views')
let viewsArray =['10k Pageviews','50k Pageviews','100k Pageviews','500k Pageviews','1M Pageviews']
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
 subDate.innerHTML='/Year'
} else if(button.checked ===false){
  subDate.innerHTML='/Month'
}
  input.oninput();
})
