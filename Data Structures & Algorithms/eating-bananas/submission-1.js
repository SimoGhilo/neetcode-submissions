class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Helper function to calculate total hours required to eat all bananas at rate 'k'
        function canEatAll(piles, k, h) {
            let hoursNeeded = 0;
            for (let pile of piles) {
                hoursNeeded += Math.ceil(pile / k); // Calculate hours for each pile
            }
            return hoursNeeded <= h; // Check if it fits within available hours
        }

        let left = 1; // Minimum possible eating speed (1 banana per hour)
        let right = Math.max(...piles); // Maximum possible eating speed

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            
            // Check if we can eat all bananas with speed 'mid'
            if (canEatAll(piles, mid, h)) {
                right = mid; // Try to find a smaller 'k'
            } else {
                left = mid + 1; // Increase 'k'
            }
        }

        return left; // 'left' will be the minimum valid eating speed
    }
}
