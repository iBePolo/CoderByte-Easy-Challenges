// 09_time_convert
var a;
var b;
var c;
var d;
var e;

function TimeConvert(num) { 

  // code goes here  
    a = num % 60;
    if (num < 60 ) {
       // a = num % 60;
        // alert("0:" + num);
        e = "0:" + num;
    } else if (num % 60 === 0) {
        b = num / 60 
        // alert(b + ":" + a);
        e = b + ":" + a;
    
    } else if (num % 60 !== 0) {
        c = num - a;
        d = c / 60;
        // alert(d + ":" + a);
        e = d + ":" + a;
    }
    
  return e; 
         
}