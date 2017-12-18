export function addClass (el, cls) {
  if (hasClass(el, cls)) {
    return
  }
  console.log(el, cls)
  let newCls = el.className.split(' ')
  newCls.push(cls)
  el.className = newCls.join(' ')
}

export function hasClass (el, cls) {
  let reg = new RegExp(`(^|\\s)${cls}(\\s|$)`)
  return reg.test(el.className)
}
