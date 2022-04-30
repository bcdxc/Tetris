/**
 * 根据最小值和最大值得到该范围内的随机数（无法取到最大值）
 * @param min 
 * @param max 
 * @returns 
 */
export function getRandom(min: number, max: number) {
    const dec = max - min; // dec 再 +1，取到最大值
    return Math.floor(Math.random() * dec + min)
}