// 04_letter_changes
function LetterChanges(str) { 

  var lower = str.toLowerCase();
var alph = "abcdefghijklmnopqrstuvwxyz";
var newStr = "";

var vowels = ["a", "e", "i", "o", "u"];
var l = 0;


for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < alph.length; j++) {

        if (lower.charAt(i) === alph.charAt(j)) {
            newStr = newStr + alph.charAt(j + 1);
            // alert(newStr);

            newStr = newStr.replace(/a/g, "A");
            newStr = newStr.replace(/e/g, "E");
            newStr = newStr.replace(/i/g, "I");
            newStr = newStr.replace(/o/g, "O");
            newStr = newStr.replace(/u/g, "U");
        }
    }
}

  return newStr; 
         
}