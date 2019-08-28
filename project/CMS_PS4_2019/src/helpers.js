import moment from 'moment'

export function getDaysInMonth(month, year) {
  // Here January is 1 based
  // Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate()
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate()
}

export function formatDate({date = new Date(), format = 'YYYY-MM-DD'}) {
  return moment(date).format(format)
}

export function toVND (number = 0) {
  let x = number
  x = x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'})
  return x
}

export function getPreviousMonth({date = new Date(), format = 'YYYY-MM-DD'}) {
  return moment(date).subtract(1, 'months').endOf('month').format(format)
}

