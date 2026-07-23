class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;
        let lastRowIndex = matrix[0].length - 1;
        let targetRow = 0;

        if (matrix.length === 0 || matrix[0].length === 0) {
            return false;
        }

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (matrix[mid][0] === target) {
                return true;
            } else if (matrix[mid][0] > target && matrix[mid][lastRowIndex] > target) {
                right = mid - 1;
            } else if (matrix[mid][0] < target && matrix[mid][lastRowIndex] < target) {
                left = mid + 1;
            } else {
                targetRow = mid;
                break;
            }
        }

        let innerLeft = 0;
        let innerRight = matrix[0].length - 1;

        while (innerLeft <= innerRight) {
            let mid = Math.floor(innerLeft + (innerRight - innerLeft) / 2);
            if (matrix[targetRow][mid] > target) {
                innerRight = mid - 1;
            } else if (matrix[targetRow][mid] < target) {
                innerLeft = mid + 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
