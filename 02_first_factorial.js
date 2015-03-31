 // 02_first_factorial
function FirstFactorial(num) { 

  // code goes here
   var b = num;

for (var i = num; i >= 2; i--){
	var b = b * (i - 1);
}
  return b; 
         
}