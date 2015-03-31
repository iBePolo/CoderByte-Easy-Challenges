// 11_ab_check
function ABCheck(str) { 

  var b;
    b = str.replace(/ /g, '');

    var answer = "false";

    // alert(b);

    for (var i = 0; i < str.length; i++) {

        // if (str.charAt(i) === "a" && str.charAt(i + 2) === "b") {
        if (b.charAt(i) === "a" && b.charAt(i + 3) === "b") {
            answer = "true";
            // alert(answer);

        }
        // alert("answer---> " + answer);
    } 
  return answer; 
         
}