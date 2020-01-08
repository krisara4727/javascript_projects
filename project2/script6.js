setInterval(setClock6,1000)
const hourHand6 = document.querySelector('[data-hour-hand6]')
const minuteHand6 = document.querySelector('[data-minute-hand6]')
const secondHand6 = document.querySelector('[data-second-hand6]')

function setClock6() {
  var aestTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"})
  const currentDate = new Date(aestTime)
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand6, secondsRatio)
  setRotation(minuteHand6, minutesRatio)
  setRotation(hourHand6, hoursRatio)

}
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock6()
