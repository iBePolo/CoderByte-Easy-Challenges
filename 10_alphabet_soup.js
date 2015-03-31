// 10_alphabet_soup
function AlphabetSoup(str) { 

  // code goes here
  
  var arr1 = [];
  
  for (var i = 0; i < str.length; i++) {
   arr1.push(str.charAt(i));
}
  
  
  var b = arr1.sort();
  var catcher = "";
  for (var j = 0; j < arr1.length; j++) {
   if (arr1[j] !== " ") {

catcher = catcher + arr1[j];

}


}
  return catcher; 
         
}