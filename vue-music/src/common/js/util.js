function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle (arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandom(0, i)
    let n = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = n
  }
  return _arr
}

export function debounce (fun, delay) {
  const timer = null
  return function (...args) {
    if (!timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}
