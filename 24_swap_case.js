// 24_swap_case.js
var newStr = "";

function SwapCase(str) { 

  // code goes here
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) !== str.charAt(i).toUpperCase()) {
        newStr = newStr + str.charAt(i).toUpperCase();
        } else {
        newStr = newStr + str.charAt(i).toLowerCase();
        
        }
    }
    
  // alert(newStr);
  return newStr; 
         
}