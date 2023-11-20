function random(){
    let rand = Math.ceil(Math.random()*77)+32;
    if(rand > 83){
      rand+=13;
    }
    else if(rand>57){
      rand+=7;
    }
   let result = String.fromCharCode(rand);
   return result
}

function check(passwrd){
  let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!|"|#|$|%|&|'|)|(|*|+|,|-|.|/]).+$/;
  let validate = regexp.test(passwrd);
  return validate;
}

function start(){
  const result = document.getElementById("Result");
  const length = document.getElementById("length").value;
  result.value = "";
  let password = "";
  
  for(let i=0; i<length; i++){
   password += random();
  }
  
  let valid = check(password);
  if(valid == true){
    result.value = password;
  }
  else{
    start();
  }
}