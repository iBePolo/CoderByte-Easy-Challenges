// 23_dash_insert.js
function DashInsert(str) { 

  var newStr = ""

var b = parseInt(str);
var c = "";
for (var i = 0; i < str.length; i++) {
    newStr = newStr + str[i];

    if ((parseInt(str[i]) % 2) !== 0 && ((parseInt(str[i + 1]) % 2)) !== 0) {
        newStr = newStr + "-";

    }
}

if (newStr.charAt(newStr.length - 1) == "-") {

    newStr = newStr.slice(0, (newStr.length - 1));
    
} 
  return newStr; 
         
}