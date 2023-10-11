/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {   
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        const row = {};
        const col = {};
        for (let j = 0; j < n; j++) {

            if (row[matrix[i][j]]) return false;

            if (col[matrix[j][i]]) return false;

            row[matrix[i][j]] = true;
            col[matrix[j][i]] = true;
        }

    }

    return true;
};