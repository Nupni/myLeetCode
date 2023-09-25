Array.prototype.last = function() {
    if(this.length === 0) return -1

    let result
    for(n of this) {
        result = n
    }

    return result
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */