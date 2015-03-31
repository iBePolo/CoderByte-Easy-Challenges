// 12_vowel_count
function VowelCount(str) { 
  var lower = str.toLowerCase();
var j;
var k = ["a", "e", "i", "o", "u"];
var numVowels = 0;
// code goes here
for (var i = 0; i <= str.length; i++) {
    for (j = 0; j < k.length; j++) {
        if (lower.charAt(i) === k[j]) {
            // j++;
            numVowels++;
            // alert(numVowels);
            // alert("i---> " + i);
            // alert("k---> " + k[i]);
        }
    }

}
  return numVowels; 
         
}