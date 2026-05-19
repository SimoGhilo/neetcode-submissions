class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let n1 = s1.length;
        let n2 = s2.length;

        let mapS1 = new Map();

        // for(const char of s1){
        //     if(!mapS1.has(char)){
        //         mapS1.set(char,1)
        //     } else {
        //         mapS1.set(char, mapS1.get(char) + 1)
        //     }
       // }

        let flag = false;
        
        for(let i = 0; i < n2; i++){
            let sub = s2.slice(i, i + n1);
            console.log(sub)
            if(sub.split('').sort().join('') == s1.split('').sort().join('')){
                flag = true;
            }
        }

        return flag;
    }
}
