class Solution {
    carFleet(target, position, speed) {

        const combined = position.map((p,i) => [p, speed[i]]);
        combined.sort((a,b) => b[0] - a[0]);

        const stack = [];
        let fleets = 0;

        for(const [p,s] of combined){
            const time = (target - p) / s;

            if(stack.length === 0){
                stack.push(time);
                fleets++;
            } else {
                const prevTime = stack[stack.length - 1];

                if(time > prevTime){
                    // new fleet
                    stack.push(time);
                    fleets++;
                }
                // else: joins existing fleet → do nothing
            }
        }

        return fleets;
    }
}