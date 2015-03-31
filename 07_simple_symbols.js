// 07_simple_symbols
var abc = "abcdefghijklmnopqrstuvwxyz";
// var splitter;

var a = "+o+i+j+";
var answer = true;
// var anyOk;
// var notOk;


function SimpleSymbols(str) {
    // splitter = str.split();
    // code goes here  
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < abc.length; j++) {
            if (str.charAt(i) === abc.charAt(j) && str.charAt(i - 1) !== "+" || str.charAt(i) === abc.charAt(j) && str.charAt(i + 1) !== "+") {
                anyOk = true;
                /*
                 alert(str.charAt(i - 1) + str.charAt(i) + str.charAt(i + 1));
                 */


                // alert("anyOk---> " + anyOk);
                answer = false;
            }
        }

    }
    return answer;

}