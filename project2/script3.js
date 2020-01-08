setInterval(setClock3,1000)
const hourHand3 = document.querySelector('[data-hour-hand3]')
const minuteHand3 = document.querySelector('[data-minute-hand3]')
const secondHand3 = document.querySelector('[data-second-hand3]')

function setClock3() {
  var aestTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"})
  const currentDate = new Date(aestTime)
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand3, secondsRatio)
  setRotation(minuteHand3, minutesRatio)
  setRotation(hourHand3, hoursRatio)

}
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock3()
