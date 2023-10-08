/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    for(let i = left; i <= right; i++){
        let check = false;
        for(let j = 0; j < ranges.length; j++){
            let first=ranges[j][0];
            let second=ranges[j][1];

            if(first<=i && i<=second){
                check=true;
                break;
            }
        }
        if(!check) return false;
    }
    return true;
};