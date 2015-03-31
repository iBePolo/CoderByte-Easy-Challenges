// 01_first_reverse
function FirstReverse(str) {

    var b = "";

    for (var i = str.length; i >= 0; i--) {
        b = b + str.charAt(i);
    };
    return b;

}