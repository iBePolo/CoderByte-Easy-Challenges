// 14_ex_oh
var xCount = 0;
var oCount = 0;
var xo = "xxxxoxoxoxo";
var truthy;

function ExOh(str) {

    // code goes here  
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "x") {
            xCount++;
        } else {
            oCount++;
        
        } if (xCount === oCount) {
        truthy = "true"
        } else {
        truthy = "false"
        
        }
    }

    return truthy;

}