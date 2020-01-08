setInterval(setClock4,1000)
const hourHand4 = document.querySelector('[data-hour-hand4]')
const minuteHand4 = document.querySelector('[data-minute-hand4]')
const secondHand4 = document.querySelector('[data-second-hand4]')

function setClock4() {
  var aestTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"})
  const currentDate = new Date(aestTime)
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand4, secondsRatio)
  setRotation(minuteHand4, minutesRatio)
  setRotation(hourHand4, hoursRatio)

}
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock4()
