const harga = [10, 7, 5, 8, 11, 9, 1]
const minArr = Math.min(...harga)
const maxArr = Math.max(...harga)
console.log(`${maxArr - minArr} (${minArr} dan ${maxArr})`);