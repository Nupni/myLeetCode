/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const result = {}

    for(let i = 0; i < this.length; i++) {
        const index = fn(this[i])
        const value = this[i]
        if(!result[index]) {
            result[index] = [value]
        } else {
            result[index].push(value)
        }  
    }
    
    return result
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */