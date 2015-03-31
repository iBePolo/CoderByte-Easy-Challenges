// 16_arith_geo
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var returned;

function ArithGeo(arr) {

    // code goes here  

    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1]) {

            a++;
        } else if (arr[i + 1] - arr[i] !== arr[i + 2] - arr[i + 1]) {

            b++;
        }



    }
    for (var j = arr.length - 2; j < arr.length; j++) {

        if (arr[j + 1] - arr[j] === arr[j] - arr[j - 1]) {

            c++;
        } else {
            d++;

        }
        if (b === 0 && d === 0) {
            returned = "Arithmetic";

        } else if (b !== 0 && d !== 0) {
            returned = "Geometric";


        }

        for (var k = 0; k < arr.length; k++) {
            if (typeof (arr[k]) !== "number") {
                f++;
                // alert("f " + f);

            }
        }
        if (f !== 0) {
            returned = -1;




        }
    }

    
    return returned;

}