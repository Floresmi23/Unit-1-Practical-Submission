var containerEle=document.body.querySelector(".container");
var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];







for(var i=0; i<stringers.length; i++){
  var ele = document.createElement("div");
  
  
  ele.innerHTML=stringers[i];
  
  
  if(stringers[i]===3){
    ele.innerHTML= "The value is " + stringers[i] + " and is below 10."
    document.getElementsByClassName('container').onclick = function(){myFunction()};
    
  }else if(stringers[i]==="Jerry"){
    ele.innerHTML= "The value is " + stringers[i] + " and it is normal."
   
  }else if(stringers[i]==="Sandy"){
    
    ele.innerHTML= "The value is " + stringers[i] + " and it is normal."
  }else if(stringers[i]===4){
    ele.innerHTML= "The value is " + stringers[i] + " and is below 10."
  }else if(stringers[i]==="Pepper"){
    ele.innerHTML= "The value is " + stringers[i] + " and the string's character length is more than 5."
  }else if(stringers[i]===15){
    ele.innerHTML= "The value is " + stringers[i] + " and the number is exactly 15."
  }else if(stringers[i]==="Jocastah"){
    ele.innerHTML= "The value is " + stringers[i] + " and the string's character length is more than 5."
  }else if(stringers[i]===12){
    ele.innerHTML= "The value is " + stringers[i] + " and it is normal."
  };
  
  function changeColor() {
    
     document.body.style.color = "red";
     return false;
    }   
  
  containerEle.appendChild(ele);
};