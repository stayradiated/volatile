const lpad = (length, number) => {
  const output = number.toString().slice(0, length)
  const padsize = length - output.length
  const padding = Array.from({ length: padsize }).fill(' ').join('')
  return padding + output
}

const rpad = (length, number) => {
  const output = number.toString().slice(0, length)
  const padsize = length - output.length
  const padding = Array.from({ length: padsize }).fill(' ').join('')
  return output + padding
}

const drawChart = ({ width, values, colors }) => {
  const total = sum(values)
  return rpad(width, values.map((value, index) => {
    const length = Math.round(value / total * width)
    return Array.from({ length }).fill(colors[index] ?? '.').join('')
  }).join(''))
}

const fmtArray = (array) => {
  return array.map((n) => (Math.round(n * 100) / 100))
}

const fmtMap = (map) => {
  return Array.from(map.entries()).map(([key, value]) => {
    return `${key}=${value.toFixed(2)}`
  }).sort().join(', ')
}

const sum = (array) => {
  return array.reduce((acc, value) => acc  + value, 0)
}

const dcaOrders = [
  { id: 'a', goalFn: (day) => day * 50, color: '█' },
  { id: 'b', goalFn: (day) => day * 50, color: '░' },
  // { id: 'c', goalFn: (day) => day * 50, color: '▒' },
  // { id: 'd', goalFn: (day) => day * 50, color: '▓' },
]

const executeDcaOrder = ({ goal, currentAvailable, otherOrders }) => {
  const totalAvailable = sum(otherOrders.map((order) => order.bid)) + currentAvailable
  const totalGoal = sum(otherOrders.map((order) => order.goal)) + goal

  const ratio = Math.min(1, goal / totalGoal)
  const cap = ratio * totalAvailable

  const bid = Math.min(currentAvailable, goal, cap)

  return bid
}

const orders = new Map(dcaOrders.map((dcaOrder) => {
  return [dcaOrder.id, { bid: 0, goal: 0 }]
}))

let currentAvailable = 200
const SCREEN_HEIGHT = 54
const SCREEN_WIDTH = 60
const totalDays = Math.floor(SCREEN_HEIGHT / dcaOrders.length)

for (let day = 1; day <= totalDays; day++) {
  for (const dcaOrder of dcaOrders) {
    currentAvailable += Math.max(0, Math.round((Math.random() * 100) - 50))

    // cancel previous order, add funds back to currentAvailable
    const prevOrderAmount = orders.get(dcaOrder.id)
    currentAvailable += prevOrderAmount.bid

    const otherOrders = Array.from(orders.entries()).filter(([id]) => {
      return id !== dcaOrder.id
    }).map(([_id, value]) => value)
    const goal = dcaOrder.goalFn(day)
    const bid = executeDcaOrder({ goal, currentAvailable, otherOrders })
    const order = { goal, bid }

    if (order.bid < 0) {
      throw new Error(`Cannot bid ${order.bid}, must be >= 0.`)
    }
    if (order.bid > currentAvailable) {
      throw new Error(`Cannot bid ${order.bid}, must be <= ${currentAvailable}.`)
    }

    currentAvailable -= order.bid
    orders.set(dcaOrder.id, order)

  {
    const values = Array.from(orders.values())
      .map((order) => order.bid)
      .concat(currentAvailable)

    const colors = Array.from(dcaOrders.values())
      .map((order) => order.color)

    console.log(
      lpad(3, day),
      drawChart({ width: SCREEN_WIDTH, values, colors }),
      fmtArray(values),
    )
  }
  }

}
