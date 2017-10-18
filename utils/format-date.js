export default ts => {
  const date = new Date(ts)
  const hours = `0${date.getHours()}`.slice(-2)
  const mins = `0${date.getMinutes()}`.slice(-2)
  return `${hours}:${mins}`
}
