/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const year = new Date(date).getFullYear()
  const firstDay = new Date(`${year}-01-01`).getTime()
  const toDate = new Date(date).getTime()

  const diff = toDate - firstDay

  const dayMs = 24 * 60 * 60 * 1000

  const daysDiff = Math.round(diff / dayMs)

  return daysDiff + 1
};