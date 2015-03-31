// 03_longest_word
var splits = [];
var longest = ""
// var a = "Here a whole are propper some words";
function LongestWord(sen) {

    // code goes here  
    splits = sen.split(" ");
    for (var i = 0; i < splits.length; i++) {
        // longest = splits[i]
        if (longest.length < splits[i].length) {
        longest = splits[i];
        } else if (longest.length === splits[i].length) {
        longest = longest;
        
        }


    }


    // alert(longest);
       return longest;

}