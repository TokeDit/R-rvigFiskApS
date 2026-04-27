import { computed } from 'vue'

const MONTHS = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december']

function getISOWeek(date) {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7))
  const week1 = new Date(d.getFullYear(), 0, 4)
  return 1 + Math.round(((d - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7)
}

function getWeekBounds(weekNum) {
  const jan4 = new Date(2026, 0, 4)
  const jan4Day = (jan4.getDay() + 6) % 7
  const mon = new Date(jan4.getTime() - jan4Day * 86400000 + (weekNum - 1) * 7 * 86400000)
  const sun = new Date(mon.getTime() + 6 * 86400000)
  return { mon, sun }
}

export const currentWeek = computed(() => getISOWeek(new Date()))

export const weekRangeLabel = computed(() => {
  const { mon, sun } = getWeekBounds(currentWeek.value)
  if (mon.getMonth() === sun.getMonth()) {
    return `${mon.getDate()}–${sun.getDate()}. ${MONTHS[mon.getMonth()]}`
  }
  return `${mon.getDate()}. ${MONTHS[mon.getMonth()]} – ${sun.getDate()}. ${MONTHS[sun.getMonth()]}`
})
