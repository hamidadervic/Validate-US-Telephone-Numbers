
function telephoneCheck(str) {
  // Good luck!
   var inputNum = str.replace(/\d/g,'x');
  
  var validForms = [
    "xxx-xxx-xxxx",
    "(xxx)xxx-xxxx",
    "(xxx) xxx-xxxx",
    "xxx xxx xxxx",
    "xxxxxxxxxx",
  ];
  
  var countryCode = [
    "x xxx xxx xxxx",
    "x xxx-xxx-xxxx",
    "x (xxx) xxx-xxxx",
    "x(xxx)xxx-xxxx"
  ];
  
  
  var matchedArr = [];
  var countryArr = [];
  
  for(var i = 0; i<validForms.length; i++){
    if(validForms[i] === inputNum){
       matchedArr.push(validForms[i]);
    } 
  }
  
  for(var j = 0; j<countryCode.length; j++){
    if(countryCode[j] === inputNum){
      countryArr.push(countryCode[j]);
    }
  }
  
  if(matchedArr.length === 1){
    return true;
  } 
  else if(countryArr.length === 1 && str[0] == 1){
    return true;
  } else {
    return false;
  }
  
  
  
}



telephoneCheck("1 555-555-5555");
