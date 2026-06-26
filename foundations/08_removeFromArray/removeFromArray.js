const removeFromArray = function(arr, ...items) {
    // for (const item of items) {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr.includes(item)) {
    //             arr.splice(arr.indexOf(item), 1);
    //         }
    //     }
    // }
    
    return arr.filter(num => !(items.includes(num)));
};

// Do not edit below this line
module.exports = removeFromArray;
