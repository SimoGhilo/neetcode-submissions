
class Solution {

    carFleet(target, position, speed) {
        // Pair positions and speeds together and sort by position descending
        let cars = position.map((pos, i) => [pos, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]); // Sort cars by position DESC

        let stack = [];

        for (let [pos, spd] of cars) {
            let time = (target - pos) / spd; // Time to reach the target

            // If the current car reaches the target **later** than the last fleet, it forms a new fleet
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }

        return stack.length;
    }
}
