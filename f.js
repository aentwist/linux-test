export function sum(...nums) {
    return nums.reduce((a, x) => x + a, 0);
}
