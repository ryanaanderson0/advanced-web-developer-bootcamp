// ForEach Example:

//Definition: 
// function forEach(array, Callback) {
//     // To be implemented
// }

function forEach(array, callback) {
    for( var i = 0; i < array.length; i++) {
        callback(arr[i], i, array);
    }
};

var arr = [1,2,3,4,5,6];

forEach(arr, function(number) {
    console.log(number * 2);
})