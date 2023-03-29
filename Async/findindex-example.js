// findIndex Definition:
//
// function findIndex(array, callback) {
//   findIndex code to be implemented
// }
//
// function findIndex(curElement, curIndex, array) {
//   findIndex code to be implemented
// }


function findIndex(array, callback) {
    for(i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
    };

