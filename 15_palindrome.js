// 15_palindrome.js
var a;
var c = "";
var d;
defaultBool = false;

function Palindrome(str) {
    a = str.split("");
    d = a.reverse();
    // code goes here
    for (var i = 0; i < d.length; i++) {
        c = c + d[i];
       
    }
    if (c.toLowerCase() === str.toLowerCase()) {
        defaultBool = true;
        
    }
    
   
    return defaultBool;

}