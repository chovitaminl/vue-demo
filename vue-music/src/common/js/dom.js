export function addClass (el, cls) {
  if (hasClass(el, cls)) {
    return
  }
  let newCls = el.className.split(' ')
  newCls.push(cls)
  el.className = newCls.join(' ')
}

export function hasClass (el, cls) {
  let reg = new RegExp(`(^|\\s)${cls}(\\s|$)`)
  return reg.test(el.className)
}

export function getData (el, name, val) {
  let prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
