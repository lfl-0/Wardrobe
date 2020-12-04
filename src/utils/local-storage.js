function setItem (key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

function getItem (key) {
  const value = window.localStorage.getItem(key) || 'null'
  return JSON.parse(value)
}

export default {
  setItem,
  getItem
}
