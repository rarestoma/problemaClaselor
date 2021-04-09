var array = [100, 280, 301, 780, 510, 505, 605, 720, 300, 230, 210, 275];
var start = 100;
var end = 999;
var length = array.length;
var output = [];
var max = 0;
var ok = 0;

function problemaClaselor(){
  while(start < end){
    for(let i=0; i<length; i++){
      if(array[i]>=start && array[i]<start+100){
        if(array[i] > max){
          ok = 1;
          max = array[i];
        }
      }
    }
    if(ok == 1){
      output.push(max);
    }
    start = start + 100;
    ok = 0;
  }

  document.querySelector("#output").innerHTML = "[" + output + "]";
}

document.querySelector('#input').innerHTML = "[" + array + "]";
