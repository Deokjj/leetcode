/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length < p.length )
        return [];
    
    const patternSet = new Set(p.split(''));
    let start = 0, end = 0;
    const result = [];
    
    while(end < s.length){
        const set = new Set(patternSet);
        for(; end < start + p.length; end++){
            set.delete(s[end]);
        }
        if(set.size === 0){
            result.push(start);
        }
        start++;
        end = start;
    }
    
    return result;
};