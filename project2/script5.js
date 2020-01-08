setInterval(setClock5,1000)
const hourHand5 = document.querySelector('[data-hour-hand5]')
const minuteHand5 = document.querySelector('[data-minute-hand5]')
const secondHand5 = document.querySelector('[data-second-hand5]')

function setClock5() {
  var aestTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
  const currentDate = new Date(aestTime)
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand5, secondsRatio)
  setRotation(minuteHand5, minutesRatio)
  setRotation(hourHand5, hoursRatio)

}
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock5()
