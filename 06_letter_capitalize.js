// 06_letter_capitalize
function LetterCapitalize(str) { 

  

var b = "";

var arrHolder = str.split(" ");

for (var i = 0; i < arrHolder.length; i++) {
    // alert(arrHolder[i].charAt(0).toUpperCase());
    
    arrHolder[i] = arrHolder[i].replace(arrHolder[i].charAt(0), arrHolder[i].charAt(0).toUpperCase());
    
    // alert(arrHolder);
    
    b = b + " " + arrHolder[i];
    // alert(b);
    


}
 
  return b; 
         
}