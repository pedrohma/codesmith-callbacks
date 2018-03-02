// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
    var output = "";
    array.forEach(element => {
        output += (callback(element));
    });
    console.log(output);
}

// console.log(forEach([1, 2, 3], addTwo));

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    var newArray = [];
    array.forEach(element => {
        newArray.push(callback(element));
    });
    return newArray;
}

var add = function (a, b) { return a + b; }

//Extension 2
function reduce(array, callback, initialValue) {
    var value = 0;
    array.forEach(element => {
        value += callback(initialValue, element);
    });
    return value;
}

// console.log(reduce([4,1,3], add, 0));

function reduce(array1, array2) {
    var common = [];

    if(array1 != null){
        for(var  i = 0; i < array1.length; i++){
            if(array2 != null){
                for(var j = 0; j < array2.length; j++){
                    if(array1[i] == array2[j]){
                        common.push(array1[i]);
                    }
                }
            }
        }
    }

    // console.log(common);
    return common;
}

//Extension 3
function intersection(arrays) {
    
    var common = [];
    var newCommon = [];
    var commonArray = [];
    
    for (var i = 0; i < arrays.length; i++) {
        common = reduce(arrays[i], arrays[i + 1]);
        newCommon.push(common);
    }

    for(var j = 0; j < newCommon.length; j++){
        common = reduce(newCommon[j], newCommon[j + 1]);
        if(common.length > 1){
            commonArray.push(common);
        }
    }

    return commonArray[0];
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


