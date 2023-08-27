export default function <T>(keys:string, item: T) {
  const arrKeys = keys.split('.')
  if (Object.keys(item).length === 0) return ''
  return arrKeys.reduce((acc:any, key) => {
    return acc[key] || {}
  },item)
}
