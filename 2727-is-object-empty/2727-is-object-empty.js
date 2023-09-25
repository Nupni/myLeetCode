/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // return Object.keys(obj).length === 0
    for(n in obj) {
        return false
    }
    return true
};