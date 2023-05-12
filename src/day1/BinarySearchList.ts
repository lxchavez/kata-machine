export default function bs_list(haystack: number[], needle: number): boolean {

    if (!haystack || haystack.length <= 0) {
        return false;
    }

    let lo = 0;
    let hi = haystack.length;

    do {
        const mid_point = Math.floor(lo + (hi - lo) / 2);
        const cur_value = haystack[mid_point];
    
        if (cur_value === needle) {
            return true;
        } else if (cur_value < needle) {
            lo = mid_point + 1;
        } else {
            hi = mid_point;
        }
    } while (lo < hi);

    return false;
}
