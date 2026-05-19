class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let n = position.length;
        
        // Create an array of [position, time] pairs
        let cars = position.map((p, i) => [p, (target - p) / speed[i]]);
        
        // Sort cars by position in descending order
        cars.sort((a, b) => b[0] - a[0]);
        
        let fleets = 0;
        let lastTime = 0;
        
        // Loop through the cars
        for (let i = 0; i < n; i++) {
            let time = cars[i][1]; // Current car's time
            
            // If this car's time is greater than last fleet's time, it's a new fleet
            if (time > lastTime) {
                fleets++;
                lastTime = time; // Update last fleet's time
            }
        }
        
        return fleets;
    }
}
