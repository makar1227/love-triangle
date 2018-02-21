/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    for (let firstIndex = 0; firstIndex < preferences.length; firstIndex++) {
        if (preferences[firstIndex] > firstIndex+1 ) {

            let secondIndex = preferences[firstIndex];
            let secondValue = preferences[secondIndex-1];

            if (secondValue != secondIndex && secondValue != firstIndex+1 && secondValue > firstIndex+1) {
                if (preferences[secondValue-1] == firstIndex+1) {
                    count++;
                }
            }

        }
    }
    return count;
};