class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        // Check for triplets that can potentially contribute to the target
        let flagA = false;
        let flagB = false;
        let flagC = false;

        for (const triplet of triplets) {
            let a = triplet[0];
            let b = triplet[1];
            let c = triplet[2];

            // The triplet must not exceed the target values
            if (a <= target[0] && b <= target[1] && c <= target[2]) {
                // If any triplet component matches the target, mark it as valid
                if (a === target[0]) flagA = true;
                if (b === target[1]) flagB = true;
                if (c === target[2]) flagC = true;
            }
        }

        // Return true if all parts of the target are covered
        return flagA && flagB && flagC;
    }
}
